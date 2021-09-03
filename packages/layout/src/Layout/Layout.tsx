/** @format */
import React, { useRef, useReducer } from 'react'
import cx from 'classnames'
import Header from './layoutcomponents/Header/Header'
import Breadcrumb from './layoutcomponents/Breadcrumb/Breadcrumb'
import Menu from './layoutcomponents/Menu/Menu'
import { MenuUnfoldOutlined, MenuFoldOutlined, UserOutlined } from '@ant-design/icons'
import { Tooltip, BackTop } from 'antd'
import Tabs from './layoutcomponents/Tabs/Tabs'
import { configurationReducer } from './store/configurationReducer'
import ConfigurationContext, { getSystemConfig } from './store/configurationContext'
import { actionCollapsed } from './store/configurationAction'
import './style.less'
import { getFirstRoute } from './helpers'
import { History } from 'history'

export interface LayoutStyle extends React.CSSProperties {
  '--layout-menu-width': string
}

type ComponentType = React.ComponentType<any> & { name: string }

export interface RouteItem {
  path: string
  exact: boolean
  meta: {
    tabFixed?: boolean
    isCache?: boolean
    hidden?: boolean
    name: string
    icon: Function | string
  }
  component: ComponentType
  hiddenTab?: boolean
  routes?: Array<RouteItem>
  [key: string]: any
}

export interface aliveControlInterface {
  dropByCacheKey: (cacheKey: string) => void
  refreshByCacheKey: (cacheKey: string) => void
  getCachingKeys: () => Array<string>
  clearCache: () => void
}
export interface LayoutProps {
  /**
   *  图标
   */
  logo?: any
  /**
   *  头像
   */
  avatar?: React.ReactNode
  /**
   *  项目名
   */
  proName?: string
  /**
   * 是否展示tabs
   */
  showTabs?: boolean
  /**
   * 是否开启tab拖拽
   */
  draggableTab?: boolean
  /**
   * aliveControl 路由缓存函数，若要使用请安装[react-router-cache-route](https://github.com/CJY0208/react-router-cache-route)
   * 并将dropByCacheKey、refreshByCacheKey方法放入该对象导入，导入改对象后默认开启路由缓存功能
   */
  aliveControl?: aliveControlInterface
  /**
   *  登录页路由
   *  @default /login
   */
  loginPath?: string
  /**
   *  路由表
   */
  routeItems: Array<RouteItem>
  /**
   * history 对象
   */
  history: History
  /**
   *  用户名
   */
  username: string
  /**
   *  退出函数
   */
  onClickDrop: () => void
}
export type LayoutInnerComponent = {
  Tabs: typeof Tabs
  Header: typeof Header
  Menu: typeof Menu
  Breadcrumb: typeof Breadcrumb
}

const Layout: React.FC<LayoutProps> & LayoutInnerComponent = ({
  routeItems,
  history,
  username = '',
  loginPath,
  showTabs = true,
  draggableTab = true,
  aliveControl,
  onClickDrop,
  logo,
  avatar,
  proName,
  children,
}) => {
  const [configState, dispatch] = useReducer(configurationReducer, getSystemConfig())
  const contentRef = useRef<HTMLDivElement | null>(null)
  const layoutRef = useRef<HTMLDivElement | null>(null)
  const handleClickCollapse = () => {
    dispatch(actionCollapsed({ ...configState, collapsed: !configState.collapsed }))
  }
  const handleClickMask = () => {
    dispatch(actionCollapsed({ ...configState, collapsed: true }))
  }
  const handleClickGoHome = () => {
    const homeRoute = getFirstRoute(routeItems)
    history.push(homeRoute.path)
  }
  const handleClickDrop = () => {
    onClickDrop && onClickDrop()
  }
  const { collapsed } = configState
  const collapseBtn = (
    <Tooltip title={collapsed ? '展开' : '收起'}>
      <span onClick={handleClickCollapse} className={'layout-right-headerBtn'}>
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </span>
    </Tooltip>
  )
  const layoutStyle: LayoutStyle = { '--layout-menu-width': collapsed ? '56px' : '220px' }
  return (
    <ConfigurationContext.Provider
      value={{
        state: configState,
        dispatch,
      }}
    >
      <div className={'layout'} ref={layoutRef} style={layoutStyle}>
        <div
          className={cx('layout-mask', {
            'layout-mask-collapsed': collapsed,
          })}
          onClick={handleClickMask}
        />
        <aside
          className={cx('layout-aside', {
            'layout-aside-collapsed': collapsed,
          })}
        >
          <div
            className={cx('layout-aside-logo', {
              'layout-aside-logo-collapsed': collapsed,
            })}
          >
            <a onClick={handleClickGoHome}>
              {logo ? <img src={logo} /> : <UserOutlined />}
              {!collapsed && <h1 className={'text-ellipsis-1'}>{proName || ''}</h1>}
            </a>
          </div>
          <div className={'layout-aside-menu'}>
            <Menu collapsed={collapsed} routeItems={routeItems} history={history} />
          </div>
        </aside>
        <div className={'layout-right'}>
          <Header
            avatar={avatar}
            history={history}
            username={username}
            collapseBtn={collapseBtn}
            loginPath={loginPath}
            onClickDrop={handleClickDrop}
            breadcrumb={<Breadcrumb routes={routeItems} history={history} />}
          />
          {showTabs && (
            <Tabs
              draggableTab={draggableTab}
              history={history}
              routeItems={routeItems}
              aliveControl={aliveControl}
            />
          )}
          <div
            className={'layout-right-content'}
            style={{
              height: showTabs
                ? 'calc(100% - var(--layout-header-height) - var(--layout-tabs-height))'
                : 'calc(100% - var(--layout-header-height))',
            }}
            ref={contentRef}
          >
            {children}
            <BackTop
              style={{ right: 32, bottom: 32 }}
              target={() => contentRef.current || window}
              visibilityHeight={200}
            />
          </div>
        </div>
      </div>
    </ConfigurationContext.Provider>
  )
}

Layout.Tabs = Tabs
Layout.Header = Header
Layout.Menu = Menu
Layout.Breadcrumb = Breadcrumb

export default Layout
