const Page = require('./page');

class ProblemsListPagePage extends Page {
    get newProblem() {
        return $('//a[@href=\'/problems/create\']/button');
    }

}

module.exports = new ProblemsListPagePage();