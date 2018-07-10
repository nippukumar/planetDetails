import React from 'react';
import AddUser from './addUser';
import UsersListing from './usersListing'

export default class App extends React.Component {
    render() {
        return (
            <div>
                <AddUser />
                <UsersListing />
            </div>
        )
    }
}




