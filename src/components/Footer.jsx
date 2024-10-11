import { Box, Container, Typography, IconButton } from '@mui/material';
import { Facebook, Twitter, Instagram } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'primary.main',
        color: 'white',
        py: 3,
        px: 2,
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
        <Typography variant="body1">
          © {new Date().getFullYear()} Riad Ashrafov. All rights reserved.
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
          <IconButton
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener"
            color="inherit"
          >
            <Facebook />
          </IconButton>
          <IconButton
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener"
            color="inherit"
          >
            <Twitter />
          </IconButton>
          <IconButton
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener"
            color="inherit"
          >
            <Instagram />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
