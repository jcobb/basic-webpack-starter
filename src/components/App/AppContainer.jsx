import { connect } from 'react-redux';
import App from './App';
import {
    setAppIdle,
    openModal,
} from '../../store/actions';

const mapStateToProps = state => ({
    appState: state.appState,
});

const AppContainer = connect(
    mapStateToProps,
    {
        setAppIdle,
        openModal,
    },
)(App);


export default AppContainer;
