import React from 'react'
import { 
    ThreeDScrollTriggerContainer, 
    ThreeDScrollTriggerRow 
  } from '../lightswind/3d-scroll-trigger';
import { VIDEOS } from '../../assets/Videos';


const ScrollGallery = () => {
  return (
    <div>
<ThreeDScrollTriggerContainer>
  <ThreeDScrollTriggerRow baseVelocity={5} direction={1}>
    <div className="px-2 py-2">
      <img
        src="https://images.pexels.com/photos/9934462/pexels-photo-9934462.jpeg"
        alt="Item 1"
        className="w-300 h-72 object-cover rounded-lg"
      />
    </div>
    <div className="px-2 py-2">
      <img
        src="https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg"
        alt="Item 2"
        className="w-300 h-72 object-cover rounded-lg"
      />
    </div>
    <div className="px-2 py-2">
      <img
        src="https://images.pexels.com/photos/2486168/pexels-photo-2486168.jpeg"
        alt="Item 3"
        className="w-300 h-72 object-cover rounded-lg"
      />
    </div>
  </ThreeDScrollTriggerRow>

  <ThreeDScrollTriggerRow baseVelocity={5} direction={-1}>
    <div className="px-2 py-2">
      <img
        src="https://images.pexels.com/photos/210186/pexels-photo-210186.jpeg"
        alt="Item 4"
        className="w-300 h-72 object-cover rounded-lg"
      />
    </div>
    <div className="px-2 py-2">
      <video
        src={VIDEOS.HERO}
        alt="Item 5"
        className="w-300 h-72 object-cover rounded-lg"
      />
    </div>
    <div className="px-2 py-2">
      <img
        src="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg"
        alt="Item 6"
        className="w-300 h-72 object-cover rounded-lg"
      />
    </div>
  </ThreeDScrollTriggerRow>
</ThreeDScrollTriggerContainer>

    </div>
  )
}

export default ScrollGallery
