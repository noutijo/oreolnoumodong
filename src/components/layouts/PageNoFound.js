import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import pageerror from "../../images/pageerror.svg";

import LetsWorkTogether from "./LetsWorkTogether";
import Footer from "./Footer";

export default function PageNoFound() {

    return (
        <>
            <Container maxWidth="sm">
                <Box mt={10} sx={{ flexGrow: 1 }}>
                    <Grid container spacing={1}>
                        <Grid my={5} item xs={12} className="center-content-left animate__animated animate__slideInUp">
                            <Grid container spacing={1}>
                                <Grid style={{ display: "block" }} item xs={12} className="center-content-left">
                                    <Box className="center-content">
                                        <span className="fontWeight300 text-color fontSize16">
                                            404 Page no found
                                        </span>
                                    </Box>
                                    <Box mt={3} className="center-content">
                                        <img style={{ with: "50px", height: "50px" }} src={pageerror} alt="twitter icon" />
                                    </Box>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid style={{ display: "block" }} my={5} item xs={12} className="center-content animate__animated animate__slideInUp">
                            <LetsWorkTogether />
                        </Grid>
                        <Grid my={5} item xs={12} >
                            <Footer />
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </>
    );
}

