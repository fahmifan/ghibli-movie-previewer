import React, { Component } from 'react';
import Home from './containers/Home/Home';
import Header from './components/Header/Header';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Home />
      </div>
    );
  }
}

export default App;