import React, { Component } from 'react';
import Username from './components/Username';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Username onSubmit={username => alert(username)}/>
      </div>
    );
  }
}

export default App;
