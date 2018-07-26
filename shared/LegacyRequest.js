/**
 * Axios Request Wrapper
 * ---------------------
 *
 * @author  Sheharyar Naseer (@sheharyarn)
 * @license MIT
 *
 */

import axios     from 'axios'
import {constants} from './Constants'

/**
 * Create an Axios Client with defaults
 */
const client = axios.create({
    baseURL: constants.API.BASE_URL_LEGACY
});

/**
 * Request Wrapper with default success/error actions
 */
const legacyRequest = function(options) {

    const onSuccess = function(response) {
        console.debug('Request Successful!', response);
        return response.data;
    };

    const onError = function(error) {
        console.error('Request Failed:', error.config);

        if (error.response) {

            console.error('Status:',  error.response.status);
            console.error('Data:',    error.response.data);
            console.error('Headers:', error.response.headers);

        } else {

            console.error('Error Message:', error.message);
        }

        return Promise.reject(error.response || error.message);
    };

    return client(options)
        .then(onSuccess)
        .catch(onError);
};

export default legacyRequest;