import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Me from "./Me";
import SnackBar from "./SnackBar";

function App() {

  return (
    <>

      <Container maxWidth="sm">
        <Me />
        <SnackBar />
      </Container>
    </>
  );
}
export default App;
