import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import SectionIconItem from '../layouts/SectionIconItem';
import SkillItem from './SkillItem';
import skills from "../../images/skills.svg";

import reactjsredux from "../../images/reactjsredux.svg";
import javascript from "../../images/javascript.svg";
import nodejs from "../../images/nodejs.svg";
import java from "../../images/java.svg";
import figma from "../../images/figma.svg";
import photoshop from "../../images/photoshop.svg";
import adobexd from "../../images/adobexd.svg";
import adobeillustrator from "../../images/adobeillustrator.svg";
import aftereffects from "../../images/aftereffects.svg";

export default function FullSkills() {
    const skillsar = [{
        percent: "90%",
        icon: `${reactjsredux}`,
        text: "ReactJs + Redux"
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
        ,
    {
        percent: "97%",
        icon: `${adobexd}`,
        text: "Adobe XD"
    }
        ,
    {
        percent: "83%",
        icon: `${adobeillustrator}`,
        text: "Illustrator"
    }
        ,
    {
        percent: "61%",
        icon: `${aftereffects}`,
        text: "After Effects"
    }
    ];

    return (
        <>
            <Box mt={10} sx={{ flexGrow: 1 }}>
                <Grid container spacing={1}>
                    <Grid item xs={12} className="center-content-left">
                        <SectionIconItem className="fontWeight600 fontSize18" icon={skills} text={"Skills"} />
                    </Grid>
                    <Grid item xs={12} className="center-content-left animate__animated animate__slideInUp">
                        <Grid container spacing={1}>
                            {
                                skillsar.map((skill, id) => <SkillItem key={id} percent={skill.percent} icon={skill.icon} text={skill.text} />)
                            }
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}

