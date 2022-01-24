import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';

import twitter from "../../images/twitter.svg";

function SnackBar() {
    const [open, setOpen] = React.useState(true);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };


    const message = (
        <>
            <Box style={{ width: "300px" }} sx={{ flexGrow: 1, bgcolor: "transparent" }}>
                <Grid  container spacing={2}>
                    <Grid sx={{ bgcolor:"transparent" }} item xs={10} >
                        <Link href="https://twitter.com/JuniorOreol" target="_blank">
                            <img style={{ with: "22px", height: "16px" }} src={twitter} alt="twitter icon" /> <span className="fontWeight600 white-color">@JuniorOreol</span>
                    </Link>
                    </Grid>
                    <Grid sx={{ bgcolor:"transparent" }} item xs={2}>
                        <IconButton
                            size="small"
                            aria-label="close"
                            color="inherit"
                            onClick={handleClose}
                        >
                            <CloseIcon fontSize="small" />
                        </IconButton>
                    </Grid>
                    <Grid sx={{ bgcolor:"transparent" }} item xs={12}>
                        <p className="text-justify fontWeight300">I am currently improving my knowledge on back-end technologies (MongoDB, Node.js and Express.js).</p>
                    </Grid>
                </Grid>
            </Box>
        </>
    );

    return (
        <>
            <Snackbar
                sx={{
                    '& .MuiPaper-root': {
                        bgcolor: 'rgba(41, 48, 65,0.5)',
                        backdropFilter: "blur(8px)"
                    } }}
                className="animate__animated animate__slideInDown bg-snackbar"
                open={open}
                autoHideDuration={6000}
                message={message}
            />

        </>
    );
}
export default SnackBar;
