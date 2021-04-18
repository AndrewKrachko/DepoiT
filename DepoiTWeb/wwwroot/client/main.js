(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Work\Programming\DepoiT\DepoiTWeb\client\src\main.ts */"zUnb");


/***/ }),

/***/ "0AbP":
/*!***********************************************!*\
  !*** ./src/app/services/dashboard.service.ts ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Dashboard; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




class Dashboard {
    constructor(http) {
        this.http = http;
        this.appName = "DepoiT";
        this.depots = [];
        this.storages = [];
        this.errorMessage = "";
    }
    get loginRequred() {
        return this.http.post("/api/authenticate/istokenvalid", null, this.getHeaders());
    }
    login(creds) {
        return this.http.post("/api/authenticate/createtoken", creds).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(data => {
            this.setSession(data.token);
        }));
    }
    getUser() {
        return this.http.post("/api/user/getme", "", this.getHeaders()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(data => this.user = data));
    }
    setSession(token) {
        localStorage.setItem('id_token', token);
    }
    logout() {
        localStorage.removeItem("id_token");
    }
    getHeaders() {
        return { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set("Authorization", `Bearer ${localStorage.getItem("id_token")}`) };
    }
    getDepots() {
        return this.http.post("/api/depot/getbyparent", "", this.getHeaders()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(data => this.depots = data));
    }
    setActiveDepot(depotId) {
        this.activeDepots = depotId;
        this.getStorages().subscribe();
    }
    getStorages() {
        return this.http.post("/api/storage/getbyparent", this.activeDepots, this.getHeaders()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(data => this.storages = data));
    }
    getItems(storageId) {
        return this.http.post("/api/storage/getbyparent", this.activeDepots, this.getHeaders()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(data => this.storages = data));
    }
}
Dashboard.ɵfac = function Dashboard_Factory(t) { return new (t || Dashboard)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
Dashboard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: Dashboard, factory: Dashboard.ɵfac });


/***/ }),

/***/ "4ZFG":
/*!**********************************!*\
  !*** ./src/app/router/router.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _Pages_dashboardPage_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Pages/dashboardPage.component */ "Ze10");
/* harmony import */ var _Pages_loginPage_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Pages/loginPage.component */ "mGxW");
/* harmony import */ var _services_authActivator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/authActivator */ "qI91");




const routes = [
    { path: "", component: _Pages_dashboardPage_component__WEBPACK_IMPORTED_MODULE_1__["default"], canActivate: [_services_authActivator__WEBPACK_IMPORTED_MODULE_3__["AuthActivator"]] },
    { path: "login", component: _Pages_loginPage_component__WEBPACK_IMPORTED_MODULE_2__["LoginPage"] },
    { path: "**", redirectTo: "/" },
];
const router = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes, { useHash: true });
/* harmony default export */ __webpack_exports__["default"] = (router);


/***/ }),

/***/ "AytR":
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
const environment = {
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

/***/ "CRGi":
/*!*************************************!*\
  !*** ./src/app/views/footerView.ts ***!
  \*************************************/
/*! exports provided: FooterView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterView", function() { return FooterView; });
/* harmony import */ var _services_dashboard_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/dashboard.service */ "0AbP");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class FooterView {
    constructor(dashboard) {
        this.dashboard = dashboard;
    }
}
FooterView.ɵfac = function FooterView_Factory(t) { return new (t || FooterView)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_dashboard_service__WEBPACK_IMPORTED_MODULE_0__["default"])); };
FooterView.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: FooterView, selectors: [["footer-section"]], decls: 3, vars: 1, consts: [[1, "container"], [1, "text-center"]], template: function FooterView_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Copyright 2021 ", ctx.dashboard.appName, "");
    } }, styles: ["footer[_ngcontent-%COMP%] {\r\n    bottom: 10px\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3RlclZpZXcuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0k7QUFDSiIsImZpbGUiOiJmb290ZXJWaWV3LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImZvb3RlciB7XHJcbiAgICBib3R0b206IDEwcHhcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "LoSR":
/*!*************************************!*\
  !*** ./src/app/views/headerView.ts ***!
  \*************************************/
/*! exports provided: HeaderView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderView", function() { return HeaderView; });
/* harmony import */ var _services_dashboard_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/dashboard.service */ "0AbP");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _userPannelView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./userPannelView */ "XUFf");



