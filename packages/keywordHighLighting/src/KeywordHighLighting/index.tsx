import React, {useCallback, useEffect, useMemo, useState} from 'react'

export interface KeywordProps {
  string: string
  keyword: string
  fontColor?: string
}

type TStr = {title: string; style?: React.CSSProperties}

const KeywordHighLighting: React.FC<KeywordProps> = props => {
  const {keyword, fontColor, string} = props

  const [strArr, setStrArr] = useState<TStr[]>([])

  const keywordReg = useMemo(() => new RegExp(`${keyword}`, 'gi'), [keyword])

  const matchLightKeyword = useCallback(
    function (title: string): Promise<TStr[]> {
      return new Promise(res => {
        setTimeout(() => {
          const callback = () => {
            const titleFragment = []
            let currentMatchStartIndex = 0
            let currentMatchEndIndex = 0
            let currentMatch = null
            while ((currentMatch = keywordReg.exec(title))) {
              currentMatchStartIndex = currentMatch?.index
              titleFragment.push({title: title.substring(currentMatchEndIndex, currentMatchStartIndex)})
              currentMatchEndIndex = currentMatchStartIndex + currentMatch?.[0]?.length
              titleFragment.push({
                title: title.substring(currentMatchStartIndex, currentMatchEndIndex),
                style: {color: fontColor || 'red'},
              })
            }
            titleFragment.push({title: title.substring(currentMatchEndIndex)})
            res(titleFragment)
          }
          if (typeof title !== 'string' || !keyword) return res(title as any)
          callback()
        }, 0)
      })
    },
    [keyword, keywordReg],
  )

  useEffect(() => {
    ;(async function () {
      const _string = await matchLightKeyword(string)
      setStrArr(_string)
    })()
  }, [matchLightKeyword])

  return (
    <React.Fragment>
      {Array.isArray(strArr)
        ? strArr.map((item, index) => (
          <span key={index} style={item.style}>
              {item.title}
            </span>
        ))
        : string}
    </React.Fragment>
  )
}

export default KeywordHighLighting
