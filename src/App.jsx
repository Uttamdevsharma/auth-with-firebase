import { Route, Routes } from 'react-router-dom'
import './App.css'
import './index.css'
import Home from './pages/Home'
import Login from './pages/Login'

function App() {
  return (
    <>
   
   <Routes>
     <Route path='/' element={<Home />} />
     <Route path='/login' element={<Login/>} />
     <Route path='/signup' element={<Home/>} />

    </Routes>
    </>
  );
}

export default App
