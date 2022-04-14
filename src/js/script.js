function ready(fn) {
  if (
    document.attachEvent
      ? document.readyState === 'complete'
      : document.readyState !== 'loading'
  ) {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

ready(function () {
  const MenuBurgerBtn = document.querySelector('#menu-burger');
  const MainMenuLinks = document.querySelectorAll('.main-nav__link');
  const MainMenu = document.querySelector('#main-nav');
  const toggleMainMenu = () => {
    MenuBurgerBtn.classList.toggle('active');
    MainMenu.classList.toggle('active');
  };

  if (MenuBurgerBtn && MainMenu) {
    MenuBurgerBtn.addEventListener('click', () => toggleMainMenu());
    MainMenuLinks.forEach(item => {
      item.addEventListener('click', ev => {
        ev.stopPropagation();
        toggleMainMenu();
      });
    });
  }

  const MenuItemTriggers = document.querySelectorAll(
    '.main-nav__item--trigger'
  );
  MenuItemTriggers.forEach(item => {
    item.addEventListener('click', ev => {
      item.classList.toggle('active');
      item.nextElementSibling.classList.toggle('active');
    });
  });

  const JsChoicesElements = document.querySelectorAll('.js-choice');
  JsChoicesElements.forEach(item => {
    new Choices(item, {
      searchEnabled: false,
      itemSelectText: '',
      silent: true,
      shouldSort: false
    });
  });

  const SearchForms = document.querySelectorAll('.search-form');
  SearchForms.forEach(item => {
    item.addEventListener('submit', ev => {
      ev.preventDefault();
    });
  });

  //  ========== END OF READY FUNCTION
});
