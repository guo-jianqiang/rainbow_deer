---
title: contextmenu
nav:
  title: Components
  path: /Components
group:
  title: ReactComponent
  path: /ReactComponent
---

contextMenu

## install

```shell
npm install @rainbow_deer/contextmenu
yarn add @rainbow_deer/contextmenu
```

## usage

### basic

```tsx
import React, { useEffect, useState } from 'react'
import ContextMenu from '@rainbow_deer/contextmenu'

const Index = () => {
  const contextmenus = [
    {
      text: '粘贴',
      subText: 'Ctrl + V',
      handler: (el) => alert('粘贴'),
    },
    {
      text: '全选',
      subText: 'Ctrl + A',
      handler: (el) => alert('全选'),
    },
    {
      text: '网格线',
      children: [
        {
          text: '粘贴1',
          subText: 'Ctrl + V',
          handler: (el) => alert('粘贴1'),
        },
        {
          text: '全选',
          subText: 'Ctrl + A',
          handler: (el) => alert('全选1'),
        },
      ],
    },
    {
      text: '重置当前页',
      disabled: true,
      handler: (el) => console.log(el),
    },
    { divider: true },
    {
      text: '从当前页演示',
      subText: 'Ctrl+F',
      handler: (el) => console.log(el),
    },
  ]
  return (
    <div
      style={{ height: 200, background: '#ccc' }}
      onContextMenu={ContextMenu.onContextMenu(contextmenus)}
    >
      右键该区域
    </div>
  )
}

export default Index
```

### interface

```ts
export interface ContextmenuItem {
  text?: string // 菜单文本
  subText?: string // 副文本
  divider?: boolean // 分割线 独立一个菜单项
  disabled?: boolean // 是否禁用
  hide?: boolean // 是否隐藏
  children?: ContextmenuItem[] // 子菜单
  handler?: (el: HTMLElement) => void // 点击回调
}
```
