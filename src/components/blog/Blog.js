import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

import { useNavigate } from "react-router-dom";

import noblog from "../../images/noblog.svg";

export default function Blog() {
    const ColorButton = styled(Button)(({ theme }) => ({
        color: "white",
        backgroundColor: "#4c5261",
        borderRadius: 100,
        '&:hover': {
            backgroundColor: "#293041",
        },
    }));

    const navigate  = useNavigate();

    return (
        <>
            <Grid my={5} item xs={12} className="center-content-left animate__animated animate__slideInUp">
                <Grid container spacing={1}>
                    <Grid style={{ display: "block" }} item xs={12} className="center-content-left">
                        <Box className="center-content">
                            <span className="fontWeight300 text-color fontSize16">
                                Still in development...
                            </span>
                        </Box>
                        <Box mt={3} className="center-content">
                            <img style={{ with: "50px", height: "50px" }} src={noblog} alt="twitter icon" />
                        </Box>
                    </Grid>
                    <Grid mt={3} item xs={12} className="">
                        <Box className="fontWeight300 text-color fontSize16">
                            <div>
                                Oops, It's not completely ready.
                            </div>
                            <div>
                                However, you can subscribe when blog will ready we'll send you a little notification !
                            </div>
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <Box mt={3} >
                            <ColorButton onClick={() => navigate("/subscribe")} variant="contained">Subscribe</ColorButton>
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
}

