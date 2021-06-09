let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let resultadoSoma = 0;


for (let index = 0; index < numbers.length; index +=1) {
   console.log(numbers[index]); // Resultado do Exercício 1 - Imprima o Array
    resultadoSoma += numbers[index] // Fórmula para somar todos os valores de um Array
   };
  console.log("Resultado da Soma dos Números é: ", resultadoSoma); // Resultado do Exercício 2 = Descobri que precisa imprimir fora do loop, se não ele vai ficar repetindo a soma até o final!

  let media = resultadoSoma/numbers.length;
  console.log("A Média entre os números do Array number é: ", media); // Resultado do Exercício 3 = O algoritmo de achar uma média é o resultado da soma de todos os valores do array dividido pelo array.lenght 

  if (media > 20) {
    console.log("Valor maior que 20");
  } else {
    console.log("Valor menor ou igual a "); // Resultado Exercício 4, if e else para comparar o valor da Média e dar um resultado se for maior ou menor que 20.
  };

  let highNumber = 0;
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] >= highNumber) {
        highNumber = numbers[index];
      };
    };
  console.log("O Maior número de um Array é: ", highNumber); // Resultado do Exercício 5


  let numImpar = 0;                                               // Começo do exercício 6
  let numPar = 0;
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 2 == 1) {
      numImpar += 1;
    } else if (numbers[index] % 2 == 0) {
      numPar += 1;
      } 
  };
  if (numImpar > 0){
    console.log ("Número de impares são: ", numImpar);
  } else {
    console.log("Nenhum Valor Ímpar encontrado!");
  }
  console.log ("Número de pares são: ", numPar);       // Fim do exercício 6
 

    let lowNumber = 500;
   for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] < lowNumber) {
        lowNumber = numbers[index];
      };
    };
  console.log("O menor número de um Array é: ", lowNumber); // Resultado do Exercício 7

  let exe8 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]; // Início do Exercício 8
    for (let index = 0; index < exe8.length; index+= 1) {
      let contagem = exe8[index];
      console.log(contagem);                                     // Resultado do exercício 8
    }
    console.log("");
    console.log("");

     let divisao = 0;
    for (let index = 0; index < exe8.length; index+= 1) {
      let divisao = exe8[index] / 2;
      console.log(divisao);                                     // Resultado do exercício 8
    }
