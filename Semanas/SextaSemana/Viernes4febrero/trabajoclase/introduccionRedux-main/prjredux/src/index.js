import React from 'react';
import ReactDOM from 'react-dom';
import {AppRouters} from './routers/AppRouters';
import {Provider} from 'react-redux';
import {store} from './store/store';

ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
    <AppRouters />
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

