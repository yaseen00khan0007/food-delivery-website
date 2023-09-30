import React from 'react'

function Navbar() {
  return (
    <>
    <div className='flex flex-row bg-yellow-500 w-full  '>
        <img  className='w-10  h-10 rounded-md m-10' src="https://images.unsplash.com/photo-1531928351158-2f736078e0a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="" />
        <li className=' list-none p-10'><a className='hover:bg-white p-2 rounded-lg' href="/">Get the app</a></li>
        <li className=' list-none p-10'><a className='hover:bg-white p-2 rounded-lg' href="/">Investor detail</a></li>
        <li className=' list-none p-10'><a className='hover:bg-white p-2 rounded-lg' href="/">Add resturant</a></li>
        <button className='bg-black     rounded-lg m-10 pl-5 pr-5 pt-2 pb-3  ml-96 text-white'>Login</button>
        <button className='bg-black  rounded-lg text-white m-10 pl-5 pr-5 pt-2 pb-3 '>Sigup</button>
    </div>
    </>
  )
}

export default Navbar
