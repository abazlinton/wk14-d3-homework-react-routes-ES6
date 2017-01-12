import React from 'react';
import XmlHttpHelper from '../helpers/XmlHttpHelper';
import ApiToken from '../helpers/ApiToken';
import Contact from '../components/Contact.jsx'

class Contacts extends React.Component {

  constructor(){
    super();
    this.state = {contacts: []};
    this.populateState = this.populateState.bind(this);
  }

  componentDidMount(){
    const url = "https://api.sandbox.freeagent.com/v2/contacts";
    XmlHttpHelper.getWithAuthorizationToken(url, ApiToken, this.populateState)
  }

  populateState( resultObject ){
    this.setState({contacts: resultObject.contacts})
  }

  render() {
    const contactsComponents = this.state.contacts.map(function(contact){
      return (
        <Contact
          first_name = {contact.first_name}
          last_name = {contact.last_name}
          key = {contact.url}>
        </Contact>
      )
    });

    return (
      <div className='comment-list'>
        {contactsComponents}
      </div>
    );
  }
}

export default Contacts;
