import React, { useState, useEffect } from "react";
import "./App.css";
import { TodoList } from "./TodoList";
import { TodoFilter } from "./TodoFilter";
import { AddTodoForm } from "./AddTodoForm";

const initialTodos: Array<Todo> = [
	{
		id: 0,
		text: "Hello",
		complete: false,
		edit: false,
	},
  {
		id: 1,
		text: "Hello world",
		complete: false,
		edit: false,
	},
];

const arrayToList = (array: Array<Todo>) => {
  let list = null;
  for (var i = array.length - 1; i >= 0; i--)
    list = {value: array[i], rest: list};
  return list;
}

console.log(arrayToList(initialTodos))

let id = 0;

export const App: React.FC = () => {
	const [todos, setTodos] = useState(initialTodos);
	const [filtered, setFiltered] = useState(todos);
	useEffect(() => {
		setFiltered(todos);
	}, [todos]);
	const toggleTodo: ToggleTodo = (selectedTodo) => {
		const newTodos = todos.map((todo) => {
			if (todo === selectedTodo) {
				return {
					...todo,
					complete: !todo.complete,
				};
			}
			return todo;
		});

		setTodos(newTodos);
	};

	const editTodo: EditTodo = (editCurrentTodo) => {
		const editTodo = todos.map((todo) => {
			if (todo === editCurrentTodo) {
				return {
					...todo,
					edit: !todo.edit,
				};
			}
			return todo;
		});

		setTodos(editTodo);
	};

	const addTodo: AddTodo = (newTodo) => {
		newTodo.trim() !== "" && setTodos([...todos, { id: id++, text: newTodo, complete: false, edit: false }]);
	};

	const deleteTodo: DeleteTodo = (currentTodo) => {
		setTodos(todos.filter((item) => item !== currentTodo));
	};

	const getEditText: GetEditText = (todoId, getEditedTodo) => {
		const editTodo = todos.map((todo) => {
			if (todo.id === todoId) {
				return {
					...todo,
					text: getEditedTodo,
					edit: true,
				};
			}
			return todo;
		});

		setTodos(editTodo);
	};

	const saveEditedTodo: SaveEditedTodo = (currentTodo) => {
		const saveEditedTodo = todos.map((todo) => {
			if (todo.id === currentTodo.id) {
				return {
					...todo,
					edit: false,
				};
			}
			return todo;
		});

		setTodos(saveEditedTodo);
	};

	const currentFilter: CurrentFilter = (filterTodo) => {
		let activeFilter = filterTodo;
		switch (activeFilter) {
			case "All":
				setFiltered(todos);
				return;
			case "Complete":
				setFiltered(todos.filter((t) => t.complete));
				return;
			case "Incomplete":
				setFiltered(todos.filter((t) => !t.complete));
				return;
			default:
				console.log("Defaultkkll");
		}
	};

	return (
		<React.Fragment>
			<div className="main">
				<h2>Todo App</h2>
				<div className="header">
					<TodoList todos={filtered} toggleTodo={toggleTodo} deleteTodo={deleteTodo} editTodo={editTodo} saveEditedTodo={saveEditedTodo} getEditText={getEditText} currentFilter={currentFilter} />
				</div>
				<div className="form">
					<AddTodoForm addTodo={addTodo} />
				</div>
				<div className="footer">
					<TodoFilter currentFilter={currentFilter} />
				</div>
			</div>
		</React.Fragment>
	);
};
