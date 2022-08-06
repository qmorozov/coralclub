window.onload = function () {
    // === ACCESSIBILITY ===
    (function (document, window) {
        if (!document || !window) {
            return;
        }

        var styleText = '::-moz-focus-inner{border:0 !important;}:focus{outline: none !important;';
        var unfocus_style = document.createElement('STYLE');

        window.unfocus = function () {
            document.getElementsByTagName('HEAD')[0].appendChild(unfocus_style);

            document.addEventListener('mousedown', function () {
                unfocus_style.innerHTML = styleText + '}';
            });
            document.addEventListener('keydown', function () {
                unfocus_style.innerHTML = '';
            });
        };

        unfocus.style = function (style) {
            styleText += style;
        };

        unfocus();
    })(document, window);

    // === HEADER SEARCH FORM ===
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

    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('menu__list-item-link--catalog')) {
            catalogDropDown.classList.toggle('header-catalog__dropdown--active')
        } else if (!e.target.closest('.dropdown')) {
            catalogDropDown.classList.remove('header-catalog__dropdown--active')
        }

        if (!catalogDropDown.classList.contains('header-catalog__dropdown--active')) {
            showScroll()
        }

        if (e.target.classList.contains('concept__button')) {
            header.classList.toggle('header--active')
        }
    })

    const resetNav = () => {
        catalogDropDown.classList.remove('header-catalog__dropdown--active');
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

    // === SLIDERS ===
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
        autoHeight: true,
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

    // === PAPER SLIDER ===

    let bigSlider = new Swiper(".big-slider", {
        effect: "fade",
        slidesPerView: 'auto',
        spaceBetween: 100,
        speed: 200,
        loop: true,
        autoplay: true,
        autoplay: {
            delay: 2000,
        },
        grabCursor: true,
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
        const btnTab = document.querySelectorAll('.tab')
        const tabContent = document.querySelectorAll('.tab-item')

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

    const reviewsItemsMix = document.querySelector('.tag-system-items');

    (reviewsItemsMix) && mixitup(".tag-system-items")

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
                (window.innerWidth <= 700) ? wrapper.setAttribute('style', mobileImg): wrapper.setAttribute('style', desktopImg)
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


    // === YOUTUBE VIDEO ===

    const videos = document.querySelectorAll('.video')

    const generateIframeUrl = id => {
        let query = '?rel=0&showinfo=0&autoplay=1'
        return 'https://www.youtube.com/embed/' + id + query
    }

    const createIframe = id => {
        let iframe = document.createElement('iframe')

        iframe.setAttribute('allowfullscreen', '')
        iframe.setAttribute('allow', 'autoplay; encrypted-media')
        iframe.setAttribute('src', generateIframeUrl(id))
        iframe.setAttribute('autoplay', '1')

        return iframe
    }

    videos.forEach(el => {
        let videoHref = el.dataset.video
        let videoId = videoHref.replace('https://youtu.be/', '')
        let img = el.querySelector('img')
        let youtubeImgSrc = 'https://i.ytimg.com/vi/' + videoId + '/maxresdefault.jpg'
        img.setAttribute('src', youtubeImgSrc)

        el.addEventListener('click', () => {
            let iframeElement = createIframe(videoId)

            el.querySelector('img').remove()
            el.appendChild(iframeElement)
            el.querySelector('button').remove()
        })
    })

    // === CHANGE BORDER RADIUS TABS ===

    function debounce(cb, delay = 0) {
        let timeout
        return (...args) => {
            clearTimeout(timeout)
            timeout = setTimeout(() => {
                cb(...args)
            }, delay)
        }
    }

    if (document.querySelectorAll('.bg-tab-button').length > 0) {
        const items = [...document.querySelectorAll(".bg-tab-button")]
        const radius = "1rem"
        const updateDocumentWidth = debounce(() => {
            let itemTopLeft = items[0],
                itemTopRight, itemBottomLeft, itemBottomRight, itemEnd = items[items.length - 1]
            let offsetTop = items[0].offsetTop
            let rowLength
            items.forEach((e, i) => {
                e.removeAttribute("style")
     
                if (offsetTop < e.offsetTop) {
                    if (!rowLength) {
                        rowLength = i + 1
                    }
                    offsetTop = e.offsetTop
                    itemBottomLeft = items[i]
                    if (!itemTopRight)
                        itemTopRight = items[i - 1]
                    itemBottomRight = items[i - 1]
                }
     
            })
            itemTopLeft.style.borderTopLeftRadius = radius
            if (itemTopRight) {
                itemTopRight.style.borderTopRightRadius = radius
            } else{
                itemEnd.style.borderTopRightRadius = radius
            }
            if (itemBottomLeft) {
                itemBottomLeft.style.borderBottomLeftRadius = radius
            } else {
                itemTopLeft.style.borderBottomLeftRadius = radius
            }
     
            if (itemBottomRight) {
                const itemUnderIt = items.indexOf(itemBottomRight) + rowLength
                if (itemUnderIt > items.length)
                    itemBottomRight.style.borderBottomRightRadius = radius
            }
            itemEnd.style.borderBottomRightRadius = radius
        }, 100)
        const resizeObserver = new ResizeObserver((entries) =>
            updateDocumentWidth()
        );
        resizeObserver.observe(document.querySelector(".bg-tab-buttons"));
    }
}