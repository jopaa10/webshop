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

/***/ "./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[7].oneOf[14].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[7].oneOf[14].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[7].oneOf[14].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[7].oneOf[14].use[4]!./src/components/layout/header.scss":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[7].oneOf[14].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[7].oneOf[14].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[7].oneOf[14].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[7].oneOf[14].use[4]!./src/components/layout/header.scss ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/*\\n0-480px:        Smartphone\\n481-768px:      Tablet & large smartphones\\n769-1279px:     Laptops, small desktops\\n1280+:          Large desktops\\n*/\\n/* devices breakpoints */\\n/* Card variables */\\n/* helpers */\\n.header {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  background-color: #141414;\\n  min-height: 5rem;\\n  box-shadow: 3px 3px 10px #b9b9b9;\\n}\\n@media (max-width: 30rem) {\\n  .header {\\n    justify-content: space-around;\\n  }\\n}\\n.header .navbar {\\n  display: flex;\\n  align-items: center;\\n  justify-content: space-around;\\n  width: 100%;\\n  margin: 3rem 2rem;\\n}\\n@media (max-width: 30rem) {\\n  .header .navbar {\\n    margin: 1rem 2rem;\\n    align-items: unset;\\n  }\\n}\\n.header .navbar .logo {\\n  width: 100%;\\n  color: #fff;\\n  display: flex;\\n  align-items: center;\\n  margin: 0 1rem;\\n}\\n.header .navbar__container {\\n  display: flex;\\n  justify-content: space-around;\\n  width: 0;\\n  opacity: 0;\\n  transition: opacity 0.8s;\\n}\\n.header .navbar__container.active {\\n  width: 100%;\\n  opacity: 1;\\n}\\n.header .navbar__container .background-mobile {\\n  background-color: #000;\\n  position: fixed;\\n  top: 0.5%;\\n  left: 90.5%;\\n  width: 4rem;\\n  height: 4rem;\\n  border-radius: 50%;\\n  transition: tranform 0.8s;\\n}\\n.header .navbar__container .background-mobile.active {\\n  transform: scale(30);\\n}\\n@media (max-width: 30rem) {\\n  .header .navbar__container {\\n    display: contents;\\n    margin: 1rem 0;\\n  }\\n}\\n.header .navbar__container ul {\\n  display: flex;\\n  justify-content: flex-end;\\n  list-style: none;\\n  min-width: 20rem;\\n  align-items: center;\\n  width: 100%;\\n  gap: 3rem;\\n}\\n@media (max-width: 30rem) {\\n  .header .navbar__container ul {\\n    display: none;\\n    flex-direction: column;\\n    align-items: flex-start;\\n    margin: 1rem;\\n    position: fixed;\\n    z-index: 9999;\\n  }\\n}\\n.header .navbar__container ul li {\\n  color: #fff;\\n  cursor: pointer;\\n  transition: all 0.4s ease-in-out;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n}\\n.header .navbar__container ul li:active, .header .navbar__container ul li:hover {\\n  color: #fa8ecd;\\n  transform: scale(1.2);\\n}\\n.header .navbar__container ul li .shopping-cart-icon-container {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  gap: 0.4rem;\\n}\\n.header .navbar__container ul li .shopping-cart-icon-container p {\\n  transform: translate(-50%, -50%);\\n}\\n.header .navbar__container ul li .shopping-cart-icon-container.animation {\\n  animation: bounce 1s ease-in-out;\\n}\\n@keyframes bounce {\\n  0%, 50%, 100% {\\n    transform: translateY(0);\\n  }\\n  40% {\\n    transform: translateY(-10px);\\n  }\\n  60% {\\n    transform: translateY(-10px);\\n  }\\n}\\n.header .navbar__container ul .active {\\n  color: #fa8ecd;\\n}\\n.header .navbar .menu-icon {\\n  display: none;\\n  font-size: 3rem;\\n  width: 3rem;\\n  height: 3rem;\\n  background: transparent;\\n  color: #fff;\\n  border: none;\\n}\\n@media (max-width: 30rem) {\\n  .header .navbar .menu-icon {\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n    z-index: 9999;\\n  }\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://src/styles/scss/_mixins.scss\",\"webpack://src/styles/scss/_variables.scss\",\"webpack://src/components/layout/header.scss\",\"webpack://../../webshop%20-%20nextjs/webshop/src/components/layout/header.scss\"],\"names\":[],\"mappings\":\"AACA;;;;;CAAA;ACDA,wBAAA;AAQA,mBAAA;AAIA,YAAA;ACTA;EACE,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,yBDDW;ECEX,gBAAA;EACA,gCAAA;ACOF;AHNI;EEPJ;IASI,6BAAA;ECQF;AACF;ADNE;EACE,aAAA;EACA,mBAAA;EACA,6BAAA;EAEA,WAAA;EACA,iBAAA;ACOJ;AHlBI;EEKF;IASI,iBAAA;IACA,kBAAA;ECQJ;AACF;ADNI;EACE,WAAA;EACA,WDrBM;ECsBN,aAAA;EACA,mBAAA;EACA,cAAA;ACQN;ADLI;EACE,aAAA;EACA,6BAAA;EAEA,QAAA;EACA,UAAA;EAEA,wBAAA;ACKN;ADHM;EACE,WAAA;EACA,UAAA;ACKR;ADFM;EACE,sBAAA;EACA,eAAA;EACA,SAAA;EACA,WAAA;EAEA,WAAA;EACA,YAAA;EAEA,kBAAA;EAEA,yBAAA;ACCR;ADCQ;EACE,oBAAA;ACCV;AHvDI;EE0BA;IAiCI,iBAAA;IACA,cAAA;ECAN;AACF;ADEM;EACE,aAAA;EACA,yBAAA;EACA,gBAAA;EACA,gBAAA;EACA,mBAAA;EACA,WAAA;EACA,SAAA;ACAR;AHtEI;EE+DE;IAUI,aAAA;IACA,sBAAA;IACA,uBAAA;IAEA,YAAA;IAEA,eAAA;IACA,aAAA;ECDR;AACF;ADGQ;EACE,WDrFE;ECsFF,eAAA;EACA,gCAAA;EAEA,aAAA;EACA,uBAAA;EACA,mBAAA;ACFV;ADIU;EAEE,cAAA;EACA,qBAAA;ACHZ;ADMU;EACE,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,WAAA;ACJZ;ADMY;EACE,gCAAA;ACJd;ADOY;EACE,gCAAA;ACLd;ADQY;EACE;IAGE,wBAAA;ECRd;EDUY;IACE,4BAAA;ECRd;EDUY;IACE,4BAAA;ECRd;AACF;ADaQ;EACE,cAAA;ACXV;ADgBI;EACE,aAAA;EACA,eAAA;EACA,WAAA;EACA,YAAA;EAEA,uBAAA;EACA,WD9IM;EC+IN,YAAA;ACfN;AH/HI;EEsIA;IAWI,aAAA;IACA,uBAAA;IACA,mBAAA;IAGA,aAAA;EChBN;AACF\",\"sourcesContent\":[\"//Media queries //breakpoints\\n/*\\n0-480px:        Smartphone\\n481-768px:      Tablet & large smartphones\\n769-1279px:     Laptops, small desktops\\n1280+:          Large desktops\\n*/\\n\\n@mixin respond($breakpoint) {\\n  @if $breakpoint == sm-phone {\\n    @media (max-width: $sm) {\\n      @content;\\n    }\\n  }\\n\\n  @if $breakpoint == tab-lg_sm {\\n    @media screen and (min-width: $md) {\\n      @content;\\n    }\\n  }\\n\\n  @if $breakpoint == sm-desktop {\\n    @media screen and (min-width: $lg) {\\n      @content;\\n    }\\n  }\\n\\n  @if $breakpoint == lg-desktop {\\n    @media (min-width: $extra-lg) {\\n      @content;\\n    }\\n  }\\n}\\n\",\"/* devices breakpoints */\\n$extra-lg: 80rem;\\n$lg: 68.75rem;\\n$md: 48rem;\\n$sm: 30rem;\\n\\n$background: #141414;\\n\\n/* Card variables */\\n$card-text: #fff;\\n$card-box-shadow-color: #b9b9b9;\\n\\n/* helpers */\\n$box-shadow: 0px 0px 10px $card-box-shadow-color;\\n$border-radius: 10px;\\n\",\"@import \\\"@/styles/scss/mixins\\\";\\n@import \\\"@/styles/scss/variables\\\";\\n\\n.header {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  background-color: $background;\\n  min-height: 5rem;\\n  box-shadow: 3px 3px 10px $card-box-shadow-color;\\n\\n  @include respond(sm-phone) {\\n    justify-content: space-around;\\n  }\\n\\n  .navbar {\\n    display: flex;\\n    align-items: center;\\n    justify-content: space-around;\\n\\n    width: 100%;\\n    margin: 3rem 2rem;\\n\\n    @include respond(sm-phone) {\\n      margin: 1rem 2rem;\\n      align-items: unset;\\n    }\\n\\n    .logo {\\n      width: 100%;\\n      color: $card-text;\\n      display: flex;\\n      align-items: center;\\n      margin: 0 1rem;\\n    }\\n\\n    &__container {\\n      display: flex;\\n      justify-content: space-around;\\n      //width: 100%;\\n      width: 0;\\n      opacity: 0;\\n\\n      transition: opacity 0.8s;\\n\\n      &.active {\\n        width: 100%;\\n        opacity: 1;\\n      }\\n\\n      .background-mobile {\\n        background-color: #000;\\n        position: fixed;\\n        top: 0.5%;\\n        left: 90.5%;\\n\\n        width: 4rem;\\n        height: 4rem;\\n\\n        border-radius: 50%;\\n\\n        transition: tranform 0.8s;\\n\\n        &.active {\\n          transform: scale(30);\\n        }\\n      }\\n\\n      @include respond(sm-phone) {\\n        display: contents;\\n        margin: 1rem 0;\\n      }\\n\\n      ul {\\n        display: flex;\\n        justify-content: flex-end;\\n        list-style: none;\\n        min-width: 20rem;\\n        align-items: center;\\n        width: 100%;\\n        gap: 3rem;\\n\\n        @include respond(sm-phone) {\\n          display: none;\\n          flex-direction: column;\\n          align-items: flex-start;\\n\\n          margin: 1rem;\\n\\n          position: fixed;\\n          z-index: 9999;\\n        }\\n\\n        li {\\n          color: $card-text;\\n          cursor: pointer;\\n          transition: all 0.4s ease-in-out;\\n\\n          display: flex;\\n          justify-content: center;\\n          align-items: center;\\n\\n          &:active,\\n          &:hover {\\n            color: #fa8ecd;\\n            transform: scale(1.2);\\n          }\\n\\n          .shopping-cart-icon-container {\\n            display: flex;\\n            justify-content: center;\\n            align-items: center;\\n            gap: 0.4rem;\\n\\n            p {\\n              transform: translate(-50%, -50%);\\n            }\\n\\n            &.animation {\\n              animation: bounce 1s ease-in-out;\\n            }\\n\\n            @keyframes bounce {\\n              0%,\\n              50%,\\n              100% {\\n                transform: translateY(0);\\n              }\\n              40% {\\n                transform: translateY(-10px);\\n              }\\n              60% {\\n                transform: translateY(-10px);\\n              }\\n            }\\n          }\\n        }\\n\\n        .active {\\n          color: #fa8ecd;\\n        }\\n      }\\n    }\\n\\n    .menu-icon {\\n      display: none;\\n      font-size: 3rem;\\n      width: 3rem;\\n      height: 3rem;\\n\\n      background: transparent;\\n      color: $card-text;\\n      border: none;\\n\\n      @include respond(sm-phone) {\\n        display: flex;\\n        justify-content: center;\\n        align-items: center;\\n\\n        // position: fixed;\\n        z-index: 9999;\\n      }\\n    }\\n  }\\n}\\n\",\"/*\\n0-480px:        Smartphone\\n481-768px:      Tablet & large smartphones\\n769-1279px:     Laptops, small desktops\\n1280+:          Large desktops\\n*/\\n/* devices breakpoints */\\n/* Card variables */\\n/* helpers */\\n.header {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  background-color: #141414;\\n  min-height: 5rem;\\n  box-shadow: 3px 3px 10px #b9b9b9;\\n}\\n@media (max-width: 30rem) {\\n  .header {\\n    justify-content: space-around;\\n  }\\n}\\n.header .navbar {\\n  display: flex;\\n  align-items: center;\\n  justify-content: space-around;\\n  width: 100%;\\n  margin: 3rem 2rem;\\n}\\n@media (max-width: 30rem) {\\n  .header .navbar {\\n    margin: 1rem 2rem;\\n    align-items: unset;\\n  }\\n}\\n.header .navbar .logo {\\n  width: 100%;\\n  color: #fff;\\n  display: flex;\\n  align-items: center;\\n  margin: 0 1rem;\\n}\\n.header .navbar__container {\\n  display: flex;\\n  justify-content: space-around;\\n  width: 0;\\n  opacity: 0;\\n  transition: opacity 0.8s;\\n}\\n.header .navbar__container.active {\\n  width: 100%;\\n  opacity: 1;\\n}\\n.header .navbar__container .background-mobile {\\n  background-color: #000;\\n  position: fixed;\\n  top: 0.5%;\\n  left: 90.5%;\\n  width: 4rem;\\n  height: 4rem;\\n  border-radius: 50%;\\n  transition: tranform 0.8s;\\n}\\n.header .navbar__container .background-mobile.active {\\n  transform: scale(30);\\n}\\n@media (max-width: 30rem) {\\n  .header .navbar__container {\\n    display: contents;\\n    margin: 1rem 0;\\n  }\\n}\\n.header .navbar__container ul {\\n  display: flex;\\n  justify-content: flex-end;\\n  list-style: none;\\n  min-width: 20rem;\\n  align-items: center;\\n  width: 100%;\\n  gap: 3rem;\\n}\\n@media (max-width: 30rem) {\\n  .header .navbar__container ul {\\n    display: none;\\n    flex-direction: column;\\n    align-items: flex-start;\\n    margin: 1rem;\\n    position: fixed;\\n    z-index: 9999;\\n  }\\n}\\n.header .navbar__container ul li {\\n  color: #fff;\\n  cursor: pointer;\\n  transition: all 0.4s ease-in-out;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n}\\n.header .navbar__container ul li:active, .header .navbar__container ul li:hover {\\n  color: #fa8ecd;\\n  transform: scale(1.2);\\n}\\n.header .navbar__container ul li .shopping-cart-icon-container {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  gap: 0.4rem;\\n}\\n.header .navbar__container ul li .shopping-cart-icon-container p {\\n  transform: translate(-50%, -50%);\\n}\\n.header .navbar__container ul li .shopping-cart-icon-container.animation {\\n  animation: bounce 1s ease-in-out;\\n}\\n@keyframes bounce {\\n  0%, 50%, 100% {\\n    transform: translateY(0);\\n  }\\n  40% {\\n    transform: translateY(-10px);\\n  }\\n  60% {\\n    transform: translateY(-10px);\\n  }\\n}\\n.header .navbar__container ul .active {\\n  color: #fa8ecd;\\n}\\n.header .navbar .menu-icon {\\n  display: none;\\n  font-size: 3rem;\\n  width: 3rem;\\n  height: 3rem;\\n  background: transparent;\\n  color: #fff;\\n  border: none;\\n}\\n@media (max-width: 30rem) {\\n  .header .navbar .menu-icon {\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n    z-index: 9999;\\n  }\\n}\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s3XS5vbmVPZlsxNF0udXNlWzFdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzddLm9uZU9mWzE0XS51c2VbMl0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbN10ub25lT2ZbMTRdLnVzZVszXSEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzddLm9uZU9mWzE0XS51c2VbNF0hLi9zcmMvY29tcG9uZW50cy9sYXlvdXQvaGVhZGVyLnNjc3MiLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFDOEg7QUFDOUgsOEJBQThCLGtIQUEyQjtBQUN6RDtBQUNBLDRRQUE0USxrQkFBa0IsNEJBQTRCLHdCQUF3Qiw4QkFBOEIscUJBQXFCLHFDQUFxQyxHQUFHLDZCQUE2QixhQUFhLG9DQUFvQyxLQUFLLEdBQUcsbUJBQW1CLGtCQUFrQix3QkFBd0Isa0NBQWtDLGdCQUFnQixzQkFBc0IsR0FBRyw2QkFBNkIscUJBQXFCLHdCQUF3Qix5QkFBeUIsS0FBSyxHQUFHLHlCQUF5QixnQkFBZ0IsZ0JBQWdCLGtCQUFrQix3QkFBd0IsbUJBQW1CLEdBQUcsOEJBQThCLGtCQUFrQixrQ0FBa0MsYUFBYSxlQUFlLDZCQUE2QixHQUFHLHFDQUFxQyxnQkFBZ0IsZUFBZSxHQUFHLGlEQUFpRCwyQkFBMkIsb0JBQW9CLGNBQWMsZ0JBQWdCLGdCQUFnQixpQkFBaUIsdUJBQXVCLDhCQUE4QixHQUFHLHdEQUF3RCx5QkFB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R0FBRyxpQ0FBaUMsa0JBQWtCLDhCQUE4QixxQkFBcUIscUJBQXFCLHdCQUF3QixnQkFBZ0IsY0FBYyxHQUFHLDZCQUE2QixtQ0FBbUMsb0JBQW9CLDZCQUE2Qiw4QkFBOEIsbUJBQW1CLHNCQUFzQixvQkFBb0IsS0FBSyxHQUFHLG9DQUFvQyxnQkFBZ0Isb0JBQW9CLHFDQUFxQyxrQkFBa0IsNEJBQTRCLHdCQUF3QixHQUFHLG1GQUFtRixtQkFBbUIsMEJBQTBCLEdBQUcsa0VBQWtFLGtCQUFrQiw0QkFBNEIsd0JBQXdCLGdCQUFnQixHQUFHLG9FQUFvRSxxQ0FBcUMsR0FBRyw0RUFBNEUscUNBQXFDLEdBQUcscUJBQXFCLG1CQUFtQiwrQkFBK0IsS0FBSyxTQUFTLG1DQUFtQyxLQUFLLFNBQVMsbUNBQW1DLEtBQUssR0FBRyx5Q0FBeUMsbUJBQW1CLEdBQUcsOEJBQThCLGtCQUFrQixvQkFBb0IsZ0JBQWdCLGlCQUFpQiw0QkFBNEIsZ0JBQWdCLGlCQUFpQixHQUFHLDZCQUE2QixnQ0FBZ0Msb0JBQW9CLDhCQUE4QiwwQkFBMEIsb0JBQW9CLEtBQUssR0FBRyxtQkFBbUI7QUFDaHZYO0FBQ0EsK0RBQWUsdUJBQXVCLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvbGF5b3V0L2hlYWRlci5zY3NzPzAxNjkiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvY3NzLWxvYWRlci9zcmMvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qXFxuMC00ODBweDogICAgICAgIFNtYXJ0cGhvbmVcXG40ODEtNzY4cHg6ICAgICAgVGFibGV0ICYgbGFyZ2Ugc21hcnRwaG9uZXNcXG43NjktMTI3OXB4OiAgICAgTGFwdG9wcywgc21hbGwgZGVza3RvcHNcXG4xMjgwKzogICAgICAgICAgTGFyZ2UgZGVza3RvcHNcXG4qL1xcbi8qIGRldmljZXMgYnJlYWtwb2ludHMgKi9cXG4vKiBDYXJkIHZhcmlhYmxlcyAqL1xcbi8qIGhlbHBlcnMgKi9cXG4uaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTQxNDE0O1xcbiAgbWluLWhlaWdodDogNXJlbTtcXG4gIGJveC1zaGFkb3c6IDNweCAzcHggMTBweCAjYjliOWI5O1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogMzByZW0pIHtcXG4gIC5oZWFkZXIge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIH1cXG59XFxuLmhlYWRlciAubmF2YmFyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbjogM3JlbSAycmVtO1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogMzByZW0pIHtcXG4gIC5oZWFkZXIgLm5hdmJhciB7XFxuICAgIG1hcmdpbjogMXJlbSAycmVtO1xcbiAgICBhbGlnbi1pdGVtczogdW5zZXQ7XFxuICB9XFxufVxcbi5oZWFkZXIgLm5hdmJhciAubG9nbyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW46IDAgMXJlbTtcXG59XFxuLmhlYWRlciAubmF2YmFyX19jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgd2lkdGg6IDA7XFxuICBvcGFjaXR5OiAwO1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjhzO1xcbn1cXG4uaGVhZGVyIC5uYXZiYXJfX2NvbnRhaW5lci5hY3RpdmUge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG4uaGVhZGVyIC5uYXZiYXJfX2NvbnRhaW5lciAuYmFja2dyb3VuZC1tb2JpbGUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMC41JTtcXG4gIGxlZnQ6IDkwLjUlO1xcbiAgd2lkdGg6IDRyZW07XFxuICBoZWlnaHQ6IDRyZW07XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICB0cmFuc2l0aW9uOiB0cmFuZm9ybSAwLjhzO1xcbn1cXG4uaGVhZGVyIC5uYXZiYXJfX2NvbnRhaW5lciAuYmFja2dyb3VuZC1tb2JpbGUuYWN0aXZlIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMzApO1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogMzByZW0pIHtcXG4gIC5oZWFkZXIgLm5hdmJhcl9fY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogY29udGVudHM7XFxuICAgIG1hcmdpbjogMXJlbSAwO1xcbiAgfVxcbn1cXG4uaGVhZGVyIC5uYXZiYXJfX2NvbnRhaW5lciB1bCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBtaW4td2lkdGg6IDIwcmVtO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZ2FwOiAzcmVtO1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogMzByZW0pIHtcXG4gIC5oZWFkZXIgLm5hdmJhcl9fY29udGFpbmVyIHVsIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIG1hcmdpbjogMXJlbTtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB6LWluZGV4OiA5OTk5O1xcbiAgfVxcbn1cXG4uaGVhZGVyIC5uYXZiYXJfX2NvbnRhaW5lciB1bCBsaSB7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmhlYWRlciAubmF2YmFyX19jb250YWluZXIgdWwgbGk6YWN0aXZlLCAuaGVhZGVyIC5uYXZiYXJfX2NvbnRhaW5lciB1bCBsaTpob3ZlciB7XFxuICBjb2xvcjogI2ZhOGVjZDtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXG59XFxuLmhlYWRlciAubmF2YmFyX19jb250YWluZXIgdWwgbGkgLnNob3BwaW5nLWNhcnQtaWNvbi1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMC40cmVtO1xcbn1cXG4uaGVhZGVyIC5uYXZiYXJfX2NvbnRhaW5lciB1bCBsaSAuc2hvcHBpbmctY2FydC1pY29uLWNvbnRhaW5lciBwIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbn1cXG4uaGVhZGVyIC5uYXZiYXJfX2NvbnRhaW5lciB1bCBsaSAuc2hvcHBpbmctY2FydC1pY29uLWNvbnRhaW5lci5hbmltYXRpb24ge1xcbiAgYW5pbWF0aW9uOiBib3VuY2UgMXMgZWFzZS1pbi1vdXQ7XFxufVxcbkBrZXlmcmFtZXMgYm91bmNlIHtcXG4gIDAlLCA1MCUsIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxuICB9XFxuICA0MCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpO1xcbiAgfVxcbiAgNjAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KTtcXG4gIH1cXG59XFxuLmhlYWRlciAubmF2YmFyX19jb250YWluZXIgdWwgLmFjdGl2ZSB7XFxuICBjb2xvcjogI2ZhOGVjZDtcXG59XFxuLmhlYWRlciAubmF2YmFyIC5tZW51LWljb24ge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIHdpZHRoOiAzcmVtO1xcbiAgaGVpZ2h0OiAzcmVtO1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDMwcmVtKSB7XFxuICAuaGVhZGVyIC5uYXZiYXIgLm1lbnUtaWNvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB6LWluZGV4OiA5OTk5O1xcbiAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3JjL3N0eWxlcy9zY3NzL19taXhpbnMuc2Nzc1wiLFwid2VicGFjazovL3NyYy9zdHlsZXMvc2Nzcy9fdmFyaWFibGVzLnNjc3NcIixcIndlYnBhY2s6Ly9zcmMvY29tcG9uZW50cy9sYXlvdXQvaGVhZGVyLnNjc3NcIixcIndlYnBhY2s6Ly8uLi8uLi93ZWJzaG9wJTIwLSUyMG5leHRqcy93ZWJzaG9wL3NyYy9jb21wb25lbnRzL2xheW91dC9oZWFkZXIuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFDQTs7Ozs7Q0FBQTtBQ0RBLHdCQUFBO0FBUUEsbUJBQUE7QUFJQSxZQUFBO0FDVEE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCRERXO0VDRVgsZ0JBQUE7RUFDQSxnQ0FBQTtBQ09GO0FITkk7RUVQSjtJQVNJLDZCQUFBO0VDUUY7QUFDRjtBRE5FO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFFQSxXQUFBO0VBQ0EsaUJBQUE7QUNPSjtBSGxCSTtFRUtGO0lBU0ksaUJBQUE7SUFDQSxrQkFBQTtFQ1FKO0FBQ0Y7QUROSTtFQUNFLFdBQUE7RUFDQSxXRHJCTTtFQ3NCTixhQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FDUU47QURMSTtFQUNFLGFBQUE7RUFDQSw2QkFBQTtFQUVBLFFBQUE7RUFDQSxVQUFBO0VBRUEsd0JBQUE7QUNLTjtBREhNO0VBQ0UsV0FBQTtFQUNBLFVBQUE7QUNLUjtBREZNO0VBQ0Usc0JBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUVBLGtCQUFBO0VBRUEseUJBQUE7QUNDUjtBRENRO0VBQ0Usb0JBQUE7QUNDVjtBSHZESTtFRTBCQTtJQWlDSSxpQkFBQTtJQUNBLGNBQUE7RUNBTjtBQUNGO0FERU07RUFDRSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBQ0FSO0FIdEVJO0VFK0RFO0lBVUksYUFBQTtJQUNBLHNCQUFBO0lBQ0EsdUJBQUE7SUFFQSxZQUFBO0lBRUEsZUFBQTtJQUNBLGFBQUE7RUNEUjtBQUNGO0FER1E7RUFDRSxXRHJGRTtFQ3NGRixlQUFBO0VBQ0EsZ0NBQUE7RUFFQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ0ZWO0FESVU7RUFFRSxjQUFBO0VBQ0EscUJBQUE7QUNIWjtBRE1VO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FDSlo7QURNWTtFQUNFLGdDQUFBO0FDSmQ7QURPWTtFQUNFLGdDQUFBO0FDTGQ7QURRWTtFQUNFO0lBR0Usd0JBQUE7RUNSZDtFRFVZO0lBQ0UsNEJBQUE7RUNSZDtFRFVZO0lBQ0UsNEJBQUE7RUNSZDtBQUNGO0FEYVE7RUFDRSxjQUFBO0FDWFY7QURnQkk7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBRUEsdUJBQUE7RUFDQSxXRDlJTTtFQytJTixZQUFBO0FDZk47QUgvSEk7RUVzSUE7SUFXSSxhQUFBO0lBQ0EsdUJBQUE7SUFDQSxtQkFBQTtJQUdBLGFBQUE7RUNoQk47QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvL01lZGlhIHF1ZXJpZXMgLy9icmVha3BvaW50c1xcbi8qXFxuMC00ODBweDogICAgICAgIFNtYXJ0cGhvbmVcXG40ODEtNzY4cHg6ICAgICAgVGFibGV0ICYgbGFyZ2Ugc21hcnRwaG9uZXNcXG43NjktMTI3OXB4OiAgICAgTGFwdG9wcywgc21hbGwgZGVza3RvcHNcXG4xMjgwKzogICAgICAgICAgTGFyZ2UgZGVza3RvcHNcXG4qL1xcblxcbkBtaXhpbiByZXNwb25kKCRicmVha3BvaW50KSB7XFxuICBAaWYgJGJyZWFrcG9pbnQgPT0gc20tcGhvbmUge1xcbiAgICBAbWVkaWEgKG1heC13aWR0aDogJHNtKSB7XFxuICAgICAgQGNvbnRlbnQ7XFxuICAgIH1cXG4gIH1cXG5cXG4gIEBpZiAkYnJlYWtwb2ludCA9PSB0YWItbGdfc20ge1xcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkbWQpIHtcXG4gICAgICBAY29udGVudDtcXG4gICAgfVxcbiAgfVxcblxcbiAgQGlmICRicmVha3BvaW50ID09IHNtLWRlc2t0b3Age1xcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkbGcpIHtcXG4gICAgICBAY29udGVudDtcXG4gICAgfVxcbiAgfVxcblxcbiAgQGlmICRicmVha3BvaW50ID09IGxnLWRlc2t0b3Age1xcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJGV4dHJhLWxnKSB7XFxuICAgICAgQGNvbnRlbnQ7XFxuICAgIH1cXG4gIH1cXG59XFxuXCIsXCIvKiBkZXZpY2VzIGJyZWFrcG9pbnRzICovXFxuJGV4dHJhLWxnOiA4MHJlbTtcXG4kbGc6IDY4Ljc1cmVtO1xcbiRtZDogNDhyZW07XFxuJHNtOiAzMHJlbTtcXG5cXG4kYmFja2dyb3VuZDogIzE0MTQxNDtcXG5cXG4vKiBDYXJkIHZhcmlhYmxlcyAqL1xcbiRjYXJkLXRleHQ6ICNmZmY7XFxuJGNhcmQtYm94LXNoYWRvdy1jb2xvcjogI2I5YjliOTtcXG5cXG4vKiBoZWxwZXJzICovXFxuJGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAkY2FyZC1ib3gtc2hhZG93LWNvbG9yO1xcbiRib3JkZXItcmFkaXVzOiAxMHB4O1xcblwiLFwiQGltcG9ydCBcXFwiQC9zdHlsZXMvc2Nzcy9taXhpbnNcXFwiO1xcbkBpbXBvcnQgXFxcIkAvc3R5bGVzL3Njc3MvdmFyaWFibGVzXFxcIjtcXG5cXG4uaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZDtcXG4gIG1pbi1oZWlnaHQ6IDVyZW07XFxuICBib3gtc2hhZG93OiAzcHggM3B4IDEwcHggJGNhcmQtYm94LXNoYWRvdy1jb2xvcjtcXG5cXG4gIEBpbmNsdWRlIHJlc3BvbmQoc20tcGhvbmUpIHtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICB9XFxuXFxuICAubmF2YmFyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuXFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXJnaW46IDNyZW0gMnJlbTtcXG5cXG4gICAgQGluY2x1ZGUgcmVzcG9uZChzbS1waG9uZSkge1xcbiAgICAgIG1hcmdpbjogMXJlbSAycmVtO1xcbiAgICAgIGFsaWduLWl0ZW1zOiB1bnNldDtcXG4gICAgfVxcblxcbiAgICAubG9nbyB7XFxuICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgY29sb3I6ICRjYXJkLXRleHQ7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgIG1hcmdpbjogMCAxcmVtO1xcbiAgICB9XFxuXFxuICAgICZfX2NvbnRhaW5lciB7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgICAvL3dpZHRoOiAxMDAlO1xcbiAgICAgIHdpZHRoOiAwO1xcbiAgICAgIG9wYWNpdHk6IDA7XFxuXFxuICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjhzO1xcblxcbiAgICAgICYuYWN0aXZlIHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgICB9XFxuXFxuICAgICAgLmJhY2tncm91bmQtbW9iaWxlIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XFxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgICAgICB0b3A6IDAuNSU7XFxuICAgICAgICBsZWZ0OiA5MC41JTtcXG5cXG4gICAgICAgIHdpZHRoOiA0cmVtO1xcbiAgICAgICAgaGVpZ2h0OiA0cmVtO1xcblxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xcblxcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbmZvcm0gMC44cztcXG5cXG4gICAgICAgICYuYWN0aXZlIHtcXG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgzMCk7XFxuICAgICAgICB9XFxuICAgICAgfVxcblxcbiAgICAgIEBpbmNsdWRlIHJlc3BvbmQoc20tcGhvbmUpIHtcXG4gICAgICAgIGRpc3BsYXk6IGNvbnRlbnRzO1xcbiAgICAgICAgbWFyZ2luOiAxcmVtIDA7XFxuICAgICAgfVxcblxcbiAgICAgIHVsIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgICAgIG1pbi13aWR0aDogMjByZW07XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBnYXA6IDNyZW07XFxuXFxuICAgICAgICBAaW5jbHVkZSByZXNwb25kKHNtLXBob25lKSB7XFxuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcblxcbiAgICAgICAgICBtYXJnaW46IDFyZW07XFxuXFxuICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgICAgICAgei1pbmRleDogOTk5OTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIGxpIHtcXG4gICAgICAgICAgY29sb3I6ICRjYXJkLXRleHQ7XFxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XFxuXFxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICAgICAgICAmOmFjdGl2ZSxcXG4gICAgICAgICAgJjpob3ZlciB7XFxuICAgICAgICAgICAgY29sb3I6ICNmYThlY2Q7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcbiAgICAgICAgICB9XFxuXFxuICAgICAgICAgIC5zaG9wcGluZy1jYXJ0LWljb24tY29udGFpbmVyIHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAgZ2FwOiAwLjRyZW07XFxuXFxuICAgICAgICAgICAgcCB7XFxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgJi5hbmltYXRpb24ge1xcbiAgICAgICAgICAgICAgYW5pbWF0aW9uOiBib3VuY2UgMXMgZWFzZS1pbi1vdXQ7XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgIEBrZXlmcmFtZXMgYm91bmNlIHtcXG4gICAgICAgICAgICAgIDAlLFxcbiAgICAgICAgICAgICAgNTAlLFxcbiAgICAgICAgICAgICAgMTAwJSB7XFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXG4gICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgIDQwJSB7XFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCk7XFxuICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICA2MCUge1xcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpO1xcbiAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgfVxcbiAgICAgICAgfVxcblxcbiAgICAgICAgLmFjdGl2ZSB7XFxuICAgICAgICAgIGNvbG9yOiAjZmE4ZWNkO1xcbiAgICAgICAgfVxcbiAgICAgIH1cXG4gICAgfVxcblxcbiAgICAubWVudS1pY29uIHtcXG4gICAgICBkaXNwbGF5OiBub25lO1xcbiAgICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgICB3aWR0aDogM3JlbTtcXG4gICAgICBoZWlnaHQ6IDNyZW07XFxuXFxuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICAgICAgY29sb3I6ICRjYXJkLXRleHQ7XFxuICAgICAgYm9yZGVyOiBub25lO1xcblxcbiAgICAgIEBpbmNsdWRlIHJlc3BvbmQoc20tcGhvbmUpIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgICAgICAvLyBwb3NpdGlvbjogZml4ZWQ7XFxuICAgICAgICB6LWluZGV4OiA5OTk5O1xcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcbn1cXG5cIixcIi8qXFxuMC00ODBweDogICAgICAgIFNtYXJ0cGhvbmVcXG40ODEtNzY4cHg6ICAgICAgVGFibGV0ICYgbGFyZ2Ugc21hcnRwaG9uZXNcXG43NjktMTI3OXB4OiAgICAgTGFwdG9wcywgc21hbGwgZGVza3RvcHNcXG4xMjgwKzogICAgICAgICAgTGFyZ2UgZGVza3RvcHNcXG4qL1xcbi8qIGRldmljZXMgYnJlYWtwb2ludHMgKi9cXG4vKiBDYXJkIHZhcmlhYmxlcyAqL1xcbi8qIGhlbHBlcnMgKi9cXG4uaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTQxNDE0O1xcbiAgbWluLWhlaWdodDogNXJlbTtcXG4gIGJveC1zaGFkb3c6IDNweCAzcHggMTBweCAjYjliOWI5O1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogMzByZW0pIHtcXG4gIC5oZWFkZXIge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIH1cXG59XFxuLmhlYWRlciAubmF2YmFyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbjogM3JlbSAycmVtO1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogMzByZW0pIHtcXG4gIC5oZWFkZXIgLm5hdmJhciB7XFxuICAgIG1hcmdpbjogMXJlbSAycmVtO1xcbiAgICBhbGlnbi1pdGVtczogdW5zZXQ7XFxuICB9XFxufVxcbi5oZWFkZXIgLm5hdmJhciAubG9nbyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW46IDAgMXJlbTtcXG59XFxuLmhlYWRlciAubmF2YmFyX19jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgd2lkdGg6IDA7XFxuICBvcGFjaXR5OiAwO1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjhzO1xcbn1cXG4uaGVhZGVyIC5uYXZiYXJfX2NvbnRhaW5lci5hY3RpdmUge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG4uaGVhZGVyIC5uYXZiYXJfX2NvbnRhaW5lciAuYmFja2dyb3VuZC1tb2JpbGUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMC41JTtcXG4gIGxlZnQ6IDkwLjUlO1xcbiAgd2lkdGg6IDRyZW07XFxuICBoZWlnaHQ6IDRyZW07XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICB0cmFuc2l0aW9uOiB0cmFuZm9ybSAwLjhzO1xcbn1cXG4uaGVhZGVyIC5uYXZiYXJfX2NvbnRhaW5lciAuYmFja2dyb3VuZC1tb2JpbGUuYWN0aXZlIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMzApO1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogMzByZW0pIHtcXG4gIC5oZWFkZXIgLm5hdmJhcl9fY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogY29udGVudHM7XFxuICAgIG1hcmdpbjogMXJlbSAwO1xcbiAgfVxcbn1cXG4uaGVhZGVyIC5uYXZiYXJfX2NvbnRhaW5lciB1bCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBtaW4td2lkdGg6IDIwcmVtO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZ2FwOiAzcmVtO1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogMzByZW0pIHtcXG4gIC5oZWFkZXIgLm5hdmJhcl9fY29udGFpbmVyIHVsIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIG1hcmdpbjogMXJlbTtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB6LWluZGV4OiA5OTk5O1xcbiAgfVxcbn1cXG4uaGVhZGVyIC5uYXZiYXJfX2NvbnRhaW5lciB1bCBsaSB7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmhlYWRlciAubmF2YmFyX19jb250YWluZXIgdWwgbGk6YWN0aXZlLCAuaGVhZGVyIC5uYXZiYXJfX2NvbnRhaW5lciB1bCBsaTpob3ZlciB7XFxuICBjb2xvcjogI2ZhOGVjZDtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXG59XFxuLmhlYWRlciAubmF2YmFyX19jb250YWluZXIgdWwgbGkgLnNob3BwaW5nLWNhcnQtaWNvbi1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMC40cmVtO1xcbn1cXG4uaGVhZGVyIC5uYXZiYXJfX2NvbnRhaW5lciB1bCBsaSAuc2hvcHBpbmctY2FydC1pY29uLWNvbnRhaW5lciBwIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbn1cXG4uaGVhZGVyIC5uYXZiYXJfX2NvbnRhaW5lciB1bCBsaSAuc2hvcHBpbmctY2FydC1pY29uLWNvbnRhaW5lci5hbmltYXRpb24ge1xcbiAgYW5pbWF0aW9uOiBib3VuY2UgMXMgZWFzZS1pbi1vdXQ7XFxufVxcbkBrZXlmcmFtZXMgYm91bmNlIHtcXG4gIDAlLCA1MCUsIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxuICB9XFxuICA0MCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpO1xcbiAgfVxcbiAgNjAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KTtcXG4gIH1cXG59XFxuLmhlYWRlciAubmF2YmFyX19jb250YWluZXIgdWwgLmFjdGl2ZSB7XFxuICBjb2xvcjogI2ZhOGVjZDtcXG59XFxuLmhlYWRlciAubmF2YmFyIC5tZW51LWljb24ge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIHdpZHRoOiAzcmVtO1xcbiAgaGVpZ2h0OiAzcmVtO1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDMwcmVtKSB7XFxuICAuaGVhZGVyIC5uYXZiYXIgLm1lbnUtaWNvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB6LWluZGV4OiA5OTk5O1xcbiAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[7].oneOf[14].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[7].oneOf[14].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[7].oneOf[14].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[7].oneOf[14].use[4]!./src/components/layout/header.scss\n"));

/***/ })

});