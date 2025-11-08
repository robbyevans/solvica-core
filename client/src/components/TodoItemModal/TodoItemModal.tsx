import React, { useState, useEffect } from "react";
import TodoForm from "../TodoForm/TodoForm";
import * as S from "./styles";

interface Todo {
  id?: string;
  title: string;
  description: string;
}

interface TodoItemModalProps {
  isOpen: boolean;
  todo: Todo | null;
  onClose: () => void;
  onEdit: (todo: Todo) => void;
  onDelete: () => void;
  isEditing?: boolean;
  onUpdate?: (todo: { title: string; description: string }) => void;
}

const TodoItemModal: React.FC<TodoItemModalProps> = ({
  isOpen,
  todo,
  onClose,
  onEdit,
  onDelete,
  isEditing = false,
  onUpdate,
}) => {
  const [isEditMode, setIsEditMode] = useState(isEditing);

  useEffect(() => {
    setIsEditMode(isEditing);
  }, [isEditing]);

  if (!isOpen || !todo) return null;

  const handleEdit = () => {
    onEdit(todo);
    setIsEditMode(true);
  };

  const handleUpdate = (updatedTodo: {
    title: string;
    description: string;
  }) => {
    if (onUpdate) {
      onUpdate(updatedTodo);
      setIsEditMode(false);
    }
  };

  const handleCancelEdit = () => {
    setIsEditMode(false);
  };

  return (
    <S.Overlay onClick={onClose}>
      <S.Modal onClick={(e) => e.stopPropagation()}>
        {isEditMode ? (
          <>
            <S.Header>
              <S.Title>Edit Todo</S.Title>
              <S.CloseButton onClick={onClose}>×</S.CloseButton>
            </S.Header>
            <S.Content>
              <TodoForm
                onSubmit={handleUpdate}
                initialData={todo}
                buttonText="Update Todo"
              />
              <S.CancelButton onClick={handleCancelEdit}>Cancel</S.CancelButton>
            </S.Content>
          </>
        ) : (
          <>
            <S.Header>
              <S.Title>{todo.title}</S.Title>
              <S.CloseButton onClick={onClose}>×</S.CloseButton>
            </S.Header>
            <S.Content>
              <S.Description>{todo.description}</S.Description>
              <S.Actions>
                <S.EditButton onClick={handleEdit}>Edit</S.EditButton>
                <S.DeleteButton onClick={onDelete}>Delete</S.DeleteButton>
              </S.Actions>
            </S.Content>
          </>
        )}
      </S.Modal>
    </S.Overlay>
  );
};

export default TodoItemModal;
