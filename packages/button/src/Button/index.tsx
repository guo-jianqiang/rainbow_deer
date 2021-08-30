/** @format */

import React, { useEffect, useState } from 'react'
import cn from 'classnames'
import './style.less'
import Loading from './Spin'

type ButtonType = React.ButtonHTMLAttributes<HTMLButtonElement>

type ButtonTypes = 'primary' | 'emphasize'

type ButtonSizes = 'normal' | 'large' | 'small'

const circleStyle: { [key: string]: React.CSSProperties } = {
  emphasize: {
    stroke: '#fff',
  },
}

export interface ButtonProps extends Pick<ButtonType, Exclude<keyof ButtonType, 'type'>> {
  /**
   * 样式
   */
  style?: React.CSSProperties
  /**
   * 类选择器
   */
  className?: string
  /**
   * 类型
   */
  type?: ButtonTypes
  /**
   * 尺寸
   */
  size?: ButtonSizes
  /**
   * 类选择器前缀
   */
  prefixCls?: string
  /**
   * 2个中文字符自动添加空格
   */
  autoInsertSpaceInButton?: boolean
  /**
   * 是否独占一行
   */
  block?: boolean
  /**
   * 是否加载
   */
  loading?: boolean
  /**
   * 进度条
   */
  percent?: number
  /**
   * 进度文本
   */
  percentText?: string
  /**
   * 进度完成文本
   */
  fullPercentText?: string
  /**
   * 禁用
   */
  disabled?: boolean
}

const rxTwoCNChar = /^[\u4e00-\u9fa5]{2}$/
const isTwoCNChar = rxTwoCNChar.test.bind(rxTwoCNChar)

function isString(str: any) {
  return typeof str === 'string'
}

function isReactFragment(node: React.ReactNode) {
  return React.isValidElement(node) && node.type === React.Fragment
}

function insertSpace(child: React.ReactChild, needInserted: boolean = true) {
  if (child == null) {
    return
  }
  const SPACE = needInserted ? ' ' : ''
  if (
    typeof child !== 'string' &&
    typeof child !== 'number' &&
    isString(child.type) &&
    isTwoCNChar(child.props.children)
  ) {
    return React.cloneElement(child, {
      children: child.props.children.split('').join(SPACE),
    })
  }
  if (typeof child === 'string') {
    return isTwoCNChar(child) ? <span>{child.split('').join(SPACE)}</span> : <span>{child}</span>
  }
  if (isReactFragment(child)) {
    return <span>{child}</span>
  }
  return child
}

const Button: React.FC<ButtonProps> = (props) => {
  const {
    type = '',
    size = 'normal',
    prefixCls = 'z',
    className,
    style,
    block = false,
    autoInsertSpaceInButton = true,
    loading,
    percent = 0,
    percentText = '下载中',
    fullPercentText = '已下载',
    children,
    ...rest
  } = props

  const [process, setProcess] = useState(percent)

  const classNames = cn(`${prefixCls}-button`, size, type, className, {
    loading: loading || process !== 0,
  })

  useEffect(() => {
    if (process === 100) {
      setTimeout(() => {
        setProcess(0)
      }, 1000)
    }
  }, [process])

  useEffect(() => {
    setProcess(percent > 100 ? 100 : percent)
  }, [percent])

  const processStyle: React.CSSProperties & { [key: string]: any } = {
    '--process-percent': process + '%',
  }

  return (
    <button
      className={classNames}
      style={{
        display: block ? 'block' : 'inline-block',
        width: block ? '100%' : 'auto',
        ...style,
      }}
      {...rest}
    >
      {process ? (
        <div
          className={cn(`${prefixCls}-button-processWrap`, {
            // [`${prefixCls}-button-process-end`]: isEnd,
          })}
        >
          <span>{process < 100 ? percentText : fullPercentText}</span>
          <div style={processStyle} className={`${prefixCls}-button-processWrap-process`} />
        </div>
      ) : null}
      {loading && (
        <span className={`${prefixCls}-button-loading`}>
          <Loading size={size} circleStyle={circleStyle[type]} />
        </span>
      )}
      {insertSpace(children as React.ReactChild, autoInsertSpaceInButton)}
    </button>
  )
}

export default Button
