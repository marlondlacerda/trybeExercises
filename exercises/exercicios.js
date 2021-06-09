// ================================================= >> EXERCÍCIO 1 << =================================================

// Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas variáveis, a e b , 
// definidas no começo com os valores que serão operados. Faça programas para:
// Adição (a + b)
// Subtração (a - b)
// Multiplicação (a * b)
// Divisão (a / b)
// Módulo (a % b)
// *Dica: Neste link você encontra mais detalhes sobre operadores matemáticos 😉
// LINK: https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/Math

// S O M A R === >>
function somar(a, b) {
  const result = a + b;
  return result;
}
console.log(somar(5, 5));

// DI MI NU IR === >>
function diminuir(a, b) {
  const result = a - b;
  return result;
}
console.log(diminuir(15, 7));

// MULTIPLICAR === >>
function mult(a, b) {
  const result = a * b;
  return result;
}
console.log(mult(2, 2));

// DI VI DIR === >>
function dividir(a, b) {
  const result = a / b;
  return result;
}
console.log(dividir(30, 3));

// MÓ DU LO === >>
function mod(a, b) {
  const result = a % b;
  return result;
}
console.log(mod(20, 3));

// ================================================= >> EXERCÍCIO 2 << =================================================

// Faça um programa que retorne o maior de dois números. Defina no começo do programa duas variáveis com os valores que serão comparados.
function eMaior(a, b) {
  if (a < b) {
    return b + " é maior que " + a;
  }
  return a + " é maior que " + b;
}
console.log(eMaior(150, 100));

// ================================================= >> EXERCÍCIO 3 << =================================================

// Faça um programa que retorne o maior de três números. Defina no começo do programa três variáveis com os valores que serão comparados.
function eMaior(a, b, c) {
  if (a > b && a > c ) {
    return `${a} é o maior número.`;
  } else if (b > a && b > c) {
    return `${b} é maior número.`;
  }
  return `${c} é o maior número.`;
}
console.log(eMaior(500, 100, 20));

// ================================================= >> EXERCÍCIO 4 << =================================================

// Faça um programa que, dado um valor definido numa variável, 
// retorne "positive" se esse valor for positivo, "negative"
//  se for negativo e "zero" caso contrário.

function posiNegative(num) {
  if (num > 0) {
    return `positive`;
  }
  return `negative`;
}
console.log(posiNegative(15));

// ================================================= >> EXERCÍCIO 5 << =================================================