class HeaderView {
    constructor(dashboard) {
        this.dashboard = dashboard;
    }
}
HeaderView.ɵfac = function HeaderView_Factory(t) { return new (t || HeaderView)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_dashboard_service__WEBPACK_IMPORTED_MODULE_0__["default"])); };
HeaderView.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HeaderView, selectors: [["header-section"]], decls: 20, vars: 1, consts: [[1, "container-fluid"], [1, "row", "navbar", "navbar-dark", "bg-dark", "navbar-expand-md"], [1, "col", "navbar-brand"], [1, "fas", "fa-paint-brush"], ["data-toggle", "collapse", "data-target", "#theMenu", 1, "col", "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "theMenu", 1, "col", "navbar-collapse", "collapse"], [1, "navbar-nav"], [1, "nav-item"], ["asp-controller", "Dashboard", "asp-action", "Index", 1, "nav-link"], ["asp-controller", "Wizard", "asp-action", "Index", 1, "nav-link"], ["href", "swagger/index.html", 1, "nav-link"], [1, "col-3"]], template: function HeaderView_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Wizard");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Swagger");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "user-pannel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.dashboard.appName);
    } }, directives: [_userPannelView__WEBPACK_IMPORTED_MODULE_2__["UserPannelView"]], styles: [".product-image[_ngcontent-%COMP%] {\r\n    border: 1px #ddd solid;\r\n    box-shadow: rgba(0,0,0,.4) 2px 2px;\r\n    margin: 2px;\r\n}\r\n\r\n.depot-props[_ngcontent-%COMP%] {\r\n    border: 1px #808080 solid;\r\n    background-color: ivory;\r\n    font-size: .9rem;\r\n    width: -webkit-max-content;\r\n    width: max-content;\r\n}\r\n\r\n.storage-props[_ngcontent-%COMP%] {\r\n    border: 1px #808080 solid;\r\n    background-color: aliceblue;\r\n    font-size: .9rem;\r\n    width: -webkit-max-content;\r\n    width: max-content;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3RWaWV3LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHNCQUFzQjtJQUN0QixrQ0FBa0M7SUFDbEMsV0FBVztBQUNmOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLHVCQUF1QjtJQUN2QixnQkFBZ0I7SUFDaEIsMEJBQWtCO0lBQWxCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QiwyQkFBMkI7SUFDM0IsZ0JBQWdCO0lBQ2hCLDBCQUFrQjtJQUFsQixrQkFBa0I7QUFDdEIiLCJmaWxlIjoibGlzdFZpZXcuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2R1Y3QtaW1hZ2Uge1xyXG4gICAgYm9yZGVyOiAxcHggI2RkZCBzb2xpZDtcclxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwwLDAsLjQpIDJweCAycHg7XHJcbiAgICBtYXJnaW46IDJweDtcclxufVxyXG5cclxuLmRlcG90LXByb3BzIHtcclxuICAgIGJvcmRlcjogMXB4ICM4MDgwODAgc29saWQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpdm9yeTtcclxuICAgIGZvbnQtc2l6ZTogLjlyZW07XHJcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XHJcbn1cclxuXHJcbi5zdG9yYWdlLXByb3BzIHtcclxuICAgIGJvcmRlcjogMXB4ICM4MDgwODAgc29saWQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XHJcbiAgICBmb250LXNpemU6IC45cmVtO1xyXG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xyXG59Il19 */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _services_dashboard_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/dashboard.service */ "0AbP");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




function AppComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.store.errorMessage);
} }
class AppComponent {
    constructor(dashboard) {
        this.dashboard = dashboard;
        this.title = 'Dashboard';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_dashboard_service__WEBPACK_IMPORTED_MODULE_0__["default"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["the-dashboard"]], decls: 2, vars: 1, consts: [["class", "alert alert-danger", 4, "ngIf"], [1, "alert", "alert-danger"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, AppComponent_div_0_Template, 2, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.dashboard.errorMessage);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], encapsulation: 2 });


/***/ }),

/***/ "XUFf":
/*!*****************************************!*\
  !*** ./src/app/views/userPannelView.ts ***!
  \*****************************************/
/*! exports provided: UserPannelView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPannelView", function() { return UserPannelView; });
/* harmony import */ var _services_dashboard_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/dashboard.service */ "0AbP");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



