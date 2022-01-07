const LoginPage = require('../pageobjects/LoginPage');
const NavBar = require('../pageobjects/NavBar');
const ProblemsListPage = require('../pageobjects/ProblemsListPage');

describe('Problems just', () => {

    before('Login', async () => {
        await LoginPage.open();

        await LoginPage.login('pasha6207@yandex.ru', 'aA123aA11.');
        await NavBar.navBar.click();
        await NavBar.problemsLink.click();
    });

    it('Amount of problems', async () => {
        await ProblemsListPage.filtersButton.click();
        await ProblemsListPage.filtersColumnsDropdown.selectByVisibleText('Company');
        await ProblemsListPage.filtersValue.setValue('Google');
        await ProblemsListPage.filtersButton.click();
        const problems = await ProblemsListPage.problemRowsContainTextInColumns;
        await expect(problems.length).toEqual(10);
    });

});