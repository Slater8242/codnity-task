import { useState, useEffect } from 'react';
import { Box, Typography, Button, Card, CardMedia, CardContent, CircularProgress, Rating } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
        setProduct(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching product details:', error);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
        <CircularProgress />
      </Box>
    );
  }

  if (!product) {
    return (
      <Typography 
        variant="h1"
        sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh'}}
      >Product not found.</Typography>
    )
  }

  return (
    <Box sx={{ p: { xs: 2, md: 6 } }}>
      <Button onClick={() => navigate(-1)} variant="contained" color="secondary" sx={{ mb: 4 }}>
        Back to Products
      </Button>
      <Card sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>
        <CardMedia
          component="img"
          image={product.image}
          alt={product.title}
          sx={{ width: { xs: '100%', md: '400px' }, height: 'auto', objectFit: 'contain' }}
        />
        <CardContent>
          <Typography variant="h4" gutterBottom>
            {product.title}
          </Typography>
          <Typography variant="body1" gutterBottom>
            {product.description}
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: 'bold', mt: 2 }}>
            Price: ${product.price}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Category: {product.category}
          </Typography>
          <Typography variant="body2" sx={{ mt: 2, display: 'flex', alignItems: 'center'}}>
            <strong>Rating:</strong> <Rating value={product.rating.rate} readOnly precision={0.1} size="small"/> ({product.rating.count} reviews)
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ProductDetails;
