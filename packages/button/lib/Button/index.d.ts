/** @format */
import React from 'react';
import './style.less';
declare type ButtonType = React.ButtonHTMLAttributes<HTMLButtonElement>;
declare type ButtonTypes = 'primary' | 'emphasize';
declare type ButtonSizes = 'normal' | 'large' | 'small';
export interface ButtonProps extends Pick<ButtonType, Exclude<keyof ButtonType, 'type'>> {
    /**
     * 样式
     */
    style?: React.CSSProperties;
    /**
     * 类选择器
     */
    className?: string;
    /**
     * 类型
     */
    type?: ButtonTypes;
    /**
     * 尺寸
     */
    size?: ButtonSizes;
    /**
     * 类选择器前缀
     */
    prefixCls?: string;
    /**
     * 2个中文字符自动添加空格
     */
    autoInsertSpaceInButton?: boolean;
    /**
     * 是否独占一行
     */
    block?: boolean;
    /**
     * 是否加载
     */
    loading?: boolean;
    /**
     * 进度条
     */
    percent?: number;
    /**
     * 进度文本
     */
    percentText?: string;
    /**
     * 进度完成文本
     */
    fullPercentText?: string;
    /**
     * 禁用
     */
    disabled?: boolean;
}
declare const Button: React.FC<ButtonProps>;
export default Button;
