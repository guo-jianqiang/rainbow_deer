/** @format */

import React, { useEffect, useRef, useState } from 'react'
import ReactDom from 'react-dom'
import Dialog from './Dialog'
import DialogDrag from './DialogDrag'
import DialogConfirm from './DialogConfirm'
import { DialogHelper, getUUId } from './helper'

export interface DialogWrapProps {
  /**
   * 显示隐藏
   */
  visible: boolean
  /**
   * 作用于dialog className
   */
  className?: string
  /**
   * 宽
   */
  width?: number
  /**
   * 高
   */
  height?: number
  /**
   * dialog 样式
   */
  style?: React.CSSProperties
  /**
   * body样式
   */
  bodyStyle?: React.CSSProperties
  /**
   * 页脚样式
   */
  footerStyle?: React.CSSProperties
  /**
   * 页脚类选择器
   */
  footerClassName?: string
  /**
   *  类选择器 前缀
   */
  prefixCls?: string
  /**
   *  层级
   */
  zIndex?: number
  /**
   *  自定义关闭图标
   */
  closeIcon?: React.ReactNode
  /**
   *  是否支持esc 关闭dialog
   */
  keyboard?: boolean
  /**
   *  标题
   */
  title?: any
  /**
   *  页脚
   */
  footer?: React.ReactNode[]
  /**
   *  是否强制渲染
   */
  forceRender?: boolean
  /**
   * 确认文本
   */
  okText?: string
  /**
   * 关闭文本
   */
  closeText?: string
  /**
   *  关闭
   */
  onClose?: (destroy?: Function) => void
  /**
   *  确认
   */
  onOk?: (destroy?: Function) => void
  /**
   * 确定按钮 loading
   */
  confirmLoading?: boolean
  /**
   *  关闭销毁组件
   */
  destroyOnClose?: boolean
  /**
   * 关闭后回调
   */
  onAfterClose?: () => void
  /**
   * 渲染父级
   */
  getContainer?: () => HTMLElement
  /**
   *  自定义dialog
   */
  dialogRender?: (content: React.ReactElement, closeDialog: () => void) => React.ReactElement
  /**
   * 是否开启动画
   */
  openAnimation?: boolean
  /**
   * 动画
   */
  animationName?: string
  /**
   * 遮罩层动画
   */
  maskAnimationName?: string
  /**
   *  动画周期
   */
  animationDuration?: number
  /**
   *  是否显示关闭
   */
  closable?: boolean
  /**
   *  是否显示遮罩
   */
  mask?: boolean
  /**
   *  遮罩样式
   */
  maskStyle?: React.CSSProperties
  children: React.ReactNode
  /**
   *  命令式调用
   */
  imperative?: boolean
}

const DialogWrap: React.FC<DialogWrapProps> & {
  confirm: typeof DialogConfirm
  DialogDrag: typeof DialogDrag
} = (props) => {
  const {
    visible,
    forceRender = false,
    onClose,
    onAfterClose,
    getContainer = () => document.body,
    children,
    onOk,
    destroyOnClose = false,
    imperative = false,
    ...rest
  } = props

  const [visited, setVisited] = useState(forceRender)

  const prevAnimated = useRef(visible)

  const [animatedVisible, setAnimatedVisible] = useState(visible)

  const dialogId = useRef<number>(-1)

  useEffect(() => {
    if (visible) {
      if (!imperative) {
        dialogId.current = getUUId()
        DialogHelper.afterOpen(dialogId.current)
      }
      setVisited(true)
      setAnimatedVisible(true)
    }
    return () => {}
  }, [visible])

  useEffect(() => {
    prevAnimated.current = animatedVisible
  }, [animatedVisible])

  const onDialogAnimationEnd = () => {
    if (!visible) {
      setAnimatedVisible(false)
      onAfterClose && onAfterClose()
    }
  }

  const onCloseDialog = () => {
    if (!imperative) {
      DialogHelper.beforeClose(dialogId.current, () => {
        typeof onClose === 'function' && onClose()
      })
    } else {
      typeof onClose === 'function' && onClose()
    }
  }

  const dialogProps = {
    forceRender,
    visible,
    onDialogAnimationEnd,
    onCloseDialog,
    onOk,
    ...rest,
  }

  if (!forceRender && (destroyOnClose || !visited) && !animatedVisible) {
    return null
  }

  // 渲染当前dom
  if (!getContainer()) {
    return <Dialog {...dialogProps}>{children}</Dialog>
  }

  return ReactDom.createPortal(
    <Dialog {...dialogProps}>{children}</Dialog>,
    getContainer() as HTMLLIElement
  )
}

DialogWrap.confirm = DialogConfirm

DialogWrap.DialogDrag = DialogDrag

export default DialogWrap
