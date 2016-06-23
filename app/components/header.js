/**
 * Created by mrcode on 16-6-22.
 */
import React from 'react'
import Search from "./search"
import Nav from "./nav"


let style = {
    headerStyle: {
        backgroundColor: 'red',
        width: '100%',
        boxSizing: 'border',
        height: '160px',
        margin: '0 auto',
        padding: '0',
        overflow: 'hidden',
    },
    navStyle:{
        width:"100%",
    },
    searchStyle: {
        margin:'100px auto',
        background:"gray",
    }
}

class Header extends React.Component{
    constructor(){
        super()
    }
    render(){
        return (<div style={style.headerStyle}>
            <div style={style.navStyle}><Nav/></div>
            <div> <Search style={style.searchStyle}/></div>
        </div>);
    }
}
export default Header

