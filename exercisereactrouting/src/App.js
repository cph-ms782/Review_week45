import React from 'react';
// import './App.css';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch,
  useRouteMatch,
  useParams
} from "react-router-dom";
import data from "./data/data.json";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Welcome />
      </header>
    </div>
  );
}

function Welcome() {
  console.log("Welcome");
  return (
    <Router>
      <div>
        <h2>Welcome to our friends site</h2>
        <ul>
          <li>
            <NavLink to="/all">See all users</NavLink>
          </li>
        </ul>
        <Switch>
          <Route path="/all">
            <All />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

function All() {
  console.log("All");
  console.log("data", data);

  let { path, url } = useRouteMatch();
  return (
    <div>
      <h2>All Users</h2>
      <table className="table">
        <thead>
          <tr><th></th><th>Name</th><th>Details</th></tr>
        </thead>
        <tbody>
          {data.users.map((dat) => (
            <tr key={dat.dob}>
              <td><img src={dat.picture.thumbnail} alt={dat.first} /></td>
              <td>{dat.first} {dat.last}</td>
              <td><NavLink to={`${url}/details/${dat.dob}`}>Details</NavLink></td>
            </tr>
          ))}
        </tbody>
      </table>
      <Switch>
        <Route path={`${path}/details/:index`}>
          <Details />
        </Route>
      </Switch>
    </div >
  )
}

function Details() {
  console.log("Details");
  let { index } = useParams();
  console.log("params", index);
  let user = data.users.find(t => t.dob === index);
  console.log("user", user);
  return (
    <div>
      <h2>Details for {user.first} {user.last}</h2>
      <UserInfo user={user} />
      <UserImg user={user} />
    </div>
  );
}

function UserInfo(props) {
  console.log("props.user", props.user);
  return (
    <div>
      <ul key={props.user.dob}>
        {Object.keys(props.user).map((parts, index) => (index < 12 ?
          <li> <span>{parts}</span> <span>{props.user[parts]}</span></li> : ""
        ))}
      </ul>
    </div >
  )
}

function UserImg(props) {
  return (
    <div>
      <img src={props.user.picture.large} alt={props.user.first} />
    </div>
  )
}

export default App;
