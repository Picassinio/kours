const LoginPage = require('../pageobjects/LoginPage');
const MainMenu = require('../pageobjects/MainMenuPage');

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open();

        await LoginPage.login('pasha6207@yandex.ru', 'aA123aA11.');
        await MainMenu.navBar.click();
        await expect(LoginPage.logOut).toBeExisting();
        await expect(LoginPage.logOut).toHaveTextContaining(
            'Logout');
    });
});


