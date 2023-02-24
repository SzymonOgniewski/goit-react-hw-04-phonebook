import React from 'react';
import { Input } from './FormInput/FormInput';
import css from './form.module.css';
import PropTypes from 'prop-types';

export const Form = ({ handleChange, handleSubmit, name, number }) => {
  return (
    <div className={css.container}>
      <h2 className={css.title}>Phonebook</h2>
      <form onSubmit={handleSubmit} className={css.form}>
        <Input
          handleChange={handleChange}
          value={name}
          placeholder="Enter Name"
          type="text"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          inputName="name"
          label="Name"
          htmlFor="name"
        />
        <Input
          handleChange={handleChange}
          value={number}
          placeholder="Enter phone number"
          type="tel"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          inputName="number"
          label="Phone number"
          htmlFor="phone number"
        />
        <button className={css.formButton} type="submit">
          ADD CONTACT
        </button>
      </form>
    </div>
  );
};
Form.propTypes = {
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  name: PropTypes.string,
  number: PropTypes.string,
};
