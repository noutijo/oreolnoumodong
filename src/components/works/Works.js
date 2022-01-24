import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';

import SectionIconItem from '../layouts/SectionIconItem';
import WorkItem from './WorkItem';
import porfolio from "../../images/porfolio.svg";

import comba from "../../images/comba.png";
import transip from "../../images/transip.png";
import getquote from "../../images/getquote.png";
import chat from "../../images/chat.png";

export default function Works() {
    const projectssar = [{
        img: `${comba}`,
        title: "comba",
        desc: "comba is an online game written JavaScript in which 2 players play each turn to compete.",
        link: "http://comba.netlify.app/",
        githublink: "https://github.com/noutijo/comba",
        tags: ["javascript", "es6", "html_css"]
    }
        ,
    {
        img: `${transip}`,
        title: "transIp",
        desc: "Desktop application that allowing the transfer of files between two computers on a local network.",
        link: "https://youtu.be/M033OeeRiZ8",
        githublink: "https://github.com/noutijo/trans_ip",
        tags: ["java", "javafx"]
    },
    {
        img: `${getquote}`,
        title: "getquote",
        desc: "getquote is a tool that creates random quotes by assembling sentence fragments.",
        link: "http://getquote.epizy.com/",
        githublink: "https://github.com/noutijo/getquote",
        tags: ["javascript", "html_css"]
    }
        ,
    {
        img: `${chat}`,
        title: "Chat ",
        desc: "chat is a chat application in a local network between two computers.",
        link: "https://youtu.be/7Lsckb7YThk",
        githublink: "https://github.com/noutijo/chat",
        tags: ["java", "javafx"]
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
                                projectssar.map((project, id) => <WorkItem key={id} link={project.link} tags={project.tags} title={project.title} img={project.img} githublink={project.githublink} desc={project.desc} />)
                            }
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Link to="/works" style={{ float: "right" }} className="margin-content-percent"><span className="fontWeight400 white-color">See more</span> </Link>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}

