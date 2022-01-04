async function clearInputValue(element) {
    await while(element.getValue() !== '') {
        await element.doubleClick();
        await element.keys('Delete');
    }
}


module.exports = {
    clearInputValue,
}