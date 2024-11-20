import React from 'react'

function FooterTitle({firstWord,secondWord}) {
  return (
    <>
        <div className='h-[30vh] flex items-center justify-center'>
            <p className=' gitsi-text outline-text text-9xl uppercase font-bold text-stroke-white'>
                {firstWord}<span className='text-stroke-emrald'>{secondWord}.</span>
            </p>
        </div>
    </>
  )
}

export default FooterTitle