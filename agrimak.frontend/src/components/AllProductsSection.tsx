import { Box, Typography } from "@mui/material";

export default function AllProductsSection() {
  return (
    <>
      <Typography variant="h5" gutterBottom>
        All Products
      </Typography>
      <Box>
        {/* Dummy product list for now */}
        <ul>
          <li>Apples - $2.00</li>
          <li>Bananas - $1.50</li>
          <li>Tomatoes - $3.20</li>
        </ul>
      </Box>
    </>
  );
}
