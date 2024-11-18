import React from 'react'
import Book1 from '../assets/1003w-vAt8PH1CmqQ.webp'

function BookDiv({item}) {
    // console.log(item)
    const { title, authors, imageLinks, averageRating } = item.volumeInfo;
  return (
    <>
        <div className=''>
            <div className='h-[500px] border-2 w-[300px] flex flex-col items-center p-2 rounded-lg gap-2'>
                <img className='h-[300px] object-cover w-[200px]' src={imageLinks?.thumbnail || 'https://via.placeholder.com/200x300'} alt="" />
                <div className="w-full h-5 text-right px-4">
                    <p className='font-bold border-2 rounded-lg  text-right px-2 bg-zinc-400 inline-block'>
                        ⭐{averageRating || 'N/A'}
                    </p>
                </div>
                <div className="w-60 min-h-5 text-center px-4">
                    <p className='font-bold'>
                    {title || 'Untitled'}
                    </p>
                </div>
                <div className="w-60 text-center px-4 ">
                    <p className='font-bold '>
                    Author: {authors ? authors.join(', ') : 'Unknown'}
                    </p>
                </div>
                <button className='bg-emerald-400 p-2 rounded-lg font-semibold'>
                    Explore
                </button>
            </div>
        </div>
    </>
  )
}

export default BookDiv