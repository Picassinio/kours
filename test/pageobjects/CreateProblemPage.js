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

    get content() {
        return $('//textarea[@class=\'w-md-editor-text-input \']');
    }

    // get submitButton() {
    //     return $('//div[@class="mt-3 d-flex justify-content-end"]/button[@type="submit"]');
    // }

    get submitButton() { return $('[type="submit"]'); }


    get myNewProblem() {
        return $('//a[text() = \'Problem222\']');
    }

}

module.exports = new CreateProblemPage();