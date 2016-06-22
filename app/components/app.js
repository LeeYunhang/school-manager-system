/**
 * Created by mrcode on 16-6-22.
 */

let Locations = require('./Test.jsx')
import React from 'react'

/**
 * The Class is the component of the whole App
 * */
export default class App extends React.Component {
    constructor(){
        super();
    }

    render(){
        return <Locations/>;
    }
}

