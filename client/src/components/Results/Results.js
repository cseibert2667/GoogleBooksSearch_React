import React from 'react';
import Container from "react-bootstrap/Container";
import Book from "../Book/Book"

export default function Results(props) {
    return (
        <Container>
            <h3>Results</h3>
            <Book button2={props.button2}/>
        </Container>
    )
}
