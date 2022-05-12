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
    if (catalogDropDown.classList.contains('header-catalog__dropdown--active')) {
        hideScroll();
    } else {
        showScroll();
    }
});

document.querySelector('.menu__list-item-link--cleansing').addEventListener('click', (e) => {
    e.preventDefault();
    cleansingDropDown.classList.toggle('header-cleansing__dropdown--active');
    if (cleansingDropDown.classList.contains('header-cleansing__dropdown--active')) {
        hideScroll();
    } else {
        showScroll();
    }
});


window.addEventListener('click', (e) => {
    // if (!e.target.closest('.menu__list-item-link--catalog') && !e.target.closest('.header-catalog')) {
    //     catalogDropDown.classList.remove('header-catalog__dropdown--active');
    // };
    
    // if (!e.target.closest('.menu__list-item-link--cleansing')) {
    //     cleansingDropDown.classList.remove('header-cleansing__dropdown--active');
    // };
});

const resetNav = () => {
    catalogDropDown.classList.remove('header-catalog__dropdown--active');
    cleansingDropDown.classList.remove('header-cleansing__dropdown--active');
    showScroll();
}

window.addEventListener('resize', resetNav);

// === SCROLL FUNCTION ===

const hideScroll = () => {
    const scrollWidth = `${getScrollbarWidth()}px`;
    document.body.style.paddingRight = scrollWidth;
    document.body.style.overflow = 'hidden';

    document.body.style.paddingRight = scrollWidth;
};

const showScroll = () => {
    document.body.style.paddingRight = '';
    document.body.style.overflow = 'visible';

    document.body.style.paddingRight = '';
};

const getScrollbarWidth = () => {
    const outer = document.createElement('div');

    outer.style.position = 'absolute';
    outer.style.top = '-9999px';
    outer.style.width = '50px';
    outer.style.height = '50px';
    outer.style.overflow = 'scroll';
    outer.style.visibility = 'hidden';

    document.body.appendChild(outer);
    const ScrollBarWidth = outer.offsetWidth - outer.clientWidth;
    document.body.removeChild(outer);

    return ScrollBarWidth;
};

// === INTRO SLIDER ===

let introSlider = new Swiper(".intro__slider", {
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
                }, 111);
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
                }, 0.5);
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

// === TABS ===

const tabsWrapper = document.querySelectorAll('.tabs-wrapper')

tabsWrapper.forEach(item => {
    const btnTab = item.querySelectorAll('.tab'),
        tabContent = item.querySelectorAll('.tab-item')

    btnTab.forEach(itemBtn => itemBtn.addEventListener('click', selectTab))

    function selectTab() {
        btnTab.forEach((itemBtn) => itemBtn.classList.remove('active'))
        this.classList.add('active');
        let tabAtt = this.getAttribute('data-id')
        selectTabContent(tabAtt);
    }

    function selectTabContent(tabAtt) {
        tabContent.forEach( (itemContent) => {
            itemContent.getAttribute('id') === tabAtt ? itemContent.classList.add('active-tab') : itemContent.classList.remove('active-tab')
        })
    }
})

// === MIXITUP ===

const reviewsItemsMix = document.querySelector('.reviews-items');

if (reviewsItemsMix) {
    const reviewsMixtUp = mixitup(".reviews-items");
}

