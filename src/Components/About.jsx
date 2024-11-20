import React from 'react'
import Navbar from './Navbar'
import FooterTitle from '../OtherComponents/FooterTitle'

function About() {
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
    </>
  )
}

export default About