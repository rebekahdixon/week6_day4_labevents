document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const buttonAdd = document.querySelector('#new-item-form');
  buttonAdd.addEventListener('submit', handleButtonAddSubmit);

  const buttonDelete = document.querySelector('#delete-forms');
  buttonDelete.addEventListener('submit', handleButtonDeleteSubmit);
})

const handleButtonAddSubmit = function (event) {
    event.preventDefault();
console.log('handleButtonSubmit');
  const titleHeader = document.createElement('h2');
  titleHeader.textContent = `${this.title.value}`
  const author = document.createElement('h3');
  author.textContent = `${this.author.value}`
  const category= document.createElement('p');
  category.textContent = `${this.category.value}`

  const container = document.createElement('div');
  container.appendChild(titleHeader);
  container.appendChild(author);
  container.appendChild(category);

  const readingList = document.querySelector('#reading-list');
  readingList.appendChild(container);

  this.reset();
}

const handleButtonDeleteSubmit = function (event) {
  event.preventDefault();
  const readingList = document.querySelector('#reading-list');
  while (readingList.firstChild) {
    readingList.removeChild(readingList.firstChild);
  };
}
