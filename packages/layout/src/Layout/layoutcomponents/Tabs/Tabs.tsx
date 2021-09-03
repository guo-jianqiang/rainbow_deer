/** @format */

import React, { FC, useEffect, useRef, useState } from 'react'
import { History } from 'history'
import { Menu, Dropdown, Tooltip } from 'antd'
import cx from 'classnames'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import { RouteItem, aliveControlInterface } from '../../Layout'
import { treeForeach, isEmpty } from '../../helpers'
import { getItem, removeItem, setItem } from '../../localStorage'
import { MenuInfo } from 'rc-menu/lib/interface'
import './style.less'

const LAYOUT_TAB = '__layout_tab__'
const TAB_ACTIONS = {
  REFRESH: 'REFRESH', // 刷新
  ADD: 'ADD', // 添加
  DEL: 'DEL', //删除
  DEL_RIGHT: 'DEL_RIGHT', //删除右边
  DEL_LEFT: 'DEL_LEFT', // 删除左边
  DEL_OTHER: 'DEL_OTHER', // 删除其他
  DEL_ALL: 'DEL_ALL', //删除所有
}

export interface TabsProps<T> {
  draggableTab?: boolean
  scrollDistance?: number
  aliveControl?: aliveControlInterface
  history: History
  routeItems: Array<T>
}

type TabsStaticFun = {
  clearTabsCache: () => void
}

export type TabsType = FC<TabsProps<RouteItem>> & TabsStaticFun

