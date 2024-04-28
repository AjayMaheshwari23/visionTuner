"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/rc-switch";
exports.ids = ["vendor-chunks/rc-switch"];
exports.modules = {

/***/ "(ssr)/./node_modules/rc-switch/es/index.js":
/*!********************************************!*\
  !*** ./node_modules/rc-switch/es/index.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"(ssr)/./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"(ssr)/./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"(ssr)/./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ \"(ssr)/./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ \"(ssr)/./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var rc_util_es_hooks_useMergedState__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rc-util/es/hooks/useMergedState */ \"(ssr)/./node_modules/rc-util/es/hooks/useMergedState.js\");\n/* harmony import */ var rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rc-util/es/KeyCode */ \"(ssr)/./node_modules/rc-util/es/KeyCode.js\");\n\n\n\n\nvar _excluded = [\n    \"prefixCls\",\n    \"className\",\n    \"checked\",\n    \"defaultChecked\",\n    \"disabled\",\n    \"loadingIcon\",\n    \"checkedChildren\",\n    \"unCheckedChildren\",\n    \"onClick\",\n    \"onChange\",\n    \"onKeyDown\"\n];\n\n\n\n\nvar Switch = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_4__.forwardRef(function(_ref, ref) {\n    var _classNames;\n    var _ref$prefixCls = _ref.prefixCls, prefixCls = _ref$prefixCls === void 0 ? \"rc-switch\" : _ref$prefixCls, className = _ref.className, checked = _ref.checked, defaultChecked = _ref.defaultChecked, disabled = _ref.disabled, loadingIcon = _ref.loadingIcon, checkedChildren = _ref.checkedChildren, unCheckedChildren = _ref.unCheckedChildren, onClick = _ref.onClick, onChange = _ref.onChange, onKeyDown = _ref.onKeyDown, restProps = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_ref, _excluded);\n    var _useMergedState = (0,rc_util_es_hooks_useMergedState__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(false, {\n        value: checked,\n        defaultValue: defaultChecked\n    }), _useMergedState2 = (0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_useMergedState, 2), innerChecked = _useMergedState2[0], setInnerChecked = _useMergedState2[1];\n    function triggerChange(newChecked, event) {\n        var mergedChecked = innerChecked;\n        if (!disabled) {\n            mergedChecked = newChecked;\n            setInnerChecked(mergedChecked);\n            onChange === null || onChange === void 0 ? void 0 : onChange(mergedChecked, event);\n        }\n        return mergedChecked;\n    }\n    function onInternalKeyDown(e) {\n        if (e.which === rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_7__[\"default\"].LEFT) {\n            triggerChange(false, e);\n        } else if (e.which === rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_7__[\"default\"].RIGHT) {\n            triggerChange(true, e);\n        }\n        onKeyDown === null || onKeyDown === void 0 ? void 0 : onKeyDown(e);\n    }\n    function onInternalClick(e) {\n        var ret = triggerChange(!innerChecked, e);\n        // [Legacy] trigger onClick with value\n        onClick === null || onClick === void 0 ? void 0 : onClick(ret, e);\n    }\n    var switchClassName = classnames__WEBPACK_IMPORTED_MODULE_5___default()(prefixCls, className, (_classNames = {}, (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_classNames, \"\".concat(prefixCls, \"-checked\"), innerChecked), (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_classNames, \"\".concat(prefixCls, \"-disabled\"), disabled), _classNames));\n    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_4__.createElement(\"button\", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, restProps, {\n        type: \"button\",\n        role: \"switch\",\n        \"aria-checked\": innerChecked,\n        disabled: disabled,\n        className: switchClassName,\n        ref: ref,\n        onKeyDown: onInternalKeyDown,\n        onClick: onInternalClick\n    }), loadingIcon, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_4__.createElement(\"span\", {\n        className: \"\".concat(prefixCls, \"-inner\")\n    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_4__.createElement(\"span\", {\n        className: \"\".concat(prefixCls, \"-inner-checked\")\n    }, checkedChildren), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_4__.createElement(\"span\", {\n        className: \"\".concat(prefixCls, \"-inner-unchecked\")\n    }, unCheckedChildren)));\n});\nSwitch.displayName = \"Switch\";\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Switch);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEdBQUcsV0FBVyxHQUFFVixnREFBbUIsQ0FBQyxRQUFRO1FBQzFDVyxXQUFXLEdBQUc2QixNQUFNLENBQUM5QixXQUFXO0lBQ2xDLEdBQUdNLGtCQUFrQixXQUFXLEdBQUVoQixnREFBbUIsQ0FBQyxRQUFRO1FBQzVEVyxXQUFXLEdBQUc2QixNQUFNLENBQUM5QixXQUFXO0lBQ2xDLEdBQUdPO0FBQ0w7QUFDQWIsT0FBT3dDLFdBQVcsR0FBRztBQUNyQixpRUFBZXhDLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92aXNpb250dW5lcjIvLi9ub2RlX21vZHVsZXMvcmMtc3dpdGNoL2VzL2luZGV4LmpzP2Q5N2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgX2RlZmluZVByb3BlcnR5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9kZWZpbmVQcm9wZXJ0eVwiO1xuaW1wb3J0IF9zbGljZWRUb0FycmF5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9zbGljZWRUb0FycmF5XCI7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc1wiO1xudmFyIF9leGNsdWRlZCA9IFtcInByZWZpeENsc1wiLCBcImNsYXNzTmFtZVwiLCBcImNoZWNrZWRcIiwgXCJkZWZhdWx0Q2hlY2tlZFwiLCBcImRpc2FibGVkXCIsIFwibG9hZGluZ0ljb25cIiwgXCJjaGVja2VkQ2hpbGRyZW5cIiwgXCJ1bkNoZWNrZWRDaGlsZHJlblwiLCBcIm9uQ2xpY2tcIiwgXCJvbkNoYW5nZVwiLCBcIm9uS2V5RG93blwiXTtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHVzZU1lcmdlZFN0YXRlIGZyb20gXCJyYy11dGlsL2VzL2hvb2tzL3VzZU1lcmdlZFN0YXRlXCI7XG5pbXBvcnQgS2V5Q29kZSBmcm9tIFwicmMtdXRpbC9lcy9LZXlDb2RlXCI7XG52YXIgU3dpdGNoID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gKF9yZWYsIHJlZikge1xuICB2YXIgX2NsYXNzTmFtZXM7XG4gIHZhciBfcmVmJHByZWZpeENscyA9IF9yZWYucHJlZml4Q2xzLFxuICAgIHByZWZpeENscyA9IF9yZWYkcHJlZml4Q2xzID09PSB2b2lkIDAgPyAncmMtc3dpdGNoJyA6IF9yZWYkcHJlZml4Q2xzLFxuICAgIGNsYXNzTmFtZSA9IF9yZWYuY2xhc3NOYW1lLFxuICAgIGNoZWNrZWQgPSBfcmVmLmNoZWNrZWQsXG4gICAgZGVmYXVsdENoZWNrZWQgPSBfcmVmLmRlZmF1bHRDaGVja2VkLFxuICAgIGRpc2FibGVkID0gX3JlZi5kaXNhYmxlZCxcbiAgICBsb2FkaW5nSWNvbiA9IF9yZWYubG9hZGluZ0ljb24sXG4gICAgY2hlY2tlZENoaWxkcmVuID0gX3JlZi5jaGVja2VkQ2hpbGRyZW4sXG4gICAgdW5DaGVja2VkQ2hpbGRyZW4gPSBfcmVmLnVuQ2hlY2tlZENoaWxkcmVuLFxuICAgIG9uQ2xpY2sgPSBfcmVmLm9uQ2xpY2ssXG4gICAgb25DaGFuZ2UgPSBfcmVmLm9uQ2hhbmdlLFxuICAgIG9uS2V5RG93biA9IF9yZWYub25LZXlEb3duLFxuICAgIHJlc3RQcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcmVmLCBfZXhjbHVkZWQpO1xuICB2YXIgX3VzZU1lcmdlZFN0YXRlID0gdXNlTWVyZ2VkU3RhdGUoZmFsc2UsIHtcbiAgICAgIHZhbHVlOiBjaGVja2VkLFxuICAgICAgZGVmYXVsdFZhbHVlOiBkZWZhdWx0Q2hlY2tlZFxuICAgIH0pLFxuICAgIF91c2VNZXJnZWRTdGF0ZTIgPSBfc2xpY2VkVG9BcnJheShfdXNlTWVyZ2VkU3RhdGUsIDIpLFxuICAgIGlubmVyQ2hlY2tlZCA9IF91c2VNZXJnZWRTdGF0ZTJbMF0sXG4gICAgc2V0SW5uZXJDaGVja2VkID0gX3VzZU1lcmdlZFN0YXRlMlsxXTtcbiAgZnVuY3Rpb24gdHJpZ2dlckNoYW5nZShuZXdDaGVja2VkLCBldmVudCkge1xuICAgIHZhciBtZXJnZWRDaGVja2VkID0gaW5uZXJDaGVja2VkO1xuICAgIGlmICghZGlzYWJsZWQpIHtcbiAgICAgIG1lcmdlZENoZWNrZWQgPSBuZXdDaGVja2VkO1xuICAgICAgc2V0SW5uZXJDaGVja2VkKG1lcmdlZENoZWNrZWQpO1xuICAgICAgb25DaGFuZ2UgPT09IG51bGwgfHwgb25DaGFuZ2UgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9uQ2hhbmdlKG1lcmdlZENoZWNrZWQsIGV2ZW50KTtcbiAgICB9XG4gICAgcmV0dXJuIG1lcmdlZENoZWNrZWQ7XG4gIH1cbiAgZnVuY3Rpb24gb25JbnRlcm5hbEtleURvd24oZSkge1xuICAgIGlmIChlLndoaWNoID09PSBLZXlDb2RlLkxFRlQpIHtcbiAgICAgIHRyaWdnZXJDaGFuZ2UoZmFsc2UsIGUpO1xuICAgIH0gZWxzZSBpZiAoZS53aGljaCA9PT0gS2V5Q29kZS5SSUdIVCkge1xuICAgICAgdHJpZ2dlckNoYW5nZSh0cnVlLCBlKTtcbiAgICB9XG4gICAgb25LZXlEb3duID09PSBudWxsIHx8IG9uS2V5RG93biA9PT0gdm9pZCAwID8gdm9pZCAwIDogb25LZXlEb3duKGUpO1xuICB9XG4gIGZ1bmN0aW9uIG9uSW50ZXJuYWxDbGljayhlKSB7XG4gICAgdmFyIHJldCA9IHRyaWdnZXJDaGFuZ2UoIWlubmVyQ2hlY2tlZCwgZSk7XG4gICAgLy8gW0xlZ2FjeV0gdHJpZ2dlciBvbkNsaWNrIHdpdGggdmFsdWVcbiAgICBvbkNsaWNrID09PSBudWxsIHx8IG9uQ2xpY2sgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9uQ2xpY2socmV0LCBlKTtcbiAgfVxuICB2YXIgc3dpdGNoQ2xhc3NOYW1lID0gY2xhc3NOYW1lcyhwcmVmaXhDbHMsIGNsYXNzTmFtZSwgKF9jbGFzc05hbWVzID0ge30sIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lcywgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1jaGVja2VkXCIpLCBpbm5lckNoZWNrZWQpLCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItZGlzYWJsZWRcIiksIGRpc2FibGVkKSwgX2NsYXNzTmFtZXMpKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIF9leHRlbmRzKHt9LCByZXN0UHJvcHMsIHtcbiAgICB0eXBlOiBcImJ1dHRvblwiLFxuICAgIHJvbGU6IFwic3dpdGNoXCIsXG4gICAgXCJhcmlhLWNoZWNrZWRcIjogaW5uZXJDaGVja2VkLFxuICAgIGRpc2FibGVkOiBkaXNhYmxlZCxcbiAgICBjbGFzc05hbWU6IHN3aXRjaENsYXNzTmFtZSxcbiAgICByZWY6IHJlZixcbiAgICBvbktleURvd246IG9uSW50ZXJuYWxLZXlEb3duLFxuICAgIG9uQ2xpY2s6IG9uSW50ZXJuYWxDbGlja1xuICB9KSwgbG9hZGluZ0ljb24sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWlubmVyXCIpXG4gIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWlubmVyLWNoZWNrZWRcIilcbiAgfSwgY2hlY2tlZENoaWxkcmVuKSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtcbiAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItaW5uZXItdW5jaGVja2VkXCIpXG4gIH0sIHVuQ2hlY2tlZENoaWxkcmVuKSkpO1xufSk7XG5Td2l0Y2guZGlzcGxheU5hbWUgPSAnU3dpdGNoJztcbmV4cG9ydCBkZWZhdWx0IFN3aXRjaDsiXSwibmFtZXMiOlsiX2V4dGVuZHMiLCJfZGVmaW5lUHJvcGVydHkiLCJfc2xpY2VkVG9BcnJheSIsIl9vYmplY3RXaXRob3V0UHJvcGVydGllcyIsIl9leGNsdWRlZCIsIlJlYWN0IiwiY2xhc3NOYW1lcyIsInVzZU1lcmdlZFN0YXRlIiwiS2V5Q29kZSIsIlN3aXRjaCIsImZvcndhcmRSZWYiLCJfcmVmIiwicmVmIiwiX2NsYXNzTmFtZXMiLCJfcmVmJHByZWZpeENscyIsInByZWZpeENscyIsImNsYXNzTmFtZSIsImNoZWNrZWQiLCJkZWZhdWx0Q2hlY2tlZCIsImRpc2FibGVkIiwibG9hZGluZ0ljb24iLCJjaGVja2VkQ2hpbGRyZW4iLCJ1bkNoZWNrZWRDaGlsZHJlbiIsIm9uQ2xpY2siLCJvbkNoYW5nZSIsIm9uS2V5RG93biIsInJlc3RQcm9wcyIsIl91c2VNZXJnZWRTdGF0ZSIsInZhbHVlIiwiZGVmYXVsdFZhbHVlIiwiX3VzZU1lcmdlZFN0YXRlMiIsImlubmVyQ2hlY2tlZCIsInNldElubmVyQ2hlY2tlZCIsInRyaWdnZXJDaGFuZ2UiLCJuZXdDaGVja2VkIiwiZXZlbnQiLCJtZXJnZWRDaGVja2VkIiwib25JbnRlcm5hbEtleURvd24iLCJlIiwid2hpY2giLCJMRUZUIiwiUklHSFQiLCJvbkludGVybmFsQ2xpY2siLCJyZXQiLCJzd2l0Y2hDbGFzc05hbWUiLCJjb25jYXQiLCJjcmVhdGVFbGVtZW50IiwidHlwZSIsInJvbGUiLCJkaXNwbGF5TmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/rc-switch/es/index.js\n");

/***/ })

};
;