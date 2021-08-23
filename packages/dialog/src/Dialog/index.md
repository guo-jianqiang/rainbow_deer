---
title: dialog
nav:
  title: Components
  path: /Components
---

## 默认

```tsx
import React, {useState} from 'react';
import Dialog from "@rainbow_deer/dialog";

export default () => {
  const [visible, setVisible] = useState(false)
  const handleClick = () => {
    setVisible(true)
  }
  return (<>
    <button onClick={handleClick}>打开</button>
    <Dialog onClose={() => setVisible(false)} visible={visible} title="标题">
      body
    </Dialog>
  </>)
}
```

## 可拖拽


```tsx
import React, {useState} from 'react';
import Dialog from "@rainbow_deer/dialog";

export default () => {
  const [visible, setVisible] = useState(false)
  const handleClick = () => {
    setVisible(true)
  }
  return (<>
    <button onClick={handleClick}>打开</button>
    <Dialog.DialogDrag onClose={() => setVisible(false)} visible={visible} title="标题">
      body
    </Dialog.DialogDrag>
  </>)
}
```
## 自定义dialog样式
```tsx
import React, {useState} from 'react';
import Dialog from "@rainbow_deer/dialog";

export default () => {
  const [visible, setVisible] = React.useState(false)
  return (
    <>
      <button onClick={() => setVisible(true)}>
        打开
      </button>
      <Dialog
        title={'标题'}
        visible={visible}
        onClose={() => setVisible(false)}
        dialogRender={() => (
          <div style={{border: '1px solid #ccc', padding: 20, borderRadius: 4, background: '#fff'}}>
            <h3>标题</h3>
            <div>body</div>
            <div style={{textAlign: 'right'}}>
              <button style={{marginRight: 8}} onClick={() => setVisible(false)}>
                取消
              </button>
              <button>确定</button>
            </div>
          </div>
        )}>
      </Dialog>
    </>
  )
}
```

## 自定义footer
```tsx
import React, {useState} from 'react'
import Dialog from '@rainbow_deer/dialog'

export default () => {
  const [visible, setVisible] = React.useState(false)
  return (
    <>
      <button type="emphasize" onClick={() => setVisible(true)}>
        打开
      </button>
      <Dialog title='标题' visible={visible} onClose={() => setVisible(false)} footer={[<div>自定义页脚</div>]}>
        body
      </Dialog>
    </>
  )
}
```

## dialog confirm
```tsx
import React, {useState} from 'react'
import Dialog from '@rainbow_deer/dialog'
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
  return (
    <button onClick={handleClick}>
      打开
    </button>
  )
}
```


