import React, { Suspense } from 'react'
import { Link, Route, Routes, useNavigate } from 'react-router-dom'
import Home from './components/Home'
import Drilling from './components/Drilling'
import Jugaad from './components/Jugaad'
// import Dashboard from './components/Dashboard'
const Dashboard = React.lazy(() => import('./components/Dashboard'))
const About = React.lazy(() => import('./components/About'))

function App() {

  let navigate = useNavigate();
  function handleBtn() {
    navigate('/');
  }

  return (
    <div>
      <Jugaad />
      <Drilling />

      {/* <a href="/">Home</a> */}
      {/* <Link to='/'>Home</Link> */}
      <button onClick={handleBtn}> Home </button>

      {/* <a href="/dashboard">Dashboard</a> */}
      <Link to='/dashboard'>Dashboard</Link>


      {/* <a href="/about">About</a> */}
      <Link to='/about'>About</Link>

      <Routes>
        <Route element={<Home></Home>} path='/' />
        <Route element={<Suspense fallback="loading Dashboard"> <Dashboard /> </Suspense>} path='/dashboard' />
        <Route element={<Suspense fallback="loading About"> <About /> </Suspense>} path='/about' />
      </Routes>

    </div>
  )
}

export default App