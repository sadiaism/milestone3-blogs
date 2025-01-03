
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


const page = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-[24px] pb-[24px] pt-[24px] bg-slate-300'>
        {/* 1st col */}
        <div className='flex flex-col gap-[24px] justify-center items-center'>
            <Image 
            src={"/images/hall-img.jpeg"}
            alt="image"
            width={400}
            height={400}/>

            <h1>The interior Hall</h1>
           <h2 className='text-center'>An interior hall is a versatile and significant space in any building, typically serving as a central area that connects various rooms or sections.....</h2>

          <Link href={"/blog/1"}><button className='w-[300px] h-[60px] bg-[#000000] text-[#FFFFFF] p-[12px] rounded-2xl hover:bg-slate-500'>View More</button></Link>
        </div>

        {/* 2nd col */}
        <div className='flex flex-col gap-[24px] justify-center items-center'>
            <Image 
            src={"/images/bed-img.jpeg"}
            alt="image"
            width={350}
            height={400}/>

            <h1>The interior bed</h1>
           <h2 className='text-center'>An interior bed is a central element of bedroom design, providing both functional and aesthetic value to the space.....</h2>
           <Link href={"/blog/2"}><button className='w-[300px] h-[60px] bg-[#000000] text-[#FFFFFF] p-[12px] rounded-2xl hover:bg-slate-500'>View More</button></Link>
        </div>
      
       {/* 3rd col */}
       <div className='flex flex-col gap-[24px] justify-center items-center'>
            <Image 
            src={"/images/din-img.jpeg"}
            alt="image"
            width={400}
            height={400}/>

            <h1>The interior DiningTable</h1>
           <h2 className='text-center'>An interior dining table is one of the most important pieces of furniture in a home, especially in dining rooms, kitchens, and open-concept living spaces.....</h2>
           <Link href={"/blog/3"}><button className='w-[300px] h-[60px] bg-[#000000] text-[#FFFFFF] p-[12px] rounded-2xl hover:bg-slate-500'>View More</button></Link>
        </div>

        {/* 4th col */}
       <div className='flex flex-col gap-[24px] justify-center items-center'>
            <Image 
            src={"/images/kit-img.jpeg"}
            alt="image"
            width={400}
            height={400}/>

            <h1>The interior kitchen</h1>
           <h2 className='text-center'>An interior kitchen blog focuses on the art and functionality of creating beautiful and efficient kitchen spaces. It covers a wide range of topics, including.....</h2>
           <Link href={"/blog/4"}><button className='w-[300px] h-[60px] bg-[#000000] text-[#FFFFFF] p-[12px] rounded-2xl hover:bg-slate-500'>View More</button></Link>
        </div>

        {/*5th col */}
       <div className='flex flex-col gap-[24px] justify-center items-center'>
            <Image 
            src={"/images/tv-img.jpeg"}
            alt="image"
            width={400}
            height={400}/>

            <h1>The interior TV</h1>
           <h2 className='text-center'>An interior TV blog focuses on creative and functional ways to integrate televisions into home decor and living spaces.....</h2>
           <Link href={"/blog/5"}><button className='w-[300px] h-[60px] bg-[#000000] text-[#FFFFFF] p-[12px] rounded-2xl hover:bg-slate-500'>View More</button></Link>
        </div>

        {/* 6th col */}
       <div className='flex flex-col gap-[24px] justify-center items-center'>
            <Image 
            src={"/images/mak-img.jpeg"}
            alt="image"
            width={250}
            height={200}/>

            <h1>The interior makeup Vanity </h1>
           <h2 className='text-center'>An interior makeup vanity blog is a delightful space to explore ideas for designing and organizing makeup vanities that blend functionality with elegance.....</h2>
           <Link href={"/blog/6"}><button className='w-[300px] h-[60px] bg-[#000000] text-[#FFFFFF] p-[12px] rounded-2xl hover:bg-slate-500'>View More</button></Link>
        </div>
      
    </div>
  )
}

export default page
