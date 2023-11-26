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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _header_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.scss */ \"./src/components/layout/header.scss\");\n/* harmony import */ var _header_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_header_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _mui_icons_material_AddShoppingCart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/icons-material/AddShoppingCart */ \"./node_modules/@mui/icons-material/AddShoppingCart.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _context_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/context/context */ \"./src/context/context.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n//import MenuIcon from \"@mui/icons-material/Menu\";\n\n\n\nfunction Header() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const { totalQuantity } = (0,_context_context__WEBPACK_IMPORTED_MODULE_5__.useGlobalContext)();\n    //const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);\n    const [animate, setAnimate] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    const isMounting = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(true);\n    const [windowSize, setWindowSize] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)({\n        width: 0,\n        height: 0\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        // only execute all the code below in client side\n        // Handler to call on window resize\n        function handleResize() {\n            // Set window width/height to state\n            setWindowSize({\n                width: window.innerWidth,\n                height: window.innerHeight\n            });\n        }\n        window.addEventListener(\"resize\", handleResize);\n        if (isMounting.current) {\n            isMounting.current = false;\n        } else {\n            setAnimate(true);\n        }\n        // Call handler right away so state gets updated with initial window size\n        handleResize();\n        return ()=>window.removeEventListener(\"resize\", handleResize);\n    }, [\n        totalQuantity\n    ]);\n    const pages = [\n        {\n            pathname: \"/\",\n            name: \"Home\"\n        },\n        {\n            pathname: \"/favorites\",\n            name: \"Favorites\"\n        },\n        {\n            pathname: \"/shop\",\n            name: \"Shop\"\n        }\n    ];\n    // const handleOpenMenu = () => {\n    //   setIsMenuOpen(!isMenuOpen);\n    // };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: \"navigation\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"checkbox\",\n                className: \"navigation__checkbox\",\n                id: \"navi-toggle\"\n            }, void 0, false, {\n                fileName: \"/Users/josipaznaor/Documents/Learning/webshop - nextjs/webshop/src/components/layout/header.tsx\",\n                lineNumber: 74,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                htmlFor: \"navi-toggle\",\n                className: \"navigation__button\"\n            }, void 0, false, {\n                fileName: \"/Users/josipaznaor/Documents/Learning/webshop - nextjs/webshop/src/components/layout/header.tsx\",\n                lineNumber: 79,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"navigation__background\"\n            }, void 0, false, {\n                fileName: \"/Users/josipaznaor/Documents/Learning/webshop - nextjs/webshop/src/components/layout/header.tsx\",\n                lineNumber: 80,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"logo\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"Webshop\"\n                }, void 0, false, {\n                    fileName: \"/Users/josipaznaor/Documents/Learning/webshop - nextjs/webshop/src/components/layout/header.tsx\",\n                    lineNumber: 82,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/josipaznaor/Documents/Learning/webshop - nextjs/webshop/src/components/layout/header.tsx\",\n                lineNumber: 81,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                className: \"navigation__nav\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    className: \"navigation__list\",\n                    children: pages.map((item)=>{\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: router.pathname === item.pathname ? \"active\" : \"\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    href: item.pathname,\n                                    children: item.name\n                                }, void 0, false, {\n                                    fileName: \"/Users/josipaznaor/Documents/Learning/webshop - nextjs/webshop/src/components/layout/header.tsx\",\n                                    lineNumber: 92,\n                                    columnNumber: 17\n                                }, this),\n                                item.pathname.includes(\"shop\") && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"shopping-cart-icon-container \".concat(animate ? \"animation\" : \"\"),\n                                        onAnimationEnd: ()=>setAnimate(false),\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_AddShoppingCart__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                                                fileName: \"/Users/josipaznaor/Documents/Learning/webshop - nextjs/webshop/src/components/layout/header.tsx\",\n                                                lineNumber: 101,\n                                                columnNumber: 23\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                children: totalQuantity\n                                            }, void 0, false, {\n                                                fileName: \"/Users/josipaznaor/Documents/Learning/webshop - nextjs/webshop/src/components/layout/header.tsx\",\n                                                lineNumber: 102,\n                                                columnNumber: 23\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/josipaznaor/Documents/Learning/webshop - nextjs/webshop/src/components/layout/header.tsx\",\n                                        lineNumber: 95,\n                                        columnNumber: 21\n                                    }, this)\n                                }, void 0, false)\n                            ]\n                        }, item.pathname, true, {\n                            fileName: \"/Users/josipaznaor/Documents/Learning/webshop - nextjs/webshop/src/components/layout/header.tsx\",\n                            lineNumber: 88,\n                            columnNumber: 15\n                        }, this);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/josipaznaor/Documents/Learning/webshop - nextjs/webshop/src/components/layout/header.tsx\",\n                    lineNumber: 85,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/josipaznaor/Documents/Learning/webshop - nextjs/webshop/src/components/layout/header.tsx\",\n                lineNumber: 84,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/josipaznaor/Documents/Learning/webshop - nextjs/webshop/src/components/layout/header.tsx\",\n        lineNumber: 73,\n        columnNumber: 5\n    }, this);\n}\n_s(Header, \"gTbhePEzpZl1mqCqmfHnRklClps=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter,\n        _context_context__WEBPACK_IMPORTED_MODULE_5__.useGlobalContext\n    ];\n});\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9sYXlvdXQvaGVhZGVyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBdUI7QUFDTTtBQUNXO0FBRXhDLGtEQUFrRDtBQUNvQjtBQUNsQjtBQUNDO0FBUXJELFNBQVNPOztJQUNQLE1BQU1DLFNBQVNQLHNEQUFTQTtJQUN4QixNQUFNLEVBQUVRLGFBQWEsRUFBRSxHQUFHSCxrRUFBZ0JBO0lBRTFDLCtEQUErRDtJQUMvRCxNQUFNLENBQUNJLFNBQVNDLFdBQVcsR0FBR04sK0NBQVFBLENBQVU7SUFDaEQsTUFBTU8sYUFBYVIsNkNBQU1BLENBQUM7SUFFMUIsTUFBTSxDQUFDUyxZQUFZQyxjQUFjLEdBQUdULCtDQUFRQSxDQUFDO1FBQzNDVSxPQUFPO1FBQ1BDLFFBQVE7SUFDVjtJQUVBYixnREFBU0EsQ0FBQztRQUNSLGlEQUFpRDtRQUNqRCxtQ0FBbUM7UUFDbkMsU0FBU2M7WUFDUCxtQ0FBbUM7WUFDbkNILGNBQWM7Z0JBQ1pDLE9BQU9HLE9BQU9DLFVBQVU7Z0JBQ3hCSCxRQUFRRSxPQUFPRSxXQUFXO1lBQzVCO1FBQ0Y7UUFDQUYsT0FBT0csZ0JBQWdCLENBQUMsVUFBVUo7UUFFbEMsSUFBSUwsV0FBV1UsT0FBTyxFQUFFO1lBQ3RCVixXQUFXVSxPQUFPLEdBQUc7UUFDdkIsT0FBTztZQUNMWCxXQUFXO1FBQ2I7UUFFQSx5RUFBeUU7UUFDekVNO1FBRUEsT0FBTyxJQUFNQyxPQUFPSyxtQkFBbUIsQ0FBQyxVQUFVTjtJQUNwRCxHQUFHO1FBQUNSO0tBQWM7SUFFbEIsTUFBTWUsUUFBaUI7UUFDckI7WUFDRUMsVUFBVTtZQUNWQyxNQUFNO1FBQ1I7UUFDQTtZQUNFRCxVQUFVO1lBQ1ZDLE1BQU07UUFDUjtRQUNBO1lBQ0VELFVBQVU7WUFDVkMsTUFBTTtRQUNSO0tBQ0Q7SUFFRCxpQ0FBaUM7SUFDakMsZ0NBQWdDO0lBQ2hDLEtBQUs7SUFFTCxxQkFDRSw4REFBQ0M7UUFBT0MsV0FBVTs7MEJBQ2hCLDhEQUFDQztnQkFDQ0MsTUFBSztnQkFDTEYsV0FBVTtnQkFDVkcsSUFBRzs7Ozs7OzBCQUVMLDhEQUFDQztnQkFBTUMsU0FBUTtnQkFBY0wsV0FBVTs7Ozs7OzBCQUN2Qyw4REFBQ007Z0JBQUlOLFdBQVk7Ozs7OzswQkFDakIsOERBQUNNO2dCQUFJTixXQUFVOzBCQUNiLDRFQUFDTzs4QkFBRTs7Ozs7Ozs7Ozs7MEJBRUwsOERBQUNDO2dCQUFJUixXQUFVOzBCQUNiLDRFQUFDUztvQkFBR1QsV0FBVTs4QkFDWEosTUFBTWMsR0FBRyxDQUFDLENBQUNDO3dCQUNWLHFCQUNFLDhEQUFDQzs0QkFFQ1osV0FBV3BCLE9BQU9pQixRQUFRLEtBQUtjLEtBQUtkLFFBQVEsR0FBRyxXQUFXOzs4Q0FFMUQsOERBQUN6QixrREFBSUE7b0NBQUN5QyxNQUFNRixLQUFLZCxRQUFROzhDQUFHYyxLQUFLYixJQUFJOzs7Ozs7Z0NBQ3BDYSxLQUFLZCxRQUFRLENBQUNpQixRQUFRLENBQUMseUJBQ3RCOzhDQUNFLDRFQUFDUjt3Q0FDQ04sV0FBVyxnQ0FFVixPQURDbEIsVUFBVSxjQUFjO3dDQUUxQmlDLGdCQUFnQixJQUFNaEMsV0FBVzs7MERBRWpDLDhEQUFDVCwyRUFBbUJBOzs7OzswREFDcEIsOERBQUNpQzswREFBRzFCOzs7Ozs7Ozs7Ozs7OzsyQkFiTDhCLEtBQUtkLFFBQVE7Ozs7O29CQW1CeEI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBYVY7R0F6R1NsQjs7UUFDUU4sa0RBQVNBO1FBQ0VLLDhEQUFnQkE7OztLQUZuQ0M7QUEyR1QsK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvbGF5b3V0L2hlYWRlci50c3g/NGFjMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuL2hlYWRlci5zY3NzXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuLy9pbXBvcnQgTWVudUljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvTWVudVwiO1xuaW1wb3J0IEFkZFNob3BwaW5nQ2FydEljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvQWRkU2hvcHBpbmdDYXJ0XCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZUdsb2JhbENvbnRleHQgfSBmcm9tIFwiQC9jb250ZXh0L2NvbnRleHRcIjtcblxuaW50ZXJmYWNlIFBhZ2VzIHtcbiAgcGF0aG5hbWU6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICBpY29uPzogc3RyaW5nO1xufVxuXG5mdW5jdGlvbiBIZWFkZXIoKSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCB7IHRvdGFsUXVhbnRpdHkgfSA9IHVzZUdsb2JhbENvbnRleHQoKTtcblxuICAvL2NvbnN0IFtpc01lbnVPcGVuLCBzZXRJc01lbnVPcGVuXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcbiAgY29uc3QgW2FuaW1hdGUsIHNldEFuaW1hdGVdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuICBjb25zdCBpc01vdW50aW5nID0gdXNlUmVmKHRydWUpO1xuXG4gIGNvbnN0IFt3aW5kb3dTaXplLCBzZXRXaW5kb3dTaXplXSA9IHVzZVN0YXRlKHtcbiAgICB3aWR0aDogMCxcbiAgICBoZWlnaHQ6IDAsXG4gIH0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gb25seSBleGVjdXRlIGFsbCB0aGUgY29kZSBiZWxvdyBpbiBjbGllbnQgc2lkZVxuICAgIC8vIEhhbmRsZXIgdG8gY2FsbCBvbiB3aW5kb3cgcmVzaXplXG4gICAgZnVuY3Rpb24gaGFuZGxlUmVzaXplKCkge1xuICAgICAgLy8gU2V0IHdpbmRvdyB3aWR0aC9oZWlnaHQgdG8gc3RhdGVcbiAgICAgIHNldFdpbmRvd1NpemUoe1xuICAgICAgICB3aWR0aDogd2luZG93LmlubmVyV2lkdGgsXG4gICAgICAgIGhlaWdodDogd2luZG93LmlubmVySGVpZ2h0LFxuICAgICAgfSk7XG4gICAgfVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGhhbmRsZVJlc2l6ZSk7XG5cbiAgICBpZiAoaXNNb3VudGluZy5jdXJyZW50KSB7XG4gICAgICBpc01vdW50aW5nLmN1cnJlbnQgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0QW5pbWF0ZSh0cnVlKTtcbiAgICB9XG5cbiAgICAvLyBDYWxsIGhhbmRsZXIgcmlnaHQgYXdheSBzbyBzdGF0ZSBnZXRzIHVwZGF0ZWQgd2l0aCBpbml0aWFsIHdpbmRvdyBzaXplXG4gICAgaGFuZGxlUmVzaXplKCk7XG5cbiAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgaGFuZGxlUmVzaXplKTtcbiAgfSwgW3RvdGFsUXVhbnRpdHldKTtcblxuICBjb25zdCBwYWdlczogUGFnZXNbXSA9IFtcbiAgICB7XG4gICAgICBwYXRobmFtZTogXCIvXCIsXG4gICAgICBuYW1lOiBcIkhvbWVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHBhdGhuYW1lOiBcIi9mYXZvcml0ZXNcIixcbiAgICAgIG5hbWU6IFwiRmF2b3JpdGVzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBwYXRobmFtZTogXCIvc2hvcFwiLFxuICAgICAgbmFtZTogXCJTaG9wXCIsXG4gICAgfSxcbiAgXTtcblxuICAvLyBjb25zdCBoYW5kbGVPcGVuTWVudSA9ICgpID0+IHtcbiAgLy8gICBzZXRJc01lbnVPcGVuKCFpc01lbnVPcGVuKTtcbiAgLy8gfTtcblxuICByZXR1cm4gKFxuICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwibmF2aWdhdGlvblwiPlxuICAgICAgPGlucHV0XG4gICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgIGNsYXNzTmFtZT1cIm5hdmlnYXRpb25fX2NoZWNrYm94XCJcbiAgICAgICAgaWQ9XCJuYXZpLXRvZ2dsZVwiXG4gICAgICAvPlxuICAgICAgPGxhYmVsIGh0bWxGb3I9XCJuYXZpLXRvZ2dsZVwiIGNsYXNzTmFtZT1cIm5hdmlnYXRpb25fX2J1dHRvblwiPjwvbGFiZWw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YG5hdmlnYXRpb25fX2JhY2tncm91bmRgfT48L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nb1wiPlxuICAgICAgICA8cD5XZWJzaG9wPC9wPlxuICAgICAgPC9kaXY+XG4gICAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdmlnYXRpb25fX25hdlwiPlxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2aWdhdGlvbl9fbGlzdFwiPlxuICAgICAgICAgIHtwYWdlcy5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICAgIGtleT17aXRlbS5wYXRobmFtZX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3JvdXRlci5wYXRobmFtZSA9PT0gaXRlbS5wYXRobmFtZSA/IFwiYWN0aXZlXCIgOiBcIlwifVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17aXRlbS5wYXRobmFtZX0+e2l0ZW0ubmFtZX08L0xpbms+XG4gICAgICAgICAgICAgICAge2l0ZW0ucGF0aG5hbWUuaW5jbHVkZXMoXCJzaG9wXCIpICYmIChcbiAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BzaG9wcGluZy1jYXJ0LWljb24tY29udGFpbmVyICR7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRlID8gXCJhbmltYXRpb25cIiA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgICAgICAgICBvbkFuaW1hdGlvbkVuZD17KCkgPT4gc2V0QW5pbWF0ZShmYWxzZSl9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8QWRkU2hvcHBpbmdDYXJ0SWNvbiAvPlxuICAgICAgICAgICAgICAgICAgICAgIDxwPnt0b3RhbFF1YW50aXR5fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC91bD5cbiAgICAgIDwvbmF2PlxuXG4gICAgICB7LyogPGJ1dHRvblxuICAgICAgICBjbGFzc05hbWU9e1wibWVudS1pY29uXCJ9XG4gICAgICAgIG9uQ2xpY2s9e2hhbmRsZU9wZW5NZW51fVxuICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBgJHt3aW5kb3dTaXplLndpZHRoIDwgNDgwID8gXCJmbGV4XCIgOiBcIm5vbmVcIn1gIH19XG4gICAgICA+XG4gICAgICAgIDxNZW51SWNvbiBmb250U2l6ZT1cImluaGVyaXRcIiAvPlxuICAgICAgPC9idXR0b24+ICovfVxuICAgIDwvaGVhZGVyPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG4iXSwibmFtZXMiOlsiTGluayIsInVzZVJvdXRlciIsIkFkZFNob3BwaW5nQ2FydEljb24iLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsInVzZUdsb2JhbENvbnRleHQiLCJIZWFkZXIiLCJyb3V0ZXIiLCJ0b3RhbFF1YW50aXR5IiwiYW5pbWF0ZSIsInNldEFuaW1hdGUiLCJpc01vdW50aW5nIiwid2luZG93U2l6ZSIsInNldFdpbmRvd1NpemUiLCJ3aWR0aCIsImhlaWdodCIsImhhbmRsZVJlc2l6ZSIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjdXJyZW50IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInBhZ2VzIiwicGF0aG5hbWUiLCJuYW1lIiwiaGVhZGVyIiwiY2xhc3NOYW1lIiwiaW5wdXQiLCJ0eXBlIiwiaWQiLCJsYWJlbCIsImh0bWxGb3IiLCJkaXYiLCJwIiwibmF2IiwidWwiLCJtYXAiLCJpdGVtIiwibGkiLCJocmVmIiwiaW5jbHVkZXMiLCJvbkFuaW1hdGlvbkVuZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/layout/header.tsx\n"));

/***/ })

});