import React from 'react';
import LinkComponent from './components/LinkComponent';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router, Link } from "react-router-dom";


it('Link changes state when hovered', () => {
    const component = renderer.create(
        <Router>
        <Link to='http://localhost:3000/link'>Home</Link>
        </Router>
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  
    // manually trigger the callback
    tree.props.onMouseEnter;
    // re-rendering
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  
    // manually trigger the callback
    tree.props.onMouseLeave;
    // re-rendering
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

  });
  