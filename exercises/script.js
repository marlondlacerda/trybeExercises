let h1 = document.createElement('h1');
  h1.innerText = "Exercício 5.2 - JavaScript DOM";
  document.body.appendChild(h1);

let divMain = document.createElement('div');
  divMain.className = "main-content";
  document.body.appendChild(divMain);

let divCenter = document.createElement('div');
  divCenter.className = "center-content";
  divMain.appendChild(divCenter);

let pCenterText = document.createElement('p');
  pCenterText.innerText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
  divCenter.appendChild(pCenterText);

let divLeft = document.createElement('div');
  divLeft.className = "left-content";
  divMain.appendChild(divLeft);

let divRight = document.createElement('div');
  divRight.className = "right-content";
  divMain.appendChild(divRight);

let imgLeft = document.createElement('img');
  imgLeft.src = 'https://picsum.photos/200';
  imgLeft.className = "small-image";
  divLeft.appendChild(imgLeft);

let ulRight = document.createElement('ul');
  ulRight.className = "personages-list"
  divRight.appendChild(ulRight);
  
let personagesItems = [
  'Hector Valentine',
  'Carlos Eduardo',
  'Yukie Takanashi',
  'Bala Laika',
  'Rarkt Wiat',
  'The Vagabond',
  'Cachorro dos Ventos',
  'Last Stardust',
  'Chi Haru',
  'Zenitsu'
];

let personagesList = document.querySelector('.personages-list');
for (let index = 0; index < personagesItems.length; index += 1) {
  let personages =  personagesItems[index];
  let personagesListItems = document.createElement('li');
  personagesListItems.innerText = personages; 

  personagesList.appendChild(personagesListItems);
}

let hPrimeira = document.createElement('h3');
  hPrimeira.className = "description";
  hPrimeira.innerText = "Exercício 5.2 - JavaScript DOM";
  divMain.appendChild(hPrimeira);



h1.className = "title";