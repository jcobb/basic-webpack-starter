import { connect } from 'react-redux';
import Modal from './Modal';
import {
    closeModal,
    removeModalContent,
} from '../../store/actions';

const mapStateToProps = state => ({
    uiState: state.uiState,
    appState: state.appState,
});

const ModalContainer = connect(
    mapStateToProps,
    {
        closeModal,
        removeModalContent,
    },
)(Modal);

export default ModalContainer;
