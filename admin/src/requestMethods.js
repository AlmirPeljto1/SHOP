//IMPORT
import axios from "axios";
//API URL AND FETCHING TOKEN FROM USER
const BASE_URL = "http://localhost:8000/api/";
const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
  .currentUser.accessToken;
//PUBLIC CALL
export const publicRequest = axios.create({
  baseURL: BASE_URL,
});
//USER CALL
export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
