import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import styles from './App.css';

class App extends Component {
  componentDidMount() {
    this.props.setAppIdle();
  }

  render() {
    const hasAppMounted = this.props.appState.appIdle;

    return (
      <Provider store={this.props.store}>
        <div className={styles.app}>
          <h2>Hello, world</h2>
          <p>Has app mounted? {`${hasAppMounted ? 'Yes' : 'No'}`}</p>
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
