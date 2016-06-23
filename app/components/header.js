/**
 * Created by mrcode on 16-6-22.
 */
import React from 'react'
import Nav from './nav';

let headerStyle = {
    backgroundColor: 'lightgray',
    width: '100%',
    height: '150px',
    margin: '0',
    padding: '0',
    overflow: 'hidden',
    // backgroundImage: `url(${img})`,
    textAlign: 'center',
}

class Header extends React.Component{
    constructor(){
        super()
    }

    render(){
        return <Nav/>;
    }
}

export default Header