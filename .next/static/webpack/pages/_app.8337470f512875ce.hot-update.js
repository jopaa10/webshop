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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _header_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.scss */ \"./src/components/layout/header.scss\");\n/* harmony import */ var _header_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_header_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _mui_icons_material_AddShoppingCart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/icons-material/AddShoppingCart */ \"./node_modules/@mui/icons-material/AddShoppingCart.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _context_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/context/context */ \"./src/context/context.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n//import MenuIcon from \"@mui/icons-material/Menu\";\n\n\n\nfunction Header() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const { totalQuantity } = (0,_context_context__WEBPACK_IMPORTED_MODULE_5__.useGlobalContext)();\n    //const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);\n    const [isCheckboxOpen, setIsCheckboxOpen] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    const [animate, setAnimate] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    const isMounting = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(true);\n    const [windowSize, setWindowSize] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)({\n        width: 0,\n        height: 0\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        // only execute all the code below in client side\n        // Handler to call on window resize\n        function handleResize() {\n            // Set window width/height to state\n            setWindowSize({\n                width: window.innerWidth,\n                height: window.innerHeight\n            });\n        }\n        window.addEventListener(\"resize\", handleResize);\n        if (isMounting.current) {\n            isMounting.current = false;\n        } else {\n            setAnimate(true);\n        }\n        // Call handler right away so state gets updated with initial window size\n        handleResize();\n        return ()=>window.removeEventListener(\"resize\", handleResize);\n    }, [\n        totalQuantity\n    ]);\n    const pages = [\n        {\n            pathname: \"/\",\n            name: \"Home\"\n        },\n        {\n            pathname: \"/favorites\",\n            name: \"Favorites\"\n        },\n        {\n            pathname: \"/shop\",\n            name: \"Shop\"\n        }\n    ];\n    const handleOpenNav = ()=>{\n        var _document;\n        const checkbox = (_document = document) === null || _document === void 0 ? void 0 : _document.getElementById(\"navi-toggle\");\n        if (checkbox === null || checkbox === void 0 ? void 0 : checkbox.checked) {\n            setIsCheckboxOpen(true);\n        } else {\n            setIsCheckboxOpen(false);\n        }\n    };\n    console.log(isCheckboxOpen);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: \"navigation\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"logo\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"Webshop\"\n                }, void 0, false, {\n                    fileName: \"/Users/josipaznaor/Documents/Learning/webshop - nextjs/webshop/src/components/layout/header.tsx\",\n                    lineNumber: 86,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/josipaznaor/Documents/Learning/webshop - nextjs/webshop/src/components/layout/header.tsx\",\n                lineNumber: 85,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"checkbox\",\n                className: \"navigation__checkbox\",\n                id: \"navi-toggle\",\n                onClick: handleOpenNav\n            }, void 0, false, {\n                fileName: \"/Users/josipaznaor/Documents/Learning/webshop - nextjs/webshop/src/components/layout/header.tsx\",\n                lineNumber: 89,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                htmlFor: \"navi-toggle\",\n                className: \"navigation__button\",\n                children: \"Menu\"\n            }, void 0, false, {\n                fileName: \"/Users/josipaznaor/Documents/Learning/webshop - nextjs/webshop/src/components/layout/header.tsx\",\n                lineNumber: 95,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"navigation__background\",\n                children: \"\\xa0\"\n            }, void 0, false, {\n                fileName: \"/Users/josipaznaor/Documents/Learning/webshop - nextjs/webshop/src/components/layout/header.tsx\",\n                lineNumber: 98,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                className: \"navigation__nav \",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    className: \"navigation__list\",\n                    children: pages.map((item)=>{\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: router.pathname === item.pathname ? \"active\" : \"\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    href: item.pathname,\n                                    children: item.name\n                                }, void 0, false, {\n                                    fileName: \"/Users/josipaznaor/Documents/Learning/webshop - nextjs/webshop/src/components/layout/header.tsx\",\n                                    lineNumber: 108,\n                                    columnNumber: 17\n                                }, this),\n                                item.pathname.includes(\"shop\") && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"shopping-cart-icon-container \".concat(animate ? \"animation\" : \"\"),\n                                        onAnimationEnd: ()=>setAnimate(false),\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_AddShoppingCart__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                                                fileName: \"/Users/josipaznaor/Documents/Learning/webshop - nextjs/webshop/src/components/layout/header.tsx\",\n                                                lineNumber: 117,\n                                                columnNumber: 23\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                children: totalQuantity\n                                            }, void 0, false, {\n                                                fileName: \"/Users/josipaznaor/Documents/Learning/webshop - nextjs/webshop/src/components/layout/header.tsx\",\n                                                lineNumber: 118,\n                                                columnNumber: 23\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/josipaznaor/Documents/Learning/webshop - nextjs/webshop/src/components/layout/header.tsx\",\n                                        lineNumber: 111,\n                                        columnNumber: 21\n                                    }, this)\n                                }, void 0, false)\n                            ]\n                        }, item.pathname, true, {\n                            fileName: \"/Users/josipaznaor/Documents/Learning/webshop - nextjs/webshop/src/components/layout/header.tsx\",\n                            lineNumber: 104,\n                            columnNumber: 15\n                        }, this);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/josipaznaor/Documents/Learning/webshop - nextjs/webshop/src/components/layout/header.tsx\",\n                    lineNumber: 101,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/josipaznaor/Documents/Learning/webshop - nextjs/webshop/src/components/layout/header.tsx\",\n                lineNumber: 100,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/josipaznaor/Documents/Learning/webshop - nextjs/webshop/src/components/layout/header.tsx\",\n        lineNumber: 84,\n        columnNumber: 5\n    }, this);\n}\n_s(Header, \"ZsmUveO1pRYFsYKa0AGn9NxJyuI=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter,\n        _context_context__WEBPACK_IMPORTED_MODULE_5__.useGlobalContext\n    ];\n});\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OERBQWdCQTs7O0tBRm5DQztBQW1IVCwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9sYXlvdXQvaGVhZGVyLnRzeD80YWMyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4vaGVhZGVyLnNjc3NcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG4vL2ltcG9ydCBNZW51SWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9NZW51XCI7XG5pbXBvcnQgQWRkU2hvcHBpbmdDYXJ0SWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9BZGRTaG9wcGluZ0NhcnRcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlR2xvYmFsQ29udGV4dCB9IGZyb20gXCJAL2NvbnRleHQvY29udGV4dFwiO1xuXG5pbnRlcmZhY2UgUGFnZXMge1xuICBwYXRobmFtZTogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIGljb24/OiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIEhlYWRlcigpIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHsgdG90YWxRdWFudGl0eSB9ID0gdXNlR2xvYmFsQ29udGV4dCgpO1xuXG4gIC8vY29uc3QgW2lzTWVudU9wZW4sIHNldElzTWVudU9wZW5dID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuICBjb25zdCBbaXNDaGVja2JveE9wZW4sIHNldElzQ2hlY2tib3hPcGVuXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcbiAgY29uc3QgW2FuaW1hdGUsIHNldEFuaW1hdGVdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuICBjb25zdCBpc01vdW50aW5nID0gdXNlUmVmKHRydWUpO1xuXG4gIGNvbnN0IFt3aW5kb3dTaXplLCBzZXRXaW5kb3dTaXplXSA9IHVzZVN0YXRlKHtcbiAgICB3aWR0aDogMCxcbiAgICBoZWlnaHQ6IDAsXG4gIH0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gb25seSBleGVjdXRlIGFsbCB0aGUgY29kZSBiZWxvdyBpbiBjbGllbnQgc2lkZVxuICAgIC8vIEhhbmRsZXIgdG8gY2FsbCBvbiB3aW5kb3cgcmVzaXplXG4gICAgZnVuY3Rpb24gaGFuZGxlUmVzaXplKCkge1xuICAgICAgLy8gU2V0IHdpbmRvdyB3aWR0aC9oZWlnaHQgdG8gc3RhdGVcbiAgICAgIHNldFdpbmRvd1NpemUoe1xuICAgICAgICB3aWR0aDogd2luZG93LmlubmVyV2lkdGgsXG4gICAgICAgIGhlaWdodDogd2luZG93LmlubmVySGVpZ2h0LFxuICAgICAgfSk7XG4gICAgfVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGhhbmRsZVJlc2l6ZSk7XG5cbiAgICBpZiAoaXNNb3VudGluZy5jdXJyZW50KSB7XG4gICAgICBpc01vdW50aW5nLmN1cnJlbnQgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0QW5pbWF0ZSh0cnVlKTtcbiAgICB9XG5cbiAgICAvLyBDYWxsIGhhbmRsZXIgcmlnaHQgYXdheSBzbyBzdGF0ZSBnZXRzIHVwZGF0ZWQgd2l0aCBpbml0aWFsIHdpbmRvdyBzaXplXG4gICAgaGFuZGxlUmVzaXplKCk7XG5cbiAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgaGFuZGxlUmVzaXplKTtcbiAgfSwgW3RvdGFsUXVhbnRpdHldKTtcblxuICBjb25zdCBwYWdlczogUGFnZXNbXSA9IFtcbiAgICB7XG4gICAgICBwYXRobmFtZTogXCIvXCIsXG4gICAgICBuYW1lOiBcIkhvbWVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHBhdGhuYW1lOiBcIi9mYXZvcml0ZXNcIixcbiAgICAgIG5hbWU6IFwiRmF2b3JpdGVzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBwYXRobmFtZTogXCIvc2hvcFwiLFxuICAgICAgbmFtZTogXCJTaG9wXCIsXG4gICAgfSxcbiAgXTtcblxuICBjb25zdCBoYW5kbGVPcGVuTmF2ID0gKCkgPT4ge1xuICAgIGNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQ/LmdldEVsZW1lbnRCeUlkKFxuICAgICAgXCJuYXZpLXRvZ2dsZVwiXG4gICAgKSBhcyBIVE1MSW5wdXRFbGVtZW50IHwgbnVsbDtcblxuICAgIGlmIChjaGVja2JveD8uY2hlY2tlZCkge1xuICAgICAgc2V0SXNDaGVja2JveE9wZW4odHJ1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldElzQ2hlY2tib3hPcGVuKGZhbHNlKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc29sZS5sb2coaXNDaGVja2JveE9wZW4pO1xuXG4gIHJldHVybiAoXG4gICAgPGhlYWRlciBjbGFzc05hbWU9XCJuYXZpZ2F0aW9uXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ29cIj5cbiAgICAgICAgPHA+V2Vic2hvcDwvcD5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8aW5wdXRcbiAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgY2xhc3NOYW1lPVwibmF2aWdhdGlvbl9fY2hlY2tib3hcIlxuICAgICAgICBpZD1cIm5hdmktdG9nZ2xlXCJcbiAgICAgICAgb25DbGljaz17aGFuZGxlT3Blbk5hdn1cbiAgICAgIC8+XG4gICAgICA8bGFiZWwgaHRtbEZvcj1cIm5hdmktdG9nZ2xlXCIgY2xhc3NOYW1lPVwibmF2aWdhdGlvbl9fYnV0dG9uXCI+XG4gICAgICAgIE1lbnVcbiAgICAgIDwvbGFiZWw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YG5hdmlnYXRpb25fX2JhY2tncm91bmRgfT4mbmJzcDs8L2Rpdj5cblxuICAgICAgPG5hdiBjbGFzc05hbWU9e2BuYXZpZ2F0aW9uX19uYXYgYH0+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXZpZ2F0aW9uX19saXN0XCI+XG4gICAgICAgICAge3BhZ2VzLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgICAga2V5PXtpdGVtLnBhdGhuYW1lfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17cm91dGVyLnBhdGhuYW1lID09PSBpdGVtLnBhdGhuYW1lID8gXCJhY3RpdmVcIiA6IFwiXCJ9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtpdGVtLnBhdGhuYW1lfT57aXRlbS5uYW1lfTwvTGluaz5cbiAgICAgICAgICAgICAgICB7aXRlbS5wYXRobmFtZS5pbmNsdWRlcyhcInNob3BcIikgJiYgKFxuICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHNob3BwaW5nLWNhcnQtaWNvbi1jb250YWluZXIgJHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGUgPyBcImFuaW1hdGlvblwiIDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICAgICAgICAgIG9uQW5pbWF0aW9uRW5kPXsoKSA9PiBzZXRBbmltYXRlKGZhbHNlKX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxBZGRTaG9wcGluZ0NhcnRJY29uIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPHA+e3RvdGFsUXVhbnRpdHl9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pfVxuICAgICAgICA8L3VsPlxuICAgICAgPC9uYXY+XG4gICAgPC9oZWFkZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiJdLCJuYW1lcyI6WyJMaW5rIiwidXNlUm91dGVyIiwiQWRkU2hvcHBpbmdDYXJ0SWNvbiIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwidXNlR2xvYmFsQ29udGV4dCIsIkhlYWRlciIsInJvdXRlciIsInRvdGFsUXVhbnRpdHkiLCJpc0NoZWNrYm94T3BlbiIsInNldElzQ2hlY2tib3hPcGVuIiwiYW5pbWF0ZSIsInNldEFuaW1hdGUiLCJpc01vdW50aW5nIiwid2luZG93U2l6ZSIsInNldFdpbmRvd1NpemUiLCJ3aWR0aCIsImhlaWdodCIsImhhbmRsZVJlc2l6ZSIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjdXJyZW50IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInBhZ2VzIiwicGF0aG5hbWUiLCJuYW1lIiwiaGFuZGxlT3Blbk5hdiIsImRvY3VtZW50IiwiY2hlY2tib3giLCJnZXRFbGVtZW50QnlJZCIsImNoZWNrZWQiLCJjb25zb2xlIiwibG9nIiwiaGVhZGVyIiwiY2xhc3NOYW1lIiwiZGl2IiwicCIsImlucHV0IiwidHlwZSIsImlkIiwib25DbGljayIsImxhYmVsIiwiaHRtbEZvciIsIm5hdiIsInVsIiwibWFwIiwiaXRlbSIsImxpIiwiaHJlZiIsImluY2x1ZGVzIiwib25BbmltYXRpb25FbmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/layout/header.tsx\n"));

/***/ })

});