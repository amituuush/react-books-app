import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { removeBook } from '../actions/index';

class BookList extends Component {
  renderBookList() {
    return this.props.books.map((book) => {
      return (
        <div className="book-table-row" key={book.id}>
          <div className="book-table-td book-table-td-id desktop-only">{book.id}</div>
          <div className="book-table-td book-table-td-title">{book.title}</div>
          <div className="book-table-td book-table-td-cost">${book.cost}</div>
          <div className="book-table-td book-table-td-quantity">{book.quantity}</div>
          <button className="book-table-button" onClick={() => this.removeBook(book.id)}>-</button>
        </div>
      );
    });
  }

  calculateTotal(type) {
    let sum = this.props.books.reduce(function (acc, currentVal) {
      return acc + currentVal[type];
    }, 0);

    return sum;
  }

  removeBook(id) {
    this.props.removeBook(id);
  }

  render() {
    return (
      <div className="book-table">
        <div className="book-table-header desktop-only">
          <div className="book-table-headers-text book-table-headers-id">#</div>
          <div className="book-table-headers-text book-table-headers-title">Title</div>
          <div className="book-table-headers-text book-table-headers-cost">Cost</div>
          <div className="book-table-headers-text book-table-headers-quantity">Quantity</div>
        </div>
        <div className="book-table-row-container">{this.renderBookList()}</div>
        <div className={this.props.books.length == 0 ? "book-totals hidden" : "book-totals"}>
          <div className="book-totals-cost">${this.calculateTotal("cost")}</div>
          <div className="book-totals-quantity">{this.calculateTotal("quantity")}</div>
        </div>
      </div>
    );
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
