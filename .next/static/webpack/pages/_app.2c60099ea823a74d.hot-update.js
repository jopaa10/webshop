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

/***/ "./src/context/context.tsx":
/*!*********************************!*\
  !*** ./src/context/context.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   WebShopProvider: function() { return /* binding */ WebShopProvider; },\n/* harmony export */   useGlobalContext: function() { return /* binding */ useGlobalContext; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions */ \"./src/context/actions.tsx\");\n/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reducer */ \"./src/context/reducer.tsx\");\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\nconst initialState = {\n    isLoading: false,\n    favorites: []\n};\nconst WebshopContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(initialState);\nconst WebShopProvider = (param)=>{\n    let { children } = param;\n    _s();\n    const [state, dispatch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(_reducer__WEBPACK_IMPORTED_MODULE_3__.reducer, initialState);\n    // eslint-disable-next-line @typescript-eslint/no-explicit-any\n    const addToFavorites = (id)=>{\n        dispatch({\n            type: _actions__WEBPACK_IMPORTED_MODULE_2__.ADD_TO_FAVORITES,\n            payload: {\n                id\n            }\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(WebshopContext.Provider, {\n        value: {\n            ...state,\n            addToFavorites\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/josipaznaor/Documents/Learning/webshop - nextjs/webshop/src/context/context.tsx\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, undefined);\n};\n_s(WebShopProvider, \"6JWkGZ32UPfojeNx+xqn8ZU8A0Q=\");\n_c = WebShopProvider;\nconst useGlobalContext = ()=>{\n    _s1();\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(WebshopContext);\n};\n_s1(useGlobalContext, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\nvar _c;\n$RefreshReg$(_c, \"WebShopProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dC9jb250ZXh0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQThEO0FBQ2pCO0FBQ1Q7QUFXcEMsTUFBTUssZUFBNkI7SUFDakNDLFdBQVc7SUFDWEMsV0FBVyxFQUFFO0FBQ2Y7QUFFQSxNQUFNQywrQkFBaUJOLG9EQUFhQSxDQUFzQkc7QUFFbkQsTUFBTUksa0JBQW1DO1FBQUMsRUFBRUMsUUFBUSxFQUFFOztJQUMzRCxNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR1gsaURBQVVBLENBQUNHLDZDQUFPQSxFQUFFQztJQUU5Qyw4REFBOEQ7SUFDOUQsTUFBTVEsaUJBQWlCLENBQUNDO1FBQ3RCRixTQUFTO1lBQUVHLE1BQU1aLHNEQUFnQkE7WUFBRWEsU0FBUztnQkFBRUY7WUFBRztRQUFFO0lBQ3JEO0lBRUEscUJBQ0UsOERBQUNOLGVBQWVTLFFBQVE7UUFBQ0MsT0FBTztZQUFFLEdBQUdQLEtBQUs7WUFBRUU7UUFBZTtrQkFDeERIOzs7Ozs7QUFHUCxFQUFFO0dBYldEO0tBQUFBO0FBZU4sTUFBTVUsbUJBQW1COztJQUM5QixPQUFPbkIsaURBQVVBLENBQUNRO0FBQ3BCLEVBQUU7SUFGV1ciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHQvY29udGV4dC50c3g/ZWU4ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VSZWR1Y2VyLCBjcmVhdGVDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBBRERfVE9fRkFWT1JJVEVTIH0gZnJvbSBcIi4vYWN0aW9uc1wiO1xuaW1wb3J0IHsgcmVkdWNlciB9IGZyb20gXCIuL3JlZHVjZXJcIjtcblxuaW50ZXJmYWNlIEluaXRpYWxTdGF0ZSB7XG4gIGlzTG9hZGluZzogYm9vbGVhbjtcbiAgZmF2b3JpdGVzOiBBcnJheTxzdHJpbmc+O1xufVxuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlO1xufVxuXG5jb25zdCBpbml0aWFsU3RhdGU6IEluaXRpYWxTdGF0ZSA9IHtcbiAgaXNMb2FkaW5nOiBmYWxzZSxcbiAgZmF2b3JpdGVzOiBbXSxcbn07XG5cbmNvbnN0IFdlYnNob3BDb250ZXh0ID0gY3JlYXRlQ29udGV4dDxJbml0aWFsU3RhdGUgfCBudWxsPihpbml0aWFsU3RhdGUpO1xuXG5leHBvcnQgY29uc3QgV2ViU2hvcFByb3ZpZGVyOiBSZWFjdC5GQzxQcm9wcz4gPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihyZWR1Y2VyLCBpbml0aWFsU3RhdGUpO1xuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4gIGNvbnN0IGFkZFRvRmF2b3JpdGVzID0gKGlkOiBhbnkpID0+IHtcbiAgICBkaXNwYXRjaCh7IHR5cGU6IEFERF9UT19GQVZPUklURVMsIHBheWxvYWQ6IHsgaWQgfSB9KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxXZWJzaG9wQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyAuLi5zdGF0ZSwgYWRkVG9GYXZvcml0ZXMgfX0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9XZWJzaG9wQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCB1c2VHbG9iYWxDb250ZXh0ID0gKCkgPT4ge1xuICByZXR1cm4gdXNlQ29udGV4dChXZWJzaG9wQ29udGV4dCk7XG59O1xuIl0sIm5hbWVzIjpbInVzZUNvbnRleHQiLCJ1c2VSZWR1Y2VyIiwiY3JlYXRlQ29udGV4dCIsIkFERF9UT19GQVZPUklURVMiLCJyZWR1Y2VyIiwiaW5pdGlhbFN0YXRlIiwiaXNMb2FkaW5nIiwiZmF2b3JpdGVzIiwiV2Vic2hvcENvbnRleHQiLCJXZWJTaG9wUHJvdmlkZXIiLCJjaGlsZHJlbiIsInN0YXRlIiwiZGlzcGF0Y2giLCJhZGRUb0Zhdm9yaXRlcyIsImlkIiwidHlwZSIsInBheWxvYWQiLCJQcm92aWRlciIsInZhbHVlIiwidXNlR2xvYmFsQ29udGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/context/context.tsx\n"));

/***/ })

});