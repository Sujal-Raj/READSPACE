import React from 'react'
import Navbar from './Navbar'
import Book1 from '../assets/1003w-vAt8PH1CmqQ.webp'
import Book2 from '../assets/canva-brown-rusty-mystery-novel-book-cover-hG1QhA7BiBU.jpg'
import Book3 from '../assets/design-for-writers-book-cover-tf-2-a-million-to-one.webp'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import FooterTitle from '../OtherComponents/FooterTitle'

function Home() {
    useGSAP(()=>{
        gsap.from(".animated-img",{
            // x:-200,
            y:-200,
            opacity: 0,
            // rotate:360,
            stagger:0.24,

        })
    })
  return (
    <>
    {/* ------Home page comes here-------- */}
    {/* Navbar Code is the navbar component  */}
    <div className="page1 h-screen ">
        <Navbar/>
        <div className="hero-section h-[60vh]  flex items-center px-14 overflow-hidden">
            <div className="hero-section-left w-1/2 ">
                <p className='text-5xl gitsi-text'>Discover, <br /> <span className='text-emerald-400'>Learn,</span> <br /> & <br /> <span className='text-emerald-400'>Escape Into Books.</span></p>
            </div>
            <div className="hero-section-right w-1/2 h-[100%] relative">
                {/* <img className='animated-img absolute top-4 left-60  h-[400px] w-[250px]  rounded-xl ' src={Book1} alt="" />
                <img className='animated-img absolute top-4 left-60 rotate-[10deg] h-[400px] rounded-xl' src={Book2} alt="" />
                <img className='animated-img absolute top-4 left-60 rotate-[20deg] h-[400px] rounded-xl' src={Book3} alt="" /> */}
                <img className='animated-img absolute top-4 left-48  h-[400px] w-[250px]  rounded-xl ' src={Book1} alt="" />
                <img className='animated-img absolute top-4 left-60  h-[400px] rounded-xl' src={Book2} alt="" />
                <img className='animated-img absolute top-4 left-80  h-[400px] rounded-xl' src={Book3} alt="" />
            </div>
        </div>
        <FooterTitle/>
    </div>
    </>
  )
}

export default Home