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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   reducer: function() { return /* binding */ reducer; }\n/* harmony export */ });\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ \"./src/context/actions.tsx\");\n\nconst reducer = (state, action)=>{\n    if (action.type === _actions__WEBPACK_IMPORTED_MODULE_0__.Actions.ADD_TO_FAVORITES) {\n        const newFavorites = [\n            \"\"\n        ];\n        if (!newFavorites.includes(action.payload.id)) {\n            state.favorites = [\n                ...newFavorites,\n                action.payload.id\n            ];\n        }\n        console.log(newFavorites);\n        // if (state.favorites.includes(action.payload.id)) {\n        //   favorites = favorites.filter(\n        //     // eslint-disable-next-line @typescript-eslint/no-explicit-any\n        //     (item: any) => item.id === action.payload.id\n        //   );\n        // } else {\n        //   favorites = [...state.favorites, action.payload.id];\n        // }\n        return {\n            ...state,\n            newFavorites\n        };\n    }\n    if (action.type === _actions__WEBPACK_IMPORTED_MODULE_0__.Actions.REMOVE_FROM_FAVORITES) {\n        const favorites = state.favorites;\n        const newFavorites = favorites.filter(// eslint-disable-next-line @typescript-eslint/no-explicit-any\n        (item)=>item.id !== action.payload.id);\n        console.log(newFavorites);\n        return {\n            ...state,\n            favorites: newFavorites\n        };\n    }\n    throw new Error(\"no matching action types: \".concat(action.type));\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dC9yZWR1Y2VyLnRzeCIsIm1hcHBpbmdzIjoiOzs7OztBQUFvQztBQVc3QixNQUFNQyxVQUFVLENBQUNDLE9BQWNDO0lBQ3BDLElBQUlBLE9BQU9DLElBQUksS0FBS0osNkNBQU9BLENBQUNLLGdCQUFnQixFQUFFO1FBQzVDLE1BQU1DLGVBQWU7WUFBQztTQUFHO1FBRXpCLElBQUksQ0FBQ0EsYUFBYUMsUUFBUSxDQUFDSixPQUFPSyxPQUFPLENBQUNDLEVBQUUsR0FBRztZQUM3Q1AsTUFBTVEsU0FBUyxHQUFHO21CQUFJSjtnQkFBY0gsT0FBT0ssT0FBTyxDQUFDQyxFQUFFO2FBQUM7UUFDeEQ7UUFFQUUsUUFBUUMsR0FBRyxDQUFDTjtRQUVaLHFEQUFxRDtRQUNyRCxrQ0FBa0M7UUFDbEMscUVBQXFFO1FBQ3JFLG1EQUFtRDtRQUNuRCxPQUFPO1FBQ1AsV0FBVztRQUNYLHlEQUF5RDtRQUN6RCxJQUFJO1FBRUosT0FBTztZQUFFLEdBQUdKLEtBQUs7WUFBRUk7UUFBYTtJQUNsQztJQUNBLElBQUlILE9BQU9DLElBQUksS0FBS0osNkNBQU9BLENBQUNhLHFCQUFxQixFQUFFO1FBQ2pELE1BQU1ILFlBQVlSLE1BQU1RLFNBQVM7UUFFakMsTUFBTUosZUFBZUksVUFBVUksTUFBTSxDQUNuQyw4REFBOEQ7UUFDOUQsQ0FBQ0MsT0FBY0EsS0FBS04sRUFBRSxLQUFLTixPQUFPSyxPQUFPLENBQUNDLEVBQUU7UUFHOUNFLFFBQVFDLEdBQUcsQ0FBQ047UUFFWixPQUFPO1lBQUUsR0FBR0osS0FBSztZQUFFUSxXQUFXSjtRQUFhO0lBQzdDO0lBQ0EsTUFBTSxJQUFJVSxNQUFNLDZCQUF5QyxPQUFaYixPQUFPQyxJQUFJO0FBQzFELEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHQvcmVkdWNlci50c3g/ZGViYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb25zIH0gZnJvbSBcIi4vYWN0aW9uc1wiO1xuXG5pbnRlcmZhY2UgQWN0aW9uIHtcbiAgdHlwZTogQWN0aW9ucztcbiAgcGF5bG9hZDogeyBpZDogc3RyaW5nIH07XG59XG5cbmludGVyZmFjZSBTdGF0ZSB7XG4gIGZhdm9yaXRlczogc3RyaW5nW107XG59XG5cbmV4cG9ydCBjb25zdCByZWR1Y2VyID0gKHN0YXRlOiBTdGF0ZSwgYWN0aW9uOiBBY3Rpb24pID0+IHtcbiAgaWYgKGFjdGlvbi50eXBlID09PSBBY3Rpb25zLkFERF9UT19GQVZPUklURVMpIHtcbiAgICBjb25zdCBuZXdGYXZvcml0ZXMgPSBbXCJcIl07XG5cbiAgICBpZiAoIW5ld0Zhdm9yaXRlcy5pbmNsdWRlcyhhY3Rpb24ucGF5bG9hZC5pZCkpIHtcbiAgICAgIHN0YXRlLmZhdm9yaXRlcyA9IFsuLi5uZXdGYXZvcml0ZXMsIGFjdGlvbi5wYXlsb2FkLmlkXTtcbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZyhuZXdGYXZvcml0ZXMpO1xuXG4gICAgLy8gaWYgKHN0YXRlLmZhdm9yaXRlcy5pbmNsdWRlcyhhY3Rpb24ucGF5bG9hZC5pZCkpIHtcbiAgICAvLyAgIGZhdm9yaXRlcyA9IGZhdm9yaXRlcy5maWx0ZXIoXG4gICAgLy8gICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4gICAgLy8gICAgIChpdGVtOiBhbnkpID0+IGl0ZW0uaWQgPT09IGFjdGlvbi5wYXlsb2FkLmlkXG4gICAgLy8gICApO1xuICAgIC8vIH0gZWxzZSB7XG4gICAgLy8gICBmYXZvcml0ZXMgPSBbLi4uc3RhdGUuZmF2b3JpdGVzLCBhY3Rpb24ucGF5bG9hZC5pZF07XG4gICAgLy8gfVxuXG4gICAgcmV0dXJuIHsgLi4uc3RhdGUsIG5ld0Zhdm9yaXRlcyB9O1xuICB9XG4gIGlmIChhY3Rpb24udHlwZSA9PT0gQWN0aW9ucy5SRU1PVkVfRlJPTV9GQVZPUklURVMpIHtcbiAgICBjb25zdCBmYXZvcml0ZXMgPSBzdGF0ZS5mYXZvcml0ZXM7XG5cbiAgICBjb25zdCBuZXdGYXZvcml0ZXMgPSBmYXZvcml0ZXMuZmlsdGVyKFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgICAgIChpdGVtOiBhbnkpID0+IGl0ZW0uaWQgIT09IGFjdGlvbi5wYXlsb2FkLmlkXG4gICAgKTtcblxuICAgIGNvbnNvbGUubG9nKG5ld0Zhdm9yaXRlcyk7XG5cbiAgICByZXR1cm4geyAuLi5zdGF0ZSwgZmF2b3JpdGVzOiBuZXdGYXZvcml0ZXMgfTtcbiAgfVxuICB0aHJvdyBuZXcgRXJyb3IoYG5vIG1hdGNoaW5nIGFjdGlvbiB0eXBlczogJHthY3Rpb24udHlwZX1gKTtcbn07XG4iXSwibmFtZXMiOlsiQWN0aW9ucyIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJBRERfVE9fRkFWT1JJVEVTIiwibmV3RmF2b3JpdGVzIiwiaW5jbHVkZXMiLCJwYXlsb2FkIiwiaWQiLCJmYXZvcml0ZXMiLCJjb25zb2xlIiwibG9nIiwiUkVNT1ZFX0ZST01fRkFWT1JJVEVTIiwiZmlsdGVyIiwiaXRlbSIsIkVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/context/reducer.tsx\n"));

/***/ })

});