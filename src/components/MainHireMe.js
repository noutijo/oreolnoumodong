import * as React from 'react';
import Container from '@mui/material/Container';
import FullBlog from "./FullBlog";
import LetsWorkTogether from "./LetsWorkTogether";
import Footer from "./Footer";

export default function MainHireMe() {

    return (
        <>
            <Container maxWidth="sm">
                <FullBlog />
                <LetsWorkTogether />
                <Footer />
            </Container>
        </>
    );
}

