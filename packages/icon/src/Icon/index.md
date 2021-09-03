---
title: icon
nav:
  title: Components
  path: /Components
group:
  title: ReactComponent
  path: /ReactComponent
---

## install

```shell script
npm install @rainbow_deer/icon
or
yarn add @bowrainbow_deer/icon
```

## usage

```tsx
import React, { useState } from 'react'
import Icon from '@rainbow_deer/icon'

export default () => {
  return (
    <>
      <Icon icon='close' style={{ fontSize: 20 }} />
      <Icon icon='success' style={{ color: 'red' }} />
      <Icon icon='error' />
      <Icon icon='warning' />
      <Icon icon='home' />
    </>
  )
}
```

## props

```ts
export interface IconProps {
  icon: string
  className?: string
  style?: React.CSSProperties
}
```
