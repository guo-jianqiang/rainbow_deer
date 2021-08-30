import React, { useRef, useEffect, useMemo, useState, useImperativeHandle } from 'react'
import ReactDom from 'react-dom'
function ownKeys(n, e) {
  var t,
    o = Object.keys(n)
  return (
    Object.getOwnPropertySymbols &&
      ((t = Object.getOwnPropertySymbols(n)),
      e &&
        (t = t.filter(function (e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable
        })),
      o.push.apply(o, t)),
    o
  )
}
function _objectSpread2(n) {
  for (var e = 1; e < arguments.length; e++) {
    var t = null != arguments[e] ? arguments[e] : {}
    e % 2
      ? ownKeys(Object(t), !0).forEach(function (e) {
          _defineProperty(n, e, t[e])
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t))
      : ownKeys(Object(t)).forEach(function (e) {
          Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(t, e))
        })
  }
  return n
}
function _defineProperty(e, n, t) {
  return (
    n in e
      ? Object.defineProperty(e, n, { value: t, enumerable: !0, configurable: !0, writable: !0 })
      : (e[n] = t),
    e
  )
}
function _extends() {
  return (_extends =
    Object.assign ||
    function (e) {
      for (var n = 1; n < arguments.length; n++) {
        var t,
          o = arguments[n]
        for (t in o) Object.prototype.hasOwnProperty.call(o, t) && (e[t] = o[t])
      }
      return e
    }).apply(this, arguments)
}
function _objectWithoutPropertiesLoose(e, n) {
  if (null == e) return {}
  for (var t, o = {}, r = Object.keys(e), i = 0; i < r.length; i++)
    (t = r[i]), 0 <= n.indexOf(t) || (o[t] = e[t])
  return o
}
function _objectWithoutProperties(e, n) {
  if (null == e) return {}
  var t,
    o = _objectWithoutPropertiesLoose(e, n)
  if (Object.getOwnPropertySymbols)
    for (var r = Object.getOwnPropertySymbols(e), i = 0; i < r.length; i++)
      (t = r[i]),
        0 <= n.indexOf(t) || (Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t]))
  return o
}
function _slicedToArray(e, n) {
  return (
    _arrayWithHoles(e) ||
    _iterableToArrayLimit(e, n) ||
    _unsupportedIterableToArray(e, n) ||
    _nonIterableRest()
  )
}
function _arrayWithHoles(e) {
  if (Array.isArray(e)) return e
}
function _iterableToArrayLimit(e, n) {
  var t = null == e ? null : ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator']
  if (null != t) {
    var o,
      r,
      i = [],
      a = !0,
      c = !1
    try {
      for (
        t = t.call(e);
        !(a = (o = t.next()).done) && (i.push(o.value), !n || i.length !== n);
        a = !0
      );
    } catch (e) {
      ;(c = !0), (r = e)
    } finally {
      try {
        a || null == t.return || t.return()
      } finally {
        if (c) throw r
      }
    }
    return i
  }
}
function _unsupportedIterableToArray(e, n) {
  if (e) {
    if ('string' == typeof e) return _arrayLikeToArray(e, n)
    var t = Object.prototype.toString.call(e).slice(8, -1)
    return 'Map' === (t = 'Object' === t && e.constructor ? e.constructor.name : t) || 'Set' === t
      ? Array.from(e)
      : 'Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
      ? _arrayLikeToArray(e, n)
      : void 0
  }
}
function _arrayLikeToArray(e, n) {
  ;(null == n || n > e.length) && (n = e.length)
  for (var t = 0, o = new Array(n); t < n; t++) o[t] = e[t]
  return o
}
function _nonIterableRest() {
  throw new TypeError(
    'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
  )
}
function createCommonjsModule(e, n) {
  return e((n = { exports: {} }), n.exports), n.exports
}
var classnames = createCommonjsModule(function (e) {
  function a() {
    for (var e = [], n = 0; n < arguments.length; n++) {
      var t = arguments[n]
      if (t) {
        var o,
          r = typeof t
        if ('string' == r || 'number' == r) e.push(t)
        else if (Array.isArray(t)) !t.length || ((o = a.apply(null, t)) && e.push(o))
        else if ('object' == r)
          if (t.toString === Object.prototype.toString)
            for (var i in t) c.call(t, i) && t[i] && e.push(i)
          else e.push(t.toString())
      }
    }
    return e.join(' ')
  }
  var c
  ;(c = {}.hasOwnProperty), e.exports ? (e.exports = a.default = a) : (window.classNames = a)
})
function styleInject(e, n) {
  var t,
    o = (n = void 0 === n ? {} : n).insertAt
  e &&
    'undefined' != typeof document &&
    ((t = document.head || document.getElementsByTagName('head')[0]),
    ((n = document.createElement('style')).type = 'text/css'),
    'top' === o && t.firstChild ? t.insertBefore(n, t.firstChild) : t.appendChild(n),
    n.styleSheet ? (n.styleSheet.cssText = e) : n.appendChild(document.createTextNode(e)))
}
var css_248z$3 =
  '.z-dialog-root {\n  --z-dialog-duration: 200ms;\n  --text-color: #161923;\n  --border-color: #d9d9e6;\n  --split-line-color: #eceef2;\n  --primary-color: #0085ff;\n  --warning-color: #ff8500;\n  --error-color: #ff6151;\n  --success-color: #06c662;\n}\n.z-dialog-root .z-dialog {\n  position: relative;\n  animation-fill-mode: forwards;\n  animation-duration: var(--z-dialog-duration);\n}\n.z-dialog-root .z-dialog-wrap {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  overflow: auto;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  -webkit-overflow-scrolling: touch;\n  outline: 0;\n  z-index: 1021;\n}\n.z-dialog-root .z-dialog-title {\n  margin: 0;\n  padding-right: 14px;\n  font-weight: 400;\n  text-align: left;\n  color: var(--text-color);\n  font-size: 14px;\n  height: 16px;\n  line-height: 16px;\n  user-select: none;\n  -webkit-user-drag: none;\n}\n.z-dialog-root .z-dialog-content {\n  position: relative;\n  background-color: #ffffff;\n  border: none;\n  border-radius: 4px;\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.06);\n  background-clip: padding-box;\n}\n.z-dialog-root .z-dialog-close {\n  padding: 0;\n  cursor: pointer;\n  border: 0;\n  background: transparent;\n  font-size: 18px;\n  position: absolute;\n  right: 15px;\n  top: 10px;\n  line-height: 14px;\n  opacity: 0.6;\n  text-decoration: none;\n}\n.z-dialog-root .z-dialog-close-x {\n  display: inline-block;\n  line-height: 14px;\n  font-size: 14px;\n}\n.z-dialog-root .z-dialog-close:hover {\n  opacity: 1;\n  filter: alpha(opacity=100);\n  text-decoration: none;\n}\n.z-dialog-root .z-dialog-header {\n  padding: 10px 16px;\n  border-radius: 4px 4px 0 0;\n  background-color: rgba(241, 244, 247, 0.5);\n}\n.z-dialog-root .z-dialog-body {\n  box-sizing: content-box;\n  padding: 20px 40px;\n  overflow-y: auto;\n  color: var(--text-color);\n  font-size: 14px;\n}\n.z-dialog-root .z-dialog-body .z-confirm-status-body {\n  display: flex;\n}\n.z-dialog-root .z-dialog-body .z-confirm-status-body-icon {\n  margin-right: 8px;\n  font-size: 20px;\n}\n.z-dialog-root .z-dialog-body .z-confirm-status-body-icon svg {\n  vertical-align: 2px;\n}\n.z-dialog-root .z-dialog-body .z-confirm-status-body-msg {\n  flex: 1;\n  overflow: hidden;\n}\n.z-dialog-root .z-dialog-footer {\n  border-top: 1px solid var(--split-line-color);\n  padding: 20px 40px;\n  text-align: right;\n  border-radius: 0 0 4px 4px;\n}\n@keyframes zDialogZoomIn {\n  0% {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes zDialogZoomOut {\n  0% {\n    transform: translateY(0);\n  }\n  100% {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n}\n.z-dialog-root .z-dialog-mask {\n  transition: visibility var(--z-dialog-duration) linear;\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  background-color: rgba(55, 55, 55, 0.6);\n  height: 100%;\n  filter: alpha(opacity=50);\n  z-index: 1021;\n  animation-fill-mode: forwards;\n  animation-duration: var(--z-dialog-duration);\n}\n@keyframes zDialogFadeIn {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@keyframes zDialogFadeOut {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n'
