import axios from "axios";
import jwtDecode from "jwt-decode";
import { removeItem, getItem, addItem } from "./localStorage";

export function hasAuthenticated() {
  const token = getItem("instaToken");
  const result = token ? tokenIsValid(token) : false;
  if (token) {
    jwtDecode(token);
  }
  //
  if (false === result) {
    removeItem("instaToken");
  }

  return result;
}
export function hasAuthenticate() {
  const token = getItem("instaToken");
  if (token) {
    if (tokenIsValid(token) === false) {
      return false;
    } else {
      const res = jwtDecode(token);
      const result = res.user;

      return result;
    }
  }
  return false;
}

export function login(email, password) {
  return axios
    .post("http://localhost:5000/api/auth/login", {
      email,
      password,
    })
    .then((response) => response.data)
    .then((token) => {
      console.log(token._id);
      addItem("instaToken", token.accessToken);
      const data = { status: true, id: token._id };
      return data;
    });
}

export function logout() {
  removeItem("instaToken");
}

function tokenIsValid(token) {
  const decode = jwtDecode(token);
  if (decode.exp * 1000 > new Date().getTime()) {
    return true;
  }
  return false;
}
