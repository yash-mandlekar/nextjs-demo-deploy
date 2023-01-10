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
exports.id = "pages/api/getblogs";
exports.ids = ["pages/api/getblogs"];
exports.modules = {

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "(api)/./pages/api/getblogs.js":
/*!*******************************!*\
  !*** ./pages/api/getblogs.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\n\nfunction handler(req, res) {\n    fs__WEBPACK_IMPORTED_MODULE_0__.readFile(`blogdata/${req.query.slug}.json`, \"utf8\", (err, data)=>{\n        if (err) {\n            res.status(500).json({\n                error: \"No such blog found\"\n            });\n        }\n        res.status(200).json(JSON.parse(data));\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2V0YmxvZ3MuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsNkVBQTZFO0FBQ3BEO0FBQ1YsU0FBU0MsUUFBUUMsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDeENILHdDQUFXLENBQUMsQ0FBQyxTQUFTLEVBQUVFLElBQUlHLEtBQUssQ0FBQ0MsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLFFBQVEsQ0FBQ0MsS0FBS0MsT0FBUztRQUNwRSxJQUFJRCxLQUFLO1lBQ1BKLElBQUlNLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7Z0JBQUNDLE9BQU87WUFBb0I7UUFDbkQsQ0FBQztRQUNEUixJQUFJTSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDRSxLQUFLQyxLQUFLLENBQUNMO0lBQ2xDO0FBQ0YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Jsb2dzLy4vcGFnZXMvYXBpL2dldGJsb2dzLmpzPzcyMjQiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gTmV4dC5qcyBBUEkgcm91dGUgc3VwcG9ydDogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvYXBpLXJvdXRlcy9pbnRyb2R1Y3Rpb25cclxuaW1wb3J0ICogYXMgZnMgZnJvbSBcImZzXCI7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcclxuICBmcy5yZWFkRmlsZShgYmxvZ2RhdGEvJHtyZXEucXVlcnkuc2x1Z30uanNvbmAsIFwidXRmOFwiLCAoZXJyLCBkYXRhKSA9PiB7XHJcbiAgICBpZiAoZXJyKSB7XHJcbiAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHtlcnJvcjogXCJObyBzdWNoIGJsb2cgZm91bmRcIn0pO1xyXG4gICAgfVxyXG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oSlNPTi5wYXJzZShkYXRhKSk7XHJcbiAgfSk7XHJcbn1cclxuIl0sIm5hbWVzIjpbImZzIiwiaGFuZGxlciIsInJlcSIsInJlcyIsInJlYWRGaWxlIiwicXVlcnkiLCJzbHVnIiwiZXJyIiwiZGF0YSIsInN0YXR1cyIsImpzb24iLCJlcnJvciIsIkpTT04iLCJwYXJzZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/getblogs.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/getblogs.js"));
module.exports = __webpack_exports__;

})();