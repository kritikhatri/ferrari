'use client';
import { useRef } from 'react';
import { useScroll, useMotionValueEvent } from 'framer-motion';

export default function ZondaScrollCanvas() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (videoRef.current && videoRef.current.readyState >= 2) {
      const duration = videoRef.current.duration;
      if (!isNaN(duration) && isFinite(duration)) {
        // Fast scrub the video frame to match scroll progress natively
        videoRef.current.currentTime = latest * duration;
      }
    }
  });

  return (
    <div className="fixed inset-0 pointer-events-none -z-10 bg-black">
      <video 
        ref={videoRef} 
        src="/ferrari.mp4" 
        className="w-full h-full object-cover" 
        muted 
        playsInline 
        preload="auto"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />
    </div>
  );
}
