import request from '../shared/Request'
import legacyRequest from '../shared/LegacyRequest'
import {constants} from '../shared/Constants'

function requestHeaders() {

    let bearer = 'Bearer ';
    let token = typeof sessionStorage.access_token === 'undefined' ? constants.APP_TOKEN : sessionStorage.access_token;

    return {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': bearer.concat(token)
    }
}

function get(type) {
    return request({
        url:    type,
        method: 'GET',
        headers: requestHeaders(),
    });
}

function getItem(type, id) {
    return request({
        url:    type + '/' + id,
        method: 'GET',
        headers: requestHeaders()
    });
}

function create(type) {
    return request({
        url:    type + '/create',
        method: 'POST',
        headers: requestHeaders(),
        data:   {}
    });
}

function update(type, data) {
    return request({
        url:    type + '/update',
        method: 'POST',
        headers: requestHeaders(),
        data:   data
    });
}

function login(data) {
    return legacyRequest({
        url:    'login/client',
        method: 'POST',
        headers: requestHeaders(),
        data:   data
    });
}

function logout() {
    return legacyRequest({
        url:    'user/logout',
        method: 'POST',
        headers: requestHeaders()
    });
}

const HTTPService = {
    get, getItem, create , update, login, logout
};

export default HTTPService;