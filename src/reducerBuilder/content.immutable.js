import { fromJS } from 'immutable';

const typeToHandler = {

};

const initialState = fromJS({

});

function reducer(state = initialState, action) {
  const handler = typeToHandler[action.type];

  return handler ? handler(state, action, initialState) : state;
}

export { reducer, initialState };
