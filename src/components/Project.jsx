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
        return <Container className="project" id={props.id}>
        <Row>
            <Col md={{span: 3, offset: 0}} className="description">
                <Row>
                    <Col>
                        <h1>{props.proj.title}</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>{props.proj.description}</p>
                    </Col>
                </Row>
                {/*TODO: Align these links to the bottom of the column*/}
                <Row>
                    {(props.proj.links.github === "") ? null :<Col><a href={props.proj.links.github}><GitHubIcon className={classes.root}></GitHubIcon></a></Col>}
                    {(props.proj.links.website === "") ? null : <Col><a href={props.proj.links.website}><LanguageIcon className={classes.root}></LanguageIcon></a></Col>}
                    {(props.proj.links.youtube === "") ? null :<Col><a href={props.proj.links.youtube}><YouTubeIcon className={classes.root}></YouTubeIcon></a></Col>}
                </Row>
            </Col>
            <Col className="my-auto previewImage" xs={12} md={{span: 6, offset: 3}}>
                <Image src={props.proj.image} fluid />
            </Col>
        </Row>
        </Container>;
    }
    else {
        return <Container className="project" id={props.id}>
        <Row>
            <Col className="my-auto previewImage" xs={12} md={6}>
                <Image src={props.proj.image} fluid />
            </Col>
            <Col md={{span: 3, offset: 3}}  className="description">
                <Row>
                    <Col>
                        <h1>{props.proj.title}</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>{props.proj.description}</p>
                    </Col>
                </Row>
                {/*TODO: Align these links to the bottom of the column*/}
                <Row>
                    {(props.proj.links.github === "") ? null :<Col><a href={props.proj.links.github}><GitHubIcon className={classes.root}></GitHubIcon></a></Col>}
                    {(props.proj.links.website === "") ? null : <Col><a href={props.proj.links.website}><LanguageIcon className={classes.root}></LanguageIcon></a></Col>}
                    {(props.proj.links.youtube === "") ? null :<Col><a href={props.proj.links.youtube}><YouTubeIcon className={classes.root}></YouTubeIcon></a></Col>}
                </Row>
            </Col>
        </Row>
        </Container>;
    }
}

export default Project;