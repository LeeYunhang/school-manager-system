/**
 * Created by zyc on 2016/6/24.
 */

    let qwest = require( "qwest");
     alt = require("../alt");

class getUserAction{
    //更新数据的方法
    updateLocations(locations) {
        return locations;
    }

    fetchLocations() {
        return dispatch => {
            dispatch();      //分发给绑定该事件的store

            qwest.get('localhost:3000/users', {async:true})
                .then(function(locations) {
                    this.updateLocations(locations)
                    alert("成功")
                });
        };
    }

    locationsFailed(errorMessage) {
        return errorMessage;
    }
}

module.exports = alt.createActions(getUserAction);