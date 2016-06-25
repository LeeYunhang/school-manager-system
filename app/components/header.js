/**
 * Created by mrcode on 16-6-22.
 */
import React from 'react'
import Search from "./search"
import Nav from "./nav"


let style = {
    headerStyle: {
        width: '100%',
        margin: '0 auto',
    },
    navStyle:{
        display: 'inline-block',
        width:"100%",
        height:"80px"
    }
}


class Header extends React.Component{
    constructor(){
        super()
    }
    render(){
        return (<div style={style.headerStyle}>
            <div style={style.navStyle}><Nav/></div>
        </div>);
    }
}
export default Header

