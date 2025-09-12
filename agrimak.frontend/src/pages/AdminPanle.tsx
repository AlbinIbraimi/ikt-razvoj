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
import { AppStore } from "../utils/store";

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

  // Improved input change handler for price and stock
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      if (name === "price") {
        // Remove leading zeros, allow decimals, store as number (0 if empty)
        let val = value.replace(/^0+(?=\d)/, "");
        setProduct((prev) => ({ ...prev, price: val === "" ? 0 : Number(val) }));
      } else if (name === "stock") {
        // Remove leading zeros, only integers, store as number (0 if empty)
        let val = value.replace(/^0+(?=\d)/, "");
        setProduct((prev) => ({ ...prev, stock: val === "" ? 0 : Number(val) }));
      } else if (name === "category") {
        setProduct((prev) => ({ ...prev, category: Number(value) as Category }));
      } else {
        setProduct((prev) => ({ ...prev, [name]: value }));
      }
  };

  // Submit handler: log only selected values as JSON
  const handleSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const { id, ...productData } = product; // exclude id for creation
    // var data = JSON.stringify(productData, null, 2)
    // console.log("Product JSON:", data);
    // TODO: API call here
    AppStore.createProduct(productData);
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
              onSubmit={handleSubmit}
            >
              <TextField
                label="Title"
                name="title"
                value={product.title}
                onChange={handleChange}
                required
              />
              <TextField
                label="Description"
                name="description"
                value={product.description}
                onChange={handleChange}
                multiline
                rows={3}
                required
              />
              <TextField
                label="Image URL"
                name="image"
                value={product.image}
                onChange={handleChange}
                required
              />
              <TextField
                  label="Price"
                  name="price"
                  type="text"
                  value={product.price === 0 ? "" : String(product.price)}
                  onChange={handleChange}
                  inputProps={{ inputMode: "decimal", pattern: "^\\d*(\\.\\d{0,2})?$", min: 0, step: 0.01 }}
                  required
              />
              <TextField
                label="Category"
                name="category"
                select
                value={product.category}
                onChange={handleChange}
                SelectProps={{ native: true }}
                required
              >
                {Object.entries(Category).filter(([key, val]) => typeof val === "number").map(([key, val]) => (
                  <option key={val} value={val}>{key}</option>
                ))}
              </TextField>
              <TextField
                label="Unit"
                name="unit"
                select
                value={product.unit}
                onChange={handleChange}
                SelectProps={{ native: true }}
                required
              >
                <option value=" ">Select unit</option>
                <option value="kg">kg</option>
                <option value="g">g</option>
                <option value="mg">mg</option>
                <option value="L">L</option>
                <option value="ml">ml</option>
                <option value="pcs">pcs</option>
                <option value="box">box</option>
                <option value="other">other</option>
              </TextField>
              <TextField
                  label="Stock"
                  name="stock"
                  type="text"
                  value={product.stock === 0 ? "" : String(product.stock)}
                  onChange={handleChange}
                  inputProps={{ inputMode: "numeric", pattern: "^\\d*$", min: 0, step: 1 }}
                  required
              />

              <Button
                variant="contained"
                color="primary"
                type="submit"
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
