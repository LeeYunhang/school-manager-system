/**
 * Created by zyc on 2016/6/23.
 */
import React from 'react';


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
        </div>);
    }
}
export default Content

