import { createSlice } from '@reduxjs/toolkit';

export const todoSlice = createSlice({
  name: 'blogData',
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo: (state, { payload }) => {
      state.todos = [...state.todos, payload];
    },
    deleteTodo: (state, { payload }) => {
      state.todos = state.todos.filter(todo => todo.id !== payload);
    },
    editTodo: (state, { payload }) => {
      state.todos = state.todos.map(todo =>
        payload.id === todo.id ? { ...todo, text: payload.text } : todo
      );
    },
  },
});

export const todoReducer = todoSlice.reducer;
export const { addTodo, deleteTodo, editTodo } = todoSlice.actions;
