import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

export default function ConnexionError() {

    return (
        <>
            <Grid my={5} item xs={12} className="center-content-left animate__animated animate__slideInUp">
                <Grid container spacing={1}>
                    <Grid style={{ display: "block" }} item xs={12} >
                        <Box mt={3} className="center-content">
                            <p>
                                ERR: CONNEXION EROOR, check you connexion and try again
                            </p>
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
}

