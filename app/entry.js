/**
 * Created by mrcode on 16-6-20.
 */
'use strict';
require('./css/index.css');

import React from 'react';
import ReactDOM from 'react-dom';
import FloatingActionButtonExampleSimple from './components/component.jsx';



window.onload = ()=> {
    ReactDOM.render(<FloatingActionButtonExampleSimple/>, document.body)
    alert(11111123123)
}