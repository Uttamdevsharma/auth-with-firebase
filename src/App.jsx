import './App.css'
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { useState } from 'react';
import { useForm } from "react-hook-form"

function App() {

  const [user,setUser ] = useState({})
  const [firebaseError , setFirebaseError] = useState("")


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (formData) => signUpWithEmailPassword(formData);

  


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

  const signUpWithEmailPassword = (data) => {
    const email = data.email
    const password = data.password

  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    setUser(user)
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
    <div style={{
      margin:'10px'
    }}
    >
       <h2>Welcome To Firebase Authentication {user.email}</h2>
      <form style={{
        border: '2px solid white'
      }} onSubmit={handleSubmit(onSubmit)}>

       <h3>SignUp with email and password</h3>


      {/* include validation with required or other standard HTML validation rules */}
      <input type='email' style={{
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


      <input  type = "password" style={{
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

    </div>
     

    <div className="" style={{
      margin:'10px'
    }}>
       <form style={{
        border: '2px solid white'
      }} onSubmit={handleSubmit(onSubmit)}>

       <h3>Login with email and password</h3>


      {/* include validation with required or other standard HTML validation rules */}
      <input type='email' style={{
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


      <input  type = "password" style={{
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

    </div>


   
    </>
  )
}

export default App
