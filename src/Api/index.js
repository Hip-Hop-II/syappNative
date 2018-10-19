import * as apiUrls from '../.API_URL'

function checkStatus (response) {
  if (response.status >= 200 && response.status < 300) {
    return response
  } else {
    const error = new Error(response.statusText)
    error.response = response
    throw error
  }
}

function parseJSON (response) {
  return response.json()
}

export const User = {
  login (data) {
    return fetch(apiUrls.login_url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json'
      }
    })
      .then(checkStatus)
      .then(parseJSON)
      .then(data => data)
      .catch(err => Promise.reject(err))
  }
}
