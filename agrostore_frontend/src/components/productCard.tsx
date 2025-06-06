import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import type { Product } from "../models/iproduc";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Card sx={{ maxWidth: 345, margin: 2 }}>
      <CardMedia
        component="img"
        height="180"
        image={product.image}
        alt={product.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.description}
        </Typography>
        <Typography variant="subtitle1" color="primary" sx={{ mt: 1 }}>
          ${product.price}
        </Typography>
      </CardContent>
    </Card>
  );
}