/** @format */
import React from 'react';
import './style.less';
import { DialogWrapProps } from './DialogWrap';
export declare const defaultAnimationName = "zDialogFade";
export interface DialogProps extends DialogWrapProps {
    ref?: any;
    onCloseDialog: () => void;
    onDialogAnimationEnd?: () => void;
}
declare const Dialog: React.FC<DialogProps>;
export default Dialog;
