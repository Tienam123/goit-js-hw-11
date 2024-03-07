var h=Object.defineProperty;var m=(s,e,t)=>e in s?h(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var u=(s,e,t)=>(m(s,typeof e!="symbol"?e+"":e,t),t);import{i as a,S as d}from"./assets/vendor-acbca2f4.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))f(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&f(n)}).observe(document,{childList:!0,subtree:!0});function t(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function f(r){if(r.ep)return;r.ep=!0;const o=t(r);fetch(r.href,o)}})();function g(s){return s.map(e=>`
  <li class="gallery-item">
   <a href="${e.largeImageURL}">
   <img src="${e.webformatURL}"
        loading="lazy"
        alt="${e.tags}"
            >
       <ul class="gallery__description-list gallery-description-list">
         <li class="gallery-description-list__item">
           <h3>Likes</h3>
           <p>${e.likes}</p>
         </li>
         <li class="gallery-description-list__item">
           <h3>Views</h3>
           <p>${e.views}</p>
         </li>
         <li class="gallery-description-list__item">
           <h3>Comments</h3>
           <p>${e.comments}</p>
         </li>
         <li class="gallery-description-list__item">
           <h3>Downloads</h3>
           <p>${e.downloads}</p>
         </li>
       </ul>
       </a>
  </li>`).join("")}const i=class i{static show(){i.spinner.classList.remove("hidden")}static hide(){i.spinner.classList.add("hidden")}};u(i,"spinner",document.querySelector(".loader-backdrop"));let l=i;const y="41512134-7ce1694d07a59eb7d39c787c8";class b{constructor(){this.searchQuery=""}fetchArticles(){const e=`https://pixabay.com/api/?key=${y}&q=${this.searchQuery}&image_type="photo"&orientation="horisontal"&safesearch="true"`;return l.show(),fetch(e).then(t=>t.json()).then(t=>(l.hide(),t)).catch(t=>{a.show({message:t.message,backgroundColor:"#fc3d03",messageColor:"#fff",close:!1,progressBarColor:"#fff",position:"topRight",timeout:1e3})})}get query(){return this.searchQuery}set query(e){this.searchQuery=e}}const c={searchForm:document.querySelector(".js-form"),gallery:document.querySelector(".js-gallery")},p=new b;c.searchForm.addEventListener("submit",w);function w(s){s.preventDefault();let e=s.target.elements.query.value.trim();if(e===""){a.show({message:"Поле не может быть пустым",backgroundColor:"#fc3d03",messageColor:"#fff",close:!1,progressBarColor:"#fff",position:"topRight",timeout:1e3});return}e.length>100&&a.show({message:"Поле не может быть больше 100 символов",backgroundColor:"#fc3d03",messageColor:"#fff",close:!1,progressBarColor:"#fff",position:"topRight",timeout:1e3}),e=e.split(" ").join("+"),p.query=e,c.gallery.innerHTML="",p.fetchArticles().then(t=>{t.hits.length?(c.gallery.insertAdjacentHTML("afterbegin",g(t.hits)),new d(".gallery a",{captions:!0,captionsData:"alt",captionPosition:"bottom",captionDelay:250})):a.show({message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#fc3d03",messageColor:"#fff",close:!1,progressBarColor:"#fff",position:"topRight",timeout:1e3})})}
//# sourceMappingURL=commonHelpers.js.map
