(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

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



/***/ }),

/***/ "./src/app/guard/guard-auth.guard.ts":
/*!*******************************************!*\
  !*** ./src/app/guard/guard-auth.guard.ts ***!
  \*******************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! crypto-js */ "./node_modules/crypto-js/index.js");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (localStorage.getItem('cva')) {
            var bytes = crypto_js__WEBPACK_IMPORTED_MODULE_1__["AES"].decrypt(localStorage.getItem('cva'), 'WilkaETruck2019');
            var decryptProfile = bytes.toString(crypto_js__WEBPACK_IMPORTED_MODULE_1__["enc"].Utf8);
            var currentUser = JSON.parse(decryptProfile);
            if (currentUser != null) {
                return true;
            }
            else {
                this.router.navigate(['/login']);
                return false;
            }
        }
        else if (sessionStorage.getItem('cva')) {
            var bytes = crypto_js__WEBPACK_IMPORTED_MODULE_1__["AES"].decrypt(sessionStorage.getItem('cva'), 'WilkaETruck2019');
            var decryptProfile = bytes.toString(crypto_js__WEBPACK_IMPORTED_MODULE_1__["enc"].Utf8);
            var currentUser = JSON.parse(decryptProfile);
            if (currentUser != null) {
                return true;
            }
            else {
                this.router.navigate(['/login']);
                return false;
            }
        }
        this.router.navigate(['/login']);
        return false;
    };
    AuthGuard.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_2__["defineInjectable"]({ factory: function AuthGuard_Factory() { return new AuthGuard(_angular_core__WEBPACK_IMPORTED_MODULE_2__["inject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"])); }, token: AuthGuard, providedIn: "root" });
    return AuthGuard;
}());



/***/ })

}]);
//# sourceMappingURL=common.js.map