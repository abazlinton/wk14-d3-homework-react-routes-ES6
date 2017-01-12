import React from 'react';
import XmlHttpHelper from '../helpers/XmlHttpHelper';
import ApiToken from '../helpers/ApiToken';

class Projects extends React.Component {

  componentDidMount(){
    const url = "https://api.sandbox.freeagent.com/v2/projects";
    XmlHttpHelper.getWithAuthorizationToken(url, ApiToken, this.populateState)
  }

  populateState(projectsObject){
    console.log(projectsObject);
  }

  render(){
    return(
      <div>
        <h4> Projects </h4>
        <p> My Current Projects </p>
      </div>
    )
  }
}

export default Projects;
