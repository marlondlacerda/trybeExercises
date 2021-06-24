const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};


const addNewKey = (obj, key, value) => {
  obj[key] = value;
};

addNewKey(lesson2, 'turno', 'noite');

// Crie uma função para listar as keys de um objeto. 
// Essa função deve receber um objeto como parâmetro. 
const listKeys = (obj) =>  Object.keys(obj);
console.log(listKeys(lesson1));
// ====== // 
const keyView = (obj) => {
  console.log(Object.keys(obj));
}
keyView(lesson1);

// ====== // 

const sizeObj = (obj) =>  Object.keys(obj).length;
console.log(sizeObj(lesson1));

console.log(Object.keys(lesson1).length);

// ====== // 

const valuesView = (obj) => Object.values(obj);
console.log(valuesView(lesson1));

// ====== // 

const allLessons = {};

const newQ = Object.assign(allLessons, { lesson1, lesson2, lesson3 } );

const totalStudent = {};
totalStudent['numeroEstudantes'] = allLessons.lesson1.numeroEstudantes + allLessons.lesson2.numeroEstudantes + allLessons.lesson3.numeroEstudantes;
console.log(totalStudent);

const getNumberOfStudents = (obj) => {
  let total = 0;
  const array = Object.keys(obj);
  for (index in array) {
    total += obj[array[index]].numeroEstudantes;
  }
  return total;
};
console.log(getNumberOfStudents(allLessons));

const getValueByNumber = (obj, number) => Object.values(obj)[number];
console.log(getValueByNumber(lesson1, 0));
