/* JavaScript код */
/*WARNING! CRINGE*/
//array of courses
const DEFAULT_CATEGORY = `All`;
const body = document.querySelector(`body`);
const courses = [
  {
    title : "Курс по JavaScript для начинающих",
    category : "JavaScript",
    duration : 15,
    rating : 4.5,
    image: 'img/picture-1.svg',
    altToImage : "Парень рисует картину",
    cost: 1000
  },
  {
    title : "Курс по JavaScript для продвинутых",
    category : "JavaScript",
    duration : 25,
    rating : 4.9,
    image: 'img/picture-2.svg',
    altToImage : "Компьютерные сети",
    cost: 1200
  },
  {
    title : "Лекция на тему var и let",
    category : "JavaScript",
    duration : 40,
    rating : 3.5,
    image: 'img/picture-3.svg',
    altToImage : "Краны что-то строят",
    cost: 1121
  },
  {
    title : "Полный курс по JavaScript",
    category : "JavaScript",
    duration : 60,
    rating : 4.9,
    image: 'img/picture-4.svg',
    altToImage : "Девушка что-то рисует",
    cost: 1043
  },
  {
    title : "Node JS. Практический курс",
    category : "Node.js",
    duration : 34,
    rating : 4.8,
    image: 'img/picture-4.svg',
    altToImage : "Девушка что-то рисует",
    cost: 1000
  },
  {
    title : "Полное руководство по Python 3",
    category : "Python",
    duration : 45,
    rating : 4.8,
    image: 'img/picture-3.svg',
    altToImage : "Краны что-то строят",
    cost: 1023
  },
  {
    title : "Django 3. Сервис по сбору данных",
    category : "Django",
    duration : 34,
    rating : 4.7,
    image: 'img/picture-2.svg',
    altToImage : "Компьютерные сети",
    cost: 1000
  },
  {
    title : "Bootstrap для новичков",
    category : "Bootstrap",
    duration : 63,
    rating : 4.6,
    image: 'img/picture-6.svg',
    altToImage : "Ракета",
    cost: 2000
  },
  {
    title : "Крутой курс по реакту АЕ АЕ",
    category : "React",
    duration : 501231234,
    rating : 10,
    image: 'img/forReact.jpg',
    altToImage : "Парень тыкает по доске",
    cost: 2000
  },
  {
    title : "CSS3 для начинающих",
    category : "CSS3",
    duration : 13,
    rating : 4.2,
    image: 'img/picture-2.svg',
    altToImage : "Компьютерные сети",
    cost: 2000
  },
  {
    title : "HTML5 для начинающих",
    category : "HTML5",
    duration : 17,
    rating : 4.8,
    image: 'img/picture-1.svg',
    altToImage : "Парень рисует картину",
    cost: 1000
  },
  {
    title : "Курс HTML5 для продвинуых",
    category : "HTML5",
    duration : 20,
    rating : 4.0,
    image: 'img/picture-5.svg',
    altToImage : "Парень тыкает по доске",
    cost: 3000
  },
  {
    title : "Курс по CSS3 для продвинутых",
    category : "CSS3",
    duration : 50,
    rating : 4.2,
    image: 'img/picture-6.svg',
    altToImage : "Ракета",
    cost: 2000
  },
  {
    title : "Создание сайтов на WordPress",
    category : "WordPress",
    duration : 40,
    rating : 4.7,
    image: 'img/picture-4.svg',
    altToImage : "Девушка что-то рисует",
    cost: 5000
  },
  {
    title : "Angular для чайников",
    category : "Angular",
    duration : 60,
    rating : 4.1,
    image: 'img/picture-5.svg',
    altToImage : "Парень тыкает по доске",
    cost: 6000
  },
  {
    title : "PHP тоже важен, или как написать хороший бэккенд",
    category : "PHP",
    duration : 40,
    rating : 4.9,
    image: 'img/picture-2.svg',
    altToImage : "Компьютерные сети",
    cost: 3000
  },
  {
    title : "Работа с Linux",
    category : "Linux",
    duration : 30,
    rating : 3.8,
    image: 'img/picture-3.svg',
    altToImage : "Краны что-то строят",
    cost: 4000
  },
  {
    title : "Vue JS и его необходимость",
    category : "Vue JS",
    duration : 50,
    rating : 4.4,
    image: 'img/picture-1.svg',
    altToImage : "Парень рисует картину",
    cost: 2000
  },
  {
    title : "Redux Framework для продвинутых",
    category : "Redux Framework",
    duration : 60,
    rating : 4.6,
    image: 'img/picture-4.svg',
    altToImage : "Девушка что-то рисует",
    cost: 3000
  },
  {
    title : "Полный курс по HMTL5 и CSS3",
    category : "HTML5 и CSS3",
    duration : 30,
    rating : 4.9,
    image: 'img/picture-5.svg',
    altToImage : "Парень тыкает по доске",
    cost: 4000
  },
  {
    title : "JavaScript для чайников",
    category : "JavaScript",
    duration : 59,
    rating : 4.4,
    image: 'img/picture-2.svg',
    altToImage : "Компьютерные сети",
    cost: 5000
  },
  {
    title : "Python на уровне понимания профи",
    category : "Python",
    duration : 30,
    rating : 4.9,
    image: 'img/picture-3.svg',
    altToImage : "Краны что-то строят",
    cost: 5000
  },
  {
    title : "Создания бэккенда на Node JS",
    category : "Node.js",
    duration : 24,
    rating : 4.7,
    image: 'img/picture-5.svg',
    altToImage : "Парень тыкает по доске",
    cost: 6000
  },
  {
    title : "Python разработчик",
    category : "Python",
    duration : 53,
    rating : 4.1,
    image: 'img/picture-2.svg',
    altToImage : "Компьютерные сети",
    cost: 2000
  },
  {
    title : "Основы JavaScript и Веб-разработки",
    category : "JavaScript",
    duration : 34,
    rating : 4.1,
    image: 'img/picture-1.svg',
    altToImage : "Парень рисует картину",
    cost: 3000
  }
];

