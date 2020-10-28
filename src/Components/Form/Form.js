

+import React, { useState } from 'react';
import { useContext } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { initializeLoginFramework, handleGoogleSignIn, handleFbSignIn, createUserWithEmailAndPassword, signInWithEmailAndPassword } from './FormManager';
import { BookingContext } from '../../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebookF, faGoogle} from '@fortawesome/free-brands-svg-icons';




function Form() {
  const [newUser, setNewUser] = useState(false);
  const [user, setUser] = useState({
    isSignedIn: false,
    name: '',
    email: '',
    password: '',
    photo: ''
  });

  initializeLoginFramework();

   const {tourist} = useContext(BookingContext)
    const [loggedInUser, setLoggedInUser] = tourist;
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  const googleSignIn = () => {
      handleGoogleSignIn()
      .then(res => {
        handleResponse(res, true);
      })
  }

  const fbSignIn = () => {
      handleFbSignIn()
      .then(res => {
        const data = res.displayName;
        setLoggedInUser({email: data})
        history.replace(from);
      })

  }

  const handleResponse = (res, redirect) =>{
    setUser(res);
    setLoggedInUser(res);
    if(redirect){
        history.replace(from);
    }
  }

  const handleBlur = (e) => {
    let isFieldValid = true;
    if(e.target.name === 'email'){
      isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
    }
    if(e.target.name === 'password'){
      const isPasswordValid = e.target.value.length > 6;
      const passwordHasNumber =  /\d{1}/.test(e.target.value);
      isFieldValid = isPasswordValid && passwordHasNumber;
    }
    if(isFieldValid){
      const newUserInfo = {...user};
      newUserInfo[e.target.name] = e.target.value;
      setUser(newUserInfo);
    }
  }
  const handleSubmit = (e) => {
    if(newUser && user.email && user.password){
      createUserWithEmailAndPassword(user.name, user.email, user.password)
      .then(res => {
        handleResponse(res, true);
      })
    }

    if(!newUser && user.email && user.password){
      signInWithEmailAndPassword(user.email, user.password)
      .then(res => {
        handleResponse(res, true);
      })
    }
    e.preventDefault();
  }



  return (
   <div className="user container">
      <div className="user-info pt-3">
               <div className="form">
               <h4>{newUser ? 'Create an account ' : 'Sign In'}</h4>
                   <form onSubmit={handleSubmit}  className="ship-form">
                   {newUser && <input  type="text" name="name" 
                   onBlur={handleBlur}placeholder="Enter name"/>}

                 {newUser && <input onClick={handleBlur} type="number" 
                 name="number" placeholder="Enter Mobile Number"/>}

               
                        <input type="email"  
                        name="email"
                        onBlur={handleBlur}
                        placeholder="Enter your email"/>
                
                        <input type="password" 
                        name="password"
                        onBlur={handleBlur}
                        placeholder="Enter password"/>

                     {newUser &&  <input type="password" 
                        name="confirm-password"
                        onBlur={handleBlur}
                        placeholder="Enter confirm password"/>}
                  
                  <input className="log-button" type="submit" value={newUser ? "Sign Up" : "Sign In" }/>

                    </form>
                    

                  
                {
                    user.submit && <p style={{color:'green'}}>user {newUser ? 'created':'Logged in'} Successfully</p>
                }

                <h5 onClick={() => setNewUser(!newUser)}>{newUser ? 'Already have an account': "Create an account "} </h5>
               </div>
               <div>
                
               {newUser && <div className="font">
               <h6>or</h6>
             
               <div className="icon-style" onClick={googleSignIn}>
               <FontAwesomeIcon  className="icon" icon={ faGoogle} />
              <h6>Continue With Google</h6>
              </div>

              <div className="icon-style" onClick={fbSignIn}>
              <FontAwesomeIcon  className="icon" icon={faFacebookF} />
              <h6>Continue With Google</h6>
              </div>
            </div>}

               </div>
        </div>
   </div>
  );
}

export default Form;
