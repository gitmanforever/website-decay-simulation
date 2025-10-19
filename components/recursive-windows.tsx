"use client"

import { useEffect, useState } from "react"

interface RecursiveWindowsProps {
  entropy: number
  depth: number
}

export default function RecursiveWindows({ entropy, depth }: RecursiveWindowsProps) {
  const [windows, setWindows] = useState<
    Array<{ id: number; x: number; y: number; scale: number; rotation: number; hue: number }>
  >([])

  useEffect(() => {
    if (depth === 0) {
      setWindows([])
      return
    }

    const newWindows = []
    for (let i = 0; i < depth; i++) {
      newWindows.push({
        id: i,
        x: Math.random() * 20 - 10,
        y: Math.random() * 20 - 10,
        scale: Math.pow(0.7, i + 1),
        rotation: Math.random() * 15 - 7.5,
        hue: i * 60,
      })
    }
    setWindows(newWindows)
  }, [depth])

  return (
    <div className="fixed inset-0 pointer-events-none">
      {windows.map((window) => (
        <div
          key={window.id}
          className="absolute border-2 border-cyan-500 bg-black bg-opacity-80 overflow-hidden"
          style={{
            left: `${50 + window.x}%`,
            top: `${50 + window.y}%`,
            width: `${40 * window.scale}%`,
            height: `${40 * window.scale}%`,
            transform: `translate(-50%, -50%) scale(${window.scale}) rotate(${window.rotation}deg)`,
            filter: `hue-rotate(${window.hue}deg) brightness(${0.8 + Math.random() * 0.4})`,
            boxShadow: `0 0 20px rgba(0, 255, 255, ${0.3 * window.scale})`,
            zIndex: 20 - window.id,
          }}
        >
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-center font-mono text-white opacity-60">
              <div
                style={{
                  fontSize: `${16 * window.scale}px`,
                  letterSpacing: `${2 * window.scale}px`,
                  transform: `skewX(${Math.random() * 10 - 5}deg)`,
                }}
              >
                THE INTERNET
              </div>
              <div
                style={{
                  fontSize: `${10 * window.scale}px`,
                  marginTop: `${8 * window.scale}px`,
                  opacity: 0.4,
                  filter: `blur(${Math.random() * 2}px)`,
                }}
              >
                [CORRUPTED_v{window.id}]
              </div>
            </div>
          </div>

          {[...Array(Math.floor(Math.random() * 5))].map((_, i) => (
            <div
              key={i}
              className="absolute w-full h-px bg-red-500 opacity-30"
              style={{
                top: `${Math.random() * 100}%`,
                animation: `glitch-line 0.5s infinite`,
              }}
            />
          ))}
        </div>
      ))}

      <style jsx>{`
        @keyframes glitch-line {
          0%, 100% {
            transform: translateX(0);
            opacity: 0.3;
          }
          50% {
            transform: translateX(${Math.random() * 20 - 10}px);
            opacity: 0.8;
          }
        }
      `}</style>
    </div>
  )
}
