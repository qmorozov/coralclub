window.onload = function () {
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

    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('menu__list-item-link--catalog')) {
            catalogDropDown.classList.toggle('header-catalog__dropdown--active')
        } else if (!e.target.closest('.dropdown')) {
            catalogDropDown.classList.remove('header-catalog__dropdown--active')
        }

        if (e.target.classList.contains('menu__list-item-link--cleansing')) {
            cleansingDropDown.classList.toggle('header-cleansing__dropdown--active')
        } else if (!e.target.closest('.dropdown')) {
            cleansingDropDown.classList.remove('header-cleansing__dropdown--active')
        }

        if (!catalogDropDown.classList.contains('header-catalog__dropdown--active')) {
            showScroll()
        }

        if (!cleansingDropDown.classList.contains('header-cleansing__dropdown--active')) {
            showScroll()
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
        if (e.target.classList.contains('dropdown__mobile-title--catalog')) {
            catalogDropDown.classList.remove('header-catalog__dropdown--active');
            showScroll();
        }

        if (e.target.classList.contains('dropdown__mobile-title--cleansing')) {
            cleansingDropDown.classList.remove('header-cleansing__dropdown--active');
            hideScroll();
        }
    })

    // === MOBILE HEADER ===

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

    // === ARTICLES - SLIDER ===

    let articlesSlider = new Swiper(".articles-slider", {
        slidesPerView: 1,
        spaceBetween: 25,
        slidesPerColumn: 1,
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
        breakpoints: {
            650: {
                slidesPerView: 2
            },

            800: {
                slidesPerView: 2,
                slidesPerColumn: 2,
                slidesPerColumnFill: 'row',
            },

            1024: {
                slidesPerView: 3,
                spaceBetween: 65,
            },

            1440: {
                slidesPerView: 4,
                spaceBetween: 30,
            },

            1600: {
                slidesPerView: 4,
                spaceBetween: 38
            }
        }
    });

    // === RECOMENDED SECTION SLIDER ===
    
    let recommendedSlider = new Swiper(".recommended-slider", {
        slidesPerView: 1,
        spaceBetween: 20,
        slidesPerColumn: 1,
        loop: true,
        clickable: true,
        speed: 1000,
        autoplay: {
            delay: 7000,
        },
        grabCursor: true,
        breakpoints: {
            660: {
                slidesPerView: 2
            },

            800: {
                slidesPerView: 2,
            },

            1024: {
                slidesPerView: 3,
            },

            1440: {
                slidesPerView: 4,
            },

            1600: {
                slidesPerView: 4,
            }
        }
    });

    // === TABS ===

    document.querySelectorAll('.tabs-wrapper').forEach(item => {
        const btnTab = item.querySelectorAll('.tab')
        const tabContent = item.querySelectorAll('.tab-item')

        btnTab.forEach(itemBtn => itemBtn.addEventListener('click', selectTab))

        function selectTab() {
            btnTab.forEach((itemBtn) => itemBtn.classList.remove('active'))
            this.classList.add('active');
            let tabAtt = this.getAttribute('data-id')
            selectTabContent(tabAtt);
        }

        const selectTabContent = tabAtt => {
            tabContent.forEach((itemContent) => {
                itemContent.getAttribute('id') === tabAtt ? itemContent.classList.add('active-tab') : itemContent.classList.remove('active-tab')
            })
        }
    })

    // === PRODUCT TABS ===

    const productTabs = () => {
        const btnTab = document.querySelectorAll('.product-page__tab')
        const tabContent = document.querySelectorAll('.product-page__tabs-item')

        btnTab.forEach(itemBtn => itemBtn.addEventListener('click', selectTab))

        function selectTab() {
            btnTab.forEach((itemBtn) => itemBtn.classList.remove('active'))
            this.classList.add('active');
            let tabAtt = this.getAttribute('data-id')
            selectTabContent(tabAtt);
        }

        const selectTabContent = tabAtt => {
            tabContent.forEach((itemContent) => {
                itemContent.getAttribute('id') === tabAtt ? itemContent.classList.add('active-tab') : itemContent.classList.remove('active-tab')
            })
        }
    }
    productTabs()

    // === MIXITUP ===

    const reviewsItemsMix = document.querySelector('.reviews-items');

    (reviewsItemsMix) && mixitup(".reviews-items")

    // === CUSTOM SELECT ===

    const headerLangSelect = document.querySelector('.header-mobile-lang');

    const choices = new Choices(headerLangSelect, {
        searchEnabled: false,
    });

    // === DIFFERENT BG IMAGE ===

    const wrapper = document.querySelector('.entry')

    if (wrapper) {
        const desktopImg = wrapper.getAttribute('style')
        const mobileImg = wrapper.getAttribute('data-bg')

        if (desktopImg && mobileImg) {
            const differentBgImg = () => {
                (window.innerWidth <= 650) ? wrapper.setAttribute('style', mobileImg): wrapper.setAttribute('style', desktopImg)
            }
            differentBgImg()
            window.addEventListener(`resize`, () => differentBgImg(), false);
        }
    }


    // === SHOW MORE TEXT ===

    const showMoreBtn = document.querySelector('.show-more__button')

    if (showMoreBtn) {
        showMoreBtn.addEventListener('click', () => {
            const dots = document.querySelector('.show-more__dots')
            const moreText = document.querySelector('.show-more__more-text')
    
            if (dots.style.display === 'none') {
                dots.style.display = 'inline'
                showMoreBtn.innerHTML = 'Подробнее'
                moreText.style.display = 'none'
            } else {
                dots.style.display = 'none'
                showMoreBtn.innerHTML = 'Скрыть'
                moreText.style.display = 'inline'
            }
        })
    }
}