import React from 'react'
import { useNavigate } from 'react-router-dom'
import { signOut } from 'firebase/auth'
import auth from '../firebase' // make sure this file exports auth
import '../Blog.css'

const BlogHome = () => {
  const navigate = useNavigate()

  const handleLogout = () => {
    signOut(auth).then(() => {
      navigate('/login')
    })
  }

  // নতুন পেজে নেভিগেট করার ফাংশন
  const goToNewPage = () => {
    navigate('/newpage')
  }

  return (
    <>
      {/* Navbar */}
      <nav style={{ backgroundColor: '#333', color: 'white', padding: '10px 20px', display: 'flex', justifyContent: 'space-between' }}>
        <h2>🔥 FirebaseApp</h2>
        <div>
          <button onClick={goToNewPage} style={{ marginRight: '10px', backgroundColor: 'blue', color: 'white', border: 'none', padding: '8px 12px', cursor: 'pointer' }}>
            Go to New Page
          </button>
          <button onClick={handleLogout} style={{ backgroundColor: 'red', color: 'white', border: 'none', padding: '8px 12px', cursor: 'pointer' }}>
            Logout
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={{ padding: '40px', textAlign: 'center', backgroundColor: 'green' }}>
        <h1>Welcome to Firebase Blog Zone</h1>
        <p>Build and manage apps with Firebase Auth</p>
      </section>

      {/* Features */}
      <section style={{ padding: '20px' }}>
        <h2 style={{ textAlign: 'center' }}>🚀 Features</h2>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
          {['Authentication', 'Database', 'Hosting'].map((feature, i) => (
            <div key={i} style={{ border: '1px solid gray', borderRadius: '8px', padding: '20px', width: '250px' }}>
              <h3>{feature}</h3>
              <p>Secure and fast Firebase {feature.toLowerCase()} integration</p>
            </div>
          ))}
        </div>
      </section>

      {/* Blogs */}
      <section style={{ padding: '20px', backgroundColor: 'gray' }}>
        <h2 style={{ textAlign: 'center' }}>📝 Recent Blogs</h2>
        <div style={{ maxWidth: '800px', margin: 'auto' }}>
          <div style={{ border: '1px solid gray', padding: '15px', marginBottom: '10px' }}>
            <h3>Integrating Firebase Auth in React</h3>
            <p>Step-by-step guide to implement sign up, login, and logout using Firebase.</p>
          </div>
          <div style={{ border: '1px solid gray', padding: '15px' }}>
            <h3>React Routing Made Easy</h3>
            <p>Learn how to structure your single-page app with React Router.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ textAlign: 'center', backgroundColor: '#222', color: 'white', padding: '20px', marginTop: '30px' }}>
        <p>&copy; {new Date().getFullYear()} FirebaseApp. All rights reserved.</p>
      </footer>
    </>
  )
}

export default BlogHome
