import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import Page from '../Page/Page';

import {
  PAGES,
} from '../../constants/constants';

import {
  log,
} from '../../utils';

import styles from './App.scss';

class App extends Component {
  componentDidMount() {
    // at commit 49dbfc8 (5/4/2017): ~200ms
    log.info(`App interactive (ms) ${Math.round(performance.now())}`);

    this.props.setAppIdle();
  }

  render() {
    const className = this.props.appState.appIdle
      ? styles.appHasMounted
      : styles.appNotMounted;

    return (
      <Provider store={this.props.store}>
        <div className={className}>
          <Page page={PAGES.SANDBOX} />
        </div>
      </Provider>
    );
  }
}

App.propTypes = {
  // methods
  setAppIdle: PropTypes.func.isRequired,

  // props
  store: PropTypes.any.isRequired,
  appState: PropTypes.shape({
    appIdle: PropTypes.boolean,
  }).isRequired,
};

export default App;
