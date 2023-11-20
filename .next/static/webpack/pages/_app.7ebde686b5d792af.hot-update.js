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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   WebShopProvider: function() { return /* binding */ WebShopProvider; },\n/* harmony export */   useGlobalContext: function() { return /* binding */ useGlobalContext; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_addToLS__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/addToLS */ \"./src/utils/addToLS.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actions */ \"./src/context/actions.tsx\");\n/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reducer */ \"./src/context/reducer.tsx\");\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n\nconst initialState = {\n    //isLoading: false,\n    favorites:  true ? JSON.parse(localStorage.getItem(_utils_addToLS__WEBPACK_IMPORTED_MODULE_1__.LSKeyType.FAVORITES) || \"[]\") : 0,\n    addToFavorites () {},\n    removeFromFavorites () {}\n};\nconst WebshopContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)(initialState);\nconst WebShopProvider = (param)=>{\n    let { children } = param;\n    _s();\n    const [state, dispatch] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useReducer)(_reducer__WEBPACK_IMPORTED_MODULE_4__.reducer, initialState);\n    // eslint-disable-next-line @typescript-eslint/no-explicit-any\n    const addToFavorites = (id)=>{\n        dispatch({\n            type: _actions__WEBPACK_IMPORTED_MODULE_3__.Actions.ADD_TO_FAVORITES,\n            payload: {\n                id\n            }\n        });\n    };\n    const removeFromFavorites = (id)=>{\n        dispatch({\n            type: _actions__WEBPACK_IMPORTED_MODULE_3__.Actions.REMOVE_FROM_FAVORITES,\n            payload: {\n                id\n            }\n        });\n    };\n    console.log(state.favorites);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(WebshopContext.Provider, {\n        value: {\n            ...state,\n            addToFavorites,\n            removeFromFavorites\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/josipaznaor/Documents/Learning/webshop - nextjs/webshop/src/context/context.tsx\",\n        lineNumber: 53,\n        columnNumber: 5\n    }, undefined);\n};\n_s(WebShopProvider, \"6JWkGZ32UPfojeNx+xqn8ZU8A0Q=\");\n_c = WebShopProvider;\nconst useGlobalContext = ()=>{\n    _s1();\n    return (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(WebshopContext);\n};\n_s1(useGlobalContext, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\nvar _c;\n$RefreshReg$(_c, \"WebShopProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dC9jb250ZXh0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUE0QztBQUNrQjtBQUMxQjtBQUNBO0FBc0JwQyxNQUFNTSxlQUE2QjtJQUNqQyxtQkFBbUI7SUFDbkJDLFdBQ0UsS0FBNkIsR0FDekJDLEtBQUtDLEtBQUssQ0FBQ0MsYUFBYUMsT0FBTyxDQUFDWCxxREFBU0EsQ0FBQ1ksU0FBUyxLQUFLLFFBQ3hELENBQUU7SUFDUkMsbUJBQWtCO0lBQ2xCQyx3QkFBdUI7QUFDekI7QUFFQSxNQUFNQywrQkFBaUJaLG9EQUFhQSxDQUFlRztBQUU1QyxNQUFNVSxrQkFBbUM7UUFBQyxFQUFFQyxRQUFRLEVBQUU7O0lBQzNELE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHakIsaURBQVVBLENBQUNHLDZDQUFPQSxFQUFFQztJQUU5Qyw4REFBOEQ7SUFDOUQsTUFBTU8saUJBQWlCLENBQUNPO1FBQ3RCRCxTQUFTO1lBQUVFLE1BQU1qQiw2Q0FBT0EsQ0FBQ2tCLGdCQUFnQjtZQUFFQyxTQUFTO2dCQUFFSDtZQUFHO1FBQUU7SUFDN0Q7SUFFQSxNQUFNTixzQkFBc0IsQ0FBQ007UUFDM0JELFNBQVM7WUFBRUUsTUFBTWpCLDZDQUFPQSxDQUFDb0IscUJBQXFCO1lBQUVELFNBQVM7Z0JBQUVIO1lBQUc7UUFBRTtJQUNsRTtJQUVBSyxRQUFRQyxHQUFHLENBQUNSLE1BQU1YLFNBQVM7SUFFM0IscUJBQ0UsOERBQUNRLGVBQWVZLFFBQVE7UUFDdEJDLE9BQU87WUFDTCxHQUFHVixLQUFLO1lBQ1JMO1lBQ0FDO1FBQ0Y7a0JBRUNHOzs7Ozs7QUFHUCxFQUFFO0dBekJXRDtLQUFBQTtBQTJCTixNQUFNYSxtQkFBbUI7O0lBQzlCLE9BQU81QixpREFBVUEsQ0FBQ2M7QUFDcEIsRUFBRTtJQUZXYyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29udGV4dC9jb250ZXh0LnRzeD9lZThlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExTS2V5VHlwZSB9IGZyb20gXCJAL3V0aWxzL2FkZFRvTFNcIjtcbmltcG9ydCB7IHVzZUNvbnRleHQsIHVzZVJlZHVjZXIsIGNyZWF0ZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEFjdGlvbnMgfSBmcm9tIFwiLi9hY3Rpb25zXCI7XG5pbXBvcnQgeyByZWR1Y2VyIH0gZnJvbSBcIi4vcmVkdWNlclwiO1xuXG5pbnRlcmZhY2UgRmF2b3JpdGVEYXRhIHtcbiAgaWQ6IG51bWJlcjtcbiAgdGl0bGU6IHN0cmluZztcbiAgcHJpY2U6IG51bWJlcjtcbiAgcXVhbnRpdHk6IG51bWJlcjtcbiAgaW1hZ2U6IHN0cmluZztcbiAgZGV0YWlsOiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBJbml0aWFsU3RhdGUge1xuICAvL2lzTG9hZGluZzogYm9vbGVhbjtcbiAgZmF2b3JpdGVzOiBBcnJheTxGYXZvcml0ZURhdGE+O1xuICBhZGRUb0Zhdm9yaXRlcyhpZDogc3RyaW5nKTogdm9pZDtcbiAgcmVtb3ZlRnJvbUZhdm9yaXRlcyhpZDogc3RyaW5nKTogdm9pZDtcbn1cblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcbn1cblxuY29uc3QgaW5pdGlhbFN0YXRlOiBJbml0aWFsU3RhdGUgPSB7XG4gIC8vaXNMb2FkaW5nOiBmYWxzZSxcbiAgZmF2b3JpdGVzOlxuICAgIHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCJcbiAgICAgID8gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShMU0tleVR5cGUuRkFWT1JJVEVTKSB8fCBcIltdXCIpXG4gICAgICA6IFwiXCIsXG4gIGFkZFRvRmF2b3JpdGVzKCkge30sXG4gIHJlbW92ZUZyb21GYXZvcml0ZXMoKSB7fSxcbn07XG5cbmNvbnN0IFdlYnNob3BDb250ZXh0ID0gY3JlYXRlQ29udGV4dDxJbml0aWFsU3RhdGU+KGluaXRpYWxTdGF0ZSk7XG5cbmV4cG9ydCBjb25zdCBXZWJTaG9wUHJvdmlkZXI6IFJlYWN0LkZDPFByb3BzPiA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKHJlZHVjZXIsIGluaXRpYWxTdGF0ZSk7XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgY29uc3QgYWRkVG9GYXZvcml0ZXMgPSAoaWQ6IHN0cmluZykgPT4ge1xuICAgIGRpc3BhdGNoKHsgdHlwZTogQWN0aW9ucy5BRERfVE9fRkFWT1JJVEVTLCBwYXlsb2FkOiB7IGlkIH0gfSk7XG4gIH07XG5cbiAgY29uc3QgcmVtb3ZlRnJvbUZhdm9yaXRlcyA9IChpZDogc3RyaW5nKSA9PiB7XG4gICAgZGlzcGF0Y2goeyB0eXBlOiBBY3Rpb25zLlJFTU9WRV9GUk9NX0ZBVk9SSVRFUywgcGF5bG9hZDogeyBpZCB9IH0pO1xuICB9O1xuXG4gIGNvbnNvbGUubG9nKHN0YXRlLmZhdm9yaXRlcyk7XG5cbiAgcmV0dXJuIChcbiAgICA8V2Vic2hvcENvbnRleHQuUHJvdmlkZXJcbiAgICAgIHZhbHVlPXt7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBhZGRUb0Zhdm9yaXRlcyxcbiAgICAgICAgcmVtb3ZlRnJvbUZhdm9yaXRlcyxcbiAgICAgIH19XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvV2Vic2hvcENvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgdXNlR2xvYmFsQ29udGV4dCA9ICgpID0+IHtcbiAgcmV0dXJuIHVzZUNvbnRleHQoV2Vic2hvcENvbnRleHQpO1xufTtcbiJdLCJuYW1lcyI6WyJMU0tleVR5cGUiLCJ1c2VDb250ZXh0IiwidXNlUmVkdWNlciIsImNyZWF0ZUNvbnRleHQiLCJBY3Rpb25zIiwicmVkdWNlciIsImluaXRpYWxTdGF0ZSIsImZhdm9yaXRlcyIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJGQVZPUklURVMiLCJhZGRUb0Zhdm9yaXRlcyIsInJlbW92ZUZyb21GYXZvcml0ZXMiLCJXZWJzaG9wQ29udGV4dCIsIldlYlNob3BQcm92aWRlciIsImNoaWxkcmVuIiwic3RhdGUiLCJkaXNwYXRjaCIsImlkIiwidHlwZSIsIkFERF9UT19GQVZPUklURVMiLCJwYXlsb2FkIiwiUkVNT1ZFX0ZST01fRkFWT1JJVEVTIiwiY29uc29sZSIsImxvZyIsIlByb3ZpZGVyIiwidmFsdWUiLCJ1c2VHbG9iYWxDb250ZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/context/context.tsx\n"));

/***/ })

});