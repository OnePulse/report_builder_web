import * as types from '../actions/actionTypes';
import initialState from './initialState';
import history from '../../shared/History'

export default function sessionReducer(state = initialState.session, action) {

    switch(action.type) {

        case types.LOG_IN_SUCCESS:

            history.push('/dashboard');
            return !!sessionStorage.access_token;

        case types.LOG_OUT:

            history.push('/');
            return !!sessionStorage.access_token;

        default:

            return state;
    }
}