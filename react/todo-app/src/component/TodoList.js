import React from 'react';
import TodoListItem from './TodoListItem';
import './TodoList.scss';

const TodoList = ({todos, onREmove}) => {
    return (
        <div className="TodoList">
            {todos.map(todo => (
                <TodoListItem todo={todo}  key={todo.id} onREmove={onREmove}/>
            ))}
        </div>
    );
};

export default TodoList;