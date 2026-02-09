import React from 'react'
import { IMAGES } from '../../assets/Images'

const TeamHero = () => {
  return (
    <div className='h-screen flex justify-center items-center '>
        <div className='absolute top-0 left-0 w-full bg-black/60 h-screen '></div>
        <img src={IMAGES.GALLERY12} alt="" className='w-full h-full object-cover' />
    </div>
  )
}

export default TeamHero