styleInject(css_248z$3)
var MemoChildren = React.memo(
    function (e) {
      return e.children
    },
    function (e, n) {
      return !n.shouldUpdate
    }
  ),
  Mask = function (e) {
    var n = e.visible,
      t = e.maskStyle,
      o = e.zIndex,
      r = e.prefixCls,
      e = e.animationName
    return React.createElement('div', {
      className: ''.concat(r, '-mask'),
      style: _objectSpread2(
        {
          visibility: n ? 'visible' : 'hidden',
          animationName: n ? e + 'In' : e + 'Out',
          zIndex: o,
        },
        t
      ),
    })
  },
  css_248z$2 =
    '.z-button {\n  padding: 4px 15px;\n  user-select: none;\n  white-space: nowrap;\n  text-align: center;\n  border: 1px solid var(--border-color);\n  border-radius: 3px;\n  cursor: pointer;\n  background: #fff;\n  transition: width 0.2s ease-in-out;\n}\n.z-button span {\n  display: inline-block;\n}\n.z-button-loading {\n  display: inline-flex !important;\n  margin-right: 4px;\n  vertical-align: -0.16em;\n}\n.z-button:hover {\n  opacity: 0.8;\n}\n.z-button.loading {\n  cursor: inherit;\n  pointer-events: none;\n  opacity: 0.8;\n}\n.z-button.primary {\n  color: var(--primary-color);\n  border-color: var(--primary-color);\n}\n.z-button.emphasize {\n  color: #fff;\n  border-color: var(--primary-color);\n  background: var(--primary-color);\n}\n.z-button.small {\n  padding: 1px 7px;\n  font-size: 12px;\n  height: 24px;\n  line-height: 20px;\n}\n.z-button.normal {\n  font-size: 14px;\n  height: 30px;\n  line-height: 20px;\n}\n.z-button.large {\n  font-size: 16px;\n  padding: 8px 15px;\n  height: 40px;\n  line-height: 22px;\n}\n.z-button[disabled] {\n  color: #00000040;\n  border-color: #d9d9d9;\n  background: #f5f5f5;\n  cursor: not-allowed;\n  opacity: 0.8;\n}\n'
