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

/***/ "./src/context/reducer.tsx":
/*!*********************************!*\
  !*** ./src/context/reducer.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   reducer: function() { return /* binding */ reducer; }\n/* harmony export */ });\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ \"./src/context/actions.tsx\");\n\nconst reducer = (state, action)=>{\n    if (action.type === _actions__WEBPACK_IMPORTED_MODULE_0__.Actions.ADD_TO_FAVORITES) {\n        let favorites = state.favorites;\n        if (!favorites.includes(action.payload.id)) {\n            favorites = [\n                ...state.favorites,\n                action.payload.id\n            ];\n        }\n        // } else {\n        //   // eslint-disable-next-line @typescript-eslint/no-explicit-any\n        //   favorites = favorites.filter((item) => item.id !== action.payload.id);\n        // }\n        return {\n            ...state,\n            favorites\n        };\n    }\n    throw new Error(\"no matching action types: \".concat(action.type));\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dC9yZWR1Y2VyLnRzeCIsIm1hcHBpbmdzIjoiOzs7OztBQUFvQztBQVc3QixNQUFNQyxVQUFVLENBQUNDLE9BQXVCQztJQUM3QyxJQUFJQSxPQUFPQyxJQUFJLEtBQUtKLDZDQUFPQSxDQUFDSyxnQkFBZ0IsRUFBRTtRQUM1QyxJQUFJQyxZQUFZSixNQUFNSSxTQUFTO1FBRS9CLElBQUksQ0FBQ0EsVUFBVUMsUUFBUSxDQUFDSixPQUFPSyxPQUFPLENBQUNDLEVBQUUsR0FBRztZQUMxQ0gsWUFBWTttQkFBSUosTUFBTUksU0FBUztnQkFBRUgsT0FBT0ssT0FBTyxDQUFDQyxFQUFFO2FBQUM7UUFDckQ7UUFDQSxXQUFXO1FBQ1gsbUVBQW1FO1FBQ25FLDJFQUEyRTtRQUMzRSxJQUFJO1FBRUosT0FBTztZQUFFLEdBQUdQLEtBQUs7WUFBRUk7UUFBVTtJQUMvQjtJQUNBLE1BQU0sSUFBSUksTUFBTSw2QkFBeUMsT0FBWlAsT0FBT0MsSUFBSTtBQUMxRCxFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb250ZXh0L3JlZHVjZXIudHN4P2RlYmMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9ucyB9IGZyb20gXCIuL2FjdGlvbnNcIjtcblxuaW50ZXJmYWNlIEZhdm9yaXRlc0FjdGlvbiB7XG4gIHR5cGU6IEFjdGlvbnMuQUREX1RPX0ZBVk9SSVRFUztcbiAgcGF5bG9hZDogeyBpZDogc3RyaW5nIH07XG59XG5cbmludGVyZmFjZSBGYXZvcml0ZXNTdGF0ZSB7XG4gIGZhdm9yaXRlczogc3RyaW5nW107XG59XG5cbmV4cG9ydCBjb25zdCByZWR1Y2VyID0gKHN0YXRlOiBGYXZvcml0ZXNTdGF0ZSwgYWN0aW9uOiBGYXZvcml0ZXNBY3Rpb24pID0+IHtcbiAgaWYgKGFjdGlvbi50eXBlID09PSBBY3Rpb25zLkFERF9UT19GQVZPUklURVMpIHtcbiAgICBsZXQgZmF2b3JpdGVzID0gc3RhdGUuZmF2b3JpdGVzO1xuXG4gICAgaWYgKCFmYXZvcml0ZXMuaW5jbHVkZXMoYWN0aW9uLnBheWxvYWQuaWQpKSB7XG4gICAgICBmYXZvcml0ZXMgPSBbLi4uc3RhdGUuZmF2b3JpdGVzLCBhY3Rpb24ucGF5bG9hZC5pZF07XG4gICAgfVxuICAgIC8vIH0gZWxzZSB7XG4gICAgLy8gICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICAgIC8vICAgZmF2b3JpdGVzID0gZmF2b3JpdGVzLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5pZCAhPT0gYWN0aW9uLnBheWxvYWQuaWQpO1xuICAgIC8vIH1cblxuICAgIHJldHVybiB7IC4uLnN0YXRlLCBmYXZvcml0ZXMgfTtcbiAgfVxuICB0aHJvdyBuZXcgRXJyb3IoYG5vIG1hdGNoaW5nIGFjdGlvbiB0eXBlczogJHthY3Rpb24udHlwZX1gKTtcbn07XG4iXSwibmFtZXMiOlsiQWN0aW9ucyIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJBRERfVE9fRkFWT1JJVEVTIiwiZmF2b3JpdGVzIiwiaW5jbHVkZXMiLCJwYXlsb2FkIiwiaWQiLCJFcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/context/reducer.tsx\n"));

/***/ })

});