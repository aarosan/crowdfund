import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import { NavLink, Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import Logo from "../components/styles/assets/villageLogo.png"

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

import "../components/styles/HomePage.css";
import '../components/styles/Navbar.css'

function Home () {
    return (
    <>
    <nav className="navbar">
      <ul>
        <li><Link to="/search" style={{ textDecoration: 'none' }} smooth>Search<i class="fa-solid fa-magnifying-glass"></i></Link></li>
        <li><Link to="/how-it-works" style={{ textDecoration: 'none' }} smooth>How It Works</Link></li>
        <Link to={'/'}><img src={ Logo } /></Link>
        <li><Link to="/join" style={{ textDecoration: 'none' }} smooth>Join The Village</Link></li>
        <li><Link to="/signIn" style={{ textDecoration: 'none' }} smooth>Sign In</Link></li>
      </ul>
    </nav>
    <h1 className="title">It's A Community<br></br>Call To Action</h1>
        <div className="joinBtn">
            <Button variant="contained" onClick={() => {alert('clicked')}}>Join the Village</Button>
        </div>
        <div className="homeCard">
            <div className="grid">
                <h1 className="titleAction">Recent Calls To Action</h1>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid md={8} md={12}>
                            <Item> Photo</Item>
                            <Item>Title</Item>
                            <Item>Money Raised</Item>
                        </Grid>
                        <Grid xs={8} md={12}>
                            <Item>Photo</Item>
                            <Item>Title</Item>
                            <Item>Money Raised</Item>
                        </Grid>
                        <Grid xs={8} md={12}>
                            <Item>Photo</Item>
                            <Item>Title</Item>
                            <Item>Money Raised</Item>
                        </Grid>
                        <Grid xs={8} md={12}>
                            <Item>Photo</Item>
                            <Item>Title</Item>
                            <Item>Money Raised</Item>
                        </Grid>
                    </Grid>
                </Box>
            </div>
        </div>
    </>
    );
}

export default Home;