import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';


import SectionIconItem from './SectionIconItem';
import skills from "../images/skills.svg";

export default function Skills() {

    return (
        <>
            <Box mt={1} sx={{ flexGrow: 1 }}>
                <Grid container spacing={1}>
                    <Grid item xs={12} className="center-content-left">
                        <SectionIconItem className="fontWeight600 fontSize18" icon={skills} text={"Skills"} />
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}

