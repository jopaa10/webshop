"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/shop",{

/***/ "./src/components/screens/shop/shoppingCart.tsx":
/*!******************************************************!*\
  !*** ./src/components/screens/shop/shoppingCart.tsx ***!
  \******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _context_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/context/context */ \"./src/context/context.tsx\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _shoppingCart_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shoppingCart.scss */ \"./src/components/screens/shop/shoppingCart.scss\");\n/* harmony import */ var _shoppingCart_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_shoppingCart_scss__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction ShoppingCartPage() {\n    _s();\n    const { cart } = (0,_context_context__WEBPACK_IMPORTED_MODULE_1__.useGlobalContext)();\n    console.log(cart);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"cart-container\",\n        children: cart.length > 0 ? cart.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"cart-container__cart\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"cart__details\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                src: item.image,\n                                alt: item.title,\n                                width: 50,\n                                height: 70\n                            }, void 0, false, {\n                                fileName: \"/Users/josipaznaor/Documents/Learning/webshop - nextjs/webshop/src/components/screens/shop/shoppingCart.tsx\",\n                                lineNumber: 17,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                children: item.title\n                            }, void 0, false, {\n                                fileName: \"/Users/josipaznaor/Documents/Learning/webshop - nextjs/webshop/src/components/screens/shop/shoppingCart.tsx\",\n                                lineNumber: 18,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: item.detail\n                            }, void 0, false, {\n                                fileName: \"/Users/josipaznaor/Documents/Learning/webshop - nextjs/webshop/src/components/screens/shop/shoppingCart.tsx\",\n                                lineNumber: 19,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: item.price\n                            }, void 0, false, {\n                                fileName: \"/Users/josipaznaor/Documents/Learning/webshop - nextjs/webshop/src/components/screens/shop/shoppingCart.tsx\",\n                                lineNumber: 20,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        children: \"-\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/josipaznaor/Documents/Learning/webshop - nextjs/webshop/src/components/screens/shop/shoppingCart.tsx\",\n                                        lineNumber: 22,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: item.quantity\n                                    }, void 0, false, {\n                                        fileName: \"/Users/josipaznaor/Documents/Learning/webshop - nextjs/webshop/src/components/screens/shop/shoppingCart.tsx\",\n                                        lineNumber: 23,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        children: \"+\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/josipaznaor/Documents/Learning/webshop - nextjs/webshop/src/components/screens/shop/shoppingCart.tsx\",\n                                        lineNumber: 24,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/josipaznaor/Documents/Learning/webshop - nextjs/webshop/src/components/screens/shop/shoppingCart.tsx\",\n                                lineNumber: 21,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/josipaznaor/Documents/Learning/webshop - nextjs/webshop/src/components/screens/shop/shoppingCart.tsx\",\n                        lineNumber: 16,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: item.price\n                            }, void 0, false, {\n                                fileName: \"/Users/josipaznaor/Documents/Learning/webshop - nextjs/webshop/src/components/screens/shop/shoppingCart.tsx\",\n                                lineNumber: 28,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                children: \"Delete\"\n                            }, void 0, false, {\n                                fileName: \"/Users/josipaznaor/Documents/Learning/webshop - nextjs/webshop/src/components/screens/shop/shoppingCart.tsx\",\n                                lineNumber: 29,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/josipaznaor/Documents/Learning/webshop - nextjs/webshop/src/components/screens/shop/shoppingCart.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, item.id, true, {\n                fileName: \"/Users/josipaznaor/Documents/Learning/webshop - nextjs/webshop/src/components/screens/shop/shoppingCart.tsx\",\n                lineNumber: 15,\n                columnNumber: 11\n            }, this)) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"Your cart is empty\"\n        }, void 0, false, {\n            fileName: \"/Users/josipaznaor/Documents/Learning/webshop - nextjs/webshop/src/components/screens/shop/shoppingCart.tsx\",\n            lineNumber: 34,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/josipaznaor/Documents/Learning/webshop - nextjs/webshop/src/components/screens/shop/shoppingCart.tsx\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, this);\n}\n_s(ShoppingCartPage, \"DZN0Eh1l0TKkK3von3VyiCOFf+g=\", false, function() {\n    return [\n        _context_context__WEBPACK_IMPORTED_MODULE_1__.useGlobalContext\n    ];\n});\n_c = ShoppingCartPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ShoppingCartPage);\nvar _c;\n$RefreshReg$(_c, \"ShoppingCartPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9zY3JlZW5zL3Nob3Avc2hvcHBpbmdDYXJ0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQXFEO0FBRXRCO0FBQ0Y7QUFFN0IsU0FBU0U7O0lBQ1AsTUFBTSxFQUFFQyxJQUFJLEVBQUUsR0FBR0gsa0VBQWdCQTtJQUVqQ0ksUUFBUUMsR0FBRyxDQUFDRjtJQUVaLHFCQUNFLDhEQUFDRztRQUFJQyxXQUFVO2tCQUNaSixLQUFLSyxNQUFNLEdBQUcsSUFDYkwsS0FBS00sR0FBRyxDQUFDLENBQUNDLHFCQUNSLDhEQUFDSjtnQkFBa0JDLFdBQVU7O2tDQUMzQiw4REFBQ0Q7d0JBQUlDLFdBQVU7OzBDQUNiLDhEQUFDTixtREFBS0E7Z0NBQUNVLEtBQUtELEtBQUtFLEtBQUs7Z0NBQUVDLEtBQUtILEtBQUtJLEtBQUs7Z0NBQUVDLE9BQU87Z0NBQUlDLFFBQVE7Ozs7OzswQ0FDNUQsOERBQUNDOzBDQUFJUCxLQUFLSSxLQUFLOzs7Ozs7MENBQ2YsOERBQUNJOzBDQUFHUixLQUFLUyxNQUFNOzs7Ozs7MENBQ2YsOERBQUNEOzBDQUFHUixLQUFLVSxLQUFLOzs7Ozs7MENBQ2QsOERBQUNkOztrREFDQyw4REFBQ2U7a0RBQU87Ozs7OztrREFDUiw4REFBQ0g7a0RBQUdSLEtBQUtZLFFBQVE7Ozs7OztrREFDakIsOERBQUNEO2tEQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBR1osOERBQUNmOzswQ0FDQyw4REFBQ1k7MENBQUdSLEtBQUtVLEtBQUs7Ozs7OzswQ0FDZCw4REFBQ0M7MENBQU87Ozs7Ozs7Ozs7Ozs7ZUFkRlgsS0FBS2EsRUFBRTs7OztzQ0FtQm5CLDhEQUFDTDtzQkFBRTs7Ozs7Ozs7Ozs7QUFJWDtHQWhDU2hCOztRQUNVRiw4REFBZ0JBOzs7S0FEMUJFO0FBa0NULCtEQUFlQSxnQkFBZ0JBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvc2NyZWVucy9zaG9wL3Nob3BwaW5nQ2FydC50c3g/NDg0NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VHbG9iYWxDb250ZXh0IH0gZnJvbSBcIkAvY29udGV4dC9jb250ZXh0XCI7XG5pbXBvcnQgeyBDYXJ0RGF0YSB9IGZyb20gXCJAL3R5cGVzL2NhcnRcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IFwiLi9zaG9wcGluZ0NhcnQuc2Nzc1wiO1xuXG5mdW5jdGlvbiBTaG9wcGluZ0NhcnRQYWdlKCkge1xuICBjb25zdCB7IGNhcnQgfSA9IHVzZUdsb2JhbENvbnRleHQoKTtcblxuICBjb25zb2xlLmxvZyhjYXJ0KTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FydC1jb250YWluZXJcIj5cbiAgICAgIHtjYXJ0Lmxlbmd0aCA+IDAgPyAoXG4gICAgICAgIGNhcnQubWFwKChpdGVtOiBDYXJ0RGF0YSkgPT4gKFxuICAgICAgICAgIDxkaXYga2V5PXtpdGVtLmlkfSBjbGFzc05hbWU9XCJjYXJ0LWNvbnRhaW5lcl9fY2FydFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJ0X19kZXRhaWxzXCI+XG4gICAgICAgICAgICAgIDxJbWFnZSBzcmM9e2l0ZW0uaW1hZ2V9IGFsdD17aXRlbS50aXRsZX0gd2lkdGg9ezUwfSBoZWlnaHQ9ezcwfSAvPlxuICAgICAgICAgICAgICA8aDM+e2l0ZW0udGl0bGV9PC9oMz5cbiAgICAgICAgICAgICAgPHA+e2l0ZW0uZGV0YWlsfTwvcD5cbiAgICAgICAgICAgICAgPHA+e2l0ZW0ucHJpY2V9PC9wPlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxidXR0b24+LTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxwPntpdGVtLnF1YW50aXR5fTwvcD5cbiAgICAgICAgICAgICAgICA8YnV0dG9uPis8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxwPntpdGVtLnByaWNlfTwvcD5cbiAgICAgICAgICAgICAgPGJ1dHRvbj5EZWxldGU8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKVxuICAgICAgKSA6IChcbiAgICAgICAgPHA+WW91ciBjYXJ0IGlzIGVtcHR5PC9wPlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2hvcHBpbmdDYXJ0UGFnZTtcbiJdLCJuYW1lcyI6WyJ1c2VHbG9iYWxDb250ZXh0IiwiSW1hZ2UiLCJTaG9wcGluZ0NhcnRQYWdlIiwiY2FydCIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJsZW5ndGgiLCJtYXAiLCJpdGVtIiwic3JjIiwiaW1hZ2UiLCJhbHQiLCJ0aXRsZSIsIndpZHRoIiwiaGVpZ2h0IiwiaDMiLCJwIiwiZGV0YWlsIiwicHJpY2UiLCJidXR0b24iLCJxdWFudGl0eSIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/screens/shop/shoppingCart.tsx\n"));

/***/ })

});