import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main.jsx';
import Contacts from './containers/Contacts.jsx';
import Projects from './containers/Projects.jsx';
import Home from './components/Home.jsx';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

window.onload = () => {

  ReactDOM.render(
    <Router history={hashHistory}>
      <Route path='/' component={Main}>
        <IndexRoute component={Home} />
        <Route path='home' component={Home} />
        <Route path='contacts' component={Contacts} />
        <Route path='projects' component={Projects} />
      </Route>
    </Router>,
    document.getElementById('app')

  )
}
