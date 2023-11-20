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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   reducer: function() { return /* binding */ reducer; }\n/* harmony export */ });\n/* harmony import */ var _utils_addToLS__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/addToLS */ \"./src/utils/addToLS.tsx\");\n/* harmony import */ var _utils_mockData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/mockData */ \"./src/utils/mockData.tsx\");\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions */ \"./src/context/actions.tsx\");\n\n\n\nconst reducer = (state, action)=>{\n    if (action.type === _actions__WEBPACK_IMPORTED_MODULE_2__.Actions.ADD_TO_FAVORITES) {\n        // let newFavorites = state.favorites;\n        if (!state.favorites.includes(action.payload.id)) {\n            state.favorites = [\n                ...state.favorites,\n                _utils_mockData__WEBPACK_IMPORTED_MODULE_1__.MOCK_DATA[Number(action.payload.id)]\n            ];\n            (0,_utils_addToLS__WEBPACK_IMPORTED_MODULE_0__.AddToLocalStorage)({\n                key: _utils_addToLS__WEBPACK_IMPORTED_MODULE_0__.LSKeyType.FAVORITES,\n                items: state.favorites\n            });\n        }\n        return {\n            ...state,\n            favorites: state.favorites\n        };\n    }\n    if (action.type === _actions__WEBPACK_IMPORTED_MODULE_2__.Actions.REMOVE_FROM_FAVORITES) {\n        const newFavorites = state.favorites.filter(// eslint-disable-next-line @typescript-eslint/no-explicit-any\n        (item)=>item.id !== action.payload.id);\n        (0,_utils_addToLS__WEBPACK_IMPORTED_MODULE_0__.AddToLocalStorage)({\n            key: _utils_addToLS__WEBPACK_IMPORTED_MODULE_0__.LSKeyType.FAVORITES,\n            items: newFavorites\n        });\n        return {\n            ...state,\n            favorites: newFavorites\n        };\n    }\n    throw new Error(\"no matching action types: \".concat(action.type));\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dC9yZWR1Y2VyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQStEO0FBQ2xCO0FBQ1Q7QUFxQjdCLE1BQU1JLFVBQVUsQ0FBQ0MsT0FBY0M7SUFDcEMsSUFBSUEsT0FBT0MsSUFBSSxLQUFLSiw2Q0FBT0EsQ0FBQ0ssZ0JBQWdCLEVBQUU7UUFDNUMsc0NBQXNDO1FBRXRDLElBQUksQ0FBQ0gsTUFBTUksU0FBUyxDQUFDQyxRQUFRLENBQUNKLE9BQU9LLE9BQU8sQ0FBQ0MsRUFBRSxHQUFHO1lBQ2hEUCxNQUFNSSxTQUFTLEdBQUc7bUJBQ2JKLE1BQU1JLFNBQVM7Z0JBQ2xCUCxzREFBUyxDQUFDVyxPQUFPUCxPQUFPSyxPQUFPLENBQUNDLEVBQUUsRUFBRTthQUNyQztZQUNEWixpRUFBaUJBLENBQUM7Z0JBQUVjLEtBQUtiLHFEQUFTQSxDQUFDYyxTQUFTO2dCQUFFQyxPQUFPWCxNQUFNSSxTQUFTO1lBQUM7UUFDdkU7UUFFQSxPQUFPO1lBQUUsR0FBR0osS0FBSztZQUFFSSxXQUFXSixNQUFNSSxTQUFTO1FBQUM7SUFDaEQ7SUFDQSxJQUFJSCxPQUFPQyxJQUFJLEtBQUtKLDZDQUFPQSxDQUFDYyxxQkFBcUIsRUFBRTtRQUNqRCxNQUFNQyxlQUFlYixNQUFNSSxTQUFTLENBQUNVLE1BQU0sQ0FDekMsOERBQThEO1FBQzlELENBQUNDLE9BQWNBLEtBQUtSLEVBQUUsS0FBS04sT0FBT0ssT0FBTyxDQUFDQyxFQUFFO1FBRzlDWixpRUFBaUJBLENBQUM7WUFBRWMsS0FBS2IscURBQVNBLENBQUNjLFNBQVM7WUFBRUMsT0FBT0U7UUFBYTtRQUVsRSxPQUFPO1lBQ0wsR0FBR2IsS0FBSztZQUNSSSxXQUFXUztRQUNiO0lBQ0Y7SUFDQSxNQUFNLElBQUlHLE1BQU0sNkJBQXlDLE9BQVpmLE9BQU9DLElBQUk7QUFDMUQsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29udGV4dC9yZWR1Y2VyLnRzeD9kZWJjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFkZFRvTG9jYWxTdG9yYWdlLCBMU0tleVR5cGUgfSBmcm9tIFwiQC91dGlscy9hZGRUb0xTXCI7XG5pbXBvcnQgeyBNT0NLX0RBVEEgfSBmcm9tIFwiQC91dGlscy9tb2NrRGF0YVwiO1xuaW1wb3J0IHsgQWN0aW9ucyB9IGZyb20gXCIuL2FjdGlvbnNcIjtcblxuLy8gaW50ZXJmYWNlIEZhdm9yaXRlRGF0YSB7XG4vLyAgIGlkOiBudW1iZXI7XG4vLyAgIHRpdGxlOiBzdHJpbmc7XG4vLyAgIHByaWNlOiBudW1iZXI7XG4vLyAgIHF1YW50aXR5OiBudW1iZXI7XG4vLyAgIGltYWdlOiBzdHJpbmc7XG4vLyAgIGRldGFpbDogc3RyaW5nO1xuLy8gfVxuXG5pbnRlcmZhY2UgQWN0aW9uIHtcbiAgdHlwZTogQWN0aW9ucztcbiAgcGF5bG9hZDogeyBpZDogc3RyaW5nIH07XG59XG5cbmludGVyZmFjZSBTdGF0ZSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4gIGZhdm9yaXRlczogYW55W107XG59XG5cbmV4cG9ydCBjb25zdCByZWR1Y2VyID0gKHN0YXRlOiBTdGF0ZSwgYWN0aW9uOiBBY3Rpb24pID0+IHtcbiAgaWYgKGFjdGlvbi50eXBlID09PSBBY3Rpb25zLkFERF9UT19GQVZPUklURVMpIHtcbiAgICAvLyBsZXQgbmV3RmF2b3JpdGVzID0gc3RhdGUuZmF2b3JpdGVzO1xuXG4gICAgaWYgKCFzdGF0ZS5mYXZvcml0ZXMuaW5jbHVkZXMoYWN0aW9uLnBheWxvYWQuaWQpKSB7XG4gICAgICBzdGF0ZS5mYXZvcml0ZXMgPSBbXG4gICAgICAgIC4uLnN0YXRlLmZhdm9yaXRlcyxcbiAgICAgICAgTU9DS19EQVRBW051bWJlcihhY3Rpb24ucGF5bG9hZC5pZCldLFxuICAgICAgXTtcbiAgICAgIEFkZFRvTG9jYWxTdG9yYWdlKHsga2V5OiBMU0tleVR5cGUuRkFWT1JJVEVTLCBpdGVtczogc3RhdGUuZmF2b3JpdGVzIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB7IC4uLnN0YXRlLCBmYXZvcml0ZXM6IHN0YXRlLmZhdm9yaXRlcyB9O1xuICB9XG4gIGlmIChhY3Rpb24udHlwZSA9PT0gQWN0aW9ucy5SRU1PVkVfRlJPTV9GQVZPUklURVMpIHtcbiAgICBjb25zdCBuZXdGYXZvcml0ZXMgPSBzdGF0ZS5mYXZvcml0ZXMuZmlsdGVyKFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgICAgIChpdGVtOiBhbnkpID0+IGl0ZW0uaWQgIT09IGFjdGlvbi5wYXlsb2FkLmlkXG4gICAgKTtcblxuICAgIEFkZFRvTG9jYWxTdG9yYWdlKHsga2V5OiBMU0tleVR5cGUuRkFWT1JJVEVTLCBpdGVtczogbmV3RmF2b3JpdGVzIH0pO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnN0YXRlLFxuICAgICAgZmF2b3JpdGVzOiBuZXdGYXZvcml0ZXMsXG4gICAgfTtcbiAgfVxuICB0aHJvdyBuZXcgRXJyb3IoYG5vIG1hdGNoaW5nIGFjdGlvbiB0eXBlczogJHthY3Rpb24udHlwZX1gKTtcbn07XG4iXSwibmFtZXMiOlsiQWRkVG9Mb2NhbFN0b3JhZ2UiLCJMU0tleVR5cGUiLCJNT0NLX0RBVEEiLCJBY3Rpb25zIiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsIkFERF9UT19GQVZPUklURVMiLCJmYXZvcml0ZXMiLCJpbmNsdWRlcyIsInBheWxvYWQiLCJpZCIsIk51bWJlciIsImtleSIsIkZBVk9SSVRFUyIsIml0ZW1zIiwiUkVNT1ZFX0ZST01fRkFWT1JJVEVTIiwibmV3RmF2b3JpdGVzIiwiZmlsdGVyIiwiaXRlbSIsIkVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/context/reducer.tsx\n"));

