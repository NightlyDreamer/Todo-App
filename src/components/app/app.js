import React, {Component} from 'react';

import './app.css';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import AddItem from '../add-item';

export default class App extends Component {

    maxId = 100;

    state = {
        todoData: [
            this.createTodoItem('Drink a Coffe'),
            this.createTodoItem('Build rect app'),
            this.createTodoItem('Sex')
        ],
        term: '',
        filter: 'active'
    };

    createTodoItem (lable){
        return{
            lable,
            important: false,
            done: false,
            id: this.maxId++
        }
    };

    toggelPropertys (arr, id, propName) {
        const idx = arr.findIndex((el) => el.id === id );

        const oldItem = arr[idx];
        const newItem = { ...oldItem,
            [propName]: !oldItem[propName]};
        
        return [
            ...arr.slice(0, idx),
            newItem, 
            ...arr.slice(idx + 1)
        ];
    };

    onToggelDone = (id) => {
        this.setState(({ todoData }) => {
            return {
                todoData: this.toggelPropertys(todoData, id, 'done')
            };
        });
    };

    onToggelImportant = (id) => {
        this.setState(({ todoData }) => {
            return {
                todoData: this.toggelPropertys(todoData, id, 'important')
            };
        });
    };

    deleteItem = (id) => {
        this.setState(({todoData}) => {
            const idx = todoData.findIndex((el) => el.id === id );

            const newArray = [
                ...todoData.slice(0, idx), 
                ...todoData.slice(idx + 1)
            ];

            return {
                todoData: newArray
            };
        });
    };

    addItem = (text) => {

        const newItem = this.createTodoItem(text);

        this.setState(({todoData}) =>{
            const newArr = [
                ...todoData, 
                newItem
            ];
            return {
                todoData: newArr
            };
        });
    };

    onSearchChange = (term) => {
        this.setState({term});
    };

    search (items, term) {
        if (term.length === 0){
            return items
        }

        return items.filter((item) => {
            return item.lable
                .toLowerCase()
                .indexOf(term.toLowerCase()) > -1;
        });
    };

    onFilterChang =(filter) => {
        this.setState({filter});
    };
    
    filter (items, filter) {
        switch (filter) {
            case 'all' : 
                return items;
            case 'active' :
                return items.filter((item) => !item.done);
            case 'done' :
                return items.filter((item) => item.done);
            default :
                return  items;
        }
    };

    render() {
        const { todoData, term, filter } = this.state;

        const visibleItems = this.filter(this.search(todoData, term), filter);

        const doneCount = todoData.filter((el) => el.done).length;

        const todoCount = todoData.length - doneCount;

        return (
            <div className="todo-app">
                <AppHeader toDo={todoCount} done={doneCount} />
                <div className="top-panel d-flex">
                    <SearchPanel
                        onSearchChange = {this.onSearchChange} />
                    <ItemStatusFilter 
                        filter={filter}
                        onFilterChang={this.onFilterChang}/>
                </div>
                <TodoList 
                    todos={visibleItems }
                    onDelete = {this.deleteItem}
                    onToggelDone = {this.onToggelDone}
                    onToggelImportant = {this.onToggelImportant} />
                <AddItem
                    onItemAdd = {this.addItem} />
            </div>
        );
    };
};