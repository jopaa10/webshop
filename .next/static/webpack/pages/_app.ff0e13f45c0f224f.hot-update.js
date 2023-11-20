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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   WebShopProvider: function() { return /* binding */ WebShopProvider; },\n/* harmony export */   useGlobalContext: function() { return /* binding */ useGlobalContext; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_addToLS__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/addToLS */ \"./src/utils/addToLS.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actions */ \"./src/context/actions.tsx\");\n/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reducer */ \"./src/context/reducer.tsx\");\nvar _localStorage, _localStorage1;\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n\nconst initialState = {\n    //isLoading: false,\n    favorites: !JSON.parse(((_localStorage = localStorage) === null || _localStorage === void 0 ? void 0 : _localStorage.getItem(_utils_addToLS__WEBPACK_IMPORTED_MODULE_1__.LSKeyType === null || _utils_addToLS__WEBPACK_IMPORTED_MODULE_1__.LSKeyType === void 0 ? void 0 : _utils_addToLS__WEBPACK_IMPORTED_MODULE_1__.LSKeyType.FAVORITES)) || \"\") ? JSON.parse(((_localStorage1 = localStorage) === null || _localStorage1 === void 0 ? void 0 : _localStorage1.getItem(_utils_addToLS__WEBPACK_IMPORTED_MODULE_1__.LSKeyType === null || _utils_addToLS__WEBPACK_IMPORTED_MODULE_1__.LSKeyType === void 0 ? void 0 : _utils_addToLS__WEBPACK_IMPORTED_MODULE_1__.LSKeyType.FAVORITES)) || \"\") : [],\n    addToFavorites () {},\n    removeFromFavorites () {}\n};\nconst WebshopContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)(initialState);\nconst WebShopProvider = (param)=>{\n    let { children } = param;\n    _s();\n    const [state, dispatch] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useReducer)(_reducer__WEBPACK_IMPORTED_MODULE_4__.reducer, initialState);\n    // eslint-disable-next-line @typescript-eslint/no-explicit-any\n    const addToFavorites = (id)=>{\n        dispatch({\n            type: _actions__WEBPACK_IMPORTED_MODULE_3__.Actions.ADD_TO_FAVORITES,\n            payload: {\n                id\n            }\n        });\n    };\n    const removeFromFavorites = (id)=>{\n        dispatch({\n            type: _actions__WEBPACK_IMPORTED_MODULE_3__.Actions.REMOVE_FROM_FAVORITES,\n            payload: {\n                id\n            }\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(WebshopContext.Provider, {\n        value: {\n            ...state,\n            addToFavorites,\n            removeFromFavorites\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/josipaznaor/Documents/Learning/webshop - nextjs/webshop/src/context/context.tsx\",\n        lineNumber: 50,\n        columnNumber: 5\n    }, undefined);\n};\n_s(WebShopProvider, \"6JWkGZ32UPfojeNx+xqn8ZU8A0Q=\");\n_c = WebShopProvider;\nconst useGlobalContext = ()=>{\n    _s1();\n    return (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(WebshopContext);\n};\n_s1(useGlobalContext, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\nvar _c;\n$RefreshReg$(_c, \"WebShopProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dC9jb250ZXh0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUEyQnlCQSxlQUNSQTs7O0FBNUIyQjtBQUNrQjtBQUMxQjtBQUNBO0FBc0JwQyxNQUFNTyxlQUE2QjtJQUNqQyxtQkFBbUI7SUFDbkJDLFdBQVcsQ0FBQ0MsS0FBS0MsS0FBSyxDQUFDVixFQUFBQSxnQkFBQUEsMEJBQUFBLG9DQUFBQSxjQUFjVyxPQUFPLENBQUNWLHFEQUFTQSxhQUFUQSxxREFBU0EsdUJBQVRBLHFEQUFTQSxDQUFFVyxTQUFTLE1BQUssTUFDbEVILEtBQUtDLEtBQUssQ0FBQ1YsRUFBQUEsaUJBQUFBLDBCQUFBQSxxQ0FBQUEsZUFBY1csT0FBTyxDQUFDVixxREFBU0EsYUFBVEEscURBQVNBLHVCQUFUQSxxREFBU0EsQ0FBRVcsU0FBUyxNQUFLLE1BQzFELEVBQUU7SUFDTkMsbUJBQWtCO0lBQ2xCQyx3QkFBdUI7QUFDekI7QUFFQSxNQUFNQywrQkFBaUJYLG9EQUFhQSxDQUFlRztBQUU1QyxNQUFNUyxrQkFBbUM7UUFBQyxFQUFFQyxRQUFRLEVBQUU7O0lBQzNELE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHaEIsaURBQVVBLENBQUNHLDZDQUFPQSxFQUFFQztJQUU5Qyw4REFBOEQ7SUFDOUQsTUFBTU0saUJBQWlCLENBQUNPO1FBQ3RCRCxTQUFTO1lBQUVFLE1BQU1oQiw2Q0FBT0EsQ0FBQ2lCLGdCQUFnQjtZQUFFQyxTQUFTO2dCQUFFSDtZQUFHO1FBQUU7SUFDN0Q7SUFFQSxNQUFNTixzQkFBc0IsQ0FBQ007UUFDM0JELFNBQVM7WUFBRUUsTUFBTWhCLDZDQUFPQSxDQUFDbUIscUJBQXFCO1lBQUVELFNBQVM7Z0JBQUVIO1lBQUc7UUFBRTtJQUNsRTtJQUVBLHFCQUNFLDhEQUFDTCxlQUFlVSxRQUFRO1FBQ3RCQyxPQUFPO1lBQ0wsR0FBR1IsS0FBSztZQUNSTDtZQUNBQztRQUNGO2tCQUVDRzs7Ozs7O0FBR1AsRUFBRTtHQXZCV0Q7S0FBQUE7QUF5Qk4sTUFBTVcsbUJBQW1COztJQUM5QixPQUFPekIsaURBQVVBLENBQUNhO0FBQ3BCLEVBQUU7SUFGV1kiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHQvY29udGV4dC50c3g/ZWU4ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMU0tleVR5cGUgfSBmcm9tIFwiQC91dGlscy9hZGRUb0xTXCI7XG5pbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VSZWR1Y2VyLCBjcmVhdGVDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBBY3Rpb25zIH0gZnJvbSBcIi4vYWN0aW9uc1wiO1xuaW1wb3J0IHsgcmVkdWNlciB9IGZyb20gXCIuL3JlZHVjZXJcIjtcblxuaW50ZXJmYWNlIEZhdm9yaXRlRGF0YSB7XG4gIGlkOiBudW1iZXI7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIHByaWNlOiBudW1iZXI7XG4gIHF1YW50aXR5OiBudW1iZXI7XG4gIGltYWdlOiBzdHJpbmc7XG4gIGRldGFpbDogc3RyaW5nO1xufVxuXG5pbnRlcmZhY2UgSW5pdGlhbFN0YXRlIHtcbiAgLy9pc0xvYWRpbmc6IGJvb2xlYW47XG4gIGZhdm9yaXRlczogQXJyYXk8RmF2b3JpdGVEYXRhPjtcbiAgYWRkVG9GYXZvcml0ZXMoaWQ6IHN0cmluZyk6IHZvaWQ7XG4gIHJlbW92ZUZyb21GYXZvcml0ZXMoaWQ6IHN0cmluZyk6IHZvaWQ7XG59XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7XG59XG5cbmNvbnN0IGluaXRpYWxTdGF0ZTogSW5pdGlhbFN0YXRlID0ge1xuICAvL2lzTG9hZGluZzogZmFsc2UsXG4gIGZhdm9yaXRlczogIUpTT04ucGFyc2UobG9jYWxTdG9yYWdlPy5nZXRJdGVtKExTS2V5VHlwZT8uRkFWT1JJVEVTKSB8fCBcIlwiKVxuICAgID8gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2U/LmdldEl0ZW0oTFNLZXlUeXBlPy5GQVZPUklURVMpIHx8IFwiXCIpXG4gICAgOiBbXSxcbiAgYWRkVG9GYXZvcml0ZXMoKSB7fSxcbiAgcmVtb3ZlRnJvbUZhdm9yaXRlcygpIHt9LFxufTtcblxuY29uc3QgV2Vic2hvcENvbnRleHQgPSBjcmVhdGVDb250ZXh0PEluaXRpYWxTdGF0ZT4oaW5pdGlhbFN0YXRlKTtcblxuZXhwb3J0IGNvbnN0IFdlYlNob3BQcm92aWRlcjogUmVhY3QuRkM8UHJvcHM+ID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIocmVkdWNlciwgaW5pdGlhbFN0YXRlKTtcblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICBjb25zdCBhZGRUb0Zhdm9yaXRlcyA9IChpZDogc3RyaW5nKSA9PiB7XG4gICAgZGlzcGF0Y2goeyB0eXBlOiBBY3Rpb25zLkFERF9UT19GQVZPUklURVMsIHBheWxvYWQ6IHsgaWQgfSB9KTtcbiAgfTtcblxuICBjb25zdCByZW1vdmVGcm9tRmF2b3JpdGVzID0gKGlkOiBzdHJpbmcpID0+IHtcbiAgICBkaXNwYXRjaCh7IHR5cGU6IEFjdGlvbnMuUkVNT1ZFX0ZST01fRkFWT1JJVEVTLCBwYXlsb2FkOiB7IGlkIH0gfSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8V2Vic2hvcENvbnRleHQuUHJvdmlkZXJcbiAgICAgIHZhbHVlPXt7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBhZGRUb0Zhdm9yaXRlcyxcbiAgICAgICAgcmVtb3ZlRnJvbUZhdm9yaXRlcyxcbiAgICAgIH19XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvV2Vic2hvcENvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgdXNlR2xvYmFsQ29udGV4dCA9ICgpID0+IHtcbiAgcmV0dXJuIHVzZUNvbnRleHQoV2Vic2hvcENvbnRleHQpO1xufTtcbiJdLCJuYW1lcyI6WyJsb2NhbFN0b3JhZ2UiLCJMU0tleVR5cGUiLCJ1c2VDb250ZXh0IiwidXNlUmVkdWNlciIsImNyZWF0ZUNvbnRleHQiLCJBY3Rpb25zIiwicmVkdWNlciIsImluaXRpYWxTdGF0ZSIsImZhdm9yaXRlcyIsIkpTT04iLCJwYXJzZSIsImdldEl0ZW0iLCJGQVZPUklURVMiLCJhZGRUb0Zhdm9yaXRlcyIsInJlbW92ZUZyb21GYXZvcml0ZXMiLCJXZWJzaG9wQ29udGV4dCIsIldlYlNob3BQcm92aWRlciIsImNoaWxkcmVuIiwic3RhdGUiLCJkaXNwYXRjaCIsImlkIiwidHlwZSIsIkFERF9UT19GQVZPUklURVMiLCJwYXlsb2FkIiwiUkVNT1ZFX0ZST01fRkFWT1JJVEVTIiwiUHJvdmlkZXIiLCJ2YWx1ZSIsInVzZUdsb2JhbENvbnRleHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/context/context.tsx\n"));

/***/ })

});