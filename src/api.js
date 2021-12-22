// const TOKEN =
//  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAsImxvZ2luIjoidXNlcjMiLCJyb2xlcyI6W3siaWQiOjIsIm5hbWUiOiJVU0VSIiwiZGVzY3JpcHRpb24iOiJJdCBtZW93cyIsImNyZWF0ZWRBdCI6IjIwMjEtMTItMTlUMTQ6MzM6MzQuNzc4WiIsInVwZGF0ZWRBdCI6IjIwMjEtMTItMTlUMTQ6MzM6MzQuNzc4WiIsIlVzZXJSb2xlcyI6eyJpZCI6MiwidXNlcklkIjoxMCwicm9sZUlkIjoyfX1dLCJpYXQiOjE2NDAwOTc2OTQsImV4cCI6MTY0MDE4NDA5NH0.RPo0McvVj9bJb_6mM04IwwIwfpgXXapWd1Ni_Odg3GA";
const LOGIN_ENDPOINT = "http://localhost:3000/auth/login";
const REGISTER_ENDPOINT = "http://localhost:3000/auth/register";
// const USERS_ENDPOINT = "http://localhost:3000/api/users";
const RESULTS_ENDPOINT = "http://localhost:3000/api/results";
const TOKEN_LS_KEY = "TKN";

export async function getResults() {
  const token = localStorage.getItem(TOKEN_LS_KEY);
  const response = await fetch(RESULTS_ENDPOINT, {
    method: "get",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const jsoned = await response.json();
  return jsoned;
}

export async function addResult(result) {
  const token = localStorage.getItem(TOKEN_LS_KEY);
  const response = await fetch(RESULTS_ENDPOINT, {
    method: "post",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(result),
  });
  const jsoned = await response.json();
  return jsoned;
}

export async function login(usr, password) {
  return await fetch(LOGIN_ENDPOINT, {
    method: "post",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      login: usr,
      password: password,
    }),
  })
    .then((response) => {
      if (!response.ok) throw new Error("Error occurred!");
      else return response.json();
    })
    .then((jsoned) => {
      let token = jsoned.token;
      if (token) {
        localStorage.setItem(TOKEN_LS_KEY, token);
        return true;
      }
      throw new Error("Error occurred!");
    })
    .catch(() => {
      return false;
    });
}

export async function register(usr, password) {
  return await fetch(REGISTER_ENDPOINT, {
    method: "post",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      login: usr,
      password: password,
    }),
  })
    .then((response) => {
      if (!response.ok) throw new Error("Error occurred!");
      else return response.json();
    })
    .then((jsoned) => {
      let token = jsoned.token;
      if (token) {
        localStorage.setItem(TOKEN_LS_KEY, token);
        return true;
      }
      throw new Error("Error occurred!");
    })
    .catch(() => {
      return false;
    });
}

export async function clearResults() {
  const token = localStorage.getItem(TOKEN_LS_KEY);
  const response = await fetch(RESULTS_ENDPOINT, {
    method: "delete",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const jsoned = await response.json();
  return await jsoned;
}

export function isLogin() {
  const value = localStorage.getItem(TOKEN_LS_KEY);
  return value !== null;
}

export function removeToken() {
  localStorage.removeItem(TOKEN_LS_KEY);
}
