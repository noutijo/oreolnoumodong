import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import noblog from "../../images/noblog.svg";



export default function Blog() {

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
                        </Grid>
                    </Grid>
        </>
    );
}
