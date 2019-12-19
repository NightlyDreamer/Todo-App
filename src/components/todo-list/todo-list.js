import React from 'react';
import TodoListItem from '../todo-list-item';
import './todo-list.css';

const TodoList = ({
        todos,
        onDelete,
        onToggelDone,
        onToggelImportant}) => {

    const elements = todos.map((items) =>{

        const {id, ...itemProps} = items;

        return (
            <li key={id} className="list-group-item">
                <TodoListItem {
                     ... itemProps}
                        onDelete = {() => onDelete(id)}
                        onToggelDone = {() => onToggelDone(id)}
                        onToggelImportant = {() => onToggelImportant(id)} />
            </li>
        );
    });

    return(
        <ul className="list-group todo-list">
            {elements}
        </ul>
    );
};

export default TodoList;