import React from 'react';
import Logo from "../../public/villageLogo.png"
import { NavLink, Link } from 'react-router-dom';


import '../../src/App.css';
import '../../src/index.css';

function HowItWorks () {
    return (
    <>
    <div className="howCard">
        <h1 className="worksTitle">How It Works</h1>
        <div className="worksText">
          <p>Takes A Village is a trusted place to fundraise for the things that you care about.
            We have created tools to make it easy for donors to contribute to your fundraiser.
            Below we will walk you through step-by-step what is needed to start your first 
            <strong> Call To Action</strong>. Lets get started writing your story, sharing 
            your fundraiser and setting up bank transfers.
          </p>
        </div>
    </div>
    </>
    );
}

export default HowItWorks;