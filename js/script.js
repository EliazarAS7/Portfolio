const header = document.querySelector('header');
const section = document.querySelector('section');

const requestURL = '../json/prueba.json';
const request = new XMLHttpRequest();

request.open('GET', requestURL);

request.responseType = 'json';

request.send();

request.onload = function() {
    const superHeroes = request.response;
    populateHeader(superHeroes);
    showHeroes(superHeroes);
  }

function populateHeader(jsonObj) {
    const myH1 = document.createElement('h1');
    myH1.textContent = jsonObj['Name'];
    header.appendChild(myH1);
    
    const myPara = document.createElement('p');
    myPara.textContent =jsonObj['Town'];
    header.appendChild(myPara);
}
function showHeroes(jsonObj) {
    const heroes = jsonObj['activities'];
  
    for (var i = 0; i < heroes.length; i++) {
      const myArticle = document.createElement('article');
      const myH2 = document.createElement('h2');
      const myPara1 = document.createElement('p');
      const myPara2 = document.createElement('h3')
      const myPara4 = document.createElement('img');
      const myList = document.createElement('ul');
  
      myH2.textContent = heroes[i].name;
      myPara1.textContent = 'Name: ' + heroes[i].name + '\r\n' + 'Description: ' + '\r\n' + heroes[i].description;
      myPara4.src = ' ' + heroes[i].image
  
      myArticle.appendChild(myH2);
      myArticle.appendChild(myPara1);
      myArticle.appendChild(myPara2);
      myArticle.appendChild(myPara4);
      myArticle.appendChild(myList);
  
      section.appendChild(myArticle);
    }
  }


request.responseType = 'json';
request.open('GET', requestURL);
request.responseType = 'text'; // recibimos una cadena de tipo "string"
request.send();

request.onload = function() {
  const superHeroesText = request.response; // cogemos la cadena de response
  const superHeroes = JSON.parse(superHeroesText); // la convertimos a objeto
  populateHeader(superHeroes);
  showHeroes(superHeroes);
}

const myJSON = { "name": "Chris", "age": "38" };
myJSON
const myString = JSON.stringify(myJSON);
myString