styleInject(css_248z$2)
var ESize,
  css_248z$1 =
    '.z-spinner {\n  animation: rotator 1.4s linear infinite;\n}\n@keyframes rotator {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(270deg);\n  }\n}\n.path {\n  stroke-dasharray: 189;\n  stroke-dashoffset: 0;\n  stroke: var(--primary-color);\n  transform-origin: center;\n  animation: dash 1.4s ease-in-out infinite;\n}\n@keyframes dash {\n  0% {\n    stroke-dashoffset: 189;\n  }\n  50% {\n    stroke-dashoffset: 189/4;\n    transform: rotate(135deg);\n  }\n  100% {\n    stroke-dashoffset: 189;\n    transform: rotate(450deg);\n  }\n}\n'
styleInject(css_248z$1),
  (function (e) {
    ;(e[(e.large = 16)] = 'large'), (e[(e.normal = 14)] = 'normal'), (e[(e.small = 12)] = 'small')
  })((ESize = ESize || {}))
var Spin = function (e) {
    var n = e.size,
      t = void 0 === n ? 'normal' : n,
      o = e.className,
      n = e.style,
      e = e.circleStyle
    return React.createElement(
      'svg',
      {
        style: n,
        className: classnames('z-spinner', o),
        width: ESize[t] + 'px',
        height: ESize[t] + 'px',
        viewBox: '0 0 66 66',
      },
      React.createElement('circle', {
        className: 'path',
        style: e,
        fill: 'none',
        strokeWidth: '6',
        strokeLinecap: 'round',
        cx: '33',
        cy: '33',
        r: '30',
      })
    )
  },
  _excluded$4 = [
    'type',
    'size',
    'prefixCls',
    'className',
    'style',
    'block',
    'autoInsertSpaceInButton',
    'loading',
    'children',
  ],
  circleStyle = { emphasize: { stroke: '#fff' } },
  rxTwoCNChar = /^[\u4e00-\u9fa5]{2}$/,
  isTwoCNChar = rxTwoCNChar.test.bind(rxTwoCNChar)
