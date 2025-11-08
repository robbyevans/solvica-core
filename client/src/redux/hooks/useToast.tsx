import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch } from "../store/store";
import { hideToast } from "../slices/todoSlice";
import { selectToast } from "../selectors/todoSelector";

export const useToast = () => {
  const dispatch = useDispatch<AppDispatch>();
  const toast = useSelector(selectToast);

  useEffect(() => {
    if (toast.isVisible) {
      const timer = setTimeout(() => {
        dispatch(hideToast());
      }, 5000); // 5 seconds

      return () => clearTimeout(timer);
    }
  }, [toast.isVisible, dispatch]);

  const hide = () => {
    dispatch(hideToast());
  };

  return {
    toast,
    hide,
  };
};
