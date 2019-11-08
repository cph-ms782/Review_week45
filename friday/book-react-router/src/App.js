import React from 'react';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.css';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch
} from "react-router-dom";

function App({ bookStore }) {
  console.log("App");
  console.log("bookStore", bookStore)
  return (
    <div>
      <Router >
        <div>
          <Header />
          <Switch>
            <Route exact path="/" componentrender={Home} />
            <Route path="/products"><Product bookStore={bookStore} /></Route>
            <Route path="/addbook"><AddBook bookStore={bookStore} /></Route>
            <Route path="/company" component={Company} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

// , Home, Product and Company

function Header() {
  console.log("Header");
  return (
    <div>
      <ul className="header">
        <li><NavLink exact activeClassName="active" to="/">Home</NavLink></li>
        <li><NavLink activeClassName="active" to="/products">Products</NavLink></li>
        <li><NavLink activeClassName="active" to="/addbook">AddBook</NavLink></li>
        <li><NavLink activeClassName="active" to="/company">Company</NavLink></li>
      </ul>
    </div>
  )
}

function Home() {
  console.log("Home");
  return (
    <div>
      hello Home
      </div>
  )
}

function Company() {
  console.log("Company");
  return (
    <div>
      hello Company
  </div >
  )
}

function Product({ bookStore }) {
  console.log("Product");
  console.log("bookStore", bookStore)
  return (
    <div>
      hello Product
      Bookstore size: {bookStore._books.length}
      <ul>
        {bookStore._books.map((book) => (
          <li key={book.id}>{book.title}</li>
        ))
        }
      </ul>
    </div>
  )
}

function AddBook({ bookStore }) {
  console.log("AddBook");
  console.log("bookStore", bookStore)
  return (
    <div>
      <h1>hello AddBook</h1>
    </div>
  )
}

function NoMatch() {
  console.log("NoMatch");
  return (
    <div>
      hello NoMatch
    </div>
  )
}

export default App;
