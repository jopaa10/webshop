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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _header_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.scss */ \"./src/components/layout/header.scss\");\n/* harmony import */ var _header_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_header_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _mui_icons_material_AddShoppingCart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/icons-material/AddShoppingCart */ \"./node_modules/@mui/icons-material/AddShoppingCart.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _context_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/context/context */ \"./src/context/context.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n//import MenuIcon from \"@mui/icons-material/Menu\";\n\n\n\nfunction Header() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const { totalQuantity } = (0,_context_context__WEBPACK_IMPORTED_MODULE_5__.useGlobalContext)();\n    //const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);\n    //const [isCheckboxOpen, setIsCheckboxOpen] = useState<boolean>(false);\n    const [animate, setAnimate] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    const isMounting = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(true);\n    const [windowSize, setWindowSize] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)({\n        width: 0,\n        height: 0\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        // only execute all the code below in client side\n        // Handler to call on window resize\n        function handleResize() {\n            // Set window width/height to state\n            setWindowSize({\n                width: window.innerWidth,\n                height: window.innerHeight\n            });\n        }\n        window.addEventListener(\"resize\", handleResize);\n        if (isMounting.current) {\n            isMounting.current = false;\n        } else {\n            setAnimate(true);\n        }\n        // Call handler right away so state gets updated with initial window size\n        handleResize();\n        return ()=>window.removeEventListener(\"resize\", handleResize);\n    }, [\n        totalQuantity\n    ]);\n    const pages = [\n        {\n            pathname: \"/\",\n            name: \"Home\"\n        },\n        {\n            pathname: \"/favorites\",\n            name: \"Favorites\"\n        },\n        {\n            pathname: \"/shop\",\n            name: \"Shop\"\n        }\n    ];\n    const handleOpenNav = ()=>{\n        var _document;\n        const navActive = (_document = document) === null || _document === void 0 ? void 0 : _document.getElementById(\"nav\");\n        if (navActive) {\n            navActive.classList.toggle(\".active\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: \"navigation\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"logo\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"Webshop\"\n                }, void 0, false, {\n                    fileName: \"/Users/josipaznaor/Documents/Learning/webshop - nextjs/webshop/src/components/layout/header.tsx\",\n                    lineNumber: 80,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/josipaznaor/Documents/Learning/webshop - nextjs/webshop/src/components/layout/header.tsx\",\n                lineNumber: 79,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"checkbox\",\n                className: \"navigation__checkbox\",\n                id: \"navi-toggle\",\n                onClick: handleOpenNav\n            }, void 0, false, {\n                fileName: \"/Users/josipaznaor/Documents/Learning/webshop - nextjs/webshop/src/components/layout/header.tsx\",\n                lineNumber: 83,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                htmlFor: \"navi-toggle\",\n                className: \"navigation__button\",\n                children: \"Menu\"\n            }, void 0, false, {\n                fileName: \"/Users/josipaznaor/Documents/Learning/webshop - nextjs/webshop/src/components/layout/header.tsx\",\n                lineNumber: 89,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"navigation__background\",\n                children: \"\\xa0\"\n            }, void 0, false, {\n                fileName: \"/Users/josipaznaor/Documents/Learning/webshop - nextjs/webshop/src/components/layout/header.tsx\",\n                lineNumber: 92,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                className: \"navigation__nav\",\n                id: \"nav\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    className: \"navigation__list\",\n                    children: pages.map((item)=>{\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: router.pathname === item.pathname ? \"active\" : \"\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    href: item.pathname,\n                                    children: item.name\n                                }, void 0, false, {\n                                    fileName: \"/Users/josipaznaor/Documents/Learning/webshop - nextjs/webshop/src/components/layout/header.tsx\",\n                                    lineNumber: 102,\n                                    columnNumber: 17\n                                }, this),\n                                item.pathname.includes(\"shop\") && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"shopping-cart-icon-container \".concat(animate ? \"animation\" : \"\"),\n                                        onAnimationEnd: ()=>setAnimate(false),\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_AddShoppingCart__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                                                fileName: \"/Users/josipaznaor/Documents/Learning/webshop - nextjs/webshop/src/components/layout/header.tsx\",\n                                                lineNumber: 111,\n                                                columnNumber: 23\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                children: totalQuantity\n                                            }, void 0, false, {\n                                                fileName: \"/Users/josipaznaor/Documents/Learning/webshop - nextjs/webshop/src/components/layout/header.tsx\",\n                                                lineNumber: 112,\n                                                columnNumber: 23\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/josipaznaor/Documents/Learning/webshop - nextjs/webshop/src/components/layout/header.tsx\",\n                                        lineNumber: 105,\n                                        columnNumber: 21\n                                    }, this)\n                                }, void 0, false)\n                            ]\n                        }, item.pathname, true, {\n                            fileName: \"/Users/josipaznaor/Documents/Learning/webshop - nextjs/webshop/src/components/layout/header.tsx\",\n                            lineNumber: 98,\n                            columnNumber: 15\n                        }, this);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/josipaznaor/Documents/Learning/webshop - nextjs/webshop/src/components/layout/header.tsx\",\n                    lineNumber: 95,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/josipaznaor/Documents/Learning/webshop - nextjs/webshop/src/components/layout/header.tsx\",\n                lineNumber: 94,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/josipaznaor/Documents/Learning/webshop - nextjs/webshop/src/components/layout/header.tsx\",\n        lineNumber: 78,\n        columnNumber: 5\n    }, this);\n}\n_s(Header, \"gTbhePEzpZl1mqCqmfHnRklClps=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter,\n        _context_context__WEBPACK_IMPORTED_MODULE_5__.useGlobalContext\n    ];\n});\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bnRzL2xheW91dC9oZWFkZXIudHN4PzRhYzIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi9oZWFkZXIuc2Nzc1wiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cbi8vaW1wb3J0IE1lbnVJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL01lbnVcIjtcbmltcG9ydCBBZGRTaG9wcGluZ0NhcnRJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL0FkZFNob3BwaW5nQ2FydFwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VHbG9iYWxDb250ZXh0IH0gZnJvbSBcIkAvY29udGV4dC9jb250ZXh0XCI7XG5cbmludGVyZmFjZSBQYWdlcyB7XG4gIHBhdGhuYW1lOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbiAgaWNvbj86IHN0cmluZztcbn1cblxuZnVuY3Rpb24gSGVhZGVyKCkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgeyB0b3RhbFF1YW50aXR5IH0gPSB1c2VHbG9iYWxDb250ZXh0KCk7XG5cbiAgLy9jb25zdCBbaXNNZW51T3Blbiwgc2V0SXNNZW51T3Blbl0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG4gIC8vY29uc3QgW2lzQ2hlY2tib3hPcGVuLCBzZXRJc0NoZWNrYm94T3Blbl0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG4gIGNvbnN0IFthbmltYXRlLCBzZXRBbmltYXRlXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcbiAgY29uc3QgaXNNb3VudGluZyA9IHVzZVJlZih0cnVlKTtcblxuICBjb25zdCBbd2luZG93U2l6ZSwgc2V0V2luZG93U2l6ZV0gPSB1c2VTdGF0ZSh7XG4gICAgd2lkdGg6IDAsXG4gICAgaGVpZ2h0OiAwLFxuICB9KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIG9ubHkgZXhlY3V0ZSBhbGwgdGhlIGNvZGUgYmVsb3cgaW4gY2xpZW50IHNpZGVcbiAgICAvLyBIYW5kbGVyIHRvIGNhbGwgb24gd2luZG93IHJlc2l6ZVxuICAgIGZ1bmN0aW9uIGhhbmRsZVJlc2l6ZSgpIHtcbiAgICAgIC8vIFNldCB3aW5kb3cgd2lkdGgvaGVpZ2h0IHRvIHN0YXRlXG4gICAgICBzZXRXaW5kb3dTaXplKHtcbiAgICAgICAgd2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLFxuICAgICAgICBoZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCxcbiAgICAgIH0pO1xuICAgIH1cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBoYW5kbGVSZXNpemUpO1xuXG4gICAgaWYgKGlzTW91bnRpbmcuY3VycmVudCkge1xuICAgICAgaXNNb3VudGluZy5jdXJyZW50ID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldEFuaW1hdGUodHJ1ZSk7XG4gICAgfVxuXG4gICAgLy8gQ2FsbCBoYW5kbGVyIHJpZ2h0IGF3YXkgc28gc3RhdGUgZ2V0cyB1cGRhdGVkIHdpdGggaW5pdGlhbCB3aW5kb3cgc2l6ZVxuICAgIGhhbmRsZVJlc2l6ZSgpO1xuXG4gICAgcmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGhhbmRsZVJlc2l6ZSk7XG4gIH0sIFt0b3RhbFF1YW50aXR5XSk7XG5cbiAgY29uc3QgcGFnZXM6IFBhZ2VzW10gPSBbXG4gICAge1xuICAgICAgcGF0aG5hbWU6IFwiL1wiLFxuICAgICAgbmFtZTogXCJIb21lXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBwYXRobmFtZTogXCIvZmF2b3JpdGVzXCIsXG4gICAgICBuYW1lOiBcIkZhdm9yaXRlc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgcGF0aG5hbWU6IFwiL3Nob3BcIixcbiAgICAgIG5hbWU6IFwiU2hvcFwiLFxuICAgIH0sXG4gIF07XG5cbiAgY29uc3QgaGFuZGxlT3Blbk5hdiA9ICgpID0+IHtcbiAgICBjb25zdCBuYXZBY3RpdmUgPSBkb2N1bWVudD8uZ2V0RWxlbWVudEJ5SWQoXCJuYXZcIik7XG5cbiAgICBpZiAobmF2QWN0aXZlKSB7XG4gICAgICBuYXZBY3RpdmUuY2xhc3NMaXN0LnRvZ2dsZShcIi5hY3RpdmVcIik7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGhlYWRlciBjbGFzc05hbWU9XCJuYXZpZ2F0aW9uXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ29cIj5cbiAgICAgICAgPHA+V2Vic2hvcDwvcD5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8aW5wdXRcbiAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgY2xhc3NOYW1lPVwibmF2aWdhdGlvbl9fY2hlY2tib3hcIlxuICAgICAgICBpZD1cIm5hdmktdG9nZ2xlXCJcbiAgICAgICAgb25DbGljaz17aGFuZGxlT3Blbk5hdn1cbiAgICAgIC8+XG4gICAgICA8bGFiZWwgaHRtbEZvcj1cIm5hdmktdG9nZ2xlXCIgY2xhc3NOYW1lPVwibmF2aWdhdGlvbl9fYnV0dG9uXCI+XG4gICAgICAgIE1lbnVcbiAgICAgIDwvbGFiZWw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YG5hdmlnYXRpb25fX2JhY2tncm91bmRgfT4mbmJzcDs8L2Rpdj5cblxuICAgICAgPG5hdiBjbGFzc05hbWU9e2BuYXZpZ2F0aW9uX19uYXZgfSBpZD1cIm5hdlwiPlxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2aWdhdGlvbl9fbGlzdFwiPlxuICAgICAgICAgIHtwYWdlcy5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICAgIGtleT17aXRlbS5wYXRobmFtZX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3JvdXRlci5wYXRobmFtZSA9PT0gaXRlbS5wYXRobmFtZSA/IFwiYWN0aXZlXCIgOiBcIlwifVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17aXRlbS5wYXRobmFtZX0+e2l0ZW0ubmFtZX08L0xpbms+XG4gICAgICAgICAgICAgICAge2l0ZW0ucGF0aG5hbWUuaW5jbHVkZXMoXCJzaG9wXCIpICYmIChcbiAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BzaG9wcGluZy1jYXJ0LWljb24tY29udGFpbmVyICR7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRlID8gXCJhbmltYXRpb25cIiA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgICAgICAgICBvbkFuaW1hdGlvbkVuZD17KCkgPT4gc2V0QW5pbWF0ZShmYWxzZSl9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8QWRkU2hvcHBpbmdDYXJ0SWNvbiAvPlxuICAgICAgICAgICAgICAgICAgICAgIDxwPnt0b3RhbFF1YW50aXR5fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC91bD5cbiAgICAgIDwvbmF2PlxuICAgIDwvaGVhZGVyPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG4iXSwibmFtZXMiOlsiTGluayIsInVzZVJvdXRlciIsIkFkZFNob3BwaW5nQ2FydEljb24iLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsInVzZUdsb2JhbENvbnRleHQiLCJIZWFkZXIiLCJyb3V0ZXIiLCJ0b3RhbFF1YW50aXR5IiwiYW5pbWF0ZSIsInNldEFuaW1hdGUiLCJpc01vdW50aW5nIiwid2luZG93U2l6ZSIsInNldFdpbmRvd1NpemUiLCJ3aWR0aCIsImhlaWdodCIsImhhbmRsZVJlc2l6ZSIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjdXJyZW50IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInBhZ2VzIiwicGF0aG5hbWUiLCJuYW1lIiwiaGFuZGxlT3Blbk5hdiIsImRvY3VtZW50IiwibmF2QWN0aXZlIiwiZ2V0RWxlbWVudEJ5SWQiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJoZWFkZXIiLCJjbGFzc05hbWUiLCJkaXYiLCJwIiwiaW5wdXQiLCJ0eXBlIiwiaWQiLCJvbkNsaWNrIiwibGFiZWwiLCJodG1sRm9yIiwibmF2IiwidWwiLCJtYXAiLCJpdGVtIiwibGkiLCJocmVmIiwiaW5jbHVkZXMiLCJvbkFuaW1hdGlvbkVuZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/layout/header.tsx\n"));

/***/ })

});