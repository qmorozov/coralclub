document.querySelector(".header-search__button").addEventListener("click",e=>{e.preventDefault(),document.querySelector(".header-search__form").classList.toggle("header-search__form--active")});const catalogDropDown=document.querySelector(".catalog-dropdown");document.querySelector(".menu__list-item-link--catalog").addEventListener("click",e=>{e.preventDefault(),document.body.classList.toggle("shadow"),catalogDropDown.classList.toggle("catalog-dropdown--active")}),window.addEventListener("click",e=>{e.target.closest(".menu__list-item-link--catalog")||e.target.closest(".catalog-dropdown")||(document.body.classList.remove("shadow"),catalogDropDown.classList.remove("catalog-dropdown--active"))});let introSlider=new Swiper(".intro__slider",{effect:"fade",slidesPerView:"auto",speed:1e3,loop:!0,autoplay:!0,autoplay:{delay:7e3},grabCursor:!0});
//# sourceMappingURL=main.js.map
