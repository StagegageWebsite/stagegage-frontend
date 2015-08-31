import React from 'react';

class UserProfiles extends React.Component {
  render() {
    return (
      <div>
        <h3> User Profiles </h3>
        <p>Username: {this.props.username} </p>

      <p> Bio: {this.props.bio} </p>

      </div>
    )
  }
};

UserProfiles.propTypes = {
  username: React.PropTypes.string.isRequired,
  bio: React.PropTypes.object.isRequired
}

export default UserProfiles;
