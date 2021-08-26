const actionState1 = () => {
  return ({
    type: 'STATE_1',
    nome: 'Stigerino',
    sobrenome: 'Pipiro',
    cidade: 'catLand',
    })
};

const actionState2 = () => {
  return ({
    type: 'STATE_2',
    nome: 'Maju',
    sobrenome: 'Pipiro',
    cidade: 'catLand',
    })
};


const ESTADO_INICIAL_1 = {
  nome: 'Rodrigo',
  sobrenome: 'Santos da Silva',
  endereco: 'Rua Soldado Mathias, 765',
  cidade: 'Belo Horizonte',
};

const ESTADO_INICIAL_2 = {
  nome: 'Bruna',
  sobrenome: 'Santana Oliveira',
  endereco: 'Rua Holanda, 332',
  cidade: 'São Paulo',
};

const meuPrimeiroReducer = (state = ESTADO_INICIAL_1, action) => {
  switch (action.type) {
    case 'STATE_1':
      return {
        ...state,
        nome: action.nome,
        sobrenome: action.sobrenome,
        cidade: action.cidade,
      };
    default:
      return state;
  }
};

const meuSegundoReducer = (state = ESTADO_INICIAL_2, action) => {
  switch (action.type) {
    case 'STATE_2':
      return {
        ...state,
        nome: action.nome,
        sobrenome: action.sobrenome,
        cidade: action.cidade,
      };
    default:
      return state;
  }
};

const rootReducer = Redux.combineReducers({ meuPrimeiroReducer, meuSegundoReducer });
const store = Redux.createStore(rootReducer);

store.subscribe(() => {
  const { meuPrimeiroReducer, meuSegundoReducer } = store.getState();

  document.getElementById('nome-1').innerHTML = meuPrimeiroReducer.nome;
  document.getElementById('sobrenome-1').innerHTML = meuPrimeiroReducer.sobrenome;
  document.getElementById('cidade-1').innerHTML = meuPrimeiroReducer.cidade;

  document.getElementById('nome-2').innerHTML = meuSegundoReducer.nome;
  document.getElementById('sobrenome-2').innerHTML = meuSegundoReducer.sobrenome;
  document.getElementById('cidade-2').innerHTML = meuSegundoReducer.cidade;
})

window.onload = () => {
  setTimeout(() => {
    store.dispatch(actionState1())
    store.dispatch(actionState2())
    }, 3000);
};
