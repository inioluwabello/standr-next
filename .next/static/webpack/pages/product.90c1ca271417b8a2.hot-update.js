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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.mjs\");\n\n\n\nconst ProductMiddlePane = (param)=>{\n    let { productName, productDescr, rating, ratingCount, reviews, quantity, setQuantity } = param;\n    const handleQuantityAdd = ()=>{\n        setQuantity(quantity + 1);\n    };\n    const handleQuantitySub = ()=>{\n        setQuantity(quantity == 1 ? 1 : quantity - 1);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    href: \"#\",\n                    children: productName\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\standr-next\\\\components\\\\ProductPage\\\\ProductMiddlePane.js\",\n                    lineNumber: 22,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\standr-next\\\\components\\\\ProductPage\\\\ProductMiddlePane.js\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"mt-3 color-pry\",\n                children: productDescr\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\standr-next\\\\components\\\\ProductPage\\\\ProductMiddlePane.js\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"rating\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {\n                        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faStar,\n                        style: {\n                            color: \"gold\",\n                            width: \"14px\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\standr-next\\\\components\\\\ProductPage\\\\ProductMiddlePane.js\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, undefined),\n                    \"\\xa0\\xa0\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {\n                        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faStar,\n                        style: {\n                            color: \"gold\",\n                            width: \"14px\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\standr-next\\\\components\\\\ProductPage\\\\ProductMiddlePane.js\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, undefined),\n                    \"\\xa0\\xa0\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {\n                        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faStar,\n                        style: {\n                            color: \"gold\",\n                            width: \"14px\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\standr-next\\\\components\\\\ProductPage\\\\ProductMiddlePane.js\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, undefined),\n                    \"\\xa0\\xa0\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {\n                        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faStar,\n                        style: {\n                            width: \"14px\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\standr-next\\\\components\\\\ProductPage\\\\ProductMiddlePane.js\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, undefined),\n                    \"\\xa0\\xa0\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {\n                        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faStar,\n                        style: {\n                            width: \"14px\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\standr-next\\\\components\\\\ProductPage\\\\ProductMiddlePane.js\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, undefined),\n                    \"\\xa0\\xa0\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"rate color-pry\",\n                        children: rating\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\standr-next\\\\components\\\\ProductPage\\\\ProductMiddlePane.js\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, undefined),\n                    \"\\xa0\\xa0\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"rating-count alt-color\",\n                        children: [\n                            \"(\",\n                            ratingCount,\n                            \")\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\standr-next\\\\components\\\\ProductPage\\\\ProductMiddlePane.js\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"reviews color-pry\",\n                        children: \"\".concat(reviews, \" review\").concat(reviews > 1 ? \"s\" : \"\")\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\standr-next\\\\components\\\\ProductPage\\\\ProductMiddlePane.js\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\standr-next\\\\components\\\\ProductPage\\\\ProductMiddlePane.js\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"quantity color-pry mt-5\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"bold\",\n                        children: \"Quantity:\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\standr-next\\\\components\\\\ProductPage\\\\ProductMiddlePane.js\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"qty\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                className: \"qty\",\n                                value: quantity\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\standr-next\\\\components\\\\ProductPage\\\\ProductMiddlePane.js\",\n                                lineNumber: 56,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                className: \"qty-btn color-pry\",\n                                style: {\n                                    marginLeft: \"-48px\"\n                                },\n                                onClick: handleQuantitySub,\n                                children: \"-\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\standr-next\\\\components\\\\ProductPage\\\\ProductMiddlePane.js\",\n                                lineNumber: 57,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                className: \"qty-btn color-pry\",\n                                onClick: handleQuantityAdd,\n                                children: \"+\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\standr-next\\\\components\\\\ProductPage\\\\ProductMiddlePane.js\",\n                                lineNumber: 66,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"limited gold\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {\n                                        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faWarning,\n                                        style: {\n                                            width: \"14px\"\n                                        }\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\standr-next\\\\components\\\\ProductPage\\\\ProductMiddlePane.js\",\n                                        lineNumber: 71,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    \"\\xa0\\xa0 Limited quantity available\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\standr-next\\\\components\\\\ProductPage\\\\ProductMiddlePane.js\",\n                                lineNumber: 70,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"sect-4 bg-wh\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"row\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"col\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    children: \"Oily Skins\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\standr-next\\\\components\\\\ProductPage\\\\ProductMiddlePane.js\",\n                                                    lineNumber: 79,\n                                                    columnNumber: 21\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    children: \"SPF 50\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\standr-next\\\\components\\\\ProductPage\\\\ProductMiddlePane.js\",\n                                                    lineNumber: 80,\n                                                    columnNumber: 21\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\standr-next\\\\components\\\\ProductPage\\\\ProductMiddlePane.js\",\n                                            lineNumber: 78,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"col\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"text-right\",\n                                                    children: \"chice card\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\standr-next\\\\components\\\\ProductPage\\\\ProductMiddlePane.js\",\n                                                    lineNumber: 83,\n                                                    columnNumber: 21\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    children: \"description\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\standr-next\\\\components\\\\ProductPage\\\\ProductMiddlePane.js\",\n                                                    lineNumber: 84,\n                                                    columnNumber: 21\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\standr-next\\\\components\\\\ProductPage\\\\ProductMiddlePane.js\",\n                                            lineNumber: 82,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\standr-next\\\\components\\\\ProductPage\\\\ProductMiddlePane.js\",\n                                    lineNumber: 77,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\standr-next\\\\components\\\\ProductPage\\\\ProductMiddlePane.js\",\n                                lineNumber: 76,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\standr-next\\\\components\\\\ProductPage\\\\ProductMiddlePane.js\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\bello\\\\apps\\\\react-apps\\\\next-js-apps\\\\standr-next\\\\components\\\\ProductPage\\\\ProductMiddlePane.js\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_c = ProductMiddlePane;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductMiddlePane);\nvar _c;\n$RefreshReg$(_c, \"ProductMiddlePane\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Byb2R1Y3RQYWdlL1Byb2R1Y3RNaWRkbGVQYW5lLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFpRTtBQUNLO0FBRXRFLE1BQU1HLG9CQUFvQjtRQUFDLEVBQ3pCQyxXQUFXLEVBQ1hDLFlBQVksRUFDWkMsTUFBTSxFQUNOQyxXQUFXLEVBQ1hDLE9BQU8sRUFDUEMsUUFBUSxFQUNSQyxXQUFXLEVBQ1o7SUFDQyxNQUFNQyxvQkFBb0I7UUFDeEJELFlBQVlELFdBQVc7SUFDekI7SUFDQSxNQUFNRyxvQkFBb0I7UUFDeEJGLFlBQVlELFlBQVksSUFBSSxJQUFJQSxXQUFXO0lBQzdDO0lBQ0EscUJBQ0U7OzBCQUNFLDhEQUFDSTswQkFDQyw0RUFBQ0M7b0JBQUVDLE1BQUs7OEJBQUtYOzs7Ozs7Ozs7OzswQkFFZiw4REFBQ1k7Z0JBQUdDLFdBQVU7MEJBQWtCWjs7Ozs7OzBCQUVoQyw4REFBQ2E7Z0JBQUlELFdBQVU7O2tDQUNiLDhEQUFDakIsMkVBQWVBO3dCQUNkbUIsTUFBTWxCLHFFQUFNQTt3QkFDWm1CLE9BQU87NEJBQUVDLE9BQU87NEJBQVFDLE9BQU87d0JBQU87Ozs7OztvQkFDdEM7a0NBRUYsOERBQUN0QiwyRUFBZUE7d0JBQ2RtQixNQUFNbEIscUVBQU1BO3dCQUNabUIsT0FBTzs0QkFBRUMsT0FBTzs0QkFBUUMsT0FBTzt3QkFBTzs7Ozs7O29CQUN0QztrQ0FFRiw4REFBQ3RCLDJFQUFlQTt3QkFDZG1CLE1BQU1sQixxRUFBTUE7d0JBQ1ptQixPQUFPOzRCQUFFQyxPQUFPOzRCQUFRQyxPQUFPO3dCQUFPOzs7Ozs7b0JBQ3RDO2tDQUVGLDhEQUFDdEIsMkVBQWVBO3dCQUFDbUIsTUFBTWxCLHFFQUFNQTt3QkFBRW1CLE9BQU87NEJBQUVFLE9BQU87d0JBQU87Ozs7OztvQkFBSztrQ0FFM0QsOERBQUN0QiwyRUFBZUE7d0JBQUNtQixNQUFNbEIscUVBQU1BO3dCQUFFbUIsT0FBTzs0QkFBRUUsT0FBTzt3QkFBTzs7Ozs7O29CQUFLO2tDQUUzRCw4REFBQ0M7d0JBQUtOLFdBQVU7a0NBQWtCWDs7Ozs7O29CQUFjO2tDQUNoRCw4REFBQ2lCO3dCQUFLTixXQUFVOzs0QkFBeUI7NEJBQUVWOzRCQUFZOzs7Ozs7O2tDQUN2RCw4REFBQ2dCO3dCQUFLTixXQUFVO2tDQUFxQixHQUNuQ1QsT0FEc0NBLFNBQVEsV0FFL0MsT0FEQ0EsVUFBVSxJQUFJLE1BQU07Ozs7Ozs7Ozs7OzswQkFJeEIsOERBQUNVO2dCQUFJRCxXQUFVOztrQ0FDYiw4REFBQ007d0JBQUtOLFdBQVU7a0NBQU87Ozs7OztrQ0FDdkIsOERBQUNDO3dCQUFJRCxXQUFVOzswQ0FDYiw4REFBQ087Z0NBQU1QLFdBQVU7Z0NBQU1RLE9BQU9oQjs7Ozs7OzBDQUM5Qiw4REFBQ0s7Z0NBQ0NHLFdBQVU7Z0NBQ1ZHLE9BQU87b0NBQ0xNLFlBQVk7Z0NBQ2Q7Z0NBQ0FDLFNBQVNmOzBDQUNWOzs7Ozs7MENBR0QsOERBQUNFO2dDQUFFRyxXQUFVO2dDQUFvQlUsU0FBU2hCOzBDQUFtQjs7Ozs7OzBDQUk3RCw4REFBQ087Z0NBQUlELFdBQVU7O2tEQUNULDhEQUFDakIsMkVBQWVBO3dDQUFDbUIsTUFBTWpCLHdFQUFTQTt3Q0FBRWtCLE9BQU87NENBQUVFLE9BQU87d0NBQU87Ozs7OztvQ0FBSzs7Ozs7OzswQ0FLcEUsOERBQUNKO2dDQUFJRCxXQUFVOzBDQUNiLDRFQUFDQztvQ0FBSUQsV0FBVTs7c0RBQ1gsOERBQUNDOzRDQUFJRCxXQUFVOzs4REFDWCw4REFBQ0M7OERBQUk7Ozs7Ozs4REFDTCw4REFBQ0E7OERBQUk7Ozs7Ozs7Ozs7OztzREFFVCw4REFBQ0E7NENBQUlELFdBQVU7OzhEQUNYLDhEQUFDQztvREFBSUQsV0FBVTs4REFBYTs7Ozs7OzhEQUM1Qiw4REFBQ0M7OERBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRekI7S0F4Rk1mO0FBeUZOLCtEQUFlQSxpQkFBaUJBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9kdWN0UGFnZS9Qcm9kdWN0TWlkZGxlUGFuZS5qcz8xNDAxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcclxuaW1wb3J0IHsgZmFTdGFyLCBmYVdhcm5pbmcgfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XHJcblxyXG5jb25zdCBQcm9kdWN0TWlkZGxlUGFuZSA9ICh7XHJcbiAgcHJvZHVjdE5hbWUsXHJcbiAgcHJvZHVjdERlc2NyLFxyXG4gIHJhdGluZyxcclxuICByYXRpbmdDb3VudCxcclxuICByZXZpZXdzLFxyXG4gIHF1YW50aXR5LFxyXG4gIHNldFF1YW50aXR5LFxyXG59KSA9PiB7XHJcbiAgY29uc3QgaGFuZGxlUXVhbnRpdHlBZGQgPSAoKSA9PiB7XHJcbiAgICBzZXRRdWFudGl0eShxdWFudGl0eSArIDEpO1xyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlUXVhbnRpdHlTdWIgPSAoKSA9PiB7XHJcbiAgICBzZXRRdWFudGl0eShxdWFudGl0eSA9PSAxID8gMSA6IHF1YW50aXR5IC0gMSk7XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGg2PlxyXG4gICAgICAgIDxhIGhyZWY9XCIjXCI+e3Byb2R1Y3ROYW1lfTwvYT5cclxuICAgICAgPC9oNj5cclxuICAgICAgPGgyIGNsYXNzTmFtZT1cIm10LTMgY29sb3ItcHJ5XCI+e3Byb2R1Y3REZXNjcn08L2gyPlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyYXRpbmdcIj5cclxuICAgICAgICA8Rm9udEF3ZXNvbWVJY29uXHJcbiAgICAgICAgICBpY29uPXtmYVN0YXJ9XHJcbiAgICAgICAgICBzdHlsZT17eyBjb2xvcjogXCJnb2xkXCIsIHdpZHRoOiBcIjE0cHhcIiB9fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgJm5ic3A7Jm5ic3A7XHJcbiAgICAgICAgPEZvbnRBd2Vzb21lSWNvblxyXG4gICAgICAgICAgaWNvbj17ZmFTdGFyfVxyXG4gICAgICAgICAgc3R5bGU9e3sgY29sb3I6IFwiZ29sZFwiLCB3aWR0aDogXCIxNHB4XCIgfX1cclxuICAgICAgICAvPlxyXG4gICAgICAgICZuYnNwOyZuYnNwO1xyXG4gICAgICAgIDxGb250QXdlc29tZUljb25cclxuICAgICAgICAgIGljb249e2ZhU3Rhcn1cclxuICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiBcImdvbGRcIiwgd2lkdGg6IFwiMTRweFwiIH19XHJcbiAgICAgICAgLz5cclxuICAgICAgICAmbmJzcDsmbmJzcDtcclxuICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhU3Rhcn0gc3R5bGU9e3sgd2lkdGg6IFwiMTRweFwiIH19IC8+XHJcbiAgICAgICAgJm5ic3A7Jm5ic3A7XHJcbiAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVN0YXJ9IHN0eWxlPXt7IHdpZHRoOiBcIjE0cHhcIiB9fSAvPlxyXG4gICAgICAgICZuYnNwOyZuYnNwO1xyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInJhdGUgY29sb3ItcHJ5XCI+e3JhdGluZ308L3NwYW4+Jm5ic3A7Jm5ic3A7XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicmF0aW5nLWNvdW50IGFsdC1jb2xvclwiPih7cmF0aW5nQ291bnR9KTwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyZXZpZXdzIGNvbG9yLXByeVwiPntgJHtyZXZpZXdzfSByZXZpZXcke1xyXG4gICAgICAgICAgcmV2aWV3cyA+IDEgPyBcInNcIiA6IFwiXCJcclxuICAgICAgICB9YH08L3NwYW4+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJxdWFudGl0eSBjb2xvci1wcnkgbXQtNVwiPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJvbGRcIj5RdWFudGl0eTo8L3NwYW4+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJxdHlcIj5cclxuICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJxdHlcIiB2YWx1ZT17cXVhbnRpdHl9IC8+XHJcbiAgICAgICAgICA8YVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJxdHktYnRuIGNvbG9yLXByeVwiXHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgbWFyZ2luTGVmdDogXCItNDhweFwiLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVRdWFudGl0eVN1Yn1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgLVxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwicXR5LWJ0biBjb2xvci1wcnlcIiBvbkNsaWNrPXtoYW5kbGVRdWFudGl0eUFkZH0+XHJcbiAgICAgICAgICAgICtcclxuICAgICAgICAgIDwvYT5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbWl0ZWQgZ29sZFwiPlxyXG4gICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVdhcm5pbmd9IHN0eWxlPXt7IHdpZHRoOiBcIjE0cHhcIiB9fSAvPlxyXG4gICAgICAgICAgICAgICAgJm5ic3A7Jm5ic3A7XHJcbiAgICAgICAgICAgICAgICBMaW1pdGVkIHF1YW50aXR5IGF2YWlsYWJsZVxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0LTQgYmctd2hcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5PaWx5IFNraW5zPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5TUEYgNTA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtcmlnaHRcIj5jaGljZSBjYXJkPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5kZXNjcmlwdGlvbjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdE1pZGRsZVBhbmU7XHJcbiJdLCJuYW1lcyI6WyJGb250QXdlc29tZUljb24iLCJmYVN0YXIiLCJmYVdhcm5pbmciLCJQcm9kdWN0TWlkZGxlUGFuZSIsInByb2R1Y3ROYW1lIiwicHJvZHVjdERlc2NyIiwicmF0aW5nIiwicmF0aW5nQ291bnQiLCJyZXZpZXdzIiwicXVhbnRpdHkiLCJzZXRRdWFudGl0eSIsImhhbmRsZVF1YW50aXR5QWRkIiwiaGFuZGxlUXVhbnRpdHlTdWIiLCJoNiIsImEiLCJocmVmIiwiaDIiLCJjbGFzc05hbWUiLCJkaXYiLCJpY29uIiwic3R5bGUiLCJjb2xvciIsIndpZHRoIiwic3BhbiIsImlucHV0IiwidmFsdWUiLCJtYXJnaW5MZWZ0Iiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ProductPage/ProductMiddlePane.js\n"));

/***/ })

});