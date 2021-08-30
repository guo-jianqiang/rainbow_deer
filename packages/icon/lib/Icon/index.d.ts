/** @format */
import React from 'react';
import './style.less';
export interface IconProps {
    icon: string;
    className?: string;
    style?: React.CSSProperties;
}
declare const Icon: (props: IconProps) => JSX.Element | null;
export default Icon;
