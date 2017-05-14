import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './TextInput.scss';

const TextInput = (props) => {
  const wrapperClassName = classnames(
    props.className,
    styles.wrapper,
  );

  const inputClassName = classnames(
    props.inputClassName,
    styles.input,
  );

  const labelClassName = classnames(
    props.labelClassName,
    styles.label,
  );

  const onChange = (e) => {
    if (props.onChange) props.onChange(e.target.value);
  };

  return (
    <div className={wrapperClassName}>

      {props.labelText && (
        <label
          className={labelClassName}
          htmlFor={props.id}
        >
          {props.labelText}
        </label>
      )}

      <input
        className={inputClassName}
        type="text"
        id={props.id}
        value={props.value}
        name={props.name}
        placeholder={props.placeholder}
        autoComplete={props.autoComplete}
        autoFocus={props.autoFocus}
        disabled={props.disabled}

        onChange={onChange}
        onBlur={props.onBlur}
        onFocus={props.onFocus}
        onKeyDown={props.onKeyDown}
      />
    </div>
  );
};

TextInput.propTypes = {
  // input html attributes
  autoComplete: PropTypes.string,
  autoFocus: PropTypes.bool,
  disabled: PropTypes.bool,
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),

  // label
  labelText: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),

  // class names
  className: PropTypes.string,
  labelClassName: PropTypes.string,
  inputClassName: PropTypes.string,

  // functions
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onKeyDown: PropTypes.func,
};

export default TextInput;
