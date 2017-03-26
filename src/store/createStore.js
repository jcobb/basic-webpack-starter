import { applyMiddleware, compose, createStore } from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from './reducers';
import { ENVIRONMENTS } from '../constants/constants';

const isDevelopment = process.env.NODE_ENV === ENVIRONMENTS.DEVELOPMENT;
let composeEnhancers = compose;

if (isDevelopment) {
  /* eslint-disable no-underscore-dangle */
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  /* eslint-enable no-underscore-dangle */
}

export default (data = {}) => (
  createStore(
    reducers,
    data,
    composeEnhancers(applyMiddleware(reduxThunk)),
  )
);
