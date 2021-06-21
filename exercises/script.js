// Exercício 1 parte 1
const testingScope = (escopo) => {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    let elseScope = `Não devo ser utilizada fora meu escopo (else)`;
    console.log(elseScope);
  }
}

// Exercício 1 parte 2
testingScope(true);

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const numeroSort = array => array.sort((a, b) => a - b);


const resultado = (numeroSort(oddsAndEvens)); 
console.log(`Os números ${resultado} se encontram ordenados de forma crescente !`);

// ==== Exercício 2 Factorial >>>
const factorial = number => {
  let result = 1

  for (let index = 2; index <= number; index += 1) {
      result *= index
  }

  return result
}

console.log(factorial(5))

// Recursivo 
const factorial = number => number > 1 ? number * factorial(number - 1) : 1
console.log(factorial(5))

// Exercício 2 Longestworld
const longestWord = text => {
  let wordArray = text.split(' ')
  let maxLength = 0
  let result = ''

  for (const word of wordArray) {
      if (word.length > maxLength) {
          maxLength = word.length
          result = word
      }
  }

  return result
}

console.log(longestWord("Antonio foi no banheiro e não sabemos o que aconteceu"))

// Em uma linha
const longestWord = text => text.split(' ').sort((wordA, wordB) => wordB.length - wordA.length)[0]

console.log(longestWord("Antonio foi no banheiro e não sabemos o que aconteceu"))


// Exercício 4 
const array = ["Android", "iOS", "Architecture", "Teach", "Run"]

function buildSkillsPhrase (paramOne) {
    const fun1 = paramInner => (
      `Tryber ${paramInner} aqui!

      Tudo bem?`
    )

    let result = `${fun1(paramOne)}

    Minhas cinco principais habilidades são:`

    array.forEach((skill, index) =>
    result = `${result}

    - ${skill}`)

    result = `
{result}

    #goTrybe
    `

    return result
}

console.log(buildSkillsPhrase("Lucas"))