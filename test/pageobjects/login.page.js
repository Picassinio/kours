const Page = require('./page');

class LoginPage extends Page {
    // get inputWindow() {
    //     return $('//button[@class="js-login"]');
    // }

    get inputUsername() {
        return $('//*[@id="personalLogin"]\n');
    }

    get inputPassword() {
        return $('//*[@id="personalPassword"]\n');
    }

    get btnSubmit() {
        return $('//button[@class=\'btn btn-inverse btn-small\']');
    }

    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open() {
        return super.open('');
    }
}

module.exports = new LoginPage();
