const { Builder, Browser, By, Key, until } = require('selenium-webdriver');

(async function exemploSelenium() {
  // Inicializa o driver para o Chrome
  let driver = await new Builder().forBrowser(Browser.CHROME).build();

  try {
    // 1. Navega até o Google
    await driver.get('https://www.google.com');

    // 2. Encontra a barra de pesquisa pelo atributo 'name="q"'
    // (Pode variar dependendo da região, mas geralmente é 'q')
    let barraDePesquisa = await driver.findElement(By.name('q'));

    // 3. Digita "Selenium" e aperta Enter
    await barraDePesquisa.sendKeys('Selenium', Key.RETURN);

    // 4. Espera até que o título da página mude (confirmação que carregou)
    await driver.wait(until.titleContains('Selenium'), 5000);
    
    console.log("Teste concluído com sucesso: Navegador abriu e pesquisou.");

  } finally {
    // Fecha o navegador ao final
    await driver.quit();
  }
})();