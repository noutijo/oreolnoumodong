import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Link from '@mui/material/Link';

import Badge from '@mui/material/Badge';

import hire from "../images/hire.svg";

export default function Footer() {
    return (
        <>
            <Box mb={2} mt={10} sx={{ flexGrow: 1 }}>
                <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <span className="text-color" style={{ float: "left" }}>
                            <span>
                                MERN Stack solution ♥ by  
                            </span>
                                 
                            <Link href="https://twitter.com/JuniorOreol" target="_blank">
                                <span className="fontWeight600 text-color fontSize16"> @JuniorOreol </span>
                            </Link>
                        </span>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}

