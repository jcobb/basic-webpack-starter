import * as firebase from 'firebase';
import { FIREBASE } from '../constants/constants';

const config = {
  apiKey: FIREBASE.API_KEY,
  authDomain: `${FIREBASE.PROJECT_ID}.firebaseapp.com`,
  databaseURL: `https://${FIREBASE.DATABASE_NAME}.firebaseio.com`,
};

firebase.initializeApp(config);

const database = firebase.database();

export default database;
