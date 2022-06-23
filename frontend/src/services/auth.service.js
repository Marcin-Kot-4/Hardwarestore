import axios from "axios";
import authToken from "./auth-token";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/api/auth/";

const register = (username, email, password) => {
    return axios.post(API_URL + "signup", {
        username, email, password,
    });
};

const login = (username, password, rememberMe) => {
    return axios
        .post(API_URL + "signin", {
            username, password, rememberMe
        })
        .then((response) => {
            if (response.data.accessToken) {
                localStorage.setItem("user", JSON.stringify(response.data));
            }
            return response.data;
        });
};

const google = (email, name, secret, surname) => {
    return axios
        .post(API_URL + "google", {
            email, name, secret, surname
        })
        .then((response) => {
            if (response.data.accessToken) {
                localStorage.setItem("user", JSON.stringify(response.data));
            }
            return response.data;
        });
}

const logout = () => {
    axios.post(API_URL + "logout", {token: authToken().token}, {headers: authHeader()});
    localStorage.removeItem("user");
};

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
};

const AuthService = {
    register, login, google, logout, getCurrentUser,
};

export default AuthService;
