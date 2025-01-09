'use client'

import { useEffect, useRef } from 'react'

export function AnimatedBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext('2d')
        if (!ctx) return

        let animationFrameId: number

        const resizeCanvas = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
        }

        const drawGradient = (t: number) => {
            const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
            gradient.addColorStop(0, `hsl(${(t / 50) % 360}, 70%, 60%)`)
            gradient.addColorStop(1, `hsl(${((t / 50) + 60) % 360}, 70%, 60%)`)

            ctx.fillStyle = gradient
            ctx.fillRect(0, 0, canvas.width, canvas.height)
        }

        const animate = (time: number) => {
            drawGradient(time)
            animationFrameId = requestAnimationFrame(animate)
        }

        resizeCanvas()
        window.addEventListener('resize', resizeCanvas)
        animationFrameId = requestAnimationFrame(animate)

        return () => {
            window.removeEventListener('resize', resizeCanvas)
            cancelAnimationFrame(animationFrameId)
        }
    }, [])

    return <canvas ref={canvasRef} className="fixed inset-0 -z-10" />
}

