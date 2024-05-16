import Image from 'next/image'
import React from 'react'

export default function Loader() {
  return (
    <div className='flex items-center justify-center h-screen w-full'>
        <Image className='animate-pulse' src='/icons/video-camera.png' height={50} width={50} alt='loading' />
    </div>
  )
}
