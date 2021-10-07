import React from "react";

import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import './Project.css';

function Project(props) {

    return <Container className="project">
        <Row>
            <Col className="my-auto previewImage" xs={12} md={6}>
                <Image src="https://s3-alpha.figma.com/hub/file/948140848/1f4d8ea7-e9d9-48b7-b70c-819482fb10fb-cover.png" rounded />
            </Col>
            <Col md={{span: 3, offset: 3}}>
                <Row>
                    <h1>Project name</h1>
                </Row>
                <Row>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </Row>
                <Row>
                    <Col><a href="www.google.com">GitHub</a></Col>
                    <Col><a href="www.google.com">Website</a></Col>
                    <Col><a href="www.google.com">YouTube</a></Col>
                </Row>
            </Col>
        </Row>
    </Container>;
}

export default Project;