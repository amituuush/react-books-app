import { ADD_BOOK } from '../actions/types';

export default function (state = [], action) {
  switch (action.type) {
    case ADD_BOOK:
      // const books = state.push(action.payload)
      return [...state, action.payload];
    default:
      // console.log('state', state);
      return state;
  }
}
