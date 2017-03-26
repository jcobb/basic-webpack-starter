import * as firebase from 'firebase';
import { ACTION_TYPES, FIREBASE } from '../constants/constants';
import database from '../services/firebase';

export const setAppIdle = () => ({
  type: ACTION_TYPES.SET_APP_IDLE,
});

export const setWelcomeMessage = message => ({
  type: ACTION_TYPES.SET_WELCOME_MESSAGE,
  message,
});

export const fetchWelcomeMessage = () => (dispatch) => {
  const welcomeRef = database.ref('welcome');

  welcomeRef.on('value', (snapshot) => {
    dispatch(setWelcomeMessage(snapshot.val()));
  });
};