function UserPannelView_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserPannelView_div_2_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r1.changeMenuVisibility(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.dashboard.user.name, " ");
} }
class UserPannelView {
    constructor(dashboard) {
        this.dashboard = dashboard;
        this.userMenuShow = false;
    }
    ngOnInit() {
        this.dashboard.getUser().subscribe();
    }
    changeMenuVisibility() {
        this.userMenuShow = !this.userMenuShow;
    }
}
UserPannelView.ɵfac = function UserPannelView_Factory(t) { return new (t || UserPannelView)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_dashboard_service__WEBPACK_IMPORTED_MODULE_0__["default"])); };
UserPannelView.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: UserPannelView, selectors: [["user-pannel"]], decls: 6, vars: 1, consts: [[1, "col"], [1, "row"], ["class", "col-sm align-content-end", 3, "click", 4, "ngIf"], ["name", "menu", "ng-show", "userMenuShow", 1, "col-sm"], ["href", "/dashboard", 1, "nav-link", 3, "click"], [1, "col-sm", "align-content-end", 3, "click"]], template: function UserPannelView_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, UserPannelView_div_2_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserPannelView_Template_a_click_4_listener() { return ctx.dashboard.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Log Out");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.dashboard.user !== undefined && ctx.dashboard.user.name !== undefined);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: [".product-image[_ngcontent-%COMP%] {\r\n    border: 1px #ddd solid;\r\n    box-shadow: rgba(0,0,0,.4) 2px 2px;\r\n    margin: 2px;\r\n}\r\n\r\n.depot-props[_ngcontent-%COMP%] {\r\n    border: 1px #808080 solid;\r\n    background-color: ivory;\r\n    font-size: .9rem;\r\n    width: -webkit-max-content;\r\n    width: max-content;\r\n}\r\n\r\n.storage-props[_ngcontent-%COMP%] {\r\n    border: 1px #808080 solid;\r\n    background-color: aliceblue;\r\n    font-size: .9rem;\r\n    width: -webkit-max-content;\r\n    width: max-content;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3RWaWV3LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHNCQUFzQjtJQUN0QixrQ0FBa0M7SUFDbEMsV0FBVztBQUNmOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLHVCQUF1QjtJQUN2QixnQkFBZ0I7SUFDaEIsMEJBQWtCO0lBQWxCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QiwyQkFBMkI7SUFDM0IsZ0JBQWdCO0lBQ2hCLDBCQUFrQjtJQUFsQixrQkFBa0I7QUFDdEIiLCJmaWxlIjoibGlzdFZpZXcuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2R1Y3QtaW1hZ2Uge1xyXG4gICAgYm9yZGVyOiAxcHggI2RkZCBzb2xpZDtcclxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwwLDAsLjQpIDJweCAycHg7XHJcbiAgICBtYXJnaW46IDJweDtcclxufVxyXG5cclxuLmRlcG90LXByb3BzIHtcclxuICAgIGJvcmRlcjogMXB4ICM4MDgwODAgc29saWQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpdm9yeTtcclxuICAgIGZvbnQtc2l6ZTogLjlyZW07XHJcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XHJcbn1cclxuXHJcbi5zdG9yYWdlLXByb3BzIHtcclxuICAgIGJvcmRlcjogMXB4ICM4MDgwODAgc29saWQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XHJcbiAgICBmb250LXNpemU6IC45cmVtO1xyXG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xyXG59Il19 */"] });


/***/ }),

/***/ "YTr9":
/*!****************************************!*\
  !*** ./src/app/views/depotListView.ts ***!
  \****************************************/
/*! exports provided: DepotListView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepotListView", function() { return DepotListView; });
/* harmony import */ var _services_dashboard_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/dashboard.service */ "0AbP");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



