"use client";
import React, { useState, useEffect } from "react";
import MeetingTypeList from "@/components/MeetingTypeList";

export default function Home() {
  const [time, setTime] = useState(() => {
    const now = new Date();
    return now.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
  });

  const date = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
    new Date()
  );

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" })
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex size-full flex-col gap-10 text-white">
      <div className="h-[300px] w-full rounded-md bg-hero bg-cover">
        <div className="flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11">
          <h2 className="glassmorphism max-w-[270px] rounded-sm py-2 text-center">
            Upcoming Meeting at: 12:30 PM
          </h2>
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-semibold lg:text-7xl">{time}</h1>
            <p className="text-lg font-medium text-sky-1 lg:text-2xl">{date}</p>
          </div>
        </div>
      </div>
      <MeetingTypeList />
    </div>
  );
}
