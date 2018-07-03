import axios from "axios";

export function getPlanets() {
    return function (dispatch) {
        const apiURL = `https://swapi.co/api/planets/?page=1`;
        axios.get(apiURL)
            .then(
                response => dispatch({ type: 'GET_PLANETS_DETAIL', response })
            );
    }
}

export function searchByName(username, password, props) {
    return function (dispatch) {
        const apiURL = `https://swapi.co/api/people/?search=${username}`;
        axios.get(apiURL)
            .then((response) => {
                debugger;
                const users = response.data.results;
                let userExist = false;
                if (!users.length) {
                    dispatch({ type: 'NO_USER_USER_DATA', response });
                } else {
                    if (response.data.count == 1) {
                        if (users[0].name === username && users[0].birth_year === password) {
                            dispatch({ type: 'GET_USER_DATA', response });
                            userExist = true;
                        }
                    }
                    if (response.data.count > 1) {
                        users.forEach((user) => {
                            if (user.name === username && user.birth_year === password) {
                                dispatch({ type: 'GET_USER_DATA', response });
                                userExist = true;
                            }
                        });
                    }
                    if (userExist) {
                        props.history.push('/planetsDetail');
                    }
                    if (!userExist) {
                        dispatch({ type: 'PASSWORD_WRONG', response });
                    }
                }
            })
            .catch(
                err => dispatch({ type: 'FETCH_USERS_REJECTED', err })
            )
    }
}
