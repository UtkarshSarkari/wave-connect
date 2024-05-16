'use client'
import { sidebarlinks } from '@/constants'
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import React from 'react'

export default function Sidebar() {

    const pathname = usePathname();

  return (
    <div className='sticky left-0 top-0 flex h-screen w-fit flex-col justify-between bg-dark-1 p-6 pt-28 text-white max-sm:hidden lg:w-[264px]'>
        <div className="flex flex-col gap-6">
            {
                sidebarlinks.map((link)=>{
                    const isActive = pathname === link.route;

                    return (
                        <Link href={link.route} key={link.label} className={cn('flex gap-4 items-center p-4 rounded-lg justify-start', {'bg-violet-500 transition-all': isActive})}>
                            <Image src={link.image} height={24} width={24} alt={link.label} />
                            <p className='max-lg:hidden'>{link.label}</p>
                        </Link>
                    )
                })
            }
        </div>
    </div>
  )
}
