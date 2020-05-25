import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { removeBook } from '../actions/index';
import pencilImg from '../assets/pencils.svg';

class BookTable extends Component {
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
    return this.props.books.reduce(function (acc, currentVal) {
      return acc + currentVal[type];
    }, 0);
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
        {
          this.props.books.length === 0 ? (
            <div className="book-table-placeholder desktop-only">Use the form above to add a book to the list!</div>
          ) : (
              <div className={this.props.books.length === 0 ? "book-totals hidden" : "book-totals"}>
                <div className="book-totals-cost">${this.calculateTotal("cost")}</div>
                <div className="book-totals-quantity">{this.calculateTotal("quantity")}</div>
              </div>
            )
        }
        <div className="pencil-img-container">
          <img src={pencilImg} className="pencil-img desktop-only" alt="pencils" />
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

BookTable.propTypes = {
  books: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    cost: PropTypes.number,
    quantity: PropTypes.number
  })),
  removeBook: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { removeBook })(BookTable);
