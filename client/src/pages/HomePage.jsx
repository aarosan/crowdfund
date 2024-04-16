import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Auth from '../utils/auth';


import "../../src/App.css";
import { useQuery } from '@apollo/client';
import SingleFund from '../components/SingleFund';
import { GET_ALL_FUNDS } from '../utils/queries';

function Home () {
    const { loading, error, data } = useQuery(GET_ALL_FUNDS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :{error.message}</p>;

    return (
        <>
            <h1 className="title">It's A Community<br></br>Call To Action</h1>
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
                            <SingleFund key={fund._id} fund={fund} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

// function Home () {
//     return (
//     <>
//     <h1 className="title">It's A Community<br></br>Call To Action</h1>
//         <div className="joinBtn">
//             <Button variant="contained" onClick={() => {alert('clicked')}}>Join the Village</Button>
//         </div>
//         <div className="homeCard">
//             <div className="grid">
//                 <h1 className="titleAction">Recent Calls To Action</h1>
//                 <div className="actionCardHome">
//                     <div className="actionBox">
//                         <div className="actionImg">
//                             <div>Image</div>
//                         </div>
//                         <div className="actionTitle">
//                             <h4>Title:</h4>
//                         </div>
//                         <div className="actionRaised">
//                             <h4>Amount Raised:</h4>
//                         </div>
//                     </div>
//                     <div className="actionBox">
//                         <div className="actionImg">
//                             <div>Image</div>
//                         </div>
//                         <div className="actionTitle">
//                             <h4>Title:</h4>
//                         </div>
//                         <div className="actionRaised">
//                             <h4>Amount Raised:</h4>
//                         </div>
//                     </div>
//                     <div className="actionBox">
//                         <div className="actionImg">
//                             <div>Image</div>
//                         </div>
//                         <div className="actionTitle">
//                             <h4>Title:</h4>
//                         </div>
//                         <div className="actionRaised">
//                             <h4>Amount Raised:</h4>
//                         </div>
//                     </div>
//                     <div className="actionBox">
//                         <div className="actionImg">
//                             <div>Image</div>
//                         </div>
//                         <div className="actionTitle">
//                             <h4>Title:</h4>
//                         </div>
//                         <div className="actionRaised">
//                             <h4>Amount Raised:</h4>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </>
//     );
// }

export default Home;