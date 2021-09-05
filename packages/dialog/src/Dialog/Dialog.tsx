/** @format */

import React, { useEffect, useMemo, useRef } from 'react'
import cn from 'classnames'
import './style.less'
import MemoChildren from './MemoChildren'
import Mask from './Mask'
import Button from '@rainbow_deer/button'
import Icon from '@rainbow_deer/icon'
import DialogWrap, { DialogWrapProps } from './DialogWrap'
import { getUUId } from './helper'

export const defaultAnimationName = 'zDialogFade'

export interface DialogProps extends DialogWrapProps {
  ref?: any
  onCloseDialog: () => void
  onDialogAnimationEnd?: () => void
}

const Dialog: React.FC<DialogProps> = (props) => {
  const {
    // 样式
    width = 400,
    height,
    className,
    style,
    bodyStyle,
    closeIcon,
    closable = true,
    openAnimation = true,
    animationDuration = 200,
    animationName = defaultAnimationName,
    maskAnimationName = defaultAnimationName,
    zIndex,
    title,
    footer,
    footerStyle,
    footerClassName,
    okText = '确认',
    closeText = '取消',
    confirmLoading,
    ref,
    // 渲染
    visible,
    forceRender,
    dialogRender,
    keyboard = true,
    prefixCls = 'z-dialog',
    onCloseDialog,
    onOk,
    onDialogAnimationEnd,
    // 遮罩层
    maskStyle,
    mask = true,
    children,
  } = props

  const rootRef = useRef<HTMLDivElement>(null)

  const dialogId = useRef<number>(-1)

  const handleClickCloseDialog = () => {
    const topDialogId = DialogWrap.dialogOpenQueue[DialogWrap.dialogOpenQueue.length - 1]
    if (topDialogId === dialogId.current) {
      const index = DialogWrap.dialogOpenQueue.findIndex((i) => i === dialogId.current)
      DialogWrap.dialogOpenQueue.splice(index, 1)
      onCloseDialog()
    }
  }

  const onAnimationEnd = () => {
    onDialogAnimationEnd && onDialogAnimationEnd()
  }

  const handleClickOk = () => {
    typeof onOk === 'function' && onOk()
  }

  useEffect(() => {
    // ===================== esc 每次只关闭置顶dialog ===================
    if (visible) {
      dialogId.current = getUUId()
      DialogWrap.dialogOpenQueue.push(dialogId.current)
      console.log(DialogWrap.dialogOpenQueue)
    }
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.keyCode === 27) {
        handleClickCloseDialog()
        console.log(DialogWrap.dialogOpenQueue, dialogId.current)
        // if (DialogWrap.dialogOpenQueue.pop() === dialogId.current) {
        //   handleClickCloseDialog()
        // }
      } else if (event.keyCode === 13) {
        handleClickOk()
      }
    }
    if (keyboard && visible) {
      document.addEventListener('keydown', onKeyDown)
    }
    return () => {
      if (keyboard && visible) document.removeEventListener('keydown', onKeyDown)
    }
  }, [visible])

  const buttons = (
    <React.Fragment>
      <Button style={{ marginRight: 8 }} onClick={handleClickCloseDialog}>
        {closeText}
      </Button>
      <Button loading={confirmLoading} type='emphasize' onClick={handleClickOk}>
        {okText}
      </Button>
    </React.Fragment>
  )

  let footerNode: React.ReactNode
  if (footer !== null) {
    footerNode = (
      <div className={cn(`${prefixCls}-footer`, footerClassName)} style={footerStyle}>
        {footer && footer.length
          ? footer.map((btn) => {
              if (React.isValidElement(btn)) return btn
              return null
            })
          : buttons}
      </div>
    )
  }

  let headerNode: React.ReactNode
  if (title) {
    headerNode = (
      <div className={`${prefixCls}-header`}>
        <div className={`${prefixCls}-title`}>{title}</div>
      </div>
    )
  }

  let closer: React.ReactNode
  if (closable) {
    closer = (
      <button
        type='button'
        onClick={handleClickCloseDialog}
        aria-label='Close'
        className={`${prefixCls}-close`}
      >
        {(React.isValidElement(closeIcon) && closeIcon) || (
          <Icon icon='close' className={`${prefixCls}-close-x`} />
        )}
      </button>
    )
  }

  const content = (
    <div className={cn(`${prefixCls}-content`, className)} style={style}>
      {closer}
      {headerNode}
      <div className={`${prefixCls}-body`} style={{ ...bodyStyle, height }}>
        {children}
      </div>
      {footerNode}
    </div>
  )

  const varStyle = useMemo(
    () => ({ '--z-dialog-duration': animationDuration + 'ms' }),
    [animationDuration]
  )

  const dialogStyle: React.CSSProperties = useMemo(
    () => ({
      width,
      animationName: openAnimation ? (visible ? `${animationName}In` : `${animationName}Out`) : '',
    }),
    [openAnimation, width, animationName, visible]
  )

  return (
    <div
      ref={rootRef}
      className='z-dialog-root'
      style={{
        transition: openAnimation ? 'visibility var(--z-dialog-duration) linear' : '',
        visibility: visible ? 'visible' : 'hidden',
        ...varStyle,
      }}
    >
      {mask && (
        <Mask
          animationName={openAnimation ? maskAnimationName : ''}
          visible={visible}
          prefixCls={prefixCls}
          maskStyle={maskStyle}
          zIndex={zIndex}
        />
      )}
      <div className='z-dialog-wrap' style={{ zIndex }}>
        <div ref={ref} className={'z-dialog'} style={dialogStyle} onAnimationEnd={onAnimationEnd}>
          <MemoChildren shouldUpdate={visible || !!forceRender}>
            {dialogRender ? dialogRender(content) : content}
          </MemoChildren>
        </div>
      </div>
    </div>
  )
}

export default Dialog
