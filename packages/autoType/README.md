# `autoType`

## introduction

a typing effect react component

## install

```shell script
npm install @rainbow_deer/autotype
or
yarn add @rainbow_deer/autotype
```

## usage

### basic

```tsx
import React from 'react'
import AutoType from '@rainbow_deer/autotype'

export default () => {
  const arr = [
    { type: 'text', text: '1.' },
    { type: 'br' },
    { type: 'text', text: '宝' },
    { type: 'wait', time: 900 },
    { type: 'br' },
    { type: 'text', text: '我今去输液了' },
    { type: 'wait', time: 900 },
    { type: 'br' },
    { type: 'text', text: '输的什么液' },
    { type: 'br' },
    { type: 'wait', time: 900 },
    { type: 'text', text: '想你的夜~' },
    { type: 'br' },
    { type: 'wait', time: 900 },
    {
      type: 'img',
      src: 'https://pic4.zhimg.com/80/v2-f079243271daa0b291c3de8083f91e40_720w.jpg',
      id: 'cat',
      style:
        'width: 50%;display: block;margin-left: auto;margin-right: auto;margin-top: 20px;margin-bottom: 20px;',
    },
    { type: 'text', text: '2.' },
    { type: 'br' },
    { type: 'text', text: '宝' },
    { type: 'wait', time: 900 },
    { type: 'br' },
    { type: 'text', text: '我去喝酒了' },
    { type: 'wait', time: 900 },
    { type: 'br' },
    { type: 'text', text: '喝的什么酒?' },
    { type: 'br' },
    { type: 'wait', time: 900 },
    { type: 'text', text: '爱你到无药可酒~' },
    { type: 'br' },
    { type: 'wait', time: 900 },
    {
      type: 'img',
      src: 'https://pic1.zhimg.com/80/v2-ad3b2892f65765a72f9f8a5a80f111de_720w.jpg',
      style:
        'width: 50%;display: block;margin-left: auto;margin-right: auto;margin-top: 20px;margin-bottom: 20px;',
    },
  ]
  return <AutoType actions={arr} />
}
```
