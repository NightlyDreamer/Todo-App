import React, {Component} from 'react';

import './item-status-filter.css';

export default class ItemStatusFilter extends Component {

    buttons = [
        { name: 'all', lable: 'All' },
        { name: 'active', lable: 'Active' },
        { name: 'done', lable: 'Done' }
    ];

    render() {
        const {filter, onFilterChang} = this.props;

        const buttons = this.buttons.map(({ name, lable }) => {
            const isActive = filter === name;
            const clazz = isActive ? 'btn-info' : 'btn-outline-secondary';
            return (
                <button type="button"
                    className={`btn ${clazz}`} 
                    key={name}
                    onClick={() => onFilterChang(name)}>
                    {lable}
                </button>
            );
        });

        return (
            <div className="btn-group">
                {buttons}
            </div>
        );
    };
}