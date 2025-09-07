"use client";
import BGMusic from "@/components/BGMusic/BGMusic";
import Galaxy from "@/components/Galaxy/Galaxy";
import dynamic from "next/dynamic";

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
            <Galaxy 
              mouseRepulsion={true}
              mouseInteraction={false}
              density={1.5}
              glowIntensity={0.3}
              saturation={1}
              hueShift={0}
            />
          </div>
          <Inv />
          <BGMusic />
        </div>
      </main>
      
    </div>
  );
}
