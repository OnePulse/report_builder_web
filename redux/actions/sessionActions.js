import * as types from './actionTypes';
import HTTPService from '../../services/HTTPService';

export function loginSuccess() {

    return {type: types.LOG_IN_SUCCESS}
}

export function logInUser(credentials) {

    return function(dispatch) {

        // return HTTPService.login(credentials).then(response => {
        //
        //     sessionStorage.setItem('access_token', response.access_token);
        //     dispatch(loginSuccess());
        // }).catch(error => {
        //
        //     throw(error);
        // });

        //TODO: Remove this
        sessionStorage.setItem('access_token', 'test_token');
        dispatch(loginSuccess());
    };
}

export function logOutUser() {

    sessionStorage.removeItem('access_token');

    return {type: types.LOG_OUT}
}