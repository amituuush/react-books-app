import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Add from '../components/Add';
import BookList from '../components/BookList';
import BookForm from '../components/BookForm';

const App = () => (
  <div className="wrapper">
    <div className="cover">
      <h1>Innovations for Learning Books</h1>
    </div>

    <div className="book-container">
      <BookForm />
      <BookList />
    </div>
  </div>
);

// const mapStateToProps = (state) => ({
//   books: state.books,
// });

// export default connect(mapStateToProps, { addBook })(App);

export default App;
