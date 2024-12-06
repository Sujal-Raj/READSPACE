import React, { useEffect } from 'react'
import Navbar from './Navbar'
import FooterTitle from '../OtherComponents/FooterTitle'
import { Link } from 'react-router-dom';



function About() {

  useEffect(() => {
    document.title = 'About - ReadSpace | Online library to read and download books online ';
  }, []);

  return (
    <>
      <Navbar/>
      <div>
        <FooterTitle firstWord="about " secondWord="us"/>
        <div className='w-[50%] m-auto text-center'>
          <p className='text-2xl '>
          Welcome to ReadSpace, your one-stop destination for discovering and exploring books across various genres and categories. Whether you're a voracious reader or just beginning your literary journey, ReadSpace is designed to make your experience effortless, enjoyable, and informative.
          </p>
        </div>
      </div>
      <div>
        {/* <div className='h-[10vh] px-6 flex items-center justify-center mt-10 bg-zinc-800 '>
            <p className='gitsi-text uppercase text-4xl'>Our vision.</p>
        </div>  */}
        <FooterTitle firstWord="our " secondWord="vision"/>
        <div className='w-[50%] m-auto text-center'>
          <p className='text-2xl '>
          At ReadSpace, we believe in the transformative power of books. Our mission is to connect readers with the stories, knowledge, and inspiration they seek by offering an intuitive platform that simplifies the search and discovery process.
          </p>
        </div>
      </div>
      <div>
        <FooterTitle firstWord="what we " secondWord="offer"/>
        <div className='w-[50%] m-auto text-center'>
          <p className='text-2xl '>
          <span className='font-bold underline'>Smart Book Search:</span> Find books quickly using advanced search capabilities powered by APIs. Just type in a title, author, or keyword, and let ReadSpace do the rest.
          </p>
          <p className='text-2xl mt-8'>
          <span className='font-bold underline'>Detailed Book Insights:</span> Access comprehensive details about your favorite books, including author information, summaries, and more.
          </p>
          <p className='text-2xl mt-8'>
          <span className='font-bold underline'>Convenience at Your Fingertips:</span> Discover, read, or download books with ease—all from a single platform.
          </p>
          <p className='text-2xl mt-8'>
          <span className='font-bold underline'>Personalized Recommendations:</span> (Coming Soon!) Tailored suggestions based on your reading preferences and history.
          </p>
        </div>
      </div>
      <div>
        <FooterTitle firstWord="why choose " secondWord="us"/>
        <div className='w-[50%] m-auto text-center'>
          <p className='text-2xl '>
          We know that every reader is unique. That's why we've designed ReadSpace to cater to your individual needs:
          </p>
          <ul className='text-2xl text-left list-disc mt-6'>
            <li>A sleek and user-friendly interface.</li>
            <li>Reliable access to a vast library of books.</li>
            <li>A commitment to innovation and continuous improvement.</li>
          </ul>
        </div>
      </div>
      <div>
        <FooterTitle firstWord="join " secondWord="Community"/>
        <div className='w-[50%] m-auto text-center'>
          <p className='text-2xl '>
          ReadSpace isn't just a tool—it's a community for readers. We aim to create a space where book lovers can connect, share, and grow. Stay tuned for exciting features, including user reviews, ratings, and book clubs.
          </p>
        </div>
      </div>
      <footer className='min-h-[60vh] mt-10  relative'>
    <div className='min-h-[10vh]  flex items-center justify-between px-10'>
        <div className="logo flex flex-col">
          {/* <h1 className='nav-logo gitsi-text text-4xl'>READ<span className=' text-emerald-400'>SPACE</span>.</h1> */}
          <img className='h-[90%] w-52' src="/logo.png" alt="" />
          <div className=''>
            <p className='text-xl text-zinc-600'>© 2024 Features Inc. All rights reserved | READSPACE </p>
          </div>
        </div>
        <div className="nav-links flex flex-col gap-6  font-medium text-xl underline">
        <h1 className=' opacity-60'>Resources</h1>
          <Link to="https://developers.google.com/books" target="_blank">Google Books API </Link>
          <Link to="https://reactrouter.com/" target="_blank">React-router-dom</Link>
          <Link to="https://gsap.com/" target="_blank">GSAP</Link>
        </div>
        <div className="nav-links flex flex-col gap-6  font-medium text-xl underline">
        <h1 className=' opacity-60'>Follow us</h1>
          <Link to="https://github.com/Sujal-Raj" target="_blank">Github</Link>
          <Link to="https://www.linkedin.com/in/sujalraj1/" target="_blank">Linkdein</Link>
          <Link to="https://github.com/Sujal-Raj/READSPACE" target="_blank">Get the code</Link>
        </div>
    </div>
    {/* <div className='absolute bottom-[50%]'>
      <p className='text-xl text-zinc-600 px-10'>© 2024 Features Inc. All rights reserved | READSPACE </p>
    </div> */}
            <div className=' absolute bottom-0 w-full'>
              <FooterTitle firstWord="let's" secondWord="connect"/>
            </div>
    </footer>
    </>
  )
}

export default About