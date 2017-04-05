import React, { PropTypes } from 'react';
import classnames from 'classnames';

import {
  THEMES,
} from '../../constants/constants';

import styles from './Link.scss';

const Link = (props) => {
  const displayClass = props.display && styles[props.display];
  const themeClass = props.theme && styles[props.theme];

  const className = classnames(
    styles.link,
    props.className,
    themeClass,
    displayClass,
  );

  return (
    <a
      id={props.id}
      className={className}
      href={props.href}
      target={props.external ? '_blank' : '_self'}
      aria-label={props.label}
      aria-describedby={props.describedby}
      disabled={props.disabled}
    >
      {props.children}
    </a>
  );
};

Link.defaultProps = {
  theme: THEMES.PRIMARY,
};

Link.propTypes = {
  // required
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.element,
    PropTypes.string,
  ]).isRequired,
  href: PropTypes.string.isRequired,

  // optional
  id: PropTypes.string,
  className: PropTypes.string,
  external: PropTypes.bool,
  describedby: PropTypes.string,
  label: PropTypes.string,
  disabled: PropTypes.bool,
  theme: PropTypes.oneOf(
    Object.keys(THEMES).map(theme => THEMES[theme]),
  ),
  display: PropTypes.oneOf([
    'underline',
    'button',
  ]),
};

export default Link;
