const ADD_USER = 'ADD_USER';
const DEL_USER = 'DEL_USER';
const EDIT_USER = 'EDIT_USER';


export function addUser(value){
    return {
        type: ADD_USER,
        value: value,
    }
}
export function deleteUser(value){
    return {
        type: DEL_USER,
        value: value,
    }
}
export function editUser(value){
    return {
        type: EDIT_USER,
        value: value,
    }
}

