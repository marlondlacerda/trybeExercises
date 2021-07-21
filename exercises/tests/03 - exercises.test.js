const service = require('../exercises/03 - exercises');
jest.mock("../exercises/03 - exercises");

// 4 - Dentro de um mesmo arquivo, crie três funções. A primeira deve receber uma string e retorná-la em caixa alta.
// A segunda deve também receber uma string e retornar só a primeira letra. A terceira deve receber duas strings e concatená-las.
// Faça o mock do arquivo. Faça uma nova implementação para a primeira função, mas agora ela deve retornar a string em caixa baixa.
// Para a segunda função, uma nova implementação deve retornar a útlima letra de uma string.
// A terceira deve receber três strings e concatená-las.
describe("testando implementações 1", () => {
  test("mockando função para receber um parâmetro e retornar em caixa baixa", () => {
    service.firstFunction.mockImplementation(a => a.toLowerCase());

    expect(service.firstFunction("UPPERCASE")).toBe("uppercase");
    expect(service.firstFunction).toHaveBeenCalled();
    expect(service.firstFunction).toHaveBeenCalledTimes(1);
    expect(service.firstFunction).toHaveBeenCalledWith("UPPERCASE");
  });

  test("mockando função que recebe um parâmetro e retorna a última letra", () => {
    service.secondFunction.mockImplementation(a => a.charAt(a.length - 1));

    expect(service.secondFunction("letter")).toBe("r");
    expect(service.secondFunction).toHaveBeenCalled();
    expect(service.secondFunction).toHaveBeenCalledTimes(1);
    expect(service.secondFunction).toHaveBeenCalledWith("letter");
  });

  test("mockando função que recebe 3 parâmetros e os concatena", () => {
    service.thirdFunction.mockImplementation((a, b, c) => a.concat(b, c));

    expect(service.thirdFunction("tr", "y", "be")).toBe("trybe");
    expect(service.thirdFunction).toHaveBeenCalled();
    expect(service.thirdFunction).toHaveBeenCalledTimes(1);
    expect(service.thirdFunction).toHaveBeenCalledWith("tr", "y", "be");
  });
});

// 5 - Utilizando as mesmas funções do exercício anterior, repita a implementação para a primeira função.
// Após repetir a implementação, restaure a implementação original e crie os testes necessários para validar.
describe("testando implementações 2", () => {
  test("mockando função para receber um parâmetro e retornar em caixa baixa", () => {
    const first = jest
      .spyOn(service, "firstFunction")
      .mockImplementation(a => a.toLowerCase());

    expect(first("UPPERCASE")).toBe("uppercase");
    expect(first).toHaveBeenCalled();
    expect(first).toHaveBeenCalledTimes(2);
    expect(first).toHaveBeenCalledWith("UPPERCASE");

    service.firstFunction.mockRestore();

    // expect(service.firstFunction("lowercase")).toEqual("LOWERCASE");
  });
});
