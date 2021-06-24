// 1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . Por exemplo:
// Como Resolver? 
let num = 5; //  Como não é uma função, deixei a variável num fixa com o número oferecido pela questão, no caso 5.
let cont1 = ""; // Adicionei uma váriável contagem deixando a string vazia.

console.log("Resposta do Exercício 1");

for (let index = 1; index <= num; index+= 1) { // Criei um loop com index 1 e menor igual a variável num
  cont1 += "*";                             // Cada loop, a string vazia irá receber o * para formar o quadrado
//  console.log(contagem);                     <=== Usei como teste para ver se ficava como crescente
}
for (let index = 1; index <= num; index+= 1) { // Segundo loop irá imprimir o resultado da contagem feita pelo loop anterior com a mesma quantidade da variável num
  console.log(cont1);
}
///
console.log("");
////
// 2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:

cont2 = "";                                 // Fiz uma nova variável para não se misturar com a primeira
console.log("Resposta do Exercício 2");     
for(let index = 1; index <= num; index+=1){ // O mesmo loop 
  cont2 += "*"                              // Adicionando um * a cada loop completo
  console.log(cont2);                       // Pelo fato do console estar dentro do loop, adicionando * a cada loop 
}
///
console.log("");
////
// 3- Agora inverta o lado do triângulo. Por exemplo:

let piram = "";     //Para esse, a var de string vazia agora se chama piram de piramid
let cont3 = 0;      // Precisei adicionar mais uma variável númerica com o nome cont
console.log("Resposta do Exercício 3");     
for (let iContNum = 1; iContNum <= num; iContNum+=1) { // Loop igual aos outros
  cont3 += 1;      // A cada loop, irá adicionar 1 formando 1, 2, 3, 4... até o número N
  piram += "*";   // A cada loop, irá possuir uma quantidade de * crescente igual ao exercício 2.

  // Agora preciso fazer uma condição, enquanto a contagem númerica for menor que o número N dentro do próprio loop
  if (cont3 <= num) {   
    let espac = num - cont3; //Variável que calcula o N da func e diminui com a quantidade numerica do loop atual 
    espac = ' '.repeat(espac) // Aqui é onde eu quebrei a cabeça mas finalmente entendi
                              // Primeiro transformo a var numerica em uma string desejada, logo: " ", em seguida adiciono uma repetição
                              // Dentro do repeat(), coloco a quantidade de vezes que essa repetição irá executar
                              // Então coloco a variável espac dentro do parenteses, que ainda é numérica e que está diminuindo de 
                              // quantidade conforme o loop vai xecutando.
        console.log(espac + piram); // Imprimo então a soma da nova string espac + a quantidade de asteriscos. Os espaços vão diminuindo
                                    // até 0 e os asteriscos adicionado até o número N
  }
}
///
console.log("");
////
// 4- Depois, faça uma pirâmide com n asteriscos de base:
console.log("Resposta do Exercício 4");     
let cont4 = 0;
let piram2 = "";
for (let iContNum = 1; iContNum <= num; iContNum+=1) {
  cont4 += 1;
  piram2 += "*";

  if (cont4 <= num) {
    let espac = (num - cont4);
 
        if (espac % 2 == 0){
          espac = ' '.repeat((num - cont4) / 2)
          console.log(espac + piram2);
       }
  }
}
