import * as types from './actionTypes';
import HTTPService from '../../services/HTTPService';

export function loginSuccess() {

    return {type: types.LOG_IN_SUCCESS}
}

export function logoutSuccess() {

    return {type: types.LOG_OUT}
}

export function logInUser(credentials) {

    return function(dispatch) {

        return HTTPService.login(credentials).then(response => {

            sessionStorage.setItem('access_token', response.access_token);
            dispatch(loginSuccess());
        }).catch(error => {

            throw(error);
        });
    };
}

export function logOutUser() {

    return function(dispatch) {

        return HTTPService.logout().then(response => {

            sessionStorage.removeItem('access_token');
            dispatch(logoutSuccess());
        }).catch(error => {

            throw(error);
        });
    };
}