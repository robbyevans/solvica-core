import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect } from "react";
import type { AppDispatch } from "../store/store";
import {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo,
} from "../slices/todoSlice";
import {
  selectTodos,
  selectTodosError,
  selectTodosLoading,
} from "../selectors/todoSelector";

export const useTodo = () => {
  const dispatch = useDispatch<AppDispatch>();
  const todos = useSelector(selectTodos);
  const loading = useSelector(selectTodosLoading);
  const error = useSelector(selectTodosError);

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  const handleCreateTodo = useCallback(
    async (todo: { title: string; description: string }) => {
      await dispatch(createTodo(todo));
    },
    [dispatch]
  );

  const handleUpdateTodo = useCallback(
    async (id: string, updates: { title?: string; description?: string }) => {
      await dispatch(updateTodo({ id, updates }));
    },
    [dispatch]
  );

  const handleDeleteTodo = useCallback(
    async (id: string) => {
      await dispatch(deleteTodo(id));
    },
    [dispatch]
  );

  return {
    todos,
    loading,
    error,
    getTodos: () => dispatch(getTodos()),
    handleCreateTodo,
    handleUpdateTodo,
    handleDeleteTodo,
  };
};
