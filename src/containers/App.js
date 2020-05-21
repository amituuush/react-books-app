import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Add from '../components/Add';
import BookList from '../components/BookList';
import BookForm from '../components/BookForm';

const App = () => (
  <div className="wrapper">
    <h1>Innovations for Learning Books</h1>
    <BookForm />

    <div className="headers">
      <span>Title</span>
      <span>Cost</span>
      <span>Quantity</span>
    </div>

    <BookList />

    <div className="totals">
      <span>$25</span>
      <span>3</span>
    </div>
  </div>
);

// const mapStateToProps = (state) => ({
//   books: state.books,
// });

// export default connect(mapStateToProps, { addBook })(App);

export default App;
