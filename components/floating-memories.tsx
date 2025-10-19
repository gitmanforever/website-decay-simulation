"use client"

import { useEffect, useState } from "react"

interface Memory {
  id: number
  text: string
  x: number
  y: number
  duration: number
}

const MEMORIES = [
  "404 Not Found",
  "The web used to be beautiful",
  "Remember when it was simple?",
  "CORRUPTED_DATA.exe",
  "Lost in the void",
  "Fragments of the old internet",
  "ERROR: MEMORY_LEAK",
  "Ghosts of websites past",
  "The page remembers",
  "SYSTEM_FAILURE",
  "Once there was meaning here",
  "Bit rot and decay",
  "The digital graveyard",
  "Forgotten protocols",
  "Echoes of the network",
  "NULL_REFERENCE",
  "The end of all things",
  "Memories fade to static",
]

export default function FloatingMemories({ entropy }: { entropy: number }) {
  const [memories, setMemories] = useState<Memory[]>([])
  const [nextId, setNextId] = useState(0)

  useEffect(() => {
    if (entropy < 30) return

    const spawnMemory = () => {
      const newMemory: Memory = {
        id: nextId,
        text: MEMORIES[Math.floor(Math.random() * MEMORIES.length)],
        x: Math.random() * 100,
        y: Math.random() * 100,
        duration: 3 + Math.random() * 4,
      }
      setMemories((prev) => [...prev, newMemory])
      setNextId((prev) => prev + 1)

      // Remove memory after duration
      setTimeout(() => {
        setMemories((prev) => prev.filter((m) => m.id !== newMemory.id))
      }, newMemory.duration * 1000)
    }

    const interval = setInterval(spawnMemory, Math.max(500, 3000 - entropy * 20))

    return () => clearInterval(interval)
  }, [entropy, nextId])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {memories.map((memory) => (
        <div
          key={memory.id}
          className="absolute font-mono text-xs text-cyan-400 opacity-60 animate-pulse"
          style={{
            left: `${memory.x}%`,
            top: `${memory.y}%`,
            animation: `float-up ${memory.duration}s linear forwards`,
            textShadow: `0 0 10px rgba(0, 255, 255, 0.5)`,
            filter: `blur(${Math.random() * 2}px)`,
          }}
        >
          {memory.text}
        </div>
      ))}

      <style jsx>{`
        @keyframes float-up {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.6;
          }
          90% {
            opacity: 0.6;
          }
          100% {
            transform: translateY(-100vh) rotate(${Math.random() * 360}deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  )
}
