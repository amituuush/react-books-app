import React from 'react'
import Add from '../components/Add'

const App = () => (
  <div class="wrapper">

    <Add />

    <div className="headers">
      <span>Title</span>
      <span>Cost</span>
      <span>Quantity</span>
    </div>

    <div className="books">
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

    <div className="totals">
      <span>$25</span>
      <span>3</span>
    </div>

  </div>
)

export default App
