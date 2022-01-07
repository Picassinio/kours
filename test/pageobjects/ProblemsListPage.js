const Page = require('./page');

class ProblemsListPagePage extends Page {
    get newProblem() {
        return $('//a[@href=\'/problems/create\']/button');
    }

    get filtersButton() {
        return $('//button[text()="Filters"]');
    }

    get filtersColumnsDropdown() {
        return $('//option[text()="Company"]/..');
    }

    get filtersValue() {
        return $('//input[@placeholder="Filter value"]');
    }

    get problemRowsContainTextInColumns() {
        return $$('//*[contains(text(), "Google") and @data-field = "Company"]');
    }

}

module.exports = new ProblemsListPagePage();