import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';

import SectionIconItem from './SectionIconItem';
import ServicesItem from './ServicesItem';
import porfolio from "../images/porfolio.svg";

import applicationweb from "../images/applicationweb.svg";
import applicationdesktop from "../images/applicationdesktop.svg";
import uiuxdesign from "../images/uiuxdesign.svg";

export default function Services() {
    const servicesar = [{
        icon: `${applicationweb}`,
        title: "Web Development",
        text: "Using Javascript, ReactJs, Webpack, Babel, Bootstrap, jQuery, HMTL5, CSS3, I can build your websites and web application user interfaces to look beautiful and responsive on all platforms."
    }
        ,
    {
        icon: `${applicationdesktop}`,
        title: "Desktop Application Dev",
        text: "My expertise in Java enables me to build desktop applications.For more low level desktop application requirements, I use Java's UI framework, JavaFX, to develop them."
    }
        ,
    {
        icon: `${uiuxdesign}`,
        title: "UI/UX Design",
        text: "I build and prototype mobile and web UI designs using Adobe XD, Adobe Photoshop, Adobe Illustrator and Figma. I also design logos and graphic visuals with Photoshop like flyers."
    }
    
    ];

    return (
        <>
            <Box mt={3} sx={{ flexGrow: 1 }}>
                <Grid container spacing={1}>
                    <Grid item xs={12} className="center-content-left">
                        <SectionIconItem className="fontWeight600 fontSize18" icon={porfolio} text={"Projets"} />
                    </Grid>
                    <Grid item xs={12} className="center-content-left animate__animated animate__slideInUp">
                        <Grid container spacing={1}>
                            {
                                servicesar.map((service, id) => <ServicesItem key={id} title={service.title} icon={service.icon} text={service.text} />)
                            }
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}

