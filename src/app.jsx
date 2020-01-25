import React from "react";
import ReactDOM from "react-dom";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Envelope from "./envelope.jsx";
import Virus from "./virus.jsx";

import "./styles.scss";

function CoordContainer(props) {
  const { width, height } = props;
  return (<svg
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
    />)
      {React.cloneElement(props.children, {
        cx: props.cx,
        cy: props.cy
      })}
  </svg>);
}

CoordContainer.defaultProps = {
  width: 200,
  height: 200,
  cx: 100,
  cy: 100
}

function App() {
  return (<div>
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">D3-React Virus</Navbar.Brand>
    </Navbar>
    <Container>
      <Row>
        <Col xs={3}>
          <h4>Vanilla envelope</h4>
          <CoordContainer>
            <Envelope />
          </CoordContainer>
        </Col>
        <Col xs={3}>
          <h4>Rotated envelope</h4>
          <CoordContainer
            cx={200/3}
            cy={200/3}
          >
            <Envelope
              rotate={90}
            />
          </CoordContainer>
        </Col>
        <Col xs={6}>
          <h4>Virus</h4>
          <CoordContainer
            width={400}
            height={400}
          >
            <Virus />
          </CoordContainer>
        </Col>
      </Row>
    </Container>
  </div>);
}

ReactDOM.render(
  <App />,
  document.body.appendChild(document.createElement('div'))
)
