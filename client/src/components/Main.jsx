import React from 'react';
import Contacts from '../containers/Contacts.jsx';
import Home from './Home.jsx';
import {Link} from 'react-router';

class Main extends React.Component {

  render(){
    return(
      <div>
        <h4>FreeAgent API Test</h4>
        <ul>
          <li><Link to='/home' >Home</Link></li>
          <li><Link to='/contacts'>Contacts</Link></li>
          <li><Link to='/projects'>Projects</Link></li>
        </ul>
        {this.props.children}
      </div>
    )
  }

}
export default Main;
