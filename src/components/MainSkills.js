import * as React from 'react';
import Container from '@mui/material/Container';
import FullSkills from "./FullSkills";
import LetsWorkTogether from "./LetsWorkTogether";
import Footer from "./Footer";

export default function MainSkills() {

    return (
        <>
            <Container maxWidth="sm">
                <FullSkills />
                <LetsWorkTogether />
                <Footer />
            </Container>
        </>
    );
}

