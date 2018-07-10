import React from 'react';
import {addUser} from '../actions/actions'
import {connect} from 'react-redux';

class AddUser extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            fName: '',
            lName: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.dispatch(addUser({
            newUser: this.state
        }));
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    First Name:
              <input type="text" name="fName" value={this.state.fName} onChange={this.handleChange} />
                </label>
                <label>
                    Last Name:
              <input type="text" name="lName" value={this.state.lName} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }

}

const mapStateToProps = (state) => {
    return {}
}
const ConnectedAddUser = connect(mapStateToProps)(AddUser);
export default ConnectedAddUser;