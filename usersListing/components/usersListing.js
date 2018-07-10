import React from 'react';
import { connect } from 'react-redux';
import {deleteUser} from '../actions/actions'


class UsersListing extends React.Component {
    constructor(){
        super();
        this.deleteUser = this.deleteUser.bind(this);
    }
    render() {
        return (
            <ul>
                {
                    this.getUserList()
                }
            </ul>
        )
    }
    deleteUser(userId) {
        debugger;
        this.props.dispatch(deleteUser({
            userId
        }));
    }
    getUserList() {
        const { usersList } = this.props;
        if (!usersList) {
            return null;
        }
        let self = this;
        return Object.keys(usersList).map(index => {
            return (
                <li key={index}>
                    <label>{usersList[index].fName}</label>
                    <label>{' ' + usersList[index].lName}</label>
                </li>

            )
        })
    }

}

const mapStateToProps = (state) => {
    return {
        usersList: state.usersList
    }
}
const ConnectedUsersListing = connect(mapStateToProps)(UsersListing);
export default ConnectedUsersListing;