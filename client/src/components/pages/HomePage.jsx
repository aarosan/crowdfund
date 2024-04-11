import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

import "../styles/HomePage.css";

function Home () {
    return (
    <>
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