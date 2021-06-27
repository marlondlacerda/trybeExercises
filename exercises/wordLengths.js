const assert = require('assert');
// escreva a função wordLengths aqui

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

const wordLengths = array => {
  const output = []
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    output.push(element.length)      
  }
  return output;
}



assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepStrictEqual(output, expected);