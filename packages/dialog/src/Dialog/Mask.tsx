/** @format */

import React from 'react'
import './style.less'

interface MaskProps {
  visible: boolean
  maskStyle?: React.CSSProperties
  zIndex?: number
  prefixCls: string
  animationName: string
}

const Mask = (props: MaskProps) => {
  const {visible, maskStyle, zIndex, prefixCls, animationName} = props

  return (
    <div
      className={`${prefixCls}-mask`}
      style={{
        visibility: visible ? 'visible' : 'hidden',
        animationName: visible ? animationName + 'In' : animationName + 'Out',
        zIndex,
        ...maskStyle,
      }}
    />
  )
}

export default Mask
