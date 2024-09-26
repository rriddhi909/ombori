import React from 'react';
import { Container, CssBaseline, Box } from '@mui/material';

const Page404 = () => {
  return (
    <>
      <Container maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            mt: 20,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <div>Oops something went wrong</div>
        </Box>
      </Container>
    </>
  );
};

export default Page404;
