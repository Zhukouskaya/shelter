const BTN_LEFT = document.querySelector('.our-friends-arrow-left');
const BTN_RIGHT = document.querySelector('.our-friends-arrow-right');
const CAROUSEL = document.querySelector('.our-friends-list');
const ITEM_LEFT = document.querySelector('.our-friends-item-left');
const ITEM_RIGHT = document.querySelector('.our-friends-item-right');
let itemLeft = document.querySelector('.our-friends-item-left');
let itemActive = document.querySelector('.our-friends-item-active');
let itemRight = document.querySelector('.our-friends-item-right');

let item1 = document.querySelector('.item1');
let item2 = document.querySelector('.item2');
let item3 = document.querySelector('.item3');
let item4 = document.querySelector('.item4');
let item5 = document.querySelector('.item5');
let item6 = document.querySelector('.item6');
let item7 = document.querySelector('.item7');
let item8 = document.querySelector('.item8');

let arr = [item1, item2, item3, item4, item5, item6, item7, item8];
let state = [item4, item5, item6];

function getRandom() {
  let newArr = [];
  while (newArr.length < 3) {
    let item = arr[Math.floor(Math.random() * arr.length)];
    if (!state.includes(item) && !newArr.includes(item)) {
      newArr.push(item)
    }
  }
  state = newArr
}

function getCardsLeft() {
  itemLeft.append(state[0])
  itemLeft.append(state[1])
  itemLeft.append(state[2])
}
function getCardsRight() {
  itemRight.append(state[0])
  itemRight.append(state[1])
  itemRight.append(state[2])
}

function moveLeft() {
  CAROUSEL.classList.add('transition-left');
  BTN_LEFT.removeEventListener("click", moveLeft);
  BTN_RIGHT.removeEventListener("click", moveRight);
  itemLeft.innerHTML = ""
  getRandom()
  getCardsLeft()
}

function moveRight() {
  CAROUSEL.classList.add('transition-right');
  BTN_LEFT.removeEventListener("click", moveLeft);
  BTN_RIGHT.removeEventListener("click", moveRight);
  itemRight.innerHTML = ""
  getRandom()
  getCardsRight()
}

CAROUSEL.addEventListener("animationend", function(animationEvent) {
  BTN_LEFT.addEventListener("click", moveLeft);
  BTN_RIGHT.addEventListener("click", moveRight);

  if (animationEvent.animationName === "move-left") {
    let itemLeftBACKUP = itemRight.innerHTML;
    let itemRightBACKUP = itemActive.innerHTML;

    document.querySelector(".our-friends-item-active").innerHTML = itemLeft.innerHTML;
    document.querySelector(".our-friends-item-left").innerHTML = itemRightBACKUP;

    CAROUSEL.classList.remove("transition-left");
  } else {
    let itemRightBACKUP = itemLeft.innerHTML;
    let itemLeftBACKUP = itemActive.innerHTML;

    document.querySelector(".our-friends-item-active").innerHTML = itemRight.innerHTML;
    document.querySelector(".our-friends-item-left").innerHTML = itemLeftBACKUP;

    CAROUSEL.classList.remove("transition-right");
  }
});

BTN_LEFT.addEventListener("click", moveLeft);
BTN_RIGHT.addEventListener("click", moveRight);
