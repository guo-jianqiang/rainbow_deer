!(function (e, n) {
  'object' == typeof exports && 'undefined' != typeof module
    ? (module.exports = n(require('react'), require('react-dom')))
    : 'function' == typeof define && define.amd
    ? define(['react', 'react-dom'], n)
    : ((e = 'undefined' != typeof globalThis ? globalThis : e || self).ReactHeroModal = n(
        e.React,
        e.ReactDom
      ))
})(this, function (M, e) {
  'use strict'
  function n(e) {
    return e && 'object' == typeof e && 'default' in e ? e : { default: e }
  }
  var T = n(M),
    g = n(e)
  function t(n, e) {
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
  function H(o) {
    for (var e = 1; e < arguments.length; e++) {
      var r = null != arguments[e] ? arguments[e] : {}
      e % 2
        ? t(Object(r), !0).forEach(function (e) {
            var n, t
            ;(n = o),
              (e = r[(t = e)]),
              t in n
                ? Object.defineProperty(n, t, {
                    value: e,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (n[t] = e)
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(r))
        : t(Object(r)).forEach(function (e) {
            Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(r, e))
          })
    }
    return o
  }
  function y() {
    return (y =
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
  function v(e, n) {
    if (null == e) return {}
    var t,
      o = (function (e, n) {
        if (null == e) return {}
        for (var t, o = {}, r = Object.keys(e), i = 0; i < r.length; i++)
          (t = r[i]), 0 <= n.indexOf(t) || (o[t] = e[t])
        return o
      })(e, n)
    if (Object.getOwnPropertySymbols)
      for (var r = Object.getOwnPropertySymbols(e), i = 0; i < r.length; i++)
        (t = r[i]),
          0 <= n.indexOf(t) || (Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t]))
    return o
  }
  function h(e, n) {
    return (
      (function (e) {
        if (Array.isArray(e)) return e
      })(e) ||
      (function (e, n) {
        var t =
          null == e ? null : ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator']
        if (null != t) {
          var o,
            r,
            i = [],
            a = !0,
            l = !1
          try {
            for (
              t = t.call(e);
              !(a = (o = t.next()).done) && (i.push(o.value), !n || i.length !== n);
              a = !0
            );
          } catch (e) {
            ;(l = !0), (r = e)
          } finally {
            try {
              a || null == t.return || t.return()
            } finally {
              if (l) throw r
            }
          }
          return i
        }
      })(e, n) ||
      (function (e, n) {
        if (e) {
          if ('string' == typeof e) return o(e, n)
          var t = Object.prototype.toString.call(e).slice(8, -1)
          return 'Map' === (t = 'Object' === t && e.constructor ? e.constructor.name : t) ||
            'Set' === t
            ? Array.from(e)
            : 'Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
            ? o(e, n)
            : void 0
        }
      })(e, n) ||
      (function () {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
        )
      })()
    )
  }
  function o(e, n) {
    ;(null == n || n > e.length) && (n = e.length)
    for (var t = 0, o = new Array(n); t < n; t++) o[t] = e[t]
    return o
  }
  var r,
    Y =
      ((function (e) {
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
                  for (var i in t) l.call(t, i) && t[i] && e.push(i)
                else e.push(t.toString())
            }
          }
          return e.join(' ')
        }
        var l
        ;(l = {}.hasOwnProperty), e.exports ? (e.exports = a.default = a) : (window.classNames = a)
      })((r = { exports: {} })),
      r.exports)
  function i(e, n) {
    var t,
      o = (n = void 0 === n ? {} : n).insertAt
    e &&
      'undefined' != typeof document &&
      ((t = document.head || document.getElementsByTagName('head')[0]),
      ((n = document.createElement('style')).type = 'text/css'),
      'top' === o && t.firstChild ? t.insertBefore(n, t.firstChild) : t.appendChild(n),
      n.styleSheet ? (n.styleSheet.cssText = e) : n.appendChild(document.createTextNode(e)))
  }
  i(
    '.z-dialog-root {\n  --z-dialog-duration: 200ms;\n  --text-color: #161923;\n  --border-color: #d9d9e6;\n  --split-line-color: #eceef2;\n  --primary-color: #0085ff;\n  --warning-color: #ff8500;\n  --error-color: #ff6151;\n  --success-color: #06c662;\n}\n.z-dialog-root .z-dialog {\n  position: relative;\n  animation-fill-mode: forwards;\n  animation-duration: var(--z-dialog-duration);\n}\n.z-dialog-root .z-dialog-wrap {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  overflow: auto;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  -webkit-overflow-scrolling: touch;\n  outline: 0;\n  z-index: 1021;\n}\n.z-dialog-root .z-dialog-title {\n  margin: 0;\n  padding-right: 14px;\n  font-weight: 400;\n  text-align: left;\n  color: var(--text-color);\n  font-size: 14px;\n  height: 16px;\n  line-height: 16px;\n  user-select: none;\n  -webkit-user-drag: none;\n}\n.z-dialog-root .z-dialog-content {\n  position: relative;\n  background-color: #ffffff;\n  border: none;\n  border-radius: 4px;\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.06);\n  background-clip: padding-box;\n}\n.z-dialog-root .z-dialog-close {\n  padding: 0;\n  cursor: pointer;\n  border: 0;\n  background: transparent;\n  font-size: 18px;\n  position: absolute;\n  right: 15px;\n  top: 10px;\n  line-height: 14px;\n  opacity: 0.6;\n  text-decoration: none;\n}\n.z-dialog-root .z-dialog-close-x {\n  display: inline-block;\n  line-height: 14px;\n  font-size: 14px;\n}\n.z-dialog-root .z-dialog-close:hover {\n  opacity: 1;\n  filter: alpha(opacity=100);\n  text-decoration: none;\n}\n.z-dialog-root .z-dialog-header {\n  padding: 10px 16px;\n  border-radius: 4px 4px 0 0;\n  background-color: rgba(241, 244, 247, 0.5);\n}\n.z-dialog-root .z-dialog-body {\n  box-sizing: content-box;\n  padding: 20px 40px;\n  overflow-y: auto;\n  color: var(--text-color);\n  font-size: 14px;\n}\n.z-dialog-root .z-dialog-body .z-confirm-status-body {\n  display: flex;\n}\n.z-dialog-root .z-dialog-body .z-confirm-status-body-icon {\n  margin-right: 8px;\n  font-size: 20px;\n}\n.z-dialog-root .z-dialog-body .z-confirm-status-body-icon svg {\n  vertical-align: 2px;\n}\n.z-dialog-root .z-dialog-body .z-confirm-status-body-msg {\n  flex: 1;\n  overflow: hidden;\n}\n.z-dialog-root .z-dialog-footer {\n  border-top: 1px solid var(--split-line-color);\n  padding: 20px 40px;\n  text-align: right;\n  border-radius: 0 0 4px 4px;\n}\n@keyframes zDialogZoomIn {\n  0% {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes zDialogZoomOut {\n  0% {\n    transform: translateY(0);\n  }\n  100% {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n}\n.z-dialog-root .z-dialog-mask {\n  transition: visibility var(--z-dialog-duration) linear;\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  background-color: rgba(55, 55, 55, 0.6);\n  height: 100%;\n  filter: alpha(opacity=50);\n  z-index: 1021;\n  animation-fill-mode: forwards;\n  animation-duration: var(--z-dialog-duration);\n}\n@keyframes zDialogFadeIn {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@keyframes zDialogFadeOut {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n'
  )
  var F = T.default.memo(
      function (e) {
        return e.children
      },
      function (e, n) {
        return !n.shouldUpdate
      }
    ),
    V = function (e) {
      var n = e.visible,
        t = e.maskStyle,
        o = e.zIndex,
        r = e.prefixCls,
        e = e.animationName
      return T.default.createElement('div', {
        className: ''.concat(r, '-mask'),
        style: H(
          {
            visibility: n ? 'visible' : 'hidden',
            animationName: n ? e + 'In' : e + 'Out',
            zIndex: o,
          },
          t
        ),
      })
    }
  i(
    '.z-button {\n  padding: 4px 15px;\n  user-select: none;\n  white-space: nowrap;\n  text-align: center;\n  border: 1px solid var(--border-color);\n  border-radius: 3px;\n  cursor: pointer;\n  background: #fff;\n  transition: width 0.2s ease-in-out;\n}\n.z-button span {\n  display: inline-block;\n}\n.z-button-loading {\n  display: inline-flex !important;\n  margin-right: 4px;\n  vertical-align: -0.16em;\n}\n.z-button:hover {\n  opacity: 0.8;\n}\n.z-button.loading {\n  cursor: inherit;\n  pointer-events: none;\n  opacity: 0.8;\n}\n.z-button.primary {\n  color: var(--primary-color);\n  border-color: var(--primary-color);\n}\n.z-button.emphasize {\n  color: #fff;\n  border-color: var(--primary-color);\n  background: var(--primary-color);\n}\n.z-button.small {\n  padding: 1px 7px;\n  font-size: 12px;\n  height: 24px;\n  line-height: 20px;\n}\n.z-button.normal {\n  font-size: 14px;\n  height: 30px;\n  line-height: 20px;\n}\n.z-button.large {\n  font-size: 16px;\n  padding: 8px 15px;\n  height: 40px;\n  line-height: 22px;\n}\n.z-button[disabled] {\n  color: #00000040;\n  border-color: #d9d9d9;\n  background: #f5f5f5;\n  cursor: not-allowed;\n  opacity: 0.8;\n}\n'
  )
  var a
  i(
    '.z-spinner {\n  animation: rotator 1.4s linear infinite;\n}\n@keyframes rotator {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(270deg);\n  }\n}\n.path {\n  stroke-dasharray: 189;\n  stroke-dashoffset: 0;\n  stroke: var(--primary-color);\n  transform-origin: center;\n  animation: dash 1.4s ease-in-out infinite;\n}\n@keyframes dash {\n  0% {\n    stroke-dashoffset: 189;\n  }\n  50% {\n    stroke-dashoffset: 189/4;\n    transform: rotate(135deg);\n  }\n  100% {\n    stroke-dashoffset: 189;\n    transform: rotate(450deg);\n  }\n}\n'
  ),
    ((e = a = a || {})[(e.large = 16)] = 'large'),
    (e[(e.normal = 14)] = 'normal'),
    (e[(e.small = 12)] = 'small')
  function d(e) {
    var n = void 0 === (o = e.size) ? 'normal' : o,
      t = e.className,
      o = e.style,
      e = e.circleStyle
    return T.default.createElement(
      'svg',
      {
        style: o,
        className: Y('z-spinner', t),
        width: a[n] + 'px',
        height: a[n] + 'px',
        viewBox: '0 0 66 66',
      },
      T.default.createElement('circle', {
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
  }
  var u = [
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
    f = { emphasize: { stroke: '#fff' } },
    e = /^[\u4e00-\u9fa5]{2}$/,
    l = e.test.bind(e)
  function m(e, n) {
    n = !(1 < arguments.length && void 0 !== n) || n
    if (null != e) {
      n = n ? ' ' : ''
      return 'string' != typeof e &&
        'number' != typeof e &&
        'string' == typeof e.type &&
        l(e.props.children)
        ? T.default.cloneElement(e, { children: e.props.children.split('').join(n) })
        : 'string' == typeof e
        ? l(e)
          ? T.default.createElement('span', null, e.split('').join(n))
          : T.default.createElement('span', null, e)
        : ((n = e),
          T.default.isValidElement(n) && n.type === T.default.Fragment
            ? T.default.createElement('span', null, e)
            : e)
    }
  }
  var W = function (e) {
      var n = e.type,
        t = void 0 === n ? '' : n,
        o = e.size,
        r = void 0 === o ? 'normal' : o,
        i = e.prefixCls,
        a = void 0 === i ? 'z' : i,
        l = e.className,
        c = e.style,
        s = e.block,
        n = void 0 !== s && s,
        o = e.autoInsertSpaceInButton,
        i = void 0 === o || o,
        s = e.loading,
        o = e.children,
        e = v(e, u),
        l = Y(''.concat(a, '-button'), r, t, l, { loading: s })
      return T.default.createElement(
        'button',
        y(
          {
            className: l,
            style: H({ display: n ? 'block' : 'inline-block', width: n ? '100%' : 'auto' }, c),
          },
          e
        ),
        s &&
          T.default.createElement(
            'span',
            { className: ''.concat(a, '-button-loading') },
            T.default.createElement(d, { size: r, circleStyle: f[t] })
          ),
        m(o, i)
      )
    },
    e = function (e) {
      return T.default.createElement(
        'svg',
        y(
          {
            viewBox: '0 0 1024 1024',
            version: '1.1',
            xmlns: 'http://www.w3.org/2000/svg',
            'p-id': '9871',
          },
          e
        ),
        T.default.createElement('path', {
          d: 'M512 85.333333C277.333333 85.333333 85.333333 277.333333 85.333333 512s192 426.666667 426.666667 426.666667 426.666667-192 426.666667-426.666667S746.666667 85.333333 512 85.333333z m0 640c-25.6 0-42.666667-17.066667-42.666667-42.666666v-170.666667c0-25.6 17.066667-42.666667 42.666667-42.666667s42.666667 17.066667 42.666667 42.666667v170.666667c0 25.6-17.066667 42.666667-42.666667 42.666666z m21.333333-341.333333h-42.666666c-12.8 0-21.333333-8.533333-21.333334-21.333333v-42.666667c0-12.8 8.533333-21.333333 21.333334-21.333333h42.666666c12.8 0 21.333333 8.533333 21.333334 21.333333v42.666667c0 12.8-8.533333 21.333333-21.333334 21.333333z',
          'p-id': '9872',
        })
      )
    },
    c = {
      close: function (e) {
        return T.default.createElement(
          'svg',
          y(
            {
              viewBox: '0 0 1024 1024',
              version: '1.1',
              xmlns: 'http://www.w3.org/2000/svg',
              'p-id': '9841',
            },
            e
          ),
          T.default.createElement('path', {
            d: 'M512 460.068571l376.685714-376.685714c14.628571-14.628571 37.302857-14.628571 51.931429 0 14.628571 14.628571 14.628571 37.302857 0 51.931429L563.931429 512l376.685714 376.685714c14.628571 14.628571 14.628571 37.302857 0 51.931429-14.628571 14.628571-37.302857 14.628571-51.931429 0L512 563.931429l-376.685714 376.685714c-14.628571 14.628571-37.302857 14.628571-51.931429 0-14.628571-14.628571-14.628571-37.302857 0-51.931429L460.068571 512 84.114286 135.314286c-14.628571-14.628571-14.628571-37.302857 0-51.931429 14.628571-14.628571 37.302857-14.628571 51.931428 0L512 460.068571z',
            'p-id': '9842',
          })
        )
      },
      error: function (e) {
        return T.default.createElement(
          'svg',
          y(
            {
              viewBox: '0 0 1024 1024',
              version: '1.1',
              xmlns: 'http://www.w3.org/2000/svg',
              'p-id': '10143',
            },
            e
          ),
          T.default.createElement('path', {
            d: 'M512 85.333333C277.333333 85.333333 85.333333 277.333333 85.333333 512s192 426.666667 426.666667 426.666667 426.666667-192 426.666667-426.666667S746.666667 85.333333 512 85.333333z m200.533333 567.466667c17.066667 17.066667 17.066667 42.666667 0 59.733333-8.533333 8.533333-17.066667 12.8-29.866666 12.8s-21.333333-4.266667-29.866667-12.8L512 571.733333l-140.8 140.8c-8.533333 8.533333-17.066667 12.8-29.866667 12.8s-21.333333-4.266667-29.866666-12.8c-17.066667-17.066667-17.066667-42.666667 0-59.733333l140.8-140.8-140.8-140.8c-17.066667-17.066667-17.066667-42.666667 0-59.733333s42.666667-17.066667 59.733333 0l140.8 140.8 140.8-140.8c17.066667-17.066667 42.666667-17.066667 59.733333 0s17.066667 42.666667 0 59.733333L571.733333 512l140.8 140.8z',
            'p-id': '10144',
          })
        )
      },
      success: function (e) {
        return T.default.createElement(
          'svg',
          y(
            {
              viewBox: '0 0 1024 1024',
              version: '1.1',
              xmlns: 'http://www.w3.org/2000/svg',
              'p-id': '10007',
            },
            e
          ),
          T.default.createElement('path', {
            d: 'M512 85.333333C277.333333 85.333333 85.333333 277.333333 85.333333 512s192 426.666667 426.666667 426.666667 426.666667-192 426.666667-426.666667S746.666667 85.333333 512 85.333333z m243.2 328.533334l-298.666667 298.666666c-8.533333 8.533333-17.066667 12.8-29.866666 12.8s-21.333333-4.266667-29.866667-12.8l-128-128c-17.066667-17.066667-17.066667-42.666667 0-59.733333s42.666667-17.066667 59.733333 0l98.133334 98.133333 268.8-268.8c17.066667-17.066667 42.666667-17.066667 59.733333 0s17.066667 42.666667 0 59.733334z',
            'p-id': '10008',
          })
        )
      },
      warning: e,
      info: e,
    }
  i(
    '.z-icon {\n  font-size: 14px;\n}\n.z-icon svg {\n  height: 1em;\n  width: 1em;\n  fill: currentColor;\n}\n'
  )
  function b(e) {
    function n() {
      return S()
    }
    function t() {
      'function' == typeof j && j()
    }
    var o = void 0 === (z = e.width) ? 400 : z,
      r = e.height,
      i = e.className,
      a = e.style,
      l = e.bodyStyle,
      c = e.closeIcon,
      s = void 0 === (w = e.closable) || w,
      d = void 0 === (k = e.openAnimation) || k,
      u = void 0 === (O = e.animationDuration) ? 200 : O,
      f = void 0 === (L = e.animationName) ? q : L,
      m = void 0 === (D = e.maskAnimationName) ? q : D,
      p = e.zIndex,
      g = e.title,
      y = e.footer,
      v = e.footerStyle,
      h = e.footerClassName,
      b = void 0 === (C = e.okText) ? '确认' : C,
      x = void 0 === (I = e.closeText) ? '取消' : I,
      z = e.confirmLoading,
      w = e.ref,
      E = e.visible,
      k = e.forceRender,
      O = e.dialogRender,
      N = void 0 === (L = e.keyboard) || L,
      C = void 0 === (D = e.prefixCls) ? 'z-dialog' : D,
      S = e.onCloseDialog,
      j = e.onOk,
      A = e.onDialogAnimationEnd,
      I = e.maskStyle,
      D = void 0 === (L = e.mask) || L,
      L = e.children,
      e = M.useRef(null)
    M.useEffect(function () {
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
    var R,
      P,
      b = T.default.createElement(
        T.default.Fragment,
        null,
        T.default.createElement(W, { style: { marginRight: 8 }, onClick: n }, x),
        T.default.createElement(W, { loading: z, type: 'emphasize', onClick: t }, b)
      )
    null !== y &&
      (B = T.default.createElement(
        'div',
        { className: Y(''.concat(C, '-footer'), h), style: v },
        y && y.length
          ? y.map(function (e) {
              return T.default.isValidElement(e) ? e : null
            })
          : b
      )),
      g &&
        (R = T.default.createElement(
          'div',
          { className: ''.concat(C, '-header') },
          T.default.createElement('div', { className: ''.concat(C, '-title') }, g)
        )),
      s &&
        (P = T.default.createElement(
          'button',
          { type: 'button', onClick: n, 'aria-label': 'Close', className: ''.concat(C, '-close') },
          (T.default.isValidElement(c) && c) ||
            T.default.createElement(U, { icon: 'close', className: ''.concat(C, '-close-x') })
        ))
    var r = T.default.createElement(
        'div',
        { className: Y(''.concat(C, '-content'), i), style: a },
        P,
        R,
        T.default.createElement(
          'div',
          { className: ''.concat(C, '-body'), style: H(H({}, l), {}, { height: r }) },
          L
        ),
        B
      ),
      L = M.useMemo(
        function () {
          return { '--z-dialog-duration': u + 'ms' }
        },
        [u]
      ),
      B = M.useMemo(
        function () {
          return { width: o, animationName: d ? ''.concat(f, E ? 'In' : 'Out') : '' }
        },
        [d, o, f, E]
      )
    return T.default.createElement(
      'div',
      {
        ref: e,
        className: 'z-dialog-root',
        style: H(
          {
            transition: d ? 'visibility var(--z-dialog-duration) linear' : '',
            visibility: E ? 'visible' : 'hidden',
          },
          L
        ),
      },
      D &&
        T.default.createElement(V, {
          animationName: d ? m : '',
          visible: E,
          prefixCls: C,
          maskStyle: I,
          zIndex: p,
        }),
      T.default.createElement(
        'div',
        { className: 'z-dialog-wrap', style: { zIndex: p } },
        T.default.createElement(
          'div',
          {
            ref: w,
            className: 'z-dialog',
            style: B,
            onAnimationEnd: function () {
              A && A()
            },
          },
          T.default.createElement(F, { shouldUpdate: E || !!k }, O ? O(r) : r)
        )
      )
    )
  }
  function x(e) {
    var n = M.useRef(null),
      t = e.visible,
      o = e.children,
      r = void 0 === (i = e.title) ? '' : i,
      i = v(e, w),
      a = (e = h(M.useState(!0), 2))[0],
      l = e[1]
    return (
      M.useEffect(
        function () {
          var e
          t && null !== (e = n.current) && void 0 !== e && e.restore()
        },
        [t]
      ),
      T.default.createElement(
        j,
        y(
          {
            visible: t,
            title: T.default.createElement(
              'div',
              {
                onMouseEnter: function () {
                  l(!1)
                },
                onMouseLeave: function () {
                  l(!0)
                },
                style: { cursor: a ? '' : 'move', height: 16, lineHeight: '16px' },
              },
              r
            ),
            dialogRender: function (e) {
              return T.default.createElement(z, { ref: n, disabled: a }, e)
            },
          },
          i
        ),
        o
      )
    )
  }
  function s(e) {
    var n = function () {},
      t = e.type,
      o = e.footer,
      e = v(e, O)
    return (n = C(
      H(
        H({}, e),
        {},
        {
          type: t,
          footer: o || [
            T.default.createElement(
              W,
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
  var p = ['icon', 'className'],
    U = function (e) {
      var n = e.icon,
        t = e.className,
        o = v(e, p),
        e = c[n]
      return e
        ? T.default.createElement(
            'i',
            y({ className: Y('z-icon', t) }, o),
            T.default.createElement(e, { icon: n })
          )
        : null
    },
    q = 'zDialogFade',
    z = T.default.forwardRef(function (e, n) {
      var t = e.children,
        o = e.disabled,
        r = M.useRef(null),
        a = M.useRef({ max: { x: 0, y: 0 }, min: { x: 0, y: 0 } }),
        e = h(M.useState({ x: 0, y: 0 }), 2),
        l = e[0],
        c = e[1]
      M.useEffect(function () {
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
        return c({ x: 0, y: 0 })
      }
      M.useImperativeHandle(n, function () {
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
                (o = o - r + l.x),
                (e = e - i + l.y),
                o > n.x ? (o = n.x) : o < t.x && (o = t.x),
                e > n.y ? (e = n.y) : e < t.y && (e = t.y),
                c({ x: o, y: e }))
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
          T.default.cloneElement(
            t,
            H(
              {
                style: H(
                  H({}, t.props.style),
                  {},
                  {
                    transform: 'translate('.concat(l.x, 'px, ').concat(l.y, 'px)'),
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
    w = ['visible', 'children', 'title'],
    E = 0,
    k = [
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
    O = ['type', 'footer'],
    N = [],
    C = function (e) {
      var n,
        t,
        o = e.type,
        r = e.openAnimation,
        i = void 0 === r || r,
        a = e.draggable,
        l = void 0 !== a && a,
        r = e.icon,
        a = e.content,
        c = e.onOk,
        s = e.onClose,
        d = e.animationName,
        u = e.maskAnimationName,
        e = v(e, k),
        f = { index: 0 },
        m = document.createElement('div')
      ;(m.id = 'z-confirm-' + ++E),
        g.default.render(
          T.default.createElement(
            l ? x : j,
            y({}, e, {
              visible: !0,
              onOk: function () {
                ;('function' != typeof c ? p : c)()
              },
              onClose: function () {
                ;('function' != typeof s ? p : s)()
              },
              getContainer: function () {
                return m
              },
            }),
            o || r
              ? T.default.createElement(
                  'div',
                  { className: 'z-confirm-status-body' },
                  T.default.isValidElement(r)
                    ? r
                    : o &&
                        T.default.createElement(U, {
                          icon: o,
                          className: Y('z-confirm-status-body-icon', o),
                        }),
                  T.default.createElement('div', { className: 'z-confirm-status-body-msg' }, a)
                )
              : a
          ),
          m,
          function () {
            ;(n = m.getElementsByClassName('z-dialog')[0]),
              (t = m.getElementsByClassName('z-dialog-mask')[0]),
              i || ((n.style.animationName = ''), (t.style.animationName = '')),
              document.body.appendChild(m)
          }
        )
      var p = function () {
        function e() {
          var e
          null == m || (null !== (e = m.parentNode) && void 0 !== e && e.removeChild(m)),
            N.splice(f.index, 1)
        }
        i
          ? ((n.style.animationName = d || q + 'Out'),
            (t.style.animationName = u || q + 'Out'),
            n.addEventListener('animationend', e))
          : e()
      }
      return N.push(p), (f.index = N.length - 1), p
    }
  ;(C.destroyAll = function () {
    for (var e; N.length; ) (e = N.pop()) && e()
  }),
    (C.info = function (e) {
      return s(H(H({}, e), {}, { type: 'info' }))
    }),
    (C.warning = function (e) {
      return s(H(H({}, e), {}, { type: 'warning' }))
    }),
    (C.error = function (e) {
      return s(H(H({}, e), {}, { type: 'error' }))
    }),
    (C.success = function (e) {
      return s(H(H({}, e), {}, { type: 'success' }))
    })
  var S = [
      'visible',
      'forceRender',
      'onClose',
      'onAfterClose',
      'getContainer',
      'children',
      'onOk',
      'destroyOnClose',
    ],
    j = function (e) {
      var n = e.visible,
        t = e.forceRender,
        o = void 0 !== t && t,
        r = e.onClose,
        i = e.onAfterClose,
        a = e.getContainer,
        l =
          void 0 === a
            ? function () {
                return document.body
              }
            : a,
        c = e.children,
        s = e.onOk,
        d = e.destroyOnClose,
        t = void 0 !== d && d,
        a = v(e, S),
        d = h(M.useState(o), 2),
        e = d[0],
        u = d[1],
        f = M.useRef(n),
        d = h(M.useState(n), 2),
        m = d[0],
        p = d[1]
      M.useEffect(
        function () {
          n && (u(!0), p(!0))
        },
        [n]
      ),
        M.useEffect(
          function () {
            f.current = m
          },
          [m]
        )
      a = H(
        {
          forceRender: o,
          visible: n,
          onDialogAnimationEnd: function () {
            n || (p(!1), i && i())
          },
          onCloseDialog: function () {
            'function' == typeof r && r()
          },
          onOk: s,
        },
        a
      )
      return o || (!t && e) || m
        ? l()
          ? g.default.createPortal(T.default.createElement(b, a, c), l())
          : T.default.createElement(b, a, c)
        : null
    }
  return (j.confirm = C), (j.DialogDrag = x), j
})
