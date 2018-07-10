
const UserListReducer = (state = {}, action) => {
    let newState;
    switch (action.type) {
        case 'ADD_USER':
            newState = Object.assign({}, state);
            if (!newState.usersList) {
                newState.usersList = { 0: action.value.newUser }
            } else {
                const arrKeys = Object.keys(newState.usersList);
                const key = parseInt(arrKeys[(arrKeys.length) - 1]) + 1;
                let userList = {};
                Object.keys(newState.usersList).map(index => {
                    userList[index] = newState.usersList[index];
                });
                userList[key] = action.value.newUser;
                newState.usersList = userList;
            }

            return newState;
            break;

        case 'DEL_USER':
            newState = Object.assign({}, state);
            let userList = newState.usersList;
            delete userList[action.value.userId];
            newState.usersList = userList;

            return newState;
            break;

        default:
            return state;
            break;
    }
    return state;
}
export default UserListReducer;
