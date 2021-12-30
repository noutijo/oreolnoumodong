import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';

import SectionIconItem from './SectionIconItem';
import ProjectItem from './ProjectItem';
import porfolio from "../images/porfolio.svg";

import comba from "../images/comba.png";
import getquote from "../images/getquote.png";
import noutijo from "../images/noutijo.png";
import chatesandcaviar from "../images/chatesandcaviar.png";
import watchoutsite from "../images/watchoutsite.png";

export default function FullProjects() {
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
        ,
    {
        img: `${watchoutsite}`,
        title: "watchoutsite ",
        desc: "watchoutsiteatboston is Web prototype create for an event that shows films can appeal to audiences of all ages.",
        link: "http://watchoutsiteatboston.epizy.com/",
        tags: ["html", "css"]
    }
        ,
    {
        img: `${chatesandcaviar}`,
        title: "Chalets & Cav",
        desc: "Chalets & Caviar is a website who show off luxury chalets for sale or rent.",
        link: "http://mountainschalets.epizy.com/",
        tags: ["wordpress", "css"]
    }
        ,
    {
        img: `${noutijo}`,
        title: "noutijo",
        desc: "noutijo is my own portfolio built from scratch with a custom design.",
        link: "http://noutijo.github.io/",
        tags: ["reactjs", "html_css"]
    }

    ];

    return (
        <>
            <Box mt={10} sx={{ flexGrow: 1 }}>
                <Grid container spacing={1}>
                    <Grid item xs={12} className="center-content-left">
                        <SectionIconItem className="fontWeight600 fontSize18" icon={porfolio} text={"Projects"} />
                    </Grid>
                    <Grid item xs={12} className="center-content-left animate__animated animate__slideInUp">
                        <Grid container spacing={1}>
                            {
                                projectssar.map((project, id) => <ProjectItem key={id} link={project.link} tags={project.tags} title={project.title} img={project.img} desc={project.desc} />)
                            }
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}

