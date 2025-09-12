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
import { Height } from "@mui/icons-material";

const drawerWidth = 240;

export default function AdminPanel() {
  const [selectedView, setSelectedView] = useState<"create" | "list">("create");

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
    <Box sx={{ display: "flex", flex: 1, minHeight: 0 }}>
      {/* Sidebar */}
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
            position: "relative",
            backgroundColor: "#f5f5f5", // gray background
          },
        }}
      >
        <List>
          <ListItem disablePadding>
            <ListItemButton
              selected={selectedView === "create"}
              onClick={() => setSelectedView("create")}
            >
              <ListItemText primary="Create Product" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              selected={selectedView === "list"}
              onClick={() => setSelectedView("list")}
            >
              <ListItemText primary="All Products" />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>

      {/* Content */}
      <Box component="main" sx={{ flexGrow: 1, p: 3, overflowY: "auto" }}>
        {selectedView === "create" && (
          <>
            <Typography variant="h5" gutterBottom>
              Create Product
            </Typography>

            <Box
              component="form"
              sx={{ display: "grid", gap: 2, maxWidth: 500 }}
              noValidate
              autoComplete="off"
            >
              <TextField
                label="Title"
                name="title"
                value={product.title}
                onChange={handleChange}
              />
              <TextField
                label="Description"
                name="description"
                value={product.description}
                onChange={handleChange}
                multiline
                rows={3}
              />
              <TextField
                label="Image URL"
                name="image"
                value={product.image}
                onChange={handleChange}
              />
              <TextField
                label="Price"
                name="price"
                type="number"
                value={product.price}
                onChange={handleChange}
              />
              <TextField
                label="Category"
                name="category"
                value={product.category}
                onChange={handleChange}
              />
              <TextField
                label="Unit"
                name="unit"
                value={product.unit}
                onChange={handleChange}
              />
              <TextField
                label="Stock"
                name="stock"
                type="number"
                value={product.stock}
                onChange={handleChange}
              />

              <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit}
              >
                Create
              </Button>
            </Box>
          </>
        )}

        {selectedView === "list" && (
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
        )}
      </Box>
    </Box>
  );
}
