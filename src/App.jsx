import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Components/Home'
import About from './Components/About';
import SearchABook from './Components/SearchABook';
import BookDetails from './Components/BookDetails';


function App() {
  return (
   <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/> 
      <Route path='/searchabook' element={<SearchABook/>}/> 
      <Route path='/bookdetails/:id' element={<BookDetails/>}/> 
    </Routes>
   </>
  )
}

export default App
