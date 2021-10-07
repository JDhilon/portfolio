import React from "react";

import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import { makeStyles } from '@mui/styles'

import LanguageIcon from '@mui/icons-material/Language';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GitHubIcon from '@mui/icons-material/GitHub';

import './Project.css';

function Project(props) {

    /* Project should include:
        {
            Title: string
            Description: string
            Image: string
            Links: {
                GitHub: string,
                Website: string,
                YouTube: string
                }
        }

    */

    // Using MaterialUI options to create custom styles for hover effects on icons
    const useClasses = makeStyles(theme => ({
        root: {
            "&:hover": {
                color: '#da6d15',
            },
            color: '#C06014',
        },
    }))

    const classes = useClasses();

    // Determine which orientation the content should take
    // TODO: Add listener to also make sure screen is NOT xs
    if(props.isLeft) {
        return <Container className="project">
        <Row>
            <Col md={{span: 3, offset: 0}} className="description">
                <Row>
                    <Col>
                        <h1>Project name</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </Col>
                </Row>
                {/*TODO: Align these links to the bottom of the column*/}
                <Row>
                    <Col><a href="www.google.com"><GitHubIcon className={classes.root}></GitHubIcon></a></Col>
                    <Col><a href="www.google.com"><LanguageIcon className={classes.root}></LanguageIcon></a></Col>
                    <Col><a href="www.google.com"><YouTubeIcon className={classes.root}></YouTubeIcon></a></Col>
                </Row>
            </Col>
            <Col className="my-auto previewImage" xs={12} md={{span: 6, offset: 3}}>
                <Image src="http://via.placeholder.com/288x480" fluid />
            </Col>
        </Row>
        </Container>;
    }
    else {
        return <Container className="project">
        <Row>
            <Col className="my-auto previewImage" xs={12} md={6}>
                <Image src="http://via.placeholder.com/480x288" fluid />
            </Col>
            <Col md={{span: 3, offset: 3}}  className="description">
                <Row>
                    <Col>
                        <h1>Project name</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </Col>
                </Row>
                {/*TODO: Align these links to the bottom of the column*/}
                <Row>
                <Col><a href="www.google.com"><GitHubIcon className={classes.root}></GitHubIcon></a></Col>
                    <Col><a href="www.google.com"><LanguageIcon className={classes.root}></LanguageIcon></a></Col>
                    <Col><a href="www.google.com"><YouTubeIcon className={classes.root}></YouTubeIcon></a></Col>
                </Row>
            </Col>
        </Row>
        </Container>;
    }
}

export default Project;