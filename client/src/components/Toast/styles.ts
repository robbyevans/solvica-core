import styled from "styled-components";
import type { ToastType } from "./Toast";

const getBackgroundColor = (type: ToastType): string => {
  switch (type) {
    case "success":
      return "#4caf50";
    case "error":
      return "#f44336";
    case "info":
      return "#2196f3";
    default:
      return "#2196f3";
  }
};

export const ToastContainer = styled.div<{ type: ToastType }>`
  position: fixed;
  top: 20px;
  right: 20px;
  background-color: ${({ type }) => getBackgroundColor(type)};
  color: white;
  padding: 16px 20px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  gap: 12px;
  z-index: 1001;
  animation: slideIn 0.3s ease-out;

  @keyframes slideIn {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
`;

export const Icon = styled.span`
  font-weight: bold;
  font-size: 18px;
`;

export const Message = styled.span`
  font-size: 14px;
  font-weight: 500;
`;
