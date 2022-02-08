import React, {Component} from 'react'

class PersonAdd extends Component {

  constructor(props) {
    super(props)

    this.state = {
      firstName: '',
      lastName: '',
      id: ''
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
      <div className="PersonAdd">
        <span>Add a Person</span>
        <label htmlFor="firstName">First Name</label>
        <input type="text" name="firstName" value={this.state.firstName}
               id="firstName"
               onChange={this.changeFirstName}/>
        <label htmlFor="lastName">Last Name</label>
        <input type="text" name="lastName" value={this.state.lastName}
               id="lastName"
               onChange={this.changeLastName}/>
        <div className="PersonAddBtns">
          <button className="button-primary" onClick={() => this.props.saveNewPerson(this.state)}>SAVE</button>
          <button className="button-primary" onClick={() => this.props.goHome()}>CANCEL</button>
        </div>
      </div>
    )
  }
}

export default PersonAdd
