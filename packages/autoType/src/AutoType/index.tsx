import React, { useEffect, useRef, useState } from 'react'
import './style.less'

enum EType {
  text = 'text',
  wait = 'wait',
  delete = 'delete',
  br = 'br',
  img = 'img'
}

type Taction = {type: EType, text?: string, src?: string, num: number, time?: number, style?: React.CSSProperties}

interface AutoTypeProps {
  /**
   * @description 打印速度
   */
  speed?: number,
  /**
   * @description 打印操作
   */
  actions: Taction[],
  className?: string
  style?: React.CSSProperties
}

const AutoType: React.FC<AutoTypeProps> = props => {

  const {actions, speed = 200, style, className} = props

  const [textArr, setTextArr] = useState<string[]>([])

  const indexRef = useRef(0)

  useEffect(() => {
    handle()
  }, [])

  const handle = () => {
    const current = actions[indexRef.current]
    if (!current) return
    switch (current?.type) {
      case EType.text:
        handleText(current)
        break
      case EType.wait:
        handleWait(current)
        break
      case EType.br:
        handleBr(current)
        break
      case EType.img:
        handleImg(current)
        break
      case EType.delete:
        handleDelete(current)
        break
      default:
        handlePlainText(current)
    }
  }

  const handleType = (text: string[], index: number, time: number) => {
    if (index < text.length) {
      setTextArr(prev => [...prev, text[index]])
      setTimeout(handleType, time, text, ++index, time)
    } else {
      next()
    }
  }

  const handleText = (type: Taction) => {
    const text = type.text?.split('') || []
    handleType(text, 0, type.time || speed)
  }

  const handleWait = (type: Taction) => {
    setTimeout(next, type.time || speed)
  };

  const handleDelete = (type: Taction) => {
    deleteText(type.num, type.time || speed)
  }

  const deleteText = (remain: number, time: number) => {
    if (remain > 0) {
      setTextArr(prev => {
        prev.pop()
        return [...prev]
      })
      setTimeout(deleteText, time, --remain, time)
    } else {
      next()
    }
  }

  const handleBr = (type: Taction) => {
    setTextArr(prev => {
      prev.push('<br /><br />')
      return [...prev]
    })
    setTimeout(next, type.time || speed)
  };

  const handleImg = (type: Taction) => {
    const result = ['<img '];
    for (const key in type) {
      result.push(key + '="' + type[key] + '" ')
    }
    result.push(' />')

    setTextArr(prev => {
      prev.push(result.join(''))
      return [...prev]
    })

    setTimeout(function(){
      next()
    }, type.time || speed)

  };

  const handlePlainText = (type: any) => {
    setTextArr(prev => {
      textArr.push(type)
      return [...prev]
    })
    setTimeout(function(){
      next()
    }, speed)
  }

  const next = () => {
    indexRef.current++
    handle()
  }

  return <div
    className={'z-autoType' + ` ${className}`}
    style={style}
    dangerouslySetInnerHTML={{__html: textArr.join('')}}
  />
}

export default AutoType
