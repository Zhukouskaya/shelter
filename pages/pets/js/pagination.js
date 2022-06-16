let activePage = document.querySelector('.pagination-list');
let currentPage = document.querySelector('.pagination-number');
let firstPage = document.querySelector('.pagination-start-page');
let lastPage = document.querySelector('.pagination-last-page');
let previousPage = document.querySelector('.pagination-previously');
let nextPage = document.querySelector('.pagination-next');
let pageWidth =  activePage.clientWidth;

let item1 = document.querySelector('.item1');
let item2 = document.querySelector('.item2');
let item3 = document.querySelector('.item3');
let item4 = document.querySelector('.item4');
let item5 = document.querySelector('.item5');
let item6 = document.querySelector('.item6');
let item7 = document.querySelector('.item7');
let item8 = document.querySelector('.item8');

let source = [item1, item2, item3, item4, item5, item6, item7, item8];

function generateArray(source) {
  function shuffleArray(array) {
    array.sort(() => Math.random() - 0.5);
  }

  let elements = source.slice();

  let result = [];
  for (let i = 1; i <= 6; i++) {
    shuffleArray(elements);
    result.push(...elements.slice()); 
  }
  return result;
}

let array48 = generateArray(source); 

let pagination = {
  state: array48,
  pageSize: countCard(pageWidth), 
  currentPage: 1,
  maxPage: Math.floor(array48.length / countCard(pageWidth)) 
};

function getContent() { 
  let from = (pagination.currentPage - 1) * pagination.pageSize; 
  let to = from + pagination.pageSize;

  return pagination.state.slice(from, to); 
}

function countPage(width) {
  if (width < 1279 &  width > 768) {
    return 6
  }
  else if (width <= 767 &  width > 450) {
    return 8
  }
  else {
    return 16
  }
}

function countCard(width) {
  console.log('countCard' + width)
  if (width < 1279 &  width > 768){
    return 8
  }
  else if (width <= 767 &  width > 450) {
    return 6
  }
  else {
    return 3
  }
}

let countPages = countPage(pageWidth)

function STATEfirstPage() {
  pagination.currentPage = 1;
}

function STATElastPage() {
  pagination.currentPage = pagination.maxPage;
}

function STATEhasNextPage() {
  return pagination.currentPage !== pagination.maxPage;
}

function STATEnextPage() {
  if (STATEhasNextPage()) {
    pagination.currentPage += 1;
  } else {
    throw new Error(`Next page is not allowed at ${pagination.currentPage}`);
  }
}

function STATEhasPreviousPage() {
  return pagination.currentPage !== 1;
}

function STATEpreviousPage() {
  if (STATEhasPreviousPage()) {
    pagination.currentPage -= 1;
  } else {
    throw new Error(`Previous page is not allowed at ${pagination.currentPage}`);
  }
}

function setFirstPage() {
  STATEfirstPage()
  currentPage.textContent = '1';
  firstPage.classList.add('off');
  previousPage.classList.add('off');
  lastPage.classList.add('on');
  nextPage.classList.add('on');

  firstPage.classList.remove('on');
  previousPage.classList.remove('on');
  lastPage.classList.remove('off');
  nextPage.classList.remove('off');
}

function setLastPage() {
  STATElastPage()
  currentPage.textContent = countPages;
  firstPage.classList.add('on');
  previousPage.classList.add('on');
  lastPage.classList.add('off');
  nextPage.classList.add('off');

  firstPage.classList.remove('off');
  previousPage.classList.remove('off');
  lastPage.classList.remove('on');
  nextPage.classList.remove('on');
}

function setNextPage() {
  STATEhasNextPage()
  STATEnextPage()
  if (Number(currentPage.textContent) === countPages) {
    setLastPage()
  }
  else {
    firstPage.classList.remove('off');
    previousPage.classList.remove('off');
    lastPage.classList.remove('off');
    nextPage.classList.remove('off');
    firstPage.classList.add('on');
    previousPage.classList.add('on');
    lastPage.classList.add('on');
    nextPage.classList.add('on');

    let current = Number(currentPage.textContent);
    current++
    currentPage.textContent = current;
    if (Number(currentPage.textContent) === countPages) {
      setLastPage()
    }
  }
}

function setPreviousPage() {
  STATEhasPreviousPage()
  STATEpreviousPage()
  if (currentPage.textContent === '1') {
    setLastPage()
  }
  else {
    firstPage.classList.remove('off');
    previousPage.classList.remove('off');
    lastPage.classList.remove('off');
    nextPage.classList.remove('off');
    firstPage.classList.add('on');
    previousPage.classList.add('on');
    lastPage.classList.add('on');
    nextPage.classList.add('on');

    let current = Number(currentPage.textContent);
    current--
    currentPage.textContent = current;
    if (currentPage.textContent === '1') {
      setFirstPage()
    }
  }
}

firstPage.addEventListener("click", function(e) {
  setFirstPage();
  render()
});

lastPage.addEventListener("click", function(e) {
  setLastPage()
  render()
});

nextPage.addEventListener("click", function(e) {
  setNextPage()
  render()
});

previousPage.addEventListener("click", function(e) {
  setPreviousPage()
  render()
});

function render() {
  activePage.innerHTML = ''
  for (let card of getContent()) {
    activePage.append(card.cloneNode(true))
  }
}
