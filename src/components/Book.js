import React, { Component } from 'react';

class Book extends Component {
  render() {
    return (
      <div>
        <div className="book">
          <span>Tom Sawyer</span>
          <span>$10</span>
          <span>2</span>
          <button>-</button>
        </div>
        <div className="book">
          <span>The Old Man and the Sea</span>
          <span>$5</span>
          <span>1</span>
          <button>-</button>
        </div>
      </div>
    );
  }
}

export default Book;
