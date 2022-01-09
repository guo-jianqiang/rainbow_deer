export interface ContextmenuItem {
  text?: string
  subText?: string
  divider?: boolean
  disabled?: boolean
  hide?: boolean
  children?: ContextmenuItem[]
  handler?: (el: HTMLElement | undefined) => void
}

export interface Axis {
  x: number
  y: number
}
