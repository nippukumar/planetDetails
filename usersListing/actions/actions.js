const ADD_USER = 'ADD_USER';
const DEL_USER = 'DEL_USER';


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
