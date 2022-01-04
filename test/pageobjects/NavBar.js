const Page = require('./page');

class NavBar extends Page {
    get navBar() {
        return $('//button[@id="nav-bar-toggle"]');
    }

    get problemsLink() {
        return $('//a[@href=\'/problems\']');
    }
    
}

module.exports = new NavBar();
