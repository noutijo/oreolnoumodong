import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Me from "./Me";
import Menu from "./Menu";
import SnackBar from "./SnackBar";
import Skills from "./Skills";
import Services from "./Services";
import Projects from "./Projects";
import LetsWorkTogether from "./LetsWorkTogether";
import Footer from "./Footer";

function App() {

  return ( 
    <div className="center-content">

      <Menu />
      <Container maxWidth="sm">
        <Me />
        <Skills />
        <Services />
        <Projects />
        <LetsWorkTogether />
        <Footer />

      </Container>
      <SnackBar />
    </div>
  );
}
export default App;
