import React from 'react';

import BookTable from '../components/BookTable';
import BookForm from '../components/BookForm';

const App = () => (
  <div className="wrapper">
    <div className="cover">
      <h1>Innovations <div className="mobile-only"></div> for Learning Books</h1>
    </div>

    <div className="book-container">
      <BookForm />
      <BookTable />
    </div>
  </div>
);

export default App;
