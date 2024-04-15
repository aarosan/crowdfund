// import { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { useMutation } from '@apollo/client';
// import Auth from '../utils/auth';
// import { ADD_USER } from '../utils/mutations';

// function Signup() {
//   const [formState, setFormState] = useState({ email: '', password: '' });
//   const [addUser] = useMutation(ADD_USER);

//   const handleFormSubmit = async (event) => {
//     event.preventDefault();
//     const mutationResponse = await addUser({
//       variables: {
//         email: formState.email,
//         password: formState.password,
//         firstName: formState.firstName,
//         lastName: formState.lastName,
//       },
//     });
//     const token = mutationResponse.data.addUser.token;
//     Auth.login(token);
//   };

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setFormState({
//       ...formState,
//       [name]: value,
//     });
//   };

//   return (
//     <div className="signupCard">
//       <label className="loginLabel">Sign Up</label>
//       <form onSubmit={handleFormSubmit}>
//         <div className="signupLabel">
//           <label htmlFor="email">Email:</label>
//           <input className = "signupInput"
//             placeholder="Enter Email Address"
//             name="email"
//             type="email"
//             id="email"
//             onChange={handleChange}
//           />
//         </div>
//         <div className="signupLabel">
//           <label htmlFor="pwd">Password:</label>
//           <input className = "signupInput"
//             placeholder="Enter Password"
//             name="password"
//             type="password"
//             id="pwd"
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <button className="signupBtn" type="submit">Submit</button>
//         </div>
//       </form>
//       <div>
//       <p>Already a User? <Link to="/login">Login</Link></p>
//       </div>
//     </div>
//   );
// }

// export default Signup;