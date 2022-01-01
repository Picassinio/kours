const Page = require('./page');

class LoginPage extends Page {

    get inputUsername() {
        return $('//*[@id="email"]');
    }

    get inputPassword() {
        return $('//*[@id="password"]');
    }

    get btnSubmit() {
        return $('//div[@id=\'root\']//button[@type="submit"]');
    }

    get logOut() {
        return $('//div[@id="logout"]');
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
