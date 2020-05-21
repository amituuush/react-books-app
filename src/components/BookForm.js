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
      cost: this.state.cost,
      quantity: this.state.quantity,
    });
  }

  render() {
    return (
      <form onSubmit={this.handleFormSubmit} className="add">
        <input
          type="text"
          value={this.state.title}
          onChange={this.handleFormChange}
          name="title"
          placeholder="Title"
        />
        <input
          type="number"
          value={this.state.cost}
          onChange={this.handleFormChange}
          name="cost"
          placeholder="Cost"
        />
        <input
          type="number"
          value={this.state.quantity}
          onChange={this.handleFormChange}
          name="quantity"
          placeholder="Quantity"
        />
        <button>+</button>
      </form>
    );
  }
}

BookForm.propTypes = {
  addBook: PropTypes.func.isRequired,
};

// const mapStateToProps = (state) => {
//   return {
//     books: state.books,
//   };
// };

export default connect(null, { addBook })(BookForm);
