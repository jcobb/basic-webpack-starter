import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import styles from './App.css';

class App extends Component {
  componentDidMount() {
    this.props.setAppIdle();
  }

  render() {
    const className = this.props.appState.appIdle
      ? styles.appHasMounted
      : styles.appNotMounted;

    return (
      <Provider store={this.props.store}>
        <div className={className}>
          <h2>Hello, world</h2>
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
