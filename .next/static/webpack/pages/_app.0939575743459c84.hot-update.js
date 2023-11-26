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

/***/ "./src/components/layout/header.tsx":
/*!******************************************!*\
  !*** ./src/components/layout/header.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _header_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.scss */ \"./src/components/layout/header.scss\");\n/* harmony import */ var _header_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_header_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/icons-material/Menu */ \"./node_modules/@mui/icons-material/Menu.js\");\n/* harmony import */ var _mui_icons_material_AddShoppingCart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/icons-material/AddShoppingCart */ \"./node_modules/@mui/icons-material/AddShoppingCart.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _context_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/context/context */ \"./src/context/context.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Header() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const { totalQuantity } = (0,_context_context__WEBPACK_IMPORTED_MODULE_5__.useGlobalContext)();\n    const [isMenuOpen, setIsMenuOpen] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    const [animate, setAnimate] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    const isMounting = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(true);\n    const [windowSize, setWindowSize] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)({\n        width: 0,\n        height: 0\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        // only execute all the code below in client side\n        // Handler to call on window resize\n        function handleResize() {\n            // Set window width/height to state\n            setWindowSize({\n                width: window.innerWidth,\n                height: window.innerHeight\n            });\n        }\n        window.addEventListener(\"resize\", handleResize);\n        if (isMounting.current) {\n            isMounting.current = false;\n        } else {\n            setAnimate(true);\n        }\n        // Call handler right away so state gets updated with initial window size\n        handleResize();\n        return ()=>window.removeEventListener(\"resize\", handleResize);\n    }, [\n        totalQuantity\n    ]);\n    const pages = [\n        {\n            pathname: \"/\",\n            name: \"Home\"\n        },\n        {\n            pathname: \"/favorites\",\n            name: \"Favorites\"\n        },\n        {\n            pathname: \"/shop\",\n            name: \"Shop\"\n        }\n    ];\n    const handleOpenMenu = ()=>{\n        setIsMenuOpen(!isMenuOpen);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: \"header\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n            className: \"navbar\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"navbar__container \\n              \".concat(isMenuOpen ? \"mobile-nav--active\" : \"mobile-nav\", \"\\n            \"),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"background-mobile\",\n                            style: {\n                                display: \"\".concat(isMenuOpen && windowSize.width < 480 ? \"block\" : \"none\")\n                            }\n                        }, void 0, false, {\n                            fileName: \"/Users/josipaznaor/Documents/Learning/webshop - nextjs/webshop/src/components/layout/header.tsx\",\n                            lineNumber: 80,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"logo\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Webshop\"\n                            }, void 0, false, {\n                                fileName: \"/Users/josipaznaor/Documents/Learning/webshop - nextjs/webshop/src/components/layout/header.tsx\",\n                                lineNumber: 89,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/josipaznaor/Documents/Learning/webshop - nextjs/webshop/src/components/layout/header.tsx\",\n                            lineNumber: 88,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            style: {\n                                display: \"\".concat(isMenuOpen && windowSize.width < 480 ? \"flex\" : \"none\")\n                            },\n                            children: pages.map((item)=>{\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    className: router.pathname === item.pathname ? \"active\" : \"\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                            href: item.pathname,\n                                            children: item.name\n                                        }, void 0, false, {\n                                            fileName: \"/Users/josipaznaor/Documents/Learning/webshop - nextjs/webshop/src/components/layout/header.tsx\",\n                                            lineNumber: 104,\n                                            columnNumber: 19\n                                        }, this),\n                                        item.pathname.includes(\"shop\") && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"shopping-cart-icon-container \".concat(animate ? \"animation\" : \"\"),\n                                                onAnimationEnd: ()=>setAnimate(false),\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_AddShoppingCart__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                                                        fileName: \"/Users/josipaznaor/Documents/Learning/webshop - nextjs/webshop/src/components/layout/header.tsx\",\n                                                        lineNumber: 113,\n                                                        columnNumber: 25\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                        children: totalQuantity\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/josipaznaor/Documents/Learning/webshop - nextjs/webshop/src/components/layout/header.tsx\",\n                                                        lineNumber: 114,\n                                                        columnNumber: 25\n                                                    }, this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/josipaznaor/Documents/Learning/webshop - nextjs/webshop/src/components/layout/header.tsx\",\n                                                lineNumber: 107,\n                                                columnNumber: 23\n                                            }, this)\n                                        }, void 0, false)\n                                    ]\n                                }, item.pathname, true, {\n                                    fileName: \"/Users/josipaznaor/Documents/Learning/webshop - nextjs/webshop/src/components/layout/header.tsx\",\n                                    lineNumber: 100,\n                                    columnNumber: 17\n                                }, this);\n                            })\n                        }, void 0, false, {\n                            fileName: \"/Users/josipaznaor/Documents/Learning/webshop - nextjs/webshop/src/components/layout/header.tsx\",\n                            lineNumber: 91,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/josipaznaor/Documents/Learning/webshop - nextjs/webshop/src/components/layout/header.tsx\",\n                    lineNumber: 75,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"menu-icon\",\n                    onClick: handleOpenMenu,\n                    style: {\n                        display: \"\".concat(windowSize.width < 480 ? \"flex\" : \"none\")\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        fontSize: \"inherit\"\n                    }, void 0, false, {\n                        fileName: \"/Users/josipaznaor/Documents/Learning/webshop - nextjs/webshop/src/components/layout/header.tsx\",\n                        lineNumber: 128,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/josipaznaor/Documents/Learning/webshop - nextjs/webshop/src/components/layout/header.tsx\",\n                    lineNumber: 123,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/josipaznaor/Documents/Learning/webshop - nextjs/webshop/src/components/layout/header.tsx\",\n            lineNumber: 74,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/josipaznaor/Documents/Learning/webshop - nextjs/webshop/src/components/layout/header.tsx\",\n        lineNumber: 73,\n        columnNumber: 5\n    }, this);\n}\n_s(Header, \"VUzgAo5iQyb0dVopV0T+JMTxHdI=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter,\n        _context_context__WEBPACK_IMPORTED_MODULE_5__.useGlobalContext\n    ];\n});\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7Ozs7Ozs7QUFLN0I7R0FySFN2Qzs7UUFDUVAsa0RBQVNBO1FBQ0VNLDhEQUFnQkE7OztLQUZuQ0M7QUF1SFQsK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvbGF5b3V0L2hlYWRlci50c3g/NGFjMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuL2hlYWRlci5zY3NzXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuaW1wb3J0IE1lbnVJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL01lbnVcIjtcbmltcG9ydCBBZGRTaG9wcGluZ0NhcnRJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL0FkZFNob3BwaW5nQ2FydFwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VHbG9iYWxDb250ZXh0IH0gZnJvbSBcIkAvY29udGV4dC9jb250ZXh0XCI7XG5cbmludGVyZmFjZSBQYWdlcyB7XG4gIHBhdGhuYW1lOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbiAgaWNvbj86IHN0cmluZztcbn1cblxuZnVuY3Rpb24gSGVhZGVyKCkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgeyB0b3RhbFF1YW50aXR5IH0gPSB1c2VHbG9iYWxDb250ZXh0KCk7XG5cbiAgY29uc3QgW2lzTWVudU9wZW4sIHNldElzTWVudU9wZW5dID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuICBjb25zdCBbYW5pbWF0ZSwgc2V0QW5pbWF0ZV0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG4gIGNvbnN0IGlzTW91bnRpbmcgPSB1c2VSZWYodHJ1ZSk7XG5cbiAgY29uc3QgW3dpbmRvd1NpemUsIHNldFdpbmRvd1NpemVdID0gdXNlU3RhdGUoe1xuICAgIHdpZHRoOiAwLFxuICAgIGhlaWdodDogMCxcbiAgfSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBvbmx5IGV4ZWN1dGUgYWxsIHRoZSBjb2RlIGJlbG93IGluIGNsaWVudCBzaWRlXG4gICAgLy8gSGFuZGxlciB0byBjYWxsIG9uIHdpbmRvdyByZXNpemVcbiAgICBmdW5jdGlvbiBoYW5kbGVSZXNpemUoKSB7XG4gICAgICAvLyBTZXQgd2luZG93IHdpZHRoL2hlaWdodCB0byBzdGF0ZVxuICAgICAgc2V0V2luZG93U2l6ZSh7XG4gICAgICAgIHdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCxcbiAgICAgICAgaGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQsXG4gICAgICB9KTtcbiAgICB9XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgaGFuZGxlUmVzaXplKTtcblxuICAgIGlmIChpc01vdW50aW5nLmN1cnJlbnQpIHtcbiAgICAgIGlzTW91bnRpbmcuY3VycmVudCA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRBbmltYXRlKHRydWUpO1xuICAgIH1cblxuICAgIC8vIENhbGwgaGFuZGxlciByaWdodCBhd2F5IHNvIHN0YXRlIGdldHMgdXBkYXRlZCB3aXRoIGluaXRpYWwgd2luZG93IHNpemVcbiAgICBoYW5kbGVSZXNpemUoKTtcblxuICAgIHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBoYW5kbGVSZXNpemUpO1xuICB9LCBbdG90YWxRdWFudGl0eV0pO1xuXG4gIGNvbnN0IHBhZ2VzOiBQYWdlc1tdID0gW1xuICAgIHtcbiAgICAgIHBhdGhuYW1lOiBcIi9cIixcbiAgICAgIG5hbWU6IFwiSG9tZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgcGF0aG5hbWU6IFwiL2Zhdm9yaXRlc1wiLFxuICAgICAgbmFtZTogXCJGYXZvcml0ZXNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHBhdGhuYW1lOiBcIi9zaG9wXCIsXG4gICAgICBuYW1lOiBcIlNob3BcIixcbiAgICB9LFxuICBdO1xuXG4gIGNvbnN0IGhhbmRsZU9wZW5NZW51ID0gKCkgPT4ge1xuICAgIHNldElzTWVudU9wZW4oIWlzTWVudU9wZW4pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGhlYWRlciBjbGFzc05hbWU9XCJoZWFkZXJcIj5cbiAgICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyXCI+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9e2BuYXZiYXJfX2NvbnRhaW5lciBcbiAgICAgICAgICAgICAgJHtpc01lbnVPcGVuID8gXCJtb2JpbGUtbmF2LS1hY3RpdmVcIiA6IFwibW9iaWxlLW5hdlwifVxuICAgICAgICAgICAgYH1cbiAgICAgICAgPlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJhY2tncm91bmQtbW9iaWxlXCJcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGAke1xuICAgICAgICAgICAgICAgIGlzTWVudU9wZW4gJiYgd2luZG93U2l6ZS53aWR0aCA8IDQ4MCA/IFwiYmxvY2tcIiA6IFwibm9uZVwiXG4gICAgICAgICAgICAgIH1gLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvXCI+XG4gICAgICAgICAgICA8cD5XZWJzaG9wPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDx1bFxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgZGlzcGxheTogYCR7XG4gICAgICAgICAgICAgICAgaXNNZW51T3BlbiAmJiB3aW5kb3dTaXplLndpZHRoIDwgNDgwID8gXCJmbGV4XCIgOiBcIm5vbmVcIlxuICAgICAgICAgICAgICB9YCxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAge3BhZ2VzLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICAgICAga2V5PXtpdGVtLnBhdGhuYW1lfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtyb3V0ZXIucGF0aG5hbWUgPT09IGl0ZW0ucGF0aG5hbWUgPyBcImFjdGl2ZVwiIDogXCJcIn1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtpdGVtLnBhdGhuYW1lfT57aXRlbS5uYW1lfTwvTGluaz5cbiAgICAgICAgICAgICAgICAgIHtpdGVtLnBhdGhuYW1lLmluY2x1ZGVzKFwic2hvcFwiKSAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgc2hvcHBpbmctY2FydC1pY29uLWNvbnRhaW5lciAke1xuICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRlID8gXCJhbmltYXRpb25cIiA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25BbmltYXRpb25FbmQ9eygpID0+IHNldEFuaW1hdGUoZmFsc2UpfVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxBZGRTaG9wcGluZ0NhcnRJY29uIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD57dG90YWxRdWFudGl0eX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBjbGFzc05hbWU9e1wibWVudS1pY29uXCJ9XG4gICAgICAgICAgb25DbGljaz17aGFuZGxlT3Blbk1lbnV9XG4gICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogYCR7d2luZG93U2l6ZS53aWR0aCA8IDQ4MCA/IFwiZmxleFwiIDogXCJub25lXCJ9YCB9fVxuICAgICAgICA+XG4gICAgICAgICAgPE1lbnVJY29uIGZvbnRTaXplPVwiaW5oZXJpdFwiIC8+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9uYXY+XG4gICAgPC9oZWFkZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiJdLCJuYW1lcyI6WyJMaW5rIiwidXNlUm91dGVyIiwiTWVudUljb24iLCJBZGRTaG9wcGluZ0NhcnRJY29uIiwidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJ1c2VHbG9iYWxDb250ZXh0IiwiSGVhZGVyIiwicm91dGVyIiwidG90YWxRdWFudGl0eSIsImlzTWVudU9wZW4iLCJzZXRJc01lbnVPcGVuIiwiYW5pbWF0ZSIsInNldEFuaW1hdGUiLCJpc01vdW50aW5nIiwid2luZG93U2l6ZSIsInNldFdpbmRvd1NpemUiLCJ3aWR0aCIsImhlaWdodCIsImhhbmRsZVJlc2l6ZSIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjdXJyZW50IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInBhZ2VzIiwicGF0aG5hbWUiLCJuYW1lIiwiaGFuZGxlT3Blbk1lbnUiLCJoZWFkZXIiLCJjbGFzc05hbWUiLCJuYXYiLCJkaXYiLCJzdHlsZSIsImRpc3BsYXkiLCJwIiwidWwiLCJtYXAiLCJpdGVtIiwibGkiLCJocmVmIiwiaW5jbHVkZXMiLCJvbkFuaW1hdGlvbkVuZCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJmb250U2l6ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/layout/header.tsx\n"));

/***/ })

});