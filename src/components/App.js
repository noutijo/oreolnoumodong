import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Me from "./Me";
import Skills from "./Skills";
import Menu from "./Menu";
import SnackBar from "./SnackBar";

function App() {

  return (
    <div className="center-content">

      <Menu />
      <Container maxWidth="sm">
        <Me />
        <Skills />

      </Container>
      <SnackBar />
    </div>
  );
}
export default App;
