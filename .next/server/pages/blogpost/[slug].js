/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/blogpost/[slug]";
exports.ids = ["pages/blogpost/[slug]"];
exports.modules = {

/***/ "./styles/Blogpost.module.css":
/*!************************************!*\
  !*** ./styles/Blogpost.module.css ***!
  \************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"Blogpost_container__IT9Ol\",\n\t\"main\": \"Blogpost_main__HNvPb\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvQmxvZ3Bvc3QubW9kdWxlLmNzcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmxvZ3MvLi9zdHlsZXMvQmxvZ3Bvc3QubW9kdWxlLmNzcz82MmI5Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIkJsb2dwb3N0X2NvbnRhaW5lcl9fSVQ5T2xcIixcblx0XCJtYWluXCI6IFwiQmxvZ3Bvc3RfbWFpbl9fSE52UGJcIlxufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./styles/Blogpost.module.css\n");

/***/ }),

/***/ "./pages/blogpost/[slug].js":
/*!**********************************!*\
  !*** ./pages/blogpost/[slug].js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Blogpost_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/Blogpost.module.css */ \"./styles/Blogpost.module.css\");\n/* harmony import */ var _styles_Blogpost_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Blogpost_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\n\nconst slug = ()=>{\n    const [blog, setBlog] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({});\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const getBlog = async ()=>{\n        const slug = router.query.slug;\n        const d = await fetch(`http://localhost:3000/api/getblogs?slug=${slug}`);\n        const data = await d.json();\n        setBlog(data);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (!router.isReady) return;\n        getBlog();\n    }, [\n        router.isReady\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Blogpost_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: blog?.title\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\lokde\\\\OneDrive\\\\Desktop\\\\WSV\\\\Practice\\\\Projects\\\\nextjs-demo-deploy\\\\pages\\\\blogpost\\\\[slug].js\",\n                        lineNumber: 22,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\lokde\\\\OneDrive\\\\Desktop\\\\WSV\\\\Practice\\\\Projects\\\\nextjs-demo-deploy\\\\pages\\\\blogpost\\\\[slug].js\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\lokde\\\\OneDrive\\\\Desktop\\\\WSV\\\\Practice\\\\Projects\\\\nextjs-demo-deploy\\\\pages\\\\blogpost\\\\[slug].js\",\n                        lineNumber: 24,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\lokde\\\\OneDrive\\\\Desktop\\\\WSV\\\\Practice\\\\Projects\\\\nextjs-demo-deploy\\\\pages\\\\blogpost\\\\[slug].js\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\lokde\\\\OneDrive\\\\Desktop\\\\WSV\\\\Practice\\\\Projects\\\\nextjs-demo-deploy\\\\pages\\\\blogpost\\\\[slug].js\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_styles_Blogpost_module_css__WEBPACK_IMPORTED_MODULE_4___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: blog?.title\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\lokde\\\\OneDrive\\\\Desktop\\\\WSV\\\\Practice\\\\Projects\\\\nextjs-demo-deploy\\\\pages\\\\blogpost\\\\[slug].js\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: blog?.content\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\lokde\\\\OneDrive\\\\Desktop\\\\WSV\\\\Practice\\\\Projects\\\\nextjs-demo-deploy\\\\pages\\\\blogpost\\\\[slug].js\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\lokde\\\\OneDrive\\\\Desktop\\\\WSV\\\\Practice\\\\Projects\\\\nextjs-demo-deploy\\\\pages\\\\blogpost\\\\[slug].js\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\lokde\\\\OneDrive\\\\Desktop\\\\WSV\\\\Practice\\\\Projects\\\\nextjs-demo-deploy\\\\pages\\\\blogpost\\\\[slug].js\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slug);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ibG9ncG9zdC9bc2x1Z10uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUE2QjtBQUNIO0FBQzRCO0FBQ1Y7QUFDSjtBQUN4QyxNQUFNTSxPQUFPLElBQU07SUFDakIsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdKLCtDQUFRQSxDQUFDLENBQUM7SUFDbEMsTUFBTUssU0FBU0osc0RBQVNBO0lBQ3hCLE1BQU1LLFVBQVUsVUFBWTtRQUMxQixNQUFNSixPQUFPRyxPQUFPRSxLQUFLLENBQUNMLElBQUk7UUFDOUIsTUFBTU0sSUFBSSxNQUFNQyxNQUFNLENBQUMsd0NBQXdDLEVBQUVQLEtBQUssQ0FBQztRQUN2RSxNQUFNUSxPQUFPLE1BQU1GLEVBQUVHLElBQUk7UUFDekJQLFFBQVFNO0lBQ1Y7SUFDQVgsZ0RBQVNBLENBQUMsSUFBTTtRQUNkLElBQUksQ0FBQ00sT0FBT08sT0FBTyxFQUFFO1FBQ3JCTjtJQUNGLEdBQUc7UUFBQ0QsT0FBT08sT0FBTztLQUFDO0lBQ25CLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFXaEIsOEVBQWdCOzswQkFDOUIsOERBQUNGLGtEQUFJQTs7a0NBQ0gsOERBQUNvQjtrQ0FBT2IsTUFBTWE7Ozs7OztrQ0FDZCw4REFBQ0M7d0JBQUtDLE1BQUs7d0JBQWNDLFNBQVE7Ozs7OztrQ0FDakMsOERBQUNGO3dCQUFLQyxNQUFLO3dCQUFXQyxTQUFROzs7Ozs7a0NBQzlCLDhEQUFDQzt3QkFBS0MsS0FBSTt3QkFBT0MsTUFBSzs7Ozs7Ozs7Ozs7OzBCQUV4Qiw4REFBQ0M7Z0JBQUtULFdBQVdoQix5RUFBVzs7a0NBQzFCLDhEQUFDMEI7a0NBQUlyQixNQUFNYTs7Ozs7O2tDQUNYLDhEQUFDUztrQ0FBR3RCLE1BQU1nQjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSWxCO0FBQ0EsaUVBQWVqQixJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmxvZ3MvLi9wYWdlcy9ibG9ncG9zdC9bc2x1Z10uanM/Yjg5ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vc3R5bGVzL0Jsb2dwb3N0Lm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuY29uc3Qgc2x1ZyA9ICgpID0+IHtcclxuICBjb25zdCBbYmxvZywgc2V0QmxvZ10gPSB1c2VTdGF0ZSh7fSk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgZ2V0QmxvZyA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IHNsdWcgPSByb3V0ZXIucXVlcnkuc2x1ZztcclxuICAgIGNvbnN0IGQgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9nZXRibG9ncz9zbHVnPSR7c2x1Z31gKTtcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBkLmpzb24oKTtcclxuICAgIHNldEJsb2coZGF0YSk7XHJcbiAgfTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKCFyb3V0ZXIuaXNSZWFkeSkgcmV0dXJuO1xyXG4gICAgZ2V0QmxvZygpO1xyXG4gIH0sIFtyb3V0ZXIuaXNSZWFkeV0pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT57YmxvZz8udGl0bGV9PC90aXRsZT5cclxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiR2VuZXJhdGVkIGJ5IGNyZWF0ZSBuZXh0IGFwcFwiIC8+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cclxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XHJcbiAgICAgICAgPGgxPntibG9nPy50aXRsZX08L2gxPlxyXG4gICAgICAgIDxwPntibG9nPy5jb250ZW50fTwvcD5cclxuICAgICAgPC9tYWluPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgc2x1ZztcclxuIl0sIm5hbWVzIjpbIkhlYWQiLCJSZWFjdCIsInN0eWxlcyIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlUm91dGVyIiwic2x1ZyIsImJsb2ciLCJzZXRCbG9nIiwicm91dGVyIiwiZ2V0QmxvZyIsInF1ZXJ5IiwiZCIsImZldGNoIiwiZGF0YSIsImpzb24iLCJpc1JlYWR5IiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwidGl0bGUiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJsaW5rIiwicmVsIiwiaHJlZiIsIm1haW4iLCJoMSIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/blogpost/[slug].js\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/blogpost/[slug].js"));
module.exports = __webpack_exports__;

})();