import React, { Component } from 'react';
import {render} from 'react-dom';

const USER_DATA = {
  name: "Noy Pearl",
  username: "60noypearl",
  image: "https://avatars2.githubusercontent.com/u/11259340?v=3"
}


class ProfilePic extends Component{
  render() {
    return (
      <img src={this.props.imgUrl} style={{height: 100,width: 100}}/>
    );
  }
}

class ProfileLink extends Component{
  render() {
    return (
      <div>
      <a href={'https://github.com/' + this.props.username}>
        {this.props.username}
      </a>
      </div>
  );
  }
}

class ProfileName extends Component{
  render() {
    return (
      <div>
        {this.props.name}
      </div>
    );
  }
}

class Avatar extends Component{
  render() {
    return (
      <div>
        <ProfileName name={this.props.user.name}/>
        <ProfilePic imgUrl = {this.props.user.image}/>
        <ProfileLink username={this.props.user.username}/>
      </div>
    );
  }
}


render(<Avatar user={USER_DATA}/>,document.getElementById('app'))
