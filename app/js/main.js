const menuBtn = document.querySelector('.menu__btn');
const menuList = document.querySelector('.menu__list')

menuBtn.addEventListener('click', (event) => {
  menuList.classList.toggle('menu__list--active');
  menuBtn.classList.toggle('menu__btn--active');
});
