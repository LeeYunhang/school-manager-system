/**
 * Created by mrcode on 16-6-22.
 */
import React from 'react'
import Search from "./search"
import Nav from "./nav"


let style = {
    headerStyle: {
        backgroundColor: 'rgb(0, 188, 212)',
        width: '100%',
        margin: '0 auto',
    },
    navStyle:{
        display: 'inline-block',
        width:"62%",
        height:"80px"
    },
    searchStyle: {
        display: 'inline-block',
        width: '28%',
        paddingLeft:"100px",
    }
}


class Header extends React.Component{
    constructor(){
        super()
    }
    render(){
        return (<div style={style.headerStyle}>
            <div style={style.navStyle}><Nav/></div>
            <div style={style.searchStyle}><font>全站搜索：</font> <Search /></div>
        </div>);
    }
}
export default Header

