/** @format */

import React, {useCallback, useEffect, useLayoutEffect, useRef, useState} from 'react'
import './style.less'
import cn from 'classnames'
import { getUUId } from './utils'
import useUpdateEffect from './useUpdateEffect'

export interface SliderSelectProps {
  style?: React.CSSProperties
  className?: string
  value?: number | string
  prefixCls: string
  options: {
    label?: string
    value: number
  }[]
  onChange?: (value: number) => void,
  width?: number | string
}

const list = [
  {
    label: '慢',
    value: 0,
  },
  {
    label: '中',
    value: 1,
  },
  {
    label: '快',
    value: 2,
  },
  {
    label: '变速拟人',
    value: 3,
  }
]

const initLeft = -5

const SliderSelect: React.FC<SliderSelectProps> = props => {
  const {prefixCls = 'z', style, className, width = '100%', value, options = list, onChange} = props
  const uuidRef = useRef(`z-slider-select-${getUUId()}`)
  const dotRef = useRef<HTMLDivElement>(null)
  const wrapRef = useRef<HTMLDivElement>(null)
  const [sliderWidthArr, setSliderWidthArr] = useState<number[]>([])
  const [left, setLeft] = useState(initLeft)
  const [isMoving, setIsMoving] = useState(false)

  useEffect(() => {
    if (wrapRef.current) {
      const normalWidth = wrapRef.current.offsetWidth / (options.length - 1)
      const arr: number[] = []
      options.forEach((_, index) => {
        if (!index || index === options.length - 1) {
          arr.push(normalWidth / 2)
        } else {
          arr.push(normalWidth)
        }
      })
      setSliderWidthArr(arr)
    }
  }, [width])

  useLayoutEffect(() => {
    if (value && sliderWidthArr.length) {
      const index = options.findIndex(option => option.value === value)
      handleClick(index)()
    }
  }, [value, sliderWidthArr])

  const getOptsDomList = useCallback(() => {
    const optionsDomArr = Array.prototype.slice.call(
      document.getElementById(uuidRef.current)?.getElementsByClassName(`${prefixCls}-slider-select-option`),
    )
    return optionsDomArr
  }, [])

  useUpdateEffect(() => {
    if (!isMoving) {
      const optsDomArr = getOptsDomList()
      let index = 0
      let _left = left
      while (optsDomArr.length) {
        const currentOptDom = optsDomArr.shift() as HTMLDivElement
        _left -= currentOptDom.offsetWidth
        if (_left < 0) break
        index++
      }
      handleClick(index)()
    }
  }, [isMoving])

  useEffect(() => {
    let startX = 0
    const wrapWidth = wrapRef.current?.offsetWidth || 0
    const mouseMove = (e: MouseEvent) => {
      const offsetX = e.pageX - startX
      setLeft(() => {
        if (left + offsetX < 0) {
          return initLeft
        } else if (left + offsetX > wrapWidth) {
          return wrapWidth + initLeft
        }
        return left + offsetX + initLeft
      })
    }
    const mouseUp = () => {
      setIsMoving(false)
      document.removeEventListener('mousemove', mouseMove)
      document.removeEventListener('mouseup', mouseUp)
    }
    const mouseDown = (e: MouseEvent) => {

      //https://github.com/ant-design/ant-design/issues/25010

      e.preventDefault()
      setIsMoving(true)
      startX = e.pageX
      document.addEventListener('mousemove', mouseMove)
      document.addEventListener('mouseup', mouseUp)
    }
    dotRef.current?.addEventListener('mousedown', mouseDown)
    return () => {
      dotRef.current?.removeEventListener('mousedown', mouseDown)
    }
  }, [left])

  const handleClick = (index: number) => () => {
    const optionsDomArr = getOptsDomList()
    let offsetLeft = 0
    while (optionsDomArr.length) {
      const currentOptDom = optionsDomArr.shift() as HTMLDivElement
      if (currentOptDom.id === `${prefixCls}-slider-select-option-${index}`) {
        if (index === options.length - 1) {
          offsetLeft += currentOptDom.offsetWidth
        } else if (index && index !== options.length - 1) {
          offsetLeft += currentOptDom.offsetWidth / 2
        }
        break
      }
      offsetLeft += currentOptDom.offsetWidth
    }
    setLeft(offsetLeft + initLeft)
    typeof onChange === 'function' && onChange(options[index].value)
  }

  return (
    <div
      id={uuidRef.current}
      ref={wrapRef}
      className={cn(className, `${prefixCls}-slider-select`)}
      style={{...style, width}}
      draggable={false}
    >
      {options && options.length && (
        <div
          style={{
            transition: isMoving ? 'none' : 'left 200ms ease-in-out',
            left,
          }}
          className={`${prefixCls}-slider-select-dot`}
          ref={dotRef}
        />
      )}
      {options &&
      options.length &&
      options.map((option, index) => (
        <div
          draggable={false}
          key={option.value}
          className={`${prefixCls}-slider-select-option`}
          style={{width: sliderWidthArr[index]}}
          id={`${prefixCls}-slider-select-option-${index}`}
        >
          <div draggable={false} className={`${prefixCls}-slider-select-option-btn`} onClick={handleClick(index)} />
          <p draggable={false} className={`${prefixCls}-slider-select-option-label`}>{option.label}</p>
        </div>
      ))}
    </div>
  )
}

export default SliderSelect
