import React from 'react';
import Icon from '../../Icon/Icon';
import Button from '../../Button/Button';

import {
  THEMES,
} from '../../../constants/constants';

import styles from './SandBox.scss';

const SandBox = () => (
  <div className={styles.sandbox}>

    <Button
      label="Twitter"
      onClick={() => {}}
      rounded
    >
      <Icon icon={Icon.ICONS.TWITTER} size={28} />
    </Button>

    <Button
      label="Home"
      theme={THEMES.LIGHT}
      onClick={() => {}}
      rounded
    >
      <Icon icon={Icon.ICONS.HOME} size={28} />
    </Button>

    <Button
      label="Rocket"
      theme={THEMES.DARK}
      onClick={() => {}}
      rounded
    >
      <Icon icon={Icon.ICONS.ROCKET} size={28} />
    </Button>

    <Button
      label="Rocket"
      theme={THEMES.NONE}
      onClick={() => {}}
      rounded
    >
      <Icon icon={Icon.ICONS.REFRESH} size={28} />
    </Button>

  </div>
);

export default SandBox;
