/**
 * Created by zyc on 2016/6/23.
 */
import React from 'react';
import Users from "./users";
import {Link} from 'react-router'


let contentStyle = {
    backgroundColor: 'yellow',
    width: '100%',
    height: '450px',
    textAlign: 'center',
}

class Content extends React.Component{
    constructor(){
        super()
    }
    render(){
        return (<div id="content" style={contentStyle}>
            {this.props.children}
            <Link to="/page1">PAGE1</Link>
        </div>);
    }
}
export default Content

