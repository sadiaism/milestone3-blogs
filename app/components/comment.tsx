import React from 'react'

const comment = () => {
  return (
    <div className='flex flex-col justify-center items-center'>

        <h1 className='text-[24px] font-semibold'>Comment Section</h1>

        <label htmlFor="name" className='mt-[24px]'>Name</label>
                    <input type="text" placeholder ='Enter your name'
                    className='h-[60px] w-[300px] bg-transparent border border-black p-[12px] '
                    id="name" />

        <label htmlFor="comment" className='mt-[24px]'>Comments</label>
                    <input type="text" placeholder="Enter your comments" className='h-[100px] w-[300px]  bg-transparent border border-black p-[12px]' id="comments" />

                    <button className='bg-black text-[#FFFFFF] border border-black w-[300px] h-[40px] mt-[24px] hover:bg-slate-600'>Submit</button>

      
    </div>
  )
}

export default comment
