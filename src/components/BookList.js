import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { removeBook } from '../actions/index';

class BookList extends Component {
  renderBookListDesktop() {
    return this.props.books.map((book, index) => {
      return (
        <tr className="desktop-only" key={index}>
          <td className="book-table-td">{book.id}</td>
          <td className="book-table-td">{book.title}</td>
          <td className="book-table-td">${book.cost}</td>
          <td className="book-table-td">{book.quantity}</td>
          <button className="book-table-button" onClick={() => this.removeBook(book.id)}>-</button>
        </tr>
      );
    });
  }

  renderBookListMobile() {
    return this.props.books.map((book, index) => {
      return (
        <div className="book-table-row-mobile mobile-only">
          <div className="book-table-td-container">
            <div className="book-table-td">{book.title}</div>
            <div className="book-table-td">${book.cost}</div>
            <div className="book-table-td">{book.quantity}</div>
          </div>
          <div className="book-table-button-container-mobile">
            <button className="book-table-button" onClick={() => this.removeBook(book.id)}>-</button>
          </div>
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
      <div>
        <table className="book-table desktop-only">
          <thead>
            <tr className="headers">
              <th className="headers-text">Title</th>
              <th className="headers-text">Cost</th>
              <th className="headers-text">Quantity</th>
            </tr>
          </thead>
          <tbody>
            {this.renderBookListDesktop()}
            <div className="book-totals">
              <div className="book-totals-text">${this.calculateTotal("cost")}</div>
              <div className="book-totals-text">{this.calculateTotal("quantity")}</div>
            </div>
          </tbody>
        </table>

        <div className="mobile-only">
          {this.renderBookListMobile()}
          <div className="book-totals">
            <div className="book-totals-cost">${this.calculateTotal("cost")}</div>
            <div className="book-totals-quantity">{this.calculateTotal("quantity")}</div>
          </div>
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
