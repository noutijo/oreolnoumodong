import Container from '@mui/material/Container';
import Me from "./home/Me";
import Skills from "./skills/Skills";
import Services from "./Services";
import SnackBar from "./home/SnackBar";
import Works from "./works/Works";
import LetsWorkTogether from "./layouts/LetsWorkTogether";
import Footer from "./layouts/Footer";

export default function Home() {

  return (
    <>
      <Container maxWidth="sm">
        <Me />
        <Skills />
        <Services />
        <Works />
        <LetsWorkTogether />
        <Footer />

      </Container>
      <SnackBar />
    </>
  );
}

