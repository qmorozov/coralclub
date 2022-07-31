window.onload=function(){!function(e,t){if(e&&t){var o="::-moz-focus-inner{border:0 !important;}:focus{outline: none !important;",i=e.createElement("STYLE");t.unfocus=function(){e.getElementsByTagName("HEAD")[0].appendChild(i),e.addEventListener("mousedown",(function(){i.innerHTML=o+"}"})),e.addEventListener("keydown",(function(){i.innerHTML=""}))},unfocus.style=function(e){o+=e},unfocus()}}(document,window);const e=document.querySelector(".search");document.querySelector(".search__button").addEventListener("click",t=>{t.preventDefault(),e.classList.add("search--active"),i()}),document.querySelector(".search-form__button-close").addEventListener("click",t=>{t.preventDefault(),e.classList.remove("search--active"),r()});const t=document.querySelector(".header");document.querySelector(".burger-btn").addEventListener("click",(function(e){e.preventDefault(),t.classList.toggle("header--active")})),window.addEventListener("click",e=>{e.target.closest(".header")?i():(t.classList.remove("header--active"),r())});const o=document.querySelector(".header-catalog");window.addEventListener("click",e=>{e.target.classList.contains("menu__list-item-link--catalog")?o.classList.toggle("header-catalog__dropdown--active"):e.target.closest(".dropdown")||o.classList.remove("header-catalog__dropdown--active"),o.classList.contains("header-catalog__dropdown--active")||r(),e.target.classList.contains("concept__button")&&t.classList.toggle("header--active")});if(window.addEventListener("resize",()=>{o.classList.remove("header-catalog__dropdown--active"),r()}),window.addEventListener("click",e=>{e.target.classList.contains("dropdown__mobile-title--catalog")&&(o.classList.remove("header-catalog__dropdown--active"),r()),e.target.classList.contains("dropdown__mobile-title--cleansing")&&i()}),window.innerWidth<=1e3){document.querySelectorAll(".dropdown__item-mobile").forEach(e=>{org_dropdown=e.innerHTML,new_dropdown="<div class='dropdown__item-mobile-wrapper'>"+org_dropdown+"</div>",e.innerHTML=new_dropdown});const e=document.querySelectorAll(".header__item");document.querySelector(".header__inner").insertBefore(e[0],e[3]);const t=document.createElement("div");document.querySelectorAll(".header__item").forEach(e=>{e.classList.contains("header__item--mobile")&&(t.className="header-top-mobile-wrapper",e.parentNode.insertBefore(t,e),t.appendChild(e))}),document.querySelectorAll(".dropdown__item-title").forEach(e=>{e.addEventListener("click",()=>{e.nextSibling.classList.add("dropdown__item-list-wrapper--active")})}),document.querySelectorAll(".dropdown__item-list-title-wrapper").forEach(e=>{e.addEventListener("click",()=>{e.closest(".dropdown__item-list-wrapper").classList.remove("dropdown__item-list-wrapper--active")})})}const i=()=>{const e=s()+"px";document.body.style.paddingRight=e,document.body.style.overflow="hidden",document.body.style.paddingRight=e},r=()=>{document.body.style.paddingRight="",document.body.style.overflow="visible",document.body.style.paddingRight=""},s=()=>{const e=document.createElement("div");e.style.position="absolute",e.style.top="-9999px",e.style.width="50px",e.style.height="50px",e.style.overflow="scroll",e.style.visibility="hidden",document.body.appendChild(e);const t=e.offsetWidth-e.clientWidth;return document.body.removeChild(e),t};new Swiper(".intro__slider",{effect:"fade",slidesPerView:"auto",speed:1e3,loop:!0,autoplay:!0,autoplay:{delay:7e3},grabCursor:!0}),new Swiper(".articles-slider",{slidesPerView:1,spaceBetween:25,slidesPerColumn:1,autoHeight:!0,pagination:{el:".swiper-pagination"},loop:!0,clickable:!0,speed:1e3,autoplay:{delay:7e3},grabCursor:!0,breakpoints:{650:{slidesPerView:2},800:{slidesPerView:2,slidesPerColumn:2,slidesPerColumnFill:"row"},1024:{slidesPerView:3,spaceBetween:65},1440:{slidesPerView:4,spaceBetween:30},1600:{slidesPerView:4,spaceBetween:38}}}),new Swiper(".recommended-slider",{slidesPerView:1,spaceBetween:20,slidesPerColumn:1,loop:!0,clickable:!0,speed:1e3,autoplay:{delay:7e3},grabCursor:!0,breakpoints:{660:{slidesPerView:2},800:{slidesPerView:2},1024:{slidesPerView:3},1440:{slidesPerView:4},1600:{slidesPerView:4}}}),new Swiper(".big-slider",{effect:"fade",slidesPerView:"auto",spaceBetween:100,speed:200,loop:!0,autoplay:!0,autoplay:{delay:2e3},grabCursor:!0});document.querySelectorAll(".tabs-wrapper").forEach(e=>{const t=e.querySelectorAll(".tab"),o=e.querySelectorAll(".tab-item");function i(){t.forEach(e=>e.classList.remove("active")),this.classList.add("active");let e=this.getAttribute("data-id");r(e)}t.forEach(e=>e.addEventListener("click",i));const r=e=>{o.forEach(t=>{t.getAttribute("id")===e?t.classList.add("active-tab"):t.classList.remove("active-tab")})}});(()=>{const e=document.querySelectorAll(".tab"),t=document.querySelectorAll(".tab-item");function o(){e.forEach(e=>e.classList.remove("active")),this.classList.add("active");let t=this.getAttribute("data-id");i(t)}e.forEach(e=>e.addEventListener("click",o));const i=e=>{t.forEach(t=>{t.getAttribute("id")===e?t.classList.add("active-tab"):t.classList.remove("active-tab")})}})();document.querySelector(".tag-system-items")&&mixitup(".tag-system-items");const n=document.querySelector(".header-mobile-lang"),l=(new Choices(n,{searchEnabled:!1}),document.querySelector(".entry"));if(l){const e=l.getAttribute("style"),t=l.getAttribute("data-bg");if(e&&t){const o=()=>{window.innerWidth<=700?l.setAttribute("style",t):l.setAttribute("style",e)};o(),window.addEventListener("resize",()=>o(),!1)}}const a=document.querySelector(".show-more__button");a&&a.addEventListener("click",()=>{const e=document.querySelector(".show-more__dots"),t=document.querySelector(".show-more__more-text");"none"===e.style.display?(e.style.display="inline",a.innerHTML="Подробнее",t.style.display="none"):(e.style.display="none",a.innerHTML="Скрыть",t.style.display="inline")});const d=document.querySelectorAll(".video");if(d.forEach(e=>{let t=e.dataset.video.replace("https://youtu.be/",""),o=e.querySelector("img"),i="https://i.ytimg.com/vi/"+t+"/maxresdefault.jpg";o.setAttribute("src",i),e.addEventListener("click",()=>{let o=(e=>{let t=document.createElement("iframe");return t.setAttribute("allowfullscreen",""),t.setAttribute("allow","autoplay; encrypted-media"),t.setAttribute("src",(e=>"https://www.youtube.com/embed/"+e+"?rel=0&showinfo=0&autoplay=1")(e)),t.setAttribute("autoplay","1"),t})(t);e.querySelector("img").remove(),e.appendChild(o),e.querySelector("button").remove()})}),document.querySelectorAll(".detox-marathon__tab").length>0){const e=[...document.querySelectorAll(".detox-marathon__tab")],t="1rem",o=function(e,t=0){let o;return(...i)=>{clearTimeout(o),o=setTimeout(()=>{e(...i)},t)}}(()=>{let o,i,r,s,n=e[0],l=e[e.length-1],a=e[0].offsetTop;if(e.forEach((t,n)=>{t.removeAttribute("style"),a<t.offsetTop&&(s||(s=n+1),a=t.offsetTop,i=e[n],o||(o=e[n-1]),r=e[n-1])}),n.style.borderTopLeftRadius=t,o?o.style.borderTopRightRadius=t:l.style.borderTopRightRadius=t,i?i.style.borderBottomLeftRadius=t:n.style.borderBottomLeftRadius=t,r){e.indexOf(r)+s>e.length&&(r.style.borderBottomRightRadius=t)}l.style.borderBottomRightRadius=t},100);new ResizeObserver(e=>o()).observe(document.querySelector(".detox-marathon__tabs"))}};
//# sourceMappingURL=main.js.map
