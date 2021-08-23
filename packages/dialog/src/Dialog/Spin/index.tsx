/** @format */

import React from 'react'
import cn from 'classnames'
import './style.less'

export enum ESize {
  large = 16,
  normal = 14,
  small = 12,
}

export interface SpinProps {
  style?: React.CSSProperties
  circleStyle?: React.CSSProperties
  className?: string
  size?: 'normal' | 'large' | 'small'
}

const Spin = ({size = 'normal', className, style, circleStyle}: SpinProps) => {
  return (
    <svg
      style={style}
      className={cn(`z-spinner`, className)}
      width={ESize[size] + 'px'}
      height={ESize[size] + 'px'}
      viewBox="0 0 66 66">
      <circle
        className={'path'}
        style={circleStyle}
        fill="none"
        strokeWidth="6"
        strokeLinecap="round"
        cx="33"
        cy="33"
        r="30"
      />
    </svg>
  )
}

export default Spin
