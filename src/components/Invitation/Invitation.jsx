"use client";
import HTMLFlipBook from "react-pageflip"
import {useEffect, useRef, useState} from "react";
import FadeContent from "@/components/FadeContent/FadeContent";
import cover from "@/assets/cover.png";
import cover2 from "@/assets/bookcover.png";
import corner from "@/assets/corner.png";
import wax from "@/assets/wax.png";
import bookpage from "@/assets/bookpage.jpeg";
// import venue from "@/assets/venue.jpg";
import venue from "@/assets/venue2.png";
import std from "@/assets/datesavethedate.png";
import { cinzel, greatVibes, magnificChaos, mathilda, merriweather, mutiara } from "@/utils/fonts";
import clsx from "clsx";
import TextType from "../TextType/TextType";

const Invitation = () => {
    const [page, setPage] = useState(1);
    const [tilted, setTilted] = useState(true);
    const [zoomed, setZoomed] = useState(false);
    const [smallScreen, setSmallScreen] = useState(true);
    const flipBookRef = useRef(null);
    useEffect(() => {
        setTimeout(() => { setTilted(false)}, 1000);
        setSmallScreen(window.innerWidth < 700);
    }, [])

    useEffect(() => {
        if(!smallScreen) {
            setZoomed(true)
        }
    }, [smallScreen])
    return (
        <div className="container mx-auto max-w-[700px] justify-center items-center py-10">
            <FadeContent blur={true} duration={700} easing="ease-out" initialOpacity={0}>
                <HTMLFlipBook
                    width={350}
                    height={525}
                    ref={flipBookRef}
                    className={clsx(`transition-all duration-1800 max-h-[585px] lg:max-h-none`,
                       { 
                        'scale-120 -rotate-20' : tilted,
                        'scale-130' : zoomed
                       }
                    )}
                    style={{
                        maxHeight: 525,
                        right: page === 1 && !smallScreen ? 175 : 0,
                        position: 'relative'
                    }}
                    startPage={0}
                    size="fixed"
                    onFlip={(e) => {
                        const newPage = e.data + 1;
                        setPage(newPage);
                    }}
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
                    </div>
                    
                    <div className="bg-white w-full h-full">
                        <div className="absolute w-full h-full">
                            <img src={cover2.src} className="w-full h-full" />
                        </div>
                        <div className="relative w-full h-full flex items-center mx-auto max-w-[200px] justify-center">
                            <FadeContent startOnVisible={true} delay={700}>
                                <p className={clsx(magnificChaos.className, "text-6xl text-shadow-[0px_1px_black] text-center text-primary")}>You are invited</p>
                            </FadeContent>
                        </div>
                    </div>
                    <div className="relative bg-white w-full h-full">
                        <img src={corner.src} className="w-[100px] absolute top-1 left-1" />
                        <img src={corner.src} className="w-[100px] rotate-180 absolute bottom-1 right-1" />
                        <img src={wax.src} className="w-[50px] absolute -translate-x-1/2 left-1/2 top-4" />
                        <div className="absolute w-full h-full">
                            <img src={bookpage.src} className="w-full h-full opacity-20" />
                        </div>
                        <div className="relative w-full h-full flex flex-col items-center mt-4 justify-center">
                            <TextType
                                text={["Save the Date"]}
                                showCursor={false}
                                startOnVisible={true}
                                textColors={["#ad8d29"]}
                                // textColors={["#ad8d29"]}
                                initialDelay={400}
                                typingSpeed={50}
                                className={clsx(magnificChaos.className, "text-4xl text-shadow-[0px_1px_black]")}
                            />
                            <TextType
                                text={["for the Wedding of"]}
                                showCursor={false}
                                startOnVisible={true}
                                textColors={["#ad8d29"]}
                                initialDelay={1400}
                                typingSpeed={50}
                                className={clsx(cinzel.className, "text-xs font-semibold")}
                            />
                            <FadeContent startOnVisible={true} delay={3200} initialYPosition={20} className="w-full">
                                <div className="flex gap-2 max-w-[calc(100%-60px)] mx-auto mt-4 items-center justify-center">
                                    <div className="flex flex-col gap-4 text-center">
                                            <div className="flex items-center justify-center relative rounded-full aspect-square mx-auto w-[120px] bg-primary">
                                                <p className="text-white">Image here</p>
                                            </div>
                                        </div>
                                    <div className="flex flex-col gap-4 text-center">
                                            <div className="flex items-center justify-center relative rounded-full aspect-square mx-auto w-[120px] bg-primary">
                                                <p className="text-white">Image here</p>
                                            </div>   
                                    </div>
                                </div>
                            </FadeContent>
                            <TextType
                                text={["  Rolyne and Michael  "]}
                                showCursor={false}
                                startOnVisible={true}
                                textColors={["#ad8d29"]}
                                initialDelay={3400}
                                typingSpeed={50}
                                className={clsx(mutiara.className, "text-2xl tracking-wider font-semibold mt-4 mb-0")}
                            />
                            <FadeContent delay={5000} initialOpacity={0}>
                                <div className="mx-auto w-full max-w-[240px] mt-4">
                                    <img src={std.src} className="w-full" />
                                </div>
                            </FadeContent>
                            <TextType
                                text={["formal invitation to follow"]}
                                showCursor={false}
                                startOnVisible={true}
                                textColors={["#ad8d29"]}
                                initialDelay={5400}
                                typingSpeed={30}
                                className={clsx(mathilda.className, "text-4xl tracking-tighter text-primary text-shadow-[0px_0px_black] mt-4")}
                            />
                        </div>
                    </div>
                    <div className="bg-white w-full h-full">
                        <img src={corner.src} className="w-[100px] absolute top-1 left-1" />
                        <img src={corner.src} className="w-[100px] rotate-180 absolute bottom-1 right-1" />
                        <img src={wax.src} className="w-[50px] absolute -translate-x-1/2 left-1/2 top-4" />
                        <div className="absolute w-full h-full">
                            <img src={bookpage.src} className="w-full h-full opacity-20" />
                        </div>
                        <FadeContent initialOpacity={0} delay={300}>
                            <p className={`${magnificChaos.className} text-4xl text-primary text-center mt-24 text-shadow-[0px_1px_black]`}>The Venue</p>
                        </FadeContent>
                        <FadeContent initialOpacity={0} delay={800} initialYPosition={20}>
                            <div className="flex flex-col gap-4 max-w-[230px] pt-4 pb-2 mx-auto">
                                <img src={venue.src} className="w-full" />
                            </div>
                        </FadeContent>
                        <div className="flex flex-col max-w-[300px] mx-auto">
                            <TextType
                                text={["Blue Moon Los Ilustrados"]}
                                showCursor={false}
                                startOnVisible={true}
                                textColors={["#ad8d29"]}
                                initialDelay={1000}
                                typingSpeed={50}
                                className={clsx(mutiara.className, "text-[21px] font-semibold text-primary text-center text-shadow-[0px_0px_black]")}
                            />
                            <FadeContent initialOpacity={0} delay={3000} initialYPosition={20}>
                                <p className={clsx(cinzel.className, 'text-[10px] text-primary text-center text-shadow-[0px_0px_black]')}>Santa Rosa - Tagaytay Road</p>
                                <p className={clsx(cinzel.className, 'text-[10px] text-primary text-center text-shadow-[0px_0px_black]')}>Silang Cavite 4118</p>
                                <p className={clsx(cinzel.className, 'text-[10px] text-primary text-center text-shadow-[0px_0px_black]')}>Philippines</p>
                            </FadeContent>
                        </div>
                    </div>
                    <div className="bg-white w-full h-full">
                        <img src={corner.src} className="w-[100px] absolute top-1 left-1" />
                        <img src={corner.src} className="w-[100px] rotate-180 absolute bottom-1 right-1" />
                        <img src={wax.src} className="w-[50px] absolute -translate-x-1/2 left-1/2 top-4" />
                        <div className="absolute w-full h-full">
                            <img src={bookpage.src} className="w-full h-full opacity-20" />
                        </div>
                        <FadeContent initialOpacity={0} delay={300}>
                            <p className={`${magnificChaos.className} text-4xl text-primary text-center mt-24 text-shadow-[0px_1px_black]`}>With Love</p>
                        </FadeContent>

                        <div className="flex flex-col max-w-[300px] mx-auto mt-6">
                            <FadeContent initialOpacity={0} delay={1000} initialYPosition={20}>
                                <p className={clsx(cinzel.className, 'text-[10px] text-primary text-center text-shadow-[0px_0px_black]')}>A little note from us to you</p>
                                <p className={clsx(cinzel.className, 'text-[10px] text-primary text-center text-shadow-[0px_0px_black]')}>Our special day is coming through.</p>
                                <p className={clsx(cinzel.className, 'text-[10px] text-primary text-center text-shadow-[0px_0px_black]')}>On 6th December 2026, we’ll say “I do,”</p>
                                <p className={clsx(cinzel.className, 'text-[10px] text-primary text-center text-shadow-[0px_0px_black]')}>And we can’t wait to celebrate with you!</p>
                            </FadeContent>
                        </div>

                        <div className="flex flex-col max-w-[300px] mx-auto mt-4">
                            <FadeContent initialOpacity={0} delay={2500} initialYPosition={20}>
                                <p className={clsx(cinzel.className, 'text-[10px] text-primary text-center text-shadow-[0px_0px_black]')}>We’d love for you to share this time,</p>
                                <p className={clsx(cinzel.className, 'text-[10px] text-primary text-center text-shadow-[0px_0px_black]')}>To laugh, to dance, to toast, to dine.</p>
                                <p className={clsx(cinzel.className, 'text-[10px] text-primary text-center text-shadow-[0px_0px_black]')}>Though travel and stay we can’t provide,</p>
                                <p className={clsx(cinzel.className, 'text-[10px] text-primary text-center text-shadow-[0px_0px_black]')}>We hope you’ll stand with us, by our side.</p>
                            </FadeContent>
                        </div>

                        <div className="flex flex-col max-w-[300px] mx-auto mt-4">
                            <FadeContent initialOpacity={0} delay={4000} initialYPosition={20}>
                                <p className={clsx(cinzel.className, 'text-[10px] text-primary text-center text-shadow-[0px_0px_black]')}>A formal invite shall soon appear,</p>
                                <p className={clsx(cinzel.className, 'text-[10px] text-primary text-center text-shadow-[0px_0px_black]')}>With all the details, full and clear.</p>
                                <p className={clsx(cinzel.className, 'text-[10px] text-primary text-center text-shadow-[0px_0px_black]')}>But for today, we gently say -</p>
                                <p className={clsx(cinzel.className, 'text-[10px] text-primary text-center text-shadow-[0px_0px_black]')}>Kindly save our wedding day.</p>
                            </FadeContent>
                        </div>

                        <div className="flex flex-col max-w-[300px] mx-auto mt-4">
                            <TextType
                                text={["Rolyne and Michael"]}
                                showCursor={false}
                                startOnVisible={true}
                                textColors={["#ad8d29"]}
                                initialDelay={5500}
                                typingSpeed={30}
                                className={clsx(mathilda.className, "text-4xl text-center tracking-tighter text-primary text-shadow-[0px_0px_black] mt-4")}
                            />
                        </div>
                    </div>
                    <div className="bg-white w-full h-full">
                        <div className="absolute w-full h-full">
                            <img src={bookpage.src} className="w-full h-full opacity-20" />
                        </div>
                        <img src={corner.src} className="w-[100px] absolute top-1 left-1" />
                        <img src={corner.src} className="w-[100px] rotate-180 absolute bottom-1 right-1" />
                        <img src={wax.src} className="w-[50px] absolute -translate-x-1/2 left-1/2 top-4" />
                        <div className="relative w-full h-full flex flex-col items-center max-w-[200px] mx-auto justify-center">
                            <p className={`${magnificChaos.className} text-center text-primary text-5xl lg:text-5xl text-shadow-[0px_1px_black]`}>RSVP Form here</p>
                        </div>
                    </div>
                </HTMLFlipBook>
            </FadeContent>
            <button className="relative opacity-0 rounded-full bg-white px-4 py-2 text-gray-800 cursor-pointer hidden lg:block mx-auto mt-10">Zoom {zoomed ? 'Out' : 'In'}</button>
        </div>
    )
}

export default Invitation;