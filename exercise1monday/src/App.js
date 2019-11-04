import React, { useState } from "react";
import './App.css';

/**
 * converting from class to hooks. Class is commented out at bottom
 */


export default function App() {
  const redborder = {
    border: '2px solid red',
    width: '400px',
    margin: '5px'
  }

  const parentborder = {
    border: '2px solid green',
    width: '414px'
  }

  const blueborder = {
    border: '2px solid blue',
    width: '400px',
    margin: '5px'
  }
  const [name, setName] = useState("");

  const InputComp = (props) => {
    return (
      <div style={redborder}>
        <form >
          <input
            type="text"
            value={props.name}
            onChange={props.update}
            placeholder="write input to show in sibling component"
          ></input>
        </form>
      </div>
    );
  }

  const ShowComp = (props) => {
    return (
      <div style={blueborder}>Show content:
        {props.name}
      </div>
    );
  }

  const update = (event) => {
    event.preventDefault();
    // console.log(event.target.value)
    const name = event.target.value;
    setName(name);
  }

  return (
    <div style={parentborder}>
      <h2>Parent component holding the state</h2>
      <InputComp update={update} name={name}></InputComp>
      <ShowComp name={name}></ShowComp>
    </div>
  );
}




// export default class App extends React.Component {
//   constructor() {
//     super();
//     this.state = { name: '' }
//   }
//   update = (event) => {
//     const name = event.target.value;
//     this.setState({ name: name });
//   }
//   render() {
//     return (<div style={parentborder}>
//       <h2>Parent componet holding the state</h2>
//       <InputComp update={this.update}></InputComp>
//       <ShowComp name={this.state.name}></ShowComp>
//     </div>);
//   }
// }

// const InputComp = (props) => {
//   return (<div style={redborder}>
//     <input type="text" onChange={props.update} placeholder="write input to show in sibling component" />
//   </div>);
// }

// const ShowComp = (props) => {
//   return <div style={blueborder}>Show content:
//         {props.name}
//   </div>
// }

