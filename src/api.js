// const TOKEN =
//  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAsImxvZ2luIjoidXNlcjMiLCJyb2xlcyI6W3siaWQiOjIsIm5hbWUiOiJVU0VSIiwiZGVzY3JpcHRpb24iOiJJdCBtZW93cyIsImNyZWF0ZWRBdCI6IjIwMjEtMTItMTlUMTQ6MzM6MzQuNzc4WiIsInVwZGF0ZWRBdCI6IjIwMjEtMTItMTlUMTQ6MzM6MzQuNzc4WiIsIlVzZXJSb2xlcyI6eyJpZCI6MiwidXNlcklkIjoxMCwicm9sZUlkIjoyfX1dLCJpYXQiOjE2NDAwOTc2OTQsImV4cCI6MTY0MDE4NDA5NH0.RPo0McvVj9bJb_6mM04IwwIwfpgXXapWd1Ni_Odg3GA";
const LOGIN_ENDPOINT = "http://localhost:3000/auth/login";
// const REGISTER_ENDPOINT = "http://localhost:3000/auth/register";
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

export async function login(usr, password) {
  const response = await fetch(LOGIN_ENDPOINT, {
    method: "post",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      login: usr,
      password: password,
    }),
  });
  const jsoned = await response.json();
  const token = jsoned.token;
  if (token) {
    localStorage.setItem(TOKEN_LS_KEY, token);
    return true;
  }
  return false;
}

export function isLogin() {
  const value = localStorage.getItem(TOKEN_LS_KEY);
  return value !== null;
}

export function removeToken() {
  localStorage.removeItem(TOKEN_LS_KEY);
}
