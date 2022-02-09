import React from 'react';
import ReactDOM from 'react-dom';
import 'materialize-css';
import './styles/style.css'
import {AppRouter} from './routers/AppRouter';

ReactDOM.render(
  <AppRouter/>,
  document.getElementById('root')
);
