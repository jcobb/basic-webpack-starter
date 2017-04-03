import React from 'react';
import ReactDom from 'react-dom';
import { AppContainer as HotLoader } from 'react-hot-loader';
import AppContainer from './components/App/AppContainer';
import createStore from './store/createStore';
import './scss/reset.scss';

const store = createStore();

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
