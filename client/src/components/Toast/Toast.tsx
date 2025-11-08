import React, { useEffect } from "react";
import * as S from "./styles";

export type ToastType = "success" | "error" | "info";

interface IProps {
  message: string;
  type: ToastType;
  isVisible: boolean;
  onHide: () => void;
  duration?: number;
}

const Toast: React.FC<IProps> = ({
  message,
  type,
  isVisible,
  onHide,
  duration = 3000,
}) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(onHide, duration);
      return () => clearTimeout(timer);
    }
  }, [isVisible, duration, onHide]);

  if (!isVisible) return null;

  return (
    <S.ToastContainer type={type}>
      <S.Icon>
        {type === "success" && "✓"}
        {type === "error" && "✕"}
        {type === "info" && "ℹ"}
      </S.Icon>
      <S.Message>{message}</S.Message>
    </S.ToastContainer>
  );
};

export default Toast;
