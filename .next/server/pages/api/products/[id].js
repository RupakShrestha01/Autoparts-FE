"use strict";
(() => {
var exports = {};
exports.id = 4480;
exports.ids = [4480];
exports.modules = {

/***/ 2663:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 7503:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _models_Product__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6183);
/* harmony import */ var _utils_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4323);


const handler = async (req, res)=>{
    await _utils_db__WEBPACK_IMPORTED_MODULE_1__/* ["default"].connect */ .Z.connect();
    const product = await _models_Product__WEBPACK_IMPORTED_MODULE_0__/* ["default"].findById */ .Z.findById(req.query.id);
    await _utils_db__WEBPACK_IMPORTED_MODULE_1__/* ["default"].disconnect */ .Z.disconnect();
    res.send(product);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [4323,6183], () => (__webpack_exec__(7503)));
module.exports = __webpack_exports__;

})();