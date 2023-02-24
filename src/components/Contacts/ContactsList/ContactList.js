import React from 'react';
import PropTypes from 'prop-types';
import css from './contactlist.module.css';
export const ContactList = ({ contactsArr, filter, handleRemove }) => {
  const list = contactsArr
    .filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    )
    .map(contact => (
      <li key={contact.id} className={css.item}>
        <span className={css.data}>
          {contact.name}: {contact.number}
        </span>
        <button
          type="button"
          onClick={() => handleRemove(contact.id)}
          className={css.delBtn}
        >
          Delete
        </button>
      </li>
    ));

  return <ul className={css.list}>{list}</ul>;
};
ContactList.propTypes = {
  contactsArr: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
  filter: PropTypes.string,
};