function isString(e) {
  return 'string' == typeof e
}
function isReactFragment(e) {
  return React.isValidElement(e) && e.type === React.Fragment
}
function insertSpace(e) {
  var n = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1]
  if (null != e) {
    n = n ? ' ' : ''
    return 'string' != typeof e &&
      'number' != typeof e &&
      isString(e.type) &&
      isTwoCNChar(e.props.children)
      ? React.cloneElement(e, { children: e.props.children.split('').join(n) })
      : 'string' == typeof e
      ? isTwoCNChar(e)
        ? React.createElement('span', null, e.split('').join(n))
        : React.createElement('span', null, e)
      : isReactFragment(e)
      ? React.createElement('span', null, e)
      : e
  }
}
var Button = function (e) {
    var n = e.type,
      t = void 0 === n ? '' : n,
      o = e.size,
      r = void 0 === o ? 'normal' : o,
      i = e.prefixCls,
      a = void 0 === i ? 'z' : i,
      c = e.className,
      l = e.style,
      s = e.block,
      n = void 0 !== s && s,
      o = e.autoInsertSpaceInButton,
      i = void 0 === o || o,
      s = e.loading,
      o = e.children,
      e = _objectWithoutProperties(e, _excluded$4),
      c = classnames(''.concat(a, '-button'), r, t, c, { loading: s })
    return React.createElement(
      'button',
      _extends(
        {
          className: c,
          style: _objectSpread2(
            { display: n ? 'block' : 'inline-block', width: n ? '100%' : 'auto' },
            l
          ),
        },
        e
      ),
      s &&
        React.createElement(
          'span',
          { className: ''.concat(a, '-button-loading') },
          React.createElement(Spin, { size: r, circleStyle: circleStyle[t] })
        ),
      insertSpace(o, i)
    )
  },
  Close = function (e) {
    return React.createElement(
      'svg',
      _extends(
        {
          viewBox: '0 0 1024 1024',
          version: '1.1',
          xmlns: 'http://www.w3.org/2000/svg',
          'p-id': '9841',
        },
        e
      ),
      React.createElement('path', {
        d: 'M512 460.068571l376.685714-376.685714c14.628571-14.628571 37.302857-14.628571 51.931429 0 14.628571 14.628571 14.628571 37.302857 0 51.931429L563.931429 512l376.685714 376.685714c14.628571 14.628571 14.628571 37.302857 0 51.931429-14.628571 14.628571-37.302857 14.628571-51.931429 0L512 563.931429l-376.685714 376.685714c-14.628571 14.628571-37.302857 14.628571-51.931429 0-14.628571-14.628571-14.628571-37.302857 0-51.931429L460.068571 512 84.114286 135.314286c-14.628571-14.628571-14.628571-37.302857 0-51.931429 14.628571-14.628571 37.302857-14.628571 51.931428 0L512 460.068571z',
        'p-id': '9842',
      })
    )
  },
  Warning = function (e) {
    return React.createElement(
      'svg',
      _extends(
        {
          viewBox: '0 0 1024 1024',
          version: '1.1',
          xmlns: 'http://www.w3.org/2000/svg',
          'p-id': '9871',
        },
        e
      ),
      React.createElement('path', {
        d: 'M512 85.333333C277.333333 85.333333 85.333333 277.333333 85.333333 512s192 426.666667 426.666667 426.666667 426.666667-192 426.666667-426.666667S746.666667 85.333333 512 85.333333z m0 640c-25.6 0-42.666667-17.066667-42.666667-42.666666v-170.666667c0-25.6 17.066667-42.666667 42.666667-42.666667s42.666667 17.066667 42.666667 42.666667v170.666667c0 25.6-17.066667 42.666667-42.666667 42.666666z m21.333333-341.333333h-42.666666c-12.8 0-21.333333-8.533333-21.333334-21.333333v-42.666667c0-12.8 8.533333-21.333333 21.333334-21.333333h42.666666c12.8 0 21.333333 8.533333 21.333334 21.333333v42.666667c0 12.8-8.533333 21.333333-21.333334 21.333333z',
        'p-id': '9872',
      })
    )
  },
  Success = function (e) {
    return React.createElement(
      'svg',
      _extends(
        {
          viewBox: '0 0 1024 1024',
          version: '1.1',
          xmlns: 'http://www.w3.org/2000/svg',
          'p-id': '10007',
        },
        e
      ),
      React.createElement('path', {
        d: 'M512 85.333333C277.333333 85.333333 85.333333 277.333333 85.333333 512s192 426.666667 426.666667 426.666667 426.666667-192 426.666667-426.666667S746.666667 85.333333 512 85.333333z m243.2 328.533334l-298.666667 298.666666c-8.533333 8.533333-17.066667 12.8-29.866666 12.8s-21.333333-4.266667-29.866667-12.8l-128-128c-17.066667-17.066667-17.066667-42.666667 0-59.733333s42.666667-17.066667 59.733333 0l98.133334 98.133333 268.8-268.8c17.066667-17.066667 42.666667-17.066667 59.733333 0s17.066667 42.666667 0 59.733334z',
        'p-id': '10008',
      })
    )
  },
  Error = function (e) {
    return React.createElement(
      'svg',
      _extends(
        {
          viewBox: '0 0 1024 1024',
          version: '1.1',
          xmlns: 'http://www.w3.org/2000/svg',
          'p-id': '10143',
        },
        e
      ),
      React.createElement('path', {
        d: 'M512 85.333333C277.333333 85.333333 85.333333 277.333333 85.333333 512s192 426.666667 426.666667 426.666667 426.666667-192 426.666667-426.666667S746.666667 85.333333 512 85.333333z m200.533333 567.466667c17.066667 17.066667 17.066667 42.666667 0 59.733333-8.533333 8.533333-17.066667 12.8-29.866666 12.8s-21.333333-4.266667-29.866667-12.8L512 571.733333l-140.8 140.8c-8.533333 8.533333-17.066667 12.8-29.866667 12.8s-21.333333-4.266667-29.866666-12.8c-17.066667-17.066667-17.066667-42.666667 0-59.733333l140.8-140.8-140.8-140.8c-17.066667-17.066667-17.066667-42.666667 0-59.733333s42.666667-17.066667 59.733333 0l140.8 140.8 140.8-140.8c17.066667-17.066667 42.666667-17.066667 59.733333 0s17.066667 42.666667 0 59.733333L571.733333 512l140.8 140.8z',
        'p-id': '10144',
      })
    )
  },
  iconMap = { close: Close, error: Error, success: Success, warning: Warning, info: Warning },
  css_248z =
    '.z-icon {\n  font-size: 14px;\n}\n.z-icon svg {\n  height: 1em;\n  width: 1em;\n  fill: currentColor;\n}\n'
