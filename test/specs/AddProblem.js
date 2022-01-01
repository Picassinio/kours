const LoginPage = require('../pageobjects/LoginPage');
const MainMenuPage = require('../pageobjects/MainMenuPage');
const ProblemsListPage = require('../pageobjects/ProblemsListPage');
const CreateProblemPage = require('../pageobjects/CreateProblemPage');

describe('Adding problems', () => {

    before(function () {
        LoginPage.login('pasha6207@yandex.ru', 'aA123aA11.');
    });

    it('Positive adding of problem', async () => {
        await LoginPage.open();

        await MainMenuPage.navBar.click();
        await MainMenuPage.problemsLink.click();
        await ProblemsListPage.newProblem.click();

        await CreateProblemPage.title.setValue('My first problem');
        await CreateProblemPage.company.setValue('Trello');
        await CreateProblemPage.position.setValue('34');
        await CreateProblemPage.content.setValue('Testoviy text');
        await CreateProblemPage.submitButton.click();
        console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');

        await expect(CreateProblemPage.myNewProblem).toBeExisting();
        await expect(CreateProblemPage.myNewProblem).toHaveTitleContaining('Problem222');

    });


});