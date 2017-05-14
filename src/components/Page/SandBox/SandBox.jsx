import React, { Component } from 'react';
import Icon from '../../Icon/Icon';
import Button from '../../Button/Button';
import Link from '../../Link/Link';
import TextInput from '../../TextInput/TextInput';

import {
  THEMES,
} from '../../../constants/constants';

import styles from './SandBox.scss';

class SandBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      val: '',
    };
  }

  render() {
    return (
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

        <Link
          href="http://google.com"
          className={styles.link}
        >
          Google.com
        </Link>

        <Link
          href="http://google.com"
          className={styles.link}
          display="underline"
        >
          Google.com
        </Link>

        <Link
          href="http://google.com"
          className={styles.link}
          display="button"
        >
          Google.com
        </Link>

        <TextInput
          id="test-input"
          labelText="Test Input"
          placeholder="Enter your text here"
          value={this.state.val}
          onChange={val => this.setState({ val })}
        />

      </div>
    );
  }
}

export default SandBox;
