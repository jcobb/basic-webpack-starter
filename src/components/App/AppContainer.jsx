import { connect } from 'react-redux';
import App from './App';
import {
  setAppIdle,
} from '../../store/actions';

const mapStateToProps = state => ({
  appState: state.appState,
});

const AppContainer = connect(
  mapStateToProps,
  {
    setAppIdle,
  },
)(App);


export default AppContainer;
