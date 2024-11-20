import React, { useEffect, useRef, useState } from 'react'
import Navbar from './Navbar'
import Book1 from '../assets/1003w-vAt8PH1CmqQ.webp'
import Book2 from '../assets/canva-brown-rusty-mystery-novel-book-cover-hG1QhA7BiBU.jpg'
import Book3 from '../assets/design-for-writers-book-cover-tf-2-a-million-to-one.webp'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import FooterTitle from '../OtherComponents/FooterTitle'
import BookDiv from '../OtherComponents/BookDiv'
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
// import Loader from 'react-loader-spinner';


function Home() {
    const scrollRefTrending = useRef(null);
    const scrollRefRomance = useRef(null);
    const scrollRefFiction = useRef(null);
    useGSAP(()=>{
        gsap.from(".animated-img",{
            // x:-200,
            y:-200,
            opacity: 0,
            // rotate:360,
            stagger:0.24,

        })
    })

    const scrollLeftTrending = () => {
        gsap.to(scrollRefTrending.current, {
          scrollLeft: scrollRefTrending.current.scrollLeft - 300,
          duration: 1,
          ease: "power2.out",
        });
    };
    
    const scrollRightTrending = () => {
        gsap.to(scrollRefTrending.current, {
          scrollLeft: scrollRefTrending.current.scrollLeft + 300,
          duration: 1,
          ease: "power2.out",
        });
    };
    
    const scrollLeftRomance = () => {
        gsap.to(scrollRefRomance.current, {
          scrollLeft: scrollRefRomance.current.scrollLeft - 300,
          duration: 1,
          ease: "power2.out",
        });
    };
    
    const scrollRightRomance = () => {
        gsap.to(scrollRefRomance.current, {
          scrollLeft: scrollRefRomance.current.scrollLeft + 300,
          duration: 1,
          ease: "power2.out",
        });
    };

    const scrollLeftFiction = () => {
        gsap.to(scrollRefFiction.current, {
          scrollLeft: scrollRefRomance.current.scrollLeft - 300,
          duration: 1,
          ease: "power2.out",
        });
    };
    
    const scrollRightFiction = () => {
        gsap.to(scrollRefFiction.current, {
          scrollLeft: scrollRefRomance.current.scrollLeft + 300,
          duration: 1,
          ease: "power2.out",
        });
    };
    

      


     // State to store the fetched trending
  const [trending, setTrending] = useState(null);
  const [romance, setRomance] = useState(null);
  const [fiction, setFiction] = useState(null);

  // State to manage loading and error
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch trending from the API
    fetch("https://www.googleapis.com/books/v1/volumes?q=SEARCH_TERM&orderBy=relevance")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json(); // Parse the JSON response
      })
      .then((result) => {
        setTrending(result.items); // Save the data in state
        setLoading(false); // Stop loading
      })
      .catch((err) => {
        setError(err.message); // Save error message in state
        setLoading(false); // Stop loading
      });
    //   console.log(trending)
  }, []); // Empty dependency array to run only once on mount

  useEffect(() => {
    // Fetch trending from the API
    fetch("https://www.googleapis.com/books/v1/volumes?q=subject:romance")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json(); // Parse the JSON response
      })
      .then((result) => {
        setRomance(result.items); // Save the data in state
        setLoading(false); // Stop loading
      })
      .catch((err) => {
        setError(err.message); // Save error message in state
        setLoading(false); // Stop loading
      });
  }, []); // Empty dependency array to run only once on mount


  useEffect(() => {
    // Fetch trending from the API
    fetch("https://www.googleapis.com/books/v1/volumes?q=subject:science+fiction")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json(); // Parse the JSON response
      })
      .then((result) => {
        setFiction(result.items); // Save the data in state
        setLoading(false); // Stop loading
      })
      .catch((err) => {
        setError(err.message); // Save error message in state
        setLoading(false); // Stop loading
      });
  }, []); // Empty dependency array to run only once on mount



  return (
    <>
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
        <FooterTitle firstWord="read" secondWord="space"/>
    </div>
    <div className="page2 min-h-screen ">
        <div className='h-[10vh] px-6 flex items-center'>
            <p className='gitsi-text uppercase text-4xl'>Trending.</p>
        </div>    
        <div className=' h-[500px] relative'>
            <button onClick={scrollLeftTrending} className='h-10 w-10 flex items-center justify-center absolute top-1/2 left-3 bg-zinc-900 border rounded-[50%]'><FaArrowLeft /></button>
            <button onClick={scrollRightTrending} className='h-10 w-10 flex items-center justify-center absolute top-1/2 right-3 bg-zinc-900 border rounded-[50%]'><FaArrowRight /></button>
            {loading ?
            <> 
            <div className='h-[100%] w-[100%] flex items-center justify-center'>
                    <p className='text-xl'>Loading...</p>
                    {/* <Loader type="TailSpin" color="#00BFFF" height={50} width={50} /> */}
            </div>
            </>
             : null}
            {error &&
            <>
            <div className='h-[100%] w-[100%] flex items-center justify-center'>
                    <p className='text-xl'>Error: {error}</p>
            </div>
            </>
            }
            {trending && trending.length > 0 ? (
            <div ref={scrollRefTrending} className=" scrollbar-hide flex overflow-x-auto space-x-6 p-4">
                {trending.map((item, index) => (
                <BookDiv key={index} item={item} />
                ))}
            </div>
            ) : (
            <p>No books found.</p>
            )}

        </div>  
        <div className='h-[10vh] px-6 flex items-center mt-6'>
            <p className='gitsi-text uppercase text-4xl'>Romance.</p>
        </div>    
        <div className=' h-[500px] relative'>
            <button onClick={scrollLeftRomance} className='h-10 w-10 flex items-center justify-center absolute top-1/2 left-3 bg-zinc-900 border rounded-[50%]'><FaArrowLeft /></button>
            <button onClick={scrollRightRomance} className='h-10 w-10 flex items-center justify-center absolute top-1/2 right-3 bg-zinc-900 border rounded-[50%]'><FaArrowRight /></button>
            {loading ?
            <> 
            <div className='h-[100%] w-[100%] flex items-center justify-center'>
                    <p className='text-xl'>Loading...</p>
                    {/* <Loader type="TailSpin" color="#00BFFF" height={50} width={50} /> */}
            </div>
            </>
             : null}
            {error &&
            <>
            <div className='h-[100%] w-[100%] flex items-center justify-center'>
                    <p className='text-xl'>Error: {error}</p>
            </div>
            </>
            }
            {romance && romance.length > 0 ? (
            <div ref={scrollRefRomance} className=" scrollbar-hide flex overflow-x-auto space-x-6 p-4">
                {romance.map((item, index) => (
                <BookDiv key={index} item={item} />
                ))}
            </div>
            ) : (
            <p>No books found.</p>
            )}
        </div>
        <div className='h-[10vh] px-6 flex items-center mt-6'>
            <p className='gitsi-text uppercase text-4xl'>Science fiction.</p>
        </div>  
        <div className=' h-[500px] relative'>
            <button onClick={scrollLeftFiction} className='h-10 w-10 flex items-center justify-center absolute top-1/2 left-3 bg-zinc-900 border rounded-[50%]'><FaArrowLeft /></button>
            <button onClick={scrollRightFiction} className='h-10 w-10 flex items-center justify-center absolute top-1/2 right-3 bg-zinc-900 border rounded-[50%]'><FaArrowRight /></button>
            {loading ?
            <> 
            <div className='h-[100%] w-[100%] flex items-center justify-center'>
                    <p className='text-xl'>Loading...</p>
                    {/* <Loader type="TailSpin" color="#00BFFF" height={50} width={50} /> */}
            </div>
            </>
             : null}
            {error &&
            <>
            <div className='h-[100%] w-[100%] flex items-center justify-center'>
                    <p className='text-xl'>Error: {error}</p>
            </div>
            </>
            }
            {fiction && fiction.length > 0 ? (
            <div ref={scrollRefFiction} className=" scrollbar-hide flex overflow-x-auto space-x-6 p-4">
                {fiction.map((item, index) => (
                <BookDiv key={index} item={item} />
                ))}
            </div>
            ) : (
            <p>No books found.</p>
            )}
        </div>    
    </div>
    </>
  )
}

export default Home