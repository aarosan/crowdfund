import { useState } from 'react';
import "../../src/App.css";
import { useMutation } from "@apollo/client";
import { CREATE_FUND } from "../utils/mutations";


function Create() {
  const [submittedData, setSubmittedData] = useState([]);


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
      await createFund({
        variables: {
          ...formState,
          goal: parseFloat(formState.goal),
        },
      });
  
      // Save the submitted data to the state
      setSubmittedData([...submittedData, formState]);
  
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
    <div className="joinCard">
          <div className="addInfoCard">
                <h4 className="formText">Tell us about your Call To Action:</h4>
                <form onSubmit={handleFormSubmit} className="infoBox">
                <input
                  className="name"
                  type="text"
                  placeholder="Give your call to action a title."
                  name="name"
                  value={formState.name}
                  onChange={handleCreate}
                />
                <input
                  className="description"
                  type="text"
                  placeholder="Describe why you are Calling for Action."
                  name="description"
                  value={formState.description}
                  onChange={handleCreate}
                />
                <input
                  className="goal"
                  type="number"
                  step="any"
                  placeholder="What is your goal?"
                  name="goal"
                  value={formState.goal}
                  onChange={handleCreate}
                />
                <button className="submitBtn" type="submit">
                  Submit
                </button>
              </form>
            {error && <div className="errorBox"> {error.message}</div>}
          </div>
        </div>
    </>
  );
}

export default Create;