
const UserListReducer = (state = {}, action) => {
    let newState;
    switch (action.type) {
        case 'ADD_USER':
            newState = Object.assign({}, state);
            if (!newState.usersList) {
                newState.usersList = { 0: action.value.newUser }
                return newState;
            } else {
                debugger;
                if(action.value.newUser.userId){
                    const userId = action.value.newUser.userId;
                    delete action.value.newUser.userId;
                    newState.usersList[userId] = action.value.newUser;
                    return newState;
                }
                const arrKeys = Object.keys(newState.usersList);
                const key = parseInt(arrKeys[(arrKeys.length) - 1]) + 1;
                let userList = {};
                Object.keys(newState.usersList).map(index => {
                    userList[index] = newState.usersList[index];
                });
                userList[key] = action.value.newUser;
                newState.usersList = userList;
                return newState;
            }

            return newState;
            break;

        case 'DEL_USER':
            debugger;
            newState = Object.assign({}, state);
            let userList = newState.usersList;
            delete userList[action.value.userId];
            newState.usersList = userList;

            return newState;
            break;

        case 'EDIT_USER':
            newState = Object.assign({}, state);
            let editUser = newState.usersList[action.value.userId];

            newState.editUser = { [action.value.userId] : editUser };

            return newState;
            break;

        default:
            return state;
            break;
    }
    return state;
}
export default UserListReducer;
