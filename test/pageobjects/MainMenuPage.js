const Page = require('./page');

class MainMenuPage extends Page {
    get navBar() {
        return $('//button[@id="nav-bar-toggle"]');
    }

    get problemsLink() {
        return $('//a[@href=\'/problems\']');
    }

    
}

module.exports = new MainMenuPage();
