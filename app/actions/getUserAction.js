/**
 * Created by zyc on 2016/6/24.
 */

let qwset=require( "qwest");
let alt =require("../alt");

class getUserAction{
    //更新数据的方法
    updateLocations(locations) {
        return locations;
    }
    fetchLocations() {
        return dispatch => {
            dispatch();      //分发给绑定该事件的store

            qwset.get('localhost:3000/user', {async:false})
                .then(function() {
                   alert("成功");
                })
                .send(function () {
                    alert("失败");
                });
        };
    }

    locationsFailed(errorMessage) {
        return errorMessage;
    }
}

module.exports = alt.createActions(LocationsAction);