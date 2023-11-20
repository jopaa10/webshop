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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _card_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card.scss */ \"./src/components/home/card.scss\");\n/* harmony import */ var _card_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_card_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_icons_material_TurnedInNot__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/icons-material/TurnedInNot */ \"./node_modules/@mui/icons-material/TurnedInNot.js\");\n/* harmony import */ var _mui_icons_material_TurnedIn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/icons-material/TurnedIn */ \"./node_modules/@mui/icons-material/TurnedIn.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _addToCardButton_addButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../addToCardButton/addButton */ \"./src/components/addToCardButton/addButton.tsx\");\n/* harmony import */ var _context_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/context/context */ \"./src/context/context.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n// eslint-disable-next-line @typescript-eslint/no-explicit-any\nfunction Card(props) {\n    _s();\n    const { detail, id, image, price, title } = props.card;\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const { favorites, addToFavorites, removeFromFavorites } = (0,_context_context__WEBPACK_IMPORTED_MODULE_5__.useGlobalContext)();\n    console.log(favorites);\n    const handleNavigateToDetails = (id)=>{\n        router.push(\"/\".concat(id));\n    };\n    // useEffect(() => {\n    //   if (typeof window !== \"undefined\") {\n    //     setNewFavorites(\n    //       JSON.parse(localStorage.getItem(LSKeyType.FAVORITES) || \"[]\")\n    //     );\n    //   }\n    // }, []);\n    // console.log(newFavorites);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"card\",\n        children: [\n            (favorites === null || favorites === void 0 ? void 0 : favorites.find((item)=>(item === null || item === void 0 ? void 0 : item.id) === id)) ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"card__favorite-icon\",\n                onClick: ()=>removeFromFavorites(id),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_TurnedIn__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                    color: \"inherit\",\n                    fontSize: \"inherit\"\n                }, void 0, false, {\n                    fileName: \"/Users/josipaznaor/Documents/Learning/webshop - nextjs/webshop/src/components/home/card.tsx\",\n                    lineNumber: 41,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/josipaznaor/Documents/Learning/webshop - nextjs/webshop/src/components/home/card.tsx\",\n                lineNumber: 37,\n                columnNumber: 9\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"card__favorite-icon\",\n                onClick: ()=>addToFavorites(id),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_TurnedInNot__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                    color: \"inherit\",\n                    fontSize: \"inherit\"\n                }, void 0, false, {\n                    fileName: \"/Users/josipaznaor/Documents/Learning/webshop - nextjs/webshop/src/components/home/card.tsx\",\n                    lineNumber: 48,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/josipaznaor/Documents/Learning/webshop - nextjs/webshop/src/components/home/card.tsx\",\n                lineNumber: 44,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                src: image,\n                alt: title,\n                width: 150,\n                height: 150\n            }, void 0, false, {\n                fileName: \"/Users/josipaznaor/Documents/Learning/webshop - nextjs/webshop/src/components/home/card.tsx\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                onClick: ()=>handleNavigateToDetails(id),\n                className: \"card__title\",\n                children: title\n            }, void 0, false, {\n                fileName: \"/Users/josipaznaor/Documents/Learning/webshop - nextjs/webshop/src/components/home/card.tsx\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"card__detail\",\n                children: detail\n            }, void 0, false, {\n                fileName: \"/Users/josipaznaor/Documents/Learning/webshop - nextjs/webshop/src/components/home/card.tsx\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"card__price\",\n                children: [\n                    price,\n                    \" $\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/josipaznaor/Documents/Learning/webshop - nextjs/webshop/src/components/home/card.tsx\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_addToCardButton_addButton__WEBPACK_IMPORTED_MODULE_4__.AddButton, {\n                buttonClass: \"card__shopping-icon\",\n                text: \"Add\"\n            }, void 0, false, {\n                fileName: \"/Users/josipaznaor/Documents/Learning/webshop - nextjs/webshop/src/components/home/card.tsx\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, this)\n        ]\n    }, id, true, {\n        fileName: \"/Users/josipaznaor/Documents/Learning/webshop - nextjs/webshop/src/components/home/card.tsx\",\n        lineNumber: 35,\n        columnNumber: 5\n    }, this);\n}\n_s(Card, \"n/ClNYXF4KxHb3REIeDdwUeHAL8=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter,\n        _context_context__WEBPACK_IMPORTED_MODULE_5__.useGlobalContext\n    ];\n});\n_c = Card;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Card);\nvar _c;\n$RefreshReg$(_c, \"Card\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9ob21lL2NhcmQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFxQjtBQUVVO0FBRStCO0FBQ047QUFFWjtBQUNhO0FBQ0o7QUFFckQsOERBQThEO0FBQzlELFNBQVNNLEtBQUtDLEtBQVU7O0lBQ3RCLE1BQU0sRUFBRUMsTUFBTSxFQUFFQyxFQUFFLEVBQUVDLEtBQUssRUFBRUMsS0FBSyxFQUFFQyxLQUFLLEVBQUUsR0FBR0wsTUFBTU0sSUFBSTtJQUN0RCxNQUFNQyxTQUFTWCwwREFBU0E7SUFDeEIsTUFBTSxFQUFFWSxTQUFTLEVBQUVDLGNBQWMsRUFBRUMsbUJBQW1CLEVBQUUsR0FBR1osa0VBQWdCQTtJQUUzRWEsUUFBUUMsR0FBRyxDQUFDSjtJQUVaLE1BQU1LLDBCQUEwQixDQUFDWDtRQUMvQkssT0FBT08sSUFBSSxDQUFDLElBQU8sT0FBSFo7SUFDbEI7SUFFQSxvQkFBb0I7SUFDcEIseUNBQXlDO0lBQ3pDLHVCQUF1QjtJQUN2QixzRUFBc0U7SUFDdEUsU0FBUztJQUNULE1BQU07SUFDTixVQUFVO0lBRVYsNkJBQTZCO0lBRTdCLHFCQUNFLDhEQUFDYTtRQUFJQyxXQUFXOztZQUNiUixDQUFBQSxzQkFBQUEsZ0NBQUFBLFVBQVdTLElBQUksQ0FBQyxDQUFDQyxPQUFTQSxDQUFBQSxpQkFBQUEsMkJBQUFBLEtBQU1oQixFQUFFLE1BQUtBLHFCQUN0Qyw4REFBQ2lCO2dCQUNDSCxXQUFXO2dCQUNYSSxTQUFTLElBQU1WLG9CQUFvQlI7MEJBRW5DLDRFQUFDUCxvRUFBWUE7b0JBQUMwQixPQUFNO29CQUFVQyxVQUFTOzs7Ozs7Ozs7O3FDQUd6Qyw4REFBQ0g7Z0JBQ0NILFdBQVc7Z0JBQ1hJLFNBQVMsSUFBTVgsZUFBZVA7MEJBRTlCLDRFQUFDUix1RUFBZUE7b0JBQUMyQixPQUFNO29CQUFVQyxVQUFTOzs7Ozs7Ozs7OzswQkFJOUMsOERBQUM3QixtREFBS0E7Z0JBQUM4QixLQUFLcEI7Z0JBQU9xQixLQUFLbkI7Z0JBQU9vQixPQUFPO2dCQUFLQyxRQUFROzs7Ozs7MEJBRW5ELDhEQUFDQztnQkFBRVAsU0FBUyxJQUFNUCx3QkFBd0JYO2dCQUFLYyxXQUFXOzBCQUN2RFg7Ozs7OzswQkFHSCw4REFBQ3VCO2dCQUFFWixXQUFXOzBCQUFpQmY7Ozs7OzswQkFDL0IsOERBQUMyQjtnQkFBRVosV0FBVzs7b0JBQWdCWjtvQkFBTTs7Ozs7OzswQkFDcEMsOERBQUNQLGlFQUFTQTtnQkFBQ2dDLGFBQWE7Z0JBQXVCQyxNQUFNOzs7Ozs7O09BekIxQjVCOzs7OztBQTRCakM7R0FsRFNIOztRQUVRSCxzREFBU0E7UUFDbUNFLDhEQUFnQkE7OztLQUhwRUM7QUFvRFQsK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaG9tZS9jYXJkLnRzeD81NDg2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4vY2FyZC5zY3NzXCI7XG5cbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuXG5pbXBvcnQgVHVybmVkSW5Ob3RJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL1R1cm5lZEluTm90XCI7XG5pbXBvcnQgVHVybmVkSW5JY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL1R1cm5lZEluXCI7XG5cbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcbmltcG9ydCB7IEFkZEJ1dHRvbiB9IGZyb20gXCIuLi9hZGRUb0NhcmRCdXR0b24vYWRkQnV0dG9uXCI7XG5pbXBvcnQgeyB1c2VHbG9iYWxDb250ZXh0IH0gZnJvbSBcIkAvY29udGV4dC9jb250ZXh0XCI7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG5mdW5jdGlvbiBDYXJkKHByb3BzOiBhbnkpIHtcbiAgY29uc3QgeyBkZXRhaWwsIGlkLCBpbWFnZSwgcHJpY2UsIHRpdGxlIH0gPSBwcm9wcy5jYXJkO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgeyBmYXZvcml0ZXMsIGFkZFRvRmF2b3JpdGVzLCByZW1vdmVGcm9tRmF2b3JpdGVzIH0gPSB1c2VHbG9iYWxDb250ZXh0KCk7XG5cbiAgY29uc29sZS5sb2coZmF2b3JpdGVzKTtcblxuICBjb25zdCBoYW5kbGVOYXZpZ2F0ZVRvRGV0YWlscyA9IChpZDogbnVtYmVyKSA9PiB7XG4gICAgcm91dGVyLnB1c2goYC8ke2lkfWApO1xuICB9O1xuXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gIC8vICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgLy8gICAgIHNldE5ld0Zhdm9yaXRlcyhcbiAgLy8gICAgICAgSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShMU0tleVR5cGUuRkFWT1JJVEVTKSB8fCBcIltdXCIpXG4gIC8vICAgICApO1xuICAvLyAgIH1cbiAgLy8gfSwgW10pO1xuXG4gIC8vIGNvbnNvbGUubG9nKG5ld0Zhdm9yaXRlcyk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17XCJjYXJkXCJ9IGtleT17aWR9PlxuICAgICAge2Zhdm9yaXRlcz8uZmluZCgoaXRlbSkgPT4gaXRlbT8uaWQgPT09IGlkKSA/IChcbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIGNsYXNzTmFtZT17XCJjYXJkX19mYXZvcml0ZS1pY29uXCJ9XG4gICAgICAgICAgb25DbGljaz17KCkgPT4gcmVtb3ZlRnJvbUZhdm9yaXRlcyhpZCl9XG4gICAgICAgID5cbiAgICAgICAgICA8VHVybmVkSW5JY29uIGNvbG9yPVwiaW5oZXJpdFwiIGZvbnRTaXplPVwiaW5oZXJpdFwiIC8+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgKSA6IChcbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIGNsYXNzTmFtZT17XCJjYXJkX19mYXZvcml0ZS1pY29uXCJ9XG4gICAgICAgICAgb25DbGljaz17KCkgPT4gYWRkVG9GYXZvcml0ZXMoaWQpfVxuICAgICAgICA+XG4gICAgICAgICAgPFR1cm5lZEluTm90SWNvbiBjb2xvcj1cImluaGVyaXRcIiBmb250U2l6ZT1cImluaGVyaXRcIiAvPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICl9XG5cbiAgICAgIDxJbWFnZSBzcmM9e2ltYWdlfSBhbHQ9e3RpdGxlfSB3aWR0aD17MTUwfSBoZWlnaHQ9ezE1MH0gLz5cblxuICAgICAgPGEgb25DbGljaz17KCkgPT4gaGFuZGxlTmF2aWdhdGVUb0RldGFpbHMoaWQpfSBjbGFzc05hbWU9e1wiY2FyZF9fdGl0bGVcIn0+XG4gICAgICAgIHt0aXRsZX1cbiAgICAgIDwvYT5cblxuICAgICAgPHAgY2xhc3NOYW1lPXtcImNhcmRfX2RldGFpbFwifT57ZGV0YWlsfTwvcD5cbiAgICAgIDxwIGNsYXNzTmFtZT17XCJjYXJkX19wcmljZVwifT57cHJpY2V9ICQ8L3A+XG4gICAgICA8QWRkQnV0dG9uIGJ1dHRvbkNsYXNzPXtcImNhcmRfX3Nob3BwaW5nLWljb25cIn0gdGV4dD17XCJBZGRcIn0gLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FyZDtcbiJdLCJuYW1lcyI6WyJJbWFnZSIsIlR1cm5lZEluTm90SWNvbiIsIlR1cm5lZEluSWNvbiIsInVzZVJvdXRlciIsIkFkZEJ1dHRvbiIsInVzZUdsb2JhbENvbnRleHQiLCJDYXJkIiwicHJvcHMiLCJkZXRhaWwiLCJpZCIsImltYWdlIiwicHJpY2UiLCJ0aXRsZSIsImNhcmQiLCJyb3V0ZXIiLCJmYXZvcml0ZXMiLCJhZGRUb0Zhdm9yaXRlcyIsInJlbW92ZUZyb21GYXZvcml0ZXMiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlTmF2aWdhdGVUb0RldGFpbHMiLCJwdXNoIiwiZGl2IiwiY2xhc3NOYW1lIiwiZmluZCIsIml0ZW0iLCJidXR0b24iLCJvbkNsaWNrIiwiY29sb3IiLCJmb250U2l6ZSIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0IiwiYSIsInAiLCJidXR0b25DbGFzcyIsInRleHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/home/card.tsx\n"));

/***/ })

});