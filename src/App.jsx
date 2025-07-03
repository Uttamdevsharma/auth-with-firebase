import { Route, Routes } from 'react-router-dom'
// import './App.css'
// import './index.css'
import Home from './pages/Home'
import Login from './pages/Login'
import BlogHome from './pages/BlogHome'
import DashBoard from './pages/DashBoard'

function App() {
  return (
    <>  
   <Routes>
     <Route path='/' element={<Home />} />
     <Route path='/login' element={<Login/>} />
     <Route path='/signup' element={<Home/>} />
     <Route path='/landing' element={<BlogHome/>} />
     <Route path='/newpage' element={<DashBoard/>} />

    </Routes>
    </>
  );
}

export default App
