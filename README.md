# React Books App Template

Thanks for taking time to look at my project!

In the project directory, run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Overview
* The app has two main components, `<BookForm />` and `<BookTable />`. `BookForm` is given the `addBook` method/action which adds a book to the `books` field in the store. Similarly, `BookTable` is given the `removeBook` method/action, which removes the book from `books` in the store. `BookTable` also has access to `books` and maps through it to render a row for each book.
* Prop types are added for type checking
* The app is responsive. I took a mobile-first approach when styling the app and used media queries to handle screen sizes larger than 768px (I used `768px` as a general breakpoint to differ between mobile and desktop/tablet)
     * The form is made with flexbox and the table with css grids.
* Note: The dimensions of containers, buttons, forms, and font-sizes of elements are not perfectly matched to the design. Since I wasn't given these values I did my best to visually estimate.

## Tradeoffs and Considerations
* One of the biggest considerations I made was using `redux-form` to manage state in `BookForm`; however, it seemed like overkill given the size and time constraint of the project; hence, I opted to give the `BookForm` component its own internal state. If the project grew and managing the state of the form became more complex, I'd reconsider using `redux-form` or a form state management library that's compatible with redux.

## Potential Improvements
* ability to edit title, cost, quantity for each book
* validation on form to now allow empty values to be submitted
* add to and load from localstorage for persistence
* tests
* break styles.scss into partials for more modularity
* handle long title names
* implement class naming methodology such as BEM, SMACSS, or OOCSS
