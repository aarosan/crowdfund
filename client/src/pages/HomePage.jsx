import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import { NavLink, Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import Logo from "../../public/villageLogo.png";


import "../../src/App.css";

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
                <div className="actionCardHome">
                    <div className="actionBox">
                        <div className="actionImg">
                            <div>Image</div>
                        </div>
                        <div className="actionTitle">
                            <h4>Title:</h4>
                        </div>
                        <div className="actionRaised">
                            <h4>Amount Raised:</h4>
                        </div>
                    </div>
                    <div className="actionBox">
                        <div className="actionImg">
                            <div>Image</div>
                        </div>
                        <div className="actionTitle">
                            <h4>Title:</h4>
                        </div>
                        <div className="actionRaised">
                            <h4>Amount Raised:</h4>
                        </div>
                    </div>
                    <div className="actionBox">
                        <div className="actionImg">
                            <div>Image</div>
                        </div>
                        <div className="actionTitle">
                            <h4>Title:</h4>
                        </div>
                        <div className="actionRaised">
                            <h4>Amount Raised:</h4>
                        </div>
                    </div>
                    <div className="actionBox">
                        <div className="actionImg">
                            <div>Image</div>
                        </div>
                        <div className="actionTitle">
                            <h4>Title:</h4>
                        </div>
                        <div className="actionRaised">
                            <h4>Amount Raised:</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    );
}

export default Home;

{/* <Box sx={{ flexGrow: 1 }}>
<Grid container spacing={2}>
    <Grid xs ={8} md={12}>
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
</Box> */}