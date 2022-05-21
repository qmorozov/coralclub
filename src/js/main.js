// === HEADER SEARCH FORN ===
const searchForm = document.querySelector('.search')

document.querySelector('.search__button').addEventListener('click', (e) => {
    e.preventDefault()
    searchForm.classList.add('search--active')
    hideScroll()
})

document.querySelector('.search-form__button-close').addEventListener('click', (e) => {
    e.preventDefault()
    searchForm.classList.remove('search--active')
    showScroll()
})

// === BURGER BTN ===

const header = document.querySelector('.header');

document.querySelector('.burger-btn').addEventListener('click', function (e) {
    e.preventDefault();
    header.classList.toggle('header--active')    
});

window.addEventListener('click', (e) => {
    if (!e.target.closest('.header')) {
        header.classList.remove('header--active')
        showScroll()
    } else {
        hideScroll()
    }
});

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

window.addEventListener('click', () => {
    if (cleansingDropDown.classList.contains('header-cleansing__dropdown--active')) {
        hideScroll();
    } else {
        showScroll();
    }

    if (catalogDropDown.classList.contains('header-catalog__dropdown--active')) {
        hideScroll();
    } else {
        showScroll();
    }
})

const resetNav = () => {
    catalogDropDown.classList.remove('header-catalog__dropdown--active');
    cleansingDropDown.classList.remove('header-cleansing__dropdown--active');
    showScroll();
}

window.addEventListener('resize', resetNav);

// === DROPDOWN MOBILE ===

window.addEventListener('click', (e) => {
    if (e.target.classList.contains('dropdown__mobile-title-wrapper--catalog')) {
        catalogDropDown.classList.remove('header-catalog__dropdown--active');
        showScroll();
    }

    if (e.target.classList.contains('dropdown__mobile-title-wrapper--cleansing')) {
        cleansingDropDown.classList.remove('header-cleansing__dropdown--active');
        hideScroll();
    }
})

// === MOBILE HEADER ===

window.addEventListener('resize', () => {
    if (window.innerWidth <= 1000) {
        document.querySelectorAll('.dropdown__item-mobile').forEach(dropdownItem => {
            org_dropdown = dropdownItem.innerHTML;
            new_dropdown = "<div class='dropdown__item-mobile-wrapper'>" + org_dropdown + "</div>";
            dropdownItem.innerHTML = new_dropdown;
        })
    
        const headerItem = document.querySelectorAll('.header__item')
        document.querySelector('.header__inner').insertBefore(headerItem[0], headerItem[3]);
        
        
        const wrapper = document.createElement('div')
        
        document.querySelectorAll('.header__item').forEach(headerItem => {
            if (headerItem.classList.contains('header__item--mobile')) {
                wrapper.className = 'header-top-mobile-wrapper'
                headerItem.parentNode.insertBefore(wrapper, headerItem);
                wrapper.appendChild(headerItem);
            }
        })
    
        document.querySelectorAll('.dropdown__item-title').forEach(item => {
            console.log(item.nextSibling);
            item.addEventListener('click', () => {
                item.nextSibling.classList.add('dropdown__item-list-wrapper--active')
            })
        })
    
        document.querySelectorAll('.dropdown__item-list-title-wrapper').forEach(item => {
            item.addEventListener('click', () => {
                item.closest('.dropdown__item-list-wrapper').classList.remove('dropdown__item-list-wrapper--active')
            })
        })
    }
})


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
                }, 56);
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
                }, 0);
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
        tabContent.forEach((itemContent) => {
            itemContent.getAttribute('id') === tabAtt ? itemContent.classList.add('active-tab') : itemContent.classList.remove('active-tab')
        })
    }
})

// === MIXITUP ===

const reviewsItemsMix = document.querySelector('.reviews-items');

if (reviewsItemsMix) {
    const reviewsMixtUp = mixitup(".reviews-items");
}

// === CUSTOM SELECT ===

const headerLangSelect = document.querySelector('.header-mobile-lang');

const choices = new Choices(headerLangSelect, {
    searchEnabled: false,
});
