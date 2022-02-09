import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import {Link} from 'react-router-dom';

import SectionIconItem from '../layouts/SectionIconItem';
import SkillItem from './SkillItem';
import skills from "../../images/skills.svg";

import reactjsredux from "../../images/reactjsredux.svg";
import javascript from "../../images/javascript.svg";
import nodejs from "../../images/nodejs.svg";
import java from "../../images/java.svg";
import figma from "../../images/figma.svg";
import photoshop from "../../images/photoshop.svg";
import thinking from "../../images/thinking.svg";
import vuejs from "../../images/vuejs.svg";

export default function Skills() {
    const skillsar = [{
        percent: "90%",
        icon: `${reactjsredux}`,
        text: "ReactJs + Redux"
    }
        ,
    {
        percent: "53%",
        icon: `${vuejs}`,
        text: "Vue.js"
    }
        ,
    {
        percent: "81%",
        icon: `${javascript}`,
        text: "Javascript"
    }
        ,
    {
        percent: "57%",
        icon: `${nodejs}`,
        text: "Node.js"
    }
        ,
    {
        percent: "62%",
        icon: `${java}`,
        text: "Java + javafx"
    }
        ,
    {
        percent: "96%",
        icon: `${thinking}`,
        text: "Design Thinking"
    }
        ,
    {
        percent: "98%",
        icon: `${figma}`,
        text: "Figma"
    }
        ,
    {
        percent: "87%",
        icon: `${photoshop}`,
        text: "Photoshop"
    }
    ];

    return (
        <>
            <Box mt={1} sx={{ flexGrow: 1 }}>
                <Grid container spacing={1}>
                    <Grid item xs={12} className="center-content-left">
                        <SectionIconItem className="fontWeight600 fontSize18" icon={skills} text={"Skills"} />
                    </Grid>
                    <Grid item xs={12} className="center-content-left animate__animated animate__slideInUp">
                        <Grid container spacing={1}>
                            {
                                skillsar.map((skill, id) => <SkillItem key={id} percent={skill.percent} icon={skill.icon} text={skill.text} />)
                            }
                            <Grid item xs={12}>
                                <Link to="/skills" style={{ float: "right" }} className="margin-content-percent"><span className="fontWeight400 white-color">See more</span> </Link>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}

