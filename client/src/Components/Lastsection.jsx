import React from 'react'

function Lastsection() {
  return (
    <>
    <div className='grid grid-cols-3 bg-green-300 w-full h-52 p-20'>
        <div className='flex flex-col '>
            <span>Menu</span>
            <span>Burger</span>
            <span>Pizza</span>
            <span>Salad</span>

        </div>
        <div className='flex flex-col '>
            <span>About</span>
            <span>Our story</span>
            <span>Cheif</span>
            <span>Sustainability</span>

        </div>
        <div className='flex flex-col '>
            <span>Help</span>
            <span>FAQ</span>
            <span>Contact</span>
            <span>Privacy</span>

        </div>
    </div>
    <div className='flex flex-row justify-center items-center bg-black w-full h-14'>
        <span className=' text-white'>@2023 Copyright issues  </span>
    </div>
    </>
  )
}

export default Lastsection
