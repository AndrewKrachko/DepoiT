(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/saV":
/*!****************************************!*\
  !*** ./src/app/views/parameterView.ts ***!
  \****************************************/
/*! exports provided: ParameterView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParameterView", function() { return ParameterView; });
/* harmony import */ var _shared_AppFieldTypeEnum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/AppFieldTypeEnum */ "FV76");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _itemView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./itemView */ "90XB");



class ParameterView {
    constructor(itemView) {
        this.itemView = itemView;
    }
    ngOnInit() {
        this.addFields(Number.parseInt(this.id));
    }
    addFields(id) {
        let searchedPattern = this.itemView.item.pattern.fieldPatterns.find(fp => fp.id == id);
        const parentId = this.itemView.getTheParameterId(id.toString());
        const parent = document.getElementById(parentId);
        this.addFieldName(parent, searchedPattern);
        this.addValueField(parent, searchedPattern);
        if (searchedPattern.fieldType == _shared_AppFieldTypeEnum__WEBPACK_IMPORTED_MODULE_0__["AppFieldTypeEnum"].NumberWithTolerance) {
            this.addToleranceField(parent, searchedPattern);
        }
        if (searchedPattern.fieldType == _shared_AppFieldTypeEnum__WEBPACK_IMPORTED_MODULE_0__["AppFieldTypeEnum"].NumberWithDifferentialTolerance) {
            this.addDoubleToleranceField(parent, searchedPattern);
        }
    }
    addFieldName(parent, searchedPattern) {
        const label = document.createElement("label");
        label.innerText = searchedPattern.name;
        label.className = "col-3";
        parent.appendChild(label);
    }
    addValueField(parent, searchedPattern) {
        let input;
        let name;
        switch (searchedPattern.fieldType) {
            case _shared_AppFieldTypeEnum__WEBPACK_IMPORTED_MODULE_0__["AppFieldTypeEnum"].NumberFromSet:
            case _shared_AppFieldTypeEnum__WEBPACK_IMPORTED_MODULE_0__["AppFieldTypeEnum"].StringValueFromSet: {
                input = document.createElement("select");
                let options;
                if (searchedPattern.fieldType == _shared_AppFieldTypeEnum__WEBPACK_IMPORTED_MODULE_0__["AppFieldTypeEnum"].NumberFromSet) {
                    options = searchedPattern.valueSet;
                    name = "value";
                }
                else {
                    options = searchedPattern.stringSet;
                    name = "valueString";
                }
                options.forEach(op => {
                    const optionElement = document.createElement("option");
                    optionElement.text = op;
                    input.add(optionElement);
                });
                input.selectedIndex = options.indexOf(this.getValue(searchedPattern));
                break;
            }
            default: {
                input = document.createElement("input");
                if (searchedPattern.fieldType == _shared_AppFieldTypeEnum__WEBPACK_IMPORTED_MODULE_0__["AppFieldTypeEnum"].StringValue) {
                    name = "valueString";
                }
                else {
                    name = "value";
                }
                input.value = this.getValue(searchedPattern).toString();
            }
        }
        input.setAttribute("name", name);
        input.className = "col-3";
        parent.appendChild(input);
    }
    addToleranceField(parent, searchedPattern) {
        const toleranceInput = document.createElement("input");
        toleranceInput.setAttribute("name", "tolerance");
        toleranceInput.value = this.getTolerance(searchedPattern).toString();
        parent.appendChild(toleranceInput);
    }
    addDoubleToleranceField(parent, searchedPattern) {
        const minToleranceInput = document.createElement("input");
        const maxToleranceInput = document.createElement("input");
        minToleranceInput.setAttribute("name", "toleranceMin");
        maxToleranceInput.setAttribute("name", "toleranceMax");
        minToleranceInput.value = this.getMinTolerance(searchedPattern).toString();
        maxToleranceInput.value = this.getMaxTolerance(searchedPattern).toString();
        parent.appendChild(minToleranceInput);
        parent.appendChild(maxToleranceInput);
    }
    getValue(searchedPattern) {
        let searchedItem = this.itemView.item.fields.find(f => f.fieldPattern.id == searchedPattern.id);
        if (searchedItem !== undefined) {
            if (searchedPattern.fieldType == _shared_AppFieldTypeEnum__WEBPACK_IMPORTED_MODULE_0__["AppFieldTypeEnum"].StringValue ||
                searchedPattern.fieldType == _shared_AppFieldTypeEnum__WEBPACK_IMPORTED_MODULE_0__["AppFieldTypeEnum"].StringValueFromSet) {
                return searchedItem.valueString;
            }
            else {
                return searchedItem.value;
            }
        }
        else {
            if (searchedPattern.fieldType == _shared_AppFieldTypeEnum__WEBPACK_IMPORTED_MODULE_0__["AppFieldTypeEnum"].StringValue ||
                searchedPattern.fieldType == _shared_AppFieldTypeEnum__WEBPACK_IMPORTED_MODULE_0__["AppFieldTypeEnum"].StringValueFromSet) {
                return searchedPattern.defaultString;
            }
            else {
                return searchedPattern.defaultValue;
            }
        }
    }
    getTolerance(searchedPattern) {
        let searchedItem = this.itemView.item.fields.find(f => f.fieldPattern.id == searchedPattern.id);
        if (searchedItem !== undefined) {
            return searchedItem.tolerance;
        }
        else {
            return searchedPattern.tolerance;
        }
    }
    getMinTolerance(searchedPattern) {
        let searchedItem = this.itemView.item.fields.find(f => f.fieldPattern.id == searchedPattern.id);
        if (searchedItem !== undefined) {
            return searchedItem.toleranceMin;
        }
        else {
            return searchedPattern.toleranceMin;
        }
    }
    getMaxTolerance(searchedPattern) {
        let searchedItem = this.itemView.item.fields.find(f => f.fieldPattern.id == searchedPattern.id);
        if (searchedItem !== undefined) {
            return searchedItem.toleranceMax;
        }
        else {
            return searchedPattern.toleranceMax;
        }
    }
}
ParameterView.??fac = function ParameterView_Factory(t) { return new (t || ParameterView)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_itemView__WEBPACK_IMPORTED_MODULE_2__["ItemView"])); };
ParameterView.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({ type: ParameterView, selectors: [["the-parameter"]], inputs: { id: "id" }, decls: 0, vars: 0, template: function ParameterView_Template(rf, ctx) { }, encapsulation: 2 });


