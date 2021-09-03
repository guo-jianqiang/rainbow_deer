---
title: button
nav:
  title: Components
  path: /Components
group:
  title: ReactComponent
  path: /ReactComponent
---

## install

```shell script
npm install @rainbow_deer/button
or
yarn add @rainbow_deer/button
```

## usage

### basic

```tsx
import React, { useState } from 'react'
import Button from '@rainbow_deer/button'

export default () => {
  return (
    <>
      <Button>按钮</Button>
    </>
  )
}
```

## primary

```tsx
import React, { useState } from 'react'
import Button from '@rainbow_deer/button'

export default () => {
  return (
    <>
      <Button type='primary'>按钮</Button>
    </>
  )
}
```

### emphasize

```tsx
import React, { useState } from 'react'
import Button from '@rainbow_deer/button'

export default () => {
  return (
    <>
      <Button type='emphasize'>按钮</Button>
    </>
  )
}
```

### size

```tsx
import React, { useState } from 'react'
import Button from '@rainbow_deer/button'

const btnStyle = { marginRight: 8 }

export default () => {
  return (
    <>
      <Button type='emphasize' size='small' style={btnStyle}>
        按钮
      </Button>
      <Button type='emphasize' style={btnStyle}>
        按钮
      </Button>
      <Button type='emphasize' size='large'>
        按钮
      </Button>
    </>
  )
}
```

### disabled

```tsx
import React, { useState } from 'react'
import Button from '@rainbow_deer/button'

export default () => {
  return (
    <>
      <Button disabled type='emphasize'>
        按钮
      </Button>
    </>
  )
}
```

### percent

```tsx
import React, { useState } from 'react'
import Button from '@rainbow_deer/button'

export default () => {
  return (
    <>
      <Button percent={50} type='emphasize'>
        按钮
      </Button>
    </>
  )
}
```

### loading

```tsx
import React, { useState } from 'react'
import Button from '@rainbow_deer/button'

export default () => {
  return (
    <>
      <Button loading type='emphasize'>
        按钮
      </Button>
    </>
  )
}
```

### props

```ts
export interface ButtonProps extends Pick<ButtonType, Exclude<keyof ButtonType, 'type'>> {
  /**
   * 样式
   */
  style?: React.CSSProperties
  /**
   * 类选择器
   */
  className?: string
  /**
   * 类型
   */
  type?: 'primary' | 'emphasize'
  /**
   * 尺寸
   */
  size?: 'normal' | 'large' | 'small'
  /**
   * 类选择器前缀
   */
  prefixCls?: string
  /**
   * 2个中文字符自动添加空格
   */
  autoInsertSpaceInButton?: boolean
  /**
   * 是否独占一行
   */
  block?: boolean
  /**
   * 是否加载
   */
  loading?: boolean
  /**
   * 进度条
   */
  percent?: number
  /**
   * 进度文本
   */
  percentText?: string
  /**
   * 进度完成文本
   */
  fullPercentText?: string
  /**
   * 禁用
   */
  disabled?: boolean
}
```
