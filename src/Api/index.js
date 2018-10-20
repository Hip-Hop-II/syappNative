import * as apiUrls from '../API_URL'
import queryString from 'query-string'

function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response
    } else {
        const error = new Error(response.statusText)
        error.response = response
        throw error
    }
}

function parseJSON(response) {
    return response.json()
}

export const User = {
    login(data) {
        return fetch(apiUrls.login_url, {
            method: 'POST',
            body: queryString.stringify(data),
            headers: {
                'Content-type': 'application/x-www-form-urlencoded'
            }
        })
            .then(checkStatus)
            .then(parseJSON)
            .then(data => data)
            .catch(err => Promise.reject(err))
    },
    phoneCode(data) {
        console.log(data)
        return fetch(apiUrls.phone_code_url, {
            method: 'POST',
            body: queryString.stringify(data),
            headers: {
                'Content-type': 'application/x-www-form-urlencoded'
            }
        })
            .then(checkStatus)
            .then(parseJSON)
            .then(data => data)
            .catch(err => Promise.reject(err))
    },
    codeImg(data) {
        console.log(data)
        return fetch(apiUrls.image_code_url, {
            method: 'GET',
            // body: queryString.stringify(data),
            headers: {
                'Content-type': 'application/x-www-form-urlencoded'
            }
        })
            .then(checkStatus)
            .then(parseJSON)
            .then(data => data)
            .catch(err => Promise.reject(err))
    },
    verifyImageCode(data) {
        console.log(data)
        return fetch(apiUrls.verity_image_code_url, {
            method: 'POST',
            body: queryString.stringify(data),
            headers: {
                'Content-type': 'application/x-www-form-urlencoded'
            }
        })
            .then(checkStatus)
            .then(parseJSON)
            .then(data => data)
            .catch(err => Promise.reject(err))
    }
}
