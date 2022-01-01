import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';

import Footer from "../layouts/Footer";
import LetsWorkTogether from "../layouts/LetsWorkTogether";

export default function Subscribe() {

    const ColorButton = styled(Button)(({ theme }) => ({
        color: "white",
        backgroundColor: "#4c5261",
        borderRadius: 100,
        '&:hover': {
            backgroundColor: "#293041",
        },
    }));

    return (
        <>
            <Container maxWidth="sm">
                <Grid container spacing={1}>
                    <Grid my={5} item xs={12} className="center-content-left animate__animated animate__slideInUp">
                        <Grid container spacing={1}>

                            <Grid mt={10} item xs={12}>
                                <Box className="fontWeight300 text-color fontSize16">
                                    <div>
                                        Subscribe to be notified when Blog is released.
                                    </div>
                                </Box>
                            </Grid>
                            <Grid mt={3} item xs={12}>
                                <Box >
                                    <Box >
                                        <input type="email" placeholder="Email Address" />
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item xs={12}>
                                <Box mt={3} >
                                    <ColorButton variant="contained">Subscribe</ColorButton>
                                </Box>
                            </Grid>
                            <Grid mt={3} item xs={12} >
                                <LetsWorkTogether />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container spacing={1}>
                    <Grid item xs={12} >
                        <Footer />
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}

