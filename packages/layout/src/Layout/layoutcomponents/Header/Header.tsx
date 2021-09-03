/** @format */

import React, { FC } from 'react'
import { Menu, Dropdown, Avatar, Tooltip } from 'antd'
import cx from 'classnames'
import { History } from 'history'
import './style.less'
import { UserOutlined } from '@ant-design/icons'

const LOGIN_PATH = '/login'

export interface HeaderProps {
  avatar?: React.ReactNode
  loginPath?: string
  username: string
  breadcrumb: React.ReactNode
  collapseBtn: React.ReactNode
  history: History
  onClickDrop: () => void
}

const Header: FC<HeaderProps> = (props) => {
  const {
    username,
    avatar,
    loginPath = LOGIN_PATH,
    breadcrumb,
    collapseBtn,
    onClickDrop,
    history,
  } = props
  const handleClickDrop = () => {
    history.push(loginPath)
    onClickDrop && onClickDrop()
  }
  const menu = (
    <Menu>
      <Menu.Item onClick={handleClickDrop}>退出</Menu.Item>
    </Menu>
  )
  return (
    <header className={'header'}>
      <div className={'header-left'}>
        {collapseBtn}
        {breadcrumb}
      </div>
      <div className={'header-right'}>
        <Tooltip title={username}>
          <span className={cx('header-right-admin', 'text-ellipsis-1')}>{username}</span>
        </Tooltip>
        <Dropdown overlay={menu} placement='bottomRight' arrow>
          <Avatar
            size={32}
            className={'header-right-avatar'}
            icon={avatar || <UserOutlined style={{ fontSize: 24 }} />}
          />
        </Dropdown>
      </div>
    </header>
  )
}
export default Header
