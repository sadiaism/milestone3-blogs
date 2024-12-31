import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <div className="bg-[url('/images/about-img.jpeg')] bg-no-repeat bg-cover p-24">
        <div className='flex justify-center items-center pt-[24px]'><Image src="/images/sadi-img.jpeg" alt="sadia" width={400} height={300}/></div>
        <p className='flex justify-center text-center text-[22px] pt-[32px]' >My name is Sadia Ismail,and I am currently a student in GIAIC,pursuing a Web Development course with a with a focus on 3.0 Metaverse in Artificial Intelligence.This exciting program allows me to explore cutting-edge technologies and develop skills that are shaping the future of the digital world.In this course ,I am progressively learning key tools and technologies such as HTML,CSS,JAVASCRIPT,NEXT.JS,TAILWIND CSS,CUSTOM CSS.I also enter into deeper topics like API ,DATA FETCHING, DYNAMIC ROUTING etc.I am also proud to be a graduate of Karachi University in B.COM.This blog is a reflection of my journey,showcasing my passion for continuous learning and growth.Whether {`you're`} here to learn more about my work,collaborate,or simply explore,I hope you find value in what  I share.Feel free to connect with me {`I'd`} love to discuss ideas,share insights,or collaborator on projects that push the boundaries of {`what's`} possible in web development and metaverse. </p>
      
    </div>
  )
}

export default page
