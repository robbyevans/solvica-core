import styled from "styled-components";

export const Form = styled.form`
  background: white;
  padding: 24px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 24px;
`;

export const Title = styled.h2`
  color: #333;
  margin-bottom: 20px;
  font-size: 1.5rem;
`;

export const InputGroup = styled.div`
  margin-bottom: 16px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 6px;
  color: #555;
  font-weight: 500;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px 12px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 14px;
  transition: border-color 0.2s;

  &:focus {
    outline: none;
    border-color: #4caf50;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 10px 12px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 14px;
  resize: vertical;
  transition: border-color 0.2s;

  &:focus {
    outline: none;
    border-color: #4caf50;
  }
`;

export const Button = styled.button`
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #45a049;
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;
