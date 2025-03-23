export class LoginPage {
    async enterUsername(username) {
      await element(by.id('usernameInput')).typeText(username);
    }
  
    async enterPassword(password) {
      await element(by.id('passwordInput')).typeText(password);
    }
  
    async tapLoginButton() {
      await element(by.id('loginButton')).tap();
    }

    async navigateToMenuScreen() {
      await element(by.id('menuBottomtab')).tap();
    }

    async tapLogoutButton() {
      await element(by.id('logoutButton')).tap();
    }

  }