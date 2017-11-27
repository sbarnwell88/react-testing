import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


const STATUS = {
    HOVERED: 'hovered',
    NORMAL: 'normal'
}

class LinkComponent extends Component {
    constructor() {
        super();

        this._onMouseEnter = this._onMouseEnter.bind(this);
        this._onMouseLeave = this._onMouseLeave.bind(this);

        this.state = {
            class: STATUS.NORMAL
        }
    }

    _onMouseEnter() {
        this.setState({class: STATUS.HOVERED});
    }
    
    _onMouseLeave() {
        this.setState({class: STATUS.NORMAL});
    }
    render() {
        return (
            <div>
                Hello from Link
                <Link to={'/'}
                    className={this.state.class}
                    href={this.props.page || '#'}
                    onMouseEnter={this._onMouseEnter}
                    onMouseLeave={this._onMouseLeave}
                >
                    {this.props.children}
                
                Home</Link>
            </div>
        );
    }
}

export default LinkComponent;