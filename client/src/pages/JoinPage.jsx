import { useState } from 'react';
import { Link } from 'react-router-dom';
// import ImageUploading from 'react-images-uploading';

import "../../src/App.css";
import "../../src/index.css";

import { useMutation } from "@apollo/client";
import { SIGNUP_USER_FUND } from "../utils/mutations";

function Join() {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
    name: '',
    description: '',
    goal: '',
  });

  const [signupUserFund, { error, data }] = useMutation(SIGNUP_USER_FUND);

  const handleSignup = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
       await signupUserFund({
        variables: { ...formState,
        goal: parseFloat(formState.goal),
    },
      });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
    <h1 className="titleJoin">Make Your<br></br>Call To Action</h1>
    <div className="joinCard">
    <div>       
        <p className="alreadyUser">Already a User? <Link to="/login">Login</Link></p>      
    </div>
      <div className="joinCard">
        <h3 className="title2">Lets Get Started!</h3>
        <p>Already a User? <Link to="/login">Login</Link></p>  
        <div>
          <div className="addInfoCard">
            {data ? (
              <p>
                Success! You may now head{" "}
                <Link to="/">back to the homepage </Link>
                or <Link to="/user">your profile</Link>
              </p>
            ) : (
              <form onSubmit={handleFormSubmit} className="infoBox">
                <input
                  className="username"
                  type="text"
                  placeholder="Username"
                  name="username"
                  value={formState.username}
                  onChange={handleSignup}
                />
                <input
                  className="email"
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={formState.email}
                  onChange={handleSignup}
                />
                <input
                  className="password"
                  type="password"
                  placeholder="Password(8 characters minimum)"
                  name="password"
                  value={formState.password}
                  onChange={handleSignup}
                />
                <h4 className="formText">Tell us about your Call To Action:</h4>
                <input
                  className="name"
                  type="text"
                  placeholder="Give your call to action a title."
                  name="name"
                  value={formState.name}
                  onChange={handleSignup}
                />
                <input
                  className="description"
                  type="text"
                  placeholder="Describe why you are Calling for Action."
                  name="description"
                  value={formState.description}
                  onChange={handleSignup}
                />
                <input
                  className="goal"
                  type="number"
                  step="any"
                  placeholder="What is your goal?"
                  name="goal"
                  value={formState.goal}
                  onChange={handleSignup}
                />
                <button className="submitBtn" type="submit">
                  Submit
                </button>
              </form>
            )}
            {error && <div className="errorBox"> {error.message}</div>}
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
        
 
export default Join;
