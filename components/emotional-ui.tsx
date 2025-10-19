"use client"

import { useEffect, useState } from "react"

interface EmotionalUIProps {
  mouseSpeed: number
  isTyping: boolean
  entropy: number
}

export default function EmotionalUI({ mouseSpeed, isTyping, entropy }: EmotionalUIProps) {
  const [emotion, setEmotion] = useState("calm")
  const [idleTime, setIdleTime] = useState(0)

  useEffect(() => {
    // Determine emotion based on mouse speed
    if (mouseSpeed > 50) {
      setEmotion("anxious")
    } else if (mouseSpeed > 20) {
      setEmotion("alert")
    } else if (idleTime > 5000) {
      setEmotion("lonely")
    } else {
      setEmotion("calm")
    }
  }, [mouseSpeed, idleTime])

  useEffect(() => {
    if (mouseSpeed === 0 && !isTyping) {
      const timer = setInterval(() => {
        setIdleTime((prev) => prev + 100)
      }, 100)
      return () => clearInterval(timer)
    } else {
      setIdleTime(0)
    }
  }, [mouseSpeed, isTyping])

  const emotionStyles = {
    calm: {
      filter: "none",
      transform: "scale(1)",
    },
    alert: {
      filter: "brightness(1.1) contrast(1.2)",
      transform: "scale(1.02)",
    },
    anxious: {
      filter: "brightness(1.3) saturate(1.5) hue-rotate(10deg)",
      transform: "scale(1.05) skewX(2deg)",
    },
    lonely: {
      filter: "grayscale(0.8) brightness(0.7)",
      transform: "scale(0.98)",
    },
  }

  return (
    <>
      <div
        className="fixed inset-0 pointer-events-none transition-all duration-300"
        style={{
          ...emotionStyles[emotion as keyof typeof emotionStyles],
          zIndex: 10,
        }}
      />

      <div
        className="fixed top-4 left-4 font-mono text-sm z-40 transition-all duration-300"
        style={{
          color:
            emotion === "anxious"
              ? "#ff0000"
              : emotion === "alert"
                ? "#ffff00"
                : emotion === "lonely"
                  ? "#888888"
                  : "#00ff00",
          opacity: entropy > 20 ? 0.7 : 0,
          textShadow: `0 0 10px currentColor`,
        }}
      >
        {emotion === "anxious" && "You seem anxious..."}
        {emotion === "alert" && "I sense movement..."}
        {emotion === "lonely" && "Are you still there?"}
        {emotion === "calm" && "All is quiet..."}
      </div>

      {isTyping && (
        <div
          className="fixed inset-0 pointer-events-none"
          style={{
            animation: "tremor 0.1s infinite",
            zIndex: 5,
          }}
        />
      )}

      <style jsx>{`
        @keyframes tremor {
          0%, 100% {
            transform: translateX(0);
          }
          25% {
            transform: translateX(-2px);
          }
          75% {
            transform: translateX(2px);
          }
        }
      `}</style>
    </>
  )
}
