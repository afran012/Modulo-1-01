import React from 'react';
import ReactDOM from 'react-dom';
import {Counter} from './components/Counter';
import {Provider} from 'react-redux';
import {store} from './store/store';

ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
    <Counter />
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

