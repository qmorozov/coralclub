// === HEADER SEARCH FORN ===

document.querySelector('.header-search__button').addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('.header-search__form').classList.toggle('header-search__form--active')
})

// === CATALOG DROPDOWN MENU ===

const catalogDropDown = document.querySelector('.header-catalog');
const cleansingDropDown = document.querySelector('.header-cleansing');

document.querySelector('.menu__list-item-link--catalog').addEventListener('click', (e) => {
    e.preventDefault();
    catalogDropDown.classList.toggle('header-catalog__dropdown--active');
});

document.querySelector('.menu__list-item-link--cleansing').addEventListener('click', (e) => {
    e.preventDefault();
    cleansingDropDown.classList.toggle('header-cleansing__dropdown--active');
});


window.addEventListener('click', (e) => {
    if (!e.target.closest('.menu__list-item-link--catalog') && !e.target.closest('.header-catalog')) {
        // document.body.classList.remove('shadow');
        catalogDropDown.classList.remove('header-catalog__dropdown--active');
    };

    if (!e.target.closest('.menu__list-item-link--cleansing') && !e.target.closest('.header-cleansing')) {
        cleansingDropDown.classList.remove('header-cleansing__dropdown--active');
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

let cetrificateNumber = document.querySelector('.about__item-number---certificates');

document.querySelectorAll('.about__item-number').forEach(number => {

    if (!number.classList.contains('about__item-number---certificates')) {
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
                }, 115);
            }
        });
    } else {
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
                }, 1);
            }
        });
    }

});

// === ARTICLES - SLIDER ===

let articlesSlider = new Swiper(".articles-slider", {
    slidesPerView: 4,
    spaceBetween: 38,
    pagination: {
        el: ".swiper-pagination",
    },
    loop: true,
    clickable: true,
    speed: 1000,
    autoplay: {
        delay: 7000,
    },
    grabCursor: true,
});