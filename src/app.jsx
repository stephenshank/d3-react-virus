import React from "react";
import ReactDOM from "react-dom";
import Navbar from "react-bootstrap/Navbar";

import "./styles.scss";

function App() {
  return (<div>
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">D3-React Virus</Navbar.Brand>
    </Navbar>
  </div>);
}

ReactDOM.render(
  <App />,
  document.body.appendChild(document.createElement('div'))
)
