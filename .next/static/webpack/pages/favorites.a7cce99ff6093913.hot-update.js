"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/favorites",{

/***/ "./src/pages/favorites/index.tsx":
/*!***************************************!*\
  !*** ./src/pages/favorites/index.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_pageTitle_pageTitle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/pageTitle/pageTitle */ \"./src/components/pageTitle/pageTitle.tsx\");\n/* harmony import */ var _context_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/context/context */ \"./src/context/context.tsx\");\n/* harmony import */ var _utils_addToLS__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils/addToLS */ \"./src/utils/addToLS.tsx\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Favorites() {\n    var _localStorage;\n    _s();\n    const { favorites } = (0,_context_context__WEBPACK_IMPORTED_MODULE_2__.useGlobalContext)();\n    console.log(JSON.parse(((_localStorage = localStorage) === null || _localStorage === void 0 ? void 0 : _localStorage.getItem(_utils_addToLS__WEBPACK_IMPORTED_MODULE_3__.LSKeyType === null || _utils_addToLS__WEBPACK_IMPORTED_MODULE_3__.LSKeyType === void 0 ? void 0 : _utils_addToLS__WEBPACK_IMPORTED_MODULE_3__.LSKeyType.FAVORITES)) || \"\"));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_pageTitle_pageTitle__WEBPACK_IMPORTED_MODULE_1__.PageTitle, {\n                text: \"Favorites\"\n            }, void 0, false, {\n                fileName: \"/Users/josipaznaor/Documents/Learning/webshop - nextjs/webshop/src/pages/favorites/index.tsx\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, this),\n            favorites.length > 0 ? favorites === null || favorites === void 0 ? void 0 : favorites.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"item\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: item.title\n                        }, void 0, false, {\n                            fileName: \"/Users/josipaznaor/Documents/Learning/webshop - nextjs/webshop/src/pages/favorites/index.tsx\",\n                            lineNumber: 18,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                            src: item.image,\n                            alt: item.title,\n                            width: 200,\n                            height: 150\n                        }, void 0, false, {\n                            fileName: \"/Users/josipaznaor/Documents/Learning/webshop - nextjs/webshop/src/pages/favorites/index.tsx\",\n                            lineNumber: 19,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: item.detail\n                        }, void 0, false, {\n                            fileName: \"/Users/josipaznaor/Documents/Learning/webshop - nextjs/webshop/src/pages/favorites/index.tsx\",\n                            lineNumber: 20,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: item.price\n                        }, void 0, false, {\n                            fileName: \"/Users/josipaznaor/Documents/Learning/webshop - nextjs/webshop/src/pages/favorites/index.tsx\",\n                            lineNumber: 21,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, item.id, true, {\n                    fileName: \"/Users/josipaznaor/Documents/Learning/webshop - nextjs/webshop/src/pages/favorites/index.tsx\",\n                    lineNumber: 17,\n                    columnNumber: 11\n                }, this)) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"No item added in Favorites yet! Please return to the Home page and add some item to favorites\"\n            }, void 0, false, {\n                fileName: \"/Users/josipaznaor/Documents/Learning/webshop - nextjs/webshop/src/pages/favorites/index.tsx\",\n                lineNumber: 25,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/josipaznaor/Documents/Learning/webshop - nextjs/webshop/src/pages/favorites/index.tsx\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, this);\n}\n_s(Favorites, \"0FJisiRAW7/8W9xnUVPYdqgliGE=\", false, function() {\n    return [\n        _context_context__WEBPACK_IMPORTED_MODULE_2__.useGlobalContext\n    ];\n});\n_c = Favorites;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Favorites);\nvar _c;\n$RefreshReg$(_c, \"Favorites\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvZmF2b3JpdGVzL2luZGV4LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQTZEO0FBQ1I7QUFDVDtBQUNiO0FBRS9CLFNBQVNJO1FBR2dCQzs7SUFGdkIsTUFBTSxFQUFFQyxTQUFTLEVBQUUsR0FBR0wsa0VBQWdCQTtJQUV0Q00sUUFBUUMsR0FBRyxDQUFDQyxLQUFLQyxLQUFLLENBQUNMLEVBQUFBLGdCQUFBQSwwQkFBQUEsb0NBQUFBLGNBQWNNLE9BQU8sQ0FBQ1QscURBQVNBLGFBQVRBLHFEQUFTQSx1QkFBVEEscURBQVNBLENBQUVVLFNBQVMsTUFBSztJQUV0RSxxQkFDRSw4REFBQ0M7OzBCQUNDLDhEQUFDYixzRUFBU0E7Z0JBQUNjLE1BQU07Ozs7OztZQUVoQlIsVUFBVVMsTUFBTSxHQUFHLElBQ2xCVCxzQkFBQUEsZ0NBQUFBLFVBQVdVLEdBQUcsQ0FBQyxDQUFDQyxxQkFDZCw4REFBQ0o7b0JBQWtCSyxXQUFVOztzQ0FDM0IsOERBQUNDO3NDQUFHRixLQUFLRyxLQUFLOzs7Ozs7c0NBQ2QsOERBQUNqQixtREFBS0E7NEJBQUNrQixLQUFLSixLQUFLSyxLQUFLOzRCQUFFQyxLQUFLTixLQUFLRyxLQUFLOzRCQUFFSSxPQUFPOzRCQUFLQyxRQUFROzs7Ozs7c0NBQzdELDhEQUFDTjtzQ0FBR0YsS0FBS1MsTUFBTTs7Ozs7O3NDQUNmLDhEQUFDUDtzQ0FBR0YsS0FBS1UsS0FBSzs7Ozs7OzttQkFKTlYsS0FBS1csRUFBRTs7OzswQ0FRbkIsOERBQUNUOzBCQUFFOzs7Ozs7Ozs7Ozs7QUFPWDtHQTFCU2Y7O1FBQ2VILDhEQUFnQkE7OztLQUQvQkc7QUE0QlQsK0RBQWVBLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2Zhdm9yaXRlcy9pbmRleC50c3g/YWYxOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQYWdlVGl0bGUgfSBmcm9tIFwiQC9jb21wb25lbnRzL3BhZ2VUaXRsZS9wYWdlVGl0bGVcIjtcbmltcG9ydCB7IHVzZUdsb2JhbENvbnRleHQgfSBmcm9tIFwiQC9jb250ZXh0L2NvbnRleHRcIjtcbmltcG9ydCB7IExTS2V5VHlwZSB9IGZyb20gXCJAL3V0aWxzL2FkZFRvTFNcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuXG5mdW5jdGlvbiBGYXZvcml0ZXMoKSB7XG4gIGNvbnN0IHsgZmF2b3JpdGVzIH0gPSB1c2VHbG9iYWxDb250ZXh0KCk7XG5cbiAgY29uc29sZS5sb2coSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2U/LmdldEl0ZW0oTFNLZXlUeXBlPy5GQVZPUklURVMpIHx8IFwiXCIpKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8UGFnZVRpdGxlIHRleHQ9e1wiRmF2b3JpdGVzXCJ9IC8+XG5cbiAgICAgIHtmYXZvcml0ZXMubGVuZ3RoID4gMCA/IChcbiAgICAgICAgZmF2b3JpdGVzPy5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICA8ZGl2IGtleT17aXRlbS5pZH0gY2xhc3NOYW1lPVwiaXRlbVwiPlxuICAgICAgICAgICAgPHA+e2l0ZW0udGl0bGV9PC9wPlxuICAgICAgICAgICAgPEltYWdlIHNyYz17aXRlbS5pbWFnZX0gYWx0PXtpdGVtLnRpdGxlfSB3aWR0aD17MjAwfSBoZWlnaHQ9ezE1MH0gLz5cbiAgICAgICAgICAgIDxwPntpdGVtLmRldGFpbH08L3A+XG4gICAgICAgICAgICA8cD57aXRlbS5wcmljZX08L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpXG4gICAgICApIDogKFxuICAgICAgICA8cD5cbiAgICAgICAgICBObyBpdGVtIGFkZGVkIGluIEZhdm9yaXRlcyB5ZXQhIFBsZWFzZSByZXR1cm4gdG8gdGhlIEhvbWUgcGFnZSBhbmQgYWRkXG4gICAgICAgICAgc29tZSBpdGVtIHRvIGZhdm9yaXRlc1xuICAgICAgICA8L3A+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBGYXZvcml0ZXM7XG4iXSwibmFtZXMiOlsiUGFnZVRpdGxlIiwidXNlR2xvYmFsQ29udGV4dCIsIkxTS2V5VHlwZSIsIkltYWdlIiwiRmF2b3JpdGVzIiwibG9jYWxTdG9yYWdlIiwiZmF2b3JpdGVzIiwiY29uc29sZSIsImxvZyIsIkpTT04iLCJwYXJzZSIsImdldEl0ZW0iLCJGQVZPUklURVMiLCJkaXYiLCJ0ZXh0IiwibGVuZ3RoIiwibWFwIiwiaXRlbSIsImNsYXNzTmFtZSIsInAiLCJ0aXRsZSIsInNyYyIsImltYWdlIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJkZXRhaWwiLCJwcmljZSIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/favorites/index.tsx\n"));

/***/ })

});