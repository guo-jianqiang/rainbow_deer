/** @format */

import React from 'react'
import ReactDom from 'react-dom'
import cn from 'classnames'
import DialogWrap, { DialogWrapProps } from './DialogWrap'
import Button from '@rainbow_deer/button'
import Icon from '@rainbow_deer/icon'
import { DialogHelper, getUUId } from './helper'
import { defaultAnimationName } from './Dialog'
import DialogDrag from './DialogDrag'

type TConfirmType = 'warning' | 'info' | 'error' | 'success'

export interface ConfirmProps
  extends Pick<DialogWrapProps, Exclude<keyof DialogWrapProps, 'visible' | 'children'>> {
  content: React.ReactNode
  icon?: React.ReactElement
  type?: TConfirmType
  draggable?: boolean
}

const confirmQueue: Function[] = []

export type TDialogConfirm = {
  (props: ConfirmProps): () => void
  info: (props: ConfirmProps) => () => void
  warning: (props: ConfirmProps) => () => void
  error: (props: ConfirmProps) => () => void
  success: (props: ConfirmProps) => () => void
  destroyAll: () => void
}

const DialogConfirm: TDialogConfirm = (props) => {
  const {
    type,
    openAnimation = true,
    draggable = false,
    icon,
    content,
    onOk,
    onClose,
    animationName,
    maskAnimationName,
    ...rest
  } = props

  const indexRef = { index: 0 }

  const handleClickOk = () => {
    if (typeof onOk === 'function') {
      onOk()
      return
    }
    destroy()
  }

  const handleClickClose = () => {
    if (typeof onClose === 'function') {
      onClose()
      return
    }
    destroy()
  }

  const div = document.createElement('div')

  const uuid = getUUId()

  div.id = 'z-confirm-' + uuid

  let zDialog: HTMLElement
  let zDialogMask: HTMLElement

  const DialogComp = draggable ? DialogDrag : DialogWrap

  ReactDom.render(
    <DialogComp
      {...rest}
      visible
      imperative
      onOk={handleClickOk}
      onClose={handleClickClose}
      getContainer={() => div}
    >
      {type || icon ? (
        <div className={'z-confirm-status-body'}>
          {React.isValidElement(icon)
            ? icon
            : type && <Icon icon={type} className={cn('z-confirm-status-body-icon', type)} />}
          <div className='z-confirm-status-body-msg'>{content}</div>
        </div>
      ) : (
        content
      )}
    </DialogComp>,
    div,
    () => {
      zDialog = div.getElementsByClassName('z-dialog')[0] as HTMLElement
      zDialogMask = div.getElementsByClassName('z-dialog-mask')[0] as HTMLElement
      if (!openAnimation) {
        zDialog.style.animationName = ''
        zDialogMask.style.animationName = ''
      }

      document.body.appendChild(div)
      DialogHelper.afterOpen(uuid)
    }
  )

  const destroy = () => {
    DialogHelper.beforeClose(uuid, () => {
      const removeDiv = () => {
        ReactDom.unmountComponentAtNode(div)
        div?.parentNode?.removeChild(div)
        confirmQueue.splice(indexRef.index, 1)
      }
      if (openAnimation) {
        zDialog.style.animationName = animationName || defaultAnimationName + 'Out'
        zDialogMask.style.animationName = maskAnimationName || defaultAnimationName + 'Out'
        zDialog.addEventListener('animationend', removeDiv)
      } else {
        removeDiv()
      }
    })
  }

  confirmQueue.push(destroy)

  indexRef.index = confirmQueue.length - 1

  return destroy
}

const showConfirmType = (props: ConfirmProps) => {
  let destroy = () => {}
  const { type, footer, onAfterClose, ...rest } = props
  const handleClose = () => {
    destroy()
    if (typeof onAfterClose === 'function') onAfterClose()
  }
  destroy = DialogConfirm({
    ...rest,
    type,
    footer: footer || [
      <Button type='emphasize' onClick={handleClose} key={'I know'}>
        知道了
      </Button>,
    ],
    footerStyle: { border: 'none', padding: '10px 40px 30px' },
    onClose: () => destroy(),
  })
  return destroy
}

export function info(props: ConfirmProps) {
  return showConfirmType({ ...props, type: 'info' })
}

export const error = (props: ConfirmProps) => {
  return showConfirmType({ ...props, type: 'error' })
}

export const warning = (props: ConfirmProps) => {
  return showConfirmType({ ...props, type: 'warning' })
}

export const success = (props: ConfirmProps) => {
  return showConfirmType({ ...props, type: 'success' })
}

export const destroyAll = () => {
  let destroy: Function
  while (confirmQueue.length) {
    destroy = confirmQueue.pop() as Function
    if (destroy) {
      destroy()
    }
  }
}

DialogConfirm.destroyAll = destroyAll
DialogConfirm.info = info
DialogConfirm.warning = warning
DialogConfirm.error = error
DialogConfirm.success = success

export default DialogConfirm
