import React from 'react';
// import ImageUploading from 'react-images-uploading';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

import '../../src/App.css';
import '../../src/index.css';

function Join () {
    const [images, setImages] = React.useState([]);
    const maxNumber = 69;
  
    const onChange = (imageList, addUpdateIndex) => {
      // data for submit
      console.log(imageList, addUpdateIndex);
      setImages(imageList);
    };
    return (
    <>
    <h1 className="titleJoin">Make Your<br></br>Call To Action</h1>
    <div className="joinCard">
    <div>       <p>Already a User? <Link to="/login">Login</Link></p>      
    </div>
        <h3 className="title2">Lets Get Started!</h3>
            <div>
                <h4 className="stepsText">Step 1:</h4>
                    <div className="addInfoCard">
                    <h4 className="formText">Add your user information:</h4>
                        <form className="infoBox">
                            <label>First name: 
                            <input className="fName" type="text" />
                            </label>
                        </form>
                        <form className="infoBox">
                            <label>Last name: 
                            <input className="lName" type="text" />
                            </label>
                        </form> 
                        <form className="infoBox">
                            <label>Username: 
                            <input className="lName" type="text" />
                            </label>
                        </form> 
                        <form className="infoBox">
                            <label>Email: 
                            <input className="email" type="email" />
                            </label>
                        </form> 
                        <form className="infoBox">
                            <label>Password: 
                            <input className="lName" type="password" />
                            </label>
                        </form>   
                    </div>
            </div>
        <h4 className="stepsText">Step 2:</h4>
            <div className="addActionCard">
                <h4 className="formText">Tell us about your Call To Action:</h4>
                    <form className="actionDesc">
                        <label>Who is the call for: 
                        <input className="actionTitle" type="text" placeholder="Name of person or organization" />
                        </label>
                    </form>
                    <form className="actionDesc">
                        <label>Give your Call To Action a title: 
                        <input className="actionTitle" type="text" placeholder='example: Timmy needs a new leg.'/>
                        </label>
                    </form>
                    <form className="actionDesc">
                        <label>Describe why you are Calling For Action: 
                        <input className="actionText" type="text" size="1000" />
                        </label>
                    </form>
                    <form className="infoBox">
                        <label>Donation Goal: 
                        <input className="donationAmount" type="text" placeholder="If you don't have a goal then leave this blank"/>
                        </label>
                    </form> 
                </div>
        <h4 className="stepsText">Step 3:</h4>
            <div className="addImageCard">
                <h4 className="formText">Upload your Call To Action image:</h4>
                    <div>
                        <div>
                            multiple
                            value={images}
                            onChange={onChange}
                            maxNumber={maxNumber}
                            {/* dataURLKey={data_url} */}
                            {({
                            imageList,
                            onImageUpload,
                            onImageRemoveAll,
                            onImageUpdate,
                            onImageRemove,
                            isDragging,
                            dragProps,
                            }) => (
                            // write your building UI
                            <div className="upload__image-wrapper">
                                <button className="dropBtn"
                                style={isDragging ? { color: 'red' } : undefined}
                                onClick={onImageUpload}
                                {...dragProps}
                                >
                                Click or Drop image here <i className="fa-solid fa-upload"></i>
                                </button>
                                &nbsp;
                                <button className="removeBtn" onClick={onImageRemoveAll}>Remove all images</button>
                                {imageList.map((image, index) => (
                                <div key={index} className="image-item">
                                    <img src={image['data_url']} alt="" width="100" />
                                    <div className="image-item__btn-wrapper">
                                    <button className="removeBtn" onClick={() => onImageUpdate(index)}>Save</button>
                                    <button className="removeBtn" onClick={() => onImageRemove(index)}>Remove</button>
                                    </div>
                                </div>
                                ))}
                            </div>
                            )}
                        </div>
                    </div>
                </div>
        <h4 className="stepsText">Step 4:</h4>
            <div className="submitCard">
                <p className="completeText">Double check all of your information. Once you are sure
                everything is correct then click the button below to make the call.</p>
                    <div className="createCall">
                        <Button variant="contained" onClick={() => {alert('clicked')}}>Make The Call</Button>
                    </div>
            </div>
    </div>
    </>
    );
}

export default Join;
