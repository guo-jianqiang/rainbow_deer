---
title: tree
nav:
  title: Components
  path: /Components
group:
  title: ReactComponent
  path: /ReactComponent
---

## install

```shell
npm install @rainbow_deer/tree
yarn add @rainbow_deer/tree
```

## usage
### basic
```tsx
import React from 'react'
import Tree from '@rainbow_deer/tree'
export default () => {
  const treeData = [
    {
      title: '测试1',
      key: 1,
      treeNodes: [
        {
          title: '测试1',
          key: 2,
        },
        {
          title: '测试12',
          key: 3,
          treeNodes: [
            {
              title: '测试12333',
              key: 34,
            },
            {
              title: '测试12444',
              key: 36,
            },
          ]
        },
        {
          title: '测试13',
          key: 4,
        },
        {
          title: '测试14',
          key: 5,
        }
      ]
    }
  ]
  return <Tree treeData={treeData} />
}
```

