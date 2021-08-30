/** @format */

import React, { useEffect, useImperativeHandle, useRef, useState } from 'react'

interface DragWrapperProps {
  disabled: boolean
  children: React.ReactElement
}

type TPos = {
  x: number
  y: number
}

type TBoundaryRef = {
  min: { x: number; y: number }
  max: { x: number; y: number }
}

export type DragWrapperRef = {
  restore: () => void
} | null

type TChildrenProps = {
  onMouseDown?: (event: React.MouseEvent<HTMLDivElement>) => void
}

const DragWrapper = React.forwardRef<DragWrapperRef, DragWrapperProps>((props, ref) => {
  const { children, disabled } = props
  const dragRef = useRef<HTMLElement>(null)
  const boundaryRef = useRef<TBoundaryRef>({
    max: { x: 0, y: 0 },
    min: { x: 0, y: 0 },
  })

  const [pos, setPos] = useState<TPos>({
    x: 0,
    y: 0,
  })

  useEffect(() => {
    const setBoundary = () => {
      if (boundaryRef.current && dragRef.current) {
        const { offsetWidth, offsetHeight } = dragRef.current
        boundaryRef.current.max.x = (window.innerWidth - offsetWidth) / 2
        boundaryRef.current.min.x = (offsetWidth - window.innerWidth) / 2
        boundaryRef.current.max.y = (window.innerHeight - offsetHeight) / 2
        boundaryRef.current.min.y = (offsetHeight - window.innerHeight) / 2
      }
    }
    setBoundary()
    window.addEventListener('resize', setBoundary)
    return () => {
      window.removeEventListener('resize', setBoundary)
    }
  }, [])

  const restore = () => setPos({ x: 0, y: 0 })

  useImperativeHandle(ref, () => {
    return {
      restore,
    }
  })

  const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = event
    const startX = clientX
    const startY = clientY
    const move = (event: MouseEvent) => {
      if (!boundaryRef.current) return
      const { max, min } = boundaryRef.current
      const { clientX, clientY } = event
      let nextX = clientX - startX + pos.x
      let nextY = clientY - startY + pos.y
      if (nextX > max.x) {
        nextX = max.x
      } else if (nextX < min.x) {
        nextX = min.x
      }
      if (nextY > max.y) {
        nextY = max.y
      } else if (nextY < min.y) {
        nextY = min.y
      }
      const newPos = {
        x: nextX,
        y: nextY,
      }
      setPos(newPos)
    }
    const up = () => {
      document.removeEventListener('mousemove', move)
      document.removeEventListener('mouseup', up)
    }
    document.addEventListener('mousemove', move)
    document.addEventListener('mouseup', up)
  }

  const childrenProps: TChildrenProps = {}

  if (!disabled) childrenProps.onMouseDown = handleMouseDown

  return (
    children &&
    React.cloneElement(children, {
      style: {
        ...children.props.style,
        transform: `translate(${pos.x}px, ${pos.y}px)`,
        cursor: !disabled ? 'move' : '',
      },
      ref: dragRef,
      ...childrenProps,
    })
  )
})

export default DragWrapper
