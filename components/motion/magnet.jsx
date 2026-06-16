"use client"

import { useRef, useState, useCallback } from "react"

const Magnet = ({
  children,
  padding = 150,
  strength = 3,
  activeTransition = "transform 0.3s ease-out",
  inactiveTransition = "transform 0.6s ease-in-out",
  className = "",
}) => {
  const ref = useRef(null)
  const [isActive, setIsActive] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handlePointerMove = useCallback(
    (e) => {
      if (e.pointerType !== "mouse") return
      if (!ref.current) return
      const rect = ref.current.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      const distX = e.clientX - centerX
      const distY = e.clientY - centerY
      const distance = Math.sqrt(distX * distX + distY * distY)
      const edgeDistance = Math.max(rect.width, rect.height) / 2 + padding

      if (distance >= edgeDistance) {
        setIsActive(false)
        setPosition({ x: 0, y: 0 })
        return
      }

      setIsActive(true)
      setPosition({ x: distX / strength, y: distY / strength })
    },
    [padding, strength]
  )

  const handlePointerLeave = useCallback(() => {
    setIsActive(false)
    setPosition({ x: 0, y: 0 })
  }, [])

  return (
    <div
      ref={ref}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className={className}
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        transition: isActive ? activeTransition : inactiveTransition,
        willChange: "transform",
      }}
    >
      {children}
    </div>
  )
}

export default Magnet
