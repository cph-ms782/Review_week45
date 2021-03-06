import React, { useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Link,
  Prompt,
  Switch,
  useParams,
  useHistory,
  useRouteMatch
} from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.css';

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
  let { path, url } = useRouteMatch();
  return (
    <div>
      hello Product
      Bookstore size: {bookStore._books.length}
      <ul>
        {bookStore._books.map((book) => (
          <li key={book.id}>
            {book.title} <span></span>
            <Link to={`${url}/components/${book.id}`}>(Details</Link>
            <Link to={`${url}/delete/${book.id}`}> - Delete)</Link>
          </li>
        ))
        }
      </ul>
      <Switch>
        <Route exact path={path}>
          <h3>Please select a topic.</h3>
        </Route>
        <Route path={`${path}/components/:id`}>
          <Details bookStore={bookStore} />
        </Route>
        <Route path={`${path}/delete/:id`}>
          <Delete bookStore={bookStore} />
        </Route>
      </Switch>

    </div>
  )
}

function AddBook({ bookStore }) {
  console.log("AddBook");
  console.log("bookStore", bookStore)
  const emptyBook = { "id": 0, "title": "", "info": "" };
  const [book, setBook] = useState({ ...emptyBook });
  let [isBlocking, setIsBlocking] = useState(false);

  const handleChange = (evt) => {
    console.log("handleChange");
    const newBook = { ...book };
    const target = evt.target;
    const id = evt.target.id;
    setIsBlocking(target.value.length > 0);
    console.log("target.value", target.value);
    setBook({ ...newBook, [id]: target.value });
    console.log("book", book);
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log("submit");
    console.log("book", book);
    setIsBlocking(false);
    bookStore.addBook(book);
    setBook({ ...emptyBook });
  }

  return (
    <div>
      <div>
        <form className="form-horizontal">
          <Prompt
            when={isBlocking}
            message={location =>
              `You have unsaved work. Sure you want to go to ${location.pathname}?`
            }
          />
          <div className="form-group">
            <div className="col-sm-9">
              <input
                type="text"
                className="form-control"
                id="title"
                placeholder="Title"
                value={book.title}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-9">
              <input
                type="text"
                className="form-control"
                id="info"
                placeholder="Info"
                value={book.info}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-3 col-sm-9">
              <button
                onClick={handleSubmit}
                className="btn btn-primary"
              >
                Save
            </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

function Details({ bookStore }) {
  console.log("Details");
  let { id } = useParams();
  console.log("id", id);
  let book = bookStore._books.find(b => b.id == id);
  console.log("book", book);
  return (
    <div>
      <h2>Book details</h2>
      <p>{book.title}</p>
      <p>{book.info}</p>
    </div>
  )
}

function Delete({ bookStore }) {
  let history = useHistory();
  console.log("Delete");
  let { id } = useParams();
  console.log("id", id);
  let book = bookStore._books.find(b => b.id == id);
  console.log("bookStore._books.size", bookStore._books.length);
  bookStore.deleteBook(id);
  console.log("bookStore._books.size", bookStore._books.length);
  history.push("/products");
  return (
    <div>
      <h2>Book <i>{book.title}</i> is deleted</h2>
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
