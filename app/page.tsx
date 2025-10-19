"use client"

import { useEffect, useState, useRef } from "react"
import GlitchLayer from "@/components/glitch-layer"
import NoiseOverlay from "@/components/noise-overlay"
import EntropyContent from "@/components/entropy-content"
import FloatingMemories from "@/components/floating-memories"
import EmotionalUI from "@/components/emotional-ui"
import RecursiveWindows from "@/components/recursive-windows"

export default function Home() {
  const [entropy, setEntropy] = useState(0)
  const [mounted, setMounted] = useState(false)
  const [mouseSpeed, setMouseSpeed] = useState(0)
  const [isTyping, setIsTyping] = useState(false)
  const [recursionDepth, setRecursionDepth] = useState(0)
  const lastMousePos = useRef({ x: 0, y: 0 })

  useEffect(() => {
    setMounted(true)

    // Load entropy from localStorage
    const savedEntropy = localStorage.getItem("pageEntropy")
    if (savedEntropy) {
      setEntropy(Math.min(Number.parseFloat(savedEntropy), 100))
    }

    const interval = setInterval(() => {
      setEntropy((prev) => {
        const newEntropy = Math.min(prev + Math.random() * 0.5, 100)
        localStorage.setItem("pageEntropy", newEntropy.toString())
        return newEntropy
      })
    }, 2000)

    const handleClick = () => {
      setEntropy((prev) => {
        const newEntropy = Math.min(prev + Math.random() * 8, 100)
        localStorage.setItem("pageEntropy", newEntropy.toString())
        return newEntropy
      })
    }

    const handleScroll = () => {
      setEntropy((prev) => {
        const newEntropy = Math.min(prev + Math.random() * 3, 100)
        localStorage.setItem("pageEntropy", newEntropy.toString())
        return newEntropy
      })
    }

    const handleMouseMove = (e: MouseEvent) => {
      const dx = e.clientX - lastMousePos.current.x
      const dy = e.clientY - lastMousePos.current.y
      const speed = Math.sqrt(dx * dx + dy * dy)
      setMouseSpeed(speed)
      lastMousePos.current = { x: e.clientX, y: e.clientY }
    }

    const handleKeyDown = () => {
      setIsTyping(true)
      setEntropy((prev) => Math.min(prev + Math.random() * 2, 100))
    }

    const typingTimeout = setTimeout(() => setIsTyping(false), 500)

    window.addEventListener("click", handleClick)
    window.addEventListener("scroll", handleScroll)
    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("keydown", handleKeyDown)

    return () => {
      clearInterval(interval)
      clearTimeout(typingTimeout)
      window.removeEventListener("click", handleClick)
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [])

  if (!mounted) return null

  return (
    <main className="relative w-full min-h-screen overflow-hidden bg-black">
      {/* Base content */}
      <EntropyContent entropy={entropy} mouseSpeed={mouseSpeed} isTyping={isTyping} />

      <FloatingMemories entropy={entropy} />

      <EmotionalUI mouseSpeed={mouseSpeed} isTyping={isTyping} entropy={entropy} />

      <RecursiveWindows entropy={entropy} depth={recursionDepth} />

      {/* Glitch effects layer */}
      <GlitchLayer entropy={entropy} />

      {/* Noise overlay */}
      <NoiseOverlay entropy={entropy} />

      {/* Reset button */}
      <button
        onClick={() => {
          localStorage.removeItem("pageEntropy")
          setEntropy(0)
          setRecursionDepth(0)
        }}
        className="fixed bottom-4 right-4 px-4 py-2 bg-white text-black text-sm font-mono hover:bg-gray-200 transition-colors z-50"
      >
        Reset Entropy
      </button>

      <button
        onClick={() => setRecursionDepth((prev) => Math.min(prev + 1, 5))}
        className="fixed bottom-4 left-4 px-4 py-2 bg-cyan-500 text-black text-sm font-mono hover:bg-cyan-400 transition-colors z-50"
      >
        Recurse [{recursionDepth}]
      </button>
    </main>
  )
}
