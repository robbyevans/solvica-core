import React from "react";
import * as S from "./styles";

interface Todo {
  id?: string;
  title: string;
  description: string;
}

interface TodoCardProps {
  todo: Todo;
  onClick: () => void;
  onEdit: () => void;
  onDelete: () => void;
}

const TodoCard: React.FC<TodoCardProps> = ({
  todo,
  onClick,
  onEdit,
  onDelete,
}) => {
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
      </S.Content>
      <S.Actions>
        <S.EditButton onClick={handleEditClick}>Edit</S.EditButton>
        <S.DeleteButton onClick={handleDeleteClick}>Delete</S.DeleteButton>
      </S.Actions>
    </S.Card>
  );
};

export default TodoCard;
