/**
 * Created by zyc on 2016/6/24.
 */

let [alt, UserActions] = [require('../alt'), require('../actions/UserActions')];

class UsersStore{
    constructor(){
        this.users = [];
        
        this.bindListeners({
            handleUpdateUsers: UserActions.UPDATE_USERS,
            handleFetchUsers:UserActions.FETCH_USERS,
        })
    }
    
    handleUpdateUsers(users){
        console.log('控制台响应成功')
        this.users = users
    }
    
    handleFetchUsers(){
        this.users = JSON.stringify([])
    }
}

module.exports = alt.createStore(UsersStore, 'UsersStore')