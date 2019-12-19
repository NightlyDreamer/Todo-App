import React, { Component } from 'react';

import './add-item.css';

export default class AddItem extends Component {
    state = {
        lable: ''
    };

    onLableChange = (e) => {
        this.setState({
            lable: e.target.value.toUpperCase()
        });
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onItemAdd(this.state.lable);
        this.setState({
            lable: ''
        });
    };

    render() {
        
        return (
            <form className="Add-item d-flex"
                  onSubmit = {this.onSubmit}>
                <input type="text"
                       className="form-control"
                       onChange={this.onLableChange}
                       value={this.state.lable}
                       placeholder="What needs to be done ?">
                </input>
                <button className="btn btn-outline-secondary">
                    Add
                </button>
            </form>
        )
    };
};