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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   reducer: function() { return /* binding */ reducer; }\n/* harmony export */ });\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ \"./src/context/actions.tsx\");\n\nconst reducer = (state, action)=>{\n    if (action.type === _actions__WEBPACK_IMPORTED_MODULE_0__.Actions.ADD_TO_FAVORITES) {\n        let newFavorites = state.favorites;\n        newFavorites = [\n            ...newFavorites,\n            action.payload.id\n        ];\n        console.log(newFavorites);\n        // if (state.favorites.includes(action.payload.id)) {\n        //   favorites = favorites.filter(\n        //     // eslint-disable-next-line @typescript-eslint/no-explicit-any\n        //     (item: any) => item.id === action.payload.id\n        //   );\n        // } else {\n        //   favorites = [...state.favorites, action.payload.id];\n        // }\n        return {\n            ...state,\n            newFavorites\n        };\n    }\n    if (action.type === _actions__WEBPACK_IMPORTED_MODULE_0__.Actions.REMOVE_FROM_FAVORITES) {\n        const favorites = state.favorites;\n        const newFavorites = favorites.filter(// eslint-disable-next-line @typescript-eslint/no-explicit-any\n        (item)=>item.id !== action.payload.id);\n        console.log(newFavorites);\n        return {\n            ...state,\n            favorites: newFavorites\n        };\n    }\n    throw new Error(\"no matching action types: \".concat(action.type));\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dC9yZWR1Y2VyLnRzeCIsIm1hcHBpbmdzIjoiOzs7OztBQUFvQztBQVc3QixNQUFNQyxVQUFVLENBQUNDLE9BQWNDO0lBQ3BDLElBQUlBLE9BQU9DLElBQUksS0FBS0osNkNBQU9BLENBQUNLLGdCQUFnQixFQUFFO1FBQzVDLElBQUlDLGVBQWVKLE1BQU1LLFNBQVM7UUFFbENELGVBQWU7ZUFBSUE7WUFBY0gsT0FBT0ssT0FBTyxDQUFDQyxFQUFFO1NBQUM7UUFFbkRDLFFBQVFDLEdBQUcsQ0FBQ0w7UUFFWixxREFBcUQ7UUFDckQsa0NBQWtDO1FBQ2xDLHFFQUFxRTtRQUNyRSxtREFBbUQ7UUFDbkQsT0FBTztRQUNQLFdBQVc7UUFDWCx5REFBeUQ7UUFDekQsSUFBSTtRQUVKLE9BQU87WUFBRSxHQUFHSixLQUFLO1lBQUVJO1FBQWE7SUFDbEM7SUFDQSxJQUFJSCxPQUFPQyxJQUFJLEtBQUtKLDZDQUFPQSxDQUFDWSxxQkFBcUIsRUFBRTtRQUNqRCxNQUFNTCxZQUFZTCxNQUFNSyxTQUFTO1FBRWpDLE1BQU1ELGVBQWVDLFVBQVVNLE1BQU0sQ0FDbkMsOERBQThEO1FBQzlELENBQUNDLE9BQWNBLEtBQUtMLEVBQUUsS0FBS04sT0FBT0ssT0FBTyxDQUFDQyxFQUFFO1FBRzlDQyxRQUFRQyxHQUFHLENBQUNMO1FBRVosT0FBTztZQUFFLEdBQUdKLEtBQUs7WUFBRUssV0FBV0Q7UUFBYTtJQUM3QztJQUNBLE1BQU0sSUFBSVMsTUFBTSw2QkFBeUMsT0FBWlosT0FBT0MsSUFBSTtBQUMxRCxFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb250ZXh0L3JlZHVjZXIudHN4P2RlYmMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9ucyB9IGZyb20gXCIuL2FjdGlvbnNcIjtcblxuaW50ZXJmYWNlIEFjdGlvbiB7XG4gIHR5cGU6IEFjdGlvbnM7XG4gIHBheWxvYWQ6IHsgaWQ6IHN0cmluZyB9O1xufVxuXG5pbnRlcmZhY2UgU3RhdGUge1xuICBmYXZvcml0ZXM6IHN0cmluZ1tdO1xufVxuXG5leHBvcnQgY29uc3QgcmVkdWNlciA9IChzdGF0ZTogU3RhdGUsIGFjdGlvbjogQWN0aW9uKSA9PiB7XG4gIGlmIChhY3Rpb24udHlwZSA9PT0gQWN0aW9ucy5BRERfVE9fRkFWT1JJVEVTKSB7XG4gICAgbGV0IG5ld0Zhdm9yaXRlcyA9IHN0YXRlLmZhdm9yaXRlcztcblxuICAgIG5ld0Zhdm9yaXRlcyA9IFsuLi5uZXdGYXZvcml0ZXMsIGFjdGlvbi5wYXlsb2FkLmlkXTtcblxuICAgIGNvbnNvbGUubG9nKG5ld0Zhdm9yaXRlcyk7XG5cbiAgICAvLyBpZiAoc3RhdGUuZmF2b3JpdGVzLmluY2x1ZGVzKGFjdGlvbi5wYXlsb2FkLmlkKSkge1xuICAgIC8vICAgZmF2b3JpdGVzID0gZmF2b3JpdGVzLmZpbHRlcihcbiAgICAvLyAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgICAvLyAgICAgKGl0ZW06IGFueSkgPT4gaXRlbS5pZCA9PT0gYWN0aW9uLnBheWxvYWQuaWRcbiAgICAvLyAgICk7XG4gICAgLy8gfSBlbHNlIHtcbiAgICAvLyAgIGZhdm9yaXRlcyA9IFsuLi5zdGF0ZS5mYXZvcml0ZXMsIGFjdGlvbi5wYXlsb2FkLmlkXTtcbiAgICAvLyB9XG5cbiAgICByZXR1cm4geyAuLi5zdGF0ZSwgbmV3RmF2b3JpdGVzIH07XG4gIH1cbiAgaWYgKGFjdGlvbi50eXBlID09PSBBY3Rpb25zLlJFTU9WRV9GUk9NX0ZBVk9SSVRFUykge1xuICAgIGNvbnN0IGZhdm9yaXRlcyA9IHN0YXRlLmZhdm9yaXRlcztcblxuICAgIGNvbnN0IG5ld0Zhdm9yaXRlcyA9IGZhdm9yaXRlcy5maWx0ZXIoXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICAgICAgKGl0ZW06IGFueSkgPT4gaXRlbS5pZCAhPT0gYWN0aW9uLnBheWxvYWQuaWRcbiAgICApO1xuXG4gICAgY29uc29sZS5sb2cobmV3RmF2b3JpdGVzKTtcblxuICAgIHJldHVybiB7IC4uLnN0YXRlLCBmYXZvcml0ZXM6IG5ld0Zhdm9yaXRlcyB9O1xuICB9XG4gIHRocm93IG5ldyBFcnJvcihgbm8gbWF0Y2hpbmcgYWN0aW9uIHR5cGVzOiAke2FjdGlvbi50eXBlfWApO1xufTtcbiJdLCJuYW1lcyI6WyJBY3Rpb25zIiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsIkFERF9UT19GQVZPUklURVMiLCJuZXdGYXZvcml0ZXMiLCJmYXZvcml0ZXMiLCJwYXlsb2FkIiwiaWQiLCJjb25zb2xlIiwibG9nIiwiUkVNT1ZFX0ZST01fRkFWT1JJVEVTIiwiZmlsdGVyIiwiaXRlbSIsIkVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/context/reducer.tsx\n"));

/***/ })

});