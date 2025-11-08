import React, { useState } from "react";
import * as S from "./styles";
import type { TTodo } from "../../types/types";

interface IProps {
  onSubmit: (todo: TTodo) => void;
  initialData?: TTodo;
  buttonText?: string;
}

const TodoForm: React.FC<IProps> = ({
  onSubmit,
  initialData = { title: "", description: "" },
  buttonText = "Add Todo",
}) => {
  const [title, setTitle] = useState(initialData.title);
  const [description, setDescription] = useState(initialData.description);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim() && description.trim()) {
      onSubmit({ title: title.trim(), description: description.trim() });
      setTitle("");
      setDescription("");
    }
  };

  return (
    <S.Form onSubmit={handleSubmit}>
      <S.Title>Add New Todo</S.Title>
      <S.InputGroup>
        <S.Label htmlFor="title">Title</S.Label>
        <S.Input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter todo title"
          required
        />
      </S.InputGroup>
      <S.InputGroup>
        <S.Label htmlFor="description">Description</S.Label>
        <S.TextArea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter todo description"
          rows={4}
          required
        />
      </S.InputGroup>
      <S.Button type="submit">{buttonText}</S.Button>
    </S.Form>
  );
};

export default TodoForm;
