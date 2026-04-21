'use client';
import { useRef } from 'react';

export default function ZondaScrollCanvas() {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div className="fixed inset-0 pointer-events-none -z-10 bg-black">
      <video 
        ref={videoRef} 
        src="/ferrari.mp4" 
        className="w-full h-full object-cover" 
        autoPlay
        loop
        muted 
        playsInline 
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/90" />
    </div>
  );
}
