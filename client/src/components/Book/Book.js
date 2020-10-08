import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Book(props) {
  return (
    <Jumbotron fluid className="p-3">
      <Container>
        <Row>
          <Col xs={10}>
            <h5>Book Title</h5>
          </Col>
          <Col>
            <button className="btn btn-primary mr-2">View</button>
            <button className="btn btn-primary">{props.button2}</button>
          </Col>
        </Row>
        <Row>
          <Col>
          <p>Author</p>
          </Col>
        </Row>
        <Row>
          <Col>
          <img src="http://placehold.it/128x128" alt="book" className="float-left mr-3"/>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
}