/***/ }),

/***/ "./src/utils/mockData.tsx":
/*!********************************!*\
  !*** ./src/utils/mockData.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   MOCK_DATA: function() { return /* binding */ MOCK_DATA; },\n/* harmony export */   getCardById: function() { return /* binding */ getCardById; }\n/* harmony export */ });\nconst MOCK_DATA = [\n    {\n        id: 1,\n        title: \"Samsung Galaxy s10\",\n        price: 499.99,\n        quantity: 1,\n        image: \"/images/s10.jpg\",\n        detail: \"New smartphone\"\n    },\n    {\n        id: 2,\n        title: \"Samsung Galaxy s21\",\n        price: 599.99,\n        quantity: 1,\n        image: \"/images/s20.jpeg\",\n        detail: \"New smartphone\"\n    },\n    {\n        id: 3,\n        title: \"Samsung Galaxy s20\",\n        price: 299.99,\n        quantity: 1,\n        image: \"/images/s21.webp\",\n        detail: \"New smartphone\"\n    }\n];\nconst getCardById = (id)=>{\n    return MOCK_DATA.find((item)=>item.id === id);\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbHMvbW9ja0RhdGEudHN4IiwibWFwcGluZ3MiOiI7Ozs7O0FBQU8sTUFBTUEsWUFBWTtJQUN2QjtRQUNFQyxJQUFJO1FBQ0pDLE9BQU87UUFDUEMsT0FBTztRQUNQQyxVQUFVO1FBQ1ZDLE9BQU87UUFDUEMsUUFBUTtJQUNWO0lBQ0E7UUFDRUwsSUFBSTtRQUNKQyxPQUFPO1FBQ1BDLE9BQU87UUFDUEMsVUFBVTtRQUNWQyxPQUFPO1FBQ1BDLFFBQVE7SUFDVjtJQUNBO1FBQ0VMLElBQUk7UUFDSkMsT0FBTztRQUNQQyxPQUFPO1FBQ1BDLFVBQVU7UUFDVkMsT0FBTztRQUNQQyxRQUFRO0lBQ1Y7Q0FDRCxDQUFDO0FBRUssTUFBTUMsY0FBYyxDQUFDTjtJQUMxQixPQUFPRCxVQUFVUSxJQUFJLENBQUMsQ0FBQ0MsT0FBY0EsS0FBS1IsRUFBRSxLQUFLQTtBQUNuRCxFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy91dGlscy9tb2NrRGF0YS50c3g/OTVkMCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgTU9DS19EQVRBID0gW1xuICB7XG4gICAgaWQ6IDEsXG4gICAgdGl0bGU6IFwiU2Ftc3VuZyBHYWxheHkgczEwXCIsXG4gICAgcHJpY2U6IDQ5OS45OSxcbiAgICBxdWFudGl0eTogMSxcbiAgICBpbWFnZTogXCIvaW1hZ2VzL3MxMC5qcGdcIixcbiAgICBkZXRhaWw6IFwiTmV3IHNtYXJ0cGhvbmVcIixcbiAgfSxcbiAge1xuICAgIGlkOiAyLFxuICAgIHRpdGxlOiBcIlNhbXN1bmcgR2FsYXh5IHMyMVwiLFxuICAgIHByaWNlOiA1OTkuOTksXG4gICAgcXVhbnRpdHk6IDEsXG4gICAgaW1hZ2U6IFwiL2ltYWdlcy9zMjAuanBlZ1wiLFxuICAgIGRldGFpbDogXCJOZXcgc21hcnRwaG9uZVwiLFxuICB9LFxuICB7XG4gICAgaWQ6IDMsXG4gICAgdGl0bGU6IFwiU2Ftc3VuZyBHYWxheHkgczIwXCIsXG4gICAgcHJpY2U6IDI5OS45OSxcbiAgICBxdWFudGl0eTogMSxcbiAgICBpbWFnZTogXCIvaW1hZ2VzL3MyMS53ZWJwXCIsXG4gICAgZGV0YWlsOiBcIk5ldyBzbWFydHBob25lXCIsXG4gIH0sXG5dO1xuXG5leHBvcnQgY29uc3QgZ2V0Q2FyZEJ5SWQgPSAoaWQ6IGFueSkgPT4ge1xuICByZXR1cm4gTU9DS19EQVRBLmZpbmQoKGl0ZW06IGFueSkgPT4gaXRlbS5pZCA9PT0gaWQpO1xufTtcbiJdLCJuYW1lcyI6WyJNT0NLX0RBVEEiLCJpZCIsInRpdGxlIiwicHJpY2UiLCJxdWFudGl0eSIsImltYWdlIiwiZGV0YWlsIiwiZ2V0Q2FyZEJ5SWQiLCJmaW5kIiwiaXRlbSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/utils/mockData.tsx\n"));

/***/ })

});