import { ADD_BOOK } from './types';

export const addBook = ({ title, cost, quantity }) => {
  return {
    type: ADD_BOOK,
    payload: {
      title: title,
      cost: cost,
      quantity: quantity,
    },
  };
};

// refactor below to use shorthand?
