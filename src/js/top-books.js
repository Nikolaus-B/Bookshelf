import {
  fetchCategoryBooks,
  fetchCategoryList,
  fetchTopBooks,
  fetchBookInfo,
} from './api-request';
import { createCategoryMarkup, createModalWindowMarkup } from './mark-up';
import { toggleCategoryBtn } from './categories';
import { openModal } from './modal';
const topBooksContainer = document.querySelector('.best-sellers');
const preloader = document.querySelector('.preloader');

renderTopBooks();

export default async function renderTopBooks() {
  preloader.classList.add('visible');

  const data = await fetchTopBooks();
  toggleCategoryBtn('all');
  createGalleryItem(data);

  document.querySelectorAll('.books-btn').forEach(btnItem => {
    btnItem.addEventListener('click', function (event) {
      let cattegoryId = event.target.dataset.id;

      fetchCategoryBooks(cattegoryId).then(response =>
        renderCategoryBooks(cattegoryId, response)
      );
    });
  });

  setTimeout(() => {
    preloader.classList.remove('visible');
  }, 300);
}

function createGalleryItem(data) {
  const markup = `
    <div class="top-books-container">
    <h1 class="title-book">Best Sellers
    <span class="title-book-span">Books</span>
    </h1>
    <ul class="books-container"> ${data
      .map(elements => {
        return `
      <li class="books-list">
      <h3 class="books-list-title">${elements.list_name}</h3>
        <div class="books-card-container" data-list-id="${elements.list_name}">
          ${elements.books
            .map(book => {
              return createTopMarkup(book);
            })
            .join('')}
        </div>
        <button class="books-btn" type="button" data-id="${
          elements.list_name
        }">see more</button>
      </li>
      `;
      })
      .join('')}</ul>
      </div>`;

  topBooksContainer.innerHTML = markup;

  // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  const booksArray = document.querySelectorAll('.books-intem-link');
  const modalInfoContainer = document.querySelector('.modal-info-container');
  const modalBtnAdd = document.querySelector('.modal-btn-add');
  const modalBtnRemove = document.querySelector('.modal-btn-remove');
  const modalTip = document.querySelector('.modal-tip');

  let bookId;
  const STORAGE_KEY = 'books';

  booksArray.forEach(book => {
    book.addEventListener('click', async e => {
      bookId = e.currentTarget.dataset.id;

      openModal();

      const book = await fetchBookInfo(bookId);
      modalInfoContainer.insertAdjacentHTML(
        'afterbegin',
        createModalWindowMarkup(book)
      );
    });
  });

  modalBtnAdd.addEventListener('click', async e => {
    let booksArr = [];
    const book = await fetchBookInfo(bookId);

    const data = localStorage.getItem(STORAGE_KEY);
    const storageData = JSON.parse(data);

    if (data !== null) {
      booksArr = JSON.parse(data);
      booksArr.push(book);
    } else {
      booksArr.push(book);
    }

    localStorage.setItem(STORAGE_KEY, JSON.stringify(booksArr));

    const newStorageData = storageData.filter(book => book._id !== bookId);
    console.log(newStorageData);

    modalBtnAdd.classList.add('visually-hidden');
    modalBtnRemove.classList.remove('visually-hidden');
    modalTip.classList.remove('visually-hidden');
  });

  modalBtnRemove.addEventListener('click', async e => {
    let booksArr = [];
    await fetchBookInfo(bookId);

    const data = localStorage.getItem(STORAGE_KEY);
    booksArr = JSON.parse(data) || [];

    const indexOfObject = booksArr.findIndex(obj => obj._id === bookId);

    if (indexOfObject !== -1) {
      booksArr.splice(indexOfObject, 1);
    }

    localStorage.setItem(STORAGE_KEY, JSON.stringify(booksArr));

    modalBtnRemove.classList.add('visually-hidden');
    modalBtnAdd.classList.remove('visually-hidden');
    modalTip.classList.add('visually-hidden');
  });
}

function renderCategoryBooks(id, content) {
  toggleCategoryBtn(id);
  let innerHTML = '';

  var category = id;
  let words = category.split(' ');
  words[words.length - 1] = `<span class="colored">${
    words[words.length - 1]
  }</span>`;
  category = words.join(' ');
  innerHTML += `<h2 class="category-title">${category}</h2>`;

  for (let index = 0; index < content.length; index++) {
    innerHTML += createCategoryMarkup(content[index]);
  }
  topBooksContainer.innerHTML = innerHTML;
}

function createTopMarkup(book) {
  return `<a href="#" class="books-intem-link" aria-label="books-item-link" rel="noopener noreferrer" data-id='${book._id}'>

    <div class="books-card">
      <img
        src="${book.book_image}"
        alt="${book.title}"
        class="books-card-title-img"
        width="180"
        height="256"
        loading="lazy"
      />
      <div class="books-overlay">
        <p class="books-overlay-text">quick view</p>
        </div>
     </div>
      <div class="books-descr">
        <h3 class="books-card-title">${book.title}</h3>
        <p class="books-card-author">${book.author}</p>
        </div>

   </a>`;
}

export { createGalleryItem, renderTopBooks, renderCategoryBooks };
