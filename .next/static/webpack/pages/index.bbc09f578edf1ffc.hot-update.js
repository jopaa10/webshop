"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/home/card.tsx":
/*!**************************************!*\
  !*** ./src/components/home/card.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _card_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card.scss */ \"./src/components/home/card.scss\");\n/* harmony import */ var _card_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_card_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_icons_material_TurnedInNot__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/icons-material/TurnedInNot */ \"./node_modules/@mui/icons-material/TurnedInNot.js\");\n/* harmony import */ var _mui_icons_material_TurnedIn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/icons-material/TurnedIn */ \"./node_modules/@mui/icons-material/TurnedIn.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _addToCardButton_addButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../addToCardButton/addButton */ \"./src/components/addToCardButton/addButton.tsx\");\n/* harmony import */ var _context_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/context/context */ \"./src/context/context.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n// eslint-disable-next-line @typescript-eslint/no-explicit-any\nfunction Card(props) {\n    _s();\n    const { detail, id, image, price, title } = props.card;\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    // const [toggleFavoriteIcon, setToggleFavoriteIcon] = useState<boolean>(false);\n    // const [activeIdFavoriteIcon, setActiveIdFavoriteIcon] = useState<\n    //   (number | null)[]\n    // >([]);\n    const { favorites, addToFavorites, toggleFavoriteIcon } = (0,_context_context__WEBPACK_IMPORTED_MODULE_5__.useGlobalContext)();\n    console.log(favorites);\n    const handleNavigateToDetails = (id)=>{\n        router.push(\"/\".concat(id));\n    };\n    // const handleAddToFavorites = (id: number) => {\n    //   // eslint-disable-next-line @typescript-eslint/no-explicit-any\n    //   const favoriteId = activeIdFavoriteIcon.find((item: any) => item.id === id);\n    //   if (!favoriteId) {\n    //     setActiveIdFavoriteIcon(activeIdFavoriteIcon.concat(id));\n    //   }\n    //   activeIdFavoriteIcon.pop();\n    //   setToggleFavoriteIcon(!toggleFavoriteIcon);\n    // };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"card\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \"card__favorite-icon\",\n                onClick: ()=>addToFavorites(id),\n                children: toggleFavoriteIcon && favorites && favorites.includes(id) ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_TurnedIn__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                    color: \"inherit\",\n                    fontSize: \"inherit\"\n                }, void 0, false, {\n                    fileName: \"/Users/josipaznaor/Documents/Learning/webshop - nextjs/webshop/src/components/home/card.tsx\",\n                    lineNumber: 48,\n                    columnNumber: 11\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_TurnedInNot__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                    color: \"inherit\",\n                    fontSize: \"inherit\"\n                }, void 0, false, {\n                    fileName: \"/Users/josipaznaor/Documents/Learning/webshop - nextjs/webshop/src/components/home/card.tsx\",\n                    lineNumber: 50,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/josipaznaor/Documents/Learning/webshop - nextjs/webshop/src/components/home/card.tsx\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                src: image,\n                alt: title,\n                width: 150,\n                height: 150\n            }, void 0, false, {\n                fileName: \"/Users/josipaznaor/Documents/Learning/webshop - nextjs/webshop/src/components/home/card.tsx\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                onClick: ()=>handleNavigateToDetails(id),\n                className: \"card__title\",\n                children: title\n            }, void 0, false, {\n                fileName: \"/Users/josipaznaor/Documents/Learning/webshop - nextjs/webshop/src/components/home/card.tsx\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"card__detail\",\n                children: detail\n            }, void 0, false, {\n                fileName: \"/Users/josipaznaor/Documents/Learning/webshop - nextjs/webshop/src/components/home/card.tsx\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"card__price\",\n                children: [\n                    price,\n                    \" $\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/josipaznaor/Documents/Learning/webshop - nextjs/webshop/src/components/home/card.tsx\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_addToCardButton_addButton__WEBPACK_IMPORTED_MODULE_4__.AddButton, {\n                buttonClass: \"card__shopping-icon\",\n                text: \"Add\"\n            }, void 0, false, {\n                fileName: \"/Users/josipaznaor/Documents/Learning/webshop - nextjs/webshop/src/components/home/card.tsx\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, this)\n        ]\n    }, id, true, {\n        fileName: \"/Users/josipaznaor/Documents/Learning/webshop - nextjs/webshop/src/components/home/card.tsx\",\n        lineNumber: 42,\n        columnNumber: 5\n    }, this);\n}\n_s(Card, \"DwGuSmWow8WWTr/y1QrtRV/GL0Q=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter,\n        _context_context__WEBPACK_IMPORTED_MODULE_5__.useGlobalContext\n    ];\n});\n_c = Card;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Card);\nvar _c;\n$RefreshReg$(_c, \"Card\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9ob21lL2NhcmQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFxQjtBQUVVO0FBRStCO0FBQ047QUFFWjtBQUNhO0FBQ0o7QUFFckQsOERBQThEO0FBQzlELFNBQVNNLEtBQUtDLEtBQVU7O0lBQ3RCLE1BQU0sRUFBRUMsTUFBTSxFQUFFQyxFQUFFLEVBQUVDLEtBQUssRUFBRUMsS0FBSyxFQUFFQyxLQUFLLEVBQUUsR0FBR0wsTUFBTU0sSUFBSTtJQUV0RCxNQUFNQyxTQUFTWCwwREFBU0E7SUFDeEIsZ0ZBQWdGO0lBQ2hGLG9FQUFvRTtJQUNwRSxzQkFBc0I7SUFDdEIsU0FBUztJQUVULE1BQU0sRUFBRVksU0FBUyxFQUFFQyxjQUFjLEVBQUVDLGtCQUFrQixFQUFFLEdBQUdaLGtFQUFnQkE7SUFFMUVhLFFBQVFDLEdBQUcsQ0FBQ0o7SUFFWixNQUFNSywwQkFBMEIsQ0FBQ1g7UUFDL0JLLE9BQU9PLElBQUksQ0FBQyxJQUFPLE9BQUhaO0lBQ2xCO0lBRUEsaURBQWlEO0lBQ2pELG1FQUFtRTtJQUNuRSxpRkFBaUY7SUFFakYsdUJBQXVCO0lBQ3ZCLGdFQUFnRTtJQUNoRSxNQUFNO0lBQ04sZ0NBQWdDO0lBQ2hDLGdEQUFnRDtJQUNoRCxLQUFLO0lBRUwscUJBQ0UsOERBQUNhO1FBQUlDLFdBQVc7OzBCQUNkLDhEQUFDQztnQkFDQ0QsV0FBVztnQkFDWEUsU0FBUyxJQUFNVCxlQUFlUDswQkFFN0JRLHNCQUFzQkYsYUFBYUEsVUFBVVcsUUFBUSxDQUFDakIsb0JBQ3JELDhEQUFDUCxvRUFBWUE7b0JBQUN5QixPQUFNO29CQUFVQyxVQUFTOzs7Ozt5Q0FFdkMsOERBQUMzQix1RUFBZUE7b0JBQUMwQixPQUFNO29CQUFVQyxVQUFTOzs7Ozs7Ozs7OzswQkFJOUMsOERBQUM1QixtREFBS0E7Z0JBQUM2QixLQUFLbkI7Z0JBQU9vQixLQUFLbEI7Z0JBQU9tQixPQUFPO2dCQUFLQyxRQUFROzs7Ozs7MEJBRW5ELDhEQUFDQztnQkFBRVIsU0FBUyxJQUFNTCx3QkFBd0JYO2dCQUFLYyxXQUFXOzBCQUN2RFg7Ozs7OzswQkFHSCw4REFBQ3NCO2dCQUFFWCxXQUFXOzBCQUFpQmY7Ozs7OzswQkFDL0IsOERBQUMwQjtnQkFBRVgsV0FBVzs7b0JBQWdCWjtvQkFBTTs7Ozs7OzswQkFDcEMsOERBQUNQLGlFQUFTQTtnQkFBQytCLGFBQWE7Z0JBQXVCQyxNQUFNOzs7Ozs7O09BcEIxQjNCOzs7OztBQXVCakM7R0FwRFNIOztRQUdRSCxzREFBU0E7UUFNa0NFLDhEQUFnQkE7OztLQVRuRUM7QUFzRFQsK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaG9tZS9jYXJkLnRzeD81NDg2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4vY2FyZC5zY3NzXCI7XG5cbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuXG5pbXBvcnQgVHVybmVkSW5Ob3RJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL1R1cm5lZEluTm90XCI7XG5pbXBvcnQgVHVybmVkSW5JY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL1R1cm5lZEluXCI7XG5cbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcbmltcG9ydCB7IEFkZEJ1dHRvbiB9IGZyb20gXCIuLi9hZGRUb0NhcmRCdXR0b24vYWRkQnV0dG9uXCI7XG5pbXBvcnQgeyB1c2VHbG9iYWxDb250ZXh0IH0gZnJvbSBcIkAvY29udGV4dC9jb250ZXh0XCI7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG5mdW5jdGlvbiBDYXJkKHByb3BzOiBhbnkpIHtcbiAgY29uc3QgeyBkZXRhaWwsIGlkLCBpbWFnZSwgcHJpY2UsIHRpdGxlIH0gPSBwcm9wcy5jYXJkO1xuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICAvLyBjb25zdCBbdG9nZ2xlRmF2b3JpdGVJY29uLCBzZXRUb2dnbGVGYXZvcml0ZUljb25dID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuICAvLyBjb25zdCBbYWN0aXZlSWRGYXZvcml0ZUljb24sIHNldEFjdGl2ZUlkRmF2b3JpdGVJY29uXSA9IHVzZVN0YXRlPFxuICAvLyAgIChudW1iZXIgfCBudWxsKVtdXG4gIC8vID4oW10pO1xuXG4gIGNvbnN0IHsgZmF2b3JpdGVzLCBhZGRUb0Zhdm9yaXRlcywgdG9nZ2xlRmF2b3JpdGVJY29uIH0gPSB1c2VHbG9iYWxDb250ZXh0KCk7XG5cbiAgY29uc29sZS5sb2coZmF2b3JpdGVzKTtcblxuICBjb25zdCBoYW5kbGVOYXZpZ2F0ZVRvRGV0YWlscyA9IChpZDogbnVtYmVyKSA9PiB7XG4gICAgcm91dGVyLnB1c2goYC8ke2lkfWApO1xuICB9O1xuXG4gIC8vIGNvbnN0IGhhbmRsZUFkZFRvRmF2b3JpdGVzID0gKGlkOiBudW1iZXIpID0+IHtcbiAgLy8gICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICAvLyAgIGNvbnN0IGZhdm9yaXRlSWQgPSBhY3RpdmVJZEZhdm9yaXRlSWNvbi5maW5kKChpdGVtOiBhbnkpID0+IGl0ZW0uaWQgPT09IGlkKTtcblxuICAvLyAgIGlmICghZmF2b3JpdGVJZCkge1xuICAvLyAgICAgc2V0QWN0aXZlSWRGYXZvcml0ZUljb24oYWN0aXZlSWRGYXZvcml0ZUljb24uY29uY2F0KGlkKSk7XG4gIC8vICAgfVxuICAvLyAgIGFjdGl2ZUlkRmF2b3JpdGVJY29uLnBvcCgpO1xuICAvLyAgIHNldFRvZ2dsZUZhdm9yaXRlSWNvbighdG9nZ2xlRmF2b3JpdGVJY29uKTtcbiAgLy8gfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtcImNhcmRcIn0ga2V5PXtpZH0+XG4gICAgICA8c3BhblxuICAgICAgICBjbGFzc05hbWU9e1wiY2FyZF9fZmF2b3JpdGUtaWNvblwifVxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBhZGRUb0Zhdm9yaXRlcyhpZCl9XG4gICAgICA+XG4gICAgICAgIHt0b2dnbGVGYXZvcml0ZUljb24gJiYgZmF2b3JpdGVzICYmIGZhdm9yaXRlcy5pbmNsdWRlcyhpZCkgPyAoXG4gICAgICAgICAgPFR1cm5lZEluSWNvbiBjb2xvcj1cImluaGVyaXRcIiBmb250U2l6ZT1cImluaGVyaXRcIiAvPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxUdXJuZWRJbk5vdEljb24gY29sb3I9XCJpbmhlcml0XCIgZm9udFNpemU9XCJpbmhlcml0XCIgLz5cbiAgICAgICAgKX1cbiAgICAgIDwvc3Bhbj5cblxuICAgICAgPEltYWdlIHNyYz17aW1hZ2V9IGFsdD17dGl0bGV9IHdpZHRoPXsxNTB9IGhlaWdodD17MTUwfSAvPlxuXG4gICAgICA8YSBvbkNsaWNrPXsoKSA9PiBoYW5kbGVOYXZpZ2F0ZVRvRGV0YWlscyhpZCl9IGNsYXNzTmFtZT17XCJjYXJkX190aXRsZVwifT5cbiAgICAgICAge3RpdGxlfVxuICAgICAgPC9hPlxuXG4gICAgICA8cCBjbGFzc05hbWU9e1wiY2FyZF9fZGV0YWlsXCJ9PntkZXRhaWx9PC9wPlxuICAgICAgPHAgY2xhc3NOYW1lPXtcImNhcmRfX3ByaWNlXCJ9PntwcmljZX0gJDwvcD5cbiAgICAgIDxBZGRCdXR0b24gYnV0dG9uQ2xhc3M9e1wiY2FyZF9fc2hvcHBpbmctaWNvblwifSB0ZXh0PXtcIkFkZFwifSAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBDYXJkO1xuIl0sIm5hbWVzIjpbIkltYWdlIiwiVHVybmVkSW5Ob3RJY29uIiwiVHVybmVkSW5JY29uIiwidXNlUm91dGVyIiwiQWRkQnV0dG9uIiwidXNlR2xvYmFsQ29udGV4dCIsIkNhcmQiLCJwcm9wcyIsImRldGFpbCIsImlkIiwiaW1hZ2UiLCJwcmljZSIsInRpdGxlIiwiY2FyZCIsInJvdXRlciIsImZhdm9yaXRlcyIsImFkZFRvRmF2b3JpdGVzIiwidG9nZ2xlRmF2b3JpdGVJY29uIiwiY29uc29sZSIsImxvZyIsImhhbmRsZU5hdmlnYXRlVG9EZXRhaWxzIiwicHVzaCIsImRpdiIsImNsYXNzTmFtZSIsInNwYW4iLCJvbkNsaWNrIiwiaW5jbHVkZXMiLCJjb2xvciIsImZvbnRTaXplIiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJhIiwicCIsImJ1dHRvbkNsYXNzIiwidGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/home/card.tsx\n"));

/***/ })

});