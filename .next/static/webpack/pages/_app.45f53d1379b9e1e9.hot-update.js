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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   WebShopProvider: function() { return /* binding */ WebShopProvider; },\n/* harmony export */   useGlobalContext: function() { return /* binding */ useGlobalContext; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions */ \"./src/context/actions.tsx\");\n/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reducer */ \"./src/context/reducer.tsx\");\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\nconst initialState = {\n    isLoading: false,\n    favorites: []\n};\nconst WebshopContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(initialState);\nconst WebShopProvider = (param)=>{\n    let { children } = param;\n    _s();\n    const [state, dispatch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(_reducer__WEBPACK_IMPORTED_MODULE_3__.reducer, initialState);\n    const addToFavorites = (id)=>{\n        dispatch({\n            type: _actions__WEBPACK_IMPORTED_MODULE_2__.ADD_TO_FAVORITES,\n            payload: {\n                id\n            }\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(WebshopContext.Provider, {\n        value: {\n            ...state,\n            addToFavorites\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/josipaznaor/Documents/Learning/webshop - nextjs/webshop/src/context/context.tsx\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, undefined);\n};\n_s(WebShopProvider, \"6JWkGZ32UPfojeNx+xqn8ZU8A0Q=\");\n_c = WebShopProvider;\nconst useGlobalContext = ()=>{\n    _s1();\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(WebShopProvider);\n};\n_s1(useGlobalContext, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\nvar _c;\n$RefreshReg$(_c, \"WebShopProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dC9jb250ZXh0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQXlFO0FBQzVCO0FBQ1Q7QUFPcEMsTUFBTUssZUFBNkI7SUFDakNDLFdBQVc7SUFDWEMsV0FBVyxFQUFFO0FBQ2Y7QUFFQSxNQUFNQywrQkFBaUJOLG9EQUFhQSxDQUFzQkc7QUFFbkQsTUFBTUksa0JBQWtCO1FBQUMsRUFBRUMsUUFBUSxFQUFFOztJQUMxQyxNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR1gsaURBQVVBLENBQUNHLDZDQUFPQSxFQUFFQztJQUU5QyxNQUFNUSxpQkFBaUIsQ0FBQ0M7UUFDdEJGLFNBQVM7WUFBRUcsTUFBTVosc0RBQWdCQTtZQUFFYSxTQUFTO2dCQUFFRjtZQUFHO1FBQUU7SUFDckQ7SUFFQSxxQkFDRSw4REFBQ04sZUFBZVMsUUFBUTtRQUFDQyxPQUFPO1lBQUUsR0FBR1AsS0FBSztZQUFFRTtRQUFlO2tCQUN4REg7Ozs7OztBQUdQLEVBQUU7R0FaV0Q7S0FBQUE7QUFjTixNQUFNVSxtQkFBbUI7O0lBQzlCLE9BQU9uQixpREFBVUEsQ0FBQ1M7QUFDcEIsRUFBRTtJQUZXVSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29udGV4dC9jb250ZXh0LnRzeD9lZThlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNvbnRleHQsIHVzZVJlZHVjZXIsIHVzZUVmZmVjdCwgY3JlYXRlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQUREX1RPX0ZBVk9SSVRFUyB9IGZyb20gXCIuL2FjdGlvbnNcIjtcbmltcG9ydCB7IHJlZHVjZXIgfSBmcm9tIFwiLi9yZWR1Y2VyXCI7XG5cbmludGVyZmFjZSBJbml0aWFsU3RhdGUge1xuICBpc0xvYWRpbmc6IGJvb2xlYW47XG4gIGZhdm9yaXRlczogQXJyYXk8c3RyaW5nPjtcbn1cblxuY29uc3QgaW5pdGlhbFN0YXRlOiBJbml0aWFsU3RhdGUgPSB7XG4gIGlzTG9hZGluZzogZmFsc2UsXG4gIGZhdm9yaXRlczogW10sXG59O1xuXG5jb25zdCBXZWJzaG9wQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8SW5pdGlhbFN0YXRlIHwgbnVsbD4oaW5pdGlhbFN0YXRlKTtcblxuZXhwb3J0IGNvbnN0IFdlYlNob3BQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKHJlZHVjZXIsIGluaXRpYWxTdGF0ZSk7XG5cbiAgY29uc3QgYWRkVG9GYXZvcml0ZXMgPSAoaWQ6IG51bWJlcikgPT4ge1xuICAgIGRpc3BhdGNoKHsgdHlwZTogQUREX1RPX0ZBVk9SSVRFUywgcGF5bG9hZDogeyBpZCB9IH0pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPFdlYnNob3BDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IC4uLnN0YXRlLCBhZGRUb0Zhdm9yaXRlcyB9fT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L1dlYnNob3BDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IHVzZUdsb2JhbENvbnRleHQgPSAoKSA9PiB7XG4gIHJldHVybiB1c2VDb250ZXh0KFdlYlNob3BQcm92aWRlcik7XG59O1xuIl0sIm5hbWVzIjpbInVzZUNvbnRleHQiLCJ1c2VSZWR1Y2VyIiwiY3JlYXRlQ29udGV4dCIsIkFERF9UT19GQVZPUklURVMiLCJyZWR1Y2VyIiwiaW5pdGlhbFN0YXRlIiwiaXNMb2FkaW5nIiwiZmF2b3JpdGVzIiwiV2Vic2hvcENvbnRleHQiLCJXZWJTaG9wUHJvdmlkZXIiLCJjaGlsZHJlbiIsInN0YXRlIiwiZGlzcGF0Y2giLCJhZGRUb0Zhdm9yaXRlcyIsImlkIiwidHlwZSIsInBheWxvYWQiLCJQcm92aWRlciIsInZhbHVlIiwidXNlR2xvYmFsQ29udGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/context/context.tsx\n"));

/***/ })

});