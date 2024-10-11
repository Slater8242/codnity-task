import { useEffect, useState } from 'react';
import { Box, Typography,  Card, CardMedia, CardContent, CardActions, Button, Rating, CircularProgress } from '@mui/material';
import Grid from "@mui/material/Grid2"

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
        .then((res) => res.json())
        .then((data) => {
          setProducts(data);
          setLoading(false);
        })
        .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
        <CircularProgress />
      </Box>
    );
  }

  const noProducts = 
    <Box sx={{ textAlign: 'center', mt: 5 }}>
      <Typography variant="h6">No products available</Typography>
    </Box>

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Our Products
      </Typography>
      {products.length == 0 ? 
        noProducts 
        :
        <Grid container spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} size={{xs: 12, md: 4, sm:6}}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardMedia
                component="img"
                height="200"
                image={product.image}
                alt={product.title}
                sx={{ objectFit: 'contain'}}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h6" sx={{ minHeight: 60 }}>
                  {product.title.length > 50 ? `${product.title.substring(0, 47)}...` : product.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ minHeight: 80 }}>
                  {product.description.length > 100 ? `${product.description.substring(0, 97)}...` : product.description}
                </Typography>
                <Typography variant="h6" color="primary">
                  ${product.price}
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
                <Box>
                  <Typography variant="body2" color="text.secondary">
                    Category: {product.category}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Rating value={product.rating.rate} readOnly precision={0.1} />
                    <Typography variant="body2" sx={{ ml: 1 }}>
                      ({product.rating.count} reviews)
                    </Typography>
                  </Box>
                </Box>
                <Button size="small" color="primary">
                  View Details
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      }
    </Box>
  );
};

export default Products;
