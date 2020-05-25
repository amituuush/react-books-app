import { ADD_BOOK, REMOVE_BOOK } from './types';

let idCounter = 0;

export const addBook = ({ title, cost, quantity }) => {
  idCounter++;

  return {
    type: ADD_BOOK,
    payload: {
      id: idCounter,
      title: title,
      cost: cost,
      quantity: quantity,
    },
  };
};

export const removeBook = (id) => {
  return {
    type: REMOVE_BOOK,
    payload: {
      id: id,
    },
  };
};
