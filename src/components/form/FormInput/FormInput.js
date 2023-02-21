import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './forminput.module.css';
export class Input extends Component {
  render() {
    const {
      handleChange,
      value,
      placeholder,
      type,
      pattern,
      title,
      inputName,
      label,
      htmlFor,
    } = this.props;
    return (
      <>
        <label className={css.label} htmlFor={htmlFor}>
          {label}
        </label>
        <input
          className={css.input}
          onChange={handleChange}
          value={value}
          autoComplete="off"
          placeholder={placeholder}
          type={type}
          name={inputName}
          pattern={pattern}
          title={title}
          required
        />
      </>
    );
  }
}

Input.propTypes = {
  handleChange: PropTypes.func,
  value: PropTypes.string,
  inputName: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  pattern: PropTypes.string,
  title: PropTypes.string,
  label: PropTypes.string,
  htmlFor: PropTypes.string,
};
