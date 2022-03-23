// 广度优先
export function treeForeach<T extends {[key: string]: any}>(
  tree: T[] | T,
  func: (node: T) => void,
  childrenKey = 'children',
) {
  let node: T | undefined
  const list: Array<T> = Array.isArray(tree) ? [...tree] : [tree]
  while ((node = list.shift())) {
    func(node)
    node[childrenKey] && list.push(...node[childrenKey])
  }
}


/**
 * 深度优先遍历，返回节点信息及深度
 * @param tree
 * @param func
 * @param childrenKey
 */
export function treeDeepForeach<T extends {[key: string]: any}>(
  tree: T[] | T,
  func: (node: T, deep: number) => void,
  childrenKey = 'children',
) {
  let deep = 0
  const each = (node: T) => {
    deep++
    func(node, deep)
    if (node[childrenKey] && node[childrenKey].length) {
      node[childrenKey].forEach((item: T) => {
        each(item)
      })
    }
    deep--
  }
  if (Array.isArray(tree)) {
    tree.forEach(item => {
      each(item)
    })
  } else if (typeof tree === 'object') {
    each(tree)
  }
}
