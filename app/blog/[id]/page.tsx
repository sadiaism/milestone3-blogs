"use client"
import React from 'react'
import Image from 'next/image'
import Comment from '@/app/components/comment'

const blog=[
  {
    image:"/images/hall-img.jpeg",
    id:"1",
    title: "The interior Hall",
    description:"An interior hall is a versatile and significant space in any building, typically serving as a central area that connects various rooms or sections. {`It’s`} a place that can be designed to make a lasting first impression, set the tone for the rest of the home, or simply provide a functional space for circulation. When it comes to interior design, the hall often plays a key role in enhancing the overall aesthetics, comfort, and usability of the space.The entry hall is the first point of contact with the home. It often features a welcoming atmosphere, perhaps with a console table, lighting, and decorative accessories that set the mood for the rest of the house The choice of flooring in a hall should balance aesthetics with functionality. Common choices include hardwood, tile, stone, or carpet. Designers may choose to use rugs or runners to add color and warmth to the space. ",
    price:"$120",
},
{
  image:"/images/bed-img.jpeg",
  id:"2",
  title: "The interior bed",
  description:"An interior bed is a central element of bedroom design, providing both functional and aesthetic value to the space. It is not just a place for sleep, but also a focal point of the room's design, contributing to the overall atmosphere and style. The bed is often the largest and most prominent piece of furniture in a bedroom, and its design can significantly influence the mood and functionality of the space. These beds have frames covered with fabric or leather, adding a soft, luxurious look and feel to the bedroom. Upholstered headboards, often padded for comfort, are particularly popular in modern and chic designs.The interior bed is a central piece in bedroom design, combining comfort, style, and functionality. Its design elements, materials, and size should be chosen based on both personal preferences and the {`room’s`} layout.",
  price:"$120",
},
{
  image:"/images/din-img.jpeg",
  id:"3",
  title: "The interior diningtable",
  description:"An interior dining table is one of the most important pieces of furniture in a home, especially in dining rooms, kitchens, and open-concept living spaces. It serves as the central gathering place for meals, socializing, and family time. The dining table is not only functional but also plays a crucial role in setting the tone and style of the entire room. Whether it's an intimate meal for two or a large family gathering, the design of the dining table can influence the atmosphere, flow, and functionality of the space.Square tables are less common but can be very stylish in smaller rooms or apartments. They work well for 4-6 people, offering an even, symmetrical shape.The seating around a dining table is equally important. Dining chairs come in a variety of designs, materials, and shapes, including upholstered, wooden, or metal chairs. The style of chair should complement the table's design.",
  price:"$120",
},
{
  image:"/images/kit-img.jpeg",
  id:"4",
  title: "The interior kitchen",
  description:"An interior kitchen blog focuses on the art and functionality of creating beautiful and efficient kitchen spaces. It covers a wide range of topics, including: Explore the latest kitchen styles, from modern minimalism and farmhouse charm to industrial chic and Scandinavian simplicity.Optimize kitchen spaces with smart layouts, whether it's an open-concept design, U-shaped, L-shaped, or galley kitchens. Highlight the impact of colors, from vibrant accent walls to neutral tones that create a timeless appeal.Discuss countertops, backsplashes, cabinetry, flooring, and appliances, emphasizing quality, durability, and aesthetics.Share insights on task lighting, ambient lighting, and decorative fixtures that enhance the kitchen's functionality and atmosphere.Emphasize eco-friendly materials, energy-efficient appliances, and sustainable design practices.",
  price:"$120",
},
{
  image:"/images/tv-img.jpeg",
  id:"5",
  title: "The interior TV",
  description:"An interior TV blog focuses on creative and functional ways to integrate televisions into home decor and living spaces. It highlights ideas that balance technology with aesthetics, ensuring that TVs complement the overall design of a room.Tips on choosing the perfect spot for the TV, whether {`it’s`} wall-mounted, on a stand, or part of a custom entertainment unit.Layout ideas for living rooms, bedrooms, and multi-purpose spaces to maximize comfort and visibility.Discuss ambient, accent, and backlighting options that reduce glare and create a cozy viewing experience.Insights on incorporating smart TVs into home automation systems for a futuristic and clutter-free setup.Compact and multi-functional designs for apartments, condos, and other smaller living spaces.My blog can include inspiration, DIY tutorials, product reviews, and tips for creating a balanced and stylish TV area that enhances any home.",
  price:"$120",
},
{
  image:"/images/mak-img.jpeg",
  id:"6",
  title: "The interior makeup vanity",
  description:"An interior makeup vanity blog is a delightful space to explore ideas for designing and organizing makeup vanities that blend functionality with elegance. It focuses on creating beautiful and practical areas for beauty routines while enhancing the overall decor of a room.Explore diverse styles like classic Hollywood glam, minimalist modern, vintage charm, or contemporary chic.Showcase trending vanity designs with unique materials and finishes.Discuss the importance of proper lighting for makeup application, including natural light, LED mirrors, and adjustable lighting solutions.Highlight smart storage ideas like drawers, organizers, shelves, and hidden compartments for makeup, skincare, and accessories.Share tips for decluttering and maintaining an organized vanity.Suggestions for color palettes that create a relaxing and inspiring vanity area.Adding decorative touches like flowers, artwork, rugs, and personalized elements.",
  price:"$120",
}
];
interface Params{
  id:string
}

const Blog = ({params}:{params:Params}) => {
  const {id} = params;
  const blogItem = blog.find((b) => b.id === id);
  console.log(blogItem);

  if (!blogItem) {
    return(
      <h2>Blog not found</h2>
    )
  }
 
return(
  <div className='flex flex-col justify-center items-center bg-slate-300'>
    
    <Image className="flex justify-center items-center" src={blogItem.image} alt={blogItem.title}width={700}height={300}/>
    <h1>id:{blogItem.id}</h1>
    <p>{blogItem.title}</p>
    <p className='text-center p-[44px]'>{blogItem.description}</p>
    <p className=''>{blogItem.price}</p>
    <div><Comment/></div>
    </div>
   
)
}

export default Blog
