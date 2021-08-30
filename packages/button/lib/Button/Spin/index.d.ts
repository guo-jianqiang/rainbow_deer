/** @format */
import React from 'react';
import './style.less';
export declare enum ESize {
    large = 16,
    normal = 14,
    small = 12
}
export interface SpinProps {
    style?: React.CSSProperties;
    circleStyle?: React.CSSProperties;
    className?: string;
    size?: 'normal' | 'large' | 'small';
}
declare const Spin: ({ size, className, style, circleStyle }: SpinProps) => JSX.Element;
export default Spin;