/***/ }),

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
        return this.http.post("/api/item/getbyparent", storageId, this.getHeaders());
    }
    getItem(itemId) {
        return this.http.post("/api/item/get", itemId, this.getHeaders());
    }
}
Dashboard.??fac = function Dashboard_Factory(t) { return new (t || Dashboard)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
Dashboard.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineInjectable"]({ token: Dashboard, factory: Dashboard.??fac });


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

/***/ "90XB":
/*!***********************************!*\
  !*** ./src/app/views/itemView.ts ***!
  \***********************************/
/*! exports provided: ItemView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemView", function() { return ItemView; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services_dashboard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/dashboard.service */ "0AbP");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _itemListView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./itemListView */ "Ncay");




function ItemView_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](2, "the-parameter", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} if (rf & 2) {
    const p_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("id", ctx_r1.getTheParameterId(p_r2.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("id", p_r2.id);
} }
function ItemView_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, " Parameters: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](2, ItemView_div_0_div_2_Template, 3, 2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("id", ctx_r0.itemId);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngForOf", ctx_r0.item.pattern.fieldPatterns);
} }
class ItemView {
    constructor(dashboard, itemListView) {
        this.dashboard = dashboard;
        this.itemListView = itemListView;
        this.prefix = "parameter-";
    }
    ngOnInit() {
        const id = Number.parseInt(this.itemId.replace(this.itemListView.prefix, ""));
        this.dashboard.getItem(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(data => this.item = data)).subscribe();
    }
    getTheParameterId(id) {
        return `${this.itemId}-${this.prefix}${id}`;
    }
}
ItemView.??fac = function ItemView_Factory(t) { return new (t || ItemView)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_services_dashboard_service__WEBPACK_IMPORTED_MODULE_1__["default"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_itemListView__WEBPACK_IMPORTED_MODULE_3__["ItemListView"])); };
ItemView.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineComponent"]({ type: ItemView, selectors: [["the-item"]], inputs: { itemId: "itemId" }, decls: 1, vars: 1, consts: [["class", "item-parameters-list col-12", "hidden", "", 3, "id", 4, "ngIf"], ["hidden", "", 1, "item-parameters-list", "col-12", 3, "id"], ["class", "row col-12", 4, "ngFor", "ngForOf"], [1, "row", "col-12"], [1, "row", "col-11", 3, "id"], [3, "id"]], template: function ItemView_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](0, ItemView_div_0_Template, 3, 2, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx.item !== undefined);
    } }, styles: [".item-parameters-list[_ngcontent-%COMP%] {\r\n    border: 1px #808080 solid;\r\n    background-color: #21c8e6;\r\n    font-size: .9rem;\r\n    width: -webkit-max-content;\r\n    width: max-content;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIml0ZW1WaWV3LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLDBCQUFrQjtJQUFsQixrQkFBa0I7QUFDdEIiLCJmaWxlIjoiaXRlbVZpZXcuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLml0ZW0tcGFyYW1ldGVycy1saXN0IHtcclxuICAgIGJvcmRlcjogMXB4ICM4MDgwODAgc29saWQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjFjOGU2O1xyXG4gICAgZm9udC1zaXplOiAuOXJlbTtcclxuICAgIHdpZHRoOiBtYXgtY29udGVudDtcclxufVxyXG4iXX0= */"] });


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
FooterView.??fac = function FooterView_Factory(t) { return new (t || FooterView)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_services_dashboard_service__WEBPACK_IMPORTED_MODULE_0__["default"])); };
FooterView.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({ type: FooterView, selectors: [["footer-section"]], decls: 3, vars: 1, consts: [[1, "container"], [1, "text-center"]], template: function FooterView_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"]("Copyright 2021 ", ctx.dashboard.appName, "");
    } }, styles: ["footer[_ngcontent-%COMP%] {\r\n    bottom: 10px\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3RlclZpZXcuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0k7QUFDSiIsImZpbGUiOiJmb290ZXJWaWV3LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImZvb3RlciB7XHJcbiAgICBib3R0b206IDEwcHhcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "FV76":
/*!********************************************!*\
  !*** ./src/app/shared/AppFieldTypeEnum.ts ***!
  \********************************************/
/*! exports provided: AppFieldTypeEnum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppFieldTypeEnum", function() { return AppFieldTypeEnum; });
var AppFieldTypeEnum;
(function (AppFieldTypeEnum) {
    AppFieldTypeEnum[AppFieldTypeEnum["Number"] = 0] = "Number";
    AppFieldTypeEnum[AppFieldTypeEnum["NumberWithTolerance"] = 1] = "NumberWithTolerance";
    AppFieldTypeEnum[AppFieldTypeEnum["NumberWithDifferentialTolerance"] = 2] = "NumberWithDifferentialTolerance";
    AppFieldTypeEnum[AppFieldTypeEnum["NumberFromSet"] = 3] = "NumberFromSet";
    AppFieldTypeEnum[AppFieldTypeEnum["StringValue"] = 4] = "StringValue";
    AppFieldTypeEnum[AppFieldTypeEnum["StringValueFromSet"] = 5] = "StringValueFromSet";
})(AppFieldTypeEnum || (AppFieldTypeEnum = {}));


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
HeaderView.??fac = function HeaderView_Factory(t) { return new (t || HeaderView)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_services_dashboard_service__WEBPACK_IMPORTED_MODULE_0__["default"])); };
HeaderView.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({ type: HeaderView, selectors: [["header-section"]], decls: 20, vars: 1, consts: [[1, "container-fluid"], [1, "row", "navbar", "navbar-dark", "bg-dark", "navbar-expand-md"], [1, "col", "navbar-brand"], [1, "fas", "fa-paint-brush"], ["data-toggle", "collapse", "data-target", "#theMenu", 1, "col", "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "theMenu", 1, "col", "navbar-collapse", "collapse"], [1, "navbar-nav"], [1, "nav-item"], ["asp-controller", "Dashboard", "asp-action", "Index", 1, "nav-link"], ["asp-controller", "Wizard", "asp-action", "Index", 1, "nav-link"], ["href", "swagger/index.html", 1, "nav-link"], [1, "col-3"]], template: function HeaderView_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](3, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](8, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](10, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](11, "Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](12, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](13, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](14, "Wizard");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](15, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](16, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](17, "Swagger");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](19, "user-pannel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](ctx.dashboard.appName);
    } }, directives: [_userPannelView__WEBPACK_IMPORTED_MODULE_2__["UserPannelView"]], styles: [".product-image[_ngcontent-%COMP%] {\r\n    border: 1px #ddd solid;\r\n    box-shadow: rgba(0,0,0,.4) 2px 2px;\r\n    margin: 2px;\r\n}\r\n\r\n.depot-props[_ngcontent-%COMP%] {\r\n    border: 1px #808080 solid;\r\n    background-color: ivory;\r\n    font-size: .9rem;\r\n    width: -webkit-max-content;\r\n    width: max-content;\r\n}\r\n\r\n.storage-props[_ngcontent-%COMP%] {\r\n    border: 1px #808080 solid;\r\n    background-color: aliceblue;\r\n    font-size: .9rem;\r\n    width: -webkit-max-content;\r\n    width: max-content;\r\n}\r\n\r\n.storage-item[_ngcontent-%COMP%] {\r\n    border: 1px #808080 solid;\r\n    background-color: gainsboro;\r\n    font-size: .9rem;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3RWaWV3LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHNCQUFzQjtJQUN0QixrQ0FBa0M7SUFDbEMsV0FBVztBQUNmOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLHVCQUF1QjtJQUN2QixnQkFBZ0I7SUFDaEIsMEJBQWtCO0lBQWxCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QiwyQkFBMkI7SUFDM0IsZ0JBQWdCO0lBQ2hCLDBCQUFrQjtJQUFsQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsMkJBQTJCO0lBQzNCLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJsaXN0Vmlldy5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZHVjdC1pbWFnZSB7XHJcbiAgICBib3JkZXI6IDFweCAjZGRkIHNvbGlkO1xyXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLDAsMCwuNCkgMnB4IDJweDtcclxuICAgIG1hcmdpbjogMnB4O1xyXG59XHJcblxyXG4uZGVwb3QtcHJvcHMge1xyXG4gICAgYm9yZGVyOiAxcHggIzgwODA4MCBzb2xpZDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGl2b3J5O1xyXG4gICAgZm9udC1zaXplOiAuOXJlbTtcclxuICAgIHdpZHRoOiBtYXgtY29udGVudDtcclxufVxyXG5cclxuLnN0b3JhZ2UtcHJvcHMge1xyXG4gICAgYm9yZGVyOiAxcHggIzgwODA4MCBzb2xpZDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcclxuICAgIGZvbnQtc2l6ZTogLjlyZW07XHJcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XHJcbn1cclxuXHJcbi5zdG9yYWdlLWl0ZW0ge1xyXG4gICAgYm9yZGVyOiAxcHggIzgwODA4MCBzb2xpZDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGdhaW5zYm9ybztcclxuICAgIGZvbnQtc2l6ZTogLjlyZW07XHJcbn0iXX0= */"] });


/***/ }),

