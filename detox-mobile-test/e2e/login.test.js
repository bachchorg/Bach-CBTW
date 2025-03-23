import {PortfolioPage} from './pom/portfolioPage.js'
import {LoginPage} from './pom/loginPage.js'

describe('Login and View Portfolio', () => {
  const loginPage = new LoginPage()
  const portfolioPage = new PortfolioPage()

  beforeAll(async () => {
    await device.launchApp();
  });

  it('should allow the user to log in and view their portfolio', async () => {
    await loginPage.enterUsername('bachnguyen');
    await loginPage.enterPassword('bachtest123');
    await loginPage.tapLoginButton();

    await portfolioPage.isPortfolioVisible();
    await portfolioPage.isPortfolioListVisible();

    await loginPage.navigateToMenuScreen();
    await loginPage.tapLogoutButton();
  });
});