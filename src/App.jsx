import './App.css'
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useForm } from "react-hook-form"

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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    const { email, password } = data;

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("Logged in user:", user);
      })
      .catch((error) => {
        console.error("Error:", error.message);
      });
  }

  return (
    <>
      <h2>Login with Firebase</h2>
      <form 
      
      
      style={{
        border: '2px solid white'
      }} onSubmit={handleSubmit(onSubmit)}>
       <h3>Login with email and password</h3>
      {/* include validation with required or other standard HTML validation rules */}
      <input style={{
        padding: '10px',
        width: '250px',
        margin: '10px'
      }
     
      } {...register("email", { required: true })} placeholder='Email' />
      <br/>
      {errors.email && <span  style={{
        color: 'red',
        fontSize: '14px'
      }}>This field is required</span>}

       <br/>
      <input  style={{
        padding: '10px',
        width: '250px',
        margin: '10px'
      }
     
      } {...register("password", { required: true })} placeholder='Password' />
      <br/>
      
      {errors.password && <span style={{
        color: 'red',
        fontSize: '14px'
      }}>This field is required</span>}
   <br/>

      <input type="submit" style={{
        backgroundColor:'green',
        padding:'10px',
        width:'200px',
        marginBottom:'30px'
      }} />
    </form>
    </>
  )
}

export default App
