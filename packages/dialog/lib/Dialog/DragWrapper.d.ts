/** @format */
import React from 'react'
interface DragWrapperProps {
  disabled: boolean
  children: React.ReactElement
}
export declare type DragWrapperRef = {
  restore: () => void
} | null
declare const DragWrapper: React.ForwardRefExoticComponent<
  DragWrapperProps & React.RefAttributes<DragWrapperRef>
>
export default DragWrapper
