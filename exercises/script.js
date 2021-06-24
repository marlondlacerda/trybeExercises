// /* Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
//         - document.getElementById()
//         - document.getElementsByClassName()
//         - document.getElementsByTagName()
//  Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. 
//  (Não gaste tempo pensando no texto e sim realizando o exercício)
//  Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
//  Crie uma função que mude a cor do quadrado vermelho para branco.
//  Crie uma função que corrija o texto da tag <h1>.
//  Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
//  Crie uma função que exiba o conteúdo de todas as tags <p> no console.
//         */

function textFuture() {
  const text = document.getElementById('future');
  text.innerText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  var res = text.innerText.toUpperCase();
  text.innerText = res;
}

function greenTrybe() {
  document.querySelector('.main-content').style.backgroundColor = 'rgb(76,164,109)';  
}

function whiteColor() {
  document.querySelector('.center-content').style.backgroundColor = 'white';
}

function corrigirH1() {
  document.querySelector('.title').innerText = 'Exercício 5.1 - JavaScript';
  console.log(document.getElementsByClassName('title'));
}
console.log(document.getElementsByTagName('p'));
corrigirH1(); 
whiteColor();
greenTrybe();
textFuture();
