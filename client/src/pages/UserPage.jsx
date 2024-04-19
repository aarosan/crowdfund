import { useQuery, useMutation } from '@apollo/client';
import { GET_ME } from '../utils/queries';
import { DELETE_FUND } from '../utils/mutations';
import { Link } from 'react-router-dom';
import Auth from '../utils/auth';
import '../../src/App.css'

function User() {
    const token = Auth.getToken(); // Retrieve the token from Auth (assuming Auth handles token storage)
    const { loading, error, data, refetch } = useQuery(GET_ME, {
      variables: { token },
    });

    const [deleteFund] = useMutation(DELETE_FUND);

    const handleDelete = async (fundId) => {
      try {
        await deleteFund({
          variables: { fundId },
        });
        
        refetch();

      } catch (error) {
        console.error('Error deleting fund:', error);
      }
    };
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
  
    return (
      <>
      <div className="userCard">
          <h1 className="welcome">Welcome back, {data.me.username}</h1>
          <h1 className="userEmail">Email: {data.me.email}</h1>
        <div className="actionCardHome">
          {data.me.funds.map((fund, index)=> (
                    <div key={index} >
                        <h1 className="actionTitle">{fund.name}</h1>
                        <h1 className="actionDescription">Call Description:{fund.description}</h1>
                        <h1 className="actionRaised">Goal:{fund.goal}</h1>
                        <div className="btnCollection">
                          <button className="donateBtn" onClick={()=> handleDelete(fund._id)}>Delete Fund</button>
                          <Link to={`/update/${fund._id}`} style={{ textDecoration: 'none' }}><button className="donateBtn">Update Fund</button></Link>
                        </div>
                    </div>
                ))}
        </div>
      </div>
      </>
    );
  }
  
  export default User;