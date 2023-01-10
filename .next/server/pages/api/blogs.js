"use strict";
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
exports.id = "pages/api/blogs";
exports.ids = ["pages/api/blogs"];
exports.modules = {

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "(api)/./pages/api/blogs.js":
/*!****************************!*\
  !*** ./pages/api/blogs.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\n\nasync function handler(req, res) {\n    var data = await fs__WEBPACK_IMPORTED_MODULE_0__.promises.readdir(\"blogdata\");\n    var length = data.length;\n    data = data.slice(0, req.query.count);\n    let files = [];\n    for(let i = 0; i < data.length; i++){\n        const file = await fs__WEBPACK_IMPORTED_MODULE_0__.promises.readFile(\"blogdata/\" + data[i], \"utf-8\");\n        files.push(JSON.parse(file));\n    }\n    res.status(200).json({\n        files,\n        length\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYmxvZ3MuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsNkVBQTZFO0FBQ3BEO0FBRVYsZUFBZUMsUUFBUUMsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDOUMsSUFBSUMsT0FBTyxNQUFNSixnREFBbUIsQ0FBQztJQUNyQyxJQUFJTyxTQUFTSCxLQUFLRyxNQUFNO0lBQ3hCSCxPQUFPQSxLQUFLSSxLQUFLLENBQUMsR0FBR04sSUFBSU8sS0FBSyxDQUFDQyxLQUFLO0lBQ3BDLElBQUlDLFFBQVEsRUFBRTtJQUNkLElBQUssSUFBSUMsSUFBSSxHQUFHQSxJQUFJUixLQUFLRyxNQUFNLEVBQUVLLElBQUs7UUFDcEMsTUFBTUMsT0FBTyxNQUFNYixpREFBb0IsQ0FBQyxjQUFjSSxJQUFJLENBQUNRLEVBQUUsRUFBRTtRQUMvREQsTUFBTUksSUFBSSxDQUFDQyxLQUFLQyxLQUFLLENBQUNKO0lBQ3hCO0lBQ0FWLElBQUllLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7UUFBRVI7UUFBT0o7SUFBTztBQUN2QyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmxvZ3MvLi9wYWdlcy9hcGkvYmxvZ3MuanM/ZWM4YyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBOZXh0LmpzIEFQSSByb3V0ZSBzdXBwb3J0OiBodHRwczovL25leHRqcy5vcmcvZG9jcy9hcGktcm91dGVzL2ludHJvZHVjdGlvblxyXG5pbXBvcnQgKiBhcyBmcyBmcm9tIFwiZnNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcclxuICB2YXIgZGF0YSA9IGF3YWl0IGZzLnByb21pc2VzLnJlYWRkaXIoXCJibG9nZGF0YVwiKTtcclxuICB2YXIgbGVuZ3RoID0gZGF0YS5sZW5ndGg7XHJcbiAgZGF0YSA9IGRhdGEuc2xpY2UoMCwgcmVxLnF1ZXJ5LmNvdW50KTtcclxuICBsZXQgZmlsZXMgPSBbXTtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgIGNvbnN0IGZpbGUgPSBhd2FpdCBmcy5wcm9taXNlcy5yZWFkRmlsZShcImJsb2dkYXRhL1wiICsgZGF0YVtpXSwgXCJ1dGYtOFwiKTtcclxuICAgIGZpbGVzLnB1c2goSlNPTi5wYXJzZShmaWxlKSk7XHJcbiAgfVxyXG4gIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgZmlsZXMsIGxlbmd0aCB9KTtcclxufVxyXG4iXSwibmFtZXMiOlsiZnMiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwiZGF0YSIsInByb21pc2VzIiwicmVhZGRpciIsImxlbmd0aCIsInNsaWNlIiwicXVlcnkiLCJjb3VudCIsImZpbGVzIiwiaSIsImZpbGUiLCJyZWFkRmlsZSIsInB1c2giLCJKU09OIiwicGFyc2UiLCJzdGF0dXMiLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/blogs.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/blogs.js"));
module.exports = __webpack_exports__;

})();