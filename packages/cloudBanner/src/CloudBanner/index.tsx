import React, { useEffect, useState } from 'react'
import './style.less'

export type TCloudBannerNode = {
  imgUrl: string
  children?: React.ReactNode
}

export interface CloudBannerProps {
  imgList: TCloudBannerNode[]
  width?: number
  height?: number
  interval?: number
  autoPlay?: boolean
  onClick?: (i: number, item: TCloudBannerNode) => void
  dotColor?: string
  imgType?: string
}

export interface ArrowIconProps {
  style?: React.CSSProperties
  onClick?: () => void
}

const ArrowIcon = (props: ArrowIconProps) => (
  <svg
    {...props}
    className='arrow'
    viewBox='0 0 1024 1024'
    version='1.1'
    xmlns='http://www.w3.org/2000/svg'
    p-id='3083'
    width='200'
    height='200'
  >
    <path
      d='M724.529245 490.752075L342.766527 108.889366c-11.698858-11.698858-30.697002-11.698858-42.39586 0s-11.698858 30.697002 0 42.39586l381.762718 381.862709c11.698858 11.698858 30.697002 11.698858 42.39586 0 11.798848-11.698858 11.798848-30.697002 0-42.39586z'
      p-id='3084'
    ></path>
    <path
      d='M724.629235 489.852163c-11.698858-11.698858-30.697002-11.698858-42.395859 0l-381.962699 381.962699c-11.698858 11.698858-11.698858 30.697002 0 42.39586s30.697002 11.698858 42.395859 0l381.962699-381.962699c11.698858-11.698858 11.698858-30.697002 0-42.39586z'
      p-id='3085'
    ></path>
  </svg>
)

const CloudBanner: React.FC<CloudBannerProps> = (props) => {
  const {
    imgList = [],
    autoPlay = true,
    height,
    width,
    imgType = 'percentage',
    dotColor = '#c62f2f',
    interval = 5000,
    onClick,
  } = props

  const [currentIndex, setCurrentIndex] = useState(9)

  const [hasMouseEntered, setHasMouseEntered] = useState(false)

  const timer = React.useRef<any>()

  const isFirstRenderer = React.useRef(true)

  const imgListLen = imgList.length

  useEffect(() => {
    imgListLen > 0 && play()
  }, [imgListLen])

  useEffect(() => {
    if (!isFirstRenderer.current) {
      if (hasMouseEntered) {
        pause()
      } else {
        play()
      }
    }
  }, [hasMouseEntered])

  useEffect(() => {
    isFirstRenderer.current = false
  })

  const setClass = (i: number) => {
    let next = currentIndex === imgListLen - 1 ? 0 : currentIndex + 1
    let prev = currentIndex === 0 ? imgListLen - 1 : currentIndex - 1
    switch (i) {
      case currentIndex:
        return 'active'
      case next:
        return 'next'
      case prev:
        return 'prev'
      default:
        return ''
    }
  }

  const setContentStyle = () => {
    return {
      width: width ? width + 'px' : '100%',
      height: height === 0 ? '240px' : height + 'px',
      perspective: width + 'px',
      backgroundSize: imgType == 'percentage' ? '100% 100%' : imgType,
    }
  }

  const setActiveDot = (index: number) => {
    return index === currentIndex
      ? {
          backgroundColor: dotColor,
        }
      : {
          backgroundColor: '#ccc',
        }
  }

  const setBtnStyle = () => {
    return {
      top: height ? height / 2 : '50%',
    }
  }

  const play = () => {
    pause()
    if (autoPlay) {
      timer.current = setInterval(() => {
        next()
      }, interval)
    }
  }

  const pause = () => {
    clearInterval(timer.current)
  }
  const next = () => {
    setCurrentIndex((prevIndex) => {
      return (prevIndex + 1) % imgListLen
    })
  }
  const prev = () => {
    const prevIndex = currentIndex === 0 ? imgListLen - 1 : currentIndex - 1
    setCurrentIndex(prevIndex)
  }

  const resetCurrentIndex = (i: number) => () => {
    setCurrentIndex(i)
  }

  const handleClick = (i: number, item: TCloudBannerNode) => () => {
    if (i === currentIndex) {
      typeof onClick === 'function' && onClick(i, item)
    }
  }

  const handleMouseEnter = () => setHasMouseEntered(true)

  const handleMouseLeave = () => setHasMouseEntered(false)

  return (
    <div
      className='cloudBannerContainer'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className='cloudBannerContent' style={setContentStyle()}>
        {imgList.map((item, i) => (
          <div
            key={i}
            className={`bannerNode ${setClass(i)}`}
            style={{
              backgroundImage: `url(${item.imgUrl})`,
              height,
            }}
            onClick={handleClick(i, item)}
          >
            {item.children}
          </div>
        ))}
      </div>
      {hasMouseEntered && (
        <React.Fragment>
          <div style={setBtnStyle()} className='bannerBtn left'>
            <ArrowIcon
              style={{
                transform: 'rotate(180deg)',
              }}
              onClick={prev}
            />
          </div>
          <div style={setBtnStyle()} className='bannerBtn right'>
            <ArrowIcon onClick={next} />
          </div>
        </React.Fragment>
      )}
      <div className='dots'>
        {imgList.map((_, i) => (
          <span onMouseEnter={resetCurrentIndex(i)} key={i} style={setActiveDot(i)} />
        ))}
      </div>
    </div>
  )
}

export default CloudBanner
