import React, { Component } from 'react';
import Home from './Home';

class App extends Component {
  render() {
    return (
      <div>
          <h2>Welcome to React Simple</h2>
        <p >
          To get started, edit <code>src/components/App.js</code> or <code>src/components/Home.js</code> and save to reload.
        </p>
        <Home />
      </div>
    );
  }
}

export default App;
