import { useState } from 'react';
import "../../src/App.css";
import { useMutation, useQuery } from "@apollo/client";
import { CREATE_FUND } from "../utils/mutations";
import Auth from '../utils/auth';
import { GET_ME } from '../utils/queries';


function Create() {
  const token = Auth.getToken(); // Retrieve the token from Auth (assuming Auth handles token storage)
    const { data } = useQuery(GET_ME, {
      variables: { token },
    });
  const [setSubmittedData] = useState([]);


  const [formState, setFormState] = useState({
    name: '',
    description: '',
    goal: '',
  });

  const [createFund, { error }] = useMutation(CREATE_FUND);

  const handleCreate = (event) => {
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
      console.log(data);
      await createFund({
        variables: {
          ...formState,
          goal: parseFloat(formState.goal),
        },
      });
  
      // Append the new fund data to the user's fund array
    const newFund = {
      name: formState.name,
      description: formState.description,
      goal: parseFloat(formState.goal),
    };

    const updatedFundArray = [...data.me.funds, newFund];

    // Update the user's fund array in the component's state
    setSubmittedData(updatedFundArray);

  
      // Clear the form fields after submission
      setFormState({
        name: '',
        description: '',
        goal: '',
      });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
    <h1 className="titleJoin">Make Your<br></br>Call To Action</h1>
    <div className="joinCreateCard">
          <div className="addCreateCard">
                <h4 className="formText">Tell us about your Call To Action:</h4>
                <form onSubmit={handleFormSubmit} className="infoBox">
                <input
                  className="actionT"
                  type="text"
                  placeholder="Give your call to action a title."
                  name="name"
                  value={formState.name}
                  onChange={handleCreate}
                />
                <textarea
                  className="actionDesc"
                  type="text"
                  placeholder="Describe why you are Calling for Action."
                  name="description"
                  value={formState.description}
                  onChange={handleCreate}
                />
                <input
                  className="donationAmount"
                  type="number"
                  step="any"
                  placeholder="What is your goal?"
                  name="goal"
                  value={formState.goal}
                  onChange={handleCreate}
                />
                <button className="createCall" type="submit">
                  Create
                </button>
              </form>
            {error && <div className="errorBox"> {error.message}</div>}
          </div>
        </div>
    </>
  );
}

export default Create;