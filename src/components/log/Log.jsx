"use client";
import { useState } from "react";
import ReactPlayer from "react-player";
import { HiSpeakerWave } from "react-icons/hi2";
import { HiSpeakerXMark } from "react-icons/hi2";


const Music = () => {
  const [playing, setPlaying] = useState(false);

  const toggleMusic = () => {
    setPlaying(!playing);
  };

  return (
    <div className="flex flex-col items-center justify-center ">
      
      {/* YouTube Musiqa Player */}
      <div className="hidden">
        <ReactPlayer
          url="https://youtu.be/GGxF1FvIyfc?si=s8vpxVdIFwf1UPyn"
          playing={playing}
          loop
          volume={0.5}
          />
      </div>

      {/* Musiqa tugmasi */}
      <button
        onClick={toggleMusic}
        className="p-3 rounded-[50px] bg-blue-500 text-white  shadow-md hover:bg-blue-600 transition"
        >
        {playing ? 
        <HiSpeakerXMark />
 : <HiSpeakerWave />}
      </button>
    </div>
  );
};

export default function Home() {
  return <Music />;
}
