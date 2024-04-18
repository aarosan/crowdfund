import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Auth from '../utils/auth';
import "../../src/App.css";
import { useQuery } from '@apollo/client';
import { GET_ALL_FUNDS } from '../utils/queries';

function Home() {
    const { loading, error, data } = useQuery(GET_ALL_FUNDS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <>
            <h1 className="title">It's A Community Call To Action</h1>
            <div className="joinBtn">
                {Auth.loggedIn() ? (
                    <Link to="/user">
                        <Button variant="contained">Your Calls To Action</Button>
                    </Link>
                ) : (
                    <Link to="/join">
                        <Button variant="contained">Join the Village</Button>
                    </Link>
                )}
            </div>
            <div className="homeCard">
                <div className="grid">
                    <h1 className="titleAction">Recent Calls To Action</h1>
                    <div className="actionCardHome">
                        {data.getAllFunds.map((fund) => (
                            <div key={fund._id} className="actionCardsHome">
                                <h3>{fund.name}</h3>
                                <p>Description: {fund.description}</p>
                                <p>Goal: {fund.goal}</p>
                                <p>Creator: {fund.creator.username}</p>
                                <Link to={`/fundDetail/${fund._id}`}>
                                  <Button variant="contained">View Details</Button>
                                </Link>
                                <Link to={`/donate`}>
                                  <Button variant="contained">Donate</Button>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;