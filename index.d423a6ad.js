const e={list:document.querySelector(".bestSellers__container"),card:document.createElement("div"),categoryField:document.querySelector(".shop-card__category"),loadBtn:document.querySelector("load-more"),output:document.querySelector(".output"),categoriesList:document.querySelector(".categories__list"),categoriesLink:document.querySelector(".categories__link")};e.categoriesList.style.listStyle="none";fetch("https://books-backend.p.goit.global/books/category-list").then((e=>e.json())).then((t=>{const o=t.map((({list_name:e})=>`<li class = "categories__item"><a href = "" class = "categories__link">${e}</a></li>`));return e.categoriesList.insertAdjacentHTML("beforeend",o.join("")),console.log(o),o}));localStorage.setItem("selected-category","Trade Fiction Paperback");async function t(){for(data of(promises=await(async()=>{const e=await fetch(`https://books-backend.p.goit.global/books/category?category=${localStorage.getItem("selected-category")}`),t=await e.json();return console.log(t),t})().then((e=>e.map((e=>e)))),promises))e.output.textContent=localStorage.getItem("selected-category"),e.card=`  \n  <div class='shop-card'>\n  <div class='image-block'>\n    <img class='image-block__image' src=${data.book_image} />\n  </div>\n  <div class='shop-card__meta'>\n    <div class='shop-card__title'>${data.title}</div>\n    <div class='shop-card__author'>${data.author}</div>\n  </div\n  </div>\n  </div>\n`,e.categoryField.insertAdjacentHTML("beforeend",e.card)}setTimeout((()=>t()),1e3);
//# sourceMappingURL=index.d423a6ad.js.map
