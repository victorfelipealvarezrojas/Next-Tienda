import { FC, useMemo, useState } from "react";
import NextLink from 'next/link';
import { Card, CardActionArea, CardMedia, Grid, Typography, Box, Link } from "@mui/material"
import { IProduct } from "../../interfaces/product";


interface Props {
  product: IProduct;
}

export const ProductCard: FC<Props> = ({ product }) => {

  const [isHovered, setIsHovered] = useState(false);

  const productImage = useMemo(() => {
    return isHovered
      ? `products/${product.images[1]}`
      : `products/${product.images[0]}`
  }, [isHovered, product.images]);

  return (
    <Grid
      key={product.slug}
      xs={6}
      sm={4}
      item
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card>
        <NextLink href="/product/slug" passHref prefetch={false} >
          <Link>
            <CardActionArea>
              <CardMedia
                component="img"
                className="fadeIn"
                image={productImage}
                alt={product.title}
                onLoad={() => console.log("loaded")} // cuando la imagen es cargada
              />
            </CardActionArea>
          </Link>
        </NextLink>
      </Card>
      <Box sx={{ mt: 1 }} className="fadeIn">
        <Typography fontWeight={700}>{product.title}</Typography>
        <Typography fontWeight={500}>${product.price}</Typography>
      </Box>
    </Grid >
  )
}
