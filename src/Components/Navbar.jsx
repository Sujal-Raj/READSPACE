import React from 'react'
import { Link } from 'react-router-dom'


function Navbar() {
  return (
    <>
      <div className='h-[10vh]  flex items-center justify-between px-10'>
      <div className="logo">
        <h1 className='nav-logo gitsi-text text-4xl'>READ<span className=' text-emerald-400'>SPACE</span>.</h1>
      </div>
      <div className="nav-links flex gap-10  font-medium text-xl">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/searchabook">Search A Book</Link>
      </div>
      </div>
    </>
  )
}

export default Navbar