import { connect } from 'react-redux';
import App from './App';
import {
  setAppIdle,
  fetchWelcomeMessage,
} from '../../store/actions';

const mapStateToProps = state => ({
  appState: state.appState,
  uiState: state.uiState,
});

const AppContainer = connect(
  mapStateToProps,
  {
    setAppIdle,
    fetchWelcomeMessage,
  },
)(App);


export default AppContainer;
