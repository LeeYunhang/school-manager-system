/**
 * Created by zyc on 2016/6/23.
 */
import React from 'react';


let contentStyle = {
    backgroundColor: 'yellow',
    width: '100%',
    height: '400px',
    textAlign: 'center',
}

class Content extends React.Component{
    constructor(){
        super()
    }
    render(){
        return (<div style={contentStyle}>
        </div>);
    }
}
export default Content

