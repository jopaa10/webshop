"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/[cardId]",{

/***/ "./src/components/cardDetails/cardDetail.tsx":
/*!***************************************************!*\
  !*** ./src/components/cardDetails/cardDetail.tsx ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _context_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/context/context */ \"./src/context/context.tsx\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _common_addToCardButton_addButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/addToCardButton/addButton */ \"./src/components/common/addToCardButton/addButton.tsx\");\n/* harmony import */ var _cardDetail_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cardDetail.scss */ \"./src/components/cardDetails/cardDetail.scss\");\n/* harmony import */ var _cardDetail_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_cardDetail_scss__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n// eslint-disable-next-line @typescript-eslint/no-explicit-any\nfunction CardDetail(props) {\n    _s();\n    const { id, title, detail, price, image } = props;\n    const { addToShoppingCart } = (0,_context_context__WEBPACK_IMPORTED_MODULE_1__.useGlobalContext)();\n    const handleAddToCart = ()=>{\n        addToShoppingCart(id.toString());\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"card-info-container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"card-info-container__image\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    src: image,\n                    alt: title,\n                    width: 300,\n                    height: 250\n                }, void 0, false, {\n                    fileName: \"/Users/josipaznaor/Documents/Learning/webshop - nextjs/webshop/src/components/cardDetails/cardDetail.tsx\",\n                    lineNumber: 19,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/josipaznaor/Documents/Learning/webshop - nextjs/webshop/src/components/cardDetails/cardDetail.tsx\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"card-info-container__detail\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"card-title\",\n                        children: title\n                    }, void 0, false, {\n                        fileName: \"/Users/josipaznaor/Documents/Learning/webshop - nextjs/webshop/src/components/cardDetails/cardDetail.tsx\",\n                        lineNumber: 22,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"card-description\",\n                        children: detail\n                    }, void 0, false, {\n                        fileName: \"/Users/josipaznaor/Documents/Learning/webshop - nextjs/webshop/src/components/cardDetails/cardDetail.tsx\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"card-price\",\n                        children: [\n                            price,\n                            \" $\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/josipaznaor/Documents/Learning/webshop - nextjs/webshop/src/components/cardDetails/cardDetail.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"card-button-container\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_addToCardButton_addButton__WEBPACK_IMPORTED_MODULE_3__.AddButton, {\n                                buttonClass: \"card-add-to-button\",\n                                text: \"Add\",\n                                handleAddToCart: handleAddToCart\n                            }, void 0, false, {\n                                fileName: \"/Users/josipaznaor/Documents/Learning/webshop - nextjs/webshop/src/components/cardDetails/cardDetail.tsx\",\n                                lineNumber: 27,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_addToCardButton_addButton__WEBPACK_IMPORTED_MODULE_3__.AddButton, {\n                                buttonClass: \"card-buy-button\",\n                                text: \"Buy now\"\n                            }, void 0, false, {\n                                fileName: \"/Users/josipaznaor/Documents/Learning/webshop - nextjs/webshop/src/components/cardDetails/cardDetail.tsx\",\n                                lineNumber: 32,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/josipaznaor/Documents/Learning/webshop - nextjs/webshop/src/components/cardDetails/cardDetail.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/josipaznaor/Documents/Learning/webshop - nextjs/webshop/src/components/cardDetails/cardDetail.tsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/josipaznaor/Documents/Learning/webshop - nextjs/webshop/src/components/cardDetails/cardDetail.tsx\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, this);\n}\n_s(CardDetail, \"CgliJo7R3k7JTqK+tchuaGKSqrY=\", false, function() {\n    return [\n        _context_context__WEBPACK_IMPORTED_MODULE_1__.useGlobalContext\n    ];\n});\n_c = CardDetail;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CardDetail);\nvar _c;\n$RefreshReg$(_c, \"CardDetail\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9jYXJkRGV0YWlscy9jYXJkRGV0YWlsLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFxRDtBQUV0QjtBQUNpQztBQUNyQztBQUUzQiw4REFBOEQ7QUFDOUQsU0FBU0csV0FBV0MsS0FBZTs7SUFDakMsTUFBTSxFQUFFQyxFQUFFLEVBQUVDLEtBQUssRUFBRUMsTUFBTSxFQUFFQyxLQUFLLEVBQUVDLEtBQUssRUFBRSxHQUFHTDtJQUM1QyxNQUFNLEVBQUVNLGlCQUFpQixFQUFFLEdBQUdWLGtFQUFnQkE7SUFFOUMsTUFBTVcsa0JBQWtCO1FBQ3RCRCxrQkFBa0JMLEdBQUdPLFFBQVE7SUFDL0I7SUFFQSxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDYixtREFBS0E7b0JBQUNjLEtBQUtOO29CQUFPTyxLQUFLVjtvQkFBT1csT0FBTztvQkFBS0MsUUFBUTs7Ozs7Ozs7Ozs7MEJBRXJELDhEQUFDTDtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNLO3dCQUFFTCxXQUFVO2tDQUFjUjs7Ozs7O2tDQUMzQiw4REFBQ2E7d0JBQUVMLFdBQVU7a0NBQW9CUDs7Ozs7O2tDQUNqQyw4REFBQ1k7d0JBQUVMLFdBQVU7OzRCQUFjTjs0QkFBTTs7Ozs7OztrQ0FFakMsOERBQUNLO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ1osd0VBQVNBO2dDQUNSa0IsYUFBYTtnQ0FDYkMsTUFBTTtnQ0FDTlYsaUJBQWlCQTs7Ozs7OzBDQUVuQiw4REFBQ1Qsd0VBQVNBO2dDQUFDa0IsYUFBYTtnQ0FBbUJDLE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUszRDtHQTdCU2xCOztRQUV1QkgsOERBQWdCQTs7O0tBRnZDRztBQStCVCwrREFBZUEsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9jYXJkRGV0YWlscy9jYXJkRGV0YWlsLnRzeD9iZWNhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUdsb2JhbENvbnRleHQgfSBmcm9tIFwiQC9jb250ZXh0L2NvbnRleHRcIjtcbmltcG9ydCB7IENhcnREYXRhIH0gZnJvbSBcIkAvdHlwZXMvY2FydFwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgeyBBZGRCdXR0b24gfSBmcm9tIFwiLi4vY29tbW9uL2FkZFRvQ2FyZEJ1dHRvbi9hZGRCdXR0b25cIjtcbmltcG9ydCBcIi4vY2FyZERldGFpbC5zY3NzXCI7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG5mdW5jdGlvbiBDYXJkRGV0YWlsKHByb3BzOiBDYXJ0RGF0YSkge1xuICBjb25zdCB7IGlkLCB0aXRsZSwgZGV0YWlsLCBwcmljZSwgaW1hZ2UgfSA9IHByb3BzO1xuICBjb25zdCB7IGFkZFRvU2hvcHBpbmdDYXJ0IH0gPSB1c2VHbG9iYWxDb250ZXh0KCk7XG5cbiAgY29uc3QgaGFuZGxlQWRkVG9DYXJ0ID0gKCkgPT4ge1xuICAgIGFkZFRvU2hvcHBpbmdDYXJ0KGlkLnRvU3RyaW5nKCkpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWluZm8tY29udGFpbmVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaW5mby1jb250YWluZXJfX2ltYWdlXCI+XG4gICAgICAgIDxJbWFnZSBzcmM9e2ltYWdlfSBhbHQ9e3RpdGxlfSB3aWR0aD17MzAwfSBoZWlnaHQ9ezI1MH0gLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWluZm8tY29udGFpbmVyX19kZXRhaWxcIj5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPnt0aXRsZX08L3A+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtZGVzY3JpcHRpb25cIj57ZGV0YWlsfTwvcD5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZC1wcmljZVwiPntwcmljZX0gJDwvcD5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYnV0dG9uLWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxBZGRCdXR0b25cbiAgICAgICAgICAgIGJ1dHRvbkNsYXNzPXtcImNhcmQtYWRkLXRvLWJ1dHRvblwifVxuICAgICAgICAgICAgdGV4dD17XCJBZGRcIn1cbiAgICAgICAgICAgIGhhbmRsZUFkZFRvQ2FydD17aGFuZGxlQWRkVG9DYXJ0fVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPEFkZEJ1dHRvbiBidXR0b25DbGFzcz17XCJjYXJkLWJ1eS1idXR0b25cIn0gdGV4dD17XCJCdXkgbm93XCJ9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IENhcmREZXRhaWw7XG4iXSwibmFtZXMiOlsidXNlR2xvYmFsQ29udGV4dCIsIkltYWdlIiwiQWRkQnV0dG9uIiwiQ2FyZERldGFpbCIsInByb3BzIiwiaWQiLCJ0aXRsZSIsImRldGFpbCIsInByaWNlIiwiaW1hZ2UiLCJhZGRUb1Nob3BwaW5nQ2FydCIsImhhbmRsZUFkZFRvQ2FydCIsInRvU3RyaW5nIiwiZGl2IiwiY2xhc3NOYW1lIiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJwIiwiYnV0dG9uQ2xhc3MiLCJ0ZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/cardDetails/cardDetail.tsx\n"));

/***/ })

});