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

export default combineReducers({
  appState: appStateReducer,
});
