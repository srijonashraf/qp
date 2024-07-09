class SessionHelper {
  setAccessToken(accessToken) {
    localStorage.setItem("token", accessToken);
  }

  getAccessToken() {
    return localStorage.getItem("token");
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

export const {
  setAccessToken,
  getAccessToken,
  setEmail,
  getEmail,
  setPassword,
  getPassword,
} = new SessionHelper();