/***/ "Ncay":
/*!***************************************!*\
  !*** ./src/app/views/itemListView.ts ***!
  \***************************************/
/*! exports provided: ItemListView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemListView", function() { return ItemListView; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services_dashboard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/dashboard.service */ "0AbP");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



function ItemListView_label_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "label", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate1"]("Item categories: ", ctx_r0.items.length, "");
} }
function ItemListView_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function ItemListView_div_1_Template_div_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r4); const p_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](); return ctx_r3.changeItemVisibility(p_r2.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](4, "the-item", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} if (rf & 2) {
    const p_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate1"]("Name: ", p_r2.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("itemId", ctx_r1.getTheItemId(p_r2.id));
} }
class ItemListView {
    constructor(dashboard) {
        this.dashboard = dashboard;
        this.showItems = [];
        this.prefix = "item-";
    }
    ngOnInit() {
        this.dashboard.getItems(this.storageId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(data => this.items = data)).subscribe();
    }
    getTheItemId(id) {
        return this.prefix + id;
    }
    changeItemVisibility(objectToken) {
        let itemState = this.showItems.find(s => s.name == objectToken);
        if (itemState == undefined) {
            itemState = { name: objectToken, show: false };
            this.showItems.push(itemState);
        }
        itemState.show = !itemState.show;
        document.getElementById(this.prefix + objectToken).hidden = itemState.show;
    }
}
ItemListView.??fac = function ItemListView_Factory(t) { return new (t || ItemListView)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_services_dashboard_service__WEBPACK_IMPORTED_MODULE_1__["default"])); };
ItemListView.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineComponent"]({ type: ItemListView, selectors: [["item-list"]], inputs: { storageId: "storageId" }, decls: 2, vars: 2, consts: [["class", "col-12", 4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "col-12"], [3, "click"], [1, "row", 3, "itemId"]], template: function ItemListView_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](0, ItemListView_label_0_Template, 2, 1, "label", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](1, ItemListView_div_1_Template, 5, 2, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx.items !== undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngForOf", ctx.items);
    } }, styles: [".product-image[_ngcontent-%COMP%] {\r\n    border: 1px #ddd solid;\r\n    box-shadow: rgba(0,0,0,.4) 2px 2px;\r\n    margin: 2px;\r\n}\r\n\r\n.depot-props[_ngcontent-%COMP%] {\r\n    border: 1px #808080 solid;\r\n    background-color: ivory;\r\n    font-size: .9rem;\r\n    width: -webkit-max-content;\r\n    width: max-content;\r\n}\r\n\r\n.storage-props[_ngcontent-%COMP%] {\r\n    border: 1px #808080 solid;\r\n    background-color: aliceblue;\r\n    font-size: .9rem;\r\n    width: -webkit-max-content;\r\n    width: max-content;\r\n}\r\n\r\n.storage-item[_ngcontent-%COMP%] {\r\n    border: 1px #808080 solid;\r\n    background-color: gainsboro;\r\n    font-size: .9rem;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3RWaWV3LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHNCQUFzQjtJQUN0QixrQ0FBa0M7SUFDbEMsV0FBVztBQUNmOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLHVCQUF1QjtJQUN2QixnQkFBZ0I7SUFDaEIsMEJBQWtCO0lBQWxCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QiwyQkFBMkI7SUFDM0IsZ0JBQWdCO0lBQ2hCLDBCQUFrQjtJQUFsQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsMkJBQTJCO0lBQzNCLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJsaXN0Vmlldy5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZHVjdC1pbWFnZSB7XHJcbiAgICBib3JkZXI6IDFweCAjZGRkIHNvbGlkO1xyXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLDAsMCwuNCkgMnB4IDJweDtcclxuICAgIG1hcmdpbjogMnB4O1xyXG59XHJcblxyXG4uZGVwb3QtcHJvcHMge1xyXG4gICAgYm9yZGVyOiAxcHggIzgwODA4MCBzb2xpZDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGl2b3J5O1xyXG4gICAgZm9udC1zaXplOiAuOXJlbTtcclxuICAgIHdpZHRoOiBtYXgtY29udGVudDtcclxufVxyXG5cclxuLnN0b3JhZ2UtcHJvcHMge1xyXG4gICAgYm9yZGVyOiAxcHggIzgwODA4MCBzb2xpZDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcclxuICAgIGZvbnQtc2l6ZTogLjlyZW07XHJcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XHJcbn1cclxuXHJcbi5zdG9yYWdlLWl0ZW0ge1xyXG4gICAgYm9yZGVyOiAxcHggIzgwODA4MCBzb2xpZDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGdhaW5zYm9ybztcclxuICAgIGZvbnQtc2l6ZTogLjlyZW07XHJcbn0iXX0= */"] });


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
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](ctx_r0.store.errorMessage);
} }
class AppComponent {
    constructor(dashboard) {
        this.dashboard = dashboard;
        this.title = 'Dashboard';
    }
}
AppComponent.??fac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_services_dashboard_service__WEBPACK_IMPORTED_MODULE_0__["default"])); };
AppComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({ type: AppComponent, selectors: [["the-dashboard"]], decls: 2, vars: 1, consts: [["class", "alert alert-danger", 4, "ngIf"], [1, "alert", "alert-danger"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](0, AppComponent_div_0_Template, 2, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](1, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.dashboard.errorMessage);
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
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function UserPannelView_div_2_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return ctx_r1.changeMenuVisibility(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", ctx_r0.dashboard.user.name, " ");
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
UserPannelView.??fac = function UserPannelView_Factory(t) { return new (t || UserPannelView)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_services_dashboard_service__WEBPACK_IMPORTED_MODULE_0__["default"])); };
UserPannelView.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({ type: UserPannelView, selectors: [["user-pannel"]], decls: 6, vars: 1, consts: [[1, "col"], [1, "row"], ["class", "col-sm align-content-end", 3, "click", 4, "ngIf"], ["name", "menu", "ng-show", "userMenuShow", 1, "col-sm"], ["href", "/dashboard", 1, "nav-link", 3, "click"], [1, "col-sm", "align-content-end", 3, "click"]], template: function UserPannelView_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](2, UserPannelView_div_2_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function UserPannelView_Template_a_click_4_listener() { return ctx.dashboard.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](5, "Log Out");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.dashboard.user !== undefined && ctx.dashboard.user.name !== undefined);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: [".product-image[_ngcontent-%COMP%] {\r\n    border: 1px #ddd solid;\r\n    box-shadow: rgba(0,0,0,.4) 2px 2px;\r\n    margin: 2px;\r\n}\r\n\r\n.depot-props[_ngcontent-%COMP%] {\r\n    border: 1px #808080 solid;\r\n    background-color: ivory;\r\n    font-size: .9rem;\r\n    width: -webkit-max-content;\r\n    width: max-content;\r\n}\r\n\r\n.storage-props[_ngcontent-%COMP%] {\r\n    border: 1px #808080 solid;\r\n    background-color: aliceblue;\r\n    font-size: .9rem;\r\n    width: -webkit-max-content;\r\n    width: max-content;\r\n}\r\n\r\n.storage-item[_ngcontent-%COMP%] {\r\n    border: 1px #808080 solid;\r\n    background-color: gainsboro;\r\n    font-size: .9rem;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3RWaWV3LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHNCQUFzQjtJQUN0QixrQ0FBa0M7SUFDbEMsV0FBVztBQUNmOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLHVCQUF1QjtJQUN2QixnQkFBZ0I7SUFDaEIsMEJBQWtCO0lBQWxCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QiwyQkFBMkI7SUFDM0IsZ0JBQWdCO0lBQ2hCLDBCQUFrQjtJQUFsQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsMkJBQTJCO0lBQzNCLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJsaXN0Vmlldy5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZHVjdC1pbWFnZSB7XHJcbiAgICBib3JkZXI6IDFweCAjZGRkIHNvbGlkO1xyXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLDAsMCwuNCkgMnB4IDJweDtcclxuICAgIG1hcmdpbjogMnB4O1xyXG59XHJcblxyXG4uZGVwb3QtcHJvcHMge1xyXG4gICAgYm9yZGVyOiAxcHggIzgwODA4MCBzb2xpZDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGl2b3J5O1xyXG4gICAgZm9udC1zaXplOiAuOXJlbTtcclxuICAgIHdpZHRoOiBtYXgtY29udGVudDtcclxufVxyXG5cclxuLnN0b3JhZ2UtcHJvcHMge1xyXG4gICAgYm9yZGVyOiAxcHggIzgwODA4MCBzb2xpZDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcclxuICAgIGZvbnQtc2l6ZTogLjlyZW07XHJcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XHJcbn1cclxuXHJcbi5zdG9yYWdlLWl0ZW0ge1xyXG4gICAgYm9yZGVyOiAxcHggIzgwODA4MCBzb2xpZDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGdhaW5zYm9ybztcclxuICAgIGZvbnQtc2l6ZTogLjlyZW07XHJcbn0iXX0= */"] });


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
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function DepotListView_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r3); const p_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return ctx_r2.dashboard.setActiveDepot(p_r1.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "ul", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](4, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](8, "Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const p_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](": ", p_r1.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](": ", p_r1.address, "");
} }
class DepotListView {
    constructor(dashboard) {
        this.dashboard = dashboard;
    }
    ngOnInit() {
        this.dashboard.getDepots().subscribe();
    }
}
DepotListView.??fac = function DepotListView_Factory(t) { return new (t || DepotListView)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_services_dashboard_service__WEBPACK_IMPORTED_MODULE_0__["default"])); };
DepotListView.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({ type: DepotListView, selectors: [["depot-list"]], decls: 2, vars: 1, consts: [[1, "col"], ["class", "row", 3, "click", 4, "ngFor", "ngForOf"], [1, "row", 3, "click"], [1, "col-12", "depot-props", "list-unstyled"]], template: function DepotListView_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](1, DepotListView_div_1_Template, 10, 2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngForOf", ctx.dashboard.depots);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: [".product-image[_ngcontent-%COMP%] {\r\n    border: 1px #ddd solid;\r\n    box-shadow: rgba(0,0,0,.4) 2px 2px;\r\n    margin: 2px;\r\n}\r\n\r\n.depot-props[_ngcontent-%COMP%] {\r\n    border: 1px #808080 solid;\r\n    background-color: ivory;\r\n    font-size: .9rem;\r\n    width: -webkit-max-content;\r\n    width: max-content;\r\n}\r\n\r\n.storage-props[_ngcontent-%COMP%] {\r\n    border: 1px #808080 solid;\r\n    background-color: aliceblue;\r\n    font-size: .9rem;\r\n    width: -webkit-max-content;\r\n    width: max-content;\r\n}\r\n\r\n.storage-item[_ngcontent-%COMP%] {\r\n    border: 1px #808080 solid;\r\n    background-color: gainsboro;\r\n    font-size: .9rem;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3RWaWV3LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHNCQUFzQjtJQUN0QixrQ0FBa0M7SUFDbEMsV0FBVztBQUNmOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLHVCQUF1QjtJQUN2QixnQkFBZ0I7SUFDaEIsMEJBQWtCO0lBQWxCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QiwyQkFBMkI7SUFDM0IsZ0JBQWdCO0lBQ2hCLDBCQUFrQjtJQUFsQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsMkJBQTJCO0lBQzNCLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJsaXN0Vmlldy5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZHVjdC1pbWFnZSB7XHJcbiAgICBib3JkZXI6IDFweCAjZGRkIHNvbGlkO1xyXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLDAsMCwuNCkgMnB4IDJweDtcclxuICAgIG1hcmdpbjogMnB4O1xyXG59XHJcblxyXG4uZGVwb3QtcHJvcHMge1xyXG4gICAgYm9yZGVyOiAxcHggIzgwODA4MCBzb2xpZDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGl2b3J5O1xyXG4gICAgZm9udC1zaXplOiAuOXJlbTtcclxuICAgIHdpZHRoOiBtYXgtY29udGVudDtcclxufVxyXG5cclxuLnN0b3JhZ2UtcHJvcHMge1xyXG4gICAgYm9yZGVyOiAxcHggIzgwODA4MCBzb2xpZDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcclxuICAgIGZvbnQtc2l6ZTogLjlyZW07XHJcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XHJcbn1cclxuXHJcbi5zdG9yYWdlLWl0ZW0ge1xyXG4gICAgYm9yZGVyOiAxcHggIzgwODA4MCBzb2xpZDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGdhaW5zYm9ybztcclxuICAgIGZvbnQtc2l6ZTogLjlyZW07XHJcbn0iXX0= */"] });


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
/* harmony import */ var _views_itemListView__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./views/itemListView */ "Ncay");
/* harmony import */ var _views_itemView__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./views/itemView */ "90XB");
/* harmony import */ var _views_parameterView__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./views/parameterView */ "/saV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ "ofXK");




















class AppModule {
}
AppModule.??fac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_17__["????defineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_17__["????defineInjector"]({ providers: [
        _services_dashboard_service__WEBPACK_IMPORTED_MODULE_5__["default"],
        _services_authActivator__WEBPACK_IMPORTED_MODULE_6__["AuthActivator"],
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _router_router__WEBPACK_IMPORTED_MODULE_8__["default"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_17__["????setNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _views_headerView__WEBPACK_IMPORTED_MODULE_13__["HeaderView"],
        _views_footerView__WEBPACK_IMPORTED_MODULE_12__["FooterView"],
        _Pages_dashboardPage_component__WEBPACK_IMPORTED_MODULE_4__["default"],
        _Pages_loginPage_component__WEBPACK_IMPORTED_MODULE_3__["LoginPage"],
        _views_depotListView__WEBPACK_IMPORTED_MODULE_9__["DepotListView"],
        _views_storageListView__WEBPACK_IMPORTED_MODULE_10__["StorageListView"],
        _views_itemListView__WEBPACK_IMPORTED_MODULE_14__["ItemListView"],
        _views_itemView__WEBPACK_IMPORTED_MODULE_15__["ItemView"],
        _views_parameterView__WEBPACK_IMPORTED_MODULE_16__["ParameterView"],
        _views_userPannelView__WEBPACK_IMPORTED_MODULE_11__["UserPannelView"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_18__["RouterModule"]] }); })();
