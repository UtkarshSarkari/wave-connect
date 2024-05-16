import { SignUp } from '@clerk/nextjs'
import React from 'react'

export default function SignUpPage() {
  return (
    <div className='h-screen w-screen flex items-center justify-center'>
        <SignUp />
    </div>
  )
}
