/**
 * Created by mrcode on 16-6-22.
 */
import React from 'react'
import Search from "./search"


let style = {
    headerStyle: {
        backgroundColor: 'red',
        width: '1000px',
        boxSizing: 'border',
        height: '160px',
        margin: '0 auto',
        padding: '0',
        overflow: 'hidden',
    },
    searchStyle: {
        margin:'100px auto 0px auto', 
        background:"gray",
    },
}

class Header extends React.Component{
    constructor(){
        super()
    }
    render(){
        return (<div style={style.headerStyle}>
          <Search style={style.searchStyle}/>
        </div>);
    }
}
export default Header

