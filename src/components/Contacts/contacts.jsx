import PropTypes from 'prop-types';
import React from 'react';
import { ContactsItem } from './contactsItem';
import { Ul } from './contacts.styled';
const ContactList = ({ contacts, onDeleteContacts }) => {
  return (
    <Ul>
      {contacts.map(({ id, name, number }) => (
        <ContactsItem
          key={id}
          name={name}
          number={number}
          onDeleteContacts={onDeleteContacts}
          id={id}
        />
      ))}
    </Ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default ContactList;
