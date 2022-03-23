/** @format */

import React, {useMemo} from 'react'
import cn from 'classnames'
import {TNode} from './Tree'
import './style.less'
import Icon from '@rainbow_deer/icon'

interface TreeNodeProps {
  deep: number
  nodeKey: string
  title: React.ReactNode
  selectedKeys: string[]
  expandedKeys: string[]
  onClick: (key: string, node: TNode) => void
  onExpand: (key: string, node: TNode, isExpand: boolean) => void
  node: TNode
  disabled?: boolean
  customTitleRender?: (title: string) => React.ReactNode
  switcherIcon?: (isExpand: boolean) => React.ReactNode
  prefixCls?: string
}

const TreeNode: React.FC<TreeNodeProps> = props => {
  const {
    nodeKey,
    title,
    expandedKeys,
    selectedKeys,
    onExpand,
    onClick,
    node,
    disabled = false,
    deep,
    customTitleRender,
    prefixCls,
    switcherIcon,
  } = props

  const handleClick = (e: React.MouseEvent) => {
    if (disabled) return
    e.stopPropagation()
    onClick(nodeKey, node)
  }

  const handleExpand = (isExpand: boolean) => (e: React.MouseEvent) => {
    e.stopPropagation()
    onExpand(nodeKey, node, !isExpand)
  }

  const isExpand = useMemo(() => expandedKeys.some(item => item === nodeKey), [expandedKeys])

  const isSelected = useMemo(() => selectedKeys.some(item => item === nodeKey), [selectedKeys])

  return (
    <React.Fragment>
      <li className={`${prefixCls}-treeNode`}>
        <div className={cn(`${prefixCls}-treeNodeTitle`, {['selected']: isSelected})}>
          <span style={{paddingLeft: (deep - 1) * 20}} />
          {Boolean(node.treeNodes && node.treeNodes.length) ? (
            typeof switcherIcon === 'function' ? (
              <i className={`${prefixCls}-treeNodeExpandIcon`} onClick={handleExpand(isExpand)}>
                {switcherIcon(isExpand)}
              </i>
            ) : (
              <Icon
                className={`${prefixCls}-treeNodeExpandIcon`}
                icon={isExpand ? 'TriangleBottom' : 'TriangleRight'}
                onClick={handleExpand(isExpand)}
              />
            )
          ) : null}
          <span className={cn(`${prefixCls}-treeNodeText`, {['disabled']: disabled})} onClick={handleClick}>
            {typeof customTitleRender === 'function' ? customTitleRender(title as string) : title}
          </span>
        </div>
        {Boolean(node.treeNodes && node.treeNodes.length) && (
          <ul className={`${prefixCls}-innerTreeNode`}>
            {Boolean(isExpand) &&
            node?.treeNodes?.map((innerNode: TNode) => (
              <TreeNode
                customTitleRender={customTitleRender}
                deep={innerNode.deep}
                disabled={innerNode.disabled}
                nodeKey={innerNode.key}
                key={innerNode.key}
                title={innerNode.title}
                selectedKeys={selectedKeys}
                expandedKeys={expandedKeys}
                onClick={onClick}
                onExpand={onExpand}
                node={innerNode}
                prefixCls={prefixCls}
                switcherIcon={switcherIcon}
              />
            ))}
          </ul>
        )}
      </li>
    </React.Fragment>
  )
}

export default React.memo(TreeNode)
