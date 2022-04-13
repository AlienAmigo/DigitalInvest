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
  const MainMenu = document.querySelector('#main-nav');
  if (MenuBurgerBtn) {
    MenuBurgerBtn.addEventListener('click', ev => {
      ev.target.classList.toggle('active');
      MainMenu.classList.toggle('active');
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
      shouldSort: false,
    });
  });

  //  ========== END OF READY FUNCTION
});
