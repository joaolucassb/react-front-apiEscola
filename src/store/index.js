import { legacy_createStore as createStore } from 'redux';

const initalState = {
  botaoClicado: false,
};

const reducer = (action = {}, state = initalState) => {
  switch (action.type) {
    case 'BOTAO_CLICADO': {
      const newState = { ...state };
      newState.botaoClicado = !newState.botaoClicado;
      return newState;
    }

    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
