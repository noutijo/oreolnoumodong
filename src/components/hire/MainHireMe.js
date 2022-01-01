import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import Footer from "../layouts/Footer";
import upwork from "../../images/upwork.svg";
import email from "../../images/email.svg";

export default function MainHireMe() {

    return (
        <>
            <Container maxWidth="sm">
                <Box mt={15} sx={{ flexGrow: 1 }} className="animate__animated animate__slideInUp">
                    <Grid container spacing={1}>
                        <Grid style={{ display: "block" }} item xs={12}>
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
                        </Grid>
                        <Grid mt={2} item xs={12}>
                            <Grid container spacing={1}>
                                <Grid item mt={2} xs={12} lg={6}>
                                    <Box py={1} style={{ borderRadius: 100 }} className="bg-second-color center-content">
                                        <a style={{ display: "flex" }} target="_blank" href="https://www.upwork.com/freelancers/~01c3c132268e3d6e1c">
                                            <span className=" center-content text-color fontWeight500 fontSize20">Hire me on Upwork
                                            </span>
                                            <span className="center-content"><img style={{ width: "25px", height: "25px", paddingLeft: "5px" }} src={upwork} alt="upwork icon" />
                                            </span>
                                        </a>
                                    </Box>
                                </Grid>
                                <Grid item mt={2} xs={12} lg={6} >
                                    <Box py={1} style={{ borderRadius: 100 }} className="bg-second-color center-content">
                                        <a style={{ display: "flex" }} href="mailto:oreolnoumodong@gmail.com">
                                            <span className="center-content text-color fontWeight500 fontSize20">Email me directly
                                            </span>
                                            <span className="center-content"> <img style={{ width: "25px", height: "25px", paddingLeft: "5px" }} src={email} alt="email icon" />
                                            </span>
                                        </a>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
                <Footer />
            </Container>
        </>
    );
}

