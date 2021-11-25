/** @format */

import {useEffect, useRef} from 'react'

const useUpdateEffect = (cb: Function, dependencies: any[]) => {
  const isFirst = useRef(true)
  useEffect(() => {
    if (isFirst.current) {
      isFirst.current = false
    } else {
      const result = cb()
      return result
    }
  }, dependencies)
}

export default useUpdateEffect
