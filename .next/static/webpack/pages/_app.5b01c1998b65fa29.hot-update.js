"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/context/actions.tsx":
/*!*********************************!*\
  !*** ./src/context/actions.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ADD_TO_CART: function() { return /* binding */ ADD_TO_CART; },\n/* harmony export */   ADD_TO_FAVORITES: function() { return /* binding */ ADD_TO_FAVORITES; },\n/* harmony export */   CLEAR_CART: function() { return /* binding */ CLEAR_CART; },\n/* harmony export */   DECREASE_QUANTITY: function() { return /* binding */ DECREASE_QUANTITY; },\n/* harmony export */   DISPLAY_ITEMS: function() { return /* binding */ DISPLAY_ITEMS; },\n/* harmony export */   INCREASE_QUANTITY: function() { return /* binding */ INCREASE_QUANTITY; },\n/* harmony export */   LOADING: function() { return /* binding */ LOADING; },\n/* harmony export */   REMOVE_FROM_CART: function() { return /* binding */ REMOVE_FROM_CART; },\n/* harmony export */   REMOVE_FROM_FAVORITES: function() { return /* binding */ REMOVE_FROM_FAVORITES; }\n/* harmony export */ });\nconst ADD_TO_FAVORITES = \"ADD_TO_FAVORITES\";\nconst REMOVE_FROM_FAVORITES = \"REMOVE_FROM_FAVORITES\";\nconst ADD_TO_CART = \"ADD_TO_CART\";\nconst REMOVE_FROM_CART = \"REMOVE_FROM_CART\";\nconst INCREASE_QUANTITY = \"INCREASE_QUANTITY\";\nconst DECREASE_QUANTITY = \"DECREASE_QUANTITY\";\nconst CLEAR_CART = \"CLEAR_CART\";\nconst LOADING = \"LOADING\";\nconst DISPLAY_ITEMS = \"DISPLAY_ITEMS\";\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dC9hY3Rpb25zLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBTyxNQUFNQSxtQkFBbUIsbUJBQW1CO0FBQzVDLE1BQU1DLHdCQUF3Qix3QkFBd0I7QUFFdEQsTUFBTUMsY0FBYyxjQUFjO0FBQ2xDLE1BQU1DLG1CQUFtQixtQkFBbUI7QUFDNUMsTUFBTUMsb0JBQW9CLG9CQUFvQjtBQUM5QyxNQUFNQyxvQkFBb0Isb0JBQW9CO0FBQzlDLE1BQU1DLGFBQWEsYUFBYTtBQUNoQyxNQUFNQyxVQUFVLFVBQVU7QUFDMUIsTUFBTUMsZ0JBQWdCLGdCQUFnQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29udGV4dC9hY3Rpb25zLnRzeD9jMjRhIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBBRERfVE9fRkFWT1JJVEVTID0gXCJBRERfVE9fRkFWT1JJVEVTXCI7XG5leHBvcnQgY29uc3QgUkVNT1ZFX0ZST01fRkFWT1JJVEVTID0gXCJSRU1PVkVfRlJPTV9GQVZPUklURVNcIjtcblxuZXhwb3J0IGNvbnN0IEFERF9UT19DQVJUID0gXCJBRERfVE9fQ0FSVFwiO1xuZXhwb3J0IGNvbnN0IFJFTU9WRV9GUk9NX0NBUlQgPSBcIlJFTU9WRV9GUk9NX0NBUlRcIjtcbmV4cG9ydCBjb25zdCBJTkNSRUFTRV9RVUFOVElUWSA9IFwiSU5DUkVBU0VfUVVBTlRJVFlcIjtcbmV4cG9ydCBjb25zdCBERUNSRUFTRV9RVUFOVElUWSA9IFwiREVDUkVBU0VfUVVBTlRJVFlcIjtcbmV4cG9ydCBjb25zdCBDTEVBUl9DQVJUID0gXCJDTEVBUl9DQVJUXCI7XG5leHBvcnQgY29uc3QgTE9BRElORyA9IFwiTE9BRElOR1wiO1xuZXhwb3J0IGNvbnN0IERJU1BMQVlfSVRFTVMgPSBcIkRJU1BMQVlfSVRFTVNcIjtcbiJdLCJuYW1lcyI6WyJBRERfVE9fRkFWT1JJVEVTIiwiUkVNT1ZFX0ZST01fRkFWT1JJVEVTIiwiQUREX1RPX0NBUlQiLCJSRU1PVkVfRlJPTV9DQVJUIiwiSU5DUkVBU0VfUVVBTlRJVFkiLCJERUNSRUFTRV9RVUFOVElUWSIsIkNMRUFSX0NBUlQiLCJMT0FESU5HIiwiRElTUExBWV9JVEVNUyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/context/actions.tsx\n"));

/***/ }),

