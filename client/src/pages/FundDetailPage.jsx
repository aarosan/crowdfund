import React from 'react';

import "../../src/App.css";

function FundDetail () {
    return (
    <>
    <div className="detailCard">
        <h1 className="detailHeader">A Call To Action!</h1>
        <div className="detailInfo">
            <div className="comingSoonCard">
                <p className="comingSoonText">Image Upload<br></br>Coming Soon</p>
            </div>
            <div className="actionInfo">
                <div className="detailTitle">
                    <h4>Title:</h4>
                </div>
                <div className="description">
                    <p>Description:</p>
                </div>
                <div className="amountDonated">
                    <h4>Amount Dontated:</h4>
                </div>
            </div>
        </div>
        <div className="donationDetail">
            <h4 className="donationHeader">Donations Made</h4>
            <div>
                <div className="donationGiven">
                    <h4>Given By:</h4>
                    <h4>Amount:</h4>
                </div>
            </div>
        </div>

    </div>
    </>
    );
}

export default FundDetail;
