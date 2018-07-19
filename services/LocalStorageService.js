
function get(type) {

    return localStorage.getItem(type);
}

function getItem(type, id) {

    var data = JSON.parse(localStorage.getItem(type));

    for(var key in data) {

        if(key == id) {

            return data[key];
        }
    }

    return false;
}

function setItem(type, id, data) {

    var dataToStore = {};
    dataToStore[id] = data;

    localStorage.setItem(type, JSON.stringify(dataToStore));
}

function remove(type) {

    localStorage.removeItem(type);
}

const LocalStorageService = {

    get, getItem, setItem , remove
};

export default LocalStorageService;