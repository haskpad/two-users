import React from 'react';
import CodeEditor from './CodeEditor';
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
            <CodeEditor />
          </Col>
        </Row>
        <Row>
          <Col className="column-left">
            <h3> User 1: </h3>
            <CodeEditor />
          </Col>
          <Col className="column-right">
            <h3> User 2: </h3>
            <CodeEditor />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;

