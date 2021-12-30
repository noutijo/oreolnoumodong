import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';

import SectionIconItem from './SectionIconItem';
import ProjectItem from './ProjectItem';
import porfolio from "../images/porfolio.svg";

import comba from "../images/comba.png";
import getquote from "../images/getquote.png";

export default function Projects() {
    const projectssar = [{
        img: `${comba}`,
        title: "comba",
        desc: "comba is an online game written JavaScript in which 2 players play each turn to compete.",
        link: "http://comba.netlify.app/",
        tags: ["javascript", "es6", "html_css"]
    }
        ,
    {
        img: `${getquote}`,
        title: "getquote",
        desc: "getquote is a tool that creates random quotes by assembling sentence fragments.",
        link: "http://getquote.epizy.com/",
        tags: ["javascript", "html_css"]
    }

    ];

    return (
        <>
            <Box mt={3} sx={{ flexGrow: 1 }}>
                <Grid container spacing={1}>
                    <Grid item xs={12} className="center-content-left">
                        <SectionIconItem className="fontWeight600 fontSize18" icon={porfolio} text={"Works"} />
                    </Grid>
                    <Grid item xs={12} className="center-content-left animate__animated animate__slideInUp">
                        <Grid container spacing={1}>
                            {
                                projectssar.map((project, id) => <ProjectItem key={id} link={project.link} tags={project.tags} title={project.title} img={project.img} desc={project.desc} />)
                            }
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Link to="/projects" style={{ float: "right" }} className="margin-content-percent"><span className="fontWeight400 white-color">See more</span> </Link>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}

