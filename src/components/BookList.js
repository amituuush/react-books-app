import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookList extends Component {
  renderBookList() {
    console.log('props', this.props);
    return this.props.books.map((book, index) => {
      return (
        <div className="book-container" key={index}>
          <div className="book-detail">{book.title}</div>
          <div className="book-detail">{book.cost}</div>
          <div className="book-detail">{book.quantity}</div>
        </div>
      );
    });
  }

  render() {
    return <div>{this.renderBookList()}</div>;
  }
}

const mapStateToProps = (state) => {
  console.log('state', state);
  return {
    books: state.books,
  };
};

export default connect(mapStateToProps)(BookList);
