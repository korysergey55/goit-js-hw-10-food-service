import menuJson from '../menu.json';
import makeMenuMarkup from '../template/menu.hbs';

const insertRef = document.querySelector('.js-menu');

// const markup = menuJson.map(elem => makeMenuMarkup(elem)).join('');

const markup = makeMenuMarkup(menuJson);

insertRef.innerHTML = markup;
