import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Component
import Table from './table';
import Generictable from './generic-table'

const employees = [
 { name: 'Gavin', birthday: new Date()},
 { name: 'Nathan', birthday: new Date()},
 { name: 'Zahra', birthday: new Date()},
 { name: 'Huy', birthday: new Date()},
 { name: 'Branden', birthday: new Date()},
];

const employeesWithoutBirthdays = [
  { name: 'Gavin' },
  { name: 'Nathan' },
  { name: 'Zahra' },
  { name: 'Huy' },
  { name: 'Branden' }
 ];

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>😃</h1>
        <Table employees={employees} title={'HR Admin'} />
        <Table employees={employees} isLeagueAdmin={true} title={'CC Admin'}/>
        <Generictable data={employeesWithoutBirthdays} />
        <Generictable data={employees} />

      </div>
    );
  }
}

export default App;
