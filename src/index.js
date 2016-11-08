import React from 'react';
import ReactDom from 'react-dom';
import styles from './app.css';

const App = () => (
  <p className={styles.hello}>
    Hello, world
  </p>
);

ReactDom.render(<App />, document.getElementById('app'));
