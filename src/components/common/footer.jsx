import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Box } from "@mui/material";
import "./footer.css"

export default function Footer() {
  return (
    <div>
    <Box style={{backgroundColor:"#0B4F6C", color:"#FBFBFF"}}
      component="footer"
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
        p: 2,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={33}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom style={{color:"#FBFBFF"}}>
              About Us
            </Typography>
            <Typography variant="body2" color="text.secondary" style={{color:"#FBFBFF"}}>
              Sample text here
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            {/* <Typography variant="h6" color="text.primary" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2" color="text.secondary">
              123 Main Street, Anytown, USA
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Email: info@example.com
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Phone: +1 234 567 8901
            </Typography> */}
            <Box mt={5}>
          <Typography variant="body2" color="text.secondary" align="center" style={{color:"#FBFBFF"}}>
            {"Copyright © "}
            <Link color="inherit" href="https://your-website.com/">
              Your Website
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom style={{color:"#FBFBFF"}}>
              Follow Us
            </Typography>
            <Link href="https://www.facebook.com/" color="inherit" target="_blank">
              <Facebook />
            </Link>
            <Link
              href="https://www.instagram.com/"
              color="inherit"
              target="_blank"
              sx={{ pl: 1, pr: 1 }}
            >
              <Instagram />
            </Link>
            <Link href="https://www.twitter.com/" color="inherit" target="_blank">
              <Twitter />
            </Link>
            
          </Grid>
          
        </Grid>
        
      </Container>
    </Box></div>
  );
}