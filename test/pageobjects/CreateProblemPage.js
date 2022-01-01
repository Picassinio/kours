const Page = require('./page');

class CreateProblemPage extends Page {
    get title() {
        return $('//input[@id=\'title\']');
    }

    get company() {
        return $('//input[@id=\'company\']');
    }

    get position() {
        return $('//input[@id=\'position\']');
    }

}

module.exports = new CreateProblemPage();