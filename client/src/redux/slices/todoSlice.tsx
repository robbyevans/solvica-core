import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface Todo {
  id?: string;
  title: string;
  description: string;
}

const API_URL = "https://690ef361bd0fefc30a062d2a.mockapi.io/api/todos";

// --- Async Thunks ---
export const getTodos = createAsyncThunk("todos/getTodos", async () => {
  const res = await fetch(API_URL);
  if (!res.ok) throw new Error("Failed to fetch todos");
  return (await res.json()) as Todo[];
});

export const createTodo = createAsyncThunk(
  "todos/createTodo",
  async (todo: Omit<Todo, "id">, { rejectWithValue }) => {
    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(todo),
      });
      if (!res.ok) throw new Error("Failed to create todo");
      return (await res.json()) as Todo;
    } catch (error) {
      return rejectWithValue(
        error instanceof Error ? error.message : "Failed to create todo"
      );
    }
  }
);

export const updateTodo = createAsyncThunk(
  "todos/updateTodo",
  async (
    { id, updates }: { id: string; updates: Partial<Todo> },
    { rejectWithValue }
  ) => {
    try {
      const res = await fetch(`${API_URL}/${id}`, {
        method: "PUT", // Use PUT instead of PATCH for mockapi.io
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updates),
      });
      if (!res.ok) throw new Error("Failed to update todo");
      return (await res.json()) as Todo;
    } catch (error) {
      return rejectWithValue(
        error instanceof Error ? error.message : "Failed to update todo"
      );
    }
  }
);

export const deleteTodo = createAsyncThunk(
  "todos/deleteTodo",
  async (id: string, { rejectWithValue }) => {
    try {
      const res = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Failed to delete todo");
      return id;
    } catch (error) {
      return rejectWithValue(
        error instanceof Error ? error.message : "Failed to delete todo"
      );
    }
  }
);

// --- Slice ---
interface ToastState {
  message: string | null;
  type: "success" | "error" | "info";
  isVisible: boolean;
}

interface TodoState {
  todos: Todo[];
  loading: boolean;
  error: string | null;
  toast: ToastState;
}

const initialState: TodoState = {
  todos: [],
  loading: false,
  error: null,
  toast: {
    message: null,
    type: "info",
    isVisible: false,
  },
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    hideToast: (state) => {
      state.toast.isVisible = false;
      state.toast.message = null;
    },
    showToast: (
      state,
      action: PayloadAction<{
        message: string;
        type: "success" | "error" | "info";
      }>
    ) => {
      state.toast.message = action.payload.message;
      state.toast.type = action.payload.type;
      state.toast.isVisible = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTodos.pending, (state) => {
        state.loading = true;
      })
      .addCase(getTodos.fulfilled, (state, action: PayloadAction<Todo[]>) => {
        state.loading = false;
        state.todos = action.payload;
        state.toast = {
          message: "Todos loaded successfully!",
          type: "success",
          isVisible: true,
        };
      })
      .addCase(getTodos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch todos";
        state.toast = {
          message: "Failed to load todos",
          type: "error",
          isVisible: true,
        };
      })
      .addCase(createTodo.fulfilled, (state, action: PayloadAction<Todo>) => {
        state.todos.push(action.payload);
        state.toast = {
          message: "Todo created successfully!",
          type: "success",
          isVisible: true,
        };
      })
      .addCase(createTodo.rejected, (state, action) => {
        state.toast = {
          message: (action.payload as string) || "Failed to create todo",
          type: "error",
          isVisible: true,
        };
      })
      .addCase(updateTodo.fulfilled, (state, action: PayloadAction<Todo>) => {
        const index = state.todos.findIndex((t) => t.id === action.payload.id);
        if (index !== -1) state.todos[index] = action.payload;
        state.toast = {
          message: "Todo updated successfully!",
          type: "success",
          isVisible: true,
        };
      })
      .addCase(updateTodo.rejected, (state, action) => {
        state.toast = {
          message: (action.payload as string) || "Failed to update todo",
          type: "error",
          isVisible: true,
        };
      })
      .addCase(deleteTodo.fulfilled, (state, action: PayloadAction<string>) => {
        state.todos = state.todos.filter((t) => t.id !== action.payload);
        state.toast = {
          message: "Todo deleted successfully!",
          type: "success",
          isVisible: true,
        };
      })
      .addCase(deleteTodo.rejected, (state, action) => {
        state.toast = {
          message: (action.payload as string) || "Failed to delete todo",
          type: "error",
          isVisible: true,
        };
      });
  },
});

export const { hideToast, showToast } = todoSlice.actions;
export default todoSlice.reducer;
