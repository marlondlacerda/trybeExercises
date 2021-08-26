// ================== S T A T E ================== //

const ESTADO_INICIAL = {
  colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
  index: 0,
};
// ================== A C T I O N S ================== //
const changeNext = () => {
  return ({ type: 'NEXT_COLOR' })
};
const changePrev = () => {
  return ({ type: 'PREVIOUS_COLOR'})
};
const randomColor = () => {
  return ({ type: 'RANDOM_COLOR'})
};

// ================== R E D U C E R ================== //
function criarCor() {
  const oneChar = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
  let cor = '#';
  const aleatorio = () => Math.floor(Math.random() * oneChar.length);
  for (let i = 0; i < 6; i += 1) {
      cor += oneChar[aleatorio()];
  }
  return cor;
}

const reducer = (state =  ESTADO_INICIAL, action) => {
  switch (action.type) {
    case 'NEXT_COLOR':
      return { 
        ...state,
        index: state.index === state.colors.length - 1 ? 0 : state.index + 1
      };

    case 'PREVIOUS_COLOR':
      return {
      ...state, 
      index: state.index === 0 ? state.colors.length - 1 : state.index - 1
    };

    case 'RANDOM_COLOR':
      return {
      ...state, 
      colors: [...state.colors, criarCor() ],
      index: state.colors.length,
    };

  default: 
    return state;
  }
};

// ================== S T O R E ================== //

const store = Redux.createStore(reducer);

store.subscribe(() => {
  const { colors, index } = store.getState();

  document.getElementById('value').innerHTML = colors[index];

  document.getElementById('container').style.backgroundColor = colors[index];
})


const nextColor = document.getElementById('previous');
const prevColor = document.getElementById('next');
const random = document.getElementById('random');


nextColor.addEventListener('click', () => store.dispatch(changeNext()))
prevColor.addEventListener('click', () => store.dispatch(changePrev()))
random.addEventListener('click', () => store.dispatch(randomColor()))

