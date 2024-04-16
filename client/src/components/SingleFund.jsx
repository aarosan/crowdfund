import * as React from 'react';

function SingleFund({ fund }) {
    return (
        <div className="actionBox">
            <div className="actionTitle">
                <h4>Title:{fund.name}</h4>
                <h2>Created by: {fund.creator.username}</h2>
                <p>{fund.description}</p>
            </div>
            <div className="actionRaised">
                <h4>Goal: {fund.goal}</h4>
                <h4>Amount Raised:</h4>
            </div>
            <button>Donate</button>
            <button>View Fund Details</button>
        </div>
    );
}  

export default SingleFund;