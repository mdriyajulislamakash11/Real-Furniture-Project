import React from 'react'
import bannerImage from"../../assets/banner.png"

const Hero = () => {
  return (
    <div className='h-screen relative bg-cover bg-no-repeat bg-center' style={{backgroundImage: `url(${bannerImage})`}}>Hero</div>
  )
}

export default Hero