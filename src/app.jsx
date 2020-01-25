import React from "react";
import ReactDOM from "react-dom";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Envelope from "./envelope.jsx";

import "./styles.scss";

function App() {
  const width = 200,
    height = 200;
  return (<div>
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">D3-React Virus</Navbar.Brand>
    </Navbar>
    <Container>
      <Row>
        <Col>
          <h1>Envelope</h1>
          <svg
            width={width}
            height={height}
            style={{
              borderStyle: "solid",
              borderWidth: 1,
              borderColor: "grey"
            }}
          >
            <rect
              x={width/4}
              y={height/4}
              width={width/2}
              height={height/2}
              fill={"#EEEEEE"}
            />
            <line
              x1={width/2}
              x2={width/2}
              y1={0}
              y2={height}
              stroke="lightgrey"
            />
            <line
              x1={0}
              x2={width}
              y1={height/2}
              y2={height/2}
              stroke="lightgrey"
            />
            <Envelope
              cx={width/2}
              cy={width/2}
            />
          </svg>
        </Col>
      </Row>
    </Container>
  </div>);
}

ReactDOM.render(
  <App />,
  document.body.appendChild(document.createElement('div'))
)
