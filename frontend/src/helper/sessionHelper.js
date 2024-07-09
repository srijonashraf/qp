import Cookies from "js-cookie";
class SessionHelper {
  getAccessToken() {
    return Cookies.get("token");
  }
  setEmail(email) {
    localStorage.setItem("email", email);
  }
  getEmail() {
    return localStorage.getItem("email");
  }
  setPassword(password) {
    localStorage.setItem("password", password);
  }
  getPassword() {
    return localStorage.getItem("password");
  }
}

export const { getAccessToken, setEmail, getEmail, setPassword, getPassword } =
  new SessionHelper();
