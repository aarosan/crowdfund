import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import "../../src/App.css";
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function Login() {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="loginCard">
      <div className="loginText">Login</div>
      <form onSubmit={handleFormSubmit}>
        <div className="loginLabel">
          <label htmlFor="email">Email:</label>
          <input className="loginInput1"
            placeholder="Enter Email Address"
            name="email"
            type="email"
            id="email"
            onChange={handleChange}
          />
        </div>
        <div className="loginLabel">
          <label htmlFor="pwd">Password:</label>
          <input className="loginInput2"
            placeholder="Enter Password"
            name="password"
            type="password"
            id="pwd"
            onChange={handleChange}
          />
        </div>
        {error ? (
          <div>
            <p>The provided credentials are incorrect</p>
          </div>
        ) : null}
        <div>
          <button className="loginBtn" type="submit">Submit</button>
        </div>
      </form>
      <div className="notUser">             
        <p>Not a user? <Link to="/join">Join The Village</Link></p>          
      </div>
    </div>
  );
}

export default Login;
