import { Box, Typography, TextField, Button, Paper } from '@mui/material';
import Grid from '@mui/material/Grid2';

const Contact = () => {
  return (
    <Box sx={{ p: { xs: 2, md: 6 }, color: 'text.primary' }}>
      <Typography variant="h3" gutterBottom sx={{ textAlign: 'center', fontWeight: 'bold', color: 'primary.main' }}>
        Contact Us
      </Typography>
      <Typography variant="body1" sx={{ mb: 4, textAlign: 'center', maxWidth: '800px', margin: 'auto' }}>
        If you have any questions, feel free to reach out. Our team is always here to assist you!
      </Typography>

      <Grid container spacing={4} sx={{ mt: 4 }}>
        <Grid item size={{xs:12, md:6}}>
          <Paper elevation={4} sx={{ p: 3}}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', color: 'secondary.main' }}>
              Our Contact Information
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              <strong>Address:</strong> Brivibas bulvaris 1, Riga, Latvia
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              <strong>Phone:</strong> +371 123 4567
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              <strong>Email:</strong> info@ourstore.com
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              We are available Monday to Friday, 9:00 AM to 6:00 PM.
            </Typography>
          </Paper>
        </Grid>

        <Grid item size={{xs:12, md:6}}>
          <Paper elevation={4} sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', color: 'secondary.main' }}>
              Send Us a Message
            </Typography>
            <form noValidate autoComplete="off">
              <Box sx={{ mb: 3 }}>
                <TextField
                  fullWidth
                  label="Your Name"
                  variant="outlined"
                  required
                  sx={{ mb: 2 }}
                />
                <TextField
                  fullWidth
                  label="Your Email"
                  type="email"
                  variant="outlined"
                  required
                  sx={{ mb: 2 }}
                />
                <TextField
                  fullWidth
                  label="Your Message"
                  variant="outlined"
                  multiline
                  rows={4}
                  required
                />
              </Box>
              <Button variant="contained" color="primary" type="submit" fullWidth>
                Send Message
              </Button>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contact;