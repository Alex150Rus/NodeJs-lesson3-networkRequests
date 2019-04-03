const request = require('request');

const cheerio = require('cheerio');

request('https://www.banki.ru/products/currency/cash/usd/moskva/', (err, response, html) => {
  if(!err && response.statusCode === 200) {
    const $ = cheerio.load(html);
    // можно парсить всё что угодно, если это генерируется не JS (проверяется - убираем галочку js и перезапускаем страничку)
    console.log('Курс доллара', $('td.currency-table__rate > .currency-table__large-text').eq(0).text());
  }
})