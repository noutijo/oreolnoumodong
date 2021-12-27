import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import twitter from "../images/twitter.svg";

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
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={10} >
                        <a className="fontWeight600" href="https://twitter.com/JuniorOreol" target="_blank">
                    <img style={{with:"22px",height:"16px"}} src={twitter} alt="twitter icon" /> @JuniorOreol
                    </a>
                    </Grid>
                    <Grid style={{ marginRight: "0px", paddingRight: "0px"}} item xs={2}>
                        <IconButton
                            size="small"
                            aria-label="close"
                            color="inherit"
                            onClick={handleClose}
                        >
                            <CloseIcon fontSize="small" />
                        </IconButton>
                    </Grid>
                    <Grid item xs={12}>
                        <p className="text-justify fontWeight300">I’m currently studying Back-end technologies ( MongoDB, Node.js and Express.js).</p>
                    </Grid>
                </Grid>
            </Box>
        </>
    );

    return (
        <>
            <Snackbar
                className="animate__animated animate__slideInDown"
                style={{ width: "320px"}}
                open={open}
                autoHideDuration={6000}
                message={message}
            />

        </>
    );
}
export default SnackBar;
