import React, { Component } from "react";
import { connect } from "react-redux";

class UserHeader extends Component {
  render() {
    const {user} = this.props;
    if (!user){
      return null;
    }
    return <div className="header">{user.name}</div>;
  }
}

export default connect(
  (state, ownProps) => ({
    user: state.users.find(user => user.id === ownProps.userId)
  })
)(UserHeader);
