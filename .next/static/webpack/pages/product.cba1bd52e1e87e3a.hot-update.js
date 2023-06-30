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

/***/ "./components/ProductPage/ProductMiddlePane.js":
/*!*****************************************************!*\
  !*** ./components/ProductPage/ProductMiddlePane.js ***!
  \*****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.mjs\");\n/* harmony import */ var _ProductType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProductType */ \"./components/ProductPage/ProductType.js\");\n\n\n\n\nconst ProductMiddlePane = (param)=>{\n    let { productName, productDescr, rating, ratingCount, reviews, quantity, setQuantity, productTypes } = param;\n    const handleQuantityAdd = ()=>{\n        setQuantity(quantity + 1);\n    };\n    const handleQuantitySub = ()=>{\n        setQuantity(quantity == 1 ? 1 : quantity - 1);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    href: \"#\",\n                    children: productName\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\standr-next\\\\components\\\\ProductPage\\\\ProductMiddlePane.js\",\n                    lineNumber: 24,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\standr-next\\\\components\\\\ProductPage\\\\ProductMiddlePane.js\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"mt-3 color-pry\",\n                children: productDescr\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\standr-next\\\\components\\\\ProductPage\\\\ProductMiddlePane.js\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"rating\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {\n                        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faStar,\n                        style: {\n                            color: \"gold\",\n                            width: \"14px\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\standr-next\\\\components\\\\ProductPage\\\\ProductMiddlePane.js\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, undefined),\n                    \"\\xa0\\xa0\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {\n                        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faStar,\n                        style: {\n                            color: \"gold\",\n                            width: \"14px\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\standr-next\\\\components\\\\ProductPage\\\\ProductMiddlePane.js\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, undefined),\n                    \"\\xa0\\xa0\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {\n                        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faStar,\n                        style: {\n                            color: \"gold\",\n                            width: \"14px\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\standr-next\\\\components\\\\ProductPage\\\\ProductMiddlePane.js\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, undefined),\n                    \"\\xa0\\xa0\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {\n                        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faStar,\n                        style: {\n                            width: \"14px\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\standr-next\\\\components\\\\ProductPage\\\\ProductMiddlePane.js\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, undefined),\n                    \"\\xa0\\xa0\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {\n                        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faStar,\n                        style: {\n                            width: \"14px\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\standr-next\\\\components\\\\ProductPage\\\\ProductMiddlePane.js\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, undefined),\n                    \"\\xa0\\xa0\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"rate color-pry\",\n                        children: rating\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\standr-next\\\\components\\\\ProductPage\\\\ProductMiddlePane.js\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, undefined),\n                    \"\\xa0\\xa0\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"rating-count alt-color\",\n                        children: [\n                            \"(\",\n                            ratingCount,\n                            \")\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\standr-next\\\\components\\\\ProductPage\\\\ProductMiddlePane.js\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"reviews color-pry\",\n                        children: \"\".concat(reviews, \" review\").concat(reviews > 1 ? \"s\" : \"\")\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\standr-next\\\\components\\\\ProductPage\\\\ProductMiddlePane.js\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\standr-next\\\\components\\\\ProductPage\\\\ProductMiddlePane.js\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"quantity color-pry mt-5\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"bold\",\n                        children: \"Quantity:\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\standr-next\\\\components\\\\ProductPage\\\\ProductMiddlePane.js\",\n                        lineNumber: 56,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"qty\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                className: \"qty\",\n                                value: quantity\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\standr-next\\\\components\\\\ProductPage\\\\ProductMiddlePane.js\",\n                                lineNumber: 58,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                className: \"qty-btn color-pry\",\n                                style: {\n                                    marginLeft: \"-48px\"\n                                },\n                                onClick: handleQuantitySub,\n                                children: \"-\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\standr-next\\\\components\\\\ProductPage\\\\ProductMiddlePane.js\",\n                                lineNumber: 59,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                className: \"qty-btn color-pry\",\n                                onClick: handleQuantityAdd,\n                                children: \"+\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\standr-next\\\\components\\\\ProductPage\\\\ProductMiddlePane.js\",\n                                lineNumber: 68,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"limited gold\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {\n                                        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faWarning,\n                                        style: {\n                                            width: \"14px\"\n                                        }\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\standr-next\\\\components\\\\ProductPage\\\\ProductMiddlePane.js\",\n                                        lineNumber: 73,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    \"\\xa0\\xa0 Limited quantity available\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\standr-next\\\\components\\\\ProductPage\\\\ProductMiddlePane.js\",\n                                lineNumber: 72,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProductType__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                productTypes: productTypes,\n                                selected: selected,\n                                setSelected: setSelected\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\standr-next\\\\components\\\\ProductPage\\\\ProductMiddlePane.js\",\n                                lineNumber: 77,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\standr-next\\\\components\\\\ProductPage\\\\ProductMiddlePane.js\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\standr-next\\\\components\\\\ProductPage\\\\ProductMiddlePane.js\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_c = ProductMiddlePane;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductMiddlePane);\nvar _c;\n$RefreshReg$(_c, \"ProductMiddlePane\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Byb2R1Y3RQYWdlL1Byb2R1Y3RNaWRkbGVQYW5lLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBaUU7QUFDSztBQUMvQjtBQUV2QyxNQUFNSSxvQkFBb0I7UUFBQyxFQUN6QkMsV0FBVyxFQUNYQyxZQUFZLEVBQ1pDLE1BQU0sRUFDTkMsV0FBVyxFQUNYQyxPQUFPLEVBQ1BDLFFBQVEsRUFDUkMsV0FBVyxFQUNYQyxZQUFZLEVBQ2I7SUFDQyxNQUFNQyxvQkFBb0I7UUFDeEJGLFlBQVlELFdBQVc7SUFDekI7SUFDQSxNQUFNSSxvQkFBb0I7UUFDeEJILFlBQVlELFlBQVksSUFBSSxJQUFJQSxXQUFXO0lBQzdDO0lBQ0EscUJBQ0U7OzBCQUNFLDhEQUFDSzswQkFDQyw0RUFBQ0M7b0JBQUVDLE1BQUs7OEJBQUtaOzs7Ozs7Ozs7OzswQkFFZiw4REFBQ2E7Z0JBQUdDLFdBQVU7MEJBQWtCYjs7Ozs7OzBCQUVoQyw4REFBQ2M7Z0JBQUlELFdBQVU7O2tDQUNiLDhEQUFDbkIsMkVBQWVBO3dCQUNkcUIsTUFBTXBCLHFFQUFNQTt3QkFDWnFCLE9BQU87NEJBQUVDLE9BQU87NEJBQVFDLE9BQU87d0JBQU87Ozs7OztvQkFDdEM7a0NBRUYsOERBQUN4QiwyRUFBZUE7d0JBQ2RxQixNQUFNcEIscUVBQU1BO3dCQUNacUIsT0FBTzs0QkFBRUMsT0FBTzs0QkFBUUMsT0FBTzt3QkFBTzs7Ozs7O29CQUN0QztrQ0FFRiw4REFBQ3hCLDJFQUFlQTt3QkFDZHFCLE1BQU1wQixxRUFBTUE7d0JBQ1pxQixPQUFPOzRCQUFFQyxPQUFPOzRCQUFRQyxPQUFPO3dCQUFPOzs7Ozs7b0JBQ3RDO2tDQUVGLDhEQUFDeEIsMkVBQWVBO3dCQUFDcUIsTUFBTXBCLHFFQUFNQTt3QkFBRXFCLE9BQU87NEJBQUVFLE9BQU87d0JBQU87Ozs7OztvQkFBSztrQ0FFM0QsOERBQUN4QiwyRUFBZUE7d0JBQUNxQixNQUFNcEIscUVBQU1BO3dCQUFFcUIsT0FBTzs0QkFBRUUsT0FBTzt3QkFBTzs7Ozs7O29CQUFLO2tDQUUzRCw4REFBQ0M7d0JBQUtOLFdBQVU7a0NBQWtCWjs7Ozs7O29CQUFjO2tDQUNoRCw4REFBQ2tCO3dCQUFLTixXQUFVOzs0QkFBeUI7NEJBQUVYOzRCQUFZOzs7Ozs7O2tDQUN2RCw4REFBQ2lCO3dCQUFLTixXQUFVO2tDQUFxQixHQUNuQ1YsT0FEc0NBLFNBQVEsV0FFL0MsT0FEQ0EsVUFBVSxJQUFJLE1BQU07Ozs7Ozs7Ozs7OzswQkFJeEIsOERBQUNXO2dCQUFJRCxXQUFVOztrQ0FDYiw4REFBQ007d0JBQUtOLFdBQVU7a0NBQU87Ozs7OztrQ0FDdkIsOERBQUNDO3dCQUFJRCxXQUFVOzswQ0FDYiw4REFBQ087Z0NBQU1QLFdBQVU7Z0NBQU1RLE9BQU9qQjs7Ozs7OzBDQUM5Qiw4REFBQ007Z0NBQ0NHLFdBQVU7Z0NBQ1ZHLE9BQU87b0NBQ0xNLFlBQVk7Z0NBQ2Q7Z0NBQ0FDLFNBQVNmOzBDQUNWOzs7Ozs7MENBR0QsOERBQUNFO2dDQUFFRyxXQUFVO2dDQUFvQlUsU0FBU2hCOzBDQUFtQjs7Ozs7OzBDQUk3RCw4REFBQ087Z0NBQUlELFdBQVU7O2tEQUNiLDhEQUFDbkIsMkVBQWVBO3dDQUFDcUIsTUFBTW5CLHdFQUFTQTt3Q0FBRW9CLE9BQU87NENBQUVFLE9BQU87d0NBQU87Ozs7OztvQ0FBSzs7Ozs7OzswQ0FJaEUsOERBQUNyQixvREFBV0E7Z0NBQUNTLGNBQWNBO2dDQUFja0IsVUFBVUE7Z0NBQVVDLGFBQWFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1wRjtLQTlFTTNCO0FBK0VOLCtEQUFlQSxpQkFBaUJBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9kdWN0UGFnZS9Qcm9kdWN0TWlkZGxlUGFuZS5qcz8xNDAxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcclxuaW1wb3J0IHsgZmFTdGFyLCBmYVdhcm5pbmcgfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XHJcbmltcG9ydCBQcm9kdWN0VHlwZSBmcm9tICcuL1Byb2R1Y3RUeXBlJ1xyXG5cclxuY29uc3QgUHJvZHVjdE1pZGRsZVBhbmUgPSAoe1xyXG4gIHByb2R1Y3ROYW1lLFxyXG4gIHByb2R1Y3REZXNjcixcclxuICByYXRpbmcsXHJcbiAgcmF0aW5nQ291bnQsXHJcbiAgcmV2aWV3cyxcclxuICBxdWFudGl0eSxcclxuICBzZXRRdWFudGl0eSxcclxuICBwcm9kdWN0VHlwZXNcclxufSkgPT4ge1xyXG4gIGNvbnN0IGhhbmRsZVF1YW50aXR5QWRkID0gKCkgPT4ge1xyXG4gICAgc2V0UXVhbnRpdHkocXVhbnRpdHkgKyAxKTtcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZVF1YW50aXR5U3ViID0gKCkgPT4ge1xyXG4gICAgc2V0UXVhbnRpdHkocXVhbnRpdHkgPT0gMSA/IDEgOiBxdWFudGl0eSAtIDEpO1xyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxoNj5cclxuICAgICAgICA8YSBocmVmPVwiI1wiPntwcm9kdWN0TmFtZX08L2E+XHJcbiAgICAgIDwvaDY+XHJcbiAgICAgIDxoMiBjbGFzc05hbWU9XCJtdC0zIGNvbG9yLXByeVwiPntwcm9kdWN0RGVzY3J9PC9oMj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmF0aW5nXCI+XHJcbiAgICAgICAgPEZvbnRBd2Vzb21lSWNvblxyXG4gICAgICAgICAgaWNvbj17ZmFTdGFyfVxyXG4gICAgICAgICAgc3R5bGU9e3sgY29sb3I6IFwiZ29sZFwiLCB3aWR0aDogXCIxNHB4XCIgfX1cclxuICAgICAgICAvPlxyXG4gICAgICAgICZuYnNwOyZuYnNwO1xyXG4gICAgICAgIDxGb250QXdlc29tZUljb25cclxuICAgICAgICAgIGljb249e2ZhU3Rhcn1cclxuICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiBcImdvbGRcIiwgd2lkdGg6IFwiMTRweFwiIH19XHJcbiAgICAgICAgLz5cclxuICAgICAgICAmbmJzcDsmbmJzcDtcclxuICAgICAgICA8Rm9udEF3ZXNvbWVJY29uXHJcbiAgICAgICAgICBpY29uPXtmYVN0YXJ9XHJcbiAgICAgICAgICBzdHlsZT17eyBjb2xvcjogXCJnb2xkXCIsIHdpZHRoOiBcIjE0cHhcIiB9fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgJm5ic3A7Jm5ic3A7XHJcbiAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVN0YXJ9IHN0eWxlPXt7IHdpZHRoOiBcIjE0cHhcIiB9fSAvPlxyXG4gICAgICAgICZuYnNwOyZuYnNwO1xyXG4gICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFTdGFyfSBzdHlsZT17eyB3aWR0aDogXCIxNHB4XCIgfX0gLz5cclxuICAgICAgICAmbmJzcDsmbmJzcDtcclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyYXRlIGNvbG9yLXByeVwiPntyYXRpbmd9PC9zcGFuPiZuYnNwOyZuYnNwO1xyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInJhdGluZy1jb3VudCBhbHQtY29sb3JcIj4oe3JhdGluZ0NvdW50fSk8L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicmV2aWV3cyBjb2xvci1wcnlcIj57YCR7cmV2aWV3c30gcmV2aWV3JHtcclxuICAgICAgICAgIHJldmlld3MgPiAxID8gXCJzXCIgOiBcIlwiXHJcbiAgICAgICAgfWB9PC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicXVhbnRpdHkgY29sb3ItcHJ5IG10LTVcIj5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJib2xkXCI+UXVhbnRpdHk6PC9zcGFuPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicXR5XCI+XHJcbiAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwicXR5XCIgdmFsdWU9e3F1YW50aXR5fSAvPlxyXG4gICAgICAgICAgPGFcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicXR5LWJ0biBjb2xvci1wcnlcIlxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIG1hcmdpbkxlZnQ6IFwiLTQ4cHhcIixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgb25DbGljaz17aGFuZGxlUXVhbnRpdHlTdWJ9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIC1cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInF0eS1idG4gY29sb3ItcHJ5XCIgb25DbGljaz17aGFuZGxlUXVhbnRpdHlBZGR9PlxyXG4gICAgICAgICAgICArXHJcbiAgICAgICAgICA8L2E+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaW1pdGVkIGdvbGRcIj5cclxuICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVdhcm5pbmd9IHN0eWxlPXt7IHdpZHRoOiBcIjE0cHhcIiB9fSAvPlxyXG4gICAgICAgICAgICAmbmJzcDsmbmJzcDsgTGltaXRlZCBxdWFudGl0eSBhdmFpbGFibGVcclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxQcm9kdWN0VHlwZSBwcm9kdWN0VHlwZXM9e3Byb2R1Y3RUeXBlc30gc2VsZWN0ZWQ9e3NlbGVjdGVkfSBzZXRTZWxlY3RlZD17c2V0U2VsZWN0ZWR9IC8+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RNaWRkbGVQYW5lO1xyXG4iXSwibmFtZXMiOlsiRm9udEF3ZXNvbWVJY29uIiwiZmFTdGFyIiwiZmFXYXJuaW5nIiwiUHJvZHVjdFR5cGUiLCJQcm9kdWN0TWlkZGxlUGFuZSIsInByb2R1Y3ROYW1lIiwicHJvZHVjdERlc2NyIiwicmF0aW5nIiwicmF0aW5nQ291bnQiLCJyZXZpZXdzIiwicXVhbnRpdHkiLCJzZXRRdWFudGl0eSIsInByb2R1Y3RUeXBlcyIsImhhbmRsZVF1YW50aXR5QWRkIiwiaGFuZGxlUXVhbnRpdHlTdWIiLCJoNiIsImEiLCJocmVmIiwiaDIiLCJjbGFzc05hbWUiLCJkaXYiLCJpY29uIiwic3R5bGUiLCJjb2xvciIsIndpZHRoIiwic3BhbiIsImlucHV0IiwidmFsdWUiLCJtYXJnaW5MZWZ0Iiwib25DbGljayIsInNlbGVjdGVkIiwic2V0U2VsZWN0ZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ProductPage/ProductMiddlePane.js\n"));

/***/ })

});