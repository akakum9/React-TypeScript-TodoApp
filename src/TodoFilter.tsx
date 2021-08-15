import React from 'react';

interface TodoListFilter {
    currentFilter: CurrentFilter;
}

export const TodoFilter: React.FC<TodoListFilter> = ({ currentFilter }) => {
    return (
        <div className="filter">
            <span onClick={() => currentFilter('All')}>All</span>
            <span onClick={() => currentFilter('Complete')}>Completed</span>
            <span onClick={() => currentFilter('Incomplete')}>Incompleted</span>
        </div>
    )
}