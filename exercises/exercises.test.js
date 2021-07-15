const exercises = require('./exercises');


describe('A função sum(a, b) retorna a soma do parâmetro a com o b', () => {

  test('Teste se o retorno de sum(4, 5) é 9', () => {
    expect(exercises.sum(5, 4)).toEqual(9);
  });

  test('Teste se o retorno de exercises.sum(0, 0) é 0', () => {
    expect(exercises.sum(0, 0)).toEqual(0);
  });

  test('Teste se a função sum lança um erro quando os parâmetros são 4 e "5" (string 5)', () => {
    expect(() => exercises.sum(4, '4')).toThrow();
  });

  test('Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")', () => {
    expect(() =>  exercises.sum(4, '4') ).toThrowError(new Error('parameters must be numbers'));
  });
});

describe('A função myRemove(arr, item) recebe um array arr e retorna uma cópia desse array sem o elemento item caso ele exista no array', () => {
  const array = [1, 2, 3, 4];

  test('Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado', () => {
    const expected = [1, 2, 4];
    expect(exercises.myRemove(array, 3)).toEqual(expected);
  });

  test('Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
    const expected = [1, 2, 3, 4];
    expect(exercises.myRemove(array, 3)).not.toEqual(expected);
  });

  test('Verifique se o array passado por parâmetro não sofreu alterações', () => {
    const expected = [5, 6, 7, 8];
    expect(exercises.myRemove([5, 6, 7, 8])).toEqual(expected);
  });

  test('Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado', () => {
    const expected = [1, 2, 3, 4];
    expect(exercises.myRemove(array, 5)).toEqual(expected);
  });
});

describe('A função myRemoveWithoutCopy(arr, item) recebe um array arr e retorna o próprio array sem o elemento item caso ele exista no array',
 () => {

  test('Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o array esperado' , () => {
    const atual = [1, 2, 3, 4];
    const expected = [1, 2, 4];
    expect(expected).toEqual(exercises.myRemoveWithoutCopy(atual, 3));
  });

  test('Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
    const atual = [1, 2, 3, 4];
    expect(exercises.myRemoveWithoutCopy(atual, 3)).not.toEqual([1, 2, 3, 4]);

  });

  test('Faça uma chamada para a função myRemoveWithoutCopy e verifique se o array passado por parâmetro sofreu alterações' , () => {
    const atual = [5, 6, 7, 8];
    const expected = [5, 6, 7, 8];
    expect(expected).toStrictEqual(exercises.myRemoveWithoutCopy(atual));
  });

  test('Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 5) retorna o array esperado' , () => {
    const atual = [1, 2, 3, 4];
    const expected = [1, 2, 3, 4];
    expect(expected).toStrictEqual(exercises.myRemoveWithoutCopy(atual, 5));
  });
});

describe('Testes que verificam os retornos de números divisíveis por 3 e 5' , () => {

  test('Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado', () => { 
    expect(exercises.myFizzBuzz(15)).toEqual('fizzbuzz');
  });

  test('Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado', () => {
    expect('fizz').toStrictEqual(exercises.myFizzBuzz(6));
  });

  test('Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado', () => {
    expect('buzz').toEqual(exercises.myFizzBuzz(10));
  });

  test('Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado', () => {
    expect(14).toStrictEqual(exercises.myFizzBuzz(14));
  });

  test('Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado', () => {
    expect(exercises.myFizzBuzz('14')).toStrictEqual(false);
  });
});

describe('essa suíte irá fazer testes para comparar 3 objetos', () => {

  test('Testa se o obj1 tem valores iguais ao obj2', () => {
    expect(exercises.obj2).toEqual(exercises.obj2);
  });

  test('Testa se o obj1 não tem valores iguais ao obj3', () => {
    expect(exercises.obj1).not.toEqual(exercises.obj3);
  });

  test('Testa se o obj2 não tem valores iguais ao obj3', () => {
    expect(exercises.obj2).not.toEqual(exercises.obj3);
  });
});