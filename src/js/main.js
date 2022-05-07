// === HEADER SEARCH FORN ===

document.querySelector('.header-search__button').addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('.header-search__form').classList.toggle('header-search__form--active')
})

// === CATALOG DROPDOWN MENU ===

const catalogDropDown = document.querySelector('.catalog-dropdown');

document.querySelector('.menu__list-item-link--catalog').addEventListener('click', (e) => {
    e.preventDefault();
    // document.body.classList.toggle('shadow');
    catalogDropDown.classList.toggle('catalog-dropdown--active');
});

window.addEventListener('click', (e) => {
    if (!e.target.closest('.menu__list-item-link--catalog') && !e.target.closest('.catalog-dropdown')) {
        // document.body.classList.remove('shadow');
        catalogDropDown.classList.remove('catalog-dropdown--active');
    };
});

// === INTRO SLIDER ===

let introSlider = new Swiper(".intro__slider", {
    // slideClass: 'intro__slider-item',
    // wrapperClass: 'intro__slider-wrapper',
    effect: "fade",
    slidesPerView: 'auto',
    speed: 1000,
    loop: true,
    autoplay: true,
    autoplay: {
        delay: 7000,
    },
    grabCursor: true,
});

// === ABOUT NUMBER ANIMATION ===

document.querySelectorAll('.about__item-number').forEach(number => {
    let numberTop = number.getBoundingClientRect().top - 300,
        start = +number.innerHTML,
        end = +number.dataset.max;

    window.addEventListener('scroll', function onScroll() {
        if (window.pageYOffset > numberTop - window.innerHeight / 2) {
            this.removeEventListener('scroll', onScroll);
            let interval = setInterval(function () {
                number.innerHTML = ++start;
                if (start == end) {
                    clearInterval(interval);
                }
            }, 5);
        }
    });
});