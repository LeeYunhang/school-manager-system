/**
 * Created by mrcode on 16-6-22.
 */
import React from 'react'
import img from './pic2.jpg'

let headerStyle = {
    backgroundColor: 'lightgray',
    width: '100%',
    height: '150px',
    margin: '0',
    padding: '0',
    overflow: 'hidden',
    backgroundImage: `url(${img})`,
    textAlign: 'center',
}
class Header extends React.Component{
    constructor(){
        super()
    }

    render(){
        return <header style={headerStyle}>
            <h1>重庆理工大学 你好</h1>
        </header>;
    }
}

export default Header