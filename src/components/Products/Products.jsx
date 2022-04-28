import React,{useState} from 'react';
import {Grid,Modal} from '@material-ui/core';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton, Mode } from '@material-ui/core';

import Product from './Product/Product';
import useStyles from './styles';

const Products = ({ products, onAddToCart }) => {
  const classes = useStyles();
  const [open, setopen] = useState(false)
  const [productOpened, setproductOpened] = useState({})
  
  const openDetails = (product) => {
    setopen(true)
    setproductOpened(product)
    console.log(productOpened)
  }

  const closeOverlay = () =>{
    setopen(false);
  }

  const Boody = (
      <dialog open>
        <Typography gutterBottom variant="h4" component="h2" >{productOpened.name}</Typography >
        <Typography dangerouslySetInnerHTML={{ __html: productOpened.description }} variant="body2" color="textSecondary" component="p" />
        <button onClick = {closeOverlay} >close</button>
        <Typography gutterBottom variant="body2" component="span">Sorry for inconvenience, Work yet to be completed</Typography>
      </dialog>
      )

  if (!products.length) return <p>Loading...</p>;

  return (
    <main className={classes.content}>
      <Modal open={open}>{Boody}</Modal>
      <div className={classes.toolbar} />
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
            <Product product={product} onAddToCart={onAddToCart} openDetails={openDetails} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;

