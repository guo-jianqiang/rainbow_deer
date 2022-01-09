import React from 'react'
import cn from 'classnames'
import { ContextmenuItem } from './type'
import './style.less'

interface MenuContentProps {
  prefixCls?: string
  menus: ContextmenuItem[]
  handleClickMenuItem: (menu: ContextmenuItem) => void
}

const MenuContent: React.FC<MenuContentProps> = (props) => {
  const { prefixCls, menus = [] } = props

  const handleClickMenuItem = (menu: ContextmenuItem) => (e: React.MouseEvent) => {
    e.stopPropagation()
    props?.handleClickMenuItem(menu)
  }

  return (
    <ul className={`${prefixCls}-menu-content`}>
      {menus.map((menu, index) => (
        <li
          key={index}
          className={cn(`${prefixCls}-menu-item`, {
            [`${prefixCls}-divider`]: menu.divider,
            [`${prefixCls}-disabled`]: menu.disabled,
          })}
          onClick={handleClickMenuItem(menu)}
        >
          <div
            className={cn(`${prefixCls}-menu-item-content`, {
              [`${prefixCls}-has-children`]: menu.children && menu.children.length,
              [`${prefixCls}-has-handler`]: menu.handler,
            })}
          >
            <span className={`${prefixCls}-text`}>{menu.text}</span>
            {Boolean(menu.subText) && (
              <span className={`${prefixCls}-sub-text`}>{menu.subText}</span>
            )}
            {menu.children && menu.children.length && (
              <div className={`${prefixCls}-sub-menu`}>
                <MenuContent
                  prefixCls={prefixCls}
                  menus={menu.children}
                  handleClickMenuItem={props.handleClickMenuItem}
                />
              </div>
            )}
          </div>
        </li>
      ))}
    </ul>
  )
}

export default MenuContent
