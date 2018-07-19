import request from '../shared/Request'

function postRequestHeaders() {

    return {
        'Content-Type': 'application/json',
        'AUTHORIZATION': `Bearer ${sessionStorage.access_token}`
    }
}

function getRequestHeaders() {

    return {
        'AUTHORIZATION': `Bearer ${sessionStorage.access_token}`
    }
}

function get(type) {
    return request({
        url:    type,
        method: 'GET',
        headers: new Headers(getRequestHeaders()),
    });
}

function getItem(type, id) {
    return request({
        url:    type + '/' + id,
        method: 'GET',
        headers: new Headers(getRequestHeaders()),
    });
}

function create(type) {
    return request({
        url:    type + '/create',
        method: 'POST',
        headers: new Headers(postRequestHeaders()),
        data:   {}
    });
}

function update(type, data) {
    return request({
        url:    type + '/update',
        method: 'POST',
        headers: new Headers(postRequestHeaders()),
        data:   data
    });
}

function login(data) {
    return request({
        url:    'login',
        method: 'POST',
        headers: new Headers(postRequestHeaders()),
        data:   data
    });
}

const HTTPService = {
    get, getItem, create , update, login
};

export default HTTPService;