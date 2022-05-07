// === HEADER SEARCH FORN ===

document.querySelector('.header-search__button').addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('.header-search__form').classList.toggle('header-search__form--active')
})

// === CATALOG DROPDOWN MENU ===

const catalogDropDown = document.querySelector('.catalog-dropdown');

document.querySelector('.menu__list-item-link--catalog').addEventListener('click', () => {
    catalogDropDown.classList.toggle('catalog-dropdown--active');
});

window.addEventListener('click', (e) => {
    if (!e.target.closest('.menu__list-item-link--catalog') && !e.target.closest('.catalog-dropdown')) {
        catalogDropDown.classList.remove('catalog-dropdown--active');
    };
});