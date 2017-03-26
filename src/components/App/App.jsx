import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import styles from './App.css';

class App extends Component {
  componentDidMount() {
    this.props.setAppIdle();
    this.props.fetchWelcomeMessage();
  }

  render() {
    const className = this.props.appState.appIdle
      ? styles.appHasMounted
      : styles.appNotMounted;

    const message = this.props.uiState.message || 'Nothing';

    return (
      <Provider store={this.props.store}>
        <div className={className}>
          <h2>{message}, world</h2>
        </div>
      </Provider>
    );
  }
}

App.propTypes = {
  // methods
  setAppIdle: PropTypes.func.isRequired,
  fetchWelcomeMessage: PropTypes.func.isRequired,

  // props
  store: PropTypes.any.isRequired,
  appState: PropTypes.shape({
    appIdle: PropTypes.boolean,
  }).isRequired,
  uiState: PropTypes.shape({
    message: PropTypes.string,
  }).isRequired,
};

export default App;
