---
title: icon
nav:
  title: Components
  path: /Components
group:
  title: ReactComponent
  path: /ReactComponent
---

## 默认

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
    </>
  )
}
```
