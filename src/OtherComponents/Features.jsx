import React from 'react'

function Features({firstWord,secondWord,para,imgSrc}) {
    // const img = document.querySelectorAll(".feature-img")
    // console.log(img)

    const mouseentered =(e)=>{
        const img = e.currentTarget.querySelector(".feature-img")
        img.classList.add("scale-100");
    }
    const mouseLeaved =(e)=>{
        const img = e.currentTarget.querySelector(".feature-img")
        img.classList.remove("scale-100");
    }
  return (
    <>
      <div
      onMouseEnter={mouseentered}
      onMouseLeave={mouseLeaved}
      className='feature-container h-[20vh] border-b mt-2 flex items-center justify-between px-10'>
            <p className=' gitsi-text outline-text text-4xl uppercase font-bold text-stroke-white'>
                    {firstWord} <span className='text-stroke-emrald'>{secondWord}.</span>
            </p>
            <img className='feature-img h-[100px] scale-0 transition-transform duration-300' src={imgSrc} alt="" />
            <p className='w-[35%] text-xl'>
                {para}
            </p>
        </div>  
    </>
  )
}

export default Features