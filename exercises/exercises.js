// Exercícios do Bloco 4, dia 4.

//  PARTE 1 - OBJETOS E FOR/IN 
// Começo dos exercícios
let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

// Resolução do exercício 1
console.log(`Bem vinda, ${info.personagem}`);

// ===================================================================
// Resolução do Exercicio 2

info.recorrente = 'Sim'
console.log(info);

// ===================================================================
// Resolução do Exercicio 3

for (const key in info) {
  console.log(key);
}

// ===================================================================
// Resolução do Exercicio 4

for (const key in info) {
  console.log(info[key]);
}

// ===================================================================
// Resolução do Exercicio 5

let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente: 'Sim',
};

let info2 = {
  personagem: 'Tio Patinhas',
  origem: 'Christmas on Bear Mountain, Dell’s Four Color Comics #178',
  nota: 'O último MacPatinhas',
  recorrente: 'Sim',
};

for (let properties in info) {
  if (info[properties] === info.recorrente && info[properties] === 'Sim' && info2[properties] === 'Sim'
  ) {
    console.log('Ambos recorrentes');
  } else {
    console.log(info[properties] + ' e ' + info2[properties]);
  }
}
// PARTE 2 - FUNÇÕES

//1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
function reverseString(word) {
  let palavra = word; // Para preservar a palavra escolhida
  let palavraSplitada = word.split(""); // .split("") retorna uma nova matriz com a palavra escolhida
  let palavraReversa = palavraSplitada.reverse(); // .reverse() Irá começar a reverter a palavra
  let palavraPronta = palavraReversa.join(""); // Join irá juntar todas as palavras para formar uma nova String
  

  // ============== Verificador ====== 
  if (palavra === palavraPronta){
    return true // Retorna true se a palavra é palíndromo
  } else {
    return false // Falso se não for um palíndromo
  }
};

let test = reverseString("arara");
console.log(test);

//2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

// Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
// Array de teste: [2, 3, 6, 7, 10, 1]; .
// Valor esperado no retorno da função: 4 .

function verificador(){
  let maior = array[0]; //Cria uma variável que recebe o Array com o primeiro valor no índice 0
  let verificador = 0; // Cria uma variável com valor 0 para ser atribuido no algoritmo 

  for (let i = 0; i <= array.length; i++) {
    if ( array[i] > maior ) { //verificador para ver se o array no índice atual é maior
        maior = array[i]; //Se sim, a variável ganha um novo valor no índice atual
        verificador = i; // Ao mesmo tempo, se o Iff passar, a variável verificador ganha o valor do indice atual
    }
  }
return verificador  // Após o resultado do loop, o verificador irá retorna com seu valor atual
}

let array = [2, 3, 6, 7, 10, 1];
console.log(verificador(array));
