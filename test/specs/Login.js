const LoginPage = require('../pageobjects/LoginPage');
const PublicationsPage = require('../pageobjects/PublicationPage');
const { clearInputValue } = require('../helpers/uiMethodsHelpers');

describe('My Login application', () => {

    after(function() {
        LoginPage.toLogout();
    });

    it('Invalid email', async () => {

        await  LoginPage.open();
        await LoginPage.login('pasa6207@yandex.ru', 'aA123aA11.');
        await expect(PublicationsPage.publication).toHaveTextContaining('publications');
    });


    it('should login with valid credentials', async () => {
        await LoginPage.open();

        await LoginPage.login('pasha6207@yandex.ru', 'aA123aA11.');
        await expect(PublicationsPage.publication).toHaveTextContaining('publications');
    });
});


