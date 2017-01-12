import React from 'react';
import XmlHttpHelper from '../helpers/XmlHttpHelper';
import ApiToken from '../helpers/ApiToken';

class Home extends React.Component{

  constructor(){
    super();
    this.state = {first_name: "Loading"}
    this.populateState = this.populateState.bind(this);
    // this.user = user;
  }

  componentDidMount(){
    const url = "https://api.sandbox.freeagent.com/v2/users/me";
    XmlHttpHelper.getWithAuthorizationToken(url, ApiToken, this.populateState)
  }

  populateState({user}){
    this.setState({first_name: user.first_name})
  }

  render(){
    return(
      <div>
        <h4> Welcome {this.state.first_name} </h4>
      </div>
    )
  }
}

export default Home;
