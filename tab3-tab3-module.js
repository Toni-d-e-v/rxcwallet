(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab3-tab3-module"],{

/***/ "./src/app/tab3/tab3.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.module.ts ***!
  \*************************************/
/*! exports provided: Tab3PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3PageModule", function() { return Tab3PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab3.page */ "./src/app/tab3/tab3.page.ts");







var Tab3PageModule = /** @class */ (function () {
    function Tab3PageModule() {
    }
    Tab3PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"] }])
            ],
            declarations: [_tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"]]
        })
    ], Tab3PageModule);
    return Tab3PageModule;
}());



/***/ }),

/***/ "./src/app/tab3/tab3.page.html":
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n   <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/tabs/tab1\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      Wallet setting\n    </ion-title>\n\n  </ion-toolbar>\n</ion-header>\n\n\n\n<ion-content>\n\n<ion-card  class=\"datainput\">\n<ion-card-header>\n<ion-card-title>\n <ion-button fill=\"clear\" size=\"small\" color=\"primary\" (click)=\"createwif()\"> Create Wallet  </ion-button>\n</ion-card-title>\n</ion-card-header>\n<ion-item>\n<ion-label position=\"stacked\"> Enter wallet private key </ion-label>\n<ion-textarea rows=\"2\" text-wrap placeholder=\"RXC testnet wif\" [(ngModel)]=\"walletwif\" > </ion-textarea>\n           \n</ion-item>\n<ion-item>\n<ion-label text-wrap>\n\n</ion-label>\n\n <ion-button fill=\"clear\" size=\"small\" color=\"primary\" (click)=\"savewif()\"> Save </ion-button>\n <ion-button fill=\"clear\" size=\"small\" color=\"primary\" (click)=\"gettestnetbalance()\">Help </ion-button>\n</ion-item>\n\n</ion-card>\n</script>\n\n\n</script>\n<ion-card >\n\n    <ion-list>\n      <ion-item lines=\"full\">\n        <ion-icon slot=\"start\" name=\"moon\"></ion-icon>\n        <ion-label>\n          Toggle Dark Theme\n        </ion-label>\n        <ion-toggle id=\"themeToggle\" slot=\"end\"></ion-toggle>\n      </ion-item>\n    </ion-list>\n\n  <ion-card-header>\n  <ion-card-title>\n  RXC INFO\n  </ion-card-title>\n  </ion-card-header>\n  <ion-card-content >\n   <ion-item>\n     <ion-label text-wrap>  <h4> Crypto.ba RXC project  </h4>\n     <p> First bosnian cryptocurrency, community driven! </p> </ion-label>\n   </ion-item>\n\n   <ion-item>\n     <ion-label > <h4> Made by community for community!  </h4>\n     <p>This is RXC community mobile wallet.\n       \n     </p> </ion-label>\n   </ion-item>\n  </ion-card-content >\n</ion-card >\n\n\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/tab3/tab3.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYjMvdGFiMy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/tab3/tab3.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab3/tab3.page.ts ***!
  \***********************************/
/*! exports provided: Tab3Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3Page", function() { return Tab3Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _providers_puppipay_dash_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../providers/puppipay.dash.service */ "./src/app/providers/puppipay.dash.service.ts");





var Tab3Page = /** @class */ (function () {
    function Tab3Page(http, puppipayservice, storage) {
        this.http = http;
        this.puppipayservice = puppipayservice;
        this.storage = storage;
        this.loadwalletwif();
    }
    Tab3Page.prototype.ionViewWillEnter = function () {
        this.loadwalletwif();
    };
    Tab3Page.prototype.createwif1 = function () {
    };
    Tab3Page.prototype.createwif = function () {
        var RXC = bitcoin.networks.bitcoin;
        RXC.pubKeyHash = 0x3c;
        RXC.wif = 0xBC;
        RXC.scriptHash = 0x3d;
        var keyPair = bitcoin.ECPair.makeRandom();
        var pubKey = keyPair.getAddress();
        var privKey = keyPair.toWIF();
        this.walletwif = privKey;
        this.walletaddress = pubKey;
        this.storage.set('walletwif', this.walletwif);
        //this.storage.set('walletaddress', this.walletaddress);
    };
    Tab3Page.prototype.savewif = function () {
        this.storage.set('walletwif', this.walletwif);
        var RXC = bitcoin;
        RXC.pubKeyHash = 0x3c;
        RXC.wif = 0xBC;
        RXC.scriptHash = 0x3d;
        var keyPair = RXC.ECPair.fromWIF(this.walletwif);
        var BTCAddressFromWIF = keyPair.getAddress(keyPair, keyPair.network);
        console.log(BTCAddressFromWIF);
        alert("Wallet impoted!! ");
        this.storage.set('walletaddress', BTCAddressFromWIF);
    };
    Tab3Page.prototype.wiftoaddress = function () {
        var RXC = bitcoin;
        RXC.pubKeyHash = 0x3c;
        RXC.wif = 0xBC;
        RXC.scriptHash = 0x3d;
        var keyPair = RXC.ECPair.fromWIF(this.walletwif);
        var BTCAddressFromWIF = keyPair.getAddress(keyPair, keyPair.network);
        console.log(BTCAddressFromWIF);
        this.storage.set('walletaddress', BTCAddressFromWIF);
        alert("Wallet impoted!! " + BTCAddressFromWIF);
    };
    Tab3Page.prototype.loadwalletwif = function () {
        var _this = this;
        this.storage.get('walletwif').then(function (data) {
            if (data) {
                _this.walletwif = data;
                _this.gettestnetbalance();
            }
        });
    };
    Tab3Page.prototype.gettestnetbalance = function () {
        var _this = this;
        if (!this.walletaddress) {
            return;
        }
        this.puppipayservice.getBalance(this.walletaddress, "testnet").then(function (data) {
            if (data != null) {
                _this.testnetaddressbalance = data;
            }
            else {
                alert("Query failed");
            }
        }, function (err) {
            alert(err);
        });
    };
    Tab3Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab3',
            template: __webpack_require__(/*! ./tab3.page.html */ "./src/app/tab3/tab3.page.html"),
            styles: [__webpack_require__(/*! ./tab3.page.scss */ "./src/app/tab3/tab3.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_3__["Http"],
            _providers_puppipay_dash_service__WEBPACK_IMPORTED_MODULE_4__["PuppipayDashService"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"]])
    ], Tab3Page);
    return Tab3Page;
}());



/***/ })

}]);
//# sourceMappingURL=tab3-tab3-module.js.map