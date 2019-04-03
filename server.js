const http = require('http');

// первый параметр - функция, обрабатывающая все запросы. 
//Request - объект запроса, Response - ответ для того, чтобы что-то напечатать в браузере
http.createServer((request, response) => {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.write('Hello world');
  //без записи response.end() браузер будет бесконечно грузиться. Мы должны дать понять, что завершили писать в body
  response.end()
}).listen(8888);