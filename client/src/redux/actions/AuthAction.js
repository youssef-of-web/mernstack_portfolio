import axios from "axios";
import setAuthToken from "../../common/setAuthToken";
import { GET_ERRORS, SET_USER } from "../types";
import jwt_decode from "jwt-decode";


export const AuthRegister = (data) => async (dispatch) => {
  await axios
    .post("/api/registration", data)
    .then((res) => {
      window.location.href = "/login";
    })
    .catch((err) => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      });
    });
};

export const AuthLogin = (data, history) => async (dispatch) => {

  await axios
    .post("/api/login", data)
    .then((res) => {
      
      history.push('/profile');
      
      const { token } = res.data;

      window.localStorage.setItem("jwtToken", token);

      setAuthToken(token);

      const decode = jwt_decode(token);

      dispatch(setCurrentUser(decode));

      
    })
    .catch((err) => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      });
    });
};

export const logout = ()=> (dispatch)=>{
  localStorage.removeItem('jwtToken');
  dispatch(setCurrentUser(null));
  window.location.href = '/login'
}

export const setCurrentUser = (data) => ({
  type: SET_USER,
  payload: data,
});
