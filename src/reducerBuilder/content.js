const typeToHandler = {

};

const initialState = {};

function reducer(state = initialState, action) {
  const handler = typeToHandler[action.type];

  return handler ? handler(state, action, initialState) : state;
}

export { reducer, initialState };
