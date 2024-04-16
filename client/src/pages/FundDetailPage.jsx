import React from 'react';
import { useParams, Link } from 'react-router-dom';
import "../../src/App.css";
import { useQuery } from '@apollo/client';
import { GET_FUND_BY_ID } from '../utils/queries';

function FundDetail () {
    const { id } = useParams();
    const { loading, error, data } = useQuery(GET_FUND_BY_ID, {
        variables: { fundId: id },
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :{error.message}</p>;

    const { getFundById: fund } = data;

    if (!fund) return <p>No fund found</p>;

    const totalRaised = fund.donations.reduce((total, donation) => total + donation.amount, 0);

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
                    <h4>Title: {fund.name} </h4>
                </div>
                <div className="description">
                    <p>Description: {fund.description} </p>
                </div>
                <div className="amountDonated">
                    <h4>Amount Dontated:{totalRaised} </h4>
                </div>
            </div>
        </div>
        <div className="donationDetail">
            <h4 className="donationHeader">Donations Made</h4>
            <div>
                {fund.donations.map((donation, index)=> (
                    <div key={index} className="donationGiven">
                        <h4>Given By:</h4>
                        <h4>Amount:{donation.amount}</h4>
                    </div>
                ))}
            </div>
        </div>

    </div>
    </>
    );
}

export default FundDetail;
