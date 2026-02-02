import React, { Component } from "react";

class UserList extends Component {
  componentDidMount() {
    console.log("UserList mounted");
  }

  render() {
    return (
      <ul>
        {this.props.users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    );
  }
}

export default UserList;
