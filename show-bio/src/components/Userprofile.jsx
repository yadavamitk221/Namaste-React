import React, { Component, useState } from 'react';
import './styles.css';

const user = {
  name: 'Jane Doe',
  bio: 'Frontend developer who loves React and coffee ☕️',
  image: 'https://do6gp1uxl3luu.cloudfront.net/question-webp/dummyUser.jpg'
};

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showBio: false
    }
  }

toggleBio = () => {
  this.setState(prevState => ({
      showBio: !prevState.showBio
    }))
  }
 
  render() {
    return (
      <div className="user-profile"> 
        <div >
          <img
            className="profile-img"
            src={user.image}
          >
          </img>
        </div>
        <h2>{user.name}</h2>

        <button onClick={this.toggleBio}>
          {this.state.showBio ? "Hide Bio" : "Show Bio"} 
        </button>
        {this.state.showBio && <p>{user.bio}</p>}
      </div>
    );
  }
}

export default UserProfile;
