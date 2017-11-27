import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import LinkComponent from './components/LinkComponent';
import Home from './components/Home';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Router>
          <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/link" component={LinkComponent} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
