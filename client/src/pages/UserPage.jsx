import { useQuery } from '@apollo/client';
import { GET_ME } from '../utils/queries'
import Auth from '../utils/auth';


import '../../src/App.css'

function User() {
    const token = Auth.getToken(); // Retrieve the token from Auth (assuming Auth handles token storage)
    const { loading, error, data } = useQuery(GET_ME, {
      variables: { token },
    });
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
  
    return (
      <>
        <div className="userCard">
          <h1 className="welcome">Welcome back {data.me.username}</h1>
        </div>
        <div>
          <h1 className="welcome">Email: {data.me.email}</h1>
        </div>
        <div>
          {data.me.funds.map((fund, index)=> (
                    <div key={index} >
                        <h1>Your Calls:{fund.name}</h1>
                        <h1>Call Description:{fund.description}</h1>
                        <h1>Goal:{fund.goal}</h1>
                    </div>
                    
                ))}
        </div>
      </>
    );
  }
  
  export default User;