(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"],{

/***/ "./src/app/tab1/tab1.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/*! exports provided: Tab1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function() { return Tab1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab1.page */ "./src/app/tab1/tab1.page.ts");







var Tab1PageModule = /** @class */ (function () {
    function Tab1PageModule() {
    }
    Tab1PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"] }])
            ],
            declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"]]
        })
    ], Tab1PageModule);
    return Tab1PageModule;
}());



/***/ }),

/***/ "./src/app/tab1/tab1.page.html":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>\n      <img src=\"https://explorer.crypto.ba/insight/img/DASHlogo_white.png\"  width=\"75\" height=\"35\" alt=\"\">\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-card >\n      <ion-card-header>\n      <ion-card-title>\n     Wallet details\n      </ion-card-title>\n      </ion-card-header>\n      <ion-card-content >\n       <ion-item>\n         <ion-label text-wrap>  <h4> Wallet address  </h4>\n         <p> {{walletaddress}}  </p> </ion-label>\n       </ion-item>\n\n       <ion-item>\n         <ion-label > <h4> Wallet balance  </h4>\n         <p *ngIf=\"walletbalance\"> {{walletbalance.balanceSat / 100000000 }} RXC</p> </ion-label>\n       </ion-item>\n        <ion-button fill=\"clear\" size=\"small\" color=\"primary\" (click)=\"gettestnetbalance()\"> Reload balance </ion-button>\n      </ion-card-content >\n    </ion-card >\n\n    <ion-card >\n      <ion-card-header>\n      <ion-card-title>\n     Send RXC \n      </ion-card-title>\n      </ion-card-header>\n      <ion-card-content >\n       <ion-item>\n         <ion-label position=\"stacked\"> Address to send </ion-label>\n         <ion-textarea  rows=\"2\" text-wrap [(ngModel)]=\"toaddress\" placeholder=\"Address to send \"></ion-textarea>\n       </ion-item>\n\n       <ion-item>\n         <ion-label position=\"stacked\"> Amount to send </ion-label>\n         <ion-input  [(ngModel)]=\"toamount\" placeholder=\"Amount to send \"></ion-input>\n       </ion-item>\n\n      <ion-button fill=\"clear\" size=\"small\" color=\"primary\" (click)=\"sendpayment()\"> Direct send </ion-button>\n      </ion-card-content >\n    </ion-card >\n\n\n    <ion-card class=\"datainput\">\n      <ion-card-header>\n      <ion-card-title>\n     Transaction Status\n      </ion-card-title>\n      </ion-card-header>\n\n      <ion-item >\n     Transaction output:  {{txid}}\n      </ion-item>\n    </ion-card>\n\n\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/tab1/tab1.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card ion-img {\n  max-height: 35vh;\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RvbmkvRG93bmxvYWRzL3dvcmtpbmdkYXNod2FsbGV0LW1hc3Rlci9zcmMvYXBwL3RhYjEvdGFiMS5wYWdlLnNjc3MiLCJzcmMvYXBwL3RhYjEvdGFiMS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC90YWIxL3RhYjEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndlbGNvbWUtY2FyZCBpb24taW1nIHtcbiAgbWF4LWhlaWdodDogMzV2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbiIsIi53ZWxjb21lLWNhcmQgaW9uLWltZyB7XG4gIG1heC1oZWlnaHQ6IDM1dmg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59Il19 */"

/***/ }),

/***/ "./src/app/tab1/tab1.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/*! exports provided: Tab1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1Page", function() { return Tab1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _providers_puppipay_dash_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../providers/puppipay.dash.service */ "./src/app/providers/puppipay.dash.service.ts");




var Tab1Page = /** @class */ (function () {
    function Tab1Page(storage, puppipayservice) {
        this.storage = storage;
        this.puppipayservice = puppipayservice;
    }
    Tab1Page.prototype.ngOnInit = function () {
        this.loadwalletwif();
    };
    Tab1Page.prototype.ionViewWillEnter = function () {
        this.loadwalletwif();
    };
    Tab1Page.prototype.wiftoaddress = function () {
        this.walletaddress = dashcore.PrivateKey.fromWIF(this.walletwif).toAddress(dashcore.Networks.testnet).toString();
    };
    Tab1Page.prototype.sendpayment = function () {
        var _this = this;
        this.puppipayservice.getUtxo(this.walletaddress, 'livenet').then(function (data) {
            var fees = 0.0001;
            var utxo = data;
            var privatekey = dashcore.PrivateKey.fromWIF(_this.walletwif);
            var changeaddress = _this.walletaddress;
            var tx = _this.puppipayservice.createtransaction(utxo, privatekey, changeaddress, _this.toaddress, Number(_this.toamount), fees);
            console.log("tx log:", tx.toString('hex'));
            _this.puppipayservice.broadcast(tx.toString('hex')).then(function (res) {
                if (res) {
                    _this.txid = res.txid;
                    var trandata = {
                        txid: _this.txid,
                        fromaddress: _this.walletaddress,
                        toaddress: _this.toaddress,
                        amount: Number(_this.toamount),
                        fees: fees
                    };
                    _this.puppipayservice.savetransaction(trandata);
                }
            });
        });
    };
    Tab1Page.prototype.loadwalletwif = function () {
        var _this = this;
        this.storage.get('walletwif').then(function (data) {
            if (data) {
                _this.storage.get('walletaddress').then(function (data1) {
                    if (data1) {
                        _this.walletaddress = data1;
                    }
                });
                _this.walletwif = data;
                _this.gettestnetbalance();
            }
        });
    };
    Tab1Page.prototype.gettestnetbalance = function () {
        var _this = this;
        if (!this.walletaddress) {
            return;
        }
        this.puppipayservice.getBalance(this.walletaddress, "livenet").then(function (data) {
            if (data != null) {
                _this.walletbalance = data;
            }
            else {
                alert("Query failed");
            }
        }, function (err) {
            alert(err);
        });
    };
    Tab1Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab1',
            template: __webpack_require__(/*! ./tab1.page.html */ "./src/app/tab1/tab1.page.html"),
            styles: [__webpack_require__(/*! ./tab1.page.scss */ "./src/app/tab1/tab1.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"],
            _providers_puppipay_dash_service__WEBPACK_IMPORTED_MODULE_3__["PuppipayDashService"]])
    ], Tab1Page);
    return Tab1Page;
}());



/***/ })

}]);
//# sourceMappingURL=tab1-tab1-module.js.map