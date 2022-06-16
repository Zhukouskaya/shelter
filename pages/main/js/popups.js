const popup = document.querySelector('.popup');
const popupCloseIcon = document.querySelector('.popup-close');
const PETS = [
    {
      "id": "1",
      "name": "Jennifer",
      "img": "../../assets/images/our-friends/pets-jennifer.png",
      "type": "Dog",
      "breed": "Labrador",
      "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
      "age": "2 months",
      "inoculations": ["none"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "id": "2",
      "name": "Sophia",
      "img": "../../assets/images/our-friends/pets-sophia.png",
      "type": "Dog",
      "breed": "Shih tzu",
      "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
      "age": "1 month",
      "inoculations": ["parvovirus"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "id": "3",
      "name": "Woody",
      "img": "../../assets/images/our-friends/pets-woody.png",
      "type": "Dog",
      "breed": "Golden Retriever",
      "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
      "age": "3 years 6 months",
      "inoculations": ["adenovirus", "distemper"],
      "diseases": ["right back leg mobility reduced"],
      "parasites": ["none"]
    },
    {
      "id": "4",
      "name": "Scarlett",
      "img": "../../assets/images/our-friends/pets-scarlet.png",
      "type": "Dog",
      "breed": "Jack Russell Terrier",
      "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
      "age": "3 months",
      "inoculations": ["parainfluenza"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "id": "5",
      "name": "Katrine",
      "img": "../../assets/images/our-friends/pets-katrine.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
      "age": "6 months",
      "inoculations": ["panleukopenia"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "id": "6",
      "name": "Timmy",
      "img": "../../assets/images/our-friends/pets-timmy.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
      "age": "2 years 3 months",
      "inoculations": ["calicivirus", "viral rhinotracheitis"],
      "diseases": ["kidney stones"],
      "parasites": ["none"]
    },
    {
      "id": "7",
      "name": "Freddie",
      "img": "../../assets/images/our-friends/pets-freddie.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
      "age": "2 months",
      "inoculations": ["rabies"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "id": "8",
      "name": "Charly",
      "img": "../../assets/images/our-friends/pets-charly.png",
      "type": "Dog",
      "breed": "Jack Russell Terrier",
      "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
      "age": "8 years",
      "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
      "diseases": ["deafness", "blindness"],
      "parasites": ["lice", "fleas"]
    }
  ]
  let popupImg = document.querySelector('.popup-img');
  let popupName = document.querySelector('.popup-data-name');
  let popupType = document.querySelector('.popup-data-type');
  let popupDescription = document.querySelector('.popup-data-description');
  let popupAge = document.querySelector('.popup-data-age');
  let popupInoculations = document.querySelector('.popup-data-inoculations');
  let popupDiseases = document.querySelector('.popup-data-diseases');
  let popupParasites = document.querySelector('.popup-data-parasites');
  let listPets = document.querySelector('.our-friends-list');

const openPopup = function () {
  document.body.classList.add('_lock');
  popup.classList.add('active-pop');
}
const closePopup = function () {
    document.body.classList.remove('_lock');
    popup.classList.remove('active-pop');
}

listPets.addEventListener("click", function(e) {
      // for (let key in PETS) {
      //   if (PETS[key].name === e.target.dataset.info) {
          // popupImg.src = PETS[key].img;
          // popupName.textContent = PETS[key].name;
          // popupType.textContent = PETS[key].type;
          // popupDescription.textContent = PETS[key].description;
          // popupAge.textContent = PETS[key].age;
          // popupInoculations.textContent = PETS[key].inoculations.join(', ');
          // popupDiseases.textContent = PETS[key].diseases.join(', ');
          // popupParasites.textContent = PETS[key].parasites.join(', ');
          console.log(e.target.dataset.info)
        // }
        openPopup();
      // }
    });

    popupCloseIcon.addEventListener("click", function(e) { 
      closePopup();
    });
  
    document.addEventListener("click", function(e) { 
      if (e.target.classList.contains('popup-content') || e.target.classList.contains('popup-body')) {
        closePopup();
      }
    });
  
    document.addEventListener("mouseover", function(e) {
      if (e.target.classList.contains('popup-content') || e.target.classList.contains('popup-close') || e.target.classList.contains('popup-body')) {
        popupCloseIcon.classList.add('close-hover')
      }
    });
    document.addEventListener("mouseover", function(e) { 
      if (!e.target.classList.contains('popup-content') && !e.target.classList.contains('popup-close') && !e.target.classList.contains('popup-body')) {
        popupCloseIcon.classList.remove('close-hover')
      }
    });
  





// const openPopup = function () {
//   document.body.classList.add('_lock');
//   popup.classList.add('active-pop');
// }

// const closePopup = function () {
//     document.body.classList.remove('_lock');
//     popup.classList.remove('active-pop');
// }

// popupLinks.forEach(e => document.addEventListener('click', function() {
// }));

// popupCloseIcon.addEventListener('click', () => {
//   closePopup()
// })



// document.addEventListener('DOMContentLoaded', async () => {
//   let newArr = [];
//   await getData();

//   async function getData() { // Достаем JSON
//     let petsData = '../pets.json';
//     let res = await fetch(petsData);
//     let pets = await res.json();

//     for (let pet of pets) {
//       newArr.push(pet)
//     }

//     return pets
//   }

//   let cardList = document.querySelector('.carousel');
//   let popupWrapper = document.querySelector('.popup-wrapper');
//   let popupCloseButton = document.querySelector('.popup-close');
//   let cardName = document.querySelectorAll('[data-info]')

//   let popupImg = document.querySelector('.popup-img');
//   let popupName = document.querySelector('.popup-name');
//   let popupType = document.querySelector('.popup-type');
//   let popupDescription = document.querySelector('.popup-description');
//   let popupAge = document.querySelector('.popup-age');
//   let popupInoculations = document.querySelector('.popup-inoculations');
//   let popupDiseases = document.querySelector('.popup-diseases');
//   let popupParasites = document.querySelector('.popup-parasites');
//   const body = document.querySelector('body');
  

//   cardList.addEventListener("click", function(e) { // Появление модалки

//     for (let key in newArr) {
//       if (newArr[key].name === e.target.dataset.info) {

//         popupImg.src = newArr[key].img;
//         popupName.textContent = newArr[key].name;
//         popupType.textContent = newArr[key].type;
//         popupDescription.textContent = newArr[key].description;
//         popupAge.textContent = newArr[key].age;
//         popupInoculations.textContent = newArr[key].inoculations.join(', ');
//         popupDiseases.textContent = newArr[key].diseases.join(', ');
//         popupParasites.textContent = newArr[key].parasites.join(', ');
        
//         popupWrapper.classList.add('popup-wrapper-active');
//         body.classList.add('_bodyNotScroll');
//       }
//     }
//   });

//   popupCloseButton.addEventListener("click", function(e) { // Закрытие модалки по крестику
//     popupWrapper.classList.remove('popup-wrapper-active');
//     body.classList.remove('_bodyNotScroll');
//   });

//   document.addEventListener("click", function(e) { 
//     console.log(e.target)
//     if (e.target.classList.contains('popup') || e.target.classList.contains('popup-wrapper')) {
//       popupWrapper.classList.remove('popup-wrapper-active');
//       body.classList.remove('_bodyNotScroll');
//     }
//   });

//   document.addEventListener("mouseover", function(e) {
//     if (e.target.classList.contains('popup') || e.target.classList.contains('popup-close') || e.target.classList.contains('popup-wrapper')) {
//       popupCloseButton.classList.add('popup-close-hover')
//     }
//   });
//   document.addEventListener("mouseover", function(e) { 
//     if (!e.target.classList.contains('popup') && !e.target.classList.contains('popup-close') && !e.target.classList.contains('popup-wrapper')) {
//       popupCloseButton.classList.remove('popup-close-hover')
//     }
//   });
// });

