import { useState } from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import LoadingButton from '@mui/lab/LoadingButton';

import Footer from "../layouts/Footer";
import LetsWorkTogether from "../layouts/LetsWorkTogether";

export default function Subscribe() {
    const [loading, setLoading] = useState(false);

    const [success, setSuccess] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");

    function handleLoadingClick() {
        setLoading(true);
    }

    const submitHandler = async () => {

        setEmailError("");
        setSuccess("");

        try {
            const res = await fetch("https://oreolnoumodong-server.herokuapp.com/subscriber", {
                method: "POST",
                credentials: "include",
                body: JSON.stringify({ email }),
                headers: { "Content-Type": "application/json" },
            });

            const data = await res.json();
            console.log(data);
            if (data.errors) {
                setEmailError(data.errors.email);
            }
            if (data.subscriber) {
                setSuccess("You have succesfully subscribe with you email address " + " " + `${email}`);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const ColorButton = styled(Button)(({ theme }) => ({
        color: "white",
        backgroundColor: "#18967F",
        borderRadius: 100,
        '&:hover': {
            backgroundColor: "#128570",
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
                            <Grid item xs={12}>
                                <Box mt={1} className="fontWeight600 text-color fontSize16">
                                    <div style={{ color: "red" }}>
                                        {emailError}
                                    </div>
                                    <div className="green-color fontWeight600">
                                        {success}
                                    </div>
                                </Box>
                            </Grid>
                            <Grid item xs={12}>
                                <Box mt={2} >
                                    <Box >
                                        <input onChange={(e) => {
                                            setEmail(e.target.value);
                                            setEmailError("");
                                            setSuccess("");
                                        }} value={email} type="email" placeholder="Email Address" />
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item xs={12}>
                                <Box mt={3} >
                                    <ColorButton onClick={(e) => submitHandler()} variant="contained">Subscribe</ColorButton>
                                    <LoadingButton
                                        onClick={handleLoadingClick}
                                        loading={loading}
                                        loadingIndicator="Loading..."
                                        variant="outlined"
                                    >
                                        Fetch data
                                    </LoadingButton>
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

