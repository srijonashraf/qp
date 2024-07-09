class SessionHelper {
  setAccessToken(accessToken) {
    localStorage.setItem("token", accessToken);
  }

  getAccessToken() {
    return localStorage.getItem("token");
  }
}

export const { setAccessToken, getAccessToken } = new SessionHelper();
