/** @format */

import React, { HTMLAttributes } from 'react'
import IconLib from './IconLib'
import cn from 'classnames'
import './style.less'

export interface IconProps extends HTMLAttributes<HTMLElement> {
  icon: string
}

const Icon = (props: IconProps) => {
  const { icon, className, ...rest } = props
  const Iconfont = IconLib[icon]
  if (!Iconfont) return null
  return (
    <i className={cn('z-icon', className)} {...rest}>
      <Iconfont icon={icon} />
    </i>
  )
}

export default Icon
