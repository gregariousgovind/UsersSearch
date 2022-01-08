import React, { Component } from 'react';
import { render } from 'react-dom';
import UserFinder from './src/components/UserFinder';
import './style.css';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <UserFinder />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
