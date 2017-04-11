import React, { Component } from 'react';
import PropTypes from 'prop-types';

class App extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
          <h2>Welcome to React Boiler</h2>
        <p >
          To get started, edit <code>src/components/App.js</code> or <code>src/components/Home.js</code> and save to reload.
        </p>
        <div>{this.props.children}</div>
      </div>
    );
  }
}

export default App;
