---
title: button
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

## emphasize

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

## size

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

## percent

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

## loading

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
