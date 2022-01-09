import React, { useMemo } from 'react'
import ReactDOM from 'react-dom'
import { Axis, ContextmenuItem } from './type'
import './style.less'
import MenuContent from './MenuContent'

export interface ContextMenuProps {
  prefixCls?: string
  menus: ContextmenuItem[]
  el?: HTMLElement
  removeContextMenu: Function
  axis: Axis
  zIndex?: number
}

const ContextMenu: React.FC<ContextMenuProps> & {
  onContextMenu: (menus: ContextmenuItem[]) => (e: React.MouseEvent) => void
} = (props) => {
  const { prefixCls = 'z', menus, el, removeContextMenu, axis } = props

  const style = useMemo(() => {
    const MENU_WIDTH = 170
    const MENU_HEIGHT = 30
    const DIVIDER_HEIGHT = 11
    const PADDING = 5

    const { x, y } = axis
    const menuCount = props.menus.filter((menu) => !(menu.divider || menu.hide)).length
    const dividerCount = props.menus.filter((menu) => menu.divider).length

    const menuWidth = MENU_WIDTH
    const menuHeight = menuCount * MENU_HEIGHT + dividerCount * DIVIDER_HEIGHT + PADDING * 2

    const screenWidth = document.body.clientWidth
    const screenHeight = document.body.clientHeight

    return {
      left: screenWidth <= x + menuWidth ? x - menuWidth : x,
      top: screenHeight <= y + menuHeight ? y - menuHeight : y,
    }
  }, [axis])

  const handleClickMenuItem = (item: ContextmenuItem) => {
    if (item.disabled) return
    if (item.children && !item.handler) return
    if (item.handler) item.handler(el)
    removeContextMenu && removeContextMenu()
  }

  return (
    <React.Fragment>
      <div
        className={`${prefixCls}-mask`}
        onContextMenu={(e) => {
          e.preventDefault()
          removeContextMenu()
        }}
        onMouseDown={() => removeContextMenu()}
      />
      <div className={`${prefixCls}-context-menu`} style={style}>
        <MenuContent
          prefixCls={prefixCls}
          menus={menus}
          handleClickMenuItem={handleClickMenuItem}
        />
      </div>
    </React.Fragment>
  )
}

ContextMenu.onContextMenu = (menus: ContextmenuItem[]) => (e: React.MouseEvent) => {
  e.stopPropagation()
  e.preventDefault()
  if (!menus) return
  const axis = {
    x: e.pageX,
    y: e.pageY,
  }
  const div = document.createElement('div')
  const onKeyDown = (e: KeyboardEvent) => {
    if (e.keyCode === 27) removeContextMenu()
  }
  const removeContextMenu = () => {
    ReactDOM.unmountComponentAtNode(div)
    div?.parentNode?.removeChild(div)
    document.body.removeEventListener('scroll', removeContextMenu)
    document.body.removeEventListener('keydown', onKeyDown)
    window.removeEventListener('resize', removeContextMenu)
  }
  // esc 页面拉伸 滚动 关闭contextMenu
  document.body.addEventListener('scroll', removeContextMenu)
  document.body.addEventListener('keydown', onKeyDown)
  window.addEventListener('resize', removeContextMenu)
  ReactDOM.render(
    <ContextMenu
      menus={menus}
      el={e.target as HTMLElement}
      removeContextMenu={removeContextMenu}
      axis={axis}
    />,
    div,
    () => {
      document.body.appendChild(div)
    }
  )
}

export default ContextMenu
