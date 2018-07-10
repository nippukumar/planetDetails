import React from 'react';
import { connect } from 'react-redux';
import {deleteUser, editUser} from '../actions/actions'


class UsersListing extends React.Component {
    constructor(){
        super();
        this.deleteUser = this.deleteUser.bind(this);
        this.editUser = this.editUser.bind(this);
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
    deleteUser(e,userId) {
        this.props.dispatch(deleteUser({
            userId
        }));
    }
    editUser(e,userId) {
        this.props.dispatch(editUser({
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
                    <a href="#" onClick={(e) => this.deleteUser(e,index)}> Delete </a>
                    <a href="#" onClick={(e) => this.editUser(e,index)}> Edit </a>
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