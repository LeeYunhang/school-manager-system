/**
 * Created by zyc on 2016/6/24.
 */
import React from 'react';
import UsersStore from '../stores/UsersStore';
import UsersActions from '../actions/UserActions';

let contentStyle={
    textAlign: 'center',
}

export default class Users extends React.Component{
     componentDidMount(){
         UsersStore.listen(this.onChange.bind(this))
         UsersActions.fetchUsers()
     }

    componentWillMount(){
         this.setState({users: []})
    }

    constructor(){
        super()
    }

    onChange(state){
        let users1 = [],
            data = JSON.parse(state.users)

        for(let i = 0; i < data.length; ++i){
            users1[i] = {name: data[i].name}
        }

        this.setState({users: users1})
        console.log(users1)
        this.render()
    }

    get users(){return this._users}
    set users(value){this._users = value}

    render(){
        let users = this.users
        return (<div style={contentStyle}>
            <ul>
                <li>jack</li>
                {this.state.users.map(user => {return <li>{user.name}</li>;})}
            </ul>
        </div>);
    }
}