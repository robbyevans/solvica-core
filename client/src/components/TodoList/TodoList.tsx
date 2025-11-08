import React from "react";
import TodoCard from "../TodoCard/TodoCard";
import * as S from "./styles";
import type { TTodo } from "../../types/types";

interface IProps {
  todos: TTodo[];
  onTodoClick: (todo: TTodo) => void;
  onEditClick: (todo: TTodo) => void;
  onDeleteClick: (id: string) => void;
}

const TodoList: React.FC<IProps> = ({
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
