/**
 * Created by zyc on 2016/6/24.
 */

let [qwest, alt] = [require("qwest"), require('../alt')];

class UserActions{
    fetchUsers(){
        return dispatch => {
            dispatch();

             qwest.get('/users', {async: true})
                 .then((xhr, response) => {
                     if(response.error){
                         console.log('不能获取到用户信息')
                     } else {
                         this.updateUsers(response.data)
                     }
                 })
                 .send()
        }
    }
    
    updateUsers(users){
        return users;
    }
}
module.exports = alt.createActions(UserActions);