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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   reducer: function() { return /* binding */ reducer; }\n/* harmony export */ });\n/* harmony import */ var _utils_addToLS__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/addToLS */ \"./src/utils/addToLS.tsx\");\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ \"./src/context/actions.tsx\");\n\n\nconst reducer = (state, action)=>{\n    if (action.type === _actions__WEBPACK_IMPORTED_MODULE_1__.Actions.ADD_TO_FAVORITES) {\n        // let newFavorites = state.favorites;\n        if (!state.favorites.includes(action.payload.id)) {\n            state.favorites = [\n                ...state.favorites,\n                action.payload.id\n            ];\n            (0,_utils_addToLS__WEBPACK_IMPORTED_MODULE_0__.AddToLocalStorage)({\n                key: _utils_addToLS__WEBPACK_IMPORTED_MODULE_0__.LSKeyType.FAVORITES,\n                items: state.favorites\n            });\n        }\n        return {\n            ...state,\n            favorites: state.favorites\n        };\n    }\n    if (action.type === _actions__WEBPACK_IMPORTED_MODULE_1__.Actions.REMOVE_FROM_FAVORITES) {\n        const newFavorites = state.favorites.filter(// eslint-disable-next-line @typescript-eslint/no-explicit-any\n        (item)=>item.id !== action.payload.id);\n        (0,_utils_addToLS__WEBPACK_IMPORTED_MODULE_0__.AddToLocalStorage)({\n            key: _utils_addToLS__WEBPACK_IMPORTED_MODULE_0__.LSKeyType.FAVORITES,\n            items: newFavorites\n        });\n        return {\n            ...state,\n            favorites: newFavorites\n        };\n    }\n    throw new Error(\"no matching action types: \".concat(action.type));\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dC9yZWR1Y2VyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBK0Q7QUFFM0I7QUFxQjdCLE1BQU1HLFVBQVUsQ0FBQ0MsT0FBY0M7SUFDcEMsSUFBSUEsT0FBT0MsSUFBSSxLQUFLSiw2Q0FBT0EsQ0FBQ0ssZ0JBQWdCLEVBQUU7UUFDNUMsc0NBQXNDO1FBRXRDLElBQUksQ0FBQ0gsTUFBTUksU0FBUyxDQUFDQyxRQUFRLENBQUNKLE9BQU9LLE9BQU8sQ0FBQ0MsRUFBRSxHQUFHO1lBQ2hEUCxNQUFNSSxTQUFTLEdBQUc7bUJBQUlKLE1BQU1JLFNBQVM7Z0JBQUVILE9BQU9LLE9BQU8sQ0FBQ0MsRUFBRTthQUFDO1lBQ3pEWCxpRUFBaUJBLENBQUM7Z0JBQUVZLEtBQUtYLHFEQUFTQSxDQUFDWSxTQUFTO2dCQUFFQyxPQUFPVixNQUFNSSxTQUFTO1lBQUM7UUFDdkU7UUFFQSxPQUFPO1lBQUUsR0FBR0osS0FBSztZQUFFSSxXQUFXSixNQUFNSSxTQUFTO1FBQUM7SUFDaEQ7SUFDQSxJQUFJSCxPQUFPQyxJQUFJLEtBQUtKLDZDQUFPQSxDQUFDYSxxQkFBcUIsRUFBRTtRQUNqRCxNQUFNQyxlQUFlWixNQUFNSSxTQUFTLENBQUNTLE1BQU0sQ0FDekMsOERBQThEO1FBQzlELENBQUNDLE9BQWNBLEtBQUtQLEVBQUUsS0FBS04sT0FBT0ssT0FBTyxDQUFDQyxFQUFFO1FBRzlDWCxpRUFBaUJBLENBQUM7WUFBRVksS0FBS1gscURBQVNBLENBQUNZLFNBQVM7WUFBRUMsT0FBT0U7UUFBYTtRQUVsRSxPQUFPO1lBQ0wsR0FBR1osS0FBSztZQUNSSSxXQUFXUTtRQUNiO0lBQ0Y7SUFDQSxNQUFNLElBQUlHLE1BQU0sNkJBQXlDLE9BQVpkLE9BQU9DLElBQUk7QUFDMUQsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29udGV4dC9yZWR1Y2VyLnRzeD9kZWJjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFkZFRvTG9jYWxTdG9yYWdlLCBMU0tleVR5cGUgfSBmcm9tIFwiQC91dGlscy9hZGRUb0xTXCI7XG5pbXBvcnQgeyBNT0NLX0RBVEEgfSBmcm9tIFwiQC91dGlscy9tb2NrRGF0YVwiO1xuaW1wb3J0IHsgQWN0aW9ucyB9IGZyb20gXCIuL2FjdGlvbnNcIjtcblxuLy8gaW50ZXJmYWNlIEZhdm9yaXRlRGF0YSB7XG4vLyAgIGlkOiBudW1iZXI7XG4vLyAgIHRpdGxlOiBzdHJpbmc7XG4vLyAgIHByaWNlOiBudW1iZXI7XG4vLyAgIHF1YW50aXR5OiBudW1iZXI7XG4vLyAgIGltYWdlOiBzdHJpbmc7XG4vLyAgIGRldGFpbDogc3RyaW5nO1xuLy8gfVxuXG5pbnRlcmZhY2UgQWN0aW9uIHtcbiAgdHlwZTogQWN0aW9ucztcbiAgcGF5bG9hZDogeyBpZDogc3RyaW5nIH07XG59XG5cbmludGVyZmFjZSBTdGF0ZSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4gIGZhdm9yaXRlczogYW55W107XG59XG5cbmV4cG9ydCBjb25zdCByZWR1Y2VyID0gKHN0YXRlOiBTdGF0ZSwgYWN0aW9uOiBBY3Rpb24pID0+IHtcbiAgaWYgKGFjdGlvbi50eXBlID09PSBBY3Rpb25zLkFERF9UT19GQVZPUklURVMpIHtcbiAgICAvLyBsZXQgbmV3RmF2b3JpdGVzID0gc3RhdGUuZmF2b3JpdGVzO1xuXG4gICAgaWYgKCFzdGF0ZS5mYXZvcml0ZXMuaW5jbHVkZXMoYWN0aW9uLnBheWxvYWQuaWQpKSB7XG4gICAgICBzdGF0ZS5mYXZvcml0ZXMgPSBbLi4uc3RhdGUuZmF2b3JpdGVzLCBhY3Rpb24ucGF5bG9hZC5pZF07XG4gICAgICBBZGRUb0xvY2FsU3RvcmFnZSh7IGtleTogTFNLZXlUeXBlLkZBVk9SSVRFUywgaXRlbXM6IHN0YXRlLmZhdm9yaXRlcyB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4geyAuLi5zdGF0ZSwgZmF2b3JpdGVzOiBzdGF0ZS5mYXZvcml0ZXMgfTtcbiAgfVxuICBpZiAoYWN0aW9uLnR5cGUgPT09IEFjdGlvbnMuUkVNT1ZFX0ZST01fRkFWT1JJVEVTKSB7XG4gICAgY29uc3QgbmV3RmF2b3JpdGVzID0gc3RhdGUuZmF2b3JpdGVzLmZpbHRlcihcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4gICAgICAoaXRlbTogYW55KSA9PiBpdGVtLmlkICE9PSBhY3Rpb24ucGF5bG9hZC5pZFxuICAgICk7XG5cbiAgICBBZGRUb0xvY2FsU3RvcmFnZSh7IGtleTogTFNLZXlUeXBlLkZBVk9SSVRFUywgaXRlbXM6IG5ld0Zhdm9yaXRlcyB9KTtcblxuICAgIHJldHVybiB7XG4gICAgICAuLi5zdGF0ZSxcbiAgICAgIGZhdm9yaXRlczogbmV3RmF2b3JpdGVzLFxuICAgIH07XG4gIH1cbiAgdGhyb3cgbmV3IEVycm9yKGBubyBtYXRjaGluZyBhY3Rpb24gdHlwZXM6ICR7YWN0aW9uLnR5cGV9YCk7XG59O1xuIl0sIm5hbWVzIjpbIkFkZFRvTG9jYWxTdG9yYWdlIiwiTFNLZXlUeXBlIiwiQWN0aW9ucyIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJBRERfVE9fRkFWT1JJVEVTIiwiZmF2b3JpdGVzIiwiaW5jbHVkZXMiLCJwYXlsb2FkIiwiaWQiLCJrZXkiLCJGQVZPUklURVMiLCJpdGVtcyIsIlJFTU9WRV9GUk9NX0ZBVk9SSVRFUyIsIm5ld0Zhdm9yaXRlcyIsImZpbHRlciIsIml0ZW0iLCJFcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/context/reducer.tsx\n"));

/***/ })

});