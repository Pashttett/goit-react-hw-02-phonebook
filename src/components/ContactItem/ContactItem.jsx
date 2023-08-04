import React from 'react';
import PropTypes from 'prop-types'; 

const ContactItem = ({ contact, onDeleteContact }) => {

  return (
    <ListItem>
      <ContactName>{contact.name}</ContactName>
      <DeleteButton onClick={() => onDeleteContact(contact.id)}>Delete</DeleteButton>
    </ListItem>
  );
};

export default ContactItem;

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
