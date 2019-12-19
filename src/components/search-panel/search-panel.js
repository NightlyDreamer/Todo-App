import React, { Component } from 'react';
import './search-panel.css';

export default class SearchPanel extends Component {
    state = {
        term: ''
    };


    onSearchChange = (e) => {
        const term = e.target.value;
        this.setState({ term });
        this.props.onSearchChange(term);
    };

    render() {
        return (
            <form className="SearchPanel">
                <input type="text"
                        placeholder="type to search"
                        className="form-control search-input"
                        onChange={this.onSearchChange}
                        value={this.state.term}>
                </input>
            </form>
        );
    };
};
