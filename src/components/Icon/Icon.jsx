import React, { PropTypes } from 'react';
import styles from './Icon.scss';
import {
  ICONS,
} from '../../constants/constants';

const Icon = props => (
  <div className={styles.icon}>
    <svg
      width={props.size}
      height={props.size}
      viewBox="0 0 64 64"
    >
      <path d={props.icon} />
    </svg>
  </div>
);

Icon.ICONS = ICONS;

Icon.defaultProps = {
  size: 22,
};

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  size: PropTypes.number,
};

export default Icon;
