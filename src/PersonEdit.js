import React, {Component} from 'react'

class PersonEdit extends Component {

  constructor(props) {
    super(props)

    this.state = {
      firstName: props.selectedPerson.firstName,
      lastName: props.selectedPerson.lastName,
      id: props.selectedPerson.id
    }
  }

  changeFirstName = (event) => {
    // TODO: Add code here
  }

  changeLastName = (event) => {
    // TODO: Add code here
  }

  render() {
    return (
      <div className="PersonEdit">
        <span>Editing Person</span>
        <input type="text" name="firstName" value={this.state.firstName}
               onChange={this.changeFirstName}/>
        <input type="text" name="lastName" value={this.state.lastName}
               onChange={this.changeLastName}/>
        <div className="PersonEditBtns">
          <button className="button-primary" onClick={() => this.props.saveChanges(this.state)}>SAVE</button>
          <button className="button-primary" onClick={() => this.props.goHome()}>CANCEL</button>
          <button className="button-primary danger" onClick={this.props.deletePerson}>DELETE PERSON</button>
        </div>
      </div>
    )
  }
}

export default PersonEdit
