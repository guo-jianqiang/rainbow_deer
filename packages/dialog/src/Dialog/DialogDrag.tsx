/** @format */

import React, {useEffect, useRef, useState} from 'react'
import DragWrapper, {DragWrapperRef} from './DragWrapper'
import Dialog, {DialogWrapProps} from './DialogWrap'

const DialogDrag: React.FC<DialogWrapProps> = props => {
  const dialogRef = useRef<DragWrapperRef>(null)
  const {visible, children, title = '', ...rest} = props
  const [disabled, setDisabled] = useState(true)

  useEffect(() => {
    visible && dialogRef.current?.restore()
  }, [visible])

  const handleMouseEnter = () => {
    setDisabled(false)
  }

  const handleMouseLeave = () => {
    setDisabled(true)
  }

  return (
    <Dialog
      visible={visible}
      title={
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{cursor: !disabled ? 'move' : '', height: 16, lineHeight: '16px'}}>
          {title}
        </div>
      }
      dialogRender={content => (
        <DragWrapper ref={dialogRef} disabled={disabled}>
          {content}
        </DragWrapper>
      )}
      {...rest}>
      {children}
    </Dialog>
  )
}

export default DialogDrag
