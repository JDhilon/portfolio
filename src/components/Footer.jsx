import React from "react";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from "react-bootstrap/Container";

import { makeStyles } from '@mui/styles'

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';

import './Footer.css';

function Footer() {
    const year = new Date().getFullYear();

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

  return <div className="footer">
            <a href="https://github.com/JDhilon"><GitHubIcon className={classes.root}></GitHubIcon></a>
            <a href="https://www.linkedin.com/in/jashanjot-dhilon-9457b0125/"><LinkedInIcon className={classes.root}></LinkedInIcon></a>
            <a href="mailto:jdhilondev@gmail.com"><MailIcon className={classes.root}></MailIcon></a>
            <p>Copyright ⓒ {year}</p>
        </div>;
}

export default Footer;