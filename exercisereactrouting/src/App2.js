import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch,
  useRouteMatch,
  useParams
} from "react-router-dom";
import data from "./data/data.json";


function App2() {
  console.log("App");
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Switch>
            <Route path={`/details/:index`}>
              <Details />
            </Route>
            <Route path="/all">
              <All />
            </Route>
            <Route exact path="/">
              <Welcome />
            </Route>
          </Switch>
        </Router>
      </header>
    </div>
  );
}

function Welcome() {
  console.log("Welcome");
  return (
    <div>
      <h2>Welcome to our friends site</h2>
      <NavLink to="/all">
        <button type="button">
          See all users
     </button>
      </NavLink>
    </div >
  )
}

function All() {
  console.log("All");
  console.log("data", data);
  let { path, url } = useRouteMatch();
  console.log("path, url", path, url);
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
              <td><NavLink to={`/details/${dat.dob}`}>
                <button type="button">
                  Details
     </button>
              </NavLink></td>
            </tr>
          ))}
        </tbody>
      </table>
      <NavLink to="/">
        <button type="button">
          Back
     </button>
      </NavLink>

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
      <div id="infobox">
        <h2>Details for {user.first} {user.last}</h2>
        <hr />
        <UserInfo user={user} />
        <UserImg user={user} />
      </div>
      <div></div>
      <NavLink to="/all">
        <button type="button">
          Back
     </button></NavLink>
    </div>
  );
}

function UserInfo(props) {
  console.log("props.user", props.user);
  return (
    <div id="info">
      {Object.keys(props.user).map((parts, index) => (index < 12 ?
        <div><span id="keys">{parts}</span>      <span id="values">{props.user[parts]}</span> </div> : ""
      ))}
    </div >
  )
}

function UserImg(props) {
  return (
    <div id="img">
      <img src={props.user.picture.large} alt={props.user.first} />
    </div>
  )
}

export default App2;
