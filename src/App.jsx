import { Route, Routes } from 'react-router-dom'
import './App.css'
import './index.css'
import Home from './pages/Home'
import Login from './pages/Login'
import BlogHome from './pages/BlogHome'

function App() {
  return (
    <>  
   <Routes>
     <Route path='/' element={<Home />} />
     <Route path='/login' element={<Login/>} />
     <Route path='/signup' element={<Home/>} />
     <Route path='/landing' element={<BlogHome/>} />

    </Routes>
    </>
  );
}

export default App
