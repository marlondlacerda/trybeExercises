const assert = require('assert');
// escreva a função sumAllNumbers aqui



const sumAllNumbers = input => {
  let resultado = 0;
  for (let index = 0; index < input.length; index++) {
    const element = input[index];
    resultado = resultado + input[index];
  }
  return resultado;
}

const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = sumAllNumbers(numbers);

assert.strictEqual(typeof sumAllNumbers, 'function');
assert.strictEqual(output, expected);