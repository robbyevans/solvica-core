import type { RootState } from "../store/store";

export const selectTodos = (state: RootState) => state.todos.todos;
export const selectTodosLoading = (state: RootState) => state.todos.loading;
export const selectTodosError = (state: RootState) => state.todos.error;
export const selectToast = (state: RootState) => state.todos.toast;
