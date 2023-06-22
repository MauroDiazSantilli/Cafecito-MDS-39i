import React from 'react';
import imgError404 from "../../assets/error404.jpg"
import { Container, Row, Col, Button } from "react-bootstrap"
import { Link, NavLink } from "react-router-dom"

const Error404 = () => {
    return (
        <Container className='main'>
            <Row className='text-center mb-3'>
                <Col xs={12}>
                    <img src={imgError404} alt="imagen de error 404" className="imgError404" />
                </Col>
                <Col xs={12}>
                <NavLink end to={"/"} className={"btn btn-primary"} >Volver a inicio</NavLink>
                </Col>
            </Row>
        </Container>
    );web
};

export default Error404;