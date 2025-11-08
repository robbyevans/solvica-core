import React, { useState } from "react";
import { useTodo } from "../redux/hooks/useTodo";
import TodoList from "../components/TodoList/TodoList";
import TodoForm from "../components/TodoForm/TodoForm";
import TodoItemModal from "../components/TodoItemModal/TodoItemModal";
import type { Todo } from "../redux/slices/todoSlice";

const TodoContainer: React.FC = () => {
  const {
    todos,
    loading,
    handleCreateTodo,
    handleUpdateTodo,
    handleDeleteTodo,
  } = useTodo();

  const [selectedTodo, setSelectedTodo] = useState<Todo | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTodo, setEditingTodo] = useState<Todo | null>(null);

  const handleTodoClick = (todo: Todo) => {
    setSelectedTodo(todo);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedTodo(null);
    setEditingTodo(null);
  };

  const handleCreate = (todoData: { title: string; description: string }) => {
    handleCreateTodo(todoData);
  };

  const handleEdit = (todo: Todo) => {
    setEditingTodo(todo);
    setIsModalOpen(true);
  };

  const handleUpdate = (todoData: { title: string; description: string }) => {
    if (!editingTodo?.id) return;
    handleUpdateTodo(editingTodo.id, todoData);
    handleCloseModal();
  };

  const handleDelete = (id: string) => {
    handleDeleteTodo(id);
    handleCloseModal();
  };

  const handleDeleteInModal = () => {
    if (selectedTodo?.id) {
      handleDelete(selectedTodo.id);
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <TodoForm onSubmit={handleCreate} buttonText="Add Todo" />

      <TodoList
        todos={todos}
        onTodoClick={handleTodoClick}
        onEditClick={handleEdit}
        onDeleteClick={handleDelete}
      />

      <TodoItemModal
        isOpen={isModalOpen}
        todo={selectedTodo || editingTodo}
        onClose={handleCloseModal}
        onEdit={handleEdit}
        onDelete={handleDeleteInModal}
        isEditing={!!editingTodo}
        onUpdate={handleUpdate}
      />
    </div>
  );
};

export default TodoContainer;
