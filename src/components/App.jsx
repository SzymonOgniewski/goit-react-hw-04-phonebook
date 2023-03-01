import React, { useState, useEffect } from 'react';
import { Msg } from './message/Msg';
import { nanoid } from 'nanoid';
import { Form } from './form/Form';
import { Contacts } from './Contacts/Contacts';

export const App = () => {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('savedContacts')) || []
  );
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [filter, setFilter] = useState('');

  const handleContactRemove = id => {
    const updatedContacts = contacts.filter(c => c.id !== id);
    setContacts(updatedContacts);
  };

  const handleChange = e => {
    const { name, value } = e.target;
    if (name === 'name') {
      setName(value);
    }
    if (name === 'number') {
      setNumber(value);
    }
    if (name === 'filter') {
      setFilter(value);
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    const existing = contacts.find(c => c.name === name);
    if (existing) {
      alert(`${name} is already on your contact list`);
    } else {
      const contact = {
        id: nanoid(),
        name: name,
        number: number,
      };
      const addContact = [contact, ...contacts];
      setContacts(addContact);
      setName('');
      setNumber('');
    }
  };
  useEffect(() => {
    localStorage.setItem('savedContacts', `${JSON.stringify(contacts)}`);
  }, [contacts]);
  return (
    <>
      <Form
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        name={name}
        number={number}
      />
      {contacts.length === 0 ? (
        <>
          <Msg>
            There are no contacts to display. Add contacts to see the list.
          </Msg>
        </>
      ) : (
        <Contacts
          contactsArr={contacts}
          filter={filter}
          handleChange={handleChange}
          handleRemove={handleContactRemove}
        />
      )}
    </>
  );
};
