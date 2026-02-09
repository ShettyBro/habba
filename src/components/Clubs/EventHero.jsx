import React from 'react'
import ScrollStackDemo from '../Clubs/ScrollStackDemo'
import AnimatedContent from '../gsap/AnimatedContent'

const EventHero = () => {
  return (
    <div className=''>
        <AnimatedContent distance={70} direction="vertical" reverse={false} duration={1}  ease="power3.out"  initialOpacity={0} animateOpacity  scale={1}  threshold={0.2}  delay={0.3}>
        <div>
      <ScrollStackDemo/>
        </div>
      </AnimatedContent>
    </div>
  )
}

export default EventHero
