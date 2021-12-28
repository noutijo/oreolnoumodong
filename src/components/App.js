import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Me from "./Me";
import Menu from "./Menu";
import SnackBar from "./SnackBar";

function App() {

  return (
    <>

      <Container maxWidth="sm">
        <Menu />
        <Me />
        <SnackBar />
      </Container>
      
      
    </>
  );
}
export default App;
