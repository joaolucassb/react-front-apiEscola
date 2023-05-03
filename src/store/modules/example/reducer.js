const initalState = {
  botaoClicado: false,
};

export default (action = {}, state = initalState) => {
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
