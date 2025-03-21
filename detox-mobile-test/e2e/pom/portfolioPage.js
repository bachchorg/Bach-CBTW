export class PortfolioPage {
  async isPortfolioVisible() {
    await waitFor(element(by.id('portfolioScreen')))
      .toBeVisible()
      .withTimeout(5000);
  }

  async isPortfolioListVisible() {
    await expect(element(by.id('portfolioList'))).toBeVisible();
  }
}