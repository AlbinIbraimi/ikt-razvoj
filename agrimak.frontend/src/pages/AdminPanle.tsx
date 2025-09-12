import React, { useState } from "react";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  TextField,
  Button,
  Typography,
} from "@mui/material";
import { Product, Category } from "../types";

const drawerWidth = 240;

export default function AdminPanel() {
  const [product, setProduct] = useState<Product>({
    id: 0,
    title: "",
    description: "",
    image: "",
    price: 0,
    category: Category.AllProducts,
    unit: "",
    stock: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProduct((prev) => ({
      ...prev,
      [name]: name === "price" || name === "stock" ? Number(value) : value,
    }));
  };

  const handleSubmit = () => {
    console.log("Submitting product:", product);
    // TODO: API call here
  };

  return (
    <Box sx={{ display: "flex", height: "100%" }}>
      {/* Sidebar */}
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          position: "relative", // << important
          [`& .MuiDrawer-paper`]: {
            position: "relative", // << keep it inside flexbox
            width: drawerWidth,
            boxSizing: "border-box",
            height: "100%", // fills only the parent flexbox, not full window
          },
        }}
      >
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Create Product" />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>

      {/* Content */}
      <Box component="main" sx={{ flexGrow: 1, p: 3, overflowY: "auto" }}>
        <Typography variant="h5" gutterBottom>
          Create Product
        </Typography>

        <Box
          component="form"
          sx={{ display: "grid", gap: 2, maxWidth: 500 }}
          noValidate
          autoComplete="off"
        >
          <TextField label="Title" name="title" value={product.title} onChange={handleChange} />
          <TextField
            label="Description"
            name="description"
            value={product.description}
            onChange={handleChange}
            multiline
            rows={3}
          />
          <TextField label="Image URL" name="image" value={product.image} onChange={handleChange} />
          <TextField
            label="Price"
            name="price"
            type="number"
            value={product.price}
            onChange={handleChange}
          />
          <TextField label="Category" name="category" value={product.category} onChange={handleChange} />
          <TextField label="Unit" name="unit" value={product.unit} onChange={handleChange} />
          <TextField
            label="Stock"
            name="stock"
            type="number"
            value={product.stock}
            onChange={handleChange}
          />

          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Create
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
