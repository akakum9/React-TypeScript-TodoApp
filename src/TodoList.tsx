import React from "react";
import { TodoListItem } from "./TodoListItem";

interface TodoListProps {
  todos: Array<Todo>;
  toggleTodo: ToggleTodo;
  deleteTodo: DeleteTodo;
  editTodo: EditTodo;
  getEditText: GetEditText;
  saveEditedTodo: SaveEditedTodo;
  currentFilter: CurrentFilter;
}

export const TodoList: React.FC<TodoListProps> = ({
  todos,
  toggleTodo,
  deleteTodo,
  editTodo,
  getEditText,
  saveEditedTodo,
  currentFilter
}) => {
  return (
    <ul>
      {todos.map((todo, i) => {
        return (
          <TodoListItem
            key={i}
            todo={todo}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
            saveEditedTodo={saveEditedTodo}
            getEditText={getEditText}
          />
        );
      })}
    </ul>
  );
};
