import { useQuery, gql } from '@apollo/client';
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
          <h1 className="welcome">Welcome Back {data.me.username}</h1>
          {/* Render other data from the query as needed */}
        </div>
      </>
    );
  }
  
  export default User;