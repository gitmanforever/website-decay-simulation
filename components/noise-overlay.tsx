"use client"

import { useEffect, useRef } from "react"

interface NoiseOverlayProps {
  entropy: number
}

export default function NoiseOverlay({ entropy }: NoiseOverlayProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const animate = () => {
      const imageData = ctx.createImageData(canvas.width, canvas.height)
      const data = imageData.data

      for (let i = 0; i < data.length; i += 4) {
        const noise = Math.random() * 255 * (entropy / 100)
        const colorVariation = Math.random()

        if (colorVariation > 0.7) {
          // Red noise
          data[i] = noise
          data[i + 1] = noise * 0.3
          data[i + 2] = noise * 0.3
        } else if (colorVariation > 0.4) {
          // Cyan noise
          data[i] = noise * 0.3
          data[i + 1] = noise
          data[i + 2] = noise
        } else {
          // White noise
          data[i] = noise
          data[i + 1] = noise
          data[i + 2] = noise
        }

        data[i + 3] = entropy > 30 ? entropy * 0.6 : 0
      }

      ctx.putImageData(imageData, 0, 0)
      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [entropy])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none mix-blend-overlay"
      style={{
        opacity: Math.min(entropy / 120, 0.9),
      }}
    />
  )
}
