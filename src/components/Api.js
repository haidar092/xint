import axios from "axios";
const BASE_URL = "https://reqres.in/api";
const HEADER_ID = {
  "Content-type": "application/json",
  Accept: "application/json",
};

export const LoginApi = (username, password) => {
  let orderData = { email: username, password: password };
  console.log("login", username, password);
  return axios({
    method: "POST",
    url: `${BASE_URL}/login`,

    data: orderData,
  });
};

//signup

export const SignupApi = (username, password) => {
  return axios({
    method: "POST",
    url: `${BASE_URL}/register`,

    data: {
      email: username,
      password: password,
    },
  });
};

//all users
export const getAll = () => {
  return axios({
    method: "GET",
    url: `${BASE_URL}/users `,
    headers: HEADER_ID,
  });
};

//all users
export const Create = (name, job) => {
  return axios({
    method: "Post",
    url: `${BASE_URL}/users `,
    headers: HEADER_ID,
    data: {
      name: name,
      job: job,
    },
  });
};
