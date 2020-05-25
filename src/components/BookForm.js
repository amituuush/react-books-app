import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { addBook } from '../actions/index';

class BookForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      cost: '',
      quantity: '',
    };

    this.handleFormChange = this.handleFormChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleFormSubmit(e) {
    e.preventDefault();

    this.props.addBook({
      title: this.state.title,
      cost: parseInt(this.state.cost),
      quantity: parseInt(this.state.quantity),
    });
  }

  render() {
    return (
      <div className="book-form">
        <form onSubmit={this.handleFormSubmit}>
          <div className="book-form-input-container">
            <input
              type="text"
              value={this.state.title}
              onChange={this.handleFormChange}
              name="title"
              placeholder="Title"
              className="input-title book-form-input"
            />
            <input
              type="number"
              value={this.state.cost}
              onChange={this.handleFormChange}
              name="cost"
              placeholder="Cost"
              className="input-cost book-form-input"
            />
            <input
              type="number"
              value={this.state.quantity}
              onChange={this.handleFormChange}
              name="quantity"
              placeholder="Quantity"
              className="input-quantity book-form-input"
            />
            <button className="book-form-button">+</button>
          </div>
        </form>
      </div>
    );
  }
}

BookForm.propTypes = {
  addBook: PropTypes.func.isRequired,
};

export default connect(null, { addBook })(BookForm);
