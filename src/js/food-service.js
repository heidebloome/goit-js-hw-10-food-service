import menuList from '../menu.json';
import menuTemplate from '../template.hbs';

const menuEl = document.querySelector('.js-menu');

const createMenuTemplate = menu => {
  return menu.map(menuTemplate).join('');
};
const cardMarkUp = createMenuTemplate(menuList);

menuEl.insertAdjacentHTML('beforeend', cardMarkUp);
