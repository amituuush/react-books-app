import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { removeBook } from '../actions/index';

class BookList extends Component {
  renderBookList() {
    return this.props.books.map((book, index) => {
      return (
        <div className="book-container" key={index}>
          <div className="book-detail">{book.id}</div>
          <div className="book-detail">{book.title}</div>
          <div className="book-detail">{book.cost}</div>
          <div className="book-detail">{book.quantity}</div>
          <button onClick={() => this.removeBook(book.id)}>-</button>
        </div>
      );
    });
  }

  removeBook(id) {
    this.props.removeBook(id);
  }

  render() {
    return <div>{this.renderBookList()}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    books: state.books,
  };
};

BookList.propTypes = {
  // books: fill this in
  removeBook: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { removeBook })(BookList);
