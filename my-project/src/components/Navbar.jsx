import React from 'react'

const Navbar = () => {
  return (
    <div  className='max-w-screen-2xl   px-7 mx-auto py-6   flex gap-10 '> 
    <img  src="https://cdn.prod.website-files.com/62df9251ae9124d9d726bcb9/62dfc1419247bccdd5a2dd1b_Tools.svg" alt="" />
    <div className='ml-15 flex gap-20'>
         {
        [
        {
            id:1,
            name: "Home"
        },
        {
            id:2,
            name: "Work"
        },
         {
            id:3,
            name: "Culture"
        },
         {
            id:4,
            name: ""
        }, {
            id:5,
            name: "News"
        },
        ].map((items,idx)=>{
             return (
               
             <a key={items.id} href="">{items.name}
             <span className='inline-block h-[10px] w-[10px]  bg-green-600'></span> </a>
            )
        })
    }
    </div>
    </div>
  )
}

export default Navbar
