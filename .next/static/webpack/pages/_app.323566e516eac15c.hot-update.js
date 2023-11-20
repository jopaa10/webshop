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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   reducer: function() { return /* binding */ reducer; }\n/* harmony export */ });\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ \"./src/context/actions.tsx\");\n\nconst reducer = (state, action)=>{\n    if (action.type === _actions__WEBPACK_IMPORTED_MODULE_0__.Actions.ADD_TO_FAVORITES) {\n        let newFavorites = state.favorites;\n        if (!state.favorites.includes(action.payload.id)) {\n            var _action_payload;\n            newFavorites = [\n                ...state.favorites,\n                action === null || action === void 0 ? void 0 : (_action_payload = action.payload) === null || _action_payload === void 0 ? void 0 : _action_payload.id\n            ];\n        } else {\n            newFavorites = state.favorites.filter(// eslint-disable-next-line @typescript-eslint/no-explicit-any\n            (item)=>item.id !== action.payload.id);\n        }\n        return {\n            ...state,\n            favorites: newFavorites\n        };\n    }\n    if (action.type === _actions__WEBPACK_IMPORTED_MODULE_0__.Actions.REMOVE_FROM_FAVORITES) {\n        const newFavorites = state.favorites.filter(// eslint-disable-next-line @typescript-eslint/no-explicit-any\n        (item)=>{\n            console.log(item, action.payload.id);\n            item.id !== action.payload.id;\n        });\n        console.log(newFavorites);\n        return {\n            ...state,\n            favorites: newFavorites\n        };\n    }\n    throw new Error(\"no matching action types: \".concat(action.type));\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dC9yZWR1Y2VyLnRzeCIsIm1hcHBpbmdzIjoiOzs7OztBQUFvQztBQVc3QixNQUFNQyxVQUFVLENBQUNDLE9BQWNDO0lBQ3BDLElBQUlBLE9BQU9DLElBQUksS0FBS0osNkNBQU9BLENBQUNLLGdCQUFnQixFQUFFO1FBQzVDLElBQUlDLGVBQWVKLE1BQU1LLFNBQVM7UUFFbEMsSUFBSSxDQUFDTCxNQUFNSyxTQUFTLENBQUNDLFFBQVEsQ0FBQ0wsT0FBT00sT0FBTyxDQUFDQyxFQUFFLEdBQUc7Z0JBQ1pQO1lBQXBDRyxlQUFlO21CQUFJSixNQUFNSyxTQUFTO2dCQUFFSixtQkFBQUEsOEJBQUFBLGtCQUFBQSxPQUFRTSxPQUFPLGNBQWZOLHNDQUFBQSxnQkFBaUJPLEVBQUU7YUFBQztRQUMxRCxPQUFPO1lBQ0xKLGVBQWVKLE1BQU1LLFNBQVMsQ0FBQ0ksTUFBTSxDQUNuQyw4REFBOEQ7WUFDOUQsQ0FBQ0MsT0FBY0EsS0FBS0YsRUFBRSxLQUFLUCxPQUFPTSxPQUFPLENBQUNDLEVBQUU7UUFFaEQ7UUFFQSxPQUFPO1lBQUUsR0FBR1IsS0FBSztZQUFFSyxXQUFXRDtRQUFhO0lBQzdDO0lBQ0EsSUFBSUgsT0FBT0MsSUFBSSxLQUFLSiw2Q0FBT0EsQ0FBQ2EscUJBQXFCLEVBQUU7UUFDakQsTUFBTVAsZUFBZUosTUFBTUssU0FBUyxDQUFDSSxNQUFNLENBQ3pDLDhEQUE4RDtRQUM5RCxDQUFDQztZQUNDRSxRQUFRQyxHQUFHLENBQUNILE1BQU1ULE9BQU9NLE9BQU8sQ0FBQ0MsRUFBRTtZQUVuQ0UsS0FBS0YsRUFBRSxLQUFLUCxPQUFPTSxPQUFPLENBQUNDLEVBQUU7UUFDL0I7UUFFRkksUUFBUUMsR0FBRyxDQUFDVDtRQUVaLE9BQU87WUFBRSxHQUFHSixLQUFLO1lBQUVLLFdBQVdEO1FBQWE7SUFDN0M7SUFDQSxNQUFNLElBQUlVLE1BQU0sNkJBQXlDLE9BQVpiLE9BQU9DLElBQUk7QUFDMUQsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29udGV4dC9yZWR1Y2VyLnRzeD9kZWJjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbnMgfSBmcm9tIFwiLi9hY3Rpb25zXCI7XG5cbmludGVyZmFjZSBBY3Rpb24ge1xuICB0eXBlOiBBY3Rpb25zO1xuICBwYXlsb2FkOiB7IGlkOiBzdHJpbmcgfTtcbn1cblxuaW50ZXJmYWNlIFN0YXRlIHtcbiAgZmF2b3JpdGVzOiBzdHJpbmdbXTtcbn1cblxuZXhwb3J0IGNvbnN0IHJlZHVjZXIgPSAoc3RhdGU6IFN0YXRlLCBhY3Rpb246IEFjdGlvbikgPT4ge1xuICBpZiAoYWN0aW9uLnR5cGUgPT09IEFjdGlvbnMuQUREX1RPX0ZBVk9SSVRFUykge1xuICAgIGxldCBuZXdGYXZvcml0ZXMgPSBzdGF0ZS5mYXZvcml0ZXM7XG5cbiAgICBpZiAoIXN0YXRlLmZhdm9yaXRlcy5pbmNsdWRlcyhhY3Rpb24ucGF5bG9hZC5pZCkpIHtcbiAgICAgIG5ld0Zhdm9yaXRlcyA9IFsuLi5zdGF0ZS5mYXZvcml0ZXMsIGFjdGlvbj8ucGF5bG9hZD8uaWRdO1xuICAgIH0gZWxzZSB7XG4gICAgICBuZXdGYXZvcml0ZXMgPSBzdGF0ZS5mYXZvcml0ZXMuZmlsdGVyKFxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICAgICAgICAoaXRlbTogYW55KSA9PiBpdGVtLmlkICE9PSBhY3Rpb24ucGF5bG9hZC5pZFxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4geyAuLi5zdGF0ZSwgZmF2b3JpdGVzOiBuZXdGYXZvcml0ZXMgfTtcbiAgfVxuICBpZiAoYWN0aW9uLnR5cGUgPT09IEFjdGlvbnMuUkVNT1ZFX0ZST01fRkFWT1JJVEVTKSB7XG4gICAgY29uc3QgbmV3RmF2b3JpdGVzID0gc3RhdGUuZmF2b3JpdGVzLmZpbHRlcihcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4gICAgICAoaXRlbTogYW55KSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGl0ZW0sIGFjdGlvbi5wYXlsb2FkLmlkKTtcblxuICAgICAgICBpdGVtLmlkICE9PSBhY3Rpb24ucGF5bG9hZC5pZDtcbiAgICAgIH1cbiAgICApO1xuICAgIGNvbnNvbGUubG9nKG5ld0Zhdm9yaXRlcyk7XG5cbiAgICByZXR1cm4geyAuLi5zdGF0ZSwgZmF2b3JpdGVzOiBuZXdGYXZvcml0ZXMgfTtcbiAgfVxuICB0aHJvdyBuZXcgRXJyb3IoYG5vIG1hdGNoaW5nIGFjdGlvbiB0eXBlczogJHthY3Rpb24udHlwZX1gKTtcbn07XG4iXSwibmFtZXMiOlsiQWN0aW9ucyIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJBRERfVE9fRkFWT1JJVEVTIiwibmV3RmF2b3JpdGVzIiwiZmF2b3JpdGVzIiwiaW5jbHVkZXMiLCJwYXlsb2FkIiwiaWQiLCJmaWx0ZXIiLCJpdGVtIiwiUkVNT1ZFX0ZST01fRkFWT1JJVEVTIiwiY29uc29sZSIsImxvZyIsIkVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/context/reducer.tsx\n"));

/***/ })

});