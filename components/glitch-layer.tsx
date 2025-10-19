"use client"

import { useEffect, useRef } from "react"

interface GlitchLayerProps {
  entropy: number
}

export default function GlitchLayer({ entropy }: GlitchLayerProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const animate = () => {
      // Clear canvas
      ctx.fillStyle = "rgba(0, 0, 0, 0.1)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      if (entropy > 20) {
        const glitchAmount = entropy * 3
        const offsetX = (Math.random() - 0.5) * glitchAmount
        const offsetY = (Math.random() - 0.5) * glitchAmount

        // Red channel
        ctx.fillStyle = `rgba(255, 0, 0, ${entropy / 150})`
        ctx.fillRect(offsetX, offsetY, canvas.width, canvas.height)

        // Green channel
        ctx.fillStyle = `rgba(0, 255, 0, ${entropy / 200})`
        ctx.fillRect(-offsetX * 0.7, -offsetY * 0.7, canvas.width, canvas.height)

        // Blue channel
        ctx.fillStyle = `rgba(0, 0, 255, ${entropy / 180})`
        ctx.fillRect(offsetX * 0.9, offsetY * 0.9, canvas.width, canvas.height)

        ctx.fillStyle = `rgba(255, 0, 255, ${entropy / 250})`
        ctx.fillRect(-offsetX * 0.5, offsetY * 0.5, canvas.width, canvas.height)
      }

      if (entropy > 40) {
        ctx.strokeStyle = `rgba(255, 255, 255, ${entropy / 400})`
        ctx.lineWidth = Math.random() * 3 + 1
        for (let i = 0; i < canvas.height; i += Math.random() * 6 + 2) {
          ctx.beginPath()
          ctx.moveTo(0, i)
          ctx.lineTo(canvas.width, i)
          ctx.stroke()
        }
      }

      if (entropy > 60) {
        for (let i = 0; i < entropy / 3; i++) {
          const x = Math.random() * canvas.width
          const y = Math.random() * canvas.height
          const w = Math.random() * 150 + 30
          const h = Math.random() * 80 + 20

          ctx.fillStyle = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, ${entropy / 250})`
          ctx.fillRect(x, y, w, h)
        }
      }

      if (entropy > 75) {
        for (let i = 0; i < entropy / 10; i++) {
          const x = Math.random() * canvas.width
          const height = Math.random() * canvas.height * 0.5

          ctx.fillStyle = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, ${entropy / 200})`
          ctx.fillRect(x, Math.random() * canvas.height, Math.random() * 20 + 5, height)
        }
      }

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
      className="fixed inset-0 pointer-events-none mix-blend-screen"
      style={{
        opacity: Math.min(entropy / 80, 1),
      }}
    />
  )
}
