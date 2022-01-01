import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import {Link} from 'react-router-dom';
import { styled } from '@mui/material/styles';

import Badge from '@mui/material/Badge';

import hire from "../../images/hire.svg";

export default function LetsWorkTogether() {
    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
            backgroundColor: '#44b700',
            color: '#44b700',
            boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
            '&::after': {
                position: 'absolute',
                top: 0,
                right: 0,
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
                transform: 'scale(2.5)',
                opacity: 0,
            },
        },
    }));

    return (
        <>
            <Box mt={2} sx={{ flexGrow: 1 }}>
                <Grid container spacing={1}>
                    <Grid style={{ display: "block" }} className="animate__animated animate__slideInUp" item xs={12}>
                        <Box className="center-content">
                            <span className="fontWeight700 text-color fontSize32">
                                Let's work together !
                            </span>
                        </Box>
                        <Box mt={0.5} className="center-content">
                            <span className="fontWeight300 text-color fontSize16">
                                I am available for freelance projects.
                            </span>
                        </Box>
                        <Box mt={2} className="center-content">
                            <StyledBadge
                                p={3}
                                overlap="circular"
                                anchorOrigin={{ vertical: 'top-end', horizontal: 'right' }}
                                variant="dot"
                            >
                                <Link to="/hire" style={{ borderRadius: 100, padding:"5px 15px 5px 15px" }} className="bg-green-color">
                                    <span className="text-color fontWeight400 fontSize16">Hire me  <img style={{ width: "13px", height: "13px" }} src={hire} alt="hire icon" /></span>
                                </Link>
                            </StyledBadge>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}

