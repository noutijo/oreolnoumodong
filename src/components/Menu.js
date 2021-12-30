import * as React from 'react';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';

import MenuItem from './MenuItem';
import Container from '@mui/material/Container';

import skills from "../images/skills.svg";
import porfolio from "../images/porfolio.svg";
import blog from "../images/blog.svg";

import profile from "../images/profile.PNG";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Menu() {
    return (
        <Container sx={{ flexGrow: 1 }} className="position-menu" maxWidth="sm">
            <div className="bg-menu" style={{ height: "50px", padding: "5px 10px 5px 20px" }}>
                <div style={{ float: "left" }} className="center-content">

                    <Link to="/">
                        <Stack className="center-content circle100 bg-gradient" sx={{ width: 40, height: 40 }} direction="row" spacing={2}>
                            <Avatar sx={{ width: 35, height: 35 }} alt="Oreol Noumodong" src={profile} />
                        </Stack>
                    </Link>

                </div>
                <div style={{ float: "right" }} >
                    <div className="center-content-left" style={{ height: "40px" }} >

                        <Link className="center-content" style={{ display: "fkex" }} to="/skills"><MenuItem icon={skills} text={"Skills"} /></Link>
                        <Link className="center-content" to="/projects"><MenuItem icon={porfolio} text={"Projets"} /></Link>
                        <Link className="center-content" to="/blog"><MenuItem icon={blog} text={"Blog"} /></Link>

                    </div>
                </div>
            </div>
        </Container >
    );
}

