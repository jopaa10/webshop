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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   reducer: function() { return /* binding */ reducer; }\n/* harmony export */ });\n/* harmony import */ var _utils_addToLS__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/addToLS */ \"./src/utils/addToLS.tsx\");\n/* harmony import */ var _utils_mockData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/mockData */ \"./src/utils/mockData.tsx\");\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions */ \"./src/context/actions.tsx\");\n\n\n\nconst reducer = (state, action)=>{\n    if (action.type === _actions__WEBPACK_IMPORTED_MODULE_2__.Actions.ADD_TO_FAVORITES) {\n        // let newFavorites = state.favorites;\n        if (!state.favorites.includes(action.payload.id)) {\n            const favoriteData = _utils_mockData__WEBPACK_IMPORTED_MODULE_1__.MOCK_DATA === null || _utils_mockData__WEBPACK_IMPORTED_MODULE_1__.MOCK_DATA === void 0 ? void 0 : _utils_mockData__WEBPACK_IMPORTED_MODULE_1__.MOCK_DATA.find(// eslint-disable-next-line @typescript-eslint/no-explicit-any\n            (item)=>{\n                var _action_payload;\n                return item.id === (action === null || action === void 0 ? void 0 : (_action_payload = action.payload) === null || _action_payload === void 0 ? void 0 : _action_payload.id);\n            });\n            console.log(favoriteData);\n            state.favorites = [\n                ...state.favorites,\n                favoriteData\n            ];\n            (0,_utils_addToLS__WEBPACK_IMPORTED_MODULE_0__.AddToLocalStorage)({\n                key: _utils_addToLS__WEBPACK_IMPORTED_MODULE_0__.LSKeyType.FAVORITES,\n                items: state.favorites\n            });\n        }\n        return {\n            ...state,\n            favorites: state.favorites\n        };\n    }\n    if (action.type === _actions__WEBPACK_IMPORTED_MODULE_2__.Actions.REMOVE_FROM_FAVORITES) {\n        const newFavorites = state.favorites.filter(// eslint-disable-next-line @typescript-eslint/no-explicit-any\n        (item)=>item.id !== action.payload.id);\n        (0,_utils_addToLS__WEBPACK_IMPORTED_MODULE_0__.AddToLocalStorage)({\n            key: _utils_addToLS__WEBPACK_IMPORTED_MODULE_0__.LSKeyType.FAVORITES,\n            items: newFavorites\n        });\n        return {\n            ...state,\n            favorites: newFavorites\n        };\n    }\n    throw new Error(\"no matching action types: \".concat(action.type));\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dC9yZWR1Y2VyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQStEO0FBQ2xCO0FBQ1Q7QUFvQjdCLE1BQU1JLFVBQVUsQ0FBQ0MsT0FBY0M7SUFDcEMsSUFBSUEsT0FBT0MsSUFBSSxLQUFLSiw2Q0FBT0EsQ0FBQ0ssZ0JBQWdCLEVBQUU7UUFDNUMsc0NBQXNDO1FBRXRDLElBQUksQ0FBQ0gsTUFBTUksU0FBUyxDQUFDQyxRQUFRLENBQUNKLE9BQU9LLE9BQU8sQ0FBQ0MsRUFBRSxHQUFHO1lBQ2hELE1BQU1DLGVBQWVYLHNEQUFTQSxhQUFUQSxzREFBU0EsdUJBQVRBLHNEQUFTQSxDQUFFWSxJQUFJLENBQ2xDLDhEQUE4RDtZQUM5RCxDQUFDQztvQkFBMEJUO3VCQUFaUyxLQUFLSCxFQUFFLE1BQUtOLG1CQUFBQSw4QkFBQUEsa0JBQUFBLE9BQVFLLE9BQU8sY0FBZkwsc0NBQUFBLGdCQUFpQk0sRUFBRTs7WUFHaERJLFFBQVFDLEdBQUcsQ0FBQ0o7WUFFWlIsTUFBTUksU0FBUyxHQUFHO21CQUFJSixNQUFNSSxTQUFTO2dCQUFFSTthQUFhO1lBQ3BEYixpRUFBaUJBLENBQUM7Z0JBQUVrQixLQUFLakIscURBQVNBLENBQUNrQixTQUFTO2dCQUFFQyxPQUFPZixNQUFNSSxTQUFTO1lBQUM7UUFDdkU7UUFFQSxPQUFPO1lBQUUsR0FBR0osS0FBSztZQUFFSSxXQUFXSixNQUFNSSxTQUFTO1FBQUM7SUFDaEQ7SUFDQSxJQUFJSCxPQUFPQyxJQUFJLEtBQUtKLDZDQUFPQSxDQUFDa0IscUJBQXFCLEVBQUU7UUFDakQsTUFBTUMsZUFBZWpCLE1BQU1JLFNBQVMsQ0FBQ2MsTUFBTSxDQUN6Qyw4REFBOEQ7UUFDOUQsQ0FBQ1IsT0FBdUJBLEtBQUtILEVBQUUsS0FBS04sT0FBT0ssT0FBTyxDQUFDQyxFQUFFO1FBR3ZEWixpRUFBaUJBLENBQUM7WUFBRWtCLEtBQUtqQixxREFBU0EsQ0FBQ2tCLFNBQVM7WUFBRUMsT0FBT0U7UUFBYTtRQUVsRSxPQUFPO1lBQ0wsR0FBR2pCLEtBQUs7WUFDUkksV0FBV2E7UUFDYjtJQUNGO0lBQ0EsTUFBTSxJQUFJRSxNQUFNLDZCQUF5QyxPQUFabEIsT0FBT0MsSUFBSTtBQUMxRCxFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb250ZXh0L3JlZHVjZXIudHN4P2RlYmMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWRkVG9Mb2NhbFN0b3JhZ2UsIExTS2V5VHlwZSB9IGZyb20gXCJAL3V0aWxzL2FkZFRvTFNcIjtcbmltcG9ydCB7IE1PQ0tfREFUQSB9IGZyb20gXCJAL3V0aWxzL21vY2tEYXRhXCI7XG5pbXBvcnQgeyBBY3Rpb25zIH0gZnJvbSBcIi4vYWN0aW9uc1wiO1xuXG5pbnRlcmZhY2UgRmF2b3JpdGVEYXRhIHtcbiAgaWQ6IHN0cmluZztcbiAgdGl0bGU6IHN0cmluZztcbiAgcHJpY2U6IG51bWJlcjtcbiAgcXVhbnRpdHk6IG51bWJlcjtcbiAgaW1hZ2U6IHN0cmluZztcbiAgZGV0YWlsOiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBBY3Rpb24ge1xuICB0eXBlOiBBY3Rpb25zO1xuICBwYXlsb2FkOiB7IGlkOiBzdHJpbmcgfTtcbn1cblxuaW50ZXJmYWNlIFN0YXRlIHtcbiAgZmF2b3JpdGVzOiBGYXZvcml0ZURhdGFbXTtcbn1cblxuZXhwb3J0IGNvbnN0IHJlZHVjZXIgPSAoc3RhdGU6IFN0YXRlLCBhY3Rpb246IEFjdGlvbikgPT4ge1xuICBpZiAoYWN0aW9uLnR5cGUgPT09IEFjdGlvbnMuQUREX1RPX0ZBVk9SSVRFUykge1xuICAgIC8vIGxldCBuZXdGYXZvcml0ZXMgPSBzdGF0ZS5mYXZvcml0ZXM7XG5cbiAgICBpZiAoIXN0YXRlLmZhdm9yaXRlcy5pbmNsdWRlcyhhY3Rpb24ucGF5bG9hZC5pZCkpIHtcbiAgICAgIGNvbnN0IGZhdm9yaXRlRGF0YSA9IE1PQ0tfREFUQT8uZmluZChcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgICAgICAgKGl0ZW06IGFueSkgPT4gaXRlbS5pZCA9PT0gYWN0aW9uPy5wYXlsb2FkPy5pZFxuICAgICAgKTtcblxuICAgICAgY29uc29sZS5sb2coZmF2b3JpdGVEYXRhKTtcblxuICAgICAgc3RhdGUuZmF2b3JpdGVzID0gWy4uLnN0YXRlLmZhdm9yaXRlcywgZmF2b3JpdGVEYXRhXTtcbiAgICAgIEFkZFRvTG9jYWxTdG9yYWdlKHsga2V5OiBMU0tleVR5cGUuRkFWT1JJVEVTLCBpdGVtczogc3RhdGUuZmF2b3JpdGVzIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB7IC4uLnN0YXRlLCBmYXZvcml0ZXM6IHN0YXRlLmZhdm9yaXRlcyB9O1xuICB9XG4gIGlmIChhY3Rpb24udHlwZSA9PT0gQWN0aW9ucy5SRU1PVkVfRlJPTV9GQVZPUklURVMpIHtcbiAgICBjb25zdCBuZXdGYXZvcml0ZXMgPSBzdGF0ZS5mYXZvcml0ZXMuZmlsdGVyKFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgICAgIChpdGVtOiBGYXZvcml0ZURhdGEpID0+IGl0ZW0uaWQgIT09IGFjdGlvbi5wYXlsb2FkLmlkXG4gICAgKTtcblxuICAgIEFkZFRvTG9jYWxTdG9yYWdlKHsga2V5OiBMU0tleVR5cGUuRkFWT1JJVEVTLCBpdGVtczogbmV3RmF2b3JpdGVzIH0pO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnN0YXRlLFxuICAgICAgZmF2b3JpdGVzOiBuZXdGYXZvcml0ZXMsXG4gICAgfTtcbiAgfVxuICB0aHJvdyBuZXcgRXJyb3IoYG5vIG1hdGNoaW5nIGFjdGlvbiB0eXBlczogJHthY3Rpb24udHlwZX1gKTtcbn07XG4iXSwibmFtZXMiOlsiQWRkVG9Mb2NhbFN0b3JhZ2UiLCJMU0tleVR5cGUiLCJNT0NLX0RBVEEiLCJBY3Rpb25zIiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsIkFERF9UT19GQVZPUklURVMiLCJmYXZvcml0ZXMiLCJpbmNsdWRlcyIsInBheWxvYWQiLCJpZCIsImZhdm9yaXRlRGF0YSIsImZpbmQiLCJpdGVtIiwiY29uc29sZSIsImxvZyIsImtleSIsIkZBVk9SSVRFUyIsIml0ZW1zIiwiUkVNT1ZFX0ZST01fRkFWT1JJVEVTIiwibmV3RmF2b3JpdGVzIiwiZmlsdGVyIiwiRXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/context/reducer.tsx\n"));

/***/ })

});