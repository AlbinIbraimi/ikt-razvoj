import { Box, Typography } from "@mui/material";

export default function AboutPage() {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h5">About AgroCulture Store</Typography>
      <Typography sx={{ mt: 2 }}>
        This is a demo page to be extended with more details later.
      </Typography>
    </Box>
  );
}