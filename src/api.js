const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAsImxvZ2luIjoidXNlcjMiLCJyb2xlcyI6W3siaWQiOjIsIm5hbWUiOiJVU0VSIiwiZGVzY3JpcHRpb24iOiJJdCBtZW93cyIsImNyZWF0ZWRBdCI6IjIwMjEtMTItMTlUMTQ6MzM6MzQuNzc4WiIsInVwZGF0ZWRBdCI6IjIwMjEtMTItMTlUMTQ6MzM6MzQuNzc4WiIsIlVzZXJSb2xlcyI6eyJpZCI6MiwidXNlcklkIjoxMCwicm9sZUlkIjoyfX1dLCJpYXQiOjE2NDAwOTc2OTQsImV4cCI6MTY0MDE4NDA5NH0.RPo0McvVj9bJb_6mM04IwwIwfpgXXapWd1Ni_Odg3GA";
// const LOGIN_ENDPOINT = "http://localhost:3000/auth/login";
// const REGISTER_ENDPOINT = "http://localhost:3000/auth/register";
// const USERS_ENDPOINT = "http://localhost:3000/api/users";
const RESULTS_ENDPOINT = "http://localhost:3000/api/results";

export async function getResults() {
  const response = await fetch(RESULTS_ENDPOINT, {
    method: "get",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
      Authorization: `Bearer ${TOKEN}`,
    },
  });
  const jsoned = await response.json();
  console.log(jsoned);
  return jsoned;
}
