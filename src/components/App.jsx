import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { nanoid } from 'nanoid';
import { Form } from './form/Form';
import { Contacts } from './Contacts/Contacts';

const Msg = styled.h2`
  text-align: center;
  padding: 20px 0 0 0;
`;
export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [filter, setFilter] = useState('');

  const handleContactRemove = id => {
    const updatedContacts = contacts.filter(c => c.id !== id);
    setContacts(updatedContacts);
    localStorage.setItem('savedContacts', `${JSON.stringify(updatedContacts)}`);
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
      localStorage.setItem('savedContacts', `${JSON.stringify(addContact)}`);
    }
  };
  useEffect(() => {
    const savedContacts = JSON.parse(localStorage.getItem('savedContacts'));
    if (!savedContacts) return;
    setContacts(savedContacts);
  }, []);
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
