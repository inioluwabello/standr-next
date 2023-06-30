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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _menu_CrumbBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../menu/CrumbBar */ \"./components/menu/CrumbBar.js\");\n/* harmony import */ var _ProductPage_ProductLeftPane__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ProductPage/ProductLeftPane */ \"./components/ProductPage/ProductLeftPane.js\");\n/* harmony import */ var _ProductPage_ProductMiddlePane__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ProductPage/ProductMiddlePane */ \"./components/ProductPage/ProductMiddlePane.js\");\n/* harmony import */ var _data_product__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../data/product */ \"./data/product.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst ProductPage = ()=>{\n    _s();\n    const item = _data_product__WEBPACK_IMPORTED_MODULE_4__[\"default\"][0];\n    const [quantity, setQuantity] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(1);\n    const [selected, setSelected] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(item[0].productTypes[1]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            minHeight: \"100vh\",\n            padding: \"1rem\",\n            fontSize: \"11px\",\n            color: \"#78808a\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_menu_CrumbBar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                category: item.category,\n                subCategory: item.subCategory,\n                productName: item.productName,\n                productCategory: item.productCategory,\n                watching: item.watching,\n                likes: item.likes,\n                bookmarks: item.bookmarks\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\standr-next\\\\components\\\\ProductPage\\\\ProductPage.js\",\n                lineNumber: 18,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"row\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col-sm-12 col-md-4\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProductPage_ProductLeftPane__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            productImage: item.productImage\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\standr-next\\\\components\\\\ProductPage\\\\ProductPage.js\",\n                            lineNumber: 29,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\standr-next\\\\components\\\\ProductPage\\\\ProductPage.js\",\n                        lineNumber: 28,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col-sm-12 col-md-4\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProductPage_ProductMiddlePane__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            productName: item.productName,\n                            productDescr: item.productDescr,\n                            rating: item.rating,\n                            ratingCount: item.ratingCount,\n                            reviews: item.reviews,\n                            quantity: quantity,\n                            setQuantity: setQuantity,\n                            productTypes: item.productTypes,\n                            selected: selected,\n                            setSelected: setSelected\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\standr-next\\\\components\\\\ProductPage\\\\ProductPage.js\",\n                            lineNumber: 32,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\standr-next\\\\components\\\\ProductPage\\\\ProductPage.js\",\n                        lineNumber: 31,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col-sm-12 col-md-3\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\standr-next\\\\components\\\\ProductPage\\\\ProductPage.js\",\n                        lineNumber: 44,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\standr-next\\\\components\\\\ProductPage\\\\ProductPage.js\",\n                lineNumber: 27,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\standr-next\\\\components\\\\ProductPage\\\\ProductPage.js\",\n        lineNumber: 12,\n        columnNumber: 9\n    }, undefined);\n};\n_s(ProductPage, \"bytUJo34Xcr+Qu1frZ6uY7tTKxo=\");\n_c = ProductPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductPage);\nvar _c;\n$RefreshReg$(_c, \"ProductPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Byb2R1Y3RQYWdlL1Byb2R1Y3RQYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQXdDO0FBQ29CO0FBQ0k7QUFDMUI7QUFDTDtBQUVqQyxNQUFNSyxjQUFjOztJQUNoQixNQUFNQyxPQUFPSCx3REFBUTtJQUNyQixNQUFNLENBQUNJLFVBQVVDLFlBQVksR0FBR0osK0NBQVFBLENBQUM7SUFDekMsTUFBTSxDQUFDSyxVQUFVQyxZQUFZLEdBQUdOLCtDQUFRQSxDQUFDRSxJQUFJLENBQUMsRUFBRSxDQUFDSyxZQUFZLENBQUMsRUFBRTtJQUNoRSxxQkFDSSw4REFBQ0M7UUFBSUMsT0FBTztZQUNSQyxXQUFXO1lBQ1hDLFNBQVM7WUFDVEMsVUFBVTtZQUNWQyxPQUFPO1FBQ1A7OzBCQUNBLDhEQUFDakIsc0RBQVFBO2dCQUFDa0IsVUFBVVosS0FBS1k7Z0JBQ3JCQyxhQUFhYixLQUFLYTtnQkFDbEJDLGFBQWFkLEtBQUtjO2dCQUNsQkMsaUJBQWlCZixLQUFLZTtnQkFDdEJDLFVBQVVoQixLQUFLZ0I7Z0JBQ2ZDLE9BQU9qQixLQUFLaUI7Z0JBQ1pDLFdBQVdsQixLQUFLa0I7Ozs7OzswQkFHcEIsOERBQUNaO2dCQUFJYSxXQUFVOztrQ0FDWCw4REFBQ2I7d0JBQUlhLFdBQVU7a0NBQ1gsNEVBQUN4QixvRUFBZUE7NEJBQUN5QixjQUFjcEIsS0FBS29COzs7Ozs7Ozs7OztrQ0FFeEMsOERBQUNkO3dCQUFJYSxXQUFVO2tDQUNYLDRFQUFDdkIsc0VBQWlCQTs0QkFDZGtCLGFBQWFkLEtBQUtjOzRCQUNsQk8sY0FBY3JCLEtBQUtxQjs0QkFDbkJDLFFBQVF0QixLQUFLc0I7NEJBQ2JDLGFBQWF2QixLQUFLdUI7NEJBQ2xCQyxTQUFTeEIsS0FBS3dCOzRCQUNkdkIsVUFBVUE7NEJBQ1ZDLGFBQWVBOzRCQUNmRyxjQUFjTCxLQUFLSzs0QkFDbkJGLFVBQVVBOzRCQUNWQyxhQUFhQTs7Ozs7Ozs7Ozs7a0NBRXJCLDhEQUFDRTt3QkFBSWEsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUS9CO0dBN0NNcEI7S0FBQUE7QUErQ04sK0RBQWVBLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9kdWN0UGFnZS9Qcm9kdWN0UGFnZS5qcz8wNjg4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDcnVtYkJhciBmcm9tIFwiLi4vbWVudS9DcnVtYkJhclwiO1xyXG5pbXBvcnQgUHJvZHVjdExlZnRQYW5lIGZyb20gJy4uL1Byb2R1Y3RQYWdlL1Byb2R1Y3RMZWZ0UGFuZSdcclxuaW1wb3J0IFByb2R1Y3RNaWRkbGVQYW5lIGZyb20gJy4uL1Byb2R1Y3RQYWdlL1Byb2R1Y3RNaWRkbGVQYW5lJ1xyXG5pbXBvcnQgaXRlbXMgZnJvbSAnLi4vLi4vZGF0YS9wcm9kdWN0J1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgUHJvZHVjdFBhZ2UgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBpdGVtID0gaXRlbXNbMF07XHJcbiAgICBjb25zdCBbcXVhbnRpdHksIHNldFF1YW50aXR5XSA9IHVzZVN0YXRlKDEpO1xyXG4gICAgY29uc3QgW3NlbGVjdGVkLCBzZXRTZWxlY3RlZF0gPSB1c2VTdGF0ZShpdGVtWzBdLnByb2R1Y3RUeXBlc1sxXSk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3tcclxuICAgICAgICAgICAgbWluSGVpZ2h0OiBcIjEwMHZoXCIsXHJcbiAgICAgICAgICAgIHBhZGRpbmc6IFwiMXJlbVwiLFxyXG4gICAgICAgICAgICBmb250U2l6ZTogXCIxMXB4XCIsXHJcbiAgICAgICAgICAgIGNvbG9yOiBcIiM3ODgwOGFcIlxyXG4gICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgPENydW1iQmFyIGNhdGVnb3J5PXtpdGVtLmNhdGVnb3J5fVxyXG4gICAgICAgICAgICAgICAgc3ViQ2F0ZWdvcnk9e2l0ZW0uc3ViQ2F0ZWdvcnl9XHJcbiAgICAgICAgICAgICAgICBwcm9kdWN0TmFtZT17aXRlbS5wcm9kdWN0TmFtZX1cclxuICAgICAgICAgICAgICAgIHByb2R1Y3RDYXRlZ29yeT17aXRlbS5wcm9kdWN0Q2F0ZWdvcnl9XHJcbiAgICAgICAgICAgICAgICB3YXRjaGluZz17aXRlbS53YXRjaGluZ31cclxuICAgICAgICAgICAgICAgIGxpa2VzPXtpdGVtLmxpa2VzfVxyXG4gICAgICAgICAgICAgICAgYm9va21hcmtzPXtpdGVtLmJvb2ttYXJrc31cclxuICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS0xMiBjb2wtbWQtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxQcm9kdWN0TGVmdFBhbmUgcHJvZHVjdEltYWdlPXtpdGVtLnByb2R1Y3RJbWFnZX0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tMTIgY29sLW1kLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8UHJvZHVjdE1pZGRsZVBhbmUgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3ROYW1lPXtpdGVtLnByb2R1Y3ROYW1lfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdERlc2NyPXtpdGVtLnByb2R1Y3REZXNjcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmF0aW5nPXtpdGVtLnJhdGluZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmF0aW5nQ291bnQ9e2l0ZW0ucmF0aW5nQ291bnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldmlld3M9e2l0ZW0ucmV2aWV3c31cclxuICAgICAgICAgICAgICAgICAgICAgICAgcXVhbnRpdHk9e3F1YW50aXR5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRRdWFudGl0eSA9IHtzZXRRdWFudGl0eX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdFR5cGVzPXtpdGVtLnByb2R1Y3RUeXBlc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ9e3NlbGVjdGVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRTZWxlY3RlZD17c2V0U2VsZWN0ZWR9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTEyIGNvbC1tZC0zXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RQYWdlOyJdLCJuYW1lcyI6WyJDcnVtYkJhciIsIlByb2R1Y3RMZWZ0UGFuZSIsIlByb2R1Y3RNaWRkbGVQYW5lIiwiaXRlbXMiLCJ1c2VTdGF0ZSIsIlByb2R1Y3RQYWdlIiwiaXRlbSIsInF1YW50aXR5Iiwic2V0UXVhbnRpdHkiLCJzZWxlY3RlZCIsInNldFNlbGVjdGVkIiwicHJvZHVjdFR5cGVzIiwiZGl2Iiwic3R5bGUiLCJtaW5IZWlnaHQiLCJwYWRkaW5nIiwiZm9udFNpemUiLCJjb2xvciIsImNhdGVnb3J5Iiwic3ViQ2F0ZWdvcnkiLCJwcm9kdWN0TmFtZSIsInByb2R1Y3RDYXRlZ29yeSIsIndhdGNoaW5nIiwibGlrZXMiLCJib29rbWFya3MiLCJjbGFzc05hbWUiLCJwcm9kdWN0SW1hZ2UiLCJwcm9kdWN0RGVzY3IiLCJyYXRpbmciLCJyYXRpbmdDb3VudCIsInJldmlld3MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ProductPage/ProductPage.js\n"));

/***/ })

});