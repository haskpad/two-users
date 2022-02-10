import React from 'react';
import Editor from './Editor';
import {Container, Row, Col} from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>
        Two-Users Test for Haskpad Backend
      </h1>
      <Container>
        <Row>
          <Col className="m-auto">
            <h3> Server: </h3>
            <Editor />
          </Col>
        </Row>
        <Row>
          <Col className="column-left">
            <h3> User 1: </h3>
            <Editor />
          </Col>
          <Col className="column-right">
            <h3> User 2: </h3>
            <Editor />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
