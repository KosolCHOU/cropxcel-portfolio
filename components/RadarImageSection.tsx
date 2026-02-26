'use client';

import React from 'react';

/**
 * RadarImageSection Component
 * 
 * A high-tech satellite radar scanning animation with a centered image.
 * Features three concentric rings with different animations behind a static image.
 */

interface RadarImageSectionProps {
  imageSrc?: string;
  imageAlt?: string;
  className?: string;
}

export default function RadarImageSection({
  imageSrc = '/images/phone-mockup.png',
  imageAlt = 'Phone Mockup',
  className = '',
}: RadarImageSectionProps) {
  return (
    <section className={`relative bg-white py-20 overflow-hidden ${className}`}>
      <div className="container mx-auto px-4">
        <div className="relative flex items-center justify-center min-h-[350px] lg:min-h-[600px]">

          {/* Animated Radar Rings - Behind the image */}
          <div className="absolute inset-0 flex items-center justify-center">

            {/* Outer Ring - Pulse/Ping Animation */}
            <div className="absolute w-[500px] h-[500px] rounded-full border-2 border-transparent bg-gradient-to-r from-emerald-500 to-teal-400 opacity-20 animate-ping-slow"
              style={{
                backgroundClip: 'padding-box',
                WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                WebkitMaskComposite: 'xor',
                maskComposite: 'exclude',
                padding: '2px'
              }}
            />

            {/* Middle Ring - Counter-clockwise Rotation */}
            <div className="absolute w-[380px] h-[380px] rounded-full animate-reverse-spin-slower">
              <div className="w-full h-full rounded-full border-2 border-transparent bg-gradient-to-r from-emerald-500 to-teal-400"
                style={{
                  backgroundClip: 'padding-box',
                  WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'xor',
                  maskComposite: 'exclude',
                  padding: '2px'
                }}
              >
                {/* Marker/Indicator on middle ring */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="w-3 h-3 bg-teal-400 rounded-full shadow-lg shadow-teal-400/50" />
                </div>
              </div>
            </div>

            {/* Inner Ring - Clockwise Rotation */}
            <div className="absolute w-[260px] h-[260px] rounded-full animate-spin-slow">
              <div className="w-full h-full rounded-full border-2 border-transparent bg-gradient-to-r from-emerald-500 to-teal-400"
                style={{
                  backgroundClip: 'padding-box',
                  WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'xor',
                  maskComposite: 'exclude',
                  padding: '2px'
                }}
              >
                {/* Marker/Indicator on inner ring */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full shadow-lg shadow-emerald-500/50" />
                </div>
              </div>
            </div>

            {/* Center Glow Effect */}
            <div className="absolute w-32 h-32 bg-gradient-to-r from-emerald-500/20 to-teal-400/20 rounded-full blur-2xl animate-pulse" />
          </div>

          {/* Static Image - In Front */}
          <div className="relative z-10 flex items-center justify-center">
            <div className="relative">
              {/* Subtle glow behind image */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-teal-400/10 blur-xl rounded-lg" />

              {/* The Image */}
              <img
                src={imageSrc}
                alt={imageAlt}
                className="relative w-auto h-[300px] lg:h-[400px] object-contain drop-shadow-2xl"
              />
            </div>
          </div>

          {/* Optional: Scanning Line Effect */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-teal-400/50 to-transparent animate-scan" />
          </div>
        </div>
      </div>
    </section>
  );
}
