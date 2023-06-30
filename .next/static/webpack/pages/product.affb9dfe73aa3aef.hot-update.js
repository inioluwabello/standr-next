"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/product",{

/***/ "./components/ProductPage/ProductPage.js":
/*!***********************************************!*\
  !*** ./components/ProductPage/ProductPage.js ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _menu_CrumbBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../menu/CrumbBar */ \"./components/menu/CrumbBar.js\");\n/* harmony import */ var _ProductPage_ProductLeftPane__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ProductPage/ProductLeftPane */ \"./components/ProductPage/ProductLeftPane.js\");\n/* harmony import */ var _ProductPage_ProductMiddlePane__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ProductPage/ProductMiddlePane */ \"./components/ProductPage/ProductMiddlePane.js\");\n/* harmony import */ var _data_product__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../data/product */ \"./data/product.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst ProductPage = ()=>{\n    _s();\n    const item = _data_product__WEBPACK_IMPORTED_MODULE_4__[\"default\"][0];\n    const [quantity, setQuantity] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(1);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            minHeight: \"100vh\",\n            padding: \"1rem\",\n            fontSize: \"11px\",\n            color: \"#78808a\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_menu_CrumbBar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                category: item.category,\n                subCategory: item.subCategory,\n                productName: item.productName,\n                productCategory: item.productCategory,\n                watching: item.watching,\n                likes: item.likes,\n                bookmarks: item.bookmarks\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\standr-next\\\\components\\\\ProductPage\\\\ProductPage.js\",\n                lineNumber: 17,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"row\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col-sm-12 col-md-4\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProductPage_ProductLeftPane__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            productImage: item.productImage\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\standr-next\\\\components\\\\ProductPage\\\\ProductPage.js\",\n                            lineNumber: 28,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\standr-next\\\\components\\\\ProductPage\\\\ProductPage.js\",\n                        lineNumber: 27,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col-sm-12 col-md-4\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProductPage_ProductMiddlePane__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            productName: item.productName,\n                            productDescr: item.productDescr,\n                            rating: item.rating,\n                            ratingCount: item.ratingCount,\n                            reviews: item.reviews,\n                            quantity: quantity,\n                            setQuantity: setQuantity,\n                            productTypes: item.productTypes\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\standr-next\\\\components\\\\ProductPage\\\\ProductPage.js\",\n                            lineNumber: 31,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\standr-next\\\\components\\\\ProductPage\\\\ProductPage.js\",\n                        lineNumber: 30,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col-sm-12 col-md-4\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProductRightPane, {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\standr-next\\\\components\\\\ProductPage\\\\ProductPage.js\",\n                            lineNumber: 42,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\standr-next\\\\components\\\\ProductPage\\\\ProductPage.js\",\n                        lineNumber: 41,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\standr-next\\\\components\\\\ProductPage\\\\ProductPage.js\",\n                lineNumber: 26,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\standr-next\\\\components\\\\ProductPage\\\\ProductPage.js\",\n        lineNumber: 11,\n        columnNumber: 9\n    }, undefined);\n};\n_s(ProductPage, \"Qe09P1MkhcuxrUT+4C5s8y/Npkg=\");\n_c = ProductPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductPage);\nvar _c;\n$RefreshReg$(_c, \"ProductPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Byb2R1Y3RQYWdlL1Byb2R1Y3RQYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQXdDO0FBQ29CO0FBQ0k7QUFDMUI7QUFDTDtBQUVqQyxNQUFNSyxjQUFjOztJQUNoQixNQUFNQyxPQUFPSCx3REFBUTtJQUNyQixNQUFNLENBQUNJLFVBQVVDLFlBQVksR0FBR0osK0NBQVFBLENBQUM7SUFDekMscUJBQ0ksOERBQUNLO1FBQUlDLE9BQU87WUFDUkMsV0FBVztZQUNYQyxTQUFTO1lBQ1RDLFVBQVU7WUFDVkMsT0FBTztRQUNQOzswQkFDQSw4REFBQ2Qsc0RBQVFBO2dCQUFDZSxVQUFVVCxLQUFLUztnQkFDckJDLGFBQWFWLEtBQUtVO2dCQUNsQkMsYUFBYVgsS0FBS1c7Z0JBQ2xCQyxpQkFBaUJaLEtBQUtZO2dCQUN0QkMsVUFBVWIsS0FBS2E7Z0JBQ2ZDLE9BQU9kLEtBQUtjO2dCQUNaQyxXQUFXZixLQUFLZTs7Ozs7OzBCQUdwQiw4REFBQ1o7Z0JBQUlhLFdBQVU7O2tDQUNYLDhEQUFDYjt3QkFBSWEsV0FBVTtrQ0FDWCw0RUFBQ3JCLG9FQUFlQTs0QkFBQ3NCLGNBQWNqQixLQUFLaUI7Ozs7Ozs7Ozs7O2tDQUV4Qyw4REFBQ2Q7d0JBQUlhLFdBQVU7a0NBQ1gsNEVBQUNwQixzRUFBaUJBOzRCQUNkZSxhQUFhWCxLQUFLVzs0QkFDbEJPLGNBQWNsQixLQUFLa0I7NEJBQ25CQyxRQUFRbkIsS0FBS21COzRCQUNiQyxhQUFhcEIsS0FBS29COzRCQUNsQkMsU0FBU3JCLEtBQUtxQjs0QkFDZHBCLFVBQVVBOzRCQUNWQyxhQUFlQTs0QkFDZm9CLGNBQWN0QixLQUFLc0I7Ozs7Ozs7Ozs7O2tDQUUzQiw4REFBQ25CO3dCQUFJYSxXQUFVO2tDQUNYLDRFQUFDTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9yQjtHQTFDTXhCO0tBQUFBO0FBNENOLCtEQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUHJvZHVjdFBhZ2UvUHJvZHVjdFBhZ2UuanM/MDY4OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ3J1bWJCYXIgZnJvbSBcIi4uL21lbnUvQ3J1bWJCYXJcIjtcclxuaW1wb3J0IFByb2R1Y3RMZWZ0UGFuZSBmcm9tICcuLi9Qcm9kdWN0UGFnZS9Qcm9kdWN0TGVmdFBhbmUnXHJcbmltcG9ydCBQcm9kdWN0TWlkZGxlUGFuZSBmcm9tICcuLi9Qcm9kdWN0UGFnZS9Qcm9kdWN0TWlkZGxlUGFuZSdcclxuaW1wb3J0IGl0ZW1zIGZyb20gJy4uLy4uL2RhdGEvcHJvZHVjdCdcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IFByb2R1Y3RQYWdlID0gKCkgPT4ge1xyXG4gICAgY29uc3QgaXRlbSA9IGl0ZW1zWzBdO1xyXG4gICAgY29uc3QgW3F1YW50aXR5LCBzZXRRdWFudGl0eV0gPSB1c2VTdGF0ZSgxKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBzdHlsZT17e1xyXG4gICAgICAgICAgICBtaW5IZWlnaHQ6IFwiMTAwdmhcIixcclxuICAgICAgICAgICAgcGFkZGluZzogXCIxcmVtXCIsXHJcbiAgICAgICAgICAgIGZvbnRTaXplOiBcIjExcHhcIixcclxuICAgICAgICAgICAgY29sb3I6IFwiIzc4ODA4YVwiXHJcbiAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICA8Q3J1bWJCYXIgY2F0ZWdvcnk9e2l0ZW0uY2F0ZWdvcnl9XHJcbiAgICAgICAgICAgICAgICBzdWJDYXRlZ29yeT17aXRlbS5zdWJDYXRlZ29yeX1cclxuICAgICAgICAgICAgICAgIHByb2R1Y3ROYW1lPXtpdGVtLnByb2R1Y3ROYW1lfVxyXG4gICAgICAgICAgICAgICAgcHJvZHVjdENhdGVnb3J5PXtpdGVtLnByb2R1Y3RDYXRlZ29yeX1cclxuICAgICAgICAgICAgICAgIHdhdGNoaW5nPXtpdGVtLndhdGNoaW5nfVxyXG4gICAgICAgICAgICAgICAgbGlrZXM9e2l0ZW0ubGlrZXN9XHJcbiAgICAgICAgICAgICAgICBib29rbWFya3M9e2l0ZW0uYm9va21hcmtzfVxyXG4gICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTEyIGNvbC1tZC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFByb2R1Y3RMZWZ0UGFuZSBwcm9kdWN0SW1hZ2U9e2l0ZW0ucHJvZHVjdEltYWdlfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS0xMiBjb2wtbWQtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxQcm9kdWN0TWlkZGxlUGFuZSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdE5hbWU9e2l0ZW0ucHJvZHVjdE5hbWV9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0RGVzY3I9e2l0ZW0ucHJvZHVjdERlc2NyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByYXRpbmc9e2l0ZW0ucmF0aW5nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByYXRpbmdDb3VudD17aXRlbS5yYXRpbmdDb3VudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV2aWV3cz17aXRlbS5yZXZpZXdzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWFudGl0eT17cXVhbnRpdHl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFF1YW50aXR5ID0ge3NldFF1YW50aXR5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0VHlwZXM9e2l0ZW0ucHJvZHVjdFR5cGVzfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS0xMiBjb2wtbWQtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxQcm9kdWN0UmlnaHRQYW5lIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdFBhZ2U7Il0sIm5hbWVzIjpbIkNydW1iQmFyIiwiUHJvZHVjdExlZnRQYW5lIiwiUHJvZHVjdE1pZGRsZVBhbmUiLCJpdGVtcyIsInVzZVN0YXRlIiwiUHJvZHVjdFBhZ2UiLCJpdGVtIiwicXVhbnRpdHkiLCJzZXRRdWFudGl0eSIsImRpdiIsInN0eWxlIiwibWluSGVpZ2h0IiwicGFkZGluZyIsImZvbnRTaXplIiwiY29sb3IiLCJjYXRlZ29yeSIsInN1YkNhdGVnb3J5IiwicHJvZHVjdE5hbWUiLCJwcm9kdWN0Q2F0ZWdvcnkiLCJ3YXRjaGluZyIsImxpa2VzIiwiYm9va21hcmtzIiwiY2xhc3NOYW1lIiwicHJvZHVjdEltYWdlIiwicHJvZHVjdERlc2NyIiwicmF0aW5nIiwicmF0aW5nQ291bnQiLCJyZXZpZXdzIiwicHJvZHVjdFR5cGVzIiwiUHJvZHVjdFJpZ2h0UGFuZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ProductPage/ProductPage.js\n"));

/***/ })

});