---
title: keywordHighLighting
nav:
  title: Components
  path: /Components
group:
  title: ReactComponent
  path: /ReactComponent
---

## install

```shell
npm install @rainbow_deer/keywordHighLighting
yarn add @rainbow_deer/keywordHighLighting
```

## usage
### basic
```tsx
import React from 'react'
import KeywordHighLighting from '@rainbow_deer/keywordHighLighting'
export default () => {
  const [value, setValue] = React.useState('')
  return <div>
    <div>
      <input value={value} onChange={e => setValue(e.target.value)} />
    </div>
    <KeywordHighLighting string={'发记录卡撒旦就发两款手机的啦开发吉萨大了卡机发立刻撒旦就卢卡斯大家啊考虑技术的'} keyword={value} />
  </div>
}
```

