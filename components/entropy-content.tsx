"use client"

import { useEffect, useState } from "react"

interface EntropyContentProps {
  entropy: number
  mouseSpeed?: number
  isTyping?: boolean
}

export default function EntropyContent({ entropy, mouseSpeed = 0, isTyping = false }: EntropyContentProps) {
  const [glitchText, setGlitchText] = useState("THE INTERNET")
  const [randomGlitches, setRandomGlitches] = useState<number[]>([])

  useEffect(() => {
    if (entropy > 50) {
      const glitches = [...Array(Math.floor(entropy / 15))].map(() => Math.floor(Math.random() * 12))
      setRandomGlitches(glitches)
    }
  }, [entropy])

  // Calculate distortion values based on entropy
  const letterSpacing = entropy * 0.3
  const blur = entropy * 0.15
  const hueRotate = entropy * 3.6
  const saturation = 100 - entropy * 0.8
  const skew = entropy > 60 ? Math.random() * 10 - 5 : 0

  const additionalBlur = mouseSpeed > 50 ? 5 : 0
  const additionalSkew = isTyping ? Math.random() * 5 - 2.5 : 0

  return (
    <div
      className="relative w-full h-screen flex flex-col items-center justify-center px-4"
      style={{
        filter: `blur(${blur + additionalBlur}px) hue-rotate(${hueRotate}deg) saturate(${saturation}%) contrast(${1 + entropy / 100})`,
        transform: `skewX(${skew + additionalSkew}deg)`,
        transition: "filter 0.3s ease-out, transform 0.2s ease-out",
      }}
    >
      {/* Main heading with glitch corruption */}
      <h1
        className="text-6xl md:text-8xl font-bold text-white text-center mb-8 font-mono"
        style={{
          letterSpacing: `${letterSpacing}px`,
          textShadow:
            entropy > 30
              ? `${Math.random() * 10 - 5}px ${Math.random() * 10 - 5}px 20px rgba(255, 0, 0, 0.5),
                 ${Math.random() * 10 - 5}px ${Math.random() * 10 - 5}px 20px rgba(0, 255, 255, 0.5),
                 ${Math.random() * 10 - 5}px ${Math.random() * 10 - 5}px 20px rgba(255, 0, 255, 0.3)`
              : "none",
          opacity: entropy > 80 ? 0.5 + Math.random() * 0.5 : 1,
          textDecoration: entropy > 70 ? "line-through" : "none",
          mixBlendMode: entropy > 60 ? "screen" : "normal",
        }}
      >
        {glitchText.split("").map((char, i) => (
          <span
            key={i}
            style={{
              display: "inline-block",
              transform:
                randomGlitches.includes(i) && entropy > 50
                  ? `translateY(${Math.random() * 20 - 10}px) scaleX(${Math.random() * 0.5 + 0.5})`
                  : "none",
              opacity: randomGlitches.includes(i) && entropy > 50 ? Math.random() * 0.5 + 0.5 : 1,
              color:
                randomGlitches.includes(i) && entropy > 50
                  ? ["#ff0000", "#00ff00", "#0000ff", "#ffff00"][Math.floor(Math.random() * 4)]
                  : "white",
              transition: "all 0.1s ease-out",
            }}
          >
            {char}
          </span>
        ))}
      </h1>

      {/* Subtitle with progressive corruption */}
      <p
        className="text-xl md:text-2xl text-gray-300 text-center max-w-2xl font-mono"
        style={{
          letterSpacing: `${letterSpacing * 0.5}px`,
          opacity: Math.max(0.3, 1 - entropy / 100),
          transform: entropy > 50 ? `skewX(${Math.random() * 5 - 2.5}deg)` : "none",
          filter: entropy > 70 ? `blur(${entropy / 20}px) brightness(${1 + entropy / 100})` : "none",
        }}
      >
        {entropy < 30
          ? "A clean page. A simple message."
          : entropy < 60
            ? "Something is breaking..."
            : entropy < 85
              ? "The structure is failing..."
              : "There used to be something here."}
      </p>

      {/* Enhanced glitch text fragments */}
      {entropy > 40 && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(Math.floor(entropy / 8))].map((_, i) => (
            <div
              key={i}
              className="absolute text-white font-mono text-sm opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                transform: `rotate(${Math.random() * 360}deg) scale(${Math.random() * 1.5 + 0.5})`,
                animation: `flicker ${0.3 + Math.random() * 0.7}s infinite`,
                textShadow: `
                  ${Math.random() * 5 - 2.5}px 0 0 rgba(255, 0, 0, 0.8),
                  ${Math.random() * -5 + 2.5}px 0 0 rgba(0, 255, 255, 0.8)
                `,
              }}
            >
              {["ERROR", "LOST", "DECAY", "NULL", "VOID", "END", "GLITCH", "FAIL"][Math.floor(Math.random() * 8)]}
            </div>
          ))}
        </div>
      )}

      {/* Progress indicator with glitch */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-64 h-1 bg-gray-800 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-cyan-500 via-magenta-500 to-red-500"
          style={{
            width: `${entropy}%`,
            transition: "width 0.3s ease-out",
            filter: entropy > 60 ? `blur(${entropy / 50}px)` : "none",
            boxShadow: entropy > 70 ? `0 0 20px rgba(255, 0, 255, 0.8)` : "none",
          }}
        />
      </div>

      <style jsx>{`
        @keyframes flicker {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.8;
          }
        }
      `}</style>
    </div>
  )
}
