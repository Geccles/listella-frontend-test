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

/***/ "./src/components/ScrollingGallery.tsx":
/*!*********************************************!*\
  !*** ./src/components/ScrollingGallery.tsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst ScrollingGallery = (param)=>{\n    let { images  } = param;\n    _s();\n    const newArray = Array.from({\n        length: images.length\n    }, (_)=>false);\n    const [hoverList, setHoverList] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(newArray);\n    const toggleButton = (i)=>{\n        setHoverList((prev)=>prev.map((bool, idx)=>i == idx ? !bool : bool));\n    };\n    /**\n     * Check to make sure we have list else if it changes re-run this\n     */ (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (hoverList.length == 0 && images.length != 0) setHoverList(Array.from({\n            length: images.length\n        }, (_)=>false));\n    }, [\n        images\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"image-scroll-container\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"image-scroll-inner\",\n            children: images === null || images === void 0 ? void 0 : images.map((item, index)=>{\n                const itemDetails = item.links[0];\n                const metaData = item.data[0];\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"col-3 hover-shadow\",\n                    style: {\n                        position: \"relative\"\n                    },\n                    onMouseEnter: ()=>toggleButton(index),\n                    onMouseLeave: ()=>toggleButton(index),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: itemDetails.href,\n                            style: {\n                                height: 208,\n                                width: 240,\n                                objectFit: \"cover\",\n                                borderRadius: 10\n                            },\n                            alt: item.data[0].title\n                        }, void 0, false, {\n                            fileName: \"/Users/galinanosti/Projects/listella-frontend-test/src/components/ScrollingGallery.tsx\",\n                            lineNumber: 31,\n                            columnNumber: 37\n                        }, undefined),\n                        /**\n                                         * Only show hover event for those the item that is set to true\n                                         */ hoverList[index] && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            style: {\n                                position: \"absolute\",\n                                backgroundColor: \"green\",\n                                top: 0\n                            },\n                            children: [\n                                \"Title: \",\n                                metaData.title\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/galinanosti/Projects/listella-frontend-test/src/components/ScrollingGallery.tsx\",\n                            lineNumber: 36,\n                            columnNumber: 61\n                        }, undefined)\n                    ]\n                }, index, true, {\n                    fileName: \"/Users/galinanosti/Projects/listella-frontend-test/src/components/ScrollingGallery.tsx\",\n                    lineNumber: 30,\n                    columnNumber: 33\n                }, undefined);\n            })\n        }, void 0, false, {\n            fileName: \"/Users/galinanosti/Projects/listella-frontend-test/src/components/ScrollingGallery.tsx\",\n            lineNumber: 23,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/galinanosti/Projects/listella-frontend-test/src/components/ScrollingGallery.tsx\",\n        lineNumber: 22,\n        columnNumber: 9\n    }, undefined);\n};\n_s(ScrollingGallery, \"l7kI3PJYfrC10fw41hDUIH6Q67Q=\");\n_c = ScrollingGallery;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ScrollingGallery);\nvar _c;\n$RefreshReg$(_c, \"ScrollingGallery\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TY3JvbGxpbmdHYWxsZXJ5LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQzJDO0FBSzNDLE1BQU1FLG1CQUFtQixTQUE4QjtRQUE3QixFQUFFQyxPQUFNLEVBQWdCOztJQUM5QyxNQUFNQyxXQUFXQyxNQUFNQyxJQUFJLENBQUM7UUFBRUMsUUFBUUosT0FBT0ksTUFBTTtJQUFDLEdBQUdDLENBQUFBLElBQUssS0FBSztJQUNqRSxNQUFNLENBQUVDLFdBQVdDLGFBQWMsR0FBR1QsK0NBQVFBLENBQUNHO0lBRTdDLE1BQU1PLGVBQWUsQ0FBQ0MsSUFBYztRQUNoQ0YsYUFBYUcsQ0FBQUEsT0FBUUEsS0FBS0MsR0FBRyxDQUFDLENBQUNDLE1BQU1DLE1BQVFKLEtBQUtJLE1BQU0sQ0FBQ0QsT0FBT0EsSUFBSTtJQUN4RTtJQUNBOztLQUVDLEdBQ0RmLGdEQUFTQSxDQUFDLElBQU07UUFDWixJQUFJUyxVQUFVRixNQUFNLElBQUksS0FBS0osT0FBT0ksTUFBTSxJQUFJLEdBQUdHLGFBQWFMLE1BQU1DLElBQUksQ0FBQztZQUFFQyxRQUFRSixPQUFPSSxNQUFNO1FBQUMsR0FBR0MsQ0FBQUEsSUFBSyxLQUFLO0lBQ2xILEdBQUU7UUFBQ0w7S0FBTztJQUVWLHFCQUNJLDhEQUFDYztRQUFJQyxXQUFVO2tCQUNYLDRFQUFDRDtZQUFJQyxXQUFVO3NCQUVQZixtQkFBQUEsb0JBQUFBLEtBQUFBLElBQUFBLE9BQVFXLEdBQUcsQ0FBQyxDQUFDSyxNQUFNQyxRQUFVO2dCQUN6QixNQUFNQyxjQUFjRixLQUFLRyxLQUFLLENBQUMsRUFBRTtnQkFDakMsTUFBTUMsV0FBV0osS0FBS0ssSUFBSSxDQUFDLEVBQUU7Z0JBQzdCLHFCQUVRLDhEQUFDUDtvQkFBZ0JDLFdBQVU7b0JBQXFCTyxPQUFPO3dCQUFFQyxVQUFVO29CQUFVO29CQUFHQyxjQUFjLElBQU1oQixhQUFhUztvQkFBUVEsY0FBYyxJQUFNakIsYUFBYVM7O3NDQUN0Siw4REFBQ1M7NEJBQUlDLEtBQUtULFlBQVlVLElBQUk7NEJBQUVOLE9BQU87Z0NBQUVPLFFBQVE7Z0NBQUtDLE9BQU87Z0NBQUtDLFdBQVc7Z0NBQVNDLGNBQWM7NEJBQUc7NEJBQUdDLEtBQUtqQixLQUFLSyxJQUFJLENBQUMsRUFBRSxDQUFDYSxLQUFLOzs7Ozs7d0JBRXpIOzt5Q0FFQyxHQUNENUIsU0FBUyxDQUFDVyxNQUFNLGtCQUFJLDhEQUFDSDs0QkFBSVEsT0FBTztnQ0FBRUMsVUFBVTtnQ0FBWVksaUJBQWlCO2dDQUFTQyxLQUFLOzRCQUFFOztnQ0FBRztnQ0FBUWhCLFNBQVNjLEtBQUs7Ozs7Ozs7O21CQU5oSGpCOzs7OztZQVd0Qjs7Ozs7Ozs7Ozs7QUFLcEI7R0F2Q01sQjtLQUFBQTtBQXlDTiwrREFBZUEsZ0JBQWdCQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1Njcm9sbGluZ0dhbGxlcnkudHN4Pzk5OWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW1hZ2VUeXBlIH0gZnJvbSBcIkAvdHlwZXMvSW1hZ2VcIlxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5cbnR5cGUgR2FsbGVyeVByb3BzID0ge1xuICAgIGltYWdlczogQXJyYXk8SW1hZ2VUeXBlPlxufVxuY29uc3QgU2Nyb2xsaW5nR2FsbGVyeSA9ICh7IGltYWdlcyB9OiBHYWxsZXJ5UHJvcHMpID0+IHtcbiAgICBjb25zdCBuZXdBcnJheSA9IEFycmF5LmZyb20oeyBsZW5ndGg6IGltYWdlcy5sZW5ndGggfSwgXyA9PiBmYWxzZSlcbiAgICBjb25zdCBbIGhvdmVyTGlzdCwgc2V0SG92ZXJMaXN0IF0gPSB1c2VTdGF0ZShuZXdBcnJheSlcblxuICAgIGNvbnN0IHRvZ2dsZUJ1dHRvbiA9IChpOiBudW1iZXIpID0+IHtcbiAgICAgICAgc2V0SG92ZXJMaXN0KHByZXYgPT4gcHJldi5tYXAoKGJvb2wsIGlkeCkgPT4gaSA9PSBpZHggPyAhYm9vbCA6IGJvb2wpKVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBDaGVjayB0byBtYWtlIHN1cmUgd2UgaGF2ZSBsaXN0IGVsc2UgaWYgaXQgY2hhbmdlcyByZS1ydW4gdGhpc1xuICAgICAqL1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmIChob3Zlckxpc3QubGVuZ3RoID09IDAgJiYgaW1hZ2VzLmxlbmd0aCAhPSAwKSBzZXRIb3Zlckxpc3QoQXJyYXkuZnJvbSh7IGxlbmd0aDogaW1hZ2VzLmxlbmd0aCB9LCBfID0+IGZhbHNlKSlcbiAgICB9LFtpbWFnZXNdKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZS1zY3JvbGwtY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlLXNjcm9sbC1pbm5lclwiPlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VzPy5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpdGVtRGV0YWlscyA9IGl0ZW0ubGlua3NbMF1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1ldGFEYXRhID0gaXRlbS5kYXRhWzBdXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT1cImNvbC0zIGhvdmVyLXNoYWRvd1wiIHN0eWxlPXt7IHBvc2l0aW9uOiBcInJlbGF0aXZlXCJ9fSBvbk1vdXNlRW50ZXI9eygpID0+IHRvZ2dsZUJ1dHRvbihpbmRleCl9IG9uTW91c2VMZWF2ZT17KCkgPT4gdG9nZ2xlQnV0dG9uKGluZGV4KX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aXRlbURldGFpbHMuaHJlZn0gc3R5bGU9e3sgaGVpZ2h0OiAyMDgsIHdpZHRoOiAyNDAsIG9iamVjdEZpdDogXCJjb3ZlclwiLCBib3JkZXJSYWRpdXM6IDEwIH19IGFsdD17aXRlbS5kYXRhWzBdLnRpdGxlfSAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBPbmx5IHNob3cgaG92ZXIgZXZlbnQgZm9yIHRob3NlIHRoZSBpdGVtIHRoYXQgaXMgc2V0IHRvIHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3Zlckxpc3RbaW5kZXhdICYmIDxkaXYgc3R5bGU9e3sgcG9zaXRpb246IFwiYWJzb2x1dGVcIiwgYmFja2dyb3VuZENvbG9yOiBcImdyZWVuXCIsIHRvcDogMCB9fT5UaXRsZToge21ldGFEYXRhLnRpdGxlfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTY3JvbGxpbmdHYWxsZXJ5XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJTY3JvbGxpbmdHYWxsZXJ5IiwiaW1hZ2VzIiwibmV3QXJyYXkiLCJBcnJheSIsImZyb20iLCJsZW5ndGgiLCJfIiwiaG92ZXJMaXN0Iiwic2V0SG92ZXJMaXN0IiwidG9nZ2xlQnV0dG9uIiwiaSIsInByZXYiLCJtYXAiLCJib29sIiwiaWR4IiwiZGl2IiwiY2xhc3NOYW1lIiwiaXRlbSIsImluZGV4IiwiaXRlbURldGFpbHMiLCJsaW5rcyIsIm1ldGFEYXRhIiwiZGF0YSIsInN0eWxlIiwicG9zaXRpb24iLCJvbk1vdXNlRW50ZXIiLCJvbk1vdXNlTGVhdmUiLCJpbWciLCJzcmMiLCJocmVmIiwiaGVpZ2h0Iiwid2lkdGgiLCJvYmplY3RGaXQiLCJib3JkZXJSYWRpdXMiLCJhbHQiLCJ0aXRsZSIsImJhY2tncm91bmRDb2xvciIsInRvcCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/ScrollingGallery.tsx\n"));

/***/ })

});