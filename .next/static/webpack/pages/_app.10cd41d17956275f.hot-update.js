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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   reducer: function() { return /* binding */ reducer; }\n/* harmony export */ });\n/* harmony import */ var _utils_addToLS__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/addToLS */ \"./src/utils/addToLS.tsx\");\n/* harmony import */ var _utils_mockData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/mockData */ \"./src/utils/mockData.tsx\");\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions */ \"./src/context/actions.tsx\");\n\n\n\nconst reducer = (state, action)=>{\n    if (action.type === _actions__WEBPACK_IMPORTED_MODULE_2__.Actions.ADD_TO_FAVORITES) {\n        // let newFavorites = state.favorites;\n        if (!state.favorites.includes(action.payload.id)) {\n            const favoriteData = _utils_mockData__WEBPACK_IMPORTED_MODULE_1__.MOCK_DATA === null || _utils_mockData__WEBPACK_IMPORTED_MODULE_1__.MOCK_DATA === void 0 ? void 0 : _utils_mockData__WEBPACK_IMPORTED_MODULE_1__.MOCK_DATA.find(// eslint-disable-next-line @typescript-eslint/no-explicit-any\n            (item)=>{\n                var _action_payload;\n                return item.id === (action === null || action === void 0 ? void 0 : (_action_payload = action.payload) === null || _action_payload === void 0 ? void 0 : _action_payload.id);\n            });\n            console.log(favoriteData);\n            state.favorites = [\n                ...state.favorites,\n                favoriteData\n            ];\n            (0,_utils_addToLS__WEBPACK_IMPORTED_MODULE_0__.AddToLocalStorage)({\n                key: _utils_addToLS__WEBPACK_IMPORTED_MODULE_0__.LSKeyType.FAVORITES,\n                items: state.favorites\n            });\n        }\n        return {\n            ...state,\n            favorites: state.favorites\n        };\n    }\n    if (action.type === _actions__WEBPACK_IMPORTED_MODULE_2__.Actions.REMOVE_FROM_FAVORITES) {\n        const newFavorites = state.favorites.filter(// eslint-disable-next-line @typescript-eslint/no-explicit-any\n        (item)=>item.id !== action.payload.id);\n        (0,_utils_addToLS__WEBPACK_IMPORTED_MODULE_0__.AddToLocalStorage)({\n            key: _utils_addToLS__WEBPACK_IMPORTED_MODULE_0__.LSKeyType.FAVORITES,\n            items: newFavorites\n        });\n        return {\n            ...state,\n            favorites: newFavorites\n        };\n    }\n    throw new Error(\"no matching action types: \".concat(action.type));\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dC9yZWR1Y2VyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQStEO0FBQ2xCO0FBQ1Q7QUFxQjdCLE1BQU1JLFVBQVUsQ0FBQ0MsT0FBY0M7SUFDcEMsSUFBSUEsT0FBT0MsSUFBSSxLQUFLSiw2Q0FBT0EsQ0FBQ0ssZ0JBQWdCLEVBQUU7UUFDNUMsc0NBQXNDO1FBRXRDLElBQUksQ0FBQ0gsTUFBTUksU0FBUyxDQUFDQyxRQUFRLENBQUNKLE9BQU9LLE9BQU8sQ0FBQ0MsRUFBRSxHQUFHO1lBQ2hELE1BQU1DLGVBQWVYLHNEQUFTQSxhQUFUQSxzREFBU0EsdUJBQVRBLHNEQUFTQSxDQUFFWSxJQUFJLENBQ2xDLDhEQUE4RDtZQUM5RCxDQUFDQztvQkFBMEJUO3VCQUFaUyxLQUFLSCxFQUFFLE1BQUtOLG1CQUFBQSw4QkFBQUEsa0JBQUFBLE9BQVFLLE9BQU8sY0FBZkwsc0NBQUFBLGdCQUFpQk0sRUFBRTs7WUFHaERJLFFBQVFDLEdBQUcsQ0FBQ0o7WUFFWlIsTUFBTUksU0FBUyxHQUFHO21CQUFJSixNQUFNSSxTQUFTO2dCQUFFSTthQUFhO1lBQ3BEYixpRUFBaUJBLENBQUM7Z0JBQUVrQixLQUFLakIscURBQVNBLENBQUNrQixTQUFTO2dCQUFFQyxPQUFPZixNQUFNSSxTQUFTO1lBQUM7UUFDdkU7UUFFQSxPQUFPO1lBQUUsR0FBR0osS0FBSztZQUFFSSxXQUFXSixNQUFNSSxTQUFTO1FBQUM7SUFDaEQ7SUFDQSxJQUFJSCxPQUFPQyxJQUFJLEtBQUtKLDZDQUFPQSxDQUFDa0IscUJBQXFCLEVBQUU7UUFDakQsTUFBTUMsZUFBZWpCLE1BQU1JLFNBQVMsQ0FBQ2MsTUFBTSxDQUN6Qyw4REFBOEQ7UUFDOUQsQ0FBQ1IsT0FBY0EsS0FBS0gsRUFBRSxLQUFLTixPQUFPSyxPQUFPLENBQUNDLEVBQUU7UUFHOUNaLGlFQUFpQkEsQ0FBQztZQUFFa0IsS0FBS2pCLHFEQUFTQSxDQUFDa0IsU0FBUztZQUFFQyxPQUFPRTtRQUFhO1FBRWxFLE9BQU87WUFDTCxHQUFHakIsS0FBSztZQUNSSSxXQUFXYTtRQUNiO0lBQ0Y7SUFDQSxNQUFNLElBQUlFLE1BQU0sNkJBQXlDLE9BQVpsQixPQUFPQyxJQUFJO0FBQzFELEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHQvcmVkdWNlci50c3g/ZGViYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZGRUb0xvY2FsU3RvcmFnZSwgTFNLZXlUeXBlIH0gZnJvbSBcIkAvdXRpbHMvYWRkVG9MU1wiO1xuaW1wb3J0IHsgTU9DS19EQVRBIH0gZnJvbSBcIkAvdXRpbHMvbW9ja0RhdGFcIjtcbmltcG9ydCB7IEFjdGlvbnMgfSBmcm9tIFwiLi9hY3Rpb25zXCI7XG5cbi8vIGludGVyZmFjZSBGYXZvcml0ZURhdGEge1xuLy8gICBpZDogbnVtYmVyO1xuLy8gICB0aXRsZTogc3RyaW5nO1xuLy8gICBwcmljZTogbnVtYmVyO1xuLy8gICBxdWFudGl0eTogbnVtYmVyO1xuLy8gICBpbWFnZTogc3RyaW5nO1xuLy8gICBkZXRhaWw6IHN0cmluZztcbi8vIH1cblxuaW50ZXJmYWNlIEFjdGlvbiB7XG4gIHR5cGU6IEFjdGlvbnM7XG4gIHBheWxvYWQ6IHsgaWQ6IHN0cmluZyB9O1xufVxuXG5pbnRlcmZhY2UgU3RhdGUge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICBmYXZvcml0ZXM6IGFueVtdO1xufVxuXG5leHBvcnQgY29uc3QgcmVkdWNlciA9IChzdGF0ZTogU3RhdGUsIGFjdGlvbjogQWN0aW9uKSA9PiB7XG4gIGlmIChhY3Rpb24udHlwZSA9PT0gQWN0aW9ucy5BRERfVE9fRkFWT1JJVEVTKSB7XG4gICAgLy8gbGV0IG5ld0Zhdm9yaXRlcyA9IHN0YXRlLmZhdm9yaXRlcztcblxuICAgIGlmICghc3RhdGUuZmF2b3JpdGVzLmluY2x1ZGVzKGFjdGlvbi5wYXlsb2FkLmlkKSkge1xuICAgICAgY29uc3QgZmF2b3JpdGVEYXRhID0gTU9DS19EQVRBPy5maW5kKFxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICAgICAgICAoaXRlbTogYW55KSA9PiBpdGVtLmlkID09PSBhY3Rpb24/LnBheWxvYWQ/LmlkXG4gICAgICApO1xuXG4gICAgICBjb25zb2xlLmxvZyhmYXZvcml0ZURhdGEpO1xuXG4gICAgICBzdGF0ZS5mYXZvcml0ZXMgPSBbLi4uc3RhdGUuZmF2b3JpdGVzLCBmYXZvcml0ZURhdGFdO1xuICAgICAgQWRkVG9Mb2NhbFN0b3JhZ2UoeyBrZXk6IExTS2V5VHlwZS5GQVZPUklURVMsIGl0ZW1zOiBzdGF0ZS5mYXZvcml0ZXMgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgLi4uc3RhdGUsIGZhdm9yaXRlczogc3RhdGUuZmF2b3JpdGVzIH07XG4gIH1cbiAgaWYgKGFjdGlvbi50eXBlID09PSBBY3Rpb25zLlJFTU9WRV9GUk9NX0ZBVk9SSVRFUykge1xuICAgIGNvbnN0IG5ld0Zhdm9yaXRlcyA9IHN0YXRlLmZhdm9yaXRlcy5maWx0ZXIoXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICAgICAgKGl0ZW06IGFueSkgPT4gaXRlbS5pZCAhPT0gYWN0aW9uLnBheWxvYWQuaWRcbiAgICApO1xuXG4gICAgQWRkVG9Mb2NhbFN0b3JhZ2UoeyBrZXk6IExTS2V5VHlwZS5GQVZPUklURVMsIGl0ZW1zOiBuZXdGYXZvcml0ZXMgfSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgLi4uc3RhdGUsXG4gICAgICBmYXZvcml0ZXM6IG5ld0Zhdm9yaXRlcyxcbiAgICB9O1xuICB9XG4gIHRocm93IG5ldyBFcnJvcihgbm8gbWF0Y2hpbmcgYWN0aW9uIHR5cGVzOiAke2FjdGlvbi50eXBlfWApO1xufTtcbiJdLCJuYW1lcyI6WyJBZGRUb0xvY2FsU3RvcmFnZSIsIkxTS2V5VHlwZSIsIk1PQ0tfREFUQSIsIkFjdGlvbnMiLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiQUREX1RPX0ZBVk9SSVRFUyIsImZhdm9yaXRlcyIsImluY2x1ZGVzIiwicGF5bG9hZCIsImlkIiwiZmF2b3JpdGVEYXRhIiwiZmluZCIsIml0ZW0iLCJjb25zb2xlIiwibG9nIiwia2V5IiwiRkFWT1JJVEVTIiwiaXRlbXMiLCJSRU1PVkVfRlJPTV9GQVZPUklURVMiLCJuZXdGYXZvcml0ZXMiLCJmaWx0ZXIiLCJFcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/context/reducer.tsx\n"));

/***/ })

});