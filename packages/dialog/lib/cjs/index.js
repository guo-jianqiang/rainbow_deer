"use strict";var React=require("react"),ReactDom=require("react-dom");function _interopDefaultLegacy(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var React__default=_interopDefaultLegacy(React),ReactDom__default=_interopDefaultLegacy(ReactDom);function ownKeys(t,e){var n,o=Object.keys(t);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(t),e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),o.push.apply(o,n)),o}function _objectSpread2(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?ownKeys(Object(n),!0).forEach(function(e){_defineProperty(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function _extends(){return(_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n,o=arguments[t];for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e}).apply(this,arguments)}function _objectWithoutPropertiesLoose(e,t){if(null==e)return{};for(var n,o={},a=Object.keys(e),r=0;r<a.length;r++)n=a[r],0<=t.indexOf(n)||(o[n]=e[n]);return o}function _objectWithoutProperties(e,t){if(null==e)return{};var n,o=_objectWithoutPropertiesLoose(e,t);if(Object.getOwnPropertySymbols)for(var a=Object.getOwnPropertySymbols(e),r=0;r<a.length;r++)n=a[r],0<=t.indexOf(n)||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n]);return o}function _slicedToArray(e,t){return _arrayWithHoles(e)||_iterableToArrayLimit(e,t)||_unsupportedIterableToArray(e,t)||_nonIterableRest()}function _arrayWithHoles(e){if(Array.isArray(e))return e}function _iterableToArrayLimit(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var o,a,r=[],i=!0,l=!1;try{for(n=n.call(e);!(i=(o=n.next()).done)&&(r.push(o.value),!t||r.length!==t);i=!0);}catch(e){l=!0,a=e}finally{try{i||null==n.return||n.return()}finally{if(l)throw a}}return r}}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Map"===(n="Object"===n&&e.constructor?e.constructor.name:n)||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(e,t):void 0}}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function createCommonjsModule(e,t){return e(t={exports:{}},t.exports),t.exports}var classnames=createCommonjsModule(function(e){function i(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o,a=typeof n;if("string"==a||"number"==a)e.push(n);else if(Array.isArray(n))!n.length||(o=i.apply(null,n))&&e.push(o);else if("object"==a)if(n.toString===Object.prototype.toString)for(var r in n)l.call(n,r)&&n[r]&&e.push(r);else e.push(n.toString())}}return e.join(" ")}var l;l={}.hasOwnProperty,e.exports?e.exports=i.default=i:window.classNames=i});function styleInject(e,t){var n,o=(t=void 0===t?{}:t).insertAt;e&&"undefined"!=typeof document&&(n=document.head||document.getElementsByTagName("head")[0],(t=document.createElement("style")).type="text/css","top"===o&&n.firstChild?n.insertBefore(t,n.firstChild):n.appendChild(t),t.styleSheet?t.styleSheet.cssText=e:t.appendChild(document.createTextNode(e)))}var css_248z$3=".z-dialog-root {\n  --z-dialog-duration: 200ms;\n  --text-color: #161923;\n  --border-color: #d9d9e6;\n  --split-line-color: #eceef2;\n  --primary-color: #0085ff;\n  --warning-color: #ff8500;\n  --error-color: #ff6151;\n  --success-color: #06c662;\n}\n.z-dialog-root .z-dialog {\n  position: relative;\n  animation-fill-mode: forwards;\n  animation-duration: var(--z-dialog-duration);\n}\n.z-dialog-root .z-dialog-wrap {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  overflow: auto;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  -webkit-overflow-scrolling: touch;\n  outline: 0;\n  z-index: 1021;\n}\n.z-dialog-root .z-dialog-title {\n  margin: 0;\n  padding-right: 14px;\n  font-weight: 400;\n  text-align: left;\n  color: var(--text-color);\n  font-size: 14px;\n  height: 16px;\n  line-height: 16px;\n  user-select: none;\n  -webkit-user-drag: none;\n}\n.z-dialog-root .z-dialog-content {\n  position: relative;\n  background-color: #ffffff;\n  border: none;\n  border-radius: 4px;\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.06);\n  background-clip: padding-box;\n}\n.z-dialog-root .z-dialog-close {\n  padding: 0;\n  cursor: pointer;\n  border: 0;\n  background: transparent;\n  font-size: 18px;\n  position: absolute;\n  right: 15px;\n  top: 10px;\n  line-height: 14px;\n  opacity: 0.6;\n  text-decoration: none;\n}\n.z-dialog-root .z-dialog-close-x {\n  display: inline-block;\n  line-height: 14px;\n  font-size: 14px;\n}\n.z-dialog-root .z-dialog-close:hover {\n  opacity: 1;\n  filter: alpha(opacity=100);\n  text-decoration: none;\n}\n.z-dialog-root .z-dialog-header {\n  padding: 10px 16px;\n  border-radius: 4px 4px 0 0;\n  background-color: rgba(241, 244, 247, 0.5);\n}\n.z-dialog-root .z-dialog-body {\n  box-sizing: content-box;\n  padding: 20px 40px;\n  overflow-y: auto;\n  color: var(--text-color);\n  font-size: 14px;\n}\n.z-dialog-root .z-dialog-body .z-confirm-status-body {\n  display: flex;\n}\n.z-dialog-root .z-dialog-body .z-confirm-status-body-icon {\n  margin-right: 8px;\n  font-size: 20px;\n}\n.z-dialog-root .z-dialog-body .z-confirm-status-body-icon svg {\n  vertical-align: 2px;\n}\n.z-dialog-root .z-dialog-body .z-confirm-status-body-msg {\n  flex: 1;\n  overflow: hidden;\n}\n.z-dialog-root .z-dialog-footer {\n  border-top: 1px solid var(--split-line-color);\n  padding: 20px 40px;\n  text-align: right;\n  border-radius: 0 0 4px 4px;\n}\n@keyframes zDialogZoomIn {\n  0% {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes zDialogZoomOut {\n  0% {\n    transform: translateY(0);\n  }\n  100% {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n}\n.z-dialog-root .z-dialog-mask {\n  transition: visibility var(--z-dialog-duration) linear;\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  background-color: rgba(55, 55, 55, 0.6);\n  height: 100%;\n  filter: alpha(opacity=50);\n  z-index: 1021;\n  animation-fill-mode: forwards;\n  animation-duration: var(--z-dialog-duration);\n}\n@keyframes zDialogFadeIn {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@keyframes zDialogFadeOut {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n";styleInject(css_248z$3);var MemoChildren=React__default.default.memo(function(e){return e.children},function(e,t){return!t.shouldUpdate}),Mask=function(e){var t=e.visible,n=e.maskStyle,o=e.zIndex,a=e.prefixCls,e=e.animationName;return React__default.default.createElement("div",{className:"".concat(a,"-mask"),style:_objectSpread2({visibility:t?"visible":"hidden",animationName:t?e+"In":e+"Out",zIndex:o},n)})},css_248z$2=".z-button {\n  padding: 4px 15px;\n  user-select: none;\n  white-space: nowrap;\n  text-align: center;\n  border: 1px solid var(--border-color);\n  border-radius: 3px;\n  cursor: pointer;\n  background: #fff;\n  transition: width 0.2s ease-in-out;\n}\n.z-button span {\n  display: inline-block;\n}\n.z-button-loading {\n  display: inline-flex !important;\n  margin-right: 4px;\n  vertical-align: -0.16em;\n}\n.z-button:hover {\n  opacity: 0.8;\n}\n.z-button.loading {\n  cursor: inherit;\n  pointer-events: none;\n  opacity: 0.8;\n}\n.z-button.primary {\n  color: var(--primary-color);\n  border-color: var(--primary-color);\n}\n.z-button.emphasize {\n  color: #fff;\n  border-color: var(--primary-color);\n  background: var(--primary-color);\n}\n.z-button.small {\n  padding: 1px 7px;\n  font-size: 12px;\n  height: 24px;\n  line-height: 20px;\n}\n.z-button.normal {\n  font-size: 14px;\n  height: 30px;\n  line-height: 20px;\n}\n.z-button.large {\n  font-size: 16px;\n  padding: 8px 15px;\n  height: 40px;\n  line-height: 22px;\n}\n.z-button[disabled] {\n  color: #00000040;\n  border-color: #d9d9d9;\n  background: #f5f5f5;\n  cursor: not-allowed;\n  opacity: 0.8;\n}\n";styleInject(css_248z$2);var ESize,css_248z$1=".z-spinner {\n  animation: rotator 1.4s linear infinite;\n}\n@keyframes rotator {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(270deg);\n  }\n}\n.path {\n  stroke-dasharray: 189;\n  stroke-dashoffset: 0;\n  stroke: var(--primary-color);\n  transform-origin: center;\n  animation: dash 1.4s ease-in-out infinite;\n}\n@keyframes dash {\n  0% {\n    stroke-dashoffset: 189;\n  }\n  50% {\n    stroke-dashoffset: 189/4;\n    transform: rotate(135deg);\n  }\n  100% {\n    stroke-dashoffset: 189;\n    transform: rotate(450deg);\n  }\n}\n";styleInject(css_248z$1),function(e){e[e.large=16]="large",e[e.normal=14]="normal",e[e.small=12]="small"}(ESize=ESize||{});var Spin=function(e){var t=e.size,n=void 0===t?"normal":t,o=e.className,t=e.style,e=e.circleStyle;return React__default.default.createElement("svg",{style:t,className:classnames("z-spinner",o),width:ESize[n]+"px",height:ESize[n]+"px",viewBox:"0 0 66 66"},React__default.default.createElement("circle",{className:"path",style:e,fill:"none",strokeWidth:"6",strokeLinecap:"round",cx:"33",cy:"33",r:"30"}))},_excluded$4=["type","size","prefixCls","className","style","block","autoInsertSpaceInButton","loading","children"],circleStyle={emphasize:{stroke:"#fff"}},rxTwoCNChar=/^[\u4e00-\u9fa5]{2}$/,isTwoCNChar=rxTwoCNChar.test.bind(rxTwoCNChar);function isString(e){return"string"==typeof e}function isReactFragment(e){return React__default.default.isValidElement(e)&&e.type===React__default.default.Fragment}function insertSpace(e){var t=!(1<arguments.length&&void 0!==arguments[1])||arguments[1];if(null!=e){t=t?" ":"";return"string"!=typeof e&&"number"!=typeof e&&isString(e.type)&&isTwoCNChar(e.props.children)?React__default.default.cloneElement(e,{children:e.props.children.split("").join(t)}):"string"==typeof e?isTwoCNChar(e)?React__default.default.createElement("span",null,e.split("").join(t)):React__default.default.createElement("span",null,e):isReactFragment(e)?React__default.default.createElement("span",null,e):e}}var Button=function(e){var t=e.type,n=void 0===t?"":t,o=e.size,a=void 0===o?"normal":o,r=e.prefixCls,i=void 0===r?"z":r,l=e.className,c=e.style,d=e.block,t=void 0!==d&&d,o=e.autoInsertSpaceInButton,r=void 0===o||o,d=e.loading,o=e.children,e=_objectWithoutProperties(e,_excluded$4),l=classnames("".concat(i,"-button"),a,n,l,{loading:d});return React__default.default.createElement("button",_extends({className:l,style:_objectSpread2({display:t?"block":"inline-block",width:t?"100%":"auto"},c)},e),d&&React__default.default.createElement("span",{className:"".concat(i,"-button-loading")},React__default.default.createElement(Spin,{size:a,circleStyle:circleStyle[n]})),insertSpace(o,r))},Close=function(e){return React__default.default.createElement("svg",_extends({viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"9841"},e),React__default.default.createElement("path",{d:"M512 460.068571l376.685714-376.685714c14.628571-14.628571 37.302857-14.628571 51.931429 0 14.628571 14.628571 14.628571 37.302857 0 51.931429L563.931429 512l376.685714 376.685714c14.628571 14.628571 14.628571 37.302857 0 51.931429-14.628571 14.628571-37.302857 14.628571-51.931429 0L512 563.931429l-376.685714 376.685714c-14.628571 14.628571-37.302857 14.628571-51.931429 0-14.628571-14.628571-14.628571-37.302857 0-51.931429L460.068571 512 84.114286 135.314286c-14.628571-14.628571-14.628571-37.302857 0-51.931429 14.628571-14.628571 37.302857-14.628571 51.931428 0L512 460.068571z","p-id":"9842"}))},Warning=function(e){return React__default.default.createElement("svg",_extends({viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"9871"},e),React__default.default.createElement("path",{d:"M512 85.333333C277.333333 85.333333 85.333333 277.333333 85.333333 512s192 426.666667 426.666667 426.666667 426.666667-192 426.666667-426.666667S746.666667 85.333333 512 85.333333z m0 640c-25.6 0-42.666667-17.066667-42.666667-42.666666v-170.666667c0-25.6 17.066667-42.666667 42.666667-42.666667s42.666667 17.066667 42.666667 42.666667v170.666667c0 25.6-17.066667 42.666667-42.666667 42.666666z m21.333333-341.333333h-42.666666c-12.8 0-21.333333-8.533333-21.333334-21.333333v-42.666667c0-12.8 8.533333-21.333333 21.333334-21.333333h42.666666c12.8 0 21.333333 8.533333 21.333334 21.333333v42.666667c0 12.8-8.533333 21.333333-21.333334 21.333333z","p-id":"9872"}))},Success=function(e){return React__default.default.createElement("svg",_extends({viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"10007"},e),React__default.default.createElement("path",{d:"M512 85.333333C277.333333 85.333333 85.333333 277.333333 85.333333 512s192 426.666667 426.666667 426.666667 426.666667-192 426.666667-426.666667S746.666667 85.333333 512 85.333333z m243.2 328.533334l-298.666667 298.666666c-8.533333 8.533333-17.066667 12.8-29.866666 12.8s-21.333333-4.266667-29.866667-12.8l-128-128c-17.066667-17.066667-17.066667-42.666667 0-59.733333s42.666667-17.066667 59.733333 0l98.133334 98.133333 268.8-268.8c17.066667-17.066667 42.666667-17.066667 59.733333 0s17.066667 42.666667 0 59.733334z","p-id":"10008"}))},Error=function(e){return React__default.default.createElement("svg",_extends({viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"10143"},e),React__default.default.createElement("path",{d:"M512 85.333333C277.333333 85.333333 85.333333 277.333333 85.333333 512s192 426.666667 426.666667 426.666667 426.666667-192 426.666667-426.666667S746.666667 85.333333 512 85.333333z m200.533333 567.466667c17.066667 17.066667 17.066667 42.666667 0 59.733333-8.533333 8.533333-17.066667 12.8-29.866666 12.8s-21.333333-4.266667-29.866667-12.8L512 571.733333l-140.8 140.8c-8.533333 8.533333-17.066667 12.8-29.866667 12.8s-21.333333-4.266667-29.866666-12.8c-17.066667-17.066667-17.066667-42.666667 0-59.733333l140.8-140.8-140.8-140.8c-17.066667-17.066667-17.066667-42.666667 0-59.733333s42.666667-17.066667 59.733333 0l140.8 140.8 140.8-140.8c17.066667-17.066667 42.666667-17.066667 59.733333 0s17.066667 42.666667 0 59.733333L571.733333 512l140.8 140.8z","p-id":"10144"}))},iconMap={close:Close,error:Error,success:Success,warning:Warning,info:Warning},css_248z=".z-icon {\n  font-size: 14px;\n}\n.z-icon svg {\n  height: 1em;\n  width: 1em;\n  fill: currentColor;\n}\n";styleInject(css_248z);var _excluded$3=["icon","className"],Icon=function(e){var t=e.icon,n=e.className,o=_objectWithoutProperties(e,_excluded$3),e=iconMap[t];return e?React__default.default.createElement("i",_extends({className:classnames("z-icon",n)},o),React__default.default.createElement(e,{icon:t})):null},defaultAnimationName="zDialogFade",Dialog=function(e){function t(){return D()}function n(){"function"==typeof O&&O()}var o=e.width,a=void 0===o?400:o,r=e.height,i=e.className,l=e.style,c=e.bodyStyle,d=e.closeIcon,s=e.closable,u=void 0===s||s,f=e.openAnimation,m=void 0===f||f,p=e.animationDuration,g=void 0===p?200:p,y=e.animationName,_=void 0===y?defaultAnimationName:y,v=e.maskAnimationName,b=void 0===v?defaultAnimationName:v,h=e.zIndex,x=e.title,z=e.footer,w=e.footerStyle,R=e.footerClassName,E=e.okText,C=void 0===E?"确认":E,k=e.closeText,S=void 0===k?"取消":k,o=e.confirmLoading,s=e.ref,j=e.visible,f=e.forceRender,p=e.dialogRender,y=e.keyboard,N=void 0===y||y,v=e.prefixCls,E=void 0===v?"z-dialog":v,D=e.onCloseDialog,O=e.onOk,A=e.onDialogAnimationEnd,k=e.maskStyle,y=e.mask,v=void 0===y||y,y=e.children,e=React.useRef(null);React.useEffect(function(){function e(e){27===e.keyCode?t():13===e.keyCode&&n()}return N&&document.addEventListener("keydown",e),function(){N&&document.removeEventListener("keydown",e)}},[]);var I,T,C=React__default.default.createElement(React__default.default.Fragment,null,React__default.default.createElement(Button,{style:{marginRight:8},onClick:t},S),React__default.default.createElement(Button,{loading:o,type:"emphasize",onClick:n},C));null!==z&&(L=React__default.default.createElement("div",{className:classnames("".concat(E,"-footer"),R),style:w},z&&z.length?z.map(function(e){return React__default.default.isValidElement(e)?e:null}):C)),x&&(I=React__default.default.createElement("div",{className:"".concat(E,"-header")},React__default.default.createElement("div",{className:"".concat(E,"-title")},x))),u&&(T=React__default.default.createElement("button",{type:"button",onClick:t,"aria-label":"Close",className:"".concat(E,"-close")},React__default.default.isValidElement(d)&&d||React__default.default.createElement(Icon,{icon:"close",className:"".concat(E,"-close-x")})));var r=React__default.default.createElement("div",{className:classnames("".concat(E,"-content"),i),style:l},T,I,React__default.default.createElement("div",{className:"".concat(E,"-body"),style:_objectSpread2(_objectSpread2({},c),{},{height:r})},y),L),y=React.useMemo(function(){return{"--z-dialog-duration":g+"ms"}},[g]),L=React.useMemo(function(){return{width:a,animationName:m?"".concat(_,j?"In":"Out"):""}},[m,a,_,j]);return React__default.default.createElement("div",{ref:e,className:"z-dialog-root",style:_objectSpread2({transition:m?"visibility var(--z-dialog-duration) linear":"",visibility:j?"visible":"hidden"},y)},v&&React__default.default.createElement(Mask,{animationName:m?b:"",visible:j,prefixCls:E,maskStyle:k,zIndex:h}),React__default.default.createElement("div",{className:"z-dialog-wrap",style:{zIndex:h}},React__default.default.createElement("div",{ref:s,className:"z-dialog",style:L,onAnimationEnd:function(){A&&A()}},React__default.default.createElement(MemoChildren,{shouldUpdate:j||!!f},p?p(r):r))))},DragWrapper=React__default.default.forwardRef(function(e,t){var n=e.children,o=e.disabled,a=React.useRef(null),i=React.useRef({max:{x:0,y:0},min:{x:0,y:0}}),e=_slicedToArray(React.useState({x:0,y:0}),2),l=e[0],c=e[1];React.useEffect(function(){function e(){var e,t;i.current&&a.current&&(e=(t=a.current).offsetWidth,t=t.offsetHeight,i.current.max.x=(window.innerWidth-e)/2,i.current.min.x=(e-window.innerWidth)/2,i.current.max.y=(window.innerHeight-t)/2,i.current.min.y=(t-window.innerHeight)/2)}return e(),window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}},[]);function r(){return c({x:0,y:0})}React.useImperativeHandle(t,function(){return{restore:r}});t={};return o||(t.onMouseDown=function(e){function t(e){var t,n,o;i.current&&(t=(o=i.current).max,n=o.min,o=e.clientX,e=e.clientY,o=o-a+l.x,e=e-r+l.y,o>t.x?o=t.x:o<n.x&&(o=n.x),e>t.y?e=t.y:e<n.y&&(e=n.y),c({x:o,y:e}))}var n=e.clientX,e=e.clientY,a=n,r=e,e=function e(){document.removeEventListener("mousemove",t),document.removeEventListener("mouseup",e)};document.addEventListener("mousemove",t),document.addEventListener("mouseup",e)}),n&&React__default.default.cloneElement(n,_objectSpread2({style:_objectSpread2(_objectSpread2({},n.props.style),{},{transform:"translate(".concat(l.x,"px, ").concat(l.y,"px)"),cursor:o?"":"move"}),ref:a},t))}),_excluded$2=["visible","children","title"],DialogDrag=function(e){var t=React.useRef(null),n=e.visible,o=e.children,a=e.title,r=void 0===a?"":a,a=_objectWithoutProperties(e,_excluded$2),e=_slicedToArray(React.useState(!0),2),i=e[0],l=e[1];React.useEffect(function(){var e;n&&null!==(e=t.current)&&void 0!==e&&e.restore()},[n]);return React__default.default.createElement(DialogWrap,_extends({visible:n,title:React__default.default.createElement("div",{onMouseEnter:function(){l(!1)},onMouseLeave:function(){l(!0)},style:{cursor:i?"":"move",height:16,lineHeight:"16px"}},r),dialogRender:function(e){return React__default.default.createElement(DragWrapper,{ref:t,disabled:i},e)}},a),o)},id=0,getUUId=function(){return++id},_excluded$1=["type","openAnimation","draggable","icon","content","onOk","onClose","animationName","maskAnimationName"],_excluded2=["type","footer"],confirmQueue=[],DialogConfirm=function(e){var t,n,o=e.type,a=e.openAnimation,r=void 0===a||a,i=e.draggable,l=void 0!==i&&i,a=e.icon,i=e.content,c=e.onOk,d=e.onClose,s=e.animationName,u=e.maskAnimationName,e=_objectWithoutProperties(e,_excluded$1),f={index:0},m=document.createElement("div");m.id="z-confirm-"+getUUId(),ReactDom__default.default.render(React__default.default.createElement(l?DialogDrag:DialogWrap,_extends({},e,{visible:!0,onOk:function(){("function"!=typeof c?p:c)()},onClose:function(){("function"!=typeof d?p:d)()},getContainer:function(){return m}}),o||a?React__default.default.createElement("div",{className:"z-confirm-status-body"},React__default.default.isValidElement(a)?a:o&&React__default.default.createElement(Icon,{icon:o,className:classnames("z-confirm-status-body-icon",o)}),React__default.default.createElement("div",{className:"z-confirm-status-body-msg"},i)):i),m,function(){t=m.getElementsByClassName("z-dialog")[0],n=m.getElementsByClassName("z-dialog-mask")[0],r||(t.style.animationName="",n.style.animationName=""),document.body.appendChild(m)});var p=function(){function e(){var e;null==m||null!==(e=m.parentNode)&&void 0!==e&&e.removeChild(m),confirmQueue.splice(f.index,1)}r?(t.style.animationName=s||defaultAnimationName+"Out",n.style.animationName=u||defaultAnimationName+"Out",t.addEventListener("animationend",e)):e()};return confirmQueue.push(p),f.index=confirmQueue.length-1,p},showConfirmType=function(e){var t=function(){},n=e.type,o=e.footer,e=_objectWithoutProperties(e,_excluded2);return t=DialogConfirm(_objectSpread2(_objectSpread2({},e),{},{type:n,footer:o||[React__default.default.createElement(Button,{type:"emphasize",onClick:function(){t()},key:"I know"},"知道了")],footerStyle:{border:"none",padding:"10px 40px 30px"},onClose:function(){return t()}}))};function info(e){return showConfirmType(_objectSpread2(_objectSpread2({},e),{},{type:"info"}))}var error=function(e){return showConfirmType(_objectSpread2(_objectSpread2({},e),{},{type:"error"}))},warning=function(e){return showConfirmType(_objectSpread2(_objectSpread2({},e),{},{type:"warning"}))},success=function(e){return showConfirmType(_objectSpread2(_objectSpread2({},e),{},{type:"success"}))},destroyAll=function(){for(var e;confirmQueue.length;)(e=confirmQueue.pop())&&e()};DialogConfirm.destroyAll=destroyAll,DialogConfirm.info=info,DialogConfirm.warning=warning,DialogConfirm.error=error,DialogConfirm.success=success;var _excluded=["visible","forceRender","onClose","onAfterClose","getContainer","children","onOk","destroyOnClose"],DialogWrap=function(e){var t=e.visible,n=e.forceRender,o=void 0!==n&&n,a=e.onClose,r=e.onAfterClose,i=e.getContainer,l=void 0===i?function(){return document.body}:i,c=e.children,d=e.onOk,s=e.destroyOnClose,n=void 0!==s&&s,i=_objectWithoutProperties(e,_excluded),s=_slicedToArray(React.useState(o),2),e=s[0],u=s[1],f=React.useRef(t),s=_slicedToArray(React.useState(t),2),m=s[0],p=s[1];React.useEffect(function(){t&&(u(!0),p(!0))},[t]),React.useEffect(function(){f.current=m},[m]);i=_objectSpread2({forceRender:o,visible:t,onDialogAnimationEnd:function(){t||(p(!1),r&&r())},onCloseDialog:function(){"function"==typeof a&&a()},onOk:d},i);return o||!n&&e||m?l()?ReactDom__default.default.createPortal(React__default.default.createElement(Dialog,i,c),l()):React__default.default.createElement(Dialog,i,c):null};DialogWrap.confirm=DialogConfirm,DialogWrap.DialogDrag=DialogDrag,module.exports=DialogWrap;
