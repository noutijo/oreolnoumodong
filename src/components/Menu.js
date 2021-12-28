import * as React from 'react';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';

import MenuItem from './MenuItem';
import Container from '@mui/material/Container';

import skills from "../images/skills.svg";
import porfolio from "../images/porfolio.svg";
import blog from "../images/blog.svg";

import profile from "../images/profile.PNG";

export default function Menu() {


    return (
        <Container sx={{ flexGrow: 1 }} className="position-menu" maxWidth="sm">
            <div className="bg-menu" style={{ height: "50px", padding: "5px 10px 5px 20px" }}>
                <div style={{ float: "left" }} className="center-content">
                    <Stack className="center-content circle100 bg-gradient" sx={{ width: 40, height: 40 }} direction="row" spacing={2}>
                        <Avatar sx={{ width: 35, height: 35 }} alt="Oreol Noumodong" src={profile} />
                    </Stack>
                </div>
                <div style={{ float: "right" }} >
                    <div className="center-content-left" style={{ height: "40px" }} >
                        <MenuItem icon={skills} text={"Skills"} />
                        <MenuItem icon={porfolio} text={"Projets"} />
                        <MenuItem icon={blog} text={"Blog"} />
                    </div>
                </div>
            </div>
        </Container >
    );
}

