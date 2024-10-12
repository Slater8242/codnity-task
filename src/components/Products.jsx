import { useEffect } from 'react';
import { Box, Typography,  Card, CardMedia, CardContent, CardActions, Button, Rating, CircularProgress, Tooltip } from '@mui/material';
import Grid from "@mui/material/Grid2"
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../features/products/productsSlice';

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);
  const productStatus = useSelector((state) => state.products.status);
  const error = useSelector((state) => state.products.error);

  useEffect(() => {
    if (productStatus === 'idle') {
      dispatch(fetchProducts());
    }
  }, [productStatus, dispatch]);

  if (productStatus === 'loading') {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
        <CircularProgress />
      </Box>
    );
  }

  if (productStatus === 'failed') {
    return (
      <Box sx={{ textAlign: 'center', mt: 5 }}>
        <Typography variant="h6">No products available</Typography>
      </Box>
    )
  } 

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h3" gutterBottom sx={{ textAlign: 'center', fontWeight: 'bold', color: 'primary.main' }}>
        Our Products
      </Typography>
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
                <Tooltip title={product.title.length > 47 ? product.title : null} enterNextDelay={500} leaveDelay={200}>
                  <Typography gutterBottom variant="h6" sx={{ minHeight: 60 }}>
                    {product.title.length > 50 ? `${product.title.substring(0, 47)}...` : product.title}
                  </Typography>
                </Tooltip>
                <Tooltip title={product.description.length > 97 ? product.description : null} enterNextDelay={500} leaveDelay={200}>
                  <Typography variant="body2" color="text.secondary" sx={{ minHeight: 80 }}>
                    {product.description.length > 100 ? `${product.description.substring(0, 97)}...` : product.description}
                  </Typography>
                </Tooltip>
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
                    <Rating value={product.rating.rate} readOnly precision={0.1} size="small"/>
                    <Typography variant="body2" sx={{ ml: 1 }}>
                      ({product.rating.count} reviews)
                    </Typography>
                  </Box>
                </Box>
                <Button
                  size="small"
                  component={Link}
                  to={`/product/${product.id}`}
                  // variant="contained"
                  color="primary"
                >
                  View Details
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Products;
