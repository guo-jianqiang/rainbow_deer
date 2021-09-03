/** @format */
import React, { FC } from 'react'
import { Breadcrumb as AntdBreadcrumb } from 'antd'
import { History } from 'history'
import { getTreePath } from '../../helpers'
import { RouteItem } from '../../Layout'

export interface BreadcrumbProps {
  routes: Array<RouteItem>
  history: History
}

const Breadcrumb: FC<BreadcrumbProps> = (props) => {
  const { routes, history } = props
  const routePath = getTreePath(
    routes,
    (route) => route.path === history.location.pathname,
    'routes'
  )
  const handleClick = (route: RouteItem) => () => {
    if (route.routes && route.routes.length) return
    history.push(route.path)
  }
  return (
    <AntdBreadcrumb>
      {routePath.map((route: RouteItem) => (
        <AntdBreadcrumb.Item key={route.path}>
          <a onClick={handleClick(route)}>{route.meta.name}</a>
        </AntdBreadcrumb.Item>
      ))}
    </AntdBreadcrumb>
  )
}

export default Breadcrumb
