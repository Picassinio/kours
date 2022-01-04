const Page = require('./page');

class NavBar extends Page {
    get publication() {
        return $('//h6');
    }
}

module.exports = new NavBar();