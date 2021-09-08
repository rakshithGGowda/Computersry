import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton, Mode } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';

import useStyles from './styles';

const Product = ({ product, onAddToCart, openDetails }) => {
  const classes = useStyles();

  const handleAddToCart = () => onAddToCart(product.id, 1);
  const handleopenDetails = () => openDetails(product);

  return (
    <Card className={classes.root} onClick={handleopenDetails}>
      <CardMedia className={classes.media} image={product.media.source} title={product.name} />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            {product.name}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            ${product.price.formatted}
          </Typography>
        </div>
        <Typography dangerouslySetInnerHTML={{ __html: product.description }} variant="body2" color="textSecondary" component="p" />
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
        <IconButton aria-label="Add to Cart" onClick={handleAddToCart}>
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Product;

