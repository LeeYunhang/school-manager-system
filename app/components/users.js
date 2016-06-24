/**
 * Created by zyc on 2016/6/24.
 */
import React from 'react';
// import UsersStore from '../stores/UsersStore';
// import UsersActions from '../actions/UserActions';

let contentStyle={
    textAlign: 'center',
}

export default class Users extends React.Component{
    // componentDidMount(){
    //     UsersStore.listen(this.onChange.bind(this))
    //     UsersActions.fetchUsers()
    // }
    getInitialState() {
        this.setState({users: []})
    }

    onChange(state){
        this.setState(state)
    }

    render(){
        this.state.users = [{name: 'hello world'}]
        alert('error')
        return (<div style={contentStyle}>
            <ul>
                <li>jack</li>
            </ul>
        </div>);
    }
}