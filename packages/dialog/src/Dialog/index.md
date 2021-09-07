---
title: dialog
nav:
  title: Components
  path: /Components
group:
  title: ReactComponent
  path: /ReactComponent
---

## install

```shell
npm install @rainbow_deer/dialog
yarn add @rainbow_deer/dialog
```

## usage

### basic

```tsx
import React, { useState } from 'react'
import Dialog from '@rainbow_deer/dialog'
import Button from '@rainbow_deer/button'

export default () => {
  const [visible, setVisible] = useState(false)
  const handleClick = () => {
    setVisible(true)
  }
  return (
    <>
      <Button onClick={handleClick}>打开</Button>
      <Dialog destroyOnClose onClose={() => setVisible(false)} visible={visible} title='标题'>
        body
      </Dialog>
    </>
  )
}
```

### drag

```tsx
import React, { useState } from 'react'
import Dialog from '@rainbow_deer/dialog'
import Button from '@rainbow_deer/button'

export default () => {
  const [visible, setVisible] = useState(false)
  const handleClick = () => {
    setVisible(true)
  }
  return (
    <>
      <Button onClick={handleClick}>打开</Button>
      <Dialog.DialogDrag onClose={() => setVisible(false)} visible={visible} title='标题'>
        body
      </Dialog.DialogDrag>
    </>
  )
}
```

### custom dialog

```tsx
import React, { useState } from 'react'
import Dialog from '@rainbow_deer/dialog'
import Button from '@rainbow_deer/button'

export default () => {
  const [visible, setVisible] = React.useState(false)
  return (
    <>
      <Button onClick={() => setVisible(true)}>打开</Button>
      <Dialog
        title={'标题'}
        visible={visible}
        onClose={() => setVisible(false)}
        dialogRender={(_, closeDialog) => (
          <div
            style={{ border: '1px solid #ccc', padding: 20, borderRadius: 4, background: '#fff' }}
          >
            <h3>标题</h3>
            <div>body</div>
            <div style={{ textAlign: 'right' }}>
              <button style={{ marginRight: 8 }} onClick={() => closeDialog()}>
                取消
              </button>
              <button>确定</button>
            </div>
          </div>
        )}
      ></Dialog>
    </>
  )
}
```

### custom footer

```tsx
import React, { useState } from 'react'
import Dialog from '@rainbow_deer/dialog'
import Button from '@rainbow_deer/button'

export default () => {
  const [visible, setVisible] = React.useState(false)
  return (
    <>
      <Button type='emphasize' onClick={() => setVisible(true)}>
        打开
      </Button>
      <Dialog
        title='标题'
        visible={visible}
        onClose={() => setVisible(false)}
        footer={[<div>自定义页脚</div>]}
      >
        body
      </Dialog>
    </>
  )
}
```

### dialog confirm

```tsx
import React, { useState } from 'react'
import Dialog from '@rainbow_deer/dialog'
import Button from '@rainbow_deer/button'
export default () => {
  const handleClick = () => {
    const destroy = Dialog.confirm({
      title: '标题',
      onOk: () => {
        destroy()
      },
      onClose: () => {
        destroy()
      },
    })
  }
  return <Button onClick={handleClick}>打开</Button>
}
```

### confirm status

```tsx
import React, { useState } from 'react'
import Dialog from '@rainbow_deer/dialog'
import Button from '@rainbow_deer/button'

export default () => {
  const args = {
    title: '标题',
    content: 'content',
  }
  const handleClickSuccess = () => {
    Dialog.confirm.success({
      ...args,
    })
  }
  const handleClickInfo = () => {
    Dialog.confirm.info({
      ...args,
    })
  }
  const handleClickWarning = () => {
    Dialog.confirm.warning({
      ...args,
    })
  }
  const handleClickError = () => {
    Dialog.confirm.error({
      ...args,
    })
  }
  const btnStyle = { marginRight: 4 }
  return (
    <>
      <Button style={btnStyle} type='emphasize' onClick={handleClickInfo}>
        info
      </Button>
      <Button style={btnStyle} type='emphasize' onClick={handleClickSuccess}>
        success
      </Button>
      <Button style={btnStyle} type='emphasize' onClick={handleClickWarning}>
        warning
      </Button>
      <Button type='emphasize' onClick={handleClickError}>
        error
      </Button>
    </>
  )
}
```

### close confirm all

```tsx
import React, { useState } from 'react'
import Dialog from '@rainbow_deer/dialog'
import Button from '@rainbow_deer/button'

export default () => {
  const handleClickOpenThirdDialog = () => {
    Dialog.confirm({
      title: '标题',
      width: 250,
      content: <Button onClick={() => Dialog.confirm.destroyAll()}>关闭所有</Button>,
    })
  }
  const handleClickOpenInnerDialog = () => {
    Dialog.confirm({
      title: '标题',
      width: 300,
      content: <Button onClick={handleClickOpenThirdDialog}>打开</Button>,
    })
  }
  const handleClick = () => {
    const destroy = Dialog.confirm({
      title: '标题',
      content: (
        <Button type='emphasize' onClick={handleClickOpenInnerDialog}>
          打开
        </Button>
      ),
      onOk: () => {
        destroy()
      },
      onClose: () => {
        destroy()
      },
    })
  }
  return (
    <Button type='emphasize' onClick={handleClick}>
      打开
    </Button>
  )
}
```

## props

```ts
interface DialogWrapProps {
  /**
   * 显示隐藏
   */
  visible: boolean
  /**
   * 作用于dialog className
   */
  className?: string
  /**
   * 宽
   */
  width?: number
  /**
   * 高
   */
  height?: number
  /**
   * dialog 样式
   */
  style?: React.CSSProperties
  /**
   * body样式
   */
  bodyStyle?: React.CSSProperties
  /**
   * 页脚样式
   */
  footerStyle?: React.CSSProperties
  /**
   * 页脚类选择器
   */
  footerClassName?: string
  /**
   *  类选择器 前缀
   */
  prefixCls?: string
  /**
   *  层级
   */
  zIndex?: number
  /**
   *  自定义关闭图标
   */
  closeIcon?: React.ReactNode
  /**
   *  是否支持esc 关闭dialog
   */
  keyboard?: boolean
  /**
   *  标题
   */
  title?: any
  /**
   *  页脚
   */
  footer?: React.ReactNode[]
  /**
   *  是否强制渲染
   */
  forceRender?: boolean
  /**
   * 确认文本
   */
  okText?: string
  /**
   * 关闭文本
   */
  closeText?: string
  /**
   *  关闭
   */
  onClose?: () => void
  /**
   *  确认
   */
  onOk?: () => void
  /**
   * 确定按钮 loading
   */
  confirmLoading?: boolean
  /**
   *  关闭销毁组件
   */
  destroyOnClose?: boolean
  /**
   * 关闭后回调
   */
  onAfterClose?: () => void
  /**
   * 渲染父级
   */
  getContainer?: () => HTMLElement
  /**
   *  自定义dialog
   */
  dialogRender?: (content: React.ReactElement) => React.ReactElement
  /**
   * 是否开启动画
   */
  openAnimation?: boolean
  /**
   * 动画
   */
  animationName?: string
  /**
   * 遮罩层动画
   */
  maskAnimationName?: string
  /**
   *  动画周期
   */
  animationDuration?: number
  /**
   *  是否显示关闭
   */
  closable?: boolean
  /**
   *  是否显示遮罩
   */
  mask?: boolean
  /**
   *  遮罩样式
   */
  maskStyle?: React.CSSProperties
  children: React.ReactNode
}
```
