import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Badge from '@mui/material/Badge';

import profile from "../images/profile.PNG";

function Me() {
    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
            backgroundColor: '#44b700',
            color: '#44b700',
            boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
            '&::after': {
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                animation: 'ripple 1.2s infinite ease-in-out',
                border: '1px solid currentColor',
                content: '""',
            },
        },
        '@keyframes ripple': {
            '0%': {
                transform: 'scale(.8)',
                opacity: 1,
            },
            '100%': {
                transform: 'scale(2.4)',
                opacity: 0,
            },
        },
    }));


    return (
        <>
            <Box mt={20} sx={{ flexGrow: 1 }}>
                <Grid container spacing={1}>
                    <Grid item xs={3} >
                        <Stack className="center-content circle100 bg-gradient" sx={{ width: 80, height: 80 }} direction="row" spacing={2}>
                            <StyledBadge
                                p={3}
                                overlap="circular"
                                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                                variant="dot"
                            >
                                <Avatar sx={{ width: 70, height: 70 }} alt="Oreol Noumodong" src={profile} />
                            </StyledBadge>

                        </Stack>
                    </Grid>
                    <Grid item xs={9}>
                        Two
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}
export default Me;
