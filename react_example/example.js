import React from 'react';
import ReactDOM from 'react-dom';

const TodoList = () => {
    const items = ['Drink Coffee', 'Built Awesome App'];
    return(
        <ul>
            <li>{ items[0] }</li>
            <li>{ items[1] }</li>
        </ul>
    );
};

const AppHeader = () =>{
    return <h1>My Todo List</h1>;
};

const SearchPanel = () => {
    const searchText = 'Type here to search' ;
    const searchStyle ={
        fontSize: '20px'
    };

    return <input
    style = {searchStyle} 
    placeholder={searchText}
    />;
};

const App = () => {

    // const isLoggedIn = false;      небольшая логика
    // const loginBox = <span>Log in plase</span>;
    // const welcomeBox = <span>Welcome Back</span>;

    // const value = '<script> alert(" ")</script>' защита от инекций
    return(
        <div>
            {/* { isLoggedIn ? welcomeBox : loginBox} */}
            {/* <span>{(new Date()).toString()}</span> */}

            {/* { value } */}
            
            <AppHeader />
            <SearchPanel />       
            <TodoList items ={['Item 1', 'Item 2']}/>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));