const Tabs: TabsType = ({
  draggableTab = true,
  history,
  routeItems,
  scrollDistance = 200,
  aliveControl,
}) => {
  const localTabs = !isEmpty(getItem(LAYOUT_TAB)) ? getItem(LAYOUT_TAB) : []
  const [tabs, setTabs] = useState<Array<RouteItem>>(localTabs)
  const [dragEnterTab, setDragEnterTab] = useState<RouteItem | null>()
  const prevTabs = useRef<Array<RouteItem>>(tabs)
  const dragTab = useRef<RouteItem>()
  const routeRef = useRef<RouteItem | null>(null)
  const tabAction = useRef<string>(TAB_ACTIONS.ADD)
  useEffect(() => {
    treeForeach(routeItems, (route) => {
      if (route.path === history.location.pathname && !route.hiddenTab) {
        addTab(route)
      }
    })
    scrollIntoTab()
  }, [history.location.pathname])
  useEffect(() => {
    setItem(LAYOUT_TAB, tabs)
    scrollIntoTab()
    if (routeRef.current && tabAction.current !== TAB_ACTIONS.ADD) {
      if (routeRef.current?.path !== history.location.pathname)
        history.push({ pathname: routeRef.current?.path })
      if (aliveControl && !isEmpty(aliveControl) && aliveControl.dropByCacheKey) {
        prevTabs.current.forEach((prevTab) => {
          if (!tabs.find((tab) => tab.path === prevTab.path)) {
            aliveControl.dropByCacheKey(prevTab.path)
          }
        })
      }
    }
    prevTabs.current = [...tabs]
  }, [tabs])
  const handleClickRefreshRoute = (tab: RouteItem) => () => {
    if (aliveControl && !isEmpty(aliveControl) && aliveControl.refreshByCacheKey)
      aliveControl.refreshByCacheKey(tab.path)
  }
  const scrollIntoTab = () => {
    const pathname = history.location.pathname
    const tabNode: HTMLElement | null = window.document.getElementById(pathname)
    tabNode && tabNode.scrollIntoView()
  }
  const isTabFixed = (tab: RouteItem) => tab.meta.tabFixed
  const addTab = (route: RouteItem) => {
    routeRef.current = route
    if (tabs.find((tab) => tab.path === route.path)) return
    setTabs((prevTabs: Array<RouteItem> = []) => {
      prevTabs.push({ ...route })
      if (routeRef.current) routeRef.current = route
      tabAction.current = TAB_ACTIONS.ADD
      return [...prevTabs]
    })
  }
  const handleClickDelRightTabs = (route: RouteItem, index: number) => () => {
    setTabs((prevTabs: Array<RouteItem> = []) => {
      const deletedTabs = prevTabs.slice(index + 1)
      const fixedTabs = deletedTabs.filter((item) => isTabFixed(item))
      const leftTabs = prevTabs.slice(0, index + 1)
      const existCurrentRoute = leftTabs.find((item) => item.path === history.location.pathname)
      if (routeRef.current && !existCurrentRoute) routeRef.current = route
      tabAction.current = TAB_ACTIONS.DEL_RIGHT
      return [...fixedTabs, ...leftTabs]
    })
  }
  const handleClickDelLeftTabs = (route: RouteItem, index: number) => () => {
    setTabs((prevTabs: Array<RouteItem> = []) => {
      const deletedTabs = prevTabs.slice(0, index)
      const fixedTabs = deletedTabs.filter((item) => isTabFixed(item))
      const rightTabs = prevTabs.slice(index)
      const existCurrentRoute = rightTabs.find((item) => item.path === history.location.pathname)
      if (routeRef.current && !existCurrentRoute) routeRef.current = route
      tabAction.current = TAB_ACTIONS.DEL_LEFT
      return [...fixedTabs, ...rightTabs]
    })
  }
  const handleClickDelOtherTabs = (route: RouteItem) => () =>
    setTabs((prevTabs: Array<RouteItem> = []) => {
      const fixedTabs = prevTabs.filter((item) => isTabFixed(item) && item.path !== route.path)
      if (routeRef.current) routeRef.current = route
      tabAction.current = TAB_ACTIONS.DEL_OTHER
      return [...fixedTabs, route]
    })
  const handleClickCloseTab = (tab: RouteItem) => (e: any | null) => {
    e && e.target && e.stopPropagation()
    setTabs((prevTabs: Array<RouteItem> = []) => {
      const index = prevTabs.findIndex((item) => item.path === tab.path)
      prevTabs.splice(index, 1)
      if (prevTabs.length) {
        if (routeRef.current && prevTabs[index - 1]) routeRef.current = prevTabs[index - 1]
      }
      tabAction.current = TAB_ACTIONS.DEL
      return [...prevTabs]
    })
  }
  const handleClickDelAllTabs = () => {
    setTabs((prevTabs: Array<RouteItem> = []) => {
      const fixedTabs = prevTabs.filter((item) => item.meta.tabFixed)
      if (fixedTabs.length) {
        if (routeRef.current) routeRef.current = fixedTabs[0]
      }
      tabAction.current = TAB_ACTIONS.DEL_ALL
      return [...fixedTabs]
    })
  }
  const handleClickTab = (route: RouteItem) => (e: React.MouseEvent<HTMLSpanElement>) => {
    e.stopPropagation()
    route.path !== history.location.pathname && history.push({ pathname: route.path })
    if (routeRef.current) routeRef.current = route
  }

  const handleClickScrollLeft = () => {
    const tabWrapperNode: HTMLElement | null = window.document.getElementById('Layout-tab')
    if (tabWrapperNode) {
      tabWrapperNode.scrollLeft = tabWrapperNode.scrollLeft - scrollDistance
    }
  }

  const handleClickScrollRight = () => {
    const tabWrapperNode: HTMLElement | null = window.document.getElementById('Layout-tab')
    if (tabWrapperNode) {
      tabWrapperNode.scrollLeft = tabWrapperNode.scrollLeft + scrollDistance
    }
  }

  const HandleClickTabMenu = (tab: RouteItem, i: number) => (e: MenuInfo) => {
    switch (e.key) {
      case TAB_ACTIONS.REFRESH:
        handleClickRefreshRoute(tab)()
        break
      case TAB_ACTIONS.DEL:
        handleClickCloseTab(tab)(null)
        break
      case TAB_ACTIONS.DEL_OTHER:
        handleClickDelOtherTabs(tab)()
        break
      case TAB_ACTIONS.DEL_RIGHT:
        handleClickDelRightTabs(tab, i)()
        break
      case TAB_ACTIONS.DEL_LEFT:
        handleClickDelLeftTabs(tab, i)()
        break
      case TAB_ACTIONS.DEL_ALL:
        handleClickDelAllTabs()
        break
    }
  }

  // ================== 拖拽 =======================

  const handleDragStart = (tab: RouteItem) => () => {
    dragTab.current = tab
  }

  const handleDragEnter = (tab: RouteItem) => () => {
    if (dragTab.current?.path === tab.path) return
    setDragEnterTab(tab)
  }

  const handleDragEnd = () => {
    setDragEnterTab(null)
  }

  const handleDrop = (tab: RouteItem, i: number) => () => {
    const index = tabs.findIndex((item) => item.path === dragTab.current?.path)
    setTabs((prevValue) => {
      prevValue[index] = { ...tab }
      if (dragTab.current) prevValue[i] = { ...dragTab.current }
      return [...prevValue]
    })
  }

  const tabMenu = (tab: RouteItem, i: number) => (
    <Menu onClick={HandleClickTabMenu(tab, i)}>
      {aliveControl && !isEmpty(aliveControl) && (
        <Menu.Item key={TAB_ACTIONS.REFRESH} disabled={!tab.meta.isCache}>
          刷新
        </Menu.Item>
      )}
      <Menu.Item key={TAB_ACTIONS.DEL} disabled={tab.meta.tabFixed}>
        关闭
      </Menu.Item>
      <Menu.Item key={TAB_ACTIONS.DEL_OTHER}>关闭其他</Menu.Item>
      <Menu.Item key={TAB_ACTIONS.DEL_RIGHT}>关闭右边</Menu.Item>
      <Menu.Item key={TAB_ACTIONS.DEL_LEFT}>关闭左边</Menu.Item>
      <Menu.Item key={TAB_ACTIONS.DEL_ALL}>关闭所有</Menu.Item>
    </Menu>
  )
  return (
    <div className='tabs'>
      <div className={'tabs-scrollbar tabs-scrollbar-left'} onClick={handleClickScrollLeft}>
        <Tooltip title='左滑'>
          <LeftOutlined />
        </Tooltip>
      </div>
      <div className='tabs-wrapper' id={'Layout-tab'}>
        {tabs.map((tab, i) => (
          <Dropdown overlay={tabMenu(tab, i)} trigger={['contextMenu']} key={tab.path}>
            <span
              draggable={draggableTab}
              onDrop={handleDrop(tab, i)}
              onDragStart={handleDragStart(tab)}
              onDragEnter={handleDragEnter(tab)}
              onDragEnd={handleDragEnd}
              onDragOver={(e) => e.preventDefault()}
              id={tab.path}
              className={cx('tabs-wrapper-item', {
                'tabs-wrapper-active': tab.path === history.location.pathname,
                'tabs-wrapper-dragEnter': dragEnterTab?.path === tab.path,
              })}
              onClick={handleClickTab(tab)}
            >
              <span className={'tabs-wrapper-item-name text-ellipsis-1'}>{tab.meta.name}</span>
              {/* {!tab.meta.tabFixed && (
                <CloseCircleOutlined className="tabs-wrapper-item-close" onClick={handleClickCloseTab(tab)} />
              )} */}
            </span>
          </Dropdown>
        ))}
      </div>
      <div className={'tabs-scrollbar tabs-scrollbar-right'} onClick={handleClickScrollRight}>
        <Tooltip title='右滑'>
          <RightOutlined />
        </Tooltip>
      </div>
    </div>
  )
}

Tabs.clearTabsCache = () => {
  removeItem(LAYOUT_TAB)
}

export default Tabs
