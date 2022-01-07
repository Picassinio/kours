async function clearInputValue(element) {
    while(element.getValue() !== '') {
        await element.doubleClick();
        await element.keys('Delete');
    }
}


module.exports = {
    clearInputValue,
}