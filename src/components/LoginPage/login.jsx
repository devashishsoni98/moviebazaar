import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import GoogleButton from "react-google-button";
import { UserAuth } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import './login.css';
import { easeInOut, motion } from "framer-motion";


export default function SignIn() {

  const {googleSignIn, user} = UserAuth ();
  const navigate = useNavigate()

    const handleGoogleSignIn = async () => {
      try {
        await googleSignIn()
      } catch (error){
        console.log(error)
      }
    };  

    useEffect(() => {
      if (user != null){
        navigate('/')
      }
    },[user])

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
  };

  return (
    <>
    <motion.div 
    initial={{ y: 25, opacity:0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.75, ease: easeInOut }}
    className="cont">
    <div className="g-div">
    <GoogleButton onClick={handleGoogleSignIn}/>
    </div>
    <div className="divider">
      <div className="line"></div>
      <div className="text">or continue with email</div>
      <div className="line"></div>
    </div>
    <Container component="main" maxWidth="sm" className="sign">
      <Box
        sx={{
          boxShadow: 3,
          borderRadius: 2,
          px: 4,
          py: 6,
          marginTop: 5,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Sign in to Movie Bazaar
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }} style={{zIndex:"0"}}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          {/* <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          /> */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In 
          </Button>
        </Box>
      </Box>
    </Container>
    </motion.div>
    </>
  );
}