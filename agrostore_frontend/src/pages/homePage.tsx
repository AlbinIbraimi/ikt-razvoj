import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { useEffect } from "react";
import { useProductStore } from "../utils/store";
import ProductCard from "../components/productCard";

const productsUrl = "https://example.com/api/products"; // ✅ Replace with real or mock API

export default function HomePage() {
  const products = useProductStore((state) => state.products);
  const setProducts = useProductStore((state) => state.setProducts);

  useEffect(() => {
    fetch(productsUrl)
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching products:", err));
  }, [setProducts]);

  return (
    <Container sx={{ py: 4 }}>
      <Grid container spacing={4} justifyContent="center">
        {products.map((product) => (
            <ProductCard product={product} />
        ))}
      </Grid>
    </Container>
  );
}
