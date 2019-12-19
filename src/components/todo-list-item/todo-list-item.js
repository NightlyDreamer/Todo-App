import React, {Component} from 'react';

import './todo-list-item.css';

export default class TodoListItem extends Component {

    render() {
        const { 
            lable,
            onDelete,
            onToggelDone,
            onToggelImportant, done, important } = this.props;

        let classNames = 'todo-list-item';
        
        if (done) {
            classNames += ' done';
        }
        if(important) {
            classNames += ' important';
        }

        return (
            <span className={classNames}>
                <span
                    className="todo-list-item-lable"
                    onClick={onToggelDone}>
                    { lable }
                </span>
                      
                <button type="button"
                      className="btn btn-outline-success btn-sm float-right icon"
                      onClick={onToggelImportant}>
                    <i className="fa fa-exclamation" />
                </button>
        
                <button type="button"
                        className="btn btn-outline-danger btn-sm float-right icon"
                        onClick={onDelete}>
                    <i className="fa fa-trash-o" />
                </button>
            </span>
            );
        };
}