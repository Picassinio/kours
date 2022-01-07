module.exports = class Page {

    open(path) {
        return browser.url(`https://enduring.herokuapp.com/${path}`);
    }
}
