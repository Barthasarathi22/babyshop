(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".icons{\r\n  float: right;\r\n  /* outline-style: none; */\r\n}\r\n#shop h1{\r\n font-family: 'Stylish', sans-serif;\r\n}\r\n.fab{\r\n  outline-style: none;\r\nborder-style: none;\r\n}\r\n#about h1{\r\n  font-family: 'Stylish', sans-serif;\r\n}\r\n.btn{\r\n  font-size: 25px;\r\n  /* outline-style: none; */\r\n  outline-style: none;\r\nborder-style: none;\r\n}\r\n.top{\r\n  border-bottom-style: solid;\r\nborder-color: black;\r\ntext-align: left;\r\nmargin-top: 1%;\r\nbackground-color: peru;\r\n\r\n}\r\n.dropdown {\r\n  position: relative;\r\n  display: inline-block;\r\n  float:right;\r\n}\r\n.dropdown-content {\r\n  display: none;\r\n  position: absolute;\r\n  background:rgba(0,0,0,0.3);\r\n  min-width: 250px;\r\n  min-height: 250px;\r\n  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\r\n  padding: 12px 16px;\r\n  z-index: 1;\r\nright: 0;\r\n}\r\n#lbt{\r\n  width: 95%;\r\n  height: 40%;\r\n  margin:3%;\r\n  margin-left: 5%;\r\n}\r\nlegend{\r\n  font-family: 'Stylish', 'sans-serif';\r\n  text-align: center;\r\ncolor:whitesmoke;\r\n}\r\n#uname,#pword{\r\n  width:95%;\r\n  margin:3%;\r\n  margin-left: 5%;\r\n}\r\ninput[type=\"text\"],input[type=\"password\"],input[type=\"email\"]{\r\n  margin:3%;\r\n  margin-left: 10%;\r\ndisplay: block;\r\nbox-sizing: border-box;\r\nbackground: transparent;\r\nborder: none;\r\noutline: none;\r\nborder-bottom: 2px solid black;\r\ncolor:black;\r\nwidth: 70%;\r\nfont-family: 'Stylish', 'sans-serif';\r\n}\r\n#subbtn{\r\nmargin-left: 15%;\r\n  width:60%;\r\n  font-family: 'Stylish', 'sans-serif';\r\n}\r\ntextarea{\r\n  width: 70%;\r\n  height: 80px;\r\n  margin:3%;\r\n  margin-left: 10%;\r\n  margin-top: 0%;\r\nmargin-bottom: 2%;\r\nfont-family: 'Stylish', 'sans-serif';\r\ncolor:black;\r\n}\r\n::-webkit-input-placeholder{\r\ncolor:gray;\r\n}\r\n::-moz-placeholder{\r\ncolor:gray;\r\n}\r\n::-ms-input-placeholder{\r\ncolor:gray;\r\n}\r\n::placeholder{\r\ncolor:gray;\r\n}\r\n.dropdown:hover .dropdown-content {\r\n  display: block;\r\n}\r\n.nav-item{\r\n  color: black;\r\n  /* margin: 10%; */\r\n  min-width: 45%;\r\n  text-align: center;\r\n  /* margin-left: 0; */\r\n  font-size: 18px;\r\n  font-family: 'Stylish', sans-serif;\r\n  border-radius: 50px 50px 50px 50px;\r\n  margin: 2%;\r\n  border-style: solid;\r\n  -webkit-margin-end: 1%;\r\n          margin-inline-end: 1%;\r\n  padding-top: 2%;\r\n  padding-bottom: 2%;\r\n  border-block-end-width: thin;\r\n  box-shadow: 0px 5px 0px black;\r\n  transition:1s;\r\n}\r\n.nav-item:hover{\r\ntext-decoration: none;\r\nbackground-color: whitesmoke;\r\ncolor:black;\r\n-webkit-transform: scale(1.1);\r\n        transform: scale(1.1);\r\n}\r\n.stop{\r\n background-color: deeppink;\r\n}\r\n.show{\r\n  box-shadow: 5px, 5px, 0px, gray;\r\n}\r\n.teddy2{\r\n  position: absolute;\r\n-webkit-transform: rotate(25deg);\r\n        transform: rotate(25deg);\r\nright:85px;\r\ntransition: 3s;\r\n}\r\n.teddy2:hover{\r\n  -webkit-transform: translate(250px);\r\n          transform: translate(250px);\r\n}\r\n.m-content{\r\n  font-family: 'Stylish', sans-serif;;\r\n  color: deeppink;\r\n  text-align: center;\r\n  min-height: 500px;\r\n  border-style: none;\r\n  background-color: whitesmoke;\r\n  background-image: url(\"/assets/cute baby.jpg\");\r\n  background-repeat: no-repeat;\r\n  background-size: 100%;\r\n}\r\n.con-text{\r\n  margin-top: 10%;\r\n}\r\nh1{\r\nfont-size: 4rem;\r\n}\r\nh3{\r\n  font-size: 3rem\r\n}\r\nh4{\r\n  font-size: 2rem;\r\n}\r\n.about{\r\n  border-style: none;\r\nmargin-top: 0px;\r\ntext-align: justify;\r\nbackground-color: deeppink;\r\n}\r\n.kitty{\r\n  width:100%;\r\n  position:absolute;\r\n  top:100px;\r\n  /* animation-name: kitty;\r\n  animation-fill-mode: both;\r\n  animation-iteration-count: infinite;*/\r\n  transition: 1s;\r\n}\r\n.kitty:hover{\r\n  -webkit-transform: rotate(360deg);\r\n          transform: rotate(360deg);\r\n}\r\n.img-box{\r\n  width:200px;\r\n  height: 200px;\r\n}\r\n.img-box img{\r\n  max-width: 160px;\r\n  max-height: 160px;\r\n}\r\n#shop{\r\n  border-style: none;\r\n  margin-top: 0px;\r\n  text-align: justify;\r\n  min-height: 80%;\r\nbackground-color: whitesmoke;\r\n}\r\n#shop h1{\r\n  text-align: center;\r\n}\r\n#musical,#outdoor,#learning,#wooden,#soft{\r\nmargin: 0%;\r\npadding: 0%;\r\nfloat: left;\r\nmin-width: 16%;\r\nmin-height: 350px;\r\nmargin: 2%;\r\nborder-style: none;\r\nborder-radius: 10px;\r\nbox-shadow: 10px 10px 20px black;\r\nbackground-color: transparent;\r\ntext-align: center;\r\nfont-family: 'Stylish', sans-serif;\r\ntransition: 2s;\r\n}\r\n#musical:hover,\r\n#outdoor:hover,\r\n#learning:hover,\r\n#wooden:hover,\r\n#soft:hover{\r\n  -webkit-transform: translate(180px);\r\n          transform: translate(180px);\r\n}\r\n.bt1{\r\n  margin-top:7%\r\n}\r\n.bt2{\r\n  margin-top:7%\r\n}\r\n.bt3{\r\n  margin-top:7%\r\n}\r\n.bt4{\r\n  margin-top:7%\r\n}\r\n.bt5{\r\n  margin-top:7%\r\n}\r\n.sale .btn{\r\n  background-color: deeppink;\r\n  box-shadow: 10px 10px 10px black;\r\n  border-style: none;\r\n  border-radius: 25px;\r\n    width: 85%;\r\n}\r\n.sale .btn:hover{\r\n  background-color:#0080ff;\r\n  color:whitesmoke;\r\n}\r\n#contact{\r\n  background-color:deeppink;\r\n  opacity: 1.0;\r\n  min-height: 550px;\r\n  border:10px solid transparent;\r\n}\r\n#contact h1{\r\n  color:black;\r\n  font-family: 'Stylish', sans-serif;\r\n  text-align: center;\r\n}\r\n.border-box{\r\n  border-style: solid;\r\n  height: 400px;\r\n  width: 450px;\r\n  margin-left: 10%;\r\n  margin-right: 10%;\r\n  border-radius: 20px;\r\n  padding: 5%;\r\n  background-color: white;\r\n  color:black;\r\n}\r\naddress{\r\n  font-family: 'stylish', 'sans-serif';\r\n  font-size: 30px;\r\n  text-align: center;\r\n  color:whitesmoke;\r\n}\r\naddress a{\r\n  color:whitesmoke;\r\n}\r\naddress a:hover{\r\n  text-decoration: none;\r\n}\r\naddress span{\r\n  font-weight: bold;\r\n  color:white;\r\n}\r\n/* #b-img{\r\n  border-image: url(\"/assets/balloon_PNG4968.png\") stretch;\r\n  border: 10px solid transparent;\r\n  padding: 15px;\r\n} */\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1oseUJBQXlCO0FBQzNCO0FBQ0E7Q0FDQyxrQ0FBa0M7QUFDbkM7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQixrQkFBa0I7QUFDbEI7QUFDQTtFQUNFLGtDQUFrQztBQUNwQztBQUNBO0VBQ0UsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixtQkFBbUI7QUFDckIsa0JBQWtCO0FBQ2xCO0FBQ0E7RUFDRSwwQkFBMEI7QUFDNUIsbUJBQW1CO0FBQ25CLGdCQUFnQjtBQUNoQixjQUFjO0FBQ2Qsc0JBQXNCOztBQUV0QjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixXQUFXO0FBQ2I7QUFDQTtFQUNFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsMEJBQTBCO0VBQzFCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsNENBQTRDO0VBQzVDLGtCQUFrQjtFQUNsQixVQUFVO0FBQ1osUUFBUTtBQUNSO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsV0FBVztFQUNYLFNBQVM7RUFDVCxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxvQ0FBb0M7RUFDcEMsa0JBQWtCO0FBQ3BCLGdCQUFnQjtBQUNoQjtBQUNBO0VBQ0UsU0FBUztFQUNULFNBQVM7RUFDVCxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxTQUFTO0VBQ1QsZ0JBQWdCO0FBQ2xCLGNBQWM7QUFDZCxzQkFBc0I7QUFDdEIsdUJBQXVCO0FBQ3ZCLFlBQVk7QUFDWixhQUFhO0FBQ2IsOEJBQThCO0FBQzlCLFdBQVc7QUFDWCxVQUFVO0FBQ1Ysb0NBQW9DO0FBQ3BDO0FBQ0E7QUFDQSxnQkFBZ0I7RUFDZCxTQUFTO0VBQ1Qsb0NBQW9DO0FBQ3RDO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsWUFBWTtFQUNaLFNBQVM7RUFDVCxnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQixpQkFBaUI7QUFDakIsb0NBQW9DO0FBQ3BDLFdB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V0FBVztBQUNiO0FBQ0E7Ozs7R0FJRyIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmljb25ze1xyXG4gIGZsb2F0OiByaWdodDtcclxuICAvKiBvdXRsaW5lLXN0eWxlOiBub25lOyAqL1xyXG59XHJcbiNzaG9wIGgxe1xyXG4gZm9udC1mYW1pbHk6ICdTdHlsaXNoJywgc2Fucy1zZXJpZjtcclxufVxyXG4uZmFie1xyXG4gIG91dGxpbmUtc3R5bGU6IG5vbmU7XHJcbmJvcmRlci1zdHlsZTogbm9uZTtcclxufVxyXG4jYWJvdXQgaDF7XHJcbiAgZm9udC1mYW1pbHk6ICdTdHlsaXNoJywgc2Fucy1zZXJpZjtcclxufVxyXG4uYnRue1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxuICAvKiBvdXRsaW5lLXN0eWxlOiBub25lOyAqL1xyXG4gIG91dGxpbmUtc3R5bGU6IG5vbmU7XHJcbmJvcmRlci1zdHlsZTogbm9uZTtcclxufVxyXG4udG9we1xyXG4gIGJvcmRlci1ib3R0b20tc3R5bGU6IHNvbGlkO1xyXG5ib3JkZXItY29sb3I6IGJsYWNrO1xyXG50ZXh0LWFsaWduOiBsZWZ0O1xyXG5tYXJnaW4tdG9wOiAxJTtcclxuYmFja2dyb3VuZC1jb2xvcjogcGVydTtcclxuXHJcbn1cclxuLmRyb3Bkb3duIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZsb2F0OnJpZ2h0O1xyXG59XHJcbi5kcm9wZG93bi1jb250ZW50IHtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsMC4zKTtcclxuICBtaW4td2lkdGg6IDI1MHB4O1xyXG4gIG1pbi1oZWlnaHQ6IDI1MHB4O1xyXG4gIGJveC1zaGFkb3c6IDBweCA4cHggMTZweCAwcHggcmdiYSgwLDAsMCwwLjIpO1xyXG4gIHBhZGRpbmc6IDEycHggMTZweDtcclxuICB6LWluZGV4OiAxO1xyXG5yaWdodDogMDtcclxufVxyXG4jbGJ0e1xyXG4gIHdpZHRoOiA5NSU7XHJcbiAgaGVpZ2h0OiA0MCU7XHJcbiAgbWFyZ2luOjMlO1xyXG4gIG1hcmdpbi1sZWZ0OiA1JTtcclxufVxyXG5sZWdlbmR7XHJcbiAgZm9udC1mYW1pbHk6ICdTdHlsaXNoJywgJ3NhbnMtc2VyaWYnO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuY29sb3I6d2hpdGVzbW9rZTtcclxufVxyXG4jdW5hbWUsI3B3b3Jke1xyXG4gIHdpZHRoOjk1JTtcclxuICBtYXJnaW46MyU7XHJcbiAgbWFyZ2luLWxlZnQ6IDUlO1xyXG59XHJcbmlucHV0W3R5cGU9XCJ0ZXh0XCJdLGlucHV0W3R5cGU9XCJwYXNzd29yZFwiXSxpbnB1dFt0eXBlPVwiZW1haWxcIl17XHJcbiAgbWFyZ2luOjMlO1xyXG4gIG1hcmdpbi1sZWZ0OiAxMCU7XHJcbmRpc3BsYXk6IGJsb2NrO1xyXG5ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuYm9yZGVyOiBub25lO1xyXG5vdXRsaW5lOiBub25lO1xyXG5ib3JkZXItYm90dG9tOiAycHggc29saWQgYmxhY2s7XHJcbmNvbG9yOmJsYWNrO1xyXG53aWR0aDogNzAlO1xyXG5mb250LWZhbWlseTogJ1N0eWxpc2gnLCAnc2Fucy1zZXJpZic7XHJcbn1cclxuI3N1YmJ0bntcclxubWFyZ2luLWxlZnQ6IDE1JTtcclxuICB3aWR0aDo2MCU7XHJcbiAgZm9udC1mYW1pbHk6ICdTdHlsaXNoJywgJ3NhbnMtc2VyaWYnO1xyXG59XHJcbnRleHRhcmVhe1xyXG4gIHdpZHRoOiA3MCU7XHJcbiAgaGVpZ2h0OiA4MHB4O1xyXG4gIG1hcmdpbjozJTtcclxuICBtYXJnaW4tbGVmdDogMTAlO1xyXG4gIG1hcmdpbi10b3A6IDAlO1xyXG5tYXJnaW4tYm90dG9tOiAyJTtcclxuZm9udC1mYW1pbHk6ICdTdHlsaXNoJywgJ3NhbnMtc2VyaWYnO1xyXG5jb2xvcjpibGFjaztcclxufVxyXG46OnBsYWNlaG9sZGVye1xyXG5jb2xvcjpncmF5O1xyXG59XHJcbi5kcm9wZG93bjpob3ZlciAuZHJvcGRvd24tY29udGVudCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5uYXYtaXRlbXtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgLyogbWFyZ2luOiAxMCU7ICovXHJcbiAgbWluLXdpZHRoOiA0NSU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIC8qIG1hcmdpbi1sZWZ0OiAwOyAqL1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBmb250LWZhbWlseTogJ1N0eWxpc2gnLCBzYW5zLXNlcmlmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwcHggNTBweCA1MHB4IDUwcHg7XHJcbiAgbWFyZ2luOiAyJTtcclxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gIG1hcmdpbi1pbmxpbmUtZW5kOiAxJTtcclxuICBwYWRkaW5nLXRvcDogMiU7XHJcbiAgcGFkZGluZy1ib3R0b206IDIlO1xyXG4gIGJvcmRlci1ibG9jay1lbmQtd2lkdGg6IHRoaW47XHJcbiAgYm94LXNoYWRvdzogMHB4IDVweCAwcHggYmxhY2s7XHJcbiAgdHJhbnNpdGlvbjoxcztcclxufVxyXG4ubmF2LWl0ZW06aG92ZXJ7XHJcbnRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxuY29sb3I6YmxhY2s7XHJcbnRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxufVxyXG4uc3RvcHtcclxuIGJhY2tncm91bmQtY29sb3I6IGRlZXBwaW5rO1xyXG59XHJcbi5zaG93e1xyXG4gIGJveC1zaGFkb3c6IDVweCwgNXB4LCAwcHgsIGdyYXk7XHJcbn1cclxuLnRlZGR5MntcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbnRyYW5zZm9ybTogcm90YXRlKDI1ZGVnKTtcclxucmlnaHQ6ODVweDtcclxudHJhbnNpdGlvbjogM3M7XHJcbn1cclxuLnRlZGR5Mjpob3ZlcntcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgyNTBweCk7XHJcbn1cclxuLm0tY29udGVudHtcclxuICBmb250LWZhbWlseTogJ1N0eWxpc2gnLCBzYW5zLXNlcmlmOztcclxuICBjb2xvcjogZGVlcHBpbms7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1pbi1oZWlnaHQ6IDUwMHB4O1xyXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvY3V0ZSBiYWJ5LmpwZ1wiKTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcclxufVxyXG4uY29uLXRleHR7XHJcbiAgbWFyZ2luLXRvcDogMTAlO1xyXG59XHJcbmgxe1xyXG5mb250LXNpemU6IDRyZW07XHJcbn1cclxuaDN7XHJcbiAgZm9udC1zaXplOiAzcmVtXHJcbn1cclxuaDR7XHJcbiAgZm9udC1zaXplOiAycmVtO1xyXG59XHJcbi5hYm91dHtcclxuICBib3JkZXItc3R5bGU6IG5vbmU7XHJcbm1hcmdpbi10b3A6IDBweDtcclxudGV4dC1hbGlnbjoganVzdGlmeTtcclxuYmFja2dyb3VuZC1jb2xvcjogZGVlcHBpbms7XHJcbn1cclxuLmtpdHR5e1xyXG4gIHdpZHRoOjEwMCU7XHJcbiAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgdG9wOjEwMHB4O1xyXG4gIC8qIGFuaW1hdGlvbi1uYW1lOiBraXR0eTtcclxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xyXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlOyovXHJcbiAgdHJhbnNpdGlvbjogMXM7XHJcbn1cclxuLmtpdHR5OmhvdmVye1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbn1cclxuLmltZy1ib3h7XHJcbiAgd2lkdGg6MjAwcHg7XHJcbiAgaGVpZ2h0OiAyMDBweDtcclxufVxyXG4uaW1nLWJveCBpbWd7XHJcbiAgbWF4LXdpZHRoOiAxNjBweDtcclxuICBtYXgtaGVpZ2h0OiAxNjBweDtcclxufVxyXG5cclxuI3Nob3B7XHJcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xyXG4gIG1hcmdpbi10b3A6IDBweDtcclxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gIG1pbi1oZWlnaHQ6IDgwJTtcclxuYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxufVxyXG4jc2hvcCBoMXtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuI211c2ljYWwsI291dGRvb3IsI2xlYXJuaW5nLCN3b29kZW4sI3NvZnR7XHJcbm1hcmdpbjogMCU7XHJcbnBhZGRpbmc6IDAlO1xyXG5mbG9hdDogbGVmdDtcclxubWluLXdpZHRoOiAxNiU7XHJcbm1pbi1oZWlnaHQ6IDM1MHB4O1xyXG5tYXJnaW46IDIlO1xyXG5ib3JkZXItc3R5bGU6IG5vbmU7XHJcbmJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbmJveC1zaGFkb3c6IDEwcHggMTBweCAyMHB4IGJsYWNrO1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxudGV4dC1hbGlnbjogY2VudGVyO1xyXG5mb250LWZhbWlseTogJ1N0eWxpc2gnLCBzYW5zLXNlcmlmO1xyXG50cmFuc2l0aW9uOiAycztcclxufVxyXG4jbXVzaWNhbDpob3ZlcixcclxuI291dGRvb3I6aG92ZXIsXHJcbiNsZWFybmluZzpob3ZlcixcclxuI3dvb2Rlbjpob3ZlcixcclxuI3NvZnQ6aG92ZXJ7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTgwcHgpO1xyXG59XHJcbi5idDF7XHJcbiAgbWFyZ2luLXRvcDo3JVxyXG59XHJcbi5idDJ7XHJcbiAgbWFyZ2luLXRvcDo3JVxyXG59XHJcbi5idDN7XHJcbiAgbWFyZ2luLXRvcDo3JVxyXG59XHJcbi5idDR7XHJcbiAgbWFyZ2luLXRvcDo3JVxyXG59XHJcbi5idDV7XHJcbiAgbWFyZ2luLXRvcDo3JVxyXG59XHJcbi5zYWxlIC5idG57XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZGVlcHBpbms7XHJcbiAgYm94LXNoYWRvdzogMTBweCAxMHB4IDEwcHggYmxhY2s7XHJcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICB3aWR0aDogODUlO1xyXG59XHJcbi5zYWxlIC5idG46aG92ZXJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjojMDA4MGZmO1xyXG4gIGNvbG9yOndoaXRlc21va2U7XHJcbn1cclxuI2NvbnRhY3R7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjpkZWVwcGluaztcclxuICBvcGFjaXR5OiAxLjA7XHJcbiAgbWluLWhlaWdodDogNTUwcHg7XHJcbiAgYm9yZGVyOjEwcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbn1cclxuI2NvbnRhY3QgaDF7XHJcbiAgY29sb3I6YmxhY2s7XHJcbiAgZm9udC1mYW1pbHk6ICdTdHlsaXNoJywgc2Fucy1zZXJpZjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmJvcmRlci1ib3h7XHJcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICBoZWlnaHQ6IDQwMHB4O1xyXG4gIHdpZHRoOiA0NTBweDtcclxuICBtYXJnaW4tbGVmdDogMTAlO1xyXG4gIG1hcmdpbi1yaWdodDogMTAlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgcGFkZGluZzogNSU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgY29sb3I6YmxhY2s7XHJcbn1cclxuYWRkcmVzc3tcclxuICBmb250LWZhbWlseTogJ3N0eWxpc2gnLCAnc2Fucy1zZXJpZic7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjp3aGl0ZXNtb2tlO1xyXG59XHJcbmFkZHJlc3MgYXtcclxuICBjb2xvcjp3aGl0ZXNtb2tlO1xyXG59XHJcbmFkZHJlc3MgYTpob3ZlcntcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuYWRkcmVzcyBzcGFue1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGNvbG9yOndoaXRlO1xyXG59XHJcbi8qICNiLWltZ3tcclxuICBib3JkZXItaW1hZ2U6IHVybChcIi9hc3NldHMvYmFsbG9vbl9QTkc0OTY4LnBuZ1wiKSBzdHJldGNoO1xyXG4gIGJvcmRlcjogMTBweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG59ICovXHJcblxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <div class=\"container-fluid\">\n      <div class=\"top\">\n        <div id=\"particles-js\">\n    <div class=\"row\">\n      <div class=\"col-md-6\">\n      The chained hero's birthday is\n{{ title | slice:2:3 }}\n        <h6>Call us:+91 9500116995 <span>Email: <a href=\"https://mail.google.com/mail/u/0/?tab=rm#inbox?compose=new\">sarathi.simple@gmail.com</a></span></h6>\n      </div>\n      <div class=\"col-md-6\">\n        <div class=\"icons\">\n          <div class=\"dropdown\">\n          <a class=\"btn\" href=\"#\">\n        <i class=\"far fa-user\"></i>\n        </a>\n        <div class=\"dropdown-content\">\n\n          <legend>Login</legend>\n          <input type=\"text\" id=\"uname\" name=\"uname\" placeholder=\"Username\" [(ngModel)]=\"uname\">\n          <input type=\"password\" id=\"pword\" name=\"pword\" placeholder=\"Password\" [(ngModel)]=\"pword\">\n          <button id=\"lbt\" class=\"btn btn-primary\" (click)='fun()'>Login</button>\n          <p>{{uname}}</p>\n\n        </div>\n      </div>\n\n  <a class=\"btn\" href=\"https://www.facebook.com/\" target=\"_blank\">\n    <i class=\"fab fa-facebook-f\"></i>\n  </a>\n  <a class=\"btn\" href=\"https://twitter.com/login\" target=\"_blank\">\n      <i class=\"fab fa-twitter\"></i>\n    </a>\n    <a class=\"btn\" href=\"https://www.instagram.com/accounts/login/?hl=en\" target=\"_blank\">\n        <i class=\"fab fa-instagram\"></i>\n      </a>\n      <a class=\"btn\" href=\"https://www.youtube.com/\" target=\"_blank\">\n          <i class=\"fab fa-youtube\"></i>\n        </a>\n</div>\n      </div>\n    </div>\n  </div>\n  </div>\n  <div class=\"stop\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n          <nav class=\"navbar navbar-expand-lg\">\n              <a class=\"navbar-brand\" href=\"#about\"><img src=\"/assets/babyshop_logo_png.png\"></a>\n                <div class=\"navbar-nav\">\n                  <a class=\"nav-item\" href=\"#home\">HOME</a>\n                  <a class=\"nav-item\" href=\"#about\">ABOUT US</a>\n                  <a class=\"nav-item\" href=\"#shop\">SHOP</a>\n                  <a class=\"nav-item\" href=\"#contact\">CONTACT US</a>\n                </div>\n            </nav>\n      </div>\n\n    </div>\n  </div>\n  <div class=\"m-content\">\n    <div class=\"row\">\n      <div class=\"col-md-6\">\n<div class=\"con-text\"><h1>ToYS</h1>\n<h3 id=\"b-img\">Find the perfect playtime companions</h3>\n<h4>Musical toys, Soft toys, <br>Outdoor Play, Learning toys and etc.,</h4>\n</div>\n     </div>\n     <div class=\"col-md-6\">\n        <div class=\"doll\">\n<img src=\"/assets/teddy2_transparent.png\" class=\"teddy2\">\n        </div>\n              </div>\n    </div>\n  </div>\n  <section id=\"about\" class=\"about\">\n    <div class=\"row\">\n      <div class=\"col-md-4\">\n        <img src=\"/assets/ball.png\" class=\"kitty\">\n      </div>\n      <div class=\"col-md-8\">\n        <h1>We the <b>babyshop</b></h1>\n<h5>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut fugiat aspernatur accusantium suscipit dolore neque repudiandae ipsa eaque est alias, illo ad reprehenderit, ducimus optio iste minus? Repellat, quis explicabo.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut fugiat aspernatur accusantium suscipit dolore neque repudiandae ipsa eaque est alias, illo ad reprehenderit, ducimus optio iste minus? Repellat, quis explicabo.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut fugiat aspernatur accusantium suscipit dolore neque repudiandae ipsa eaque est alias, illo ad reprehenderit, ducimus optio iste minus? Repellat, quis explicabo.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut fugiat aspernatur accusantium suscipit dolore neque repudiandae ipsa eaque est alias, illo ad reprehenderit, ducimus optio iste minus? Repellat, quis explicabo.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut fugiat aspernatur accusantium suscipit dolore neque repudiandae ipsa eaque est alias, illo ad reprehenderit, ducimus optio iste minus? Repellat, quis explicabo.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut fugiat aspernatur accusantium suscipit dolore neque repudiandae ipsa eaque est alias, illo ad reprehenderit, ducimus optio iste minus? Repellat, quis explicabo.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut fugiat aspernatur accusantium suscipit dolore neque repudiandae ipsa eaque est alias, illo ad reprehenderit, ducimus optio iste minus? Repellat, quis explicabo.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut fugiat aspernatur accusantium suscipit dolore neque repudiandae ipsa eaque est alias, illo ad reprehenderit, ducimus optio iste minus? Repellat, quis explicabo.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut fugiat aspernatur accusantium suscipit dolore neque repudiandae ipsa eaque est alias, illo ad reprehenderit, ducimus optio iste minus? Repellat, quis explicabo.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut fugiat aspernatur accusantium suscipit dolore neque repudiandae ipsa eaque est alias, illo ad reprehenderit, ducimus optio iste minus? Repellat, quis explicabo.</h5>\n      </div>\n    </div>\n  </section>\n  <section id=\"shop\">\n      <div class=\"sale\">\n      <div class=\"row\">\n    <div class=\"col-md-12\">\n        <h1>What we <b>Sale</b></h1>\n        <div id=\"musical\">\n<h5>Musical Toys</h5>\n<div class=\"img-box\">\n  <img src=\"/assets/musical toy.png\" width=\"170px\"></div>\n<div class=\"bt1\">\n  <button class=\"btn btn-primary\">Explore</button></div>\n        </div>\n        <div id=\"soft\">\n                <h5>Soft Toys</h5>\n                <div class=\"img-box\">\n                    <img src=\"/assets/soft toys.png\">\n                </div>\n                <div class=\"bt2\"><button class=\"btn btn-primary\">Explore</button></div>\n          </div>\n          <div id=\"outdoor\">\n              <h5>Outdoor Toys</h5>\n              <div class=\"img-box\">\n                  <img src=\"/assets/outdoor toy.png\">\n              </div>\n              <div class=\"bt3\"><button class=\"btn btn-primary\">Explore</button></div>\n            </div>\n            <div id=\"wooden\">\n                <h5>Wooden Toys</h5>\n                <div class=\"img-box\">\n                    <img src=\"/assets/wooden toy.png\">\n                </div>\n                <div class=\"bt4\"><button class=\"btn btn-primary\">Explore</button></div>\n              </div>\n              <div id=\"learning\">\n                  <h5>Learning Toys</h5>\n                  <div class=\"img-box\">\n                      <img src=\"/assets/staking game.png\">\n                  </div>\n                  <div class=\"bt5\"><button class=\"btn btn-primary\">Explore</button></div>\n                </div>\n      </div>\n    </div>\n  </div>\n  </section>\n  <section id=\"contact\">\n\n          <h1>Contact Us</h1>\n<div class=\"row\">\n    <div class=\"col-md-6\">\n        <div class=\"border-box\">\n<input type=\"text\" placeholder=\"I am\">\n<input type=\"text\" placeholder=\"My Lastname\">\n<input type=\"text\" placeholder=\"My Mobile Number\">\n<input type=\"email\" placeholder=\"My email\">\n<textarea placeholder=\"Message\"></textarea><br>\n<button id=\"subbtn\" name=\"sbtn\">Submit</button>\n  </div>\n</div>\n<div class=\"col-md-6\">\n    <address>\n        Owner: <a href=\"mailto:sarathi.simple@gmail.com\">Barthasarathi</a>.<br>\n        <span>babyshop</span>,<br>\n        New No 12/2, Old No 27, Sreeram Nagar 1st Street,<br>\n        Tharamani,<br>\n        Chennai - 600113,<br>\n        Tamilnadu.\n        </address>\n        <address>\n            Email: <a href=\"mailto:sarathi.simple@gmail.com\">sarathi.simple@gmail.com</a><br>\n            Tel: <a href=\"tel:+9144263133\">(+91) 44-263133</a><br>\n            Mobile: <a href=\"tel:9500116995\">(+91) 9500116995</a>\n          </address>\n\n</div>\n</div>\n  </section>\n    </div>\n\n\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'practice1';
        // birthday=new Date();
        // uname:any;
        // pword:any;
        // fun() {
        //   if ( this.uname === 'Bartha' && this.pword === 'sarathi') {
        //     alert("Welcome!!" + this.uname)
        //   }
        //   else {
        //     alert('Invalid User!! Please Register')
        //   }
        //   }
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Angular 4\practice1\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map