function DepotListView_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DepotListView_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const p_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r2.dashboard.setActiveDepot(p_r1.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ul", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](": ", p_r1.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](": ", p_r1.address, "");
} }
class DepotListView {
    constructor(dashboard) {
        this.dashboard = dashboard;
    }
    ngOnInit() {
        this.dashboard.getDepots().subscribe();
    }
}
DepotListView.ɵfac = function DepotListView_Factory(t) { return new (t || DepotListView)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_dashboard_service__WEBPACK_IMPORTED_MODULE_0__["default"])); };
DepotListView.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DepotListView, selectors: [["depot-list"]], decls: 2, vars: 1, consts: [[1, "col"], ["class", "row", 3, "click", 4, "ngFor", "ngForOf"], [1, "row", 3, "click"], [1, "col-12", "depot-props", "list-unstyled"]], template: function DepotListView_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DepotListView_div_1_Template, 10, 2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.dashboard.depots);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: [".product-image[_ngcontent-%COMP%] {\r\n    border: 1px #ddd solid;\r\n    box-shadow: rgba(0,0,0,.4) 2px 2px;\r\n    margin: 2px;\r\n}\r\n\r\n.depot-props[_ngcontent-%COMP%] {\r\n    border: 1px #808080 solid;\r\n    background-color: ivory;\r\n    font-size: .9rem;\r\n    width: -webkit-max-content;\r\n    width: max-content;\r\n}\r\n\r\n.storage-props[_ngcontent-%COMP%] {\r\n    border: 1px #808080 solid;\r\n    background-color: aliceblue;\r\n    font-size: .9rem;\r\n    width: -webkit-max-content;\r\n    width: max-content;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3RWaWV3LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHNCQUFzQjtJQUN0QixrQ0FBa0M7SUFDbEMsV0FBVztBQUNmOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLHVCQUF1QjtJQUN2QixnQkFBZ0I7SUFDaEIsMEJBQWtCO0lBQWxCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QiwyQkFBMkI7SUFDM0IsZ0JBQWdCO0lBQ2hCLDBCQUFrQjtJQUFsQixrQkFBa0I7QUFDdEIiLCJmaWxlIjoibGlzdFZpZXcuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2R1Y3QtaW1hZ2Uge1xyXG4gICAgYm9yZGVyOiAxcHggI2RkZCBzb2xpZDtcclxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwwLDAsLjQpIDJweCAycHg7XHJcbiAgICBtYXJnaW46IDJweDtcclxufVxyXG5cclxuLmRlcG90LXByb3BzIHtcclxuICAgIGJvcmRlcjogMXB4ICM4MDgwODAgc29saWQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpdm9yeTtcclxuICAgIGZvbnQtc2l6ZTogLjlyZW07XHJcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XHJcbn1cclxuXHJcbi5zdG9yYWdlLXByb3BzIHtcclxuICAgIGJvcmRlcjogMXB4ICM4MDgwODAgc29saWQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XHJcbiAgICBmb250LXNpemU6IC45cmVtO1xyXG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xyXG59Il19 */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _Pages_loginPage_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Pages/loginPage.component */ "mGxW");
/* harmony import */ var _Pages_dashboardPage_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Pages/dashboardPage.component */ "Ze10");
/* harmony import */ var _services_dashboard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/dashboard.service */ "0AbP");
/* harmony import */ var _services_authActivator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/authActivator */ "qI91");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _router_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./router/router */ "4ZFG");
/* harmony import */ var _views_depotListView__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./views/depotListView */ "YTr9");
/* harmony import */ var _views_storageListView__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./views/storageListView */ "bmcD");
/* harmony import */ var _views_userPannelView__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./views/userPannelView */ "XUFf");
/* harmony import */ var _views_footerView__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./views/footerView */ "CRGi");
/* harmony import */ var _views_headerView__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./views/headerView */ "LoSR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ "tyNb");
















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjector"]({ providers: [
        _services_dashboard_service__WEBPACK_IMPORTED_MODULE_5__["default"],
        _services_authActivator__WEBPACK_IMPORTED_MODULE_6__["AuthActivator"],
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _router_router__WEBPACK_IMPORTED_MODULE_8__["default"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _views_headerView__WEBPACK_IMPORTED_MODULE_13__["HeaderView"],
        _views_footerView__WEBPACK_IMPORTED_MODULE_12__["FooterView"],
        _Pages_dashboardPage_component__WEBPACK_IMPORTED_MODULE_4__["default"],
        _Pages_loginPage_component__WEBPACK_IMPORTED_MODULE_3__["LoginPage"],
        _views_depotListView__WEBPACK_IMPORTED_MODULE_9__["DepotListView"],
        _views_storageListView__WEBPACK_IMPORTED_MODULE_10__["StorageListView"],
        _views_userPannelView__WEBPACK_IMPORTED_MODULE_11__["UserPannelView"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["RouterModule"]] }); })();


