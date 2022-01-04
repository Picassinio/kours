const Page = require('./page');
const NavBar = require('./NavBar');

class LoginPage extends Page {

    get inputUsername() { return $('//*[@id="email"]'); }

    get inputPassword() { return $('//*[@id="password"]'); }

    get btnSubmit() { return $('//div[@id=\'root\']//button[@type="submit"]'); }

    get logout() { return $('//div[@id="logout"]'); }

    get invalidEmailAlert() { '//div[contains(@class,"MuiAlert-me")]' }
    get

    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    async toLogout() {
        await NavBar.navBar.click();
        await this.logout.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open() {
        return super.open('');
    }
}

module.exports = new LoginPage();
