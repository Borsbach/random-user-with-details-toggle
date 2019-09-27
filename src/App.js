import React, { Component } from "react";
import "./App.css";
import User from "./components/User";

class App extends Component {
  state = {
    randomUsers: []
  };

  componentDidMount() {
    fetch("https://randomuser.me/api/?results=60")
      .then(res => res.json())
      .then(users => this.setState({ randomUsers: users.results }))
      .catch(error => console.log("parsing failed", error));
  }

  render() {
    return (
      <div className='container'>
        {this.state.randomUsers.map(u => {
          return <User user={u} />;
        })}
      </div>
    );
  }
}


export default App;
