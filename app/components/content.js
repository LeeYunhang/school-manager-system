/**
 * Created by zyc on 2016/6/23.
 */
import React from 'react';


let contentStyle = {
    backgroundColor: 'yellow',
    width: '1000px',
    height: '400px',
    margin: '0 auto',
    padding: '0',
    overflow: 'hidden',
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

