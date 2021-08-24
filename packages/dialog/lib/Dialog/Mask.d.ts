/** @format */
import React from 'react';
import './style.less';
interface MaskProps {
    visible: boolean;
    maskStyle?: React.CSSProperties;
    zIndex?: number;
    prefixCls: string;
    animationName: string;
}
declare const Mask: (props: MaskProps) => JSX.Element;
export default Mask;
