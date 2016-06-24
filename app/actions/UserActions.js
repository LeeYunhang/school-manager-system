/**
 * Created by zyc on 2016/6/24.
 */

let [qwest, alt] = [require("qwest"), require('../alt')];

class UserActions{
    fetchUsers(){
        return dispatch => {
            dispatch();

            // qwest.get('/users', {async: true})
            //     .then((e, xhr, response) => this.updateUsers([{name: 'liyunhang'}, {name: 'xiaosi'}]))
            //     .send()
            this.updateUsers([{name: 'liyunhang'}, {name: 'xiaosi'}])
        }
    }
    
    updateUsers(users){
        return users;
    }
}
module.exports = alt.createActions(UserActions);