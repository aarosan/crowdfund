import * as React from 'react';
import { Link } from 'react-router-dom';

import "../../src/App.css";

function SingleFund({ fund }) {

    const totalRaised = fund.donations.reduce((total, donation) => total + donation.amount, 0);

    return (
        <div className="actionBox">
            <div>
                <div className="actionTitle">
                    <h4>{fund.name}</h4>
                </div>
                <div className="actionCreator">
                    <h5>Created by: {fund.creator.username}</h5>
                </div>
                <div className="actionDesc">
                    <p>{fund.description}</p>
                </div>
            </div>
            <div className="actionRaised">
                <h4>Goal: {fund.goal}</h4>
                <h4>Amount Raised: {totalRaised} </h4>
            </div>
            <Link to={`/detail/${fund._id}`} style={{ textDecoration: 'none' }}>
                <button className="donateBtn">View Details or Donate</button>
            </Link>
        </div>
    );
}  

export default SingleFund;