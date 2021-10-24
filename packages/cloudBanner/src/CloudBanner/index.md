---
title: cloud-banner
nav:
  title: Components
  path: /Components
group:
  title: ReactComponent
  path: /ReactComponent
---

模网易云音乐 banner 轮播效果

## install

```shell
npm install @rainbow_deer/cloud-banner
yarn add @rainbow_deer/cloud-banner
```

## usage

### basic

```tsx
import React, { useEffect, useState } from 'react'
import CloudBanner from '@rainbow_deer/cloud-banner'

const Banner = () => {
  const [imgList, setImgList] = useState([])

  useEffect(() => {
    fetchBannerList()
  }, [])

  const fetchBannerList = () => {
    fetch('https://netease-cloud-music-api-rainbow-deer.vercel.app/banner').then((res) => {
      const resPromise = res.json()
      resPromise.then((res) => {
        const banners = res?.banners || []
        setImgList(() => {
          return banners.map((banner: any) => ({
            imgUrl: banner.imageUrl,
            children: <div>hello world</div>,
          }))
        })
      })
    })
  }

  return <CloudBanner imgList={imgList} height={200} />
}

export default Banner
```