styleInject(css_248z)
var _excluded$3 = ['icon', 'className'],
  Icon = function (e) {
    var n = e.icon,
      t = e.className,
      o = _objectWithoutProperties(e, _excluded$3),
      e = iconMap[n]
    return e
      ? React.createElement(
          'i',
          _extends({ className: classnames('z-icon', t) }, o),
          React.createElement(e, { icon: n })
        )
      : null
  },
  defaultAnimationName = 'zDialogFade',
  Dialog = function (e) {
    function n() {
      return O()
    }
    function t() {
      'function' == typeof D && D()
    }
    var o = e.width,
      r = void 0 === o ? 400 : o,
      i = e.height,
      a = e.className,
      c = e.style,
      l = e.bodyStyle,
      s = e.closeIcon,
      d = e.closable,
      u = void 0 === d || d,
      m = e.openAnimation,
      p = void 0 === m || m,
      f = e.animationDuration,
      g = void 0 === f ? 200 : f,
      y = e.animationName,
      v = void 0 === y ? defaultAnimationName : y,
      b = e.maskAnimationName,
      h = void 0 === b ? defaultAnimationName : b,
      x = e.zIndex,
      z = e.title,
      w = e.footer,
      E = e.footerStyle,
      _ = e.footerClassName,
      R = e.okText,
      C = void 0 === R ? '确认' : R,
      k = e.closeText,
      S = void 0 === k ? '取消' : k,
      o = e.confirmLoading,
      d = e.ref,
      j = e.visible,
      m = e.forceRender,
      f = e.dialogRender,
      y = e.keyboard,
      N = void 0 === y || y,
      b = e.prefixCls,
      R = void 0 === b ? 'z-dialog' : b,
      O = e.onCloseDialog,
      D = e.onOk,
      A = e.onDialogAnimationEnd,
      k = e.maskStyle,
      y = e.mask,
      b = void 0 === y || y,
      y = e.children,
      e = useRef(null)
    useEffect(function () {
      function e(e) {
        27 === e.keyCode ? n() : 13 === e.keyCode && t()
      }
      return (
        N && document.addEventListener('keydown', e),
        function () {
          N && document.removeEventListener('keydown', e)
        }
      )
    }, [])
    var I,
      T,
      C = React.createElement(
        React.Fragment,
        null,
        React.createElement(Button, { style: { marginRight: 8 }, onClick: n }, S),
        React.createElement(Button, { loading: o, type: 'emphasize', onClick: t }, C)
      )
    null !== w &&
      (W = React.createElement(
        'div',
        { className: classnames(''.concat(R, '-footer'), _), style: E },
        w && w.length
          ? w.map(function (e) {
              return React.isValidElement(e) ? e : null
            })
          : C
      )),
      z &&
        (I = React.createElement(
          'div',
          { className: ''.concat(R, '-header') },
          React.createElement('div', { className: ''.concat(R, '-title') }, z)
        )),
      u &&
        (T = React.createElement(
          'button',
          { type: 'button', onClick: n, 'aria-label': 'Close', className: ''.concat(R, '-close') },
          (React.isValidElement(s) && s) ||
            React.createElement(Icon, { icon: 'close', className: ''.concat(R, '-close-x') })
        ))
    var i = React.createElement(
        'div',
        { className: classnames(''.concat(R, '-content'), a), style: c },
        T,
        I,
        React.createElement(
          'div',
          {
            className: ''.concat(R, '-body'),
            style: _objectSpread2(_objectSpread2({}, l), {}, { height: i }),
          },
          y
        ),
        W
      ),
      y = useMemo(
        function () {
          return { '--z-dialog-duration': g + 'ms' }
        },
        [g]
      ),
      W = useMemo(
        function () {
          return { width: r, animationName: p ? ''.concat(v, j ? 'In' : 'Out') : '' }
        },
        [p, r, v, j]
      )
    return React.createElement(
      'div',
      {
        ref: e,
        className: 'z-dialog-root',
        style: _objectSpread2(
          {
            transition: p ? 'visibility var(--z-dialog-duration) linear' : '',
            visibility: j ? 'visible' : 'hidden',
          },
          y
        ),
      },
      b &&
        React.createElement(Mask, {
          animationName: p ? h : '',
          visible: j,
          prefixCls: R,
          maskStyle: k,
          zIndex: x,
        }),
      React.createElement(
        'div',
        { className: 'z-dialog-wrap', style: { zIndex: x } },
        React.createElement(
          'div',
          {
            ref: d,
            className: 'z-dialog',
            style: W,
            onAnimationEnd: function () {
              A && A()
            },
          },
          React.createElement(MemoChildren, { shouldUpdate: j || !!m }, f ? f(i) : i)
        )
      )
    )
  },
  DragWrapper = React.forwardRef(function (e, n) {
    var t = e.children,
      o = e.disabled,
      r = useRef(null),
      a = useRef({ max: { x: 0, y: 0 }, min: { x: 0, y: 0 } }),
      e = _slicedToArray(useState({ x: 0, y: 0 }), 2),
      c = e[0],
      l = e[1]
    useEffect(function () {
      function e() {
        var e, n
        a.current &&
          r.current &&
          ((e = (n = r.current).offsetWidth),
          (n = n.offsetHeight),
          (a.current.max.x = (window.innerWidth - e) / 2),
          (a.current.min.x = (e - window.innerWidth) / 2),
          (a.current.max.y = (window.innerHeight - n) / 2),
          (a.current.min.y = (n - window.innerHeight) / 2))
      }
      return (
        e(),
        window.addEventListener('resize', e),
        function () {
          window.removeEventListener('resize', e)
        }
      )
    }, [])
    function i() {
      return l({ x: 0, y: 0 })
    }
    useImperativeHandle(n, function () {
      return { restore: i }
    })
    n = {}
    return (
      o ||
        (n.onMouseDown = function (e) {
          function n(e) {
            var n, t, o
            a.current &&
              ((n = (o = a.current).max),
              (t = o.min),
              (o = e.clientX),
              (e = e.clientY),
              (o = o - r + c.x),
              (e = e - i + c.y),
              o > n.x ? (o = n.x) : o < t.x && (o = t.x),
              e > n.y ? (e = n.y) : e < t.y && (e = t.y),
              l({ x: o, y: e }))
          }
          var t = e.clientX,
            e = e.clientY,
            r = t,
            i = e,
            e = function e() {
              document.removeEventListener('mousemove', n),
                document.removeEventListener('mouseup', e)
            }
          document.addEventListener('mousemove', n), document.addEventListener('mouseup', e)
        }),
      t &&
        React.cloneElement(
          t,
          _objectSpread2(
            {
              style: _objectSpread2(
                _objectSpread2({}, t.props.style),
                {},
                {
                  transform: 'translate('.concat(c.x, 'px, ').concat(c.y, 'px)'),
                  cursor: o ? '' : 'move',
                }
              ),
              ref: r,
            },
            n
          )
        )
    )
  }),
  _excluded$2 = ['visible', 'children', 'title'],
  DialogDrag = function (e) {
    var n = useRef(null),
      t = e.visible,
      o = e.children,
      r = e.title,
      i = void 0 === r ? '' : r,
      r = _objectWithoutProperties(e, _excluded$2),
      e = _slicedToArray(useState(!0), 2),
      a = e[0],
      c = e[1]
    useEffect(
      function () {
        var e
        t && null !== (e = n.current) && void 0 !== e && e.restore()
      },
      [t]
    )
    return React.createElement(
      DialogWrap,
      _extends(
        {
          visible: t,
          title: React.createElement(
            'div',
            {
              onMouseEnter: function () {
                c(!1)
              },
              onMouseLeave: function () {
                c(!0)
              },
              style: { cursor: a ? '' : 'move', height: 16, lineHeight: '16px' },
            },
            i
          ),
          dialogRender: function (e) {
            return React.createElement(DragWrapper, { ref: n, disabled: a }, e)
          },
        },
        r
      ),
      o
    )
  },
  id = 0,
  getUUId = function () {
    return ++id
  },
  _excluded$1 = [
    'type',
    'openAnimation',
    'draggable',
    'icon',
    'content',
    'onOk',
    'onClose',
    'animationName',
    'maskAnimationName',
  ],
  _excluded2 = ['type', 'footer'],
  confirmQueue = [],
  DialogConfirm = function (e) {
    var n,
      t,
      o = e.type,
      r = e.openAnimation,
      i = void 0 === r || r,
      a = e.draggable,
      c = void 0 !== a && a,
      r = e.icon,
      a = e.content,
      l = e.onOk,
      s = e.onClose,
      d = e.animationName,
      u = e.maskAnimationName,
      e = _objectWithoutProperties(e, _excluded$1),
      m = { index: 0 },
      p = document.createElement('div')
    p.id = 'z-confirm-' + getUUId()
    c = c ? DialogDrag : DialogWrap
    ReactDom.render(
      React.createElement(
        c,
        _extends({}, e, {
          visible: !0,
          onOk: function () {
            ;('function' != typeof l ? f : l)()
          },
          onClose: function () {
            ;('function' != typeof s ? f : s)()
          },
          getContainer: function () {
            return p
          },
        }),
        o || r
          ? React.createElement(
              'div',
              { className: 'z-confirm-status-body' },
              React.isValidElement(r)
                ? r
                : o &&
                    React.createElement(Icon, {
                      icon: o,
                      className: classnames('z-confirm-status-body-icon', o),
                    }),
              React.createElement('div', { className: 'z-confirm-status-body-msg' }, a)
            )
          : a
      ),
      p,
      function () {
        ;(n = p.getElementsByClassName('z-dialog')[0]),
          (t = p.getElementsByClassName('z-dialog-mask')[0]),
          i || ((n.style.animationName = ''), (t.style.animationName = '')),
          document.body.appendChild(p)
      }
    )
    var f = function () {
      function e() {
        var e
        null == p || (null !== (e = p.parentNode) && void 0 !== e && e.removeChild(p)),
          confirmQueue.splice(m.index, 1)
      }
      i
        ? ((n.style.animationName = d || defaultAnimationName + 'Out'),
          (t.style.animationName = u || defaultAnimationName + 'Out'),
          n.addEventListener('animationend', e))
        : e()
    }
    return confirmQueue.push(f), (m.index = confirmQueue.length - 1), f
  },
  showConfirmType = function (e) {
    var n = function () {},
      t = e.type,
      o = e.footer,
      e = _objectWithoutProperties(e, _excluded2)
    return (n = DialogConfirm(
      _objectSpread2(
        _objectSpread2({}, e),
        {},
        {
          type: t,
          footer: o || [
            React.createElement(
              Button,
              {
                type: 'emphasize',
                onClick: function () {
                  n()
                },
                key: 'I know',
              },
              '知道了'
            ),
          ],
          footerStyle: { border: 'none', padding: '10px 40px 30px' },
          onClose: function () {
            return n()
          },
        }
      )
    ))
  }
