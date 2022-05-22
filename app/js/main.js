const searchForm=document.querySelector(".search");document.querySelector(".search__button").addEventListener("click",e=>{e.preventDefault(),searchForm.classList.add("search--active"),hideScroll()}),document.querySelector(".search-form__button-close").addEventListener("click",e=>{e.preventDefault(),searchForm.classList.remove("search--active"),showScroll()});const header=document.querySelector(".header");document.querySelector(".burger-btn").addEventListener("click",(function(e){e.preventDefault(),header.classList.toggle("header--active")})),window.addEventListener("click",e=>{e.target.closest(".header")?hideScroll():(header.classList.remove("header--active"),showScroll())});const catalogDropDown=document.querySelector(".header-catalog"),cleansingDropDown=document.querySelector(".header-cleansing");document.querySelector(".menu__list-item-link--catalog").addEventListener("click",e=>{e.preventDefault(),catalogDropDown.classList.toggle("header-catalog__dropdown--active")}),document.querySelector(".menu__list-item-link--cleansing").addEventListener("click",e=>{e.preventDefault(),cleansingDropDown.classList.toggle("header-cleansing__dropdown--active")}),window.addEventListener("click",()=>{cleansingDropDown.classList.contains("header-cleansing__dropdown--active")?hideScroll():showScroll(),catalogDropDown.classList.contains("header-catalog__dropdown--active")?hideScroll():showScroll()});const resetNav=()=>{catalogDropDown.classList.remove("header-catalog__dropdown--active"),cleansingDropDown.classList.remove("header-cleansing__dropdown--active"),showScroll()};if(window.addEventListener("resize",resetNav),window.addEventListener("click",e=>{e.target.classList.contains("dropdown__mobile-title-wrapper--catalog")&&(catalogDropDown.classList.remove("header-catalog__dropdown--active"),showScroll()),e.target.classList.contains("dropdown__mobile-title-wrapper--cleansing")&&(cleansingDropDown.classList.remove("header-cleansing__dropdown--active"),hideScroll())}),window.innerWidth<=1e3){document.querySelectorAll(".dropdown__item-mobile").forEach(e=>{org_dropdown=e.innerHTML,new_dropdown="<div class='dropdown__item-mobile-wrapper'>"+org_dropdown+"</div>",e.innerHTML=new_dropdown});const e=document.querySelectorAll(".header__item");document.querySelector(".header__inner").insertBefore(e[0],e[3]);const t=document.createElement("div");document.querySelectorAll(".header__item").forEach(e=>{e.classList.contains("header__item--mobile")&&(t.className="header-top-mobile-wrapper",e.parentNode.insertBefore(t,e),t.appendChild(e))}),document.querySelectorAll(".dropdown__item-title").forEach(e=>{console.log(e.nextSibling),e.addEventListener("click",()=>{e.nextSibling.classList.add("dropdown__item-list-wrapper--active")})}),document.querySelectorAll(".dropdown__item-list-title-wrapper").forEach(e=>{e.addEventListener("click",()=>{e.closest(".dropdown__item-list-wrapper").classList.remove("dropdown__item-list-wrapper--active")})})}const hideScroll=()=>{const e=getScrollbarWidth()+"px";document.body.style.paddingRight=e,document.body.style.overflow="hidden",document.body.style.paddingRight=e},showScroll=()=>{document.body.style.paddingRight="",document.body.style.overflow="visible",document.body.style.paddingRight=""},getScrollbarWidth=()=>{const e=document.createElement("div");e.style.position="absolute",e.style.top="-9999px",e.style.width="50px",e.style.height="50px",e.style.overflow="scroll",e.style.visibility="hidden",document.body.appendChild(e);const t=e.offsetWidth-e.clientWidth;return document.body.removeChild(e),t};let introSlider=new Swiper(".intro__slider",{effect:"fade",slidesPerView:"auto",speed:1e3,loop:!0,autoplay:!0,autoplay:{delay:7e3},grabCursor:!0}),cetrificateNumber=document.querySelector(".about__item-number---certificates");document.querySelectorAll(".about__item-number").forEach(e=>{if(e.classList.contains("about__item-number---certificates")){let t=e.getBoundingClientRect().top-300,o=+e.innerHTML,r=+e.dataset.max;window.addEventListener("scroll",(function i(){if(window.pageYOffset>t-window.innerHeight/2){this.removeEventListener("scroll",i);let t=setInterval((function(){e.innerHTML=++o,o==r&&clearInterval(t)}),0)}}))}else{let t=e.getBoundingClientRect().top-300,o=+e.innerHTML,r=+e.dataset.max;window.addEventListener("scroll",(function i(){if(window.pageYOffset>t-window.innerHeight/2){this.removeEventListener("scroll",i);let t=setInterval((function(){e.innerHTML=++o,o==r&&clearInterval(t)}),56)}}))}});let articlesSlider=new Swiper(".articles-slider",{slidesPerView:1,spaceBetween:25,slidesPerColumn:1,pagination:{el:".swiper-pagination"},loop:!0,clickable:!0,speed:1e3,autoplay:{delay:7e3},grabCursor:!0,breakpoints:{650:{slidesPerView:2},800:{slidesPerView:2,slidesPerColumn:2,slidesPerColumnFill:"row"},1024:{slidesPerView:3,spaceBetween:65},1440:{slidesPerView:4,spaceBetween:30},1600:{slidesPerView:4,spaceBetween:38}}});const tabsWrapper=document.querySelectorAll(".tabs-wrapper");tabsWrapper.forEach(e=>{const t=e.querySelectorAll(".tab"),o=e.querySelectorAll(".tab-item");function r(){t.forEach(e=>e.classList.remove("active")),this.classList.add("active"),function(e){o.forEach(t=>{t.getAttribute("id")===e?t.classList.add("active-tab"):t.classList.remove("active-tab")})}(this.getAttribute("data-id"))}t.forEach(e=>e.addEventListener("click",r))});const reviewsItemsMix=document.querySelector(".reviews-items");if(reviewsItemsMix){mixitup(".reviews-items")}const headerLangSelect=document.querySelector(".header-mobile-lang"),choices=new Choices(headerLangSelect,{searchEnabled:!1});
//# sourceMappingURL=main.js.map
