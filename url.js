//модуль для распарса url

const url = require('url');

/* второй параметр - флажок, указывающий парсить параметры запроса или нет
в бэк энде - задачи разбора урла достаточно популярны и часты, наоборот из объекта нужно взять и собрать новую строку,
поменять параметры*/
const params = url.parse('https://vk.com/alex150rus?z=photo453239686_456239273%2Falbum453239686_00%2Frev', true);
//console.log(params);

delete params.search;
params.query.z = '123456789'

console.log(url.format(params));