/***/ }),

/***/ "Ze10":
/*!**************************************************!*\
  !*** ./src/app/Pages/dashboardPage.component.ts ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DashboardPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _views_headerView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/headerView */ "LoSR");
/* harmony import */ var _views_storageListView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../views/storageListView */ "bmcD");
/* harmony import */ var _views_depotListView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../views/depotListView */ "YTr9");
/* harmony import */ var _views_footerView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../views/footerView */ "CRGi");





class DashboardPage {
    constructor() {
        this.title = "DepoiT Dashboard";
    }
}
DashboardPage.ɵfac = function DashboardPage_Factory(t) { return new (t || DashboardPage)(); };
DashboardPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardPage, selectors: [["the-dashboard"]], decls: 16, vars: 0, consts: [[1, "col"], [1, "row"], [1, "col-12"], [1, "col-md-9"], [1, "col-md-3"]], template: function DashboardPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "header-section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Storages");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "storage-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Depots");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "depot-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "footer-section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_views_headerView__WEBPACK_IMPORTED_MODULE_1__["HeaderView"], _views_storageListView__WEBPACK_IMPORTED_MODULE_2__["StorageListView"], _views_depotListView__WEBPACK_IMPORTED_MODULE_3__["DepotListView"], _views_footerView__WEBPACK_IMPORTED_MODULE_4__["FooterView"]], encapsulation: 2 });


/***/ }),

/***/ "bmcD":
/*!******************************************!*\
  !*** ./src/app/views/storageListView.ts ***!
  \******************************************/
/*! exports provided: StorageListView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageListView", function() { return StorageListView; });
/* harmony import */ var _services_dashboard_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/dashboard.service */ "0AbP");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



function StorageListView_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function StorageListView_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const p_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r2.dashboard.getItems(p_r1.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ul", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "item-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate5"](": ", p_r1.name, "", p_r1.nameSplitter, "", p_r1.nameB, "", p_r1.nameSplitter, "", p_r1.nameC, "");
} }
class StorageListView /*implements OnInit*/ {
    constructor(dashboard) {
        this.dashboard = dashboard;
    }
}
StorageListView.ɵfac = function StorageListView_Factory(t) { return new (t || StorageListView /*implements OnInit*/)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_dashboard_service__WEBPACK_IMPORTED_MODULE_0__["default"])); };
StorageListView.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: StorageListView /*implements OnInit*/, selectors: [["storage-list"]], decls: 2, vars: 1, consts: [[1, "col"], ["class", "row", 3, "click", 4, "ngFor", "ngForOf"], [1, "row", 3, "click"], [1, "col-12", "storage-props", "list-unstyled"]], template: function StorageListView_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, StorageListView_div_1_Template, 7, 5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.dashboard.storages);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: [".product-image[_ngcontent-%COMP%] {\r\n    border: 1px #ddd solid;\r\n    box-shadow: rgba(0,0,0,.4) 2px 2px;\r\n    margin: 2px;\r\n}\r\n\r\n.depot-props[_ngcontent-%COMP%] {\r\n    border: 1px #808080 solid;\r\n    background-color: ivory;\r\n    font-size: .9rem;\r\n    width: -webkit-max-content;\r\n    width: max-content;\r\n}\r\n\r\n.storage-props[_ngcontent-%COMP%] {\r\n    border: 1px #808080 solid;\r\n    background-color: aliceblue;\r\n    font-size: .9rem;\r\n    width: -webkit-max-content;\r\n    width: max-content;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3RWaWV3LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHNCQUFzQjtJQUN0QixrQ0FBa0M7SUFDbEMsV0FBVztBQUNmOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLHVCQUF1QjtJQUN2QixnQkFBZ0I7SUFDaEIsMEJBQWtCO0lBQWxCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QiwyQkFBMkI7SUFDM0IsZ0JBQWdCO0lBQ2hCLDBCQUFrQjtJQUFsQixrQkFBa0I7QUFDdEIiLCJmaWxlIjoibGlzdFZpZXcuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2R1Y3QtaW1hZ2Uge1xyXG4gICAgYm9yZGVyOiAxcHggI2RkZCBzb2xpZDtcclxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwwLDAsLjQpIDJweCAycHg7XHJcbiAgICBtYXJnaW46IDJweDtcclxufVxyXG5cclxuLmRlcG90LXByb3BzIHtcclxuICAgIGJvcmRlcjogMXB4ICM4MDgwODAgc29saWQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpdm9yeTtcclxuICAgIGZvbnQtc2l6ZTogLjlyZW07XHJcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XHJcbn1cclxuXHJcbi5zdG9yYWdlLXByb3BzIHtcclxuICAgIGJvcmRlcjogMXB4ICM4MDgwODAgc29saWQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XHJcbiAgICBmb250LXNpemU6IC45cmVtO1xyXG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xyXG59Il19 */"] });


