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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   reducer: function() { return /* binding */ reducer; }\n/* harmony export */ });\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ \"./src/context/actions.tsx\");\n\nconst reducer = (state, action)=>{\n    if (action.type === _actions__WEBPACK_IMPORTED_MODULE_0__.ADD_TO_FAVORITES) {\n        let favorites = state.favorites;\n        if (!favorites.includes(action.payload.id)) {\n            favorites = [\n                ...state.favorites,\n                action.payload.id\n            ];\n        } else {\n            // eslint-disable-next-line @typescript-eslint/no-explicit-any\n            favorites = favorites.filter((item)=>item.id !== action.payload.id);\n        }\n        return {\n            ...state,\n            favorites\n        };\n    }\n    throw new Error(\"no matching action types: \".concat(action.type));\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dC9yZWR1Y2VyLnRzeCIsIm1hcHBpbmdzIjoiOzs7OztBQUE2QztBQVl0QyxNQUFNQyxVQUFVLENBQUNDLE9BQXVCQztJQUM3QyxJQUFJQSxPQUFPQyxJQUFJLEtBQUtKLHNEQUFnQkEsRUFBRTtRQUNwQyxJQUFJSyxZQUFZSCxNQUFNRyxTQUFTO1FBRS9CLElBQUksQ0FBQ0EsVUFBVUMsUUFBUSxDQUFDSCxPQUFPSSxPQUFPLENBQUNDLEVBQUUsR0FBRztZQUMxQ0gsWUFBWTttQkFBSUgsTUFBTUcsU0FBUztnQkFBRUYsT0FBT0ksT0FBTyxDQUFDQyxFQUFFO2FBQUM7UUFDckQsT0FBTztZQUNMLDhEQUE4RDtZQUM5REgsWUFBWUEsVUFBVUksTUFBTSxDQUMxQixDQUFDQyxPQUFzQkEsS0FBS0YsRUFBRSxLQUFLTCxPQUFPSSxPQUFPLENBQUNDLEVBQUU7UUFFeEQ7UUFFQSxPQUFPO1lBQUUsR0FBR04sS0FBSztZQUFFRztRQUFVO0lBQy9CO0lBQ0EsTUFBTSxJQUFJTSxNQUFNLDZCQUF5QyxPQUFaUixPQUFPQyxJQUFJO0FBQzFELEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHQvcmVkdWNlci50c3g/ZGViYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBRERfVE9fRkFWT1JJVEVTIH0gZnJvbSBcIi4vYWN0aW9uc1wiO1xuXG50eXBlIEZhdm9yaXRlc1N0YXRlID0ge1xuICBmYXZvcml0ZXM6IHN0cmluZ1tdO1xufTtcblxudHlwZSBGYXZvcml0ZXNBY3Rpb24gPSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4gIHBheWxvYWQ6IHsgaWQ6IGFueSB9O1xuICB0eXBlOiBhbnk7XG59O1xuXG5leHBvcnQgY29uc3QgcmVkdWNlciA9IChzdGF0ZTogRmF2b3JpdGVzU3RhdGUsIGFjdGlvbjogRmF2b3JpdGVzQWN0aW9uKSA9PiB7XG4gIGlmIChhY3Rpb24udHlwZSA9PT0gQUREX1RPX0ZBVk9SSVRFUykge1xuICAgIGxldCBmYXZvcml0ZXMgPSBzdGF0ZS5mYXZvcml0ZXM7XG5cbiAgICBpZiAoIWZhdm9yaXRlcy5pbmNsdWRlcyhhY3Rpb24ucGF5bG9hZC5pZCkpIHtcbiAgICAgIGZhdm9yaXRlcyA9IFsuLi5zdGF0ZS5mYXZvcml0ZXMsIGFjdGlvbi5wYXlsb2FkLmlkXTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgICAgIGZhdm9yaXRlcyA9IGZhdm9yaXRlcy5maWx0ZXIoXG4gICAgICAgIChpdGVtOiB7IGlkOiBhbnkgfSkgPT4gaXRlbS5pZCAhPT0gYWN0aW9uLnBheWxvYWQuaWRcbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgLi4uc3RhdGUsIGZhdm9yaXRlcyB9O1xuICB9XG4gIHRocm93IG5ldyBFcnJvcihgbm8gbWF0Y2hpbmcgYWN0aW9uIHR5cGVzOiAke2FjdGlvbi50eXBlfWApO1xufTtcbiJdLCJuYW1lcyI6WyJBRERfVE9fRkFWT1JJVEVTIiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsImZhdm9yaXRlcyIsImluY2x1ZGVzIiwicGF5bG9hZCIsImlkIiwiZmlsdGVyIiwiaXRlbSIsIkVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/context/reducer.tsx\n"));

/***/ })

});