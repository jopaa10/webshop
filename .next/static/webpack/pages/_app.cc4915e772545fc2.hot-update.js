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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   WebShopProvider: function() { return /* binding */ WebShopProvider; },\n/* harmony export */   useGlobalContext: function() { return /* binding */ useGlobalContext; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions */ \"./src/context/actions.tsx\");\n/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reducer */ \"./src/context/reducer.tsx\");\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\nconst initialState = {\n    //isLoading: false,\n    favorites: [],\n    addToFavorites () {},\n    toggleFavoriteIcon: false\n};\nconst WebshopContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(initialState);\nconst WebShopProvider = (param)=>{\n    let { children } = param;\n    _s();\n    const [state, dispatch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(_reducer__WEBPACK_IMPORTED_MODULE_3__.reducer, initialState);\n    const [toggleFavoriteIcon, setToggleFavoriteIcon] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    // eslint-disable-next-line @typescript-eslint/no-explicit-any\n    const addToFavorites = (id)=>{\n        setToggleFavoriteIcon(!toggleFavoriteIcon);\n        dispatch({\n            type: _actions__WEBPACK_IMPORTED_MODULE_2__.Actions.ADD_TO_FAVORITES,\n            payload: {\n                id\n            }\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(WebshopContext.Provider, {\n        value: {\n            ...state,\n            addToFavorites,\n            toggleFavoriteIcon: toggleFavoriteIcon\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/josipaznaor/Documents/Learning/webshop - nextjs/webshop/src/context/context.tsx\",\n        lineNumber: 36,\n        columnNumber: 5\n    }, undefined);\n};\n_s(WebShopProvider, \"nANQOYXK8kfD501fsXJdvv26YBA=\");\n_c = WebShopProvider;\nconst useGlobalContext = ()=>{\n    _s1();\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(WebshopContext);\n};\n_s1(useGlobalContext, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\nvar _c;\n$RefreshReg$(_c, \"WebShopProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dC9jb250ZXh0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQXdFO0FBQ3BDO0FBQ0E7QUFhcEMsTUFBTU0sZUFBNkI7SUFDakMsbUJBQW1CO0lBQ25CQyxXQUFXLEVBQUU7SUFDYkMsbUJBQWtCO0lBQ2xCQyxvQkFBb0I7QUFDdEI7QUFFQSxNQUFNQywrQkFBaUJSLG9EQUFhQSxDQUFlSTtBQUU1QyxNQUFNSyxrQkFBbUM7UUFBQyxFQUFFQyxRQUFRLEVBQUU7O0lBQzNELE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHYixpREFBVUEsQ0FBQ0ksNkNBQU9BLEVBQUVDO0lBQzlDLE1BQU0sQ0FBQ0csb0JBQW9CTSxzQkFBc0IsR0FBR1osK0NBQVFBLENBQVU7SUFFdEUsOERBQThEO0lBQzlELE1BQU1LLGlCQUFpQixDQUFDUTtRQUN0QkQsc0JBQXNCLENBQUNOO1FBQ3ZCSyxTQUFTO1lBQUVHLE1BQU1iLDZDQUFPQSxDQUFDYyxnQkFBZ0I7WUFBRUMsU0FBUztnQkFBRUg7WUFBRztRQUFFO0lBQzdEO0lBRUEscUJBQ0UsOERBQUNOLGVBQWVVLFFBQVE7UUFDdEJDLE9BQU87WUFDTCxHQUFHUixLQUFLO1lBQ1JMO1lBQ0FDLG9CQUFvQkE7UUFDdEI7a0JBRUNHOzs7Ozs7QUFHUCxFQUFFO0dBckJXRDtLQUFBQTtBQXVCTixNQUFNVyxtQkFBbUI7O0lBQzlCLE9BQU90QixpREFBVUEsQ0FBQ1U7QUFDcEIsRUFBRTtJQUZXWSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29udGV4dC9jb250ZXh0LnRzeD9lZThlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNvbnRleHQsIHVzZVJlZHVjZXIsIGNyZWF0ZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBBY3Rpb25zIH0gZnJvbSBcIi4vYWN0aW9uc1wiO1xuaW1wb3J0IHsgcmVkdWNlciB9IGZyb20gXCIuL3JlZHVjZXJcIjtcblxuaW50ZXJmYWNlIEluaXRpYWxTdGF0ZSB7XG4gIC8vaXNMb2FkaW5nOiBib29sZWFuO1xuICBmYXZvcml0ZXM6IEFycmF5PHN0cmluZz47XG4gIGFkZFRvRmF2b3JpdGVzKGlkOiBzdHJpbmcpOiB2b2lkO1xuICB0b2dnbGVGYXZvcml0ZUljb246IGJvb2xlYW47XG59XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7XG59XG5cbmNvbnN0IGluaXRpYWxTdGF0ZTogSW5pdGlhbFN0YXRlID0ge1xuICAvL2lzTG9hZGluZzogZmFsc2UsXG4gIGZhdm9yaXRlczogW10sXG4gIGFkZFRvRmF2b3JpdGVzKCkge30sXG4gIHRvZ2dsZUZhdm9yaXRlSWNvbjogZmFsc2UsXG59O1xuXG5jb25zdCBXZWJzaG9wQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8SW5pdGlhbFN0YXRlPihpbml0aWFsU3RhdGUpO1xuXG5leHBvcnQgY29uc3QgV2ViU2hvcFByb3ZpZGVyOiBSZWFjdC5GQzxQcm9wcz4gPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihyZWR1Y2VyLCBpbml0aWFsU3RhdGUpO1xuICBjb25zdCBbdG9nZ2xlRmF2b3JpdGVJY29uLCBzZXRUb2dnbGVGYXZvcml0ZUljb25dID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4gIGNvbnN0IGFkZFRvRmF2b3JpdGVzID0gKGlkOiBzdHJpbmcpID0+IHtcbiAgICBzZXRUb2dnbGVGYXZvcml0ZUljb24oIXRvZ2dsZUZhdm9yaXRlSWNvbik7XG4gICAgZGlzcGF0Y2goeyB0eXBlOiBBY3Rpb25zLkFERF9UT19GQVZPUklURVMsIHBheWxvYWQ6IHsgaWQgfSB9KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxXZWJzaG9wQ29udGV4dC5Qcm92aWRlclxuICAgICAgdmFsdWU9e3tcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGFkZFRvRmF2b3JpdGVzLFxuICAgICAgICB0b2dnbGVGYXZvcml0ZUljb246IHRvZ2dsZUZhdm9yaXRlSWNvbixcbiAgICAgIH19XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvV2Vic2hvcENvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgdXNlR2xvYmFsQ29udGV4dCA9ICgpID0+IHtcbiAgcmV0dXJuIHVzZUNvbnRleHQoV2Vic2hvcENvbnRleHQpO1xufTtcbiJdLCJuYW1lcyI6WyJ1c2VDb250ZXh0IiwidXNlUmVkdWNlciIsImNyZWF0ZUNvbnRleHQiLCJ1c2VTdGF0ZSIsIkFjdGlvbnMiLCJyZWR1Y2VyIiwiaW5pdGlhbFN0YXRlIiwiZmF2b3JpdGVzIiwiYWRkVG9GYXZvcml0ZXMiLCJ0b2dnbGVGYXZvcml0ZUljb24iLCJXZWJzaG9wQ29udGV4dCIsIldlYlNob3BQcm92aWRlciIsImNoaWxkcmVuIiwic3RhdGUiLCJkaXNwYXRjaCIsInNldFRvZ2dsZUZhdm9yaXRlSWNvbiIsImlkIiwidHlwZSIsIkFERF9UT19GQVZPUklURVMiLCJwYXlsb2FkIiwiUHJvdmlkZXIiLCJ2YWx1ZSIsInVzZUdsb2JhbENvbnRleHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/context/context.tsx\n"));

/***/ })

});