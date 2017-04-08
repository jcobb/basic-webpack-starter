import React from 'react';
import ReactDom from 'react-dom';
import { AppContainer as HotLoader } from 'react-hot-loader';
import AppContainer from './components/App/AppContainer';
import createStore from './store/createStore';
import './scss/reset.scss';
import './scss/base.scss';

import {
  log,
} from './utils';

const store = createStore();

window.requestIdleCallback(() =>
  log.info(`Request idle (ms) ${Math.round(performance.now())}`));

const render = (Component) => {
  ReactDom.render(
    <HotLoader>
      <Component store={store} />
    </HotLoader>,
    document.getElementById('app'),
  );
};

render(AppContainer);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./components/App/AppContainer', () => {
    render(AppContainer);
  });
}
