
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from 'react';
import { useForm } from "react-hook-form"
import { Link } from 'react-router-dom';
import { useLocation } from "react-router-dom";

export const SingIn = () => {

    const location = useLocation();
     const fromSignUp = location.state?.fromSignUp;

    const navigate = useNavigate(); 

    const [user,setUser ] = useState({})
    const [firebaseError , setFirebaseError] = useState("")


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (formData) => signInWithEmailPassword(formData);



  // Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyCJzcl4bQimJoxxSKTEHOyguPYn5bqDoxc",
  authDomain: "fir-auth-practice-26f99.firebaseapp.com",
  projectId: "fir-auth-practice-26f99",
  storageBucket: "fir-auth-practice-26f99.firebasestorage.app",
  messagingSenderId: "242165773296",
  appId: "1:242165773296:web:6cea9471bf5f11000d2335",
  measurementId: "G-REESPV1SWP"
};

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  //For sign up
  const signInWithEmailPassword = (data) => {
    const email = data.email
    const password = data.password


  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    setUser(user)
    navigate('/landing')
    // ...
  })
  .catch((error) => {
    const errorMessage = error.message;
    setFirebaseError(errorMessage)
    // ..
  });
  }





  return (
    <>

    {fromSignUp && (
  <div style={{ color: 'green', marginBottom: '10px' }}>
    ✅ Successfully signed up! Please login.
  </div>
)}

     <form style={{
        border: '2px solid white'
      }} onSubmit={handleSubmit(onSubmit)}>

       <h3>Login with email and password {user.email}</h3>


      {/* include validation with required or other standard HTML validation rules */}
      <input className="p-2.5 border border-white-500 w-[250px] m-2.5" type='email' style={{
        padding: '10px',
        width: '250px',
        margin: '10px'
      }    } {...register("email", { required: true })} placeholder='Email' />
      <br/>
      {errors.email && <span  style={{
        color: 'red',
        fontSize: '14px'
      }}>This field is required</span>}

       <br/>


      <input className="p-2.5 border border-white-500 w-[250px] m-2.5"  type = "password" style={{
        padding: '10px',
        width: '250px',
        margin: '10px'
      }   } {...register("password", { required: true })} placeholder='Password' />
      <br/>
      
      {errors.password && <span style={{ 
        color: 'red',
        fontSize: '14px'
      }}>This field is required</span>}

   <br/>

   <div>
   {firebaseError}
   </div>

   <br/>


      <input type="submit" style={{
        backgroundColor:'green',
        padding:'10px',
        width:'200px',
        marginBottom:'30px'
      }} />
    </form>

    <p>Dont Have an Account ? <Link to={'/signup'}>SignUp</Link> </p>
    
    </>
  )
}

export default SingIn