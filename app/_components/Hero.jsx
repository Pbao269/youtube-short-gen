import React from 'react'
import { Button } from '@/components/ui/button'

function Hero() {
  return (
    <div className='py-12 flex flex-col gap-4 items-center
     justify-center my-12 md:px-16 lg:px-24 xl:px-32'>
      <h2 className='text-5xl font-bold text-center'>AI Youtube Short Generator</h2>
      <p className='text-2xl text-muted-foreground my-4 text-center max-w-2xl'>AI-generated shorts with scripts, images, and audio tracks. Beginner-friendly for your early Youtube career and creation.</p>
      <div className='flex items-center'><Button size='lg'>Get Started</Button></div>
    </div>
  )
}

export default Hero
