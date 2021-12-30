import * as React from 'react';
import Container from '@mui/material/Container';
import Me from "./Me";
import SnackBar from "./SnackBar";
import Skills from "./Skills";
import Services from "./Services";
import Projects from "./Projects";
import LetsWorkTogether from "./LetsWorkTogether";
import Footer from "./Footer";

export default function Home() {

  return (
    <>
      <Container maxWidth="sm">
        <Me />
        <Skills />
        <Services />
        <Projects />
        <LetsWorkTogether />
        <Footer />

      </Container>
      <SnackBar />
    </>
  );
}

