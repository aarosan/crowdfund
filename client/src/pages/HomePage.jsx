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
                    <div>
                        {data.getAllFunds.map((fund) => (
                            <div key={fund._id} className="actionCardHome">
                                <h3 className="actionTitle">{fund.name}</h3>
                                <p className="actionDescription"><strong>Description:</strong> {fund.description}</p>
                                <p className="actionRaised"><strong>Goal:</strong> {fund.goal}</p>
                                <p className="actionCreator"><strong>Creator:</strong> {fund.creator.username}</p>
                                <Link to={`/fundDetail/${fund._id}`} style={{ textDecoration: 'none' }}>
                                  <button className="donateBtn">View Details</button>
                                </Link>
                                <Link to={`/donate`} style={{ textDecoration: 'none' }}>
                                  <button className="donateBtn">Donate</button>
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