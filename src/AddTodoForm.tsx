import React, { useState, ChangeEvent, FormEvent } from 'react';

interface AddTodoFormProps {
    addTodo: (newTodo: string) => void;
}

export const AddTodoForm: React.FC<AddTodoFormProps> = ({ addTodo }) => {
    const [newTodo, setNewTodo] = useState("");

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTodo(e.target.value);
    }

    const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        addTodo(newTodo);
        if(newTodo.length === 0) return;
        setNewTodo("");
    }

    return (
        <form >
           <input type="text" value={newTodo} onChange={handleChange}/>
           <button type="submit" onClick={handleSubmit}>Add Todo</button>
        </form>
    )
}