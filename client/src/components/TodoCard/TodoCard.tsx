import React from "react";
import * as S from "./styles";
import type { TTodo } from "../../types/types";

interface IProps {
  todo: TTodo;
  onClick: () => void;
  onEdit: () => void;
  onDelete: () => void;
}

const TodoCard: React.FC<IProps> = ({ todo, onClick, onEdit, onDelete }) => {
  const handleEditClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onEdit();
  };

  const handleDeleteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onDelete();
  };

  return (
    <S.Card onClick={onClick}>
      <S.Content>
        <S.Title>{todo.title}</S.Title>
        <S.Description>{todo.description}</S.Description>

        {/* ✅ Display due date if available */}
        {todo.dueDate && (
          <S.DueDate>
            Due Date:{" "}
            {new Date(todo.dueDate).toLocaleDateString(undefined, {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </S.DueDate>
        )}
      </S.Content>

      <S.Actions>
        <S.EditButton onClick={handleEditClick}>Edit</S.EditButton>
        <S.DeleteButton onClick={handleDeleteClick}>Delete</S.DeleteButton>
      </S.Actions>
    </S.Card>
  );
};

export default TodoCard;
