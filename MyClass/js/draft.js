// function cardCreate (courses) {
//   for (let i = 0; i <= 25; i++){
//     const cardsItem = document.createElement('li');
//     cardsItem.className = "cards-item";

//     const card = document.createElement('article');
//     card.className = "card";

//     const courseBg = document.createElement('div');
//     courseBg.className = 'card-img-background';

//     const cardImage = document.createElement('img');
//     cardImage.setAttribute('src', courses[i].image);
//     cardImage.setAttribute('width', '142');
//     cardImage.setAttribute('height', '132');
//     cardImage.setAttribute('alt', courses[i].altToImage);

//     const cardContent = document.createElement('div');
//     cardContent.className = 'card-content';

//     const cardName = document.createElement('h2')

//     const cardNameLink = document.createElement('a');
//     cardNameLink.setAttribute('href','#');
//     cardNameLink.innerText = courses[i].title;

//     const cardText = document.createElement('p');
//     cardText.innerText = courses[i].category;

//     const cardMetaList = document.createElement('dl');
//     cardMetaList.className = 'card-meta-list';

//     const cardMetaItem = document.createElement('div');
//     cardMetaItem.className = 'card-meta';
//     cardMetaItem.classList.add ('card-meta-raiting');

//     const dt = document.createElement('dt');

//     const cardMetaItemRaiting = document.createElement('span');
//     cardMetaItemRaiting.className = 'vissually-hidden';
//     cardMetaItemRaiting.innerText = 'Рейтинг';

//     const cardMetaItemSvg = document.createElement('svg');

//     const cardMetaItemUse = document.createElement('use');
//     cardMetaItemUse.setAttribute('xlink:href', '#star');

//     const dd = document.createElement('dd');
//     dd.innerText = courses[i].rating;

//     const cardMetaTime = document.createElement('div');
//     cardMetaTime.className = 'card-meta';
//     cardMetaTime.classList.add ('card-meta-time');

//     const dtTime = document.createElement('dt');

//     const cardMetaItemTime = document.createElement('span');
//     cardMetaItemTime.className = 'visually-hidden';
//     cardMetaItemTime.innerText = 'время прочтения';

//     const cardMetaItemSvg2 = document.createElement('svg');

//     const cardMetaItemUse2 = document.createElement('use');
//     cardMetaItemUse2.setAttribute('xlink:href', '#time');

//     const ddTime = document.createElement('dd');
//     ddTime.innerText = courses[i].duration;

//     courseCard.prepend(cardsItem);
//     cardsItem.prepend(card);
//     card.prepend(courseBg);
//     courseBg.prepend(cardImage);
//     card.append(cardContent);
//     cardContent.append(cardName);
//     cardName.append(cardNameLink);
//     cardContent.append(cardMetaList);
//     cardMetaList.append(cardMetaItem);
//     cardMetaItem.append(dt);
//     dt.append(cardMetaItemRaiting);
//     dt.append(cardMetaItemSvg);
//     cardMetaItemSvg.append(cardMetaItemUse);
//     cardMetaItem.append(dd);
//     cardMetaList.append(cardMetaTime);
//     cardMetaTime.append(dtTime);
//     dtTime.append(cardMetaItemTime);
//     dtTime.append(cardMetaItemSvg2);
//     cardMetaItemSvg2.append(cardMetaItemUse2);
//     cardMetaTime.append(ddTime);
//   }
// }

// const courseCard = document.querySelector('.cards');
// courseCard.innerHTML = "";

// cardCreate(courses);

/* */
// const cardsList = document.querySelector('.cards');

// const cardItemTemplate = document.querySelector('#card-item-template').content.querySelector('.cards-item');
// const cardFragment = document.createDocumentFragment();

// cards.array.forEach(function(cardData){
//   const cardItem = cardItemTemplate.cloneNode(true);

//   const title = cardItem.querySelector('.card-content a');
//   const rating = cardItem.querySelector('.card-meta-rating dd');
//   const time = cardItem.querySelector('.card-meta-time dd');

//   title.textContent = cardData.title;
//   rating.textContent = cardData.rating;
//   time.textContent = cardData.duration;

//   cardFragment.appendChild(cardItem);
// });

// cardsList.appendChild(cardFragment);