import { Box, Typography, Card, CardMedia, CardContent, Divider } from '@mui/material';
import Grid from '@mui/material/Grid2';

const About = () => {
  return (
    <Box sx={{ p: { xs: 2, md: 6 },color: 'text.primary' }}>
      <Typography variant="h3" gutterBottom sx={{ textAlign: 'center', fontWeight: 'bold', color: 'primary.main' }}>
        About Us
      </Typography>
      <Typography variant="body1" sx={{ mb: 4, textAlign: 'center', maxWidth: '800px', margin: 'auto' }}>
        Welcome to our store! We are passionate about providing high-quality products that you can trust. Our collection includes a wide range of categories, offering something for everyone. We value quality, affordability, and customer satisfaction above all.
      </Typography>

      <Divider sx={{ my: 4 }} />

      <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', fontWeight: 'bold', color: 'secondary.main' }}>
        Our Mission
      </Typography>
      <Typography variant="body1" sx={{ mb: 4, textAlign: 'center', maxWidth: '800px', margin: 'auto' }}>
        Our mission is to bring you the best products at unbeatable prices while maintaining the highest standards of quality. We strive to ensure that every customer is satisfied, making your shopping experience enjoyable and easy.
      </Typography>

      <Divider sx={{ my: 4 }} />

      <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', fontWeight: 'bold', color: 'secondary.main' }}>
        Meet Our Team
      </Typography>
      <Grid container spacing={4} sx={{ mt: 2 }}>
        {teamMembers.map((member) => (
          <Grid key={member.id} size={{xs: 12, md: 4, sm:6}}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: 4,
                transition: 'transform 0.3s',
                '&:hover': {
                  transform: 'scale(1.05)',
                },
              }}
            >
              <CardMedia
                component="img"
                height="240"
                image={member.image}
                alt={member.name}
                sx={{ objectFit: 'contain' }}
              />
              <CardContent sx={{ textAlign: 'center' }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'primary.dark' }}>
                  {member.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                  {member.role}
                </Typography>
                <Typography variant="body2" sx={{ fontStyle: 'italic' }}>
                  {member.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

const teamMembers = [
  {
    id: 1,
    name: 'John Doe',
    role: 'Founder & CEO',
    image: 'https://picsum.photos/300/200',
    description: 'John is the visionary behind our brand, with over 10 years of experience in the industry.',
  },
  {
    id: 2,
    name: 'Jane Smith',
    role: 'Chief Marketing Officer',
    image: 'https://picsum.photos/300/300',
    description: 'Jane brings her creativity and marketing expertise to make sure our brand reaches everyone.',
  },
  {
    id: 3,
    name: 'Emily Johnson',
    role: 'Product Manager',
    image: 'https://picsum.photos/300/150',
    description: 'Emily ensures all of our products meet the highest standards before reaching our customers.',
  },
];

export default About;
