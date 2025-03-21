class LoginPage {
    async enterUsername(username) {
      await element(by.id('usernameInput')).typeText(username);
    }
  
    async enterPassword(password) {
      await element(by.id('passwordInput')).typeText(password);
    }
  
    async tapLoginButton() {
      await element(by.id('loginButton')).tap();
    }
  }
  
  module.exports = new LoginPage();