import React from 'react';
import {Container, Row, Col, InputGroup} from 'react-bootstrap';

class TodoItem extends React.Component{
  render() {
    return (
      <Container>
        <Row className="justify-content-md-center todo-item">
          <Col md={1} className="justify-content-md-center d-flex align-items-md-center">
            <input type="checkbox"/>
          </Col>
          <Col md={5} className="d-flex align-items-md-center">{this.props.text}</Col>
          <Col md={3} className="d-flex justify-content-md-center align-items-md-center">{this.props.name}</Col>
          <Col md={3} className="d-flex justify-content-md-center align-items-md-center">{this.props.date}</Col>
        </Row>
      </Container>
    )
  }
}

export default TodoItem