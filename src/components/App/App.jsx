import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import Page from '../Page/Page';
import {
  PAGES,
} from '../../constants/constants';

import styles from './App.scss';

class App extends Component {
  componentDidMount() {
    this.props.setAppIdle();

    // TODO implement this properly
    console.timeEnd('appIdle');
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