function info(e) {
  return showConfirmType(_objectSpread2(_objectSpread2({}, e), {}, { type: 'info' }))
}
var error = function (e) {
    return showConfirmType(_objectSpread2(_objectSpread2({}, e), {}, { type: 'error' }))
  },
  warning = function (e) {
    return showConfirmType(_objectSpread2(_objectSpread2({}, e), {}, { type: 'warning' }))
  },
  success = function (e) {
    return showConfirmType(_objectSpread2(_objectSpread2({}, e), {}, { type: 'success' }))
  },
  destroyAll = function () {
    for (var e; confirmQueue.length; ) (e = confirmQueue.pop()) && e()
  }
;(DialogConfirm.destroyAll = destroyAll),
  (DialogConfirm.info = info),
  (DialogConfirm.warning = warning),
  (DialogConfirm.error = error),
  (DialogConfirm.success = success)
var _excluded = [
    'visible',
    'forceRender',
    'onClose',
    'onAfterClose',
    'getContainer',
    'children',
    'onOk',
    'destroyOnClose',
  ],
  DialogWrap = function (e) {
    var n = e.visible,
      t = e.forceRender,
      o = void 0 !== t && t,
      r = e.onClose,
      i = e.onAfterClose,
      a = e.getContainer,
      c =
        void 0 === a
          ? function () {
              return document.body
            }
          : a,
      l = e.children,
      s = e.onOk,
      d = e.destroyOnClose,
      t = void 0 !== d && d,
      a = _objectWithoutProperties(e, _excluded),
      d = _slicedToArray(useState(o), 2),
      e = d[0],
      u = d[1],
      m = useRef(n),
      d = _slicedToArray(useState(n), 2),
      p = d[0],
      f = d[1]
    useEffect(
      function () {
        n && (u(!0), f(!0))
      },
      [n]
    ),
      useEffect(
        function () {
          m.current = p
        },
        [p]
      )
    a = _objectSpread2(
      {
        forceRender: o,
        visible: n,
        onDialogAnimationEnd: function () {
          n || (f(!1), i && i())
        },
        onCloseDialog: function () {
          'function' == typeof r && r()
        },
        onOk: s,
      },
      a
    )
    return o || (!t && e) || p
      ? c()
        ? ReactDom.createPortal(React.createElement(Dialog, a, l), c())
        : React.createElement(Dialog, a, l)
      : null
  }
;(DialogWrap.confirm = DialogConfirm), (DialogWrap.DialogDrag = DialogDrag)
export { DialogWrap as default }
