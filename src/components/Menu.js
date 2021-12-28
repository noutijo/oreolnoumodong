import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';

import MenuItem from './MenuItem';
import Container from '@mui/material/Container';

import skills from "../images/skills.svg";
import porfolio from "../images/porfolio.svg";
import blog from "../images/blog.svg";

import hire from "../images/hire.svg";
import profile from "../images/profile.PNG";

export default function Menu() {


    return (
        <div style={{padding:"1px 2px 4px 6px"}} className="bg-menu">
            <Box mt={1} sx={{ flexGrow: 1 }} >
                <Grid container>
                    <Grid item xs={2} className="center-content" >
                        <Stack className="center-content circle100 bg-gradient" sx={{ width: 45, height: 45 }} direction="row" spacing={2}>
                            <Avatar mr={50} sx={{ width: 40, height: 40 }} alt="Oreol Noumodong" src={profile} />
                        </Stack>
                    </Grid>
                    <Grid item xs={10} style={{ display: "inherit", paddingLeft: "0px" }} className="center-content-right">
                        <MenuItem icon={skills} text={"Skills"} />
                        <MenuItem icon={porfolio} text={"Projets"} />
                        <MenuItem icon={blog} text={"Blog"} />
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
}

