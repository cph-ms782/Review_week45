import React, { Component, useState, useEffect } from "react"
import facade from "./apiFacade";

function LogIn(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = (evt) => {
    console.log("login")
    evt.preventDefault();
    props.login(username, password);
  }

  const onChange = (evt) => {
    console.log("onChange - event.target", evt.target)
    if (evt.target.id === "password") {
      setPassword(evt.target.value);
    } else {
      setUsername(evt.target.value);
    }
  }

  return (
    <div>
      <h2>Login</h2>
      <form onChange={onChange} >
        <input placeholder="User Name" id="username" />
        <input placeholder="Password" id="password" />
        <button onClick={login}>Login</button>
      </form>
    </div>
  )
}

function LoggedIn() {
  const [dataFromServer, setDataFromServer] = useState("Fetching!!");

  useEffect(() => {
    facade.fetchData()
      .then(res => {
        console.log("LoggedIn, res", res.msg);
        setDataFromServer(res.msg)
      });
  }, []
  );

  return (
    <div>
      <h2>Data Received from server</h2>
      <h3>{dataFromServer}</h3>
    </div>
  )
}

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const logout = () => {
    facade.logout();
    setLoggedIn(false);
  }

  const login = (user, pass) => {
    facade.login(user, pass);
    setLoggedIn(true);
  }

  return (
    <div>
      {!loggedIn ? (<LogIn login={login} />) :
        (<div>
          <LoggedIn />
          <button onClick={logout}>Logout</button>
        </div>)}
    </div >
  )
}
export default App;