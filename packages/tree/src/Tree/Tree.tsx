/** @format */

import React, {useCallback, useEffect, useState} from 'react'
import cn from 'classnames'
import cloneDeep from 'lodash/cloneDeep'
import {treeForeach, treeDeepForeach} from './utils'
import TreeNode from './TreeNode'
import './style.less'

export type TNode = {
  title: React.ReactNode
  key: string
  props?: {
    [key: string]: any
  }
  treeNodes?: TNode[]
  disabled?: boolean
  [key: string]: any
}

export interface TreeProps {
  className?: string
  style?: React.CSSProperties
  treeData: TNode[]
  onClick?: (key: string, node?: TNode) => void
  onExpand?: (key: string[], node?: TNode) => void
  expandedKeys?: string[]
  defaultExpandKeys?: string[]
  defaultSelectedKeys?: string[]
  selectedKeys?: string[]
  expandAll?: boolean
  /**
   * 自定义标题
   * @param title
   */
  customTitleRender?: (title: string) => React.ReactNode
  /**
   * 自定义树节点的展开/折叠图标
   * @param isExpand
   */
  switcherIcon?: (isExpand: boolean) => React.ReactNode
  prefixCls?: string
}

const Tree: React.FC<TreeProps> = props => {
  const {
    treeData,
    onClick,
    defaultExpandKeys,
    onExpand,
    defaultSelectedKeys,
    expandedKeys,
    selectedKeys,
    expandAll,
    customTitleRender,
    switcherIcon,
    style,
    className,
    prefixCls = 'z',
  } = props

  const [selfTreeData, setSelfTreeData] = useState<TNode[]>([])

  const [_expandedKeys, set_ExpandedKeys] = useState<string[]>([])

  const [_selectedKeys, set_SelectedKeys] = useState<string[]>([])

  useEffect(() => {
    if (expandedKeys && expandedKeys.length) {
      typeof defaultExpandKeys === 'undefined' && set_ExpandedKeys([...expandedKeys])
    }
  }, [expandedKeys])

  useEffect(() => {
    if (selectedKeys && selectedKeys.length) {
      typeof defaultSelectedKeys === 'undefined' && set_SelectedKeys([...selectedKeys])
    }
  }, [selectedKeys])

  useEffect(() => {
    const _treeData = cloneDeep(treeData)
    treeDeepForeach(_treeData, (node, deep) => (node.deep = deep), 'treeNodes')
    setSelfTreeData(_treeData)
  }, [treeData])

  useEffect(() => {
    if (expandAll) {
      const _expandedKeys: string[] = []
      treeForeach(
        treeData,
        node => {
          if (Array.isArray(node.treeNodes)) _expandedKeys.push(node.key)
        },
        'treeNodes',
      )
      set_ExpandedKeys(_expandedKeys)
    }
  }, [expandAll, treeData])

  const _onClick = useCallback(
    (key: string, node: TNode) => {
      typeof onClick === 'function' && onClick(key, node)
      typeof selectedKeys === 'undefined' && set_SelectedKeys([key])
    },
    [onClick, _selectedKeys, selectedKeys],
  )

  const _onExpand = useCallback(
    (key: string, node: TNode, isExpand: boolean) => {
      if (isExpand) {
        _expandedKeys.push(key)
      } else {
        const index = _expandedKeys.findIndex(item => item === key)
        _expandedKeys.splice(index, 1)
      }
      typeof onExpand === 'function' && onExpand(_expandedKeys, node)
      typeof expandedKeys === 'undefined' && set_ExpandedKeys([..._expandedKeys])
    },
    [_expandedKeys, onExpand, expandedKeys],
  )

  return (
    <ul className={cn(`${prefixCls}-tree`, className)} style={style}>
      {Boolean(selfTreeData?.length) &&
      selfTreeData.map(node => (
        <TreeNode
          key={node.key}
          customTitleRender={customTitleRender}
          deep={node.deep}
          nodeKey={node.key}
          title={node.title}
          disabled={node.disabled}
          selectedKeys={_selectedKeys}
          expandedKeys={_expandedKeys}
          onClick={_onClick}
          onExpand={_onExpand}
          node={node}
          prefixCls={prefixCls}
          switcherIcon={switcherIcon}
        />
      ))}
    </ul>
  )
}

export default Tree