//add list of courses cards
const cardsList = document.querySelector(`.cards`)

function createCardsMarkup(courseData) {
  const cards = courseData.map(function(course) {
  return `<li class="cards-item">
        <article class="card">
          <div class="card-img-background">
            <img src=${course.image} width="142" height="132" alt=${course.altToImage}>
          </div>
          <div class="card-content">
            <h2>
              <a href="#">${course.title}</a>
            </h2>
            <p>Освой самый популярный язык программирования — JavaScript, и научись применять знания на практике</p>
            <dl class="card-meta-list">
              <div class="card-meta card-meta-raiting">
                <dt>
                  <span class="visually-hidden">Рейтинг</span>
                  <svg>
                    <use xlink:href="#star"></use>
                  </svg>
                </dt>
                <dd>${course.rating}</dd>
              </div>
              <div class="card-meta card-meta-time">
                <dt>
                  <span class="visually-hidden">Время прочтения</span>
                  <svg>
                    <use xlink:href="#time"></use>
                  </svg>
                </dt>
                <dd>${course.duration} ч.</dd>
              </div>
              <div class="card-meta card-meta-cost">
                <dt>
                  <span class="visually-hidden">Цена</span>
                  <svg>
                    <use xlink:href="#cost"></use>
                  </svg>
                </dt>
                <dd data-category="${course.cost}">${course.cost}$</dd>
              </div>
            </dl>
          </div>
        </article>
      </li>`
  }).join(``);

  return cards;
}

function renderCards (list,cardsData) {
  list.innerHTML = ``;
  list.insertAdjacentHTML(`afterbegin`, createCardsMarkup(cardsData));
}

renderCards(cardsList,courses);

//add categories list
const categoryList = document.querySelector(`.hashtags`);

function createCategories() {
    const categories = new Set();

    courses.forEach(function(course) {
        categories.add(course.category);
    })

    return Array.from(categories);
}

const categories = [DEFAULT_CATEGORY, ...createCategories()];

const categoryMarkup = categories.map(function(category) {
  return `<li class="hashtag">
       <a href="#" data-category = '${category}'>${category}</a>
     </li>`;
}).join(``);

categoryList.innerHTML = ``;
categoryList.insertAdjacentHTML(`afterbegin`, categoryMarkup);
 
//filter of categories
let currentCards = [...courses];

function filterCards (category) {
  if (category === DEFAULT_CATEGORY) {
    return currentCards = [...courses];
  }
  
  currentCards = [];

  courses.filter(function(course){
    if (category === course.category) {
      currentCards.push(course);
    };
  })
  
  return currentCards;
}


function onCategoryListClick (evt){
  evt.preventDefault();

  const categoryButton = evt.target.closest(`a`);

  if (!categoryButton){
    return;
  };

  const filtredCard = filterCards(categoryButton.dataset.category);

  renderCards(cardsList, filtredCard);
}

categoryList.addEventListener(`click`,onCategoryListClick);

//cards sort
const sortList = document.querySelector('.sort-list');

function sortedCards (sortItem) {
  if (sortItem === 'цене') {
    currentCards.sort(function(a, b) {
    return b.cost-a.cost;
  });

  renderCards(cardsList, currentCards);
  }
  else if (sortItem === 'рейтингу') {
    currentCards.sort(function(a, b) {
    return b.rating-a.rating;
  });

  renderCards(cardsList, currentCards);
  }
  else {
    currentCards.sort(function(a, b) {
    return b.duration-a.duration;
  });

  renderCards(cardsList, currentCards);
  }
}

function onSortListClick (evt){
  evt.preventDefault();

  const sortButton = evt.target.closest(`.sort-item a`).textContent;

  if (!sortButton){
    return;
  };

  sortedCards(sortButton)
}

sortList.addEventListener(`click`,onSortListClick);

//change theme

const changeTheme = document.querySelector('.theme-list');

function onThemeClick (evt) {
  const themeButton = evt.target.closest('.theme-button');

  if (!themeButton) {
    return;
  };

  if (themeButton.dataset.theme === 'standart') {
    body.setAttribute(`data-theme-name`, ``);
  } else if (themeButton.dataset.theme === `dark`) {
    body.setAttribute(`data-theme-name`, `dark`);
  } else {
    body.setAttribute(`data-theme-name`, `texture`);
  }
}

changeTheme.addEventListener(`click`, onThemeClick);