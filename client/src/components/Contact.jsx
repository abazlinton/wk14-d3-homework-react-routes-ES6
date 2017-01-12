import React from 'react';

const Contact = function ({first_name, last_name}) {

  const templateString = `${first_name} ${last_name}`;

  return (
    <div>
      <h3>{templateString}</h3>
     </div>

  );
};

export default Contact;
