import menu from '../menu.json';
import menuTemplate from '../template.hbs';

const menus = document.querySelector('.js-menu');

const cardMarkUp = createMenuTemplate(menu);
menus.insertAdjacentHTML('beforeend', cardMarkUp);

function createMenuTemplate(array) {
  return array.map(menuTemplate).join('');
}
