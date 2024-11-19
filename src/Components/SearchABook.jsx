import React, { useState } from 'react'
import Navbar from './Navbar'
import BookDiv from '../OtherComponents/BookDiv';

function SearchABook() {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(true);
  const [books, setBooks] = useState(null);
  const [loadingText, setLoadingText] = useState("Search to see results.");

  const fetchBooks = ()=>{
    setLoading(true);
    setLoadingText("Finding books...");
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${input}`)
     .then(response => response.json())
     .then(data => {
        if(data.items){
          setBooks(data.items);
        }else{
          setBooks(null);
        }
        setLoading(false);
      })
     .catch(error => {
        console.error('Error:', error);
        // setError(error);
        setLoading(false);
      });
  }
  return (
    <>
      <Navbar/>
      <div className='h-[10vh] bg-zinc-800 flex items-center justify-center'>
        <div className='flex gap-4 '>
          <input
          className='rounded-lg px-4 outline-none text-black'
          value={input} 
          onChange={(e)=>setInput(e.target.value)} 
          type="text" 
          placeholder='Enter a book name'/>
          <button
          onClick={fetchBooks}
          className='bg-emerald-400 p-2 rounded-lg font-semibold'>
              Search
          </button>
        </div>
      </div>
      <div className='min-h-[80vh] '>
        {loading ? 
          <>
            <div className='h-[80vh] w-[100%] flex items-center justify-center '>
                <p className=' text-3xl font-bold tracking-wide'>{loadingText}</p>
            </div>
          </> : null
        }
        {
          books && books.length>0&&(
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4'>
              {books.map((item,index)=>(
              <BookDiv item={item} key={index}/>
              ))}
            </div>
          )
        }
      </div>
    </>
  )
}

export default SearchABook