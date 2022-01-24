import { useState } from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';

import SectionIconItem from '../layouts/SectionIconItem';
import WorkItem from './WorkItem';
import porfolio from "../../images/porfolio.svg";

import comba from "../../images/comba.png";
import getquote from "../../images/getquote.png";
import noutijo from "../../images/noutijo.png";
import chatesandcaviar from "../../images/chatesandcaviar.png";
import watchoutsite from "../../images/watchoutsite.png";

import porfolioweb from "../../images/porfolioweb.svg";
import porfoliographicdesign from "../../images/porfoliographicdesign.svg";
import behance from "../../images/behance.svg";
import transip from "../../images/transip.png";
import chat from "../../images/chat.png";
import timetable from "../../images/timetable.png";
import votingapp from "../../images/votingapp.png";

export default function FullWorks() {

    const projectsar = [{
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
    }
        ,
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
        ,
    {
        img: `${timetable}`,
        title: "timeTable ",
        desc: "timeTable is a desktop application for automatic generate timetables.",
        link: "https://youtu.be/HZGmThOR4FM",
        githublink: "https://github.com/noutijo/timetable",
        tags: ["java", "javafx", "mysql"]
    }
        ,
    {
        img: `${watchoutsite}`,
        title: "watchout ",
        desc: "watchoutsiteatboston is Web prototype create for an event that shows films can appeal to audiences of all ages.",
        link: "http://watchoutsiteatboston.epizy.com/",
        githublink: "https://github.com/noutijo/watchoutsiteatboston",
        tags: ["html", "css"]
    }
        ,
    {
        img: `${votingapp}`,
        title: "votingApp ",
        desc: "watchoutsiteatboston is Web prototype create for an event that shows films can appeal to audiences of all ages.",
        link: "https://youtu.be/gs1yInbSJEA",
        githublink: "https://github.com/noutijo/votingApp",
        tags: ["java", "javafx", "mysql"]
    }
        ,
    {
        img: `${chatesandcaviar}`,
        title: "Chalets",
        desc: "Chalets & Caviar is a website who show off luxury chalets for sale or rent.",
        link: "http://mountainschalets.epizy.com/",
        githublink: "",
        tags: ["wordpress", "css"]
    }
        ,
    {
        img: `${noutijo}`,
        title: "noutijo",
        desc: "noutijo is my own portfolio built from scratch with a custom design.",
        link: "http://noutijo.github.io/",
        githublink: "https://github.com/noutijo/noutijo-dev",
        tags: ["reactjs", "javascript", "html_css"]
    }

    ];

    let [isWeb, setIsWeb] = useState(true);

    let Web = (() => {

        return (<Grid mt={2} item xs={12} className="center-content-left animate__animated animate__slideInUp">
            <Grid container spacing={1}>
                {
                    projectsar.map((project, id) => <WorkItem key={id} link={project.link} tags={project.tags} title={project.title} img={project.img} githublink={project.githublink} desc={project.desc} />)
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
                            <Box py={1} style={{ borderRadius: 100 }} className="bg-second-color center-content">
                                <a style={{ display: "flex" }} target="_blank" rel="noreferrer" href="https://www.behance.net/oreolnoumodong">
                                    <span style={{ paddingRight: "5px" }} className="center-content">
                                        <img style={{ width: "20px", height: "20px" }} src={behance} alt="behance icon" />
                                    </span>
                                    <span className="center-content text-color fontWeight400 fontSize16"> Click to view my graphic design works
                                    </span>
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
                        <Stack direction="row" spacing={1}>
                            <Link onClick={() => setIsWeb(true)} py={0.1} px={1} style={{ borderRadius: 100, cursor: "pointer", textDecoration: "none" }} className={`${isWeb ? "bg-green-color center-content" : "bg-second-color center-content"}`}>
                                <span className="text-color fontWeight500 fontSize14">Web/Desktop
                                </span>
                                <span className="center-content">
                                    <img style={{ width: "18px", height: "18px", paddingLeft: "3px" }} src={porfolioweb} alt="Web icon" />
                                </span>
                            </Link>
                            <Link onClick={() => setIsWeb(false)} py={0.1} px={1} style={{ borderRadius: 100, padding: "2px 10px 2px 10px", cursor: "pointer", textDecoration: "none" }} className={`${!isWeb ? "bg-green-color center-content" : "bg-second-color center-content"}`}>
                                <span className="text-color fontWeight500 fontSize14">Design
                                </span>
                                <span className="center-content">
                                    <img style={{ width: "18px", height: "18px", paddingLeft: "3px" }} src={porfoliographicdesign} alt="Grapic design icon" />
                                </span>
                            </Link>
                        </Stack>
                    </Grid>

                    {isWeb ? <Web /> : <Design />}

                </Grid>
            </Box>
        </>
    );
}

