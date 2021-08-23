/** @format */

import React from 'react'
import IconLib from './IconLib'
import cn from 'classnames'
import './style.less'

export interface IconProps {
  icon: string
  className?: string
  style?: React.CSSProperties
}

const Icon = (props: IconProps) => {
  const {icon, className, ...rest} = props
  const Iconfont = IconLib[icon]
  if (!Iconfont) return null
  return (
    <i className={cn('z-icon', className)} {...rest}>
      <Iconfont icon={icon} />
    </i>
  )
}

export default Icon
