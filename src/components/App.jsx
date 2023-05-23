import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import Form from './Form/form';
import ContactList from './Contacts/contacts';
import Filter from './Filter/filter';
import { Div, H1, H2 } from './app.styled';

function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  const deletedContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  const formSubmitHandler = (name, number) => {
    if (contacts.find(contact => contact.name === name)) {
      alert(`${name} is already in contacts`);
      return;
    }
    if (contacts.find(contact => contact.number === number)) {
      alert(`Number ${number} already exists`);
      return;
    }
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    setContacts([...contacts, newContact]);
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const filterContacts = () => {
    const filterContactsList = contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });
    return filterContactsList;
  };

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <Div>
      <H1>Phonebook</H1>
      <Form onSubmit={formSubmitHandler} />
      <H2>Contacts</H2>
      <Filter value={filter} onChange={changeFilter} />
      <ContactList
        contacts={filterContacts()}
        onDeleteContacts={deletedContact}
      />
    </Div>
  );
}
export default App;
