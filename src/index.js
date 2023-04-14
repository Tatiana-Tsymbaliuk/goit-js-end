//import { bookCardTemplates } from './templates';
const refs = {
  list: document.querySelector('.bestSellers__container'),
  card: document.createElement('div'),
  categoryField: document.querySelector('.shop-card__category'),
        loadBtn: document.querySelector('load-more'),
        output: document.querySelector(".output"),
        categoriesList: document.querySelector('.categories__list'), 
  categoriesLink: document.querySelector('.categories__link')
};
const LOCALSTORAGE_KEY = "selected-category";

refs.categoriesList.style.listStyle = 'none';

const fetchArray = fetch('https://books-backend.p.goit.global/books/category-list')
.then(response => response.json())
.then(data => {
	const array = data.map(({ list_name }) => {
	return `<li class = "categories__item"><a href = "" class = "categories__link">${list_name}</a></li>`
	})
	refs.categoriesList.insertAdjacentHTML('beforeend', array.join(''));
        console.log(array)
	return array;
});

const handleClick = event => {
        console.log(event);
        localStorage.setItem(LOCALSTORAGE_KEY, event.list_name.value);  
            
};
//console.log(LOCALSTORAGE_KEY);
 localStorage.setItem(LOCALSTORAGE_KEY, "Trade Fiction Paperback");
//localStorage.setItem("selected-category", "Series Books");

//------------------Запрос на API
const fetchBook = async () => {       
        const res = await fetch(
                        `https://books-backend.p.goit.global/books/category?category=${localStorage.getItem(
                                LOCALSTORAGE_KEY
                        )}`
                );
        const books = await res.json();
        console.log(books);
        return books;       
};

//fetchBook();
// function updateOutput() {
//         refs.output.textContent = localStorage.getItem(LOCALSTORAGE_KEY);       
// }

function rendeSelectedCategory() {
              
return (refs.card = `  
  <div class='shop-card'>
  <div class='image-block'>
    <img class='image-block__image' src=${data.book_image} />
  </div>
  <div class='shop-card__meta'>
    <div class='shop-card__title'>${data.title}</div>
    <div class='shop-card__author'>${data.author}</div>
  </div
  </div>
  </div>
`);
}
async function renderFetch() {
         //refs.list.innerHTML = '';
//if (localStorage.getItem('selected-category')) {
      promises = await fetchBook().then(data => {
                        const result = data.map(value => {
                                return value;
                        });
                        return result;
                });
                //refs.categoryField.innerHTML = refs.category;
        for (data of promises) {
                        refs.output.textContent = localStorage.getItem(LOCALSTORAGE_KEY);  
                        rendeSelectedCategory();
                        refs.categoryField.insertAdjacentHTML('beforeend', refs.card);
                }
      
        
  //} 

}
setTimeout(() => renderFetch(), 1000);

// a.addEventListener('click', handleClick);