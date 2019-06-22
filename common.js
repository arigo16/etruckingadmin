(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./node_modules/ng2-img-max/dist/ng2-img-max.js":
/*!******************************************************!*\
  !*** ./node_modules/ng2-img-max/dist/ng2-img-max.js ***!
  \******************************************************/
/*! exports provided: Ng2ImgMaxService, Ng2ImgMaxModule, ImgMaxSizeService, ImgMaxPXSizeService, ImgExifService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_ng2_img_max_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/ng2-img-max.service */ "./node_modules/ng2-img-max/dist/src/ng2-img-max.service.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Ng2ImgMaxService", function() { return _src_ng2_img_max_service__WEBPACK_IMPORTED_MODULE_0__["Ng2ImgMaxService"]; });

/* harmony import */ var _src_ng2_img_max_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/ng2-img-max.module */ "./node_modules/ng2-img-max/dist/src/ng2-img-max.module.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Ng2ImgMaxModule", function() { return _src_ng2_img_max_module__WEBPACK_IMPORTED_MODULE_1__["Ng2ImgMaxModule"]; });

/* harmony import */ var _src_img_max_size_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/img-max-size.service */ "./node_modules/ng2-img-max/dist/src/img-max-size.service.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ImgMaxSizeService", function() { return _src_img_max_size_service__WEBPACK_IMPORTED_MODULE_2__["ImgMaxSizeService"]; });

/* harmony import */ var _src_img_maxpx_size_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/img-maxpx-size.service */ "./node_modules/ng2-img-max/dist/src/img-maxpx-size.service.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ImgMaxPXSizeService", function() { return _src_img_maxpx_size_service__WEBPACK_IMPORTED_MODULE_3__["ImgMaxPXSizeService"]; });

/* harmony import */ var _src_img_exif_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/img-exif.service */ "./node_modules/ng2-img-max/dist/src/img-exif.service.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ImgExifService", function() { return _src_img_exif_service__WEBPACK_IMPORTED_MODULE_4__["ImgExifService"]; });






//# sourceMappingURL=ng2-img-max.js.map

/***/ }),

/***/ "./src/app/directive/numberOnly.directive.ts":
/*!***************************************************!*\
  !*** ./src/app/directive/numberOnly.directive.ts ***!
  \***************************************************/
/*! exports provided: NumberOnlyDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumberOnlyDirective", function() { return NumberOnlyDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var NumberOnlyDirective = /** @class */ (function () {
    function NumberOnlyDirective(el) {
        this.el = el;
        // Allow decimal numbers and negative values
        this.regex = new RegExp(/^-?[0-9]+(\.[0-9]*){0,1}$/g);
        // Allow key codes for special events. Reflect :
        // Backspace, tab, end, home
        this.specialKeys = ['Backspace', 'Tab', 'End', 'Home'];
    }
    NumberOnlyDirective.prototype.onKeyDown = function (event) {
        // Allow Backspace, tab, end, and home keys
        if (this.specialKeys.indexOf(event.key) !== -1) {
            return;
        }
        var current = this.el.nativeElement.value;
        var next = current.concat(event.key);
        if (next && !String(next).match(this.regex)) {
            event.preventDefault();
        }
    };
    return NumberOnlyDirective;
}());



/***/ }),

/***/ "./src/app/directive/numberOnly.module.ts":
/*!************************************************!*\
  !*** ./src/app/directive/numberOnly.module.ts ***!
  \************************************************/
/*! exports provided: NumberOnlyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumberOnlyModule", function() { return NumberOnlyModule; });
var NumberOnlyModule = /** @class */ (function () {
    function NumberOnlyModule() {
    }
    return NumberOnlyModule;
}());



/***/ })

}]);
//# sourceMappingURL=common.js.map