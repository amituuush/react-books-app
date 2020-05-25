import { ADD_BOOK, REMOVE_BOOK } from '../actions/types';

export default function (state = [], action) {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      const newState = state.filter((book) => {
        return book.id !== action.payload.id;
      });
      return newState;
    default:
      return state;
  }
}
