/**
 * Created by mrcode on 16-6-20.
 */
require('./css/index.css');

import React from 'react';
import ReactDOM from 'react-dom';
 import App from './components/app.js';




window.onload = ()=> {
    ReactDOM.render(
       <App/>,document.getElementById("ccc"));

};
