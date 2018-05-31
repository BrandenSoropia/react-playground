import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const employees = [
 { name: 'Gavin', birthday: new Date()},
 { name: 'Nathan', birthday: new Date()},
 { name: 'Zahra', birthday: new Date()},
 { name: 'Huy', birthday: new Date()},
 { name: 'Branden', birthday: new Date()},
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>😃</h1>
      </div>
    );
  }
}

export default App;
