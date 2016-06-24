/**
 * Created by zyc on 2016/6/23.
 */

import React from 'react';

let style={
    footerStyle1:{
        backgroundColor: 'red',
        width: '100%',
        height: '10px',
        textAlign: 'center',
    },
    footerStyle2:{
        backgroundColor: 'red',
        marginTop:"3px",
        paddingTop:"7px",
        width: '100%',
        height: '60px',
        textAlign: 'center',
    }
}


class Footer extends React.Component{
    constructor(){
        super()
    }
    render(){
        return (<div><div style={style.footerStyle1}>
        </div>
            <div style={style.footerStyle2}>重庆理工大学计算机与科学院版权所有<br/>
            联系地址：重庆市巴南区红光大道69号（邮编：4000054）&nbsp;&nbsp;&nbsp;
                联系电话：（023）68667334
            </div>
        </div>);
    }
}

export default Footer