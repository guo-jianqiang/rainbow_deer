/** @format */
import React from 'react';
import { DialogWrapProps } from './DialogWrap';
declare type TConfirmType = 'warning' | 'info' | 'error' | 'success';
export interface ConfirmProps extends Pick<DialogWrapProps, Exclude<keyof DialogWrapProps, 'visible' | 'children'>> {
    content: React.ReactNode;
    icon?: React.ReactElement;
    type?: TConfirmType;
    draggable?: boolean;
}
export declare type TDialogConfirm = {
    (props: ConfirmProps): () => void;
    info: (props: ConfirmProps) => () => void;
    warning: (props: ConfirmProps) => () => void;
    error: (props: ConfirmProps) => () => void;
    success: (props: ConfirmProps) => () => void;
    destroyAll: () => void;
};
declare const DialogConfirm: TDialogConfirm;
export declare function info(props: ConfirmProps): () => void;
export declare const error: (props: ConfirmProps) => () => void;
export declare const warning: (props: ConfirmProps) => () => void;
export declare const success: (props: ConfirmProps) => () => void;
export declare const destroyAll: () => void;
export default DialogConfirm;
