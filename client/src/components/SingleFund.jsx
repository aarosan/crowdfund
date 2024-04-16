import * as React from 'react';
import { Link } from 'react-router-dom';

function SingleFund({ fund }) {

    const totalRaised = fund.donations.reduce((total, donation) => total + donation.amount, 0);

    return (
        <div className="actionBox">
            <div className="actionTitle">
                <h4>Title:{fund.name}</h4>
                <h5>Created by: {fund.creator.username}</h5>
                <p>{fund.description}</p>
            </div>
            <div className="actionRaised">
                <h4>Goal: {fund.goal}</h4>
                <h4>Amount Raised: {totalRaised} </h4>
            </div>
            <Link to={`/detail/${fund._id}`}>
                <button>View Details or Donate</button>
            </Link>
        </div>
    );
}  

export default SingleFund;