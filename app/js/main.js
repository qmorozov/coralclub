document.querySelector(".header-search__button").addEventListener("click",e=>{e.preventDefault(),document.querySelector(".header-search__form").classList.toggle("header-search__form--active")});const catalogDropDown=document.querySelector(".catalog-dropdown");document.querySelector(".menu__list-item-link--catalog").addEventListener("click",()=>{catalogDropDown.classList.toggle("catalog-dropdown--active")}),window.addEventListener("click",e=>{e.target.closest(".menu__list-item-link--catalog")||e.target.closest(".catalog-dropdown")||catalogDropDown.classList.remove("catalog-dropdown--active")});
//# sourceMappingURL=main.js.map
