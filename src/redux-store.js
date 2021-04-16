import { createStore } from 'redux';

const defaultStore = {
  count: 0,
};

/*
  const action = { type: 'INCREMENT' }
*/

function reducer(state = defaultStore, action) {
  console.log(action)
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };
    case 'DECREMENT':
      return { ...state, count: state.count - 1 };
    case 'RESET':
      return { ...state, count: 0 };
    default:
      return state;
  }
}

export const store = createStore(reducer, defaultStore);
