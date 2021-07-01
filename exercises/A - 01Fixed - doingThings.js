// Ao chamar a função doingThings:
// doingThings(wakeUp);

// Ela deve retornar o valor do respectivo parâmetro, neste caso:
// Acordando!!

const wakeUp = () => 'Acordando!!!!';
const coffe = () => 'Bora tomar café!!!!';
const sleep = () => "Partiu Dormir!"

const doingThings = (callback) => {
  const result = callback();
  console.log(result);
}
doingThings(wakeUp);
