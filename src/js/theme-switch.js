const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const checkboxEl = document.querySelector('#theme-switch-toggle');
const savedTheme = localStorage.getItem('theme');

if (savedTheme) {
  document.body.classList.add(savedTheme);
} else {
  document.body.classList.add(Theme.LIGHT);
}

if (document.body.classList.contains(Theme.DARK)) {
  checkboxEl.checked = true;
}

checkboxEl.addEventListener('change', () => {
  if (document.body.classList.contains(Theme.LIGHT)) {
    document.body.classList.replace(Theme.LIGHT, Theme.DARK);
    localStorage.setItem('theme', Theme.DARK);
  } else if (document.body.classList.contains(Theme.DARK)) {
    document.body.classList.replace(Theme.DARK, Theme.LIGHT);
    localStorage.setItem('theme', Theme.LIGHT);
  }
});
