import { useState } from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import SectionIconItem from '../layouts/SectionIconItem';
import ProjectItem from './WorkItem';
import porfolio from "../../images/porfolio.svg";

import comba from "../../images/comba.png";
import getquote from "../../images/getquote.png";
import noutijo from "../../images/noutijo.png";
import chatesandcaviar from "../../images/chatesandcaviar.png";
import watchoutsite from "../../images/watchoutsite.png";

import porfolioweb from "../../images/porfolioweb.svg";
import porfoliographicdesign from "../../images/porfoliographicdesign.svg";
import behance from "../../images/behance.svg";

export default function FullWorks() {

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
        tags: ["reactjs", "javascript", "html_css"]
    }

    ];

    let [isWeb, setIsWeb] = useState(true);

    let Web = (() => {

        return (<Grid mt={2} item xs={12} className="center-content-left animate__animated animate__slideInUp">
            <Grid container spacing={1}>
                {
                    projectssar.map((project, id) => <ProjectItem key={id} link={project.link} tags={project.tags} title={project.title} img={project.img} desc={project.desc} />)
                }
            </Grid>
        </Grid>)
    })

    let Design = (() => {

        return (<Grid my={5} item xs={12} className="center-content-left animate__animated animate__slideInUp">
            <Grid container spacing={1}>
                <Grid style={{ display: "block" }} item xs={12}>
                    <Box mt={0.5} className="center-content-left">
                        <span className="fontWeight300 text-color fontSize16">
                            Check my behance profile to learn more about my graphic design works.
                        </span>
                    </Box>
                </Grid>
                <Grid mt={1} item xs={12}>
                    <Grid container spacing={1}>
                        <Grid item mt={2} xs={12}>
                            <Box py={0.5} style={{ borderRadius: 100 }} className="bg-second-color center-content">
                                <a target="_blank" href="https://www.behance.net/oreolnoumodong">
                                    <span className="text-color fontWeight400 fontSize16"><img style={{ width: "20px", height: "20px" }} src={behance} alt="behance icon" /> Click to view my graphic design work  </span>
                                </a>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>)
    })

    return (
        <>
            <Box mt={13} sx={{ flexGrow: 1 }}>
                <Grid container spacing={1}>
                    <Grid item xs={2} className="center-content-left">
                        <SectionIconItem className="fontWeight600 fontSize18" icon={porfolio} text={"Works"} />

                    </Grid>
                    <Grid item xs={10} className="center-content-right">
                        <Box style={{ display: "flex" }}>
                            <Box onClick={() => setIsWeb(true)} mr={0.5} style={{ borderRadius: 100, padding: "2px 10px 2px 10px", cursor: "pointer" }} className={`${isWeb ? "bg-green-color" : "bg-second-color"}` + " " + "center-content"}>
                                <span>
                                    <span className="text-color fontWeight500 fontSize14">Web <img style={{ width: "20px", height: "20px" }} src={porfolioweb} alt="Web icon" /></span>
                                </span>
                            </Box>
                            <Box onClick={() => setIsWeb(false)} style={{ borderRadius: 100, padding: "2px 10px 2px 10px", cursor: "pointer" }} className={`${!isWeb ? "bg-green-color" : "bg-second-color"}` + " " + "center-content"}>
                                <span>
                                    <span className="text-color fontWeight500 fontSize14">Graphic Design <img style={{ width: "20px", height: "20px" }} src={porfoliographicdesign} alt="Grapic design icon" /></span>
                                </span>
                            </Box>
                        </Box>
                    </Grid>

                    {isWeb ? <Web /> : <Design />}

                </Grid>
            </Box>
        </>
    );
}
