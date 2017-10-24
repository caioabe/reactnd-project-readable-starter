import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

const component = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
)

ReactDOM.render(component, document.getElementById('root'))
registerServiceWorker();
