import logo from './logo.svg';
import './App.css';
import PersonList from './PersonList'
import PersonEdit from './PersonEdit'
import PersonAdd from './PersonAdd'
import Nav from './Nav'
import './styles/App.css'
import './skeleton.css'
import React, { Component } from 'react';

class App extends Component {
  state = {
    people: [
      {firstName: 'Margaret', lastName: 'Hamilton', id: '81d6ff6c-10f4-4db0-88f2-1ebf789b7779'},
      {firstName: 'Donald', lastName: 'Knuth', id: 'f515b8de-5916-47db-9fa8-75efe4a5ebb2'}
    ],
    view: 'PersonList',
    selectedPerson: undefined
  }

  goToPersonEdit = (person) => {
    // TODO: Add code here
  }

  goToPersonAdd = () => {
    // TODO: Add code here
  }

  goHome = () => {
    // TODO: Add code here
  }

  changeFirstName = (event) => {
    // TODO: Add code here
  }

  changeLastName = (event) => {
   // TODO: Add code here
  }

  saveChanges = (updatedPerson) => {
    // TODO: Add code here
  }

  deletePerson = () => {
    // TODO: Add code here
  }

  saveNewPerson = (newPerson) => {
    // TODO: Add code here
  }

  render() {
    let currentView
    if (this.state.view === 'PersonList') {
      currentView =
        <PersonList people={this.state.people} goToPersonEdit={this.goToPersonEdit} goToPersonAdd={this.goToPersonAdd}/>
    } else if (this.state.view === 'PersonAdd') {
      currentView = <PersonAdd goHome={this.goHome} saveNewPerson={this.saveNewPerson}/>
    } else {
      currentView = <PersonEdit selectedPerson={this.state.selectedPerson}
                                saveChanges={this.saveChanges}
                                goHome={this.goHome}
                                deletePerson={this.deletePerson}/>
    }

    return (
      <div className="main">
        <Nav/>
        {currentView}
      </div>
    )
  }
}


export default App;
