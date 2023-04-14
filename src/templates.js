export function bookCardTemplates({book_image, title, author}) {
return ( `
  <div class='shop-card'>
  <div class='image-block'>
    <img class='image-block__image' src=${books.book_image} />
  </div>
  <div class='shop-card__meta'>
    <div class='shop-card__title'>${title}</div>
    <div class='shop-card__author'>${author}</div>
  </div
  </div>
  </div>
`);
}