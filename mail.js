/* Отправка почты по протоколу SMTP. Популярный сторонний пакет - nodemailer. С помощью него можно отправлять почту 
через любые шлюзы(популярные почтовики mail.ru, yandex, gmail)
*/

const nodemailer = require('nodemailer');

//для начала нужно создать транспорт (способ отправки).
const smtpTransport = nodemailer.createTransport({
  host: 'smtp.rambler.ru',
  port: 465,
  secure: true,
  auth: {
    // указываем полный адрес почты
    user: 'vasya@rambler.ru',
    pass: '****',
  }
})

// после создания транспорта можно отпарвлять почту. Первый параметр - объект письма, второй - колбэк функция
smtpTransport.sendMail({
  // во фром должен быть тот ящик, с которого авторизовались (актуально для gmail, mail, yandex)
  // левого никого нельзя указать на пуцбличном сервере
  from: 'Barak Obama <vasya@rambler.ru>',
  to: 'alex150rus@outlook.com',
  subject: 'Help me to save America',
  // тело письма может быть в двух форматах: обычный текст (атрибут текст) или html (атрибут html)
  // вёрстка под письма довольно сложная и специфическая
  html: '<b>Hello my friend</b>'
}, (err, response) => {
  if(err) {
    throw err('sending error');
  } else {
    console.log('message has been sent')
  }
  // так как node.js работает в одглм потоке - важно закрывать транспорты, если они больше не нужны, 
  // так как сервер ограничивает количество открытых дескрипторов
  smtpTransport.close();
})