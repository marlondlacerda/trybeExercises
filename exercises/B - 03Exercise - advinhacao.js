const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];


// MÉTODO 1 COM FOR
const verificador = (rsposta, aluno) => rsposta === aluno ? 1 : aluno === 'N.A' ? 0 : -0.5;

const verifyAnswers = (gabarito, studentNumber, callback) => {
  let contador = 0;
  for (let index = 0; index < gabarito.length; index++) {
  const callbackReturn = callback(gabarito[index], studentAnswers[index])
  contador += callbackReturn;
  }
  return `Resultado final: ${contador} corretas`;
}

console.log(verifyAnswers(rightAnswers, studentAnswers, verificador));

// MÉTODO 2 COM REDUC
const verifyAnswers2 = (gabarito, studentNumber, callback) => {
  const verificador = gabarito.reduce((acc, curr, index) => {
    return (curr === studentNumber[index]) ? acc + 1 : (studentNumber[index] === 'N.A') ? acc + 0 : acc -0.5;
  }, 0);

  return verificador;
};

console.log(verifyAnswers2(rightAnswers, studentAnswers));



