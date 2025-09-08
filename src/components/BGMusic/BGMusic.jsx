"use client";
import { useRef, useState } from "react";
import { GiMusicalNotes } from "react-icons/gi";

const BGMusic = () => {
    const [playing, setPlaying] = useState(false);
    const audioRef = useRef(null)

    const handlePlay = () => {
        if(audioRef.current){
            if (audioRef.current?.paused) {
                audioRef.current?.play();
                setPlaying(true);
            } else {
                audioRef.current?.pause();
                setPlaying(false);
            }
        }
        
    }
    return (
        <div className="container relative mx-auto flex items-center justify-center -mt-4">
            <audio ref={audioRef} loop>
                <source src="./bgmusic.mp3" type="audio/mpeg" />
            </audio>
            <button onClick={handlePlay} className="flex gap-2 items-center justify-center text-black cursor-pointer hover:bg-amber-100 bg-white px-4 py-2 rounded-full">
               Now, let the music unfold
            </button>
        </div>
    )
}

export default BGMusic;