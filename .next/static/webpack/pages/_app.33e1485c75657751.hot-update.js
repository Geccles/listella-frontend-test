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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst ScrollingGallery = (param)=>{\n    let { images  } = param;\n    _s();\n    const newArray = Array.from({\n        length: images.length\n    }, (_)=>false);\n    const [hoverList, setHoverList] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(newArray);\n    const toggleButton = (i)=>{\n        setHoverList((prev)=>prev.map((bool, idx)=>i == idx ? !bool : bool));\n    };\n    /**\n     * Check to make sure we have list else if it changes re-run this\n     */ (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (hoverList.length == 0 && images.length != 0) setHoverList(Array.from({\n            length: images.length\n        }, (_)=>false));\n    }, [\n        images\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"image-scroll-container\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"image-scroll-inner\",\n            children: images === null || images === void 0 ? void 0 : images.map((item, index)=>{\n                const itemDetails = item.links[0];\n                const metaData = item.data[0];\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"col-3 hover-shadow scrolling-image-container\",\n                    onMouseEnter: ()=>toggleButton(index),\n                    onMouseLeave: ()=>toggleButton(index),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: itemDetails.href,\n                            style: {\n                                height: 208,\n                                width: 240,\n                                objectFit: \"cover\",\n                                borderRadius: 10\n                            },\n                            alt: item.data[0].title\n                        }, void 0, false, {\n                            fileName: \"/Users/galinanosti/Projects/listella-frontend-test/src/components/ScrollingGallery.tsx\",\n                            lineNumber: 31,\n                            columnNumber: 37\n                        }, undefined),\n                        /**\n                                         * Only show hover event for those the item that is set to true\n                                         */ hoverList[index] && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            style: {\n                                position: \"absolute\",\n                                backgroundColor: \"green\",\n                                top: 0\n                            },\n                            children: [\n                                \"Title: \",\n                                metaData.title\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/galinanosti/Projects/listella-frontend-test/src/components/ScrollingGallery.tsx\",\n                            lineNumber: 36,\n                            columnNumber: 61\n                        }, undefined)\n                    ]\n                }, index, true, {\n                    fileName: \"/Users/galinanosti/Projects/listella-frontend-test/src/components/ScrollingGallery.tsx\",\n                    lineNumber: 30,\n                    columnNumber: 33\n                }, undefined);\n            })\n        }, void 0, false, {\n            fileName: \"/Users/galinanosti/Projects/listella-frontend-test/src/components/ScrollingGallery.tsx\",\n            lineNumber: 23,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/galinanosti/Projects/listella-frontend-test/src/components/ScrollingGallery.tsx\",\n        lineNumber: 22,\n        columnNumber: 9\n    }, undefined);\n};\n_s(ScrollingGallery, \"l7kI3PJYfrC10fw41hDUIH6Q67Q=\");\n_c = ScrollingGallery;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ScrollingGallery);\nvar _c;\n$RefreshReg$(_c, \"ScrollingGallery\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TY3JvbGxpbmdHYWxsZXJ5LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQzJDO0FBSzNDLE1BQU1FLG1CQUFtQixTQUE4QjtRQUE3QixFQUFFQyxPQUFNLEVBQWdCOztJQUM5QyxNQUFNQyxXQUFXQyxNQUFNQyxJQUFJLENBQUM7UUFBRUMsUUFBUUosT0FBT0ksTUFBTTtJQUFDLEdBQUdDLENBQUFBLElBQUssS0FBSztJQUNqRSxNQUFNLENBQUVDLFdBQVdDLGFBQWMsR0FBR1QsK0NBQVFBLENBQUNHO0lBRTdDLE1BQU1PLGVBQWUsQ0FBQ0MsSUFBYztRQUNoQ0YsYUFBYUcsQ0FBQUEsT0FBUUEsS0FBS0MsR0FBRyxDQUFDLENBQUNDLE1BQU1DLE1BQVFKLEtBQUtJLE1BQU0sQ0FBQ0QsT0FBT0EsSUFBSTtJQUN4RTtJQUNBOztLQUVDLEdBQ0RmLGdEQUFTQSxDQUFDLElBQU07UUFDWixJQUFJUyxVQUFVRixNQUFNLElBQUksS0FBS0osT0FBT0ksTUFBTSxJQUFJLEdBQUdHLGFBQWFMLE1BQU1DLElBQUksQ0FBQztZQUFFQyxRQUFRSixPQUFPSSxNQUFNO1FBQUMsR0FBR0MsQ0FBQUEsSUFBSyxLQUFLO0lBQ2xILEdBQUU7UUFBQ0w7S0FBTztJQUVWLHFCQUNJLDhEQUFDYztRQUFJQyxXQUFVO2tCQUNYLDRFQUFDRDtZQUFJQyxXQUFVO3NCQUVQZixtQkFBQUEsb0JBQUFBLEtBQUFBLElBQUFBLE9BQVFXLEdBQUcsQ0FBQyxDQUFDSyxNQUFNQyxRQUFVO2dCQUN6QixNQUFNQyxjQUFjRixLQUFLRyxLQUFLLENBQUMsRUFBRTtnQkFDakMsTUFBTUMsV0FBV0osS0FBS0ssSUFBSSxDQUFDLEVBQUU7Z0JBQzdCLHFCQUVRLDhEQUFDUDtvQkFBZ0JDLFdBQVU7b0JBQStDTyxjQUFjLElBQU1kLGFBQWFTO29CQUFRTSxjQUFjLElBQU1mLGFBQWFTOztzQ0FDaEosOERBQUNPOzRCQUFJQyxLQUFLUCxZQUFZUSxJQUFJOzRCQUFFQyxPQUFPO2dDQUFFQyxRQUFRO2dDQUFLQyxPQUFPO2dDQUFLQyxXQUFXO2dDQUFTQyxjQUFjOzRCQUFHOzRCQUFHQyxLQUFLaEIsS0FBS0ssSUFBSSxDQUFDLEVBQUUsQ0FBQ1ksS0FBSzs7Ozs7O3dCQUV6SDs7eUNBRUMsR0FDRDNCLFNBQVMsQ0FBQ1csTUFBTSxrQkFBSSw4REFBQ0g7NEJBQUlhLE9BQU87Z0NBQUVPLFVBQVU7Z0NBQVlDLGlCQUFpQjtnQ0FBU0MsS0FBSzs0QkFBRTs7Z0NBQUc7Z0NBQVFoQixTQUFTYSxLQUFLOzs7Ozs7OzttQkFOaEhoQjs7Ozs7WUFXdEI7Ozs7Ozs7Ozs7O0FBS3BCO0dBdkNNbEI7S0FBQUE7QUF5Q04sK0RBQWVBLGdCQUFnQkEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9TY3JvbGxpbmdHYWxsZXJ5LnRzeD85OTllIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEltYWdlVHlwZSB9IGZyb20gXCJAL3R5cGVzL0ltYWdlXCJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuXG50eXBlIEdhbGxlcnlQcm9wcyA9IHtcbiAgICBpbWFnZXM6IEFycmF5PEltYWdlVHlwZT5cbn1cbmNvbnN0IFNjcm9sbGluZ0dhbGxlcnkgPSAoeyBpbWFnZXMgfTogR2FsbGVyeVByb3BzKSA9PiB7XG4gICAgY29uc3QgbmV3QXJyYXkgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiBpbWFnZXMubGVuZ3RoIH0sIF8gPT4gZmFsc2UpXG4gICAgY29uc3QgWyBob3Zlckxpc3QsIHNldEhvdmVyTGlzdCBdID0gdXNlU3RhdGUobmV3QXJyYXkpXG5cbiAgICBjb25zdCB0b2dnbGVCdXR0b24gPSAoaTogbnVtYmVyKSA9PiB7XG4gICAgICAgIHNldEhvdmVyTGlzdChwcmV2ID0+IHByZXYubWFwKChib29sLCBpZHgpID0+IGkgPT0gaWR4ID8gIWJvb2wgOiBib29sKSlcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2hlY2sgdG8gbWFrZSBzdXJlIHdlIGhhdmUgbGlzdCBlbHNlIGlmIGl0IGNoYW5nZXMgcmUtcnVuIHRoaXNcbiAgICAgKi9cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAoaG92ZXJMaXN0Lmxlbmd0aCA9PSAwICYmIGltYWdlcy5sZW5ndGggIT0gMCkgc2V0SG92ZXJMaXN0KEFycmF5LmZyb20oeyBsZW5ndGg6IGltYWdlcy5sZW5ndGggfSwgXyA9PiBmYWxzZSkpXG4gICAgfSxbaW1hZ2VzXSlcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2Utc2Nyb2xsLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZS1zY3JvbGwtaW5uZXJcIj5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGltYWdlcz8ubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaXRlbURldGFpbHMgPSBpdGVtLmxpbmtzWzBdXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtZXRhRGF0YSA9IGl0ZW0uZGF0YVswXVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJjb2wtMyBob3Zlci1zaGFkb3cgc2Nyb2xsaW5nLWltYWdlLWNvbnRhaW5lclwiIG9uTW91c2VFbnRlcj17KCkgPT4gdG9nZ2xlQnV0dG9uKGluZGV4KX0gb25Nb3VzZUxlYXZlPXsoKSA9PiB0b2dnbGVCdXR0b24oaW5kZXgpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpdGVtRGV0YWlscy5ocmVmfSBzdHlsZT17eyBoZWlnaHQ6IDIwOCwgd2lkdGg6IDI0MCwgb2JqZWN0Rml0OiBcImNvdmVyXCIsIGJvcmRlclJhZGl1czogMTAgfX0gYWx0PXtpdGVtLmRhdGFbMF0udGl0bGV9ICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIE9ubHkgc2hvdyBob3ZlciBldmVudCBmb3IgdGhvc2UgdGhlIGl0ZW0gdGhhdCBpcyBzZXQgdG8gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvdmVyTGlzdFtpbmRleF0gJiYgPGRpdiBzdHlsZT17eyBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLCBiYWNrZ3JvdW5kQ29sb3I6IFwiZ3JlZW5cIiwgdG9wOiAwIH19PlRpdGxlOiB7bWV0YURhdGEudGl0bGV9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNjcm9sbGluZ0dhbGxlcnlcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlNjcm9sbGluZ0dhbGxlcnkiLCJpbWFnZXMiLCJuZXdBcnJheSIsIkFycmF5IiwiZnJvbSIsImxlbmd0aCIsIl8iLCJob3Zlckxpc3QiLCJzZXRIb3Zlckxpc3QiLCJ0b2dnbGVCdXR0b24iLCJpIiwicHJldiIsIm1hcCIsImJvb2wiLCJpZHgiLCJkaXYiLCJjbGFzc05hbWUiLCJpdGVtIiwiaW5kZXgiLCJpdGVtRGV0YWlscyIsImxpbmtzIiwibWV0YURhdGEiLCJkYXRhIiwib25Nb3VzZUVudGVyIiwib25Nb3VzZUxlYXZlIiwiaW1nIiwic3JjIiwiaHJlZiIsInN0eWxlIiwiaGVpZ2h0Iiwid2lkdGgiLCJvYmplY3RGaXQiLCJib3JkZXJSYWRpdXMiLCJhbHQiLCJ0aXRsZSIsInBvc2l0aW9uIiwiYmFja2dyb3VuZENvbG9yIiwidG9wIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/ScrollingGallery.tsx\n"));

/***/ })

});