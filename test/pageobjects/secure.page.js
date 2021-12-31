

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SecurePage extends Page {
    get flashAlert() {
        return $('//span[@class=\'n-headerName\']');
    }
}

module.exports = new SecurePage();
