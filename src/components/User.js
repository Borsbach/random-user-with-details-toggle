import React, { Component } from 'react';
import Details from './Details'

class User extends Component {
  state = {
    show: false
  }

  handleClick = () => {
    this.setState({ show: !this.state.show })
  }


  
  render() {
    return (
      <div className='users-containers'>
        <img src={this.props.user.picture.medium} />
        <br />
        User: {`${this.props.user.name.first.toUpperCase()} ${this.props.user.name.last.toUpperCase()}`}
        <br />
        <button onClick={this.handleClick}>{this.state.show ? "Hide the details" : "Show more details"}</button>
        <br />
        {this.state.show ? <Details 
        city={this.props.user.location.city}
        age={this.props.user.dob.age}
        phone={this.props.user.phone}
        email={this.props.user.email}
        password={this.props.user.login.password}
        /> : null }
      </div>
    )
  }
}

export default User