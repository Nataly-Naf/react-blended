import { createSelector } from 'reselect';

export const selectTodos = state => state.todos;
export const selectFilter = state => state.filter;

export const selectFilteredTodos = createSelector(
  [selectTodos, selectFilter],
  (todos, filter) =>
    todos.filter(todo => {
      if (todo.text.includes(filter)) {
        return todo;
      }
    })
);
