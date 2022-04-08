import decode from 'jwt-decode';

class AuthService {
  getQaProfile() {
    return decode(this.retrieveToken());
  }

  isLoggedIn() {
    /// this token variable will be based on checking to see if the retrieved token from localStorage is still valid.
    const token = this.retrieveToken();
    // use type coercion to check if token is NOT undefined and the token is NOT expired
    return !!token && !this.isTokenExpired(token);
  }

  retrieveToken() {
    return localStorage.getItem('id_token');
  }

  isTokenExpired(token) {
    try {
      const decoded = decode(token);
      if (decoded.exp < Date.now() / 1000) {
        return true;
      } else {
        return false;
      }
    } catch (err) {
      return false;
    }
  }

  loginQa(idToken) {
    localStorage.setItem('id_token', idToken);

    window.location.assign('/');
  }

  logoutQa() {
    localStorage.removeItem('id_token');
    window.location.assign('/');
  }
}

// 'new' indicates that we will be instantiating a new version for every component that imports it.
export default new AuthService();
