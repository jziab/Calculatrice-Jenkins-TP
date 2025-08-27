const { Builder, By, Key, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

(async function testCalculatrice() {

    let options = new chrome.Options().addArguments('--no-sandbox', '--disable-dev-shm-usage', '--headless');

    let driver = await new Builder()
        .forBrowser('chrome')
        .setChromeOptions(options)
        .build();

    try {
        // 🚀 Ouvrir l'application en test
        await driver.get('http://127.0.0.1:8080');
         await driver.sleep(500);
        // --- Test 1 : Vérifier Addition (5 + 3 = 8) ---
        await driver.findElement(By.id('number1')).sendKeys('5');
        await driver.findElement(By.id('number2')).sendKeys('3');
        await driver.findElement(By.id('operation')).sendKeys('add');
        await driver.findElement(By.id('calculate')).click();
        let result = await driver.findElement(By.css('#result span')).getText();
        console.log("Test Addition (5+3) =>", result);
         await driver.sleep(2000);

        // --- Test 2 : Division par Zéro (10 ÷ 0) ---
        await driver.findElement(By.id('number1')).clear();
        await driver.findElement(By.id('number2')).clear();
        await driver.findElement(By.id('number1')).sendKeys('10');
        await driver.findElement(By.id('number2')).sendKeys('0');
        await driver.findElement(By.id('operation')).sendKeys('divide');
        await driver.findElement(By.id('calculate')).click();
        result = await driver.findElement(By.css('#result span')).getText();
        console.log("Test Division par zéro =>", result);
        await driver.sleep(2000);

        // --- Test 3 : Entrée non valide ("abc" + 5) ---
        await driver.findElement(By.id('number1')).clear();
        await driver.findElement(By.id('number2')).clear();
        await driver.findElement(By.id('number1')).sendKeys('abc');
        await driver.findElement(By.id('number2')).sendKeys('5');
        await driver.findElement(By.id('operation')).sendKeys('add');
        await driver.findElement(By.id('calculate')).click();
        result = await driver.findElement(By.css('#result span')).getText();
        console.log("Test Entrée non valide =>", result);
         await driver.sleep(2000);

        // --- Test 4 : Vérifier Soustraction (9 - 4 = 5) ---
        await driver.findElement(By.id('number1')).clear();
        await driver.findElement(By.id('number2')).clear();
        await driver.findElement(By.id('number1')).sendKeys('9');
        await driver.findElement(By.id('number2')).sendKeys('4');
        await driver.findElement(By.id('operation')).sendKeys('subtract');
        await driver.findElement(By.id('calculate')).click();
        result = await driver.findElement(By.css('#result span')).getText();
        console.log("Test Soustraction (9-4) =>", result);
         await driver.sleep(500);

    } finally {
        await driver.quit();
    }
})();
