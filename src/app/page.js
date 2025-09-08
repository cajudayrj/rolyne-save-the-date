"use client";
import BGMusic from "@/components/BGMusic/BGMusic";
import dynamic from "next/dynamic";
import { useEffect } from "react";

const Inv = dynamic(
  () => import('@/components/Invitation/Invitation'),
  { ssr: false }
)

export default function Home() {
  return (
    <div className="font-sans items-center justify-items-center min-h-screen gap-16">
      <main className="w-full flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="w-full mx-auto h-screen flex flex-col justify-center items-center">
          <div className="absolute w-full h-full">
            <video src="./vidbg.mp4" autoPlay muted loop className="w-full h-full object-center object-cover"></video>
          </div>
          <Inv />
          <BGMusic />
        </div>
      </main>
      
    </div>
  );
}
