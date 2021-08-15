import React from 'react';

interface TodoListItemProps {
    todo: Todo;
    toggleTodo: ToggleTodo;
    deleteTodo: DeleteTodo;
    editTodo: EditTodo;
    getEditText: GetEditText;
    saveEditedTodo: SaveEditedTodo;
}

export const TodoListItem: React.FC<TodoListItemProps> = ({ todo, toggleTodo, deleteTodo, editTodo, getEditText, saveEditedTodo }) => {
    return todo.edit ? 
    <div>
        <input type="input" onChange={(e) => getEditText(todo.id, e.target.value)} />
        <span onClick={() => saveEditedTodo(todo)}>Save</span>
    </div> :

    <li>
        <label className={todo.complete ? "complete" : undefined }>
            <input type="checkbox" checked={todo.complete} onChange={() => toggleTodo(todo)} />
            {todo.text}
        </label>
        <span className="deleteButton" onClick={() => deleteTodo(todo)}>X</span>
        <span className="edit" onClick={() => editTodo(todo)}>Edit</span>
    </li>
    }

