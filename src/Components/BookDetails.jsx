import React from 'react'
import Navbar from './Navbar'
import Book1 from '../assets/1003w-vAt8PH1CmqQ.webp'
import { useLocation } from 'react-router-dom'


function BookDetails() {
    const location = useLocation();
    const {book} = location.state || {};

    // console.log(book);
  return (
    <>
    <Navbar/>
    <div className='h-[90vh] flex '>
        <div className="book-img w-[40%] h-[100%] py-4">
            <img src={book.volumeInfo.imageLinks.smallThumbnail} alt="" className='h-[600px] w-auto object-contain m-auto shadow-emerald-300 shadow-lg hover:shadow-2xl hover:shadow-emerald-300 transition-shadow duration-300'/>
        </div>
        <div className="book-details w-[60%] h-[100%] py-4  ">
            <div className='text-center'>
                <p className='text-3xl font-bold tracking-wide text-emerald-400'>{book.volumeInfo.title}</p>
                <p className='text-xl font-semibold mt-1'><span className='text-emerald-400'>Author:</span> {book.volumeInfo.authors?.join(', ')}</p>
            </div>
            <div className='bg-zinc-800 px-4 py-2 mt-4 text-lg rounded-lg font-medium'>
                <p>Publisher: "{book.volumeInfo.publisher}" </p>
                <p>Published Date: "{book.volumeInfo.publishedDate}"</p>
                <p>Page Count: {book.volumeInfo.pageCount} </p>
                <p>Categories: {book.volumeInfo.categories?.join(", ")}</p>
            </div>
            <div className='max-h-[20vh] text-ellipsis overflow-hidden '>
                <p className='text-emerald-400 font-semibold text-xl '>Decsription:</p>
                <p className='px-4 line-clamp-5 '>
                {book.volumeInfo.description}
                </p>
            </div>
            {/* <button className='bg-emerald-400 p-2 rounded-lg font-semibold'>
              Read Online
          </button> */}
        </div>
    </div>
    </>
  )
}

export default BookDetails