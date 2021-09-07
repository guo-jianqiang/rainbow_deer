let id = 0

export const getUUId = () => {
  return ++id
}

let _scrollTop: number
export class DialogHelper {
  // ===================== dialog 打开队列  ===================
  static dialogOpenQueue: number[] = []
  // dialog 显示时调用
  static afterOpen(dialogId: number) {
    DialogHelper.dialogOpenQueue.push(dialogId)
    const style = window.getComputedStyle(window.document.body, null)
    if (style.position === 'fixed') return
    _scrollTop = window.document.scrollingElement?.scrollTop || 0
    document.body.style.position = 'fixed'
    document.body.style.top = -_scrollTop + 'px'
  }

  // dialog 关闭时调用
  static beforeClose(dialogId: number, cb?: () => void) {
    const topDialogId = DialogHelper.dialogOpenQueue[DialogHelper.dialogOpenQueue.length - 1]
    if (topDialogId === dialogId) {
      const index = DialogHelper.dialogOpenQueue.findIndex((i) => i === dialogId)
      DialogHelper.dialogOpenQueue.splice(index, 1)
      cb && cb()
    }
    if (DialogHelper.dialogOpenQueue.length) return
    document.body.style.position = ''
    document.body.style.top = ''
    // 使 scrollTop 恢复原状
    if (window.document.scrollingElement) {
      window.document.scrollingElement.scrollTop = _scrollTop
    }
  }
}
