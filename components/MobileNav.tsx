"use client";
import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { sidebarlinks } from "@/constants";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function MobileNav() {
  const pathname = usePathname();
  return (
    <div className="w-full max-w-[264px]">
      <Sheet>
        <SheetTrigger asChild>
          <Image
            src="/icons/hamburger.svg"
            width={36}
            height={36}
            alt="mobileMenuIcon"
            className="cursor-pointer sm:hidden"
          />
        </SheetTrigger>
        <SheetContent side="left" className="border-none bg-dark-1">
          <Link href="/" className="flex items-center gap-1">
            <Image
              src="/icons/video-camera.png"
              width={30}
              height={30}
              alt="logo"
              className="max-sm:size-10"
            />
            <p className="text-lg font-semibold text-white">WaveConnect</p>
          </Link>
          <div className="flex h-[calc(100vh-72px)] flex-col justify-between overflow-y-auto">
            <SheetClose asChild>
              <div className="flex h-full flex-col gap-6 pt-16 text-white">
                {sidebarlinks.map((link) => {
                  const isActive = pathname === link.route;

                  return (
                    <SheetClose asChild key={link.label}>
                      <Link
                        href={link.route}
                        key={link.label}
                        className={cn(
                          "flex gap-4 items-center p-4 rounded-lg w-full max-w-60",
                          { "bg-violet-500 transition-all": isActive }
                        )}
                      >
                        <Image
                          src={link.image}
                          height={20}
                          width={20}
                          alt={link.label}
                        />
                        <p className="">{link.label}</p>
                      </Link>
                    </SheetClose>
                  );
                })}
              </div>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
