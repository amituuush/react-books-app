import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Add from '../components/Add';
import BookList from '../components/BookList';
import BookForm from '../components/BookForm';

import pencilImg from '../assets/pencils.svg';

const App = () => (
  <div className="wrapper">
    <div className="cover">
      <h1>Innovations for Learning Books</h1>
    </div>

    <div className="book-container">
      <BookForm />
      <BookList />
    </div>
    <img src={pencilImg} className="pencil-img desktop-only" alt="pencils" />
  </div>
);

// const mapStateToProps = (state) => ({
//   books: state.books,
// });

// export default connect(mapStateToProps, { addBook })(App);

export default App;
