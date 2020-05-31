import { enviroment } from "../../enviroments/enviroment";
import { getToken } from "../../services/check-auth";

export const accountsService = {
  fetchAccounts,
  createAccount,
  fillAccount
}

function fetchAccounts() {
  const requestOptions = {
    method: 'GET',
    headers: { 
               'Accept': 'application/json',
               'Authorization': 'Bearer ' + getToken() }
  };
  
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
  const requestOptions = {
    method: 'POST',
    headers: { 
               'Accept': 'application/json',
               'Authorization': 'Bearer ' + getToken() }
  };
  
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

function fillAccount() {
  const requestOptions = {
    method: 'POST',
    headers: { 
               'Accept': 'application/json',
               'Authorization': 'Bearer ' + getToken() }
  };
  
  return fetch(`${enviroment.apiUrl}/api/accounts/fill`, requestOptions)
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