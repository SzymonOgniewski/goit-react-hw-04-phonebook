import React from 'react';
import PropTypes from 'prop-types';
import css from './filter.module.css';
export const Filter = ({ filter, handleChange }) => {
  return (
    <>
      <label className={css.label} htmlFor="filter">
        Find contacts by name
      </label>

      <input
        className={css.input}
        onChange={handleChange}
        autoComplete="off"
        type="text"
        name="filter"
        value={filter}
        placeholder="search"
      />
    </>
  );
};
Filter.propTypes = {
  filter: PropTypes.string,
  handleChange: PropTypes.func,
};
