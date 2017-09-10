import { combineReducers } from 'redux';
import { ACTION_TYPES } from '../constants/constants';

const initialAppState = {
    appIdle: false,
};

export const appStateReducer = (appState = initialAppState, action) => {
    switch (action.type) {
    case ACTION_TYPES.SET_APP_IDLE:
        return {
            ...appState,
            appIdle: true,
        };
    default:
        return appState;
    }
};

const initialUiState = {
    modalContent: null,
    modalIsClosing: false,
};

const uiStateReducer = (uiState = initialUiState, action) => {
    switch (action.type) {
    case ACTION_TYPES.OPEN_MODAL:
        return {
            ...uiState,
            modalIsClosing: false,
            modalContent: action.modalContent,
        };
    case ACTION_TYPES.CLOSE_MODAL:
        return {
            ...uiState,
            modalIsClosing: true,
        };
    case ACTION_TYPES.REMOVE_MODAL_CONTENT:
        return {
            ...uiState,
            modalIsClosing: false,
            modalContent: null,
        };
    default:
        return uiState;
    }
};

export default combineReducers({
    appState: appStateReducer,
    uiState: uiStateReducer,
});
