/**
 * Created by mrcode on 16-6-20.
 */
'use strict';

require('./css/index.css');
import React from 'react';
import ReactDOM from 'react-dom';

class World extends React.Component {
    render() {
        return <h1>World</h1>;
    }
}

window.onload = function () {
    ReactDOM.render(<World/>, document.body);
}



