const LoginPage = require('../pageobjects/LoginPage');
const PublicationsPage = require('../pageobjects/PublicationPage');
const { clearInputValue } = require('../helpers/uiMethodsHelpers');

xdescribe('My Login application', () => {

    // before('tsgssgs', async () => {
    //     await LoginPage.open();
    //
    //     await LoginPage.login('pasha6207@yandex.ru', 'aA123aA11.');
    // });

    it('Invalid email', async () => {
        await LoginPage.open();

        await LoginPage.login('pasa6207@yandex.ru', 'aA123aA11.');
        await expect(LoginPage.invalidAlert).toHaveTextContaining('User with provided email does not exist');
    });

    it('Invalid Pass', async () => {
        await LoginPage.open();

        await LoginPage.login('pasha6207@yandex.ru', 'aA123aA1.');
        await expect(LoginPage.invalidAlert).toHaveTextContaining('Incorrect password');
    });

    it('Valid Email', async () => {
        await LoginPage.open();

        await LoginPage.login('pasha6207@yandex.ru', 'aA123aA11.');
        await expect(PublicationsPage.publication).toHaveTextContaining('publications');
    });

});


