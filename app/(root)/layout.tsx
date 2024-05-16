import { StreamVideoProvider } from '@/providers/StreamClientProvider'
import { Metadata } from 'next';
import React, { ReactNode } from 'react'

export const metadata: Metadata = {
  title: "Wave Connect",
  description: "A Video Conferencing App",
  icons: {
    icon: '/icons/video-camera.png'
  }
};

export default function RootLayout({children} : {children : ReactNode}) {
  return (
    <div>
      <StreamVideoProvider>
        {children}
      </StreamVideoProvider>
    </div>
  )
}
