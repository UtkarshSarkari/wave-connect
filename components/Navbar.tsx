import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import MobileNav from './MobileNav'
import { SignedIn, UserButton } from '@clerk/nextjs'
import { dark, shadesOfPurple } from '@clerk/themes'

export default function Navbar() {
  return (
    <div className='flex items-center justify-between fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-10'>
      <Link href="/" className='flex items-center gap-1'>
        <Image src="/icons/video-camera.png" width={34} height={34} alt='logo' className='max-sm:size-10' />
        <p className="text-lg font-semibold text-white max-sm:hidden">WaveConnect</p>
      </Link>

      <div className="flex items-center justify-between gap-5">
      <MobileNav />
      <SignedIn>
        <UserButton appearance={{
          baseTheme: shadesOfPurple
        }} /> 
      </SignedIn>
      </div>
    </div>
  )
}
