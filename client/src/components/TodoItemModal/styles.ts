import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const Modal = styled.div`
  background: white;
  border-radius: 12px;
  padding: 0;
  max-width: 600px;
  width: 90%;
  max-height: 80vh;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 24px;
  border-bottom: 1px solid #e0e0e0;
  background-color: #f8f9fa;
`;

export const Title = styled.h2`
  margin: 0;
  color: #333;
  font-size: 24px;
  font-weight: 600;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 28px;
  cursor: pointer;
  color: #666;
  padding: 0;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;

  &:hover {
    background-color: #e0e0e0;
    color: #333;
  }
`;

export const Content = styled.div`
  padding: 24px;
`;

export const Description = styled.p`
  color: #666;
  font-size: 16px;
  line-height: 1.6;
  margin: 0 0 20px 0;
  white-space: pre-wrap;
`;

export const Actions = styled.div`
  display: flex;
  gap: 12px;
  justify-content: flex-end;
`;

export const EditButton = styled.button`
  background-color: #ffc107;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 6px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #e0a800;
  }
`;

export const DeleteButton = styled.button`
  background-color: #dc3545;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 6px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #c82333;
  }
`;

export const CancelButton = styled.button`
  background-color: #6c757d;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 6px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.2s;
  margin-top: 12px;

  &:hover {
    background-color: #5a6268;
  }
`;
