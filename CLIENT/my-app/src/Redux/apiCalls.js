//IMPORT
import { publicRequest } from "../requestMethods";
import { loginFailure, loginStart, loginSuccess, logout } from "./userRedux";
//EXPORT FUNCTIOON LOGIN
export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};
//EXPORT FUNCTION LOGOUT
export const logOut = async (dispatch) => {
  await dispatch(logout());
};
