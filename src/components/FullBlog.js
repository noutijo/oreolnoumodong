import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';

import SectionIconItem from './SectionIconItem';
import SkillItem from './SkillItem';
import blog from "../images/blog.svg";

import reactjsredux from "../images/reactjsredux.svg";

export default function FullBlog() {
    const skillsar = [{
        percent: "90%",
        icon: `${reactjsredux}`,
        text: "ReactJs + Redux"
    }
        
    ];

    return (
        <>
            <Box mt={10} sx={{ flexGrow: 1 }}>
                <Grid container spacing={1}>
                    <Grid item xs={12} className="center-content-left">
                        <SectionIconItem className="fontWeight600 fontSize18" icon={blog} text={"Blog"} />
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

