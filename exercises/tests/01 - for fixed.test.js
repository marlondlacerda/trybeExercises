const math = require('../exercises/01 - for fixed')


// 1 - Faça o mock da funcão subtrair e teste sua chamada.
test("Testar chamada da função subtrair", () => {
  math.subtrair = jest.fn();

  math.subtrair();
  expect(math.subtrair).toHaveBeenCalled();
});

// 2 - Faça o mock da função multiplicar e implemente como retorno padrão o valor ‘10’. Teste a chamada e o retorno.
test("multiplicar com retorno padrão de valor '10'", () => {
  math.multiplicar = jest.fn().mockReturnValue(10);

  math.multiplicar();
  expect(math.multiplicar).toHaveBeenCalled();
  expect(math.multiplicar()).toBe(10);
});

// 3 - Faça o mock da função somar e implemente uma função que recebe dois valores e retorna sua soma. 
// Teste a chamada, o retorno e os parâmetros passados.
test("Testa chamada, retorno e parâmetros passados para soma com entrada de dois valores", async () => {
  const mockSomar = jest.spyOn(math, "somar");
  mockSomar.mockResolvedValue(5);

  mockSomar(2, 3);
  expect(mockSomar).toHaveBeenCalled();
  expect(mockSomar).toHaveBeenCalledTimes(1);
  expect(mockSomar).toHaveBeenCalledWith(2, 3);
  await expect(mockSomar(2, 3)).resolves.toBe(5);
});

// 4 - Dentro de um mesmo arquivo, crie três funções. A primeira deve receber uma string e retorná-la em caixa alta. 
// A segunda deve também receber uma string e retornar só a primeira letra. A terceira deve receber duas strings e concatená-las. 
// Faça o mock do arquivo. Faça uma nova implementação para a primeira função, mas agora ela deve retornar a string em caixa baixa. 
// Para a segunda função, uma nova implementação deve retornar a última letra de uma string. 
// A terceira deve receber três strings e concatená-las.
test('Testa chamada, retorno e parâmetros da função dividir', () => {
  const mockDividir = jest.spyOn(math, "dividir");
  mockDividir.mockReturnValue(15);
  mockDividir.mockReturnValueOnce(2);
  mockDividir.mockReturnValueOnce(5);

  expect(mockDividir(4, 2)).toBe(2);
  expect(mockDividir).toHaveBeenCalled();
  expect(mockDividir).toHaveBeenCalledTimes(1);
  expect(mockDividir).toHaveBeenCalledWith(4, 2);

  expect(mockDividir(10, 2)).toBe(5);
  expect(mockDividir).toHaveBeenCalled();
  expect(mockDividir).toHaveBeenCalledTimes(2);
  expect(mockDividir).toHaveBeenCalledWith(10, 2);

  expect(mockDividir(30, 2)).toBe(15);
  expect(mockDividir).toHaveBeenCalled();
  expect(mockDividir).toHaveBeenCalledTimes(3);
  expect(mockDividir).toHaveBeenCalledWith(30, 2);
});

// 5 - Faça o mock da função subtrair de maneira que seja possível restaurar sua implementação original. 
// Defina como retorno padrão o valor ‘20’. Teste o número de chamadas e o retorno. Restaure a implementação original da função e 
// teste sua execução.
test('Mock da função subtrair de modo que possa restaurar sua implementação original', () => {
  const mockSubtrair = jest.spyOn(math, "subtrair");
  mockSubtrair.mockImplementation((a, b) => a * b);
  mockSubtrair.mockReturnValue(20);

  expect(mockSubtrair(10, 2)).toBe(20);
  expect(mockSubtrair).toHaveBeenCalled();
  expect(mockSubtrair).toHaveBeenCalledTimes(2);
  expect(mockSubtrair).toHaveBeenCalledWith(10, 2);

  mockSubtrair.mockRestore();
  mockSubtrair.mockReturnValue(8);

  expect(mockSubtrair(10, 2)).toBe(8);
  expect(mockSubtrair).toHaveBeenCalled();
  expect(mockSubtrair).toHaveBeenCalledTimes(1);
  expect(mockSubtrair).toHaveBeenCalledWith(10, 2);
});
