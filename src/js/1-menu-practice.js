// 1) template in HTML - CDN / import Handlebars
//
// - ипортируем библиотеку handlebars серез CDN или npm (во втором случае нужно импортить объект Handlebars)
// - получаем шаблон - innerHTML из тега template в HTML
// - тримим его, на всякий случай
// - создаем функцию-создатель разметки с помощью объекта Handlebars и его метода compile (принимает шаблон из HTML)
// - создаем разметку с помощью этой функции (принимает данные)
// - записываем разметку в innerHTML контейнера (боди, например)

// const template = document.querySelector('#menu-template').innerHTML.trim();
// const makeMarkup = Handlebars.compile(template);

// const data = {
//   title: 'Hello handlebars',
//   items: [1, 2, 3, 4, 5, 6, 7, 8],
// };

// const markup = makeMarkup(data);

// document.body.innerHTML = markup;

/////////////////////////////////////////////////////

// 2) External template

// - импортируем функцию-шаблон из файла hbs
// - создаем с ее помощью разметку
// - вставляем разметку в контейнер

// const Handlebars = require("handlebars");

// import Handlebars from 'handlebars';

// const template = document.querySelector('#menu-template').innerHTML.trim();
// const makeMarkup = Handlebars.compile(template);

// const data = {
//   title: 'Hello handlebars',
//   items: [1, 2, 3, 4, 5, 6, 7, 8],
// };

// const markup = makeMarkup(data);

// document.body.innerHTML = markup;
