import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";
import {
    GET_ERRORS,
    SET_CURRENT_USER,
    USER_LOADING
} from "./types";

// Register user
export const registerUser = (userDate, history) => dispatch => {
    axios
    .post("/api/users/register", userDate)
    .setAuthToken(res => history.oush("/login"))
    .catch(err =>
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        })
    );
};

// Login - get user token
export const loginUser = userData => dispatch => {
    axios
    .post("/api/users/login", userData)
    .then(res => {
        const { token }=res.data;
        localStorage.setItem("jwtToken", token);
        setAuthToken(token);
        const decoded = jwt_decode(token);
        dispatch(setCurrentUser(decoded));
    })
    .catch(err => 
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        })
    );
};

export const setCurrentUser = decoded => {
    return{
        type: SET_CURRENT_USER,
        payload: decoded
    };
};

export const serUserLoading = () => {
    return {
        type: USER_LOADING
    };
};

export const logoutUser = () => {
    localStorage.removeItem("jwtToken");
    setAuthToken(false);
    // dispatch(setCurrentUser({}));
};