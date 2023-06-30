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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.mjs\");\n/* harmony import */ var _ProductType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProductType */ \"./components/ProductPage/ProductType.js\");\n\n\n\n\nconst ProductMiddlePane = (param)=>{\n    let { productName, productDescr, rating, ratingCount, reviews, quantity, setQuantity, productTypes } = param;\n    const handleQuantityAdd = ()=>{\n        setQuantity(quantity + 1);\n    };\n    const handleQuantitySub = ()=>{\n        setQuantity(quantity == 1 ? 1 : quantity - 1);\n    };\n    productTypes.map((productType)=>{\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProductType__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            productType: productType\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\standr-next\\\\components\\\\ProductPage\\\\ProductMiddlePane.js\",\n            lineNumber: 23,\n            columnNumber: 12\n        }, undefined);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    href: \"#\",\n                    children: productName\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\standr-next\\\\components\\\\ProductPage\\\\ProductMiddlePane.js\",\n                    lineNumber: 29,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\standr-next\\\\components\\\\ProductPage\\\\ProductMiddlePane.js\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"mt-3 color-pry\",\n                children: productDescr\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\standr-next\\\\components\\\\ProductPage\\\\ProductMiddlePane.js\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"rating\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {\n                        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faStar,\n                        style: {\n                            color: \"gold\",\n                            width: \"14px\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\standr-next\\\\components\\\\ProductPage\\\\ProductMiddlePane.js\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, undefined),\n                    \"\\xa0\\xa0\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {\n                        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faStar,\n                        style: {\n                            color: \"gold\",\n                            width: \"14px\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\standr-next\\\\components\\\\ProductPage\\\\ProductMiddlePane.js\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, undefined),\n                    \"\\xa0\\xa0\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {\n                        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faStar,\n                        style: {\n                            color: \"gold\",\n                            width: \"14px\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\standr-next\\\\components\\\\ProductPage\\\\ProductMiddlePane.js\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, undefined),\n                    \"\\xa0\\xa0\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {\n                        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faStar,\n                        style: {\n                            width: \"14px\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\standr-next\\\\components\\\\ProductPage\\\\ProductMiddlePane.js\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, undefined),\n                    \"\\xa0\\xa0\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {\n                        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faStar,\n                        style: {\n                            width: \"14px\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\standr-next\\\\components\\\\ProductPage\\\\ProductMiddlePane.js\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, undefined),\n                    \"\\xa0\\xa0\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"rate color-pry\",\n                        children: rating\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\standr-next\\\\components\\\\ProductPage\\\\ProductMiddlePane.js\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, undefined),\n                    \"\\xa0\\xa0\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"rating-count alt-color\",\n                        children: [\n                            \"(\",\n                            ratingCount,\n                            \")\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\standr-next\\\\components\\\\ProductPage\\\\ProductMiddlePane.js\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"reviews color-pry\",\n                        children: \"\".concat(reviews, \" review\").concat(reviews > 1 ? \"s\" : \"\")\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\standr-next\\\\components\\\\ProductPage\\\\ProductMiddlePane.js\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\standr-next\\\\components\\\\ProductPage\\\\ProductMiddlePane.js\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"quantity color-pry mt-5\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"bold\",\n                        children: \"Quantity:\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\standr-next\\\\components\\\\ProductPage\\\\ProductMiddlePane.js\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"qty\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                className: \"qty\",\n                                value: quantity\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\standr-next\\\\components\\\\ProductPage\\\\ProductMiddlePane.js\",\n                                lineNumber: 63,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                className: \"qty-btn color-pry\",\n                                style: {\n                                    marginLeft: \"-48px\"\n                                },\n                                onClick: handleQuantitySub,\n                                children: \"-\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\standr-next\\\\components\\\\ProductPage\\\\ProductMiddlePane.js\",\n                                lineNumber: 64,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                className: \"qty-btn color-pry\",\n                                onClick: handleQuantityAdd,\n                                children: \"+\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\standr-next\\\\components\\\\ProductPage\\\\ProductMiddlePane.js\",\n                                lineNumber: 73,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"limited gold\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {\n                                        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faWarning,\n                                        style: {\n                                            width: \"14px\"\n                                        }\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\standr-next\\\\components\\\\ProductPage\\\\ProductMiddlePane.js\",\n                                        lineNumber: 78,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    \"\\xa0\\xa0 Limited quantity available\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\standr-next\\\\components\\\\ProductPage\\\\ProductMiddlePane.js\",\n                                lineNumber: 77,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\standr-next\\\\components\\\\ProductPage\\\\ProductMiddlePane.js\",\n                        lineNumber: 62,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\standr-next\\\\components\\\\ProductPage\\\\ProductMiddlePane.js\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_c = ProductMiddlePane;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductMiddlePane);\nvar _c;\n$RefreshReg$(_c, \"ProductMiddlePane\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Byb2R1Y3RQYWdlL1Byb2R1Y3RNaWRkbGVQYW5lLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBaUU7QUFDSztBQUM5QjtBQUV4QyxNQUFNSSxvQkFBb0I7UUFBQyxFQUN6QkMsV0FBVyxFQUNYQyxZQUFZLEVBQ1pDLE1BQU0sRUFDTkMsV0FBVyxFQUNYQyxPQUFPLEVBQ1BDLFFBQVEsRUFDUkMsV0FBVyxFQUNYQyxZQUFZLEVBQ2I7SUFDQyxNQUFNQyxvQkFBb0I7UUFDeEJGLFlBQVlELFdBQVc7SUFDekI7SUFDQSxNQUFNSSxvQkFBb0I7UUFDeEJILFlBQVlELFlBQVksSUFBSSxJQUFJQSxXQUFXO0lBQzdDO0lBRUFFLGFBQWFHLElBQUksQ0FBQ0M7UUFDaEIscUJBQU8sOERBQUNiLG9EQUFXQTtZQUFDYSxhQUFhQTs7Ozs7O0lBQ25DO0lBRUEscUJBQ0U7OzBCQUNFLDhEQUFDQzswQkFDQyw0RUFBQ0M7b0JBQUVDLE1BQUs7OEJBQUtkOzs7Ozs7Ozs7OzswQkFFZiw4REFBQ2U7Z0JBQUdDLFdBQVU7MEJBQWtCZjs7Ozs7OzBCQUVoQyw4REFBQ2dCO2dCQUFJRCxXQUFVOztrQ0FDYiw4REFBQ3JCLDJFQUFlQTt3QkFDZHVCLE1BQU10QixxRUFBTUE7d0JBQ1p1QixPQUFPOzRCQUFFQyxPQUFPOzRCQUFRQyxPQUFPO3dCQUFPOzs7Ozs7b0JBQ3RDO2tDQUVGLDhEQUFDMUIsMkVBQWVBO3dCQUNkdUIsTUFBTXRCLHFFQUFNQTt3QkFDWnVCLE9BQU87NEJBQUVDLE9BQU87NEJBQVFDLE9BQU87d0JBQU87Ozs7OztvQkFDdEM7a0NBRUYsOERBQUMxQiwyRUFBZUE7d0JBQ2R1QixNQUFNdEIscUVBQU1BO3dCQUNadUIsT0FBTzs0QkFBRUMsT0FBTzs0QkFBUUMsT0FBTzt3QkFBTzs7Ozs7O29CQUN0QztrQ0FFRiw4REFBQzFCLDJFQUFlQTt3QkFBQ3VCLE1BQU10QixxRUFBTUE7d0JBQUV1QixPQUFPOzRCQUFFRSxPQUFPO3dCQUFPOzs7Ozs7b0JBQUs7a0NBRTNELDhEQUFDMUIsMkVBQWVBO3dCQUFDdUIsTUFBTXRCLHFFQUFNQTt3QkFBRXVCLE9BQU87NEJBQUVFLE9BQU87d0JBQU87Ozs7OztvQkFBSztrQ0FFM0QsOERBQUNDO3dCQUFLTixXQUFVO2tDQUFrQmQ7Ozs7OztvQkFBYztrQ0FDaEQsOERBQUNvQjt3QkFBS04sV0FBVTs7NEJBQXlCOzRCQUFFYjs0QkFBWTs7Ozs7OztrQ0FDdkQsOERBQUNtQjt3QkFBS04sV0FBVTtrQ0FBcUIsR0FDbkNaLE9BRHNDQSxTQUFRLFdBRS9DLE9BRENBLFVBQVUsSUFBSSxNQUFNOzs7Ozs7Ozs7Ozs7MEJBSXhCLDhEQUFDYTtnQkFBSUQsV0FBVTs7a0NBQ2IsOERBQUNNO3dCQUFLTixXQUFVO2tDQUFPOzs7Ozs7a0NBQ3ZCLDhEQUFDQzt3QkFBSUQsV0FBVTs7MENBQ2IsOERBQUNPO2dDQUFNUCxXQUFVO2dDQUFNUSxPQUFPbkI7Ozs7OzswQ0FDOUIsOERBQUNRO2dDQUNDRyxXQUFVO2dDQUNWRyxPQUFPO29DQUNMTSxZQUFZO2dDQUNkO2dDQUNBQyxTQUFTakI7MENBQ1Y7Ozs7OzswQ0FHRCw4REFBQ0k7Z0NBQUVHLFdBQVU7Z0NBQW9CVSxTQUFTbEI7MENBQW1COzs7Ozs7MENBSTdELDhEQUFDUztnQ0FBSUQsV0FBVTs7a0RBQ2IsOERBQUNyQiwyRUFBZUE7d0NBQUN1QixNQUFNckIsd0VBQVNBO3dDQUFFc0IsT0FBTzs0Q0FBRUUsT0FBTzt3Q0FBTzs7Ozs7O29DQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFZMUU7S0FyRk10QjtBQXNGTiwrREFBZUEsaUJBQWlCQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUHJvZHVjdFBhZ2UvUHJvZHVjdE1pZGRsZVBhbmUuanM/MTQwMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XHJcbmltcG9ydCB7IGZhU3RhciwgZmFXYXJuaW5nIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiO1xyXG5pbXBvcnQgUHJvZHVjdFR5cGUgZnJvbSBcIi4vUHJvZHVjdFR5cGVcIjtcclxuXHJcbmNvbnN0IFByb2R1Y3RNaWRkbGVQYW5lID0gKHtcclxuICBwcm9kdWN0TmFtZSxcclxuICBwcm9kdWN0RGVzY3IsXHJcbiAgcmF0aW5nLFxyXG4gIHJhdGluZ0NvdW50LFxyXG4gIHJldmlld3MsXHJcbiAgcXVhbnRpdHksXHJcbiAgc2V0UXVhbnRpdHksXHJcbiAgcHJvZHVjdFR5cGVzLFxyXG59KSA9PiB7XHJcbiAgY29uc3QgaGFuZGxlUXVhbnRpdHlBZGQgPSAoKSA9PiB7XHJcbiAgICBzZXRRdWFudGl0eShxdWFudGl0eSArIDEpO1xyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlUXVhbnRpdHlTdWIgPSAoKSA9PiB7XHJcbiAgICBzZXRRdWFudGl0eShxdWFudGl0eSA9PSAxID8gMSA6IHF1YW50aXR5IC0gMSk7XHJcbiAgfTtcclxuXHJcbiAgcHJvZHVjdFR5cGVzLm1hcCgocHJvZHVjdFR5cGUpID0+IHtcclxuICAgIHJldHVybiA8UHJvZHVjdFR5cGUgcHJvZHVjdFR5cGU9e3Byb2R1Y3RUeXBlfSAvPlxyXG4gIH0pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8aDY+XHJcbiAgICAgICAgPGEgaHJlZj1cIiNcIj57cHJvZHVjdE5hbWV9PC9hPlxyXG4gICAgICA8L2g2PlxyXG4gICAgICA8aDIgY2xhc3NOYW1lPVwibXQtMyBjb2xvci1wcnlcIj57cHJvZHVjdERlc2NyfTwvaDI+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJhdGluZ1wiPlxyXG4gICAgICAgIDxGb250QXdlc29tZUljb25cclxuICAgICAgICAgIGljb249e2ZhU3Rhcn1cclxuICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiBcImdvbGRcIiwgd2lkdGg6IFwiMTRweFwiIH19XHJcbiAgICAgICAgLz5cclxuICAgICAgICAmbmJzcDsmbmJzcDtcclxuICAgICAgICA8Rm9udEF3ZXNvbWVJY29uXHJcbiAgICAgICAgICBpY29uPXtmYVN0YXJ9XHJcbiAgICAgICAgICBzdHlsZT17eyBjb2xvcjogXCJnb2xkXCIsIHdpZHRoOiBcIjE0cHhcIiB9fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgJm5ic3A7Jm5ic3A7XHJcbiAgICAgICAgPEZvbnRBd2Vzb21lSWNvblxyXG4gICAgICAgICAgaWNvbj17ZmFTdGFyfVxyXG4gICAgICAgICAgc3R5bGU9e3sgY29sb3I6IFwiZ29sZFwiLCB3aWR0aDogXCIxNHB4XCIgfX1cclxuICAgICAgICAvPlxyXG4gICAgICAgICZuYnNwOyZuYnNwO1xyXG4gICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFTdGFyfSBzdHlsZT17eyB3aWR0aDogXCIxNHB4XCIgfX0gLz5cclxuICAgICAgICAmbmJzcDsmbmJzcDtcclxuICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhU3Rhcn0gc3R5bGU9e3sgd2lkdGg6IFwiMTRweFwiIH19IC8+XHJcbiAgICAgICAgJm5ic3A7Jm5ic3A7XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicmF0ZSBjb2xvci1wcnlcIj57cmF0aW5nfTwvc3Bhbj4mbmJzcDsmbmJzcDtcclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyYXRpbmctY291bnQgYWx0LWNvbG9yXCI+KHtyYXRpbmdDb3VudH0pPC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInJldmlld3MgY29sb3ItcHJ5XCI+e2Ake3Jldmlld3N9IHJldmlldyR7XHJcbiAgICAgICAgICByZXZpZXdzID4gMSA/IFwic1wiIDogXCJcIlxyXG4gICAgICAgIH1gfTwvc3Bhbj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInF1YW50aXR5IGNvbG9yLXByeSBtdC01XCI+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYm9sZFwiPlF1YW50aXR5Ojwvc3Bhbj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInF0eVwiPlxyXG4gICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cInF0eVwiIHZhbHVlPXtxdWFudGl0eX0gLz5cclxuICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInF0eS1idG4gY29sb3ItcHJ5XCJcclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiBcIi00OHB4XCIsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVF1YW50aXR5U3VifVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICAtXHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJxdHktYnRuIGNvbG9yLXByeVwiIG9uQ2xpY2s9e2hhbmRsZVF1YW50aXR5QWRkfT5cclxuICAgICAgICAgICAgK1xyXG4gICAgICAgICAgPC9hPlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGltaXRlZCBnb2xkXCI+XHJcbiAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFXYXJuaW5nfSBzdHlsZT17eyB3aWR0aDogXCIxNHB4XCIgfX0gLz5cclxuICAgICAgICAgICAgJm5ic3A7Jm5ic3A7IExpbWl0ZWQgcXVhbnRpdHkgYXZhaWxhYmxlXHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICBcclxuICAgICAgICAgIHsvKiA8UHJvZHVjdFR5cGUgcHJvZHVjdFR5cGVzPXtwcm9kdWN0VHlwZXN9IC8+ICovfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RNaWRkbGVQYW5lO1xyXG4iXSwibmFtZXMiOlsiRm9udEF3ZXNvbWVJY29uIiwiZmFTdGFyIiwiZmFXYXJuaW5nIiwiUHJvZHVjdFR5cGUiLCJQcm9kdWN0TWlkZGxlUGFuZSIsInByb2R1Y3ROYW1lIiwicHJvZHVjdERlc2NyIiwicmF0aW5nIiwicmF0aW5nQ291bnQiLCJyZXZpZXdzIiwicXVhbnRpdHkiLCJzZXRRdWFudGl0eSIsInByb2R1Y3RUeXBlcyIsImhhbmRsZVF1YW50aXR5QWRkIiwiaGFuZGxlUXVhbnRpdHlTdWIiLCJtYXAiLCJwcm9kdWN0VHlwZSIsImg2IiwiYSIsImhyZWYiLCJoMiIsImNsYXNzTmFtZSIsImRpdiIsImljb24iLCJzdHlsZSIsImNvbG9yIiwid2lkdGgiLCJzcGFuIiwiaW5wdXQiLCJ2YWx1ZSIsIm1hcmdpbkxlZnQiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ProductPage/ProductMiddlePane.js\n"));

/***/ })

});