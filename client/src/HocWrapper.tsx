import React, { useEffect } from "react";
import { useTodo } from "../src/redux/hooks/useTodo";
import { useToast } from "../src/redux/hooks/useToast";
import Toast from "../src/components/Toast/Toast";

interface HocWrapperProps {
  children: React.ReactNode;
}

const HocWrapper: React.FC<HocWrapperProps> = ({ children }) => {
  const { getTodos } = useTodo();
  const { toast, hide } = useToast();

  useEffect(() => {
    // Run getTodos when the app loads
    getTodos();
  }, []);

  return (
    <>
      {children}
      <Toast
        message={toast.message || ""}
        type={toast.type}
        isVisible={toast.isVisible}
        onHide={hide}
        duration={5000}
      />
    </>
  );
};

export default HocWrapper;
