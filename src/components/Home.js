import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class Home extends Component {
    render() {
        return (
            <div>
                Hello from Home
                <Link to={'/link'}>Link</Link>
            </div>
        );
    }
}

export default Home;