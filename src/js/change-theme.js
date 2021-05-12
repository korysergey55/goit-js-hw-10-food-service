const sheckboxRef = document.querySelector('#theme-switch-toggle');

sheckboxRef.addEventListener('change', changeColor);

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

function changeColor(event) {
  if (event.target.checked) {
    replaceThemes(Theme.LIGHT, Theme.DARK);
    localStorage.setItem('theme', Theme.DARK);

    // document.body.classList.add('dark-theme');
    // document.body.classList.remove('light-theme');
  } else {
    replaceThemes(Theme.DARK, Theme.LIGHT);
    localStorage.setItem('theme', Theme.LIGHT);

    // document.body.classList.add('light-theme');
    // document.body.classList.remove('dark-theme');
  }
}

function replaceThemes(oldTheme, newTheme) {
  document.body.classList.remove(oldTheme);
  document.body.classList.add(newTheme);
}

const theme = localStorage.getItem('theme');
if (theme === Theme.DARK) {
  document.body.classList.add(Theme.DARK);
  sheckboxRef.checked = true;
} else {
  document.body.classList.add(Theme.LIGHT);
}