/***/ }),

/***/ "mGxW":
/*!**********************************************!*\
  !*** ./src/app/Pages/loginPage.component.ts ***!
  \**********************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var _services_dashboard_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/dashboard.service */ "0AbP");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");





function LoginPage_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.errorMessage);
} }
function LoginPage_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LoginPage_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class LoginPage {
    constructor(dashboard, router) {
        this.dashboard = dashboard;
        this.router = router;
        this.creds = {
            name: "",
            password: "",
        };
        this.errorMessage = "";
    }
    onLogin() {
        this.dashboard.login(this.creds).subscribe(() => {
            this.router.navigate([""]);
        }, error => {
            console.log(error);
            this.errorMessage = "Failed to login";
        });
    }
}
LoginPage.ɵfac = function LoginPage_Factory(t) { return new (t || LoginPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_dashboard_service__WEBPACK_IMPORTED_MODULE_0__["default"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
LoginPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LoginPage, selectors: [["login-page"]], decls: 23, vars: 6, consts: [[1, "row", "align-items-center"], [1, "rectangle", "col-md-4", "offset-4"], ["class", "alert alert-danger", 4, "ngIf"], [3, "submit"], [1, "form-group"], ["for", "username"], ["name", "username", "type", "text", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["username", "ngModel"], ["class", "text-danger", 4, "ngIf"], ["for", "password"], ["name", "password", "type", "password", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["password", "ngModel"], [1, "form-check"], ["name", "rememberMeFlag", "type", "checkbox", 1, "form-check-input"], ["for", "rememberMeFlag", 1, "form-check-label"], ["type", "submit", "value", "Login", 1, "btn", "btn-success", 3, "disabled"], [1, "alert", "alert-danger"], [1, "text-danger"]], template: function LoginPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, LoginPage_div_2_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("submit", function LoginPage_Template_form_submit_3_listener() { return ctx.onLogin(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "input", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function LoginPage_Template_input_ngModelChange_7_listener($event) { return ctx.creds.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, LoginPage_div_9_Template, 2, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "input", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function LoginPage_Template_input_ngModelChange_13_listener($event) { return ctx.creds.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, LoginPage_div_15_Template, 2, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Remember Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](8);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.errorMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.creds.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r1.touched && _r1.invalid && _r1.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.creds.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r3.touched && _r3.invalid && _r3.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", _r1.invalid || _r3.invalid);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]], styles: [".rectangle[_ngcontent-%COMP%] {\r\n    border-radius: 25px;\r\n    background: #8db1d8;\r\n    padding: 40px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luUGFnZS5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGFBQWE7QUFDakIiLCJmaWxlIjoibG9naW5QYWdlLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZWN0YW5nbGUge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgIGJhY2tncm91bmQ6ICM4ZGIxZDg7XHJcbiAgICBwYWRkaW5nOiA0MHB4O1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "qI91":
/*!*******************************************!*\
  !*** ./src/app/services/authActivator.ts ***!
  \*******************************************/
/*! exports provided: AuthActivator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthActivator", function() { return AuthActivator; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _dashboard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.service */ "0AbP");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AuthActivator {
    constructor(dashboard, router) {
        this.dashboard = dashboard;
        this.router = router;
    }
    canActivate(route, state) {
        return this.dashboard.loginRequred.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(isAuth => {
            if (!isAuth) {
                this.router.navigate(["login"]);
            }
        }));
    }
}
AuthActivator.ɵfac = function AuthActivator_Factory(t) { return new (t || AuthActivator)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_dashboard_service__WEBPACK_IMPORTED_MODULE_1__["default"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
AuthActivator.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: AuthActivator, factory: AuthActivator.ɵfac });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map