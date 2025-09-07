"use client";
import HTMLFlipBook from "react-pageflip"
import {useRef, useState} from "react";
import FadeContent from "@/components/FadeContent/FadeContent";
import cover from "@/assets/bookcover.jpeg";
import bookpage from "@/assets/bookpage.jpeg";
import venue from "@/assets/venue.jpg";
import { fleur, greatVibes } from "@/utils/fonts";
import GradientText from "@/components/GradientText/GradientText";
import clsx from "clsx";

const Invitation = () => {
    const [page, setPage] = useState(1);
    const flipBookRef = useRef(null);
    const isDesktop = window.innerWidth > 768;
    const width = isDesktop ? 768 : window.innerWidth - 40;
    const height =
        window.innerHeight - 80 > (width / 5) * 7
        ? (width / 2) * 3
        : window.innerHeight - 150;

    return (
        <div className="container mx-auto max-w-[900px] py-10">
            <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
                <HTMLFlipBook
                    width={width}
                    height={height}
                    ref={flipBookRef}
                    className={""}
                    style={{
                        minHeight: 0,
                        height: height,
                    }}
                    startPage={0}
                    size="fixed"
                    onFlip={(e) => setPage(e.data + 1)}
                    minWidth={0}
                    maxWidth={768}
                    minHeight={0}
                    maxHeight={1075}
                    drawShadow={true}
                    flippingTime={1000}
                    usePortrait={true}
                    startZIndex={0}
                    autoSize={true}
                    maxShadowOpacity={0.2}
                    showCover={true}
                    mobileScrollSupport={true}
                    clickEventForward={true}
                    useMouseEvents={true}
                    swipeDistance={30}
                    showPageCorners={true}
                    disableFlipByClick={false}
                >
                    <div className="bg-white w-full h-full">
                        <div className="absolute w-full h-full">
                            <img src={cover.src} className="w-full h-full" />
                        </div>
                        <div className="relative w-full h-full flex items-center mx-auto max-w-[200px] lg:max-w-[400px] justify-center">
                            <GradientText animationSpeed={10} colors={["#AE8625", "#F7EF8A", "#D2AC47", "#EDC967"]} className={`${fleur.className} text-5xl lg:text-8xl text-yellow-400 text-center`}>You're Invited</GradientText>
                        </div>
                    </div>
                    <div className="bg-white w-full h-full">
                        <div className="absolute w-full h-full">
                            <img src={bookpage.src} className="w-full h-full opacity-20" />
                        </div>
                        <div className="relative w-full h-full flex flex-col items-center justify-center">
                            <GradientText animationSpeed={10} colors={["#AE8625", "#D2AC47", "#EDC967"]} className={`${fleur.className} text-5xl lg:text-7xl`}>Save the Date</GradientText>
                            <GradientText animationSpeed={10} colors={["#AE8625", "#D2AC47", "#EDC967"]} className={`${fleur.className} text-3xl lg:text-4xl`}>for the Wedding of</GradientText>
                            <div className="grid grid-cols-2 gap-4 max-w-[calc(100%-60px)] mx-auto mt-4">
                               <div className="flex flex-col gap-4 text-center">
                                    <div className="flex items-center justify-center relative rounded-full aspect-square mx-auto w-[120px] lg:w-[200px] bg-amber-200">
                                        <p className="text-black">Image here</p>
                                    </div>
                                    <p className={clsx(greatVibes.className, 'text-xl text-gray-900')}>Groom Name</p>                   
                                </div>
                               <div className="flex flex-col gap-4 text-center">
                                    <div className="flex items-center justify-center relative rounded-full aspect-square mx-auto w-[120px] lg:w-[200px] bg-amber-200">
                                        <p className="text-black">Image here</p>
                                    </div>   
                                    <p className={clsx(greatVibes.className, 'text-xl text-gray-900')}>Bride Name</p>                   
                               </div>
                            </div>
                            <GradientText animationSpeed={10} colors={["#AE8625", "#D2AC47", "#EDC967"]} className={`${fleur.className} text-xl lg:text-2xl mt-8`}>October 27, 2025</GradientText>
                        </div>
                    </div>
                    <div className="bg-white w-full h-full">
                        <div className="absolute w-full h-full">
                            <img src={bookpage.src} className="w-full h-full opacity-20" />
                        </div>
                        <div className="flex flex-col gap-4 max-w-[600px] p-10 mx-auto mt-4">
                            <img src={venue.src} className="w-full" />
                        </div>
                        <div className="flex flex-col max-w-[600px] mx-auto">
                            <GradientText animationSpeed={10} colors={["#AE8625", "#F7EF8A", "#D2AC47", "#EDC967"]} className={`${fleur.className} text-4xl lg:text-5xl text-yellow-400 text-center`}>Venue Name Here</GradientText>
                            <p className={clsx(greatVibes.className, 'text-lg text-gray-800 text-center')}>Nam sit amet velit erat. Quisque id metus vitae felis posuere lacinia eu ac ligula. In a neque orci. Vestibulum a imperdiet mauris. Fusce eget lorem dolor. Ut sed elit justo. Praesent malesuada hendrerit semper. Nunc posuere vulputate diam at tristique. Vestibulum auctor tellus tellus, ac dictum ipsum mollis eget.</p>
                        </div>
                    </div>
                    <div className="bg-white w-full h-full">
                        <div className="absolute w-full h-full">
                            <img src={bookpage.src} className="w-full h-full opacity-20" />
                        </div>
                        <div className="relative w-full h-full flex flex-col items-center justify-center">
                            <GradientText animationSpeed={10} colors={["#AE8625", "#D2AC47", "#EDC967"]} className={`${fleur.className} text-5xl lg:text-7xl`}>RSVP Form here</GradientText>
                            
                        </div>
                    </div>
                </HTMLFlipBook>
            </FadeContent>
        </div>
    )
}

export default Invitation;