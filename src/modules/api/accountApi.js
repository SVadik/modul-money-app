import { enviroment } from "../../enviroments/enviroment";
import { getToken } from "../../services/check-auth";

export const accountsService = {
  fetchAccounts,
  createAccount
}

const requestOptions = {
  method: 'GET',
  headers: { 
             'Accept': 'application/json',
             'Authorization': 'Bearer ' + getToken() }
};

function fetchAccounts() {

  return fetch(`${enviroment.apiUrl}/api/accounts`, requestOptions)
    .then( response => {
      return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
          const error = (data && data.message) || response.statusText;
          return Promise.reject(error);
        }
        return data;
      });
    })
    .then(data => {
        return data;
    });
}

function createAccount() {
  requestOptions.method = 'POST';
  return fetch(`${enviroment.apiUrl}/api/accounts`, requestOptions)
    .then( response => {
      return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
          const error = (data && data.message) || response.statusText;
          return Promise.reject(error);
        }
        return data;
      });
    })
    .then(data => {
        return data;
    });
}