/***/ "./src/context/context.tsx":
/*!*********************************!*\
  !*** ./src/context/context.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   WebShopProvider: function() { return /* binding */ WebShopProvider; },\n/* harmony export */   useGlobalContext: function() { return /* binding */ useGlobalContext; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions */ \"./src/context/actions.tsx\");\n/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reducer */ \"./src/context/reducer.tsx\");\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\nconst WebshopContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null);\nconst initialState = {\n    isLoading: false,\n    addToFavorites: []\n};\nconst WebShopProvider = (param)=>{\n    let { children } = param;\n    _s();\n    const [state, dispatch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(_reducer__WEBPACK_IMPORTED_MODULE_3__.reducer, initialState);\n    const addToFavorites = ()=>{\n        dispatch({\n            type: _actions__WEBPACK_IMPORTED_MODULE_2__.ADD_TO_FAVORITES\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(WebshopContext.Provider, {\n        value: {\n            ...state,\n            addToFavorites\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/josipaznaor/Documents/Learning/webshop - nextjs/webshop/src/context/context.tsx\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, undefined);\n};\n_s(WebShopProvider, \"6JWkGZ32UPfojeNx+xqn8ZU8A0Q=\");\n_c = WebShopProvider;\nconst useGlobalContext = ()=>{\n    _s1();\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(WebShopProvider);\n};\n_s1(useGlobalContext, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\nvar _c;\n$RefreshReg$(_c, \"WebShopProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dC9jb250ZXh0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQXlFO0FBQzVCO0FBQ1Q7QUFFcEMsTUFBTUssK0JBQWlCSCxvREFBYUEsQ0FBTztBQU8zQyxNQUFNSSxlQUE2QjtJQUNqQ0MsV0FBVztJQUNYQyxnQkFBZ0IsRUFBRTtBQUNwQjtBQUVPLE1BQU1DLGtCQUFrQjtRQUFDLEVBQUVDLFFBQVEsRUFBRTs7SUFDMUMsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdYLGlEQUFVQSxDQUFDRyw2Q0FBT0EsRUFBRUU7SUFFOUMsTUFBTUUsaUJBQWlCO1FBQ3JCSSxTQUFTO1lBQUVDLE1BQU1WLHNEQUFnQkE7UUFBQztJQUNwQztJQUVBLHFCQUNFLDhEQUFDRSxlQUFlUyxRQUFRO1FBQUNDLE9BQU87WUFBRSxHQUFHSixLQUFLO1lBQUVIO1FBQWU7a0JBQ3hERTs7Ozs7O0FBR1AsRUFBRTtHQVpXRDtLQUFBQTtBQWNOLE1BQU1PLG1CQUFtQjs7SUFDOUIsT0FBT2hCLGlEQUFVQSxDQUFDUztBQUNwQixFQUFFO0lBRldPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb250ZXh0L2NvbnRleHQudHN4P2VlOGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlUmVkdWNlciwgdXNlRWZmZWN0LCBjcmVhdGVDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBBRERfVE9fRkFWT1JJVEVTIH0gZnJvbSBcIi4vYWN0aW9uc1wiO1xuaW1wb3J0IHsgcmVkdWNlciB9IGZyb20gXCIuL3JlZHVjZXJcIjtcblxuY29uc3QgV2Vic2hvcENvbnRleHQgPSBjcmVhdGVDb250ZXh0PG51bGw+KG51bGwpO1xuXG5pbnRlcmZhY2UgSW5pdGlhbFN0YXRlIHtcbiAgaXNMb2FkaW5nOiBib29sZWFuO1xuICBhZGRUb0Zhdm9yaXRlczogQXJyYXk8c3RyaW5nPjtcbn1cblxuY29uc3QgaW5pdGlhbFN0YXRlOiBJbml0aWFsU3RhdGUgPSB7XG4gIGlzTG9hZGluZzogZmFsc2UsXG4gIGFkZFRvRmF2b3JpdGVzOiBbXSxcbn07XG5cbmV4cG9ydCBjb25zdCBXZWJTaG9wUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihyZWR1Y2VyLCBpbml0aWFsU3RhdGUpO1xuXG4gIGNvbnN0IGFkZFRvRmF2b3JpdGVzID0gKCkgPT4ge1xuICAgIGRpc3BhdGNoKHsgdHlwZTogQUREX1RPX0ZBVk9SSVRFUyB9KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxXZWJzaG9wQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyAuLi5zdGF0ZSwgYWRkVG9GYXZvcml0ZXMgfX0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9XZWJzaG9wQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCB1c2VHbG9iYWxDb250ZXh0ID0gKCkgPT4ge1xuICByZXR1cm4gdXNlQ29udGV4dChXZWJTaG9wUHJvdmlkZXIpO1xufTtcbiJdLCJuYW1lcyI6WyJ1c2VDb250ZXh0IiwidXNlUmVkdWNlciIsImNyZWF0ZUNvbnRleHQiLCJBRERfVE9fRkFWT1JJVEVTIiwicmVkdWNlciIsIldlYnNob3BDb250ZXh0IiwiaW5pdGlhbFN0YXRlIiwiaXNMb2FkaW5nIiwiYWRkVG9GYXZvcml0ZXMiLCJXZWJTaG9wUHJvdmlkZXIiLCJjaGlsZHJlbiIsInN0YXRlIiwiZGlzcGF0Y2giLCJ0eXBlIiwiUHJvdmlkZXIiLCJ2YWx1ZSIsInVzZUdsb2JhbENvbnRleHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/context/context.tsx\n"));

/***/ })

});