_angular_core__WEBPACK_IMPORTED_MODULE_17__["????setComponentScope"](_views_itemListView__WEBPACK_IMPORTED_MODULE_14__["ItemListView"], [_angular_common__WEBPACK_IMPORTED_MODULE_19__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["NgForOf"], _views_itemView__WEBPACK_IMPORTED_MODULE_15__["ItemView"]], []);
_angular_core__WEBPACK_IMPORTED_MODULE_17__["????setComponentScope"](_views_itemView__WEBPACK_IMPORTED_MODULE_15__["ItemView"], [_angular_common__WEBPACK_IMPORTED_MODULE_19__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["NgForOf"], _views_parameterView__WEBPACK_IMPORTED_MODULE_16__["ParameterView"]], []);


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
DashboardPage.??fac = function DashboardPage_Factory(t) { return new (t || DashboardPage)(); };
DashboardPage.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: DashboardPage, selectors: [["the-dashboard"]], decls: 16, vars: 0, consts: [[1, "col"], [1, "row"], [1, "col-12"], [1, "col-9"], [1, "col-3"]], template: function DashboardPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "header-section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Storages");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "storage-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Depots");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](12, "depot-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "footer-section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
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
/* harmony import */ var _itemListView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./itemListView */ "Ncay");




function StorageListView_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "label", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function StorageListView_div_1_Template_label_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r3); const p_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return ctx_r2.changeItemsVisibility(p_r1.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](3, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](6, "item-list", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const p_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate5"](": ", p_r1.name, "", p_r1.nameSplitter, "", p_r1.nameB, "", p_r1.nameSplitter, "", p_r1.nameC, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("id", p_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("storageId", p_r1.id);
} }
class StorageListView {
    constructor(dashboard) {
        this.dashboard = dashboard;
        this.showItems = [];
    }
    changeItemsVisibility(objectToken) {
        let itemState = this.showItems.find(s => s.name == objectToken);
        if (itemState == undefined) {
            itemState = { name: objectToken, show: false };
            this.showItems.push(itemState);
        }
        itemState.show = !itemState.show;
        document.getElementById(objectToken).hidden = itemState.show;
    }
}
StorageListView.??fac = function StorageListView_Factory(t) { return new (t || StorageListView)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_services_dashboard_service__WEBPACK_IMPORTED_MODULE_0__["default"])); };
StorageListView.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({ type: StorageListView, selectors: [["storage-list"]], decls: 2, vars: 1, consts: [[1, "col"], ["class", "row storage-item", 4, "ngFor", "ngForOf"], [1, "row", "storage-item"], [1, "col-12", "storage-props", "list-unstyled", 3, "click"], ["hidden", "", 1, "col-12", 3, "id"], [3, "storageId"]], template: function StorageListView_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](1, StorageListView_div_1_Template, 7, 7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngForOf", ctx.dashboard.storages);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _itemListView__WEBPACK_IMPORTED_MODULE_3__["ItemListView"]], styles: [".product-image[_ngcontent-%COMP%] {\r\n    border: 1px #ddd solid;\r\n    box-shadow: rgba(0,0,0,.4) 2px 2px;\r\n    margin: 2px;\r\n}\r\n\r\n.depot-props[_ngcontent-%COMP%] {\r\n    border: 1px #808080 solid;\r\n    background-color: ivory;\r\n    font-size: .9rem;\r\n    width: -webkit-max-content;\r\n    width: max-content;\r\n}\r\n\r\n.storage-props[_ngcontent-%COMP%] {\r\n    border: 1px #808080 solid;\r\n    background-color: aliceblue;\r\n    font-size: .9rem;\r\n    width: -webkit-max-content;\r\n    width: max-content;\r\n}\r\n\r\n.storage-item[_ngcontent-%COMP%] {\r\n    border: 1px #808080 solid;\r\n    background-color: gainsboro;\r\n    font-size: .9rem;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3RWaWV3LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHNCQUFzQjtJQUN0QixrQ0FBa0M7SUFDbEMsV0FBVztBQUNmOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLHVCQUF1QjtJQUN2QixnQkFBZ0I7SUFDaEIsMEJBQWtCO0lBQWxCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QiwyQkFBMkI7SUFDM0IsZ0JBQWdCO0lBQ2hCLDBCQUFrQjtJQUFsQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsMkJBQTJCO0lBQzNCLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJsaXN0Vmlldy5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZHVjdC1pbWFnZSB7XHJcbiAgICBib3JkZXI6IDFweCAjZGRkIHNvbGlkO1xyXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLDAsMCwuNCkgMnB4IDJweDtcclxuICAgIG1hcmdpbjogMnB4O1xyXG59XHJcblxyXG4uZGVwb3QtcHJvcHMge1xyXG4gICAgYm9yZGVyOiAxcHggIzgwODA4MCBzb2xpZDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGl2b3J5O1xyXG4gICAgZm9udC1zaXplOiAuOXJlbTtcclxuICAgIHdpZHRoOiBtYXgtY29udGVudDtcclxufVxyXG5cclxuLnN0b3JhZ2UtcHJvcHMge1xyXG4gICAgYm9yZGVyOiAxcHggIzgwODA4MCBzb2xpZDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcclxuICAgIGZvbnQtc2l6ZTogLjlyZW07XHJcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XHJcbn1cclxuXHJcbi5zdG9yYWdlLWl0ZW0ge1xyXG4gICAgYm9yZGVyOiAxcHggIzgwODA4MCBzb2xpZDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGdhaW5zYm9ybztcclxuICAgIGZvbnQtc2l6ZTogLjlyZW07XHJcbn0iXX0= */"] });


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
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](ctx_r0.errorMessage);
} }
function LoginPage_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} }
function LoginPage_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
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
LoginPage.??fac = function LoginPage_Factory(t) { return new (t || LoginPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_services_dashboard_service__WEBPACK_IMPORTED_MODULE_0__["default"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
LoginPage.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({ type: LoginPage, selectors: [["login-page"]], decls: 23, vars: 6, consts: [[1, "row", "align-items-center"], [1, "rectangle", "col-md-4", "offset-4"], ["class", "alert alert-danger", 4, "ngIf"], [3, "submit"], [1, "form-group"], ["for", "username"], ["name", "username", "type", "text", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["username", "ngModel"], ["class", "text-danger", 4, "ngIf"], ["for", "password"], ["name", "password", "type", "password", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["password", "ngModel"], [1, "form-check"], ["name", "rememberMeFlag", "type", "checkbox", 1, "form-check-input"], ["for", "rememberMeFlag", 1, "form-check-label"], ["type", "submit", "value", "Login", 1, "btn", "btn-success", 3, "disabled"], [1, "alert", "alert-danger"], [1, "text-danger"]], template: function LoginPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](2, LoginPage_div_2_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("submit", function LoginPage_Template_form_submit_3_listener() { return ctx.onLogin(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](6, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "input", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function LoginPage_Template_input_ngModelChange_7_listener($event) { return ctx.creds.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](9, LoginPage_div_9_Template, 2, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](11, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](12, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](13, "input", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function LoginPage_Template_input_ngModelChange_13_listener($event) { return ctx.creds.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](15, LoginPage_div_15_Template, 2, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](16, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](18, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](19, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](20, "Remember Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](21, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](22, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????reference"](8);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????reference"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.errorMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", ctx.creds.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", _r1.touched && _r1.invalid && _r1.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", ctx.creds.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", _r3.touched && _r3.invalid && _r3.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("disabled", _r1.invalid || _r3.invalid);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["??angular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]], styles: [".rectangle[_ngcontent-%COMP%] {\r\n    border-radius: 25px;\r\n    background: #8db1d8;\r\n    padding: 40px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luUGFnZS5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGFBQWE7QUFDakIiLCJmaWxlIjoibG9naW5QYWdlLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZWN0YW5nbGUge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgIGJhY2tncm91bmQ6ICM4ZGIxZDg7XHJcbiAgICBwYWRkaW5nOiA0MHB4O1xyXG59XHJcbiJdfQ== */"] });


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
AuthActivator.??fac = function AuthActivator_Factory(t) { return new (t || AuthActivator)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????inject"](_dashboard_service__WEBPACK_IMPORTED_MODULE_1__["default"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????inject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
AuthActivator.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineInjectable"]({ token: AuthActivator, factory: AuthActivator.??fac });


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