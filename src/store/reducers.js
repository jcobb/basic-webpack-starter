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
  message: '',
};

export const uiStateReducer = (uiState = initialUiState, action) => {
  switch (action.type) {
    case ACTION_TYPES.SET_WELCOME_MESSAGE:
      return {
        message: action.message,
      };
    default:
      return uiState;
  }
};

export default combineReducers({
  appState: appStateReducer,
  uiState: uiStateReducer,
});
