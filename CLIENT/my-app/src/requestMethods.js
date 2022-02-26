//AXIOS API CALLS
//IMPORT
import axios from "axios";
//TOKEN AND API ADDRESS
const BASE_URL = "http://localhost:8000/api/";
const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
  .currentUser.accessToken;
//EXPORT PUBLIC
export const publicRequest = axios.create({
  baseURL: BASE_URL,
});
//EXPORT USER
export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
