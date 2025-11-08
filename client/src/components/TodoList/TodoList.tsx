import React from "react";
import TodoCard from "../TodoCard/TodoCard";
import * as S from "./styles";

interface Todo {
  id?: string;
  title: string;
  description: string;
}

interface TodoListProps {
  todos: Todo[];
  onTodoClick: (todo: Todo) => void;
  onEditClick: (todo: Todo) => void;
  onDeleteClick: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({
  todos,
  onTodoClick,
  onEditClick,
  onDeleteClick,
}) => {
  return (
    <S.Container>
      <S.Title>Todo List</S.Title>
      <S.List>
        {todos.map((todo) => (
          <TodoCard
            key={todo.id}
            todo={todo}
            onClick={() => onTodoClick(todo)}
            onEdit={() => onEditClick(todo)}
            onDelete={() => todo.id && onDeleteClick(todo.id)}
          />
        ))}
      </S.List>
    </S.Container>
  );
};

export default TodoList;
