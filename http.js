const https = require('https');

//отправить запрос гетом. Чтобы постом - надо https.request. Модуль http также является наследником Event Emitter
https.get('https://geekbrains.ru', res => {
  console.log(`Got response ${res.statusCode}`)
}).on('error', e=>{
  console.log(`Got error ${e.message}`)
})

// модуль http идёт отдельно. Это очень не удобно, если, например, нужно парсить сайты