(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/_classes/Calculator.ts":
/*!****************************************!*\
  !*** ./src/app/_classes/Calculator.ts ***!
  \****************************************/
/*! exports provided: Calculator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Calculator", function() { return Calculator; });
class Calculator {
    constructor() {
        this.area = 1;
        this.nivel = 1;
        this.maritalStatus = 1;
        this.dependets = 1;
    }
    defaultValues() {
        // DEFAULT VALUES //
        // console.log('DEFAULT VALUES');
        // UserData => CarData
        this.carTotalValue = 0;
        this.carExpenses = 0;
        this.carFuel = 0;
        this.justifiedExpenses = 0;
        this.variable = 0;
        this.bonus = 0;
        this.irsTax = {
            id: 1,
            employee_Social_Security: 0.11,
            company_Social_Security: 0.2375,
            minimum_Wage: 557,
            a_La_Card: 0.01,
            tta_Kms: 0.05,
            car_Amortization: 48,
            lunch: 7.68,
            subsRefeicao: 160.23,
            minimumWage: 557,
            variable: 0,
            tta: 0,
            extraTax: 0,
            proposedDailyRate: 250,
            carType: 0,
            target_Margin: 0.25,
            numberOfMonths: 11,
            numberOfDaysMonth: 20,
        };
        // Extra TAXES
        this.tta = this.irsTax.tta;
        this.extraTax = this.irsTax.extraTax;
        this.proposedDailyRate = this.irsTax.proposedDailyRate;
        this.carType = this.irsTax.carType;
        // END Extra TAXES
        // UserData => extraData
        this.numberOfMonths = this.irsTax.numberOfMonths;
        this.numberOfDaysMonth = this.irsTax.numberOfDaysMonth;
        this.targetMargin = this.irsTax.target_Margin;
        this.proposedRate = this.irsTax.proposedDailyRate;
        // IRS Data
        this.employeeSocialSecurity = this.irsTax.employee_Social_Security;
        this.companySocialSecutiry = this.irsTax.company_Social_Security;
        this.subsRefeicao = this.irsTax.subsRefeicao;
        this.aLaCardTax = this.irsTax.a_La_Card;
        this.minimumWage = this.irsTax.minimumWage;
        // BaseCarData
        this.ttaKMs = this.irsTax.tta_Kms;
        this.carAmortizationMonths = this.irsTax.car_Amortization;
    }
    calcs() {
        console.log('START calcs()');
        // Extra Tax
        // Calc TTA
        if (this.carType == 0) {
            if (this.carTotalValue < 25000) {
                this.tta = 0.1;
            }
            if (this.carTotalValue >= 25000) {
                this.tta = 0.275;
            }
            if (this.carTotalValue >= 35000) {
                this.tta = 0.35;
            }
        }
        if (this.carType == 1) {
            if (this.carTotalValue < 25000) {
                this.tta = 0.05;
            }
            if (this.carTotalValue >= 35000) {
                this.tta = 0.1;
            }
            if (this.carTotalValue >= 50000) {
                this.tta = 0.175;
            }
        }
        // Base Salary
        this.baseSalaryMonthGross = this.baseSalary;
        this.baseSalaryMonthNet =
            this.baseSalary * (1 - this.employeeSocialSecurity - this.irs);
        this.baseSalaryYearGross = this.baseSalary * 14;
        this.baseSalaryYearNet =
            this.baseSalary * (1 - this.employeeSocialSecurity - this.irs) * 14;
        this.baseSalaryYearTotal =
            this.baseSalary * 14 * (1 + this.companySocialSecutiry);
        // IHT
        this.ihtMonthGross = this.baseSalary * 0.25;
        this.ihtMonthNet =
            this.baseSalary * 0.25 * (1 - this.employeeSocialSecurity - this.irs);
        this.ihtYearGross = this.ihtMonthGross * 14;
        this.ihtYearNet = this.ihtMonthNet * 14;
        this.ihtTotal =
            this.baseSalary * 0.25 * 14 * (1 + this.companySocialSecutiry);
        // SubsRefeicao
        this.subsRefeicaoMonthGross = this.subsRefeicao;
        this.subsRefeicaoMonthNet = this.subsRefeicao;
        this.subsRefeicaoYearGross = this.subsRefeicao * 11;
        this.subsRefeicaoYearNet = this.subsRefeicao * 11;
        this.subsRefeicaoTotal = this.subsRefeicao * 11 * (1 + this.aLaCardTax);
        // Justified Expenses
        this.justifiedExpensesMonthGross = this.justifiedExpenses;
        this.justifiedExpensesMonthNet = this.justifiedExpenses;
        this.justifiedExpensesYearGross = this.justifiedExpenses * 12;
        this.justifiedExpensesYearNet = this.justifiedExpenses * 12;
        this.justifiedExpensesTotal =
            this.justifiedExpenses * 12 * (1 + this.ttaKMs);
        // Car
        this.carMonthGross = this.carTotalValue / this.carAmortizationMonths;
        this.carMonthNet = this.carTotalValue / this.carAmortizationMonths;
        this.carYearGross = (this.carTotalValue / this.carAmortizationMonths) * 12;
        this.carYearNet = (this.carTotalValue / this.carAmortizationMonths) * 12;
        this.carTotal =
            (this.carTotalValue / this.carAmortizationMonths) * 12 * (1 + this.tta);
        // Car Expenses
        this.carExpensesMonthGross = this.carExpenses;
        this.carExpensesMonthNet = this.carExpenses;
        this.carExpensesYearGross = this.carExpenses * 12;
        this.carExpensesYearNet = this.carExpenses * 12;
        this.carExpensesTotal = this.carExpenses * 12 * (1 + this.tta);
        // Car Fuel
        this.carFuelMonthGross = this.carFuel;
        this.carFuelMonthNet = this.carFuel;
        this.carFuelYearGross = this.carFuel * 12;
        this.carFuelYearNet = this.carFuel * 12;
        this.carFuelTotal = this.carFuel * 12 * (1 + this.tta);
        // Variable
        this.variableMonthGross = this.variable;
        this.variableMonthNet = this.variable * (1 - this.irs);
        this.variableYearGross = this.variable * 12;
        this.variableYearNet = this.variable * (1 - this.irs) * 12;
        this.variableTotal = this.variable * 12;
        // Bonus
        this.bonusMonthGross = this.bonus / 12;
        this.bonusMonthNet = (this.bonus * (1 - this.irs)) / 12;
        this.bonusYearGross = this.bonus;
        this.bonusYearNet = this.bonus * (1 - this.irs);
        this.bonusTotal = this.bonus;
        // Total
        this.totalMonthGross =
            Number(this.baseSalary) +
                Number(this.ihtMonthGross) +
                Number(this.subsRefeicaoMonthNet) +
                Number(this.justifiedExpensesMonthGross) +
                Number(this.carMonthGross) +
                Number(this.carExpensesMonthGross) +
                Number(this.carFuelMonthGross) +
                Number(this.variableMonthGross) +
                Number(this.bonusMonthGross);
        this.totalMonthNet =
            Number(this.baseSalary * (1 - this.employeeSocialSecurity - this.irs)) +
                Number(this.ihtMonthNet) +
                Number(this.subsRefeicaoMonthNet) +
                Number(this.justifiedExpensesMonthNet) +
                Number(this.carMonthNet) +
                Number(this.carExpensesMonthNet) +
                Number(this.carFuelMonthNet) +
                Number(this.variableMonthNet) +
                Number(this.bonusMonthNet);
        this.totalYearGross =
            Number(this.baseSalaryYearGross) +
                Number(this.ihtYearGross) +
                Number(this.subsRefeicaoYearGross) +
                Number(this.justifiedExpensesYearGross) +
                Number(this.carYearGross) +
                Number(this.carExpensesYearGross) +
                Number(this.carFuelYearGross) +
                Number(this.variableYearGross) +
                Number(this.bonusYearGross);
        this.totalYearNet =
            Number(this.baseSalaryYearNet) +
                Number(this.ihtYearNet) +
                Number(this.subsRefeicaoYearNet) +
                Number(this.justifiedExpensesYearNet) +
                Number(this.carYearNet) +
                Number(this.carExpensesYearNet) +
                Number(this.carFuelYearNet) +
                Number(this.variableYearNet) +
                Number(this.bonusYearNet);
        this.totalTotal =
            Number(this.baseSalaryYearTotal) +
                Number(this.ihtTotal) +
                Number(this.subsRefeicaoTotal) +
                Number(this.justifiedExpensesTotal) +
                Number(this.carTotal) +
                Number(this.carExpensesTotal) +
                Number(this.carFuelTotal) +
                Number(this.variableTotal) +
                Number(this.bonusTotal);
        // Tax Tables
        this.totalMonthNetAfterExtraTaxWithBonus =
            this.totalMonthNet - this.extraTaxEuros;
        this.totalYearNetAfterExtraTaxWithBonus =
            this.totalYearNet - this.extraTaxEuros * 14;
        this.totalMonthNetAfterExtraTaxWithoutBonus =
            this.totalMonthNetAfterExtraTaxWithBonus - this.bonusMonthNet;
        this.totalYearNetAfterExtraTaxWithoutBonus =
            this.totalYearNetAfterExtraTaxWithBonus - this.bonusYearNet;
        // Employee Table
        this.employeeIrsEuros =
            (this.baseSalary + this.baseSalary * 0.25) * this.irs;
        this.employeeSocialSecurityEuros =
            (this.baseSalary + this.baseSalary * 0.25) * this.employeeSocialSecurity;
        this.extraTaxEuros =
            (this.totalMonthNet -
                this.subsRefeicaoMonthNet -
                this.justifiedExpensesMonthNet -
                this.carMonthNet -
                this.carExpensesMonthNet -
                this.carFuelMonthNet -
                this.minimumWage) *
                this.extraTax;
        // Bonus Table
        this.costMonthWithBonus = this.totalTotal / this.numberOfMonths;
        this.costMonthWithoutBonus =
            (this.totalTotal - this.bonusTotal) / this.numberOfMonths;
        this.costDayWithBonus =
            this.totalTotal / this.numberOfMonths / this.numberOfDaysMonth;
        this.costDayWithoutBonus =
            (this.totalTotal - this.bonusTotal) /
                this.numberOfMonths /
                this.numberOfDaysMonth;
        this.monthTargetMarginWithBonus =
            this.totalTotal / this.numberOfMonths / (1 - this.targetMargin);
        this.monthTargetMarginWithoutBonus =
            (this.totalTotal - this.bonusTotal) /
                this.numberOfMonths /
                (1 - this.targetMargin);
        this.dayTargetMarginWithBonus =
            this.totalTotal /
                this.numberOfMonths /
                this.numberOfDaysMonth /
                (1 - this.targetMargin);
        this.dayTargetMarginWithoutBonus =
            (this.totalTotal - this.bonusTotal) /
                this.numberOfMonths /
                this.numberOfDaysMonth /
                (1 - this.targetMargin);
        // Proposed Bonus Table
        this.proposedHourRate = this.proposedDailyRate / 8;
        this.marginWithBonus =
            (this.proposedDailyRate -
                this.totalTotal / this.numberOfMonths / this.numberOfDaysMonth) /
                this.proposedDailyRate;
        this.marginWithoutBonus =
            (this.proposedDailyRate -
                (this.totalTotal - this.bonusTotal) /
                    this.numberOfMonths /
                    this.numberOfDaysMonth) /
                this.proposedDailyRate;
    }
}


/***/ }),

/***/ "./src/app/_utils/nameSplitUpper.ts":
/*!******************************************!*\
  !*** ./src/app/_utils/nameSplitUpper.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return nameSplitUpper; });
function nameSplitUpper(str) {
    return str
        .split('.')
        .map((x) => x.charAt(0).toUpperCase() + x.slice(1))
        .join(' ');
}


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_simulator_simulator_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/simulator/simulator.component */ "./src/app/components/simulator/simulator.component.ts");
/* harmony import */ var _components_simulations_simulations_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/simulations/simulations.component */ "./src/app/components/simulations/simulations.component.ts");
/* harmony import */ var _components_team_team_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/team/team.component */ "./src/app/components/team/team.component.ts");
/* harmony import */ var _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/admin/admin.component */ "./src/app/components/admin/admin.component.ts");


// Components







const routes = [
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'simulator', component: _components_simulator_simulator_component__WEBPACK_IMPORTED_MODULE_3__["SimulatorComponent"] },
    { path: 'simulations', component: _components_simulations_simulations_component__WEBPACK_IMPORTED_MODULE_4__["SimulationsComponent"] },
    { path: 'team', component: _components_team_team_component__WEBPACK_IMPORTED_MODULE_5__["TeamComponent"] },
    { path: 'admin', component: _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_6__["AdminComponent"] },
    { path: '**', redirectTo: '', pathMatch: 'full' },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/sidebar/sidebar.component */ "./src/app/components/sidebar/sidebar.component.ts");
/* harmony import */ var _components_topbar_topbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/topbar/topbar.component */ "./src/app/components/topbar/topbar.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 5, vars: 0, consts: [["id", "wrapper"], ["id", "topbar"], ["id", "hero"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-topbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__["SidebarComponent"], _components_topbar_topbar_component__WEBPACK_IMPORTED_MODULE_2__["TopbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: ["[_nghost-%COMP%] {\r\n  background: var(--color-background);\r\n  width: 100vw;\r\n  height: 100vh;\r\n  display: flex;\r\n  overflow-x: hidden;\r\n}\r\n\r\n#wrapper[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  flex-grow: 1;\r\n  overflow-x: hidden;\r\n}\r\n\r\n#topbar[_ngcontent-%COMP%] {\r\n  \r\n}\r\n\r\n#hero[_ngcontent-%COMP%] {\r\n  flex-grow: 1;\r\n  \r\n  \r\n}\r\n\r\n@media (min-width: 700px) {\r\n  [_nghost-%COMP%] {\r\n    \r\n    \r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQ0FBbUM7RUFDbkMsWUFBWTtFQUNaLGFBQWE7RUFDYixhQUFhO0VBQ2Isa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRTtJQUNFLG9CQUFvQjtJQUNwQix1QkFBdUI7RUFDekI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLWJhY2tncm91bmQpO1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG59XHJcblxyXG4jd3JhcHBlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGZsZXgtZ3JvdzogMTtcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbn1cclxuXHJcbiN0b3BiYXIge1xyXG4gIC8qIGhlaWdodDogNTBweDsgKi9cclxufVxyXG5cclxuI2hlcm8ge1xyXG4gIGZsZXgtZ3JvdzogMTtcclxuICAvKiBkaXNwbGF5OiBmbGV4OyAqL1xyXG4gIC8qIGZsZXg6IDEgMCBhdXRvOyAqL1xyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzAwcHgpIHtcclxuICA6aG9zdCB7XHJcbiAgICAvKiBmb250LXNpemU6IDgwJTsgKi9cclxuICAgIC8qIG1heC13aWR0aDogMTEwMHB4OyAqL1xyXG4gIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css'],
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _services_nivel_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/nivel.service */ "./src/app/services/nivel.service.ts");
/* harmony import */ var _services_area_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/area.service */ "./src/app/services/area.service.ts");
/* harmony import */ var _services_maritalStatus_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/maritalStatus.service */ "./src/app/services/maritalStatus.service.ts");
/* harmony import */ var _services_colaborador_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/colaborador.service */ "./src/app/services/colaborador.service.ts");
/* harmony import */ var _services_irsUser_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/irsUser.service */ "./src/app/services/irsUser.service.ts");
/* harmony import */ var _services_simulation_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/simulation.service */ "./src/app/services/simulation.service.ts");
/* harmony import */ var _services_fileUpload_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/fileUpload.service */ "./src/app/services/fileUpload.service.ts");
/* harmony import */ var _services_irsCalc_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/irsCalc.service */ "./src/app/services/irsCalc.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/sidebar/sidebar.component */ "./src/app/components/sidebar/sidebar.component.ts");
/* harmony import */ var _components_topbar_topbar_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/topbar/topbar.component */ "./src/app/components/topbar/topbar.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_team_team_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/team/team.component */ "./src/app/components/team/team.component.ts");
/* harmony import */ var _components_simulator_simulator_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/simulator/simulator.component */ "./src/app/components/simulator/simulator.component.ts");
/* harmony import */ var _components_simulations_simulations_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/simulations/simulations.component */ "./src/app/components/simulations/simulations.component.ts");
/* harmony import */ var _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/admin/admin.component */ "./src/app/components/admin/admin.component.ts");
/* harmony import */ var _components_hello_hello_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/hello/hello.component */ "./src/app/components/hello/hello.component.ts");
/* harmony import */ var _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/nav/nav.component */ "./src/app/components/nav/nav.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! primeng/dropdown */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-dropdown.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-table.js");
/* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! primeng/fileupload */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-fileupload.js");
/* harmony import */ var primeng_accordion__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! primeng/accordion */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-accordion.js");


// + Angular


// Routing

// HttpClientModule

// Services








// Components









// Other Components


// Primeng Components





class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _services_irsUser_service__WEBPACK_IMPORTED_MODULE_10__["IrsUserService"],
        _services_nivel_service__WEBPACK_IMPORTED_MODULE_6__["NivelService"],
        _services_area_service__WEBPACK_IMPORTED_MODULE_7__["AreaService"],
        _services_maritalStatus_service__WEBPACK_IMPORTED_MODULE_8__["MaritalStatusService"],
        _services_simulation_service__WEBPACK_IMPORTED_MODULE_11__["SimulationService"],
        _services_colaborador_service__WEBPACK_IMPORTED_MODULE_9__["ColaboradorService"],
        _services_irsCalc_service__WEBPACK_IMPORTED_MODULE_13__["IrsCalcService"],
        _services_fileUpload_service__WEBPACK_IMPORTED_MODULE_12__["FileUploadService"],
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            primeng_dropdown__WEBPACK_IMPORTED_MODULE_25__["DropdownModule"],
            primeng_table__WEBPACK_IMPORTED_MODULE_26__["TableModule"],
            primeng_fileupload__WEBPACK_IMPORTED_MODULE_27__["FileUploadModule"],
            primeng_accordion__WEBPACK_IMPORTED_MODULE_28__["AccordionModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"],
        _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_15__["SidebarComponent"],
        _components_topbar_topbar_component__WEBPACK_IMPORTED_MODULE_16__["TopbarComponent"],
        _components_simulator_simulator_component__WEBPACK_IMPORTED_MODULE_19__["SimulatorComponent"],
        _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_21__["AdminComponent"],
        _components_home_home_component__WEBPACK_IMPORTED_MODULE_17__["HomeComponent"],
        _components_team_team_component__WEBPACK_IMPORTED_MODULE_18__["TeamComponent"],
        _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_23__["NavComponent"],
        _components_login_login_component__WEBPACK_IMPORTED_MODULE_24__["LoginComponent"],
        _components_simulations_simulations_component__WEBPACK_IMPORTED_MODULE_20__["SimulationsComponent"],
        _components_hello_hello_component__WEBPACK_IMPORTED_MODULE_22__["HelloComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
        primeng_dropdown__WEBPACK_IMPORTED_MODULE_25__["DropdownModule"],
        primeng_table__WEBPACK_IMPORTED_MODULE_26__["TableModule"],
        primeng_fileupload__WEBPACK_IMPORTED_MODULE_27__["FileUploadModule"],
        primeng_accordion__WEBPACK_IMPORTED_MODULE_28__["AccordionModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"],
                    _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_15__["SidebarComponent"],
                    _components_topbar_topbar_component__WEBPACK_IMPORTED_MODULE_16__["TopbarComponent"],
                    _components_simulator_simulator_component__WEBPACK_IMPORTED_MODULE_19__["SimulatorComponent"],
                    _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_21__["AdminComponent"],
                    _components_home_home_component__WEBPACK_IMPORTED_MODULE_17__["HomeComponent"],
                    _components_team_team_component__WEBPACK_IMPORTED_MODULE_18__["TeamComponent"],
                    _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_23__["NavComponent"],
                    _components_login_login_component__WEBPACK_IMPORTED_MODULE_24__["LoginComponent"],
                    _components_simulations_simulations_component__WEBPACK_IMPORTED_MODULE_20__["SimulationsComponent"],
                    _components_hello_hello_component__WEBPACK_IMPORTED_MODULE_22__["HelloComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                    primeng_dropdown__WEBPACK_IMPORTED_MODULE_25__["DropdownModule"],
                    primeng_table__WEBPACK_IMPORTED_MODULE_26__["TableModule"],
                    primeng_fileupload__WEBPACK_IMPORTED_MODULE_27__["FileUploadModule"],
                    primeng_accordion__WEBPACK_IMPORTED_MODULE_28__["AccordionModule"],
                ],
                providers: [
                    _services_irsUser_service__WEBPACK_IMPORTED_MODULE_10__["IrsUserService"],
                    _services_nivel_service__WEBPACK_IMPORTED_MODULE_6__["NivelService"],
                    _services_area_service__WEBPACK_IMPORTED_MODULE_7__["AreaService"],
                    _services_maritalStatus_service__WEBPACK_IMPORTED_MODULE_8__["MaritalStatusService"],
                    _services_simulation_service__WEBPACK_IMPORTED_MODULE_11__["SimulationService"],
                    _services_colaborador_service__WEBPACK_IMPORTED_MODULE_9__["ColaboradorService"],
                    _services_irsCalc_service__WEBPACK_IMPORTED_MODULE_13__["IrsCalcService"],
                    _services_fileUpload_service__WEBPACK_IMPORTED_MODULE_12__["FileUploadService"],
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/admin/admin.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/admin/admin.component.ts ***!
  \*****************************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_fileUpload_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/fileUpload.service */ "./src/app/services/fileUpload.service.ts");
/* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/fileupload */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-fileupload.js");




// export class AdminComponent implements OnInit {
//   uploadedFiles: any[] = [];
//   constructor() {}
//   onUpload(event) {
//     for (let file of event.files) {
//       this.uploadedFiles.push(file);
//     }
//     // this.messageService.add({
//     //   severity: 'info',
//     //   summary: 'File Uploaded',
//     //   detail: ''
//     // });
//   }
//   ngOnInit(): void {}
// }
class AdminComponent {
    constructor(fileUploadService) {
        this.fileUploadService = fileUploadService;
    }
}
AdminComponent.ɵfac = function AdminComponent_Factory(t) { return new (t || AdminComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_fileUpload_service__WEBPACK_IMPORTED_MODULE_1__["FileUploadService"])); };
AdminComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminComponent, selectors: [["app-admin"]], decls: 7, vars: 0, consts: [[1, "container"], ["mode", "basic", "name", "excel[]", "url", "", "accept", ".xlsx", "maxFileSize", "10000000"]], template: function AdminComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Excel Upload:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "p-fileUpload", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [primeng_fileupload__WEBPACK_IMPORTED_MODULE_2__["FileUpload"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW4vYWRtaW4uY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-admin',
                templateUrl: './admin.component.html',
                styleUrls: ['./admin.component.css'],
            }]
    }], function () { return [{ type: _services_fileUpload_service__WEBPACK_IMPORTED_MODULE_1__["FileUploadService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/hello/hello.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/hello/hello.component.ts ***!
  \*****************************************************/
/*! exports provided: HelloComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelloComponent", function() { return HelloComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class HelloComponent {
    constructor() { }
    ngOnInit() {
    }
}
HelloComponent.ɵfac = function HelloComponent_Factory(t) { return new (t || HelloComponent)(); };
HelloComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HelloComponent, selectors: [["app-hello"]], decls: 2, vars: 0, template: function HelloComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " hello works! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HelloComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-hello',
                template: `
    <p>
      hello works!
    </p>
  `,
                styles: []
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class HomeComponent {
    constructor() { }
    ngOnInit() { }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 5, vars: 0, consts: [[1, "m-5"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Bem Vindo ao Simulador de IRS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "instru\u00E7\u00F5es...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["[_nghost-%COMP%] {\r\n  overflow: hidden;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class LoginComponent {
    constructor() { }
    ngOnInit() {
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 2, vars: 0, template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " login works! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                template: `
    <p>
      login works!
    </p>
  `,
                styles: []
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/nav/nav.component.ts":
/*!*************************************************!*\
  !*** ./src/app/components/nav/nav.component.ts ***!
  \*************************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



const _c0 = function () { return ["/home"]; };
const _c1 = function () { return ["/simulator"]; };
const _c2 = function () { return ["/team"]; };
const _c3 = function () { return ["/admin"]; };
class NavComponent {
    constructor() { }
    ngOnInit() { }
}
NavComponent.ɵfac = function NavComponent_Factory(t) { return new (t || NavComponent)(); };
NavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavComponent, selectors: [["app-nav"]], decls: 13, vars: 8, consts: [[3, "routerLink"]], template: function NavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Simulador");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Equipa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c3));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-nav',
                template: `
    <ul>
      <li><a [routerLink]="['/home']">Home</a></li>
      <li><a [routerLink]="['/simulator']">Simulador</a></li>
      <li><a [routerLink]="['/team']">Equipa</a></li>
      <li><a [routerLink]="['/admin']">Admin</a></li>
    </ul>
  `,
                styles: [],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.ts ***!
  \*********************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



const _c0 = function () { return ["/home"]; };
const _c1 = function () { return ["/team"]; };
const _c2 = function () { return ["/simulator"]; };
const _c3 = function () { return ["/simulations"]; };
const _c4 = function () { return ["/admin"]; };
class SidebarComponent {
    constructor() { }
    ngOnInit() {
    }
}
SidebarComponent.ɵfac = function SidebarComponent_Factory(t) { return new (t || SidebarComponent)(); };
SidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SidebarComponent, selectors: [["app-sidebar"]], decls: 35, vars: 10, consts: [[1, "nav-bar"], [1, "navbar-title-pic"], [1, "sidebar-divider", "my-0"], [1, "nav-item"], [1, "nav-link", 3, "routerLink"], [1, "pi", "pi-home", "mx-2"], [1, "pi", "pi-users", "mx-2"], [1, "pi", "pi-desktop", "mx-2"], [1, "pi", "pi-user-edit", "mx-2"], [1, "sidebar-divider", "d-none", "d-md-block"], [1, "text-center", "d-none", "d-md-inline"], ["id", "sidebarToggle", 1, "rounded-circle", "border-0"]], template: function SidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "hr", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "hr", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Equipa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "hr", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Simulador");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "hr", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Simula\u00E7\u00F5es");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "hr", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "hr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c4));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["[_nghost-%COMP%] {\r\n  background-image: radial-gradient(circle, #22c1c3 0%, #004a61 100%);\r\n  width: 200px;\r\n  display: flex;\r\n  \r\n  \r\n  overflow: hidden;\r\n}\r\n\r\n.sidebar-divider[_ngcontent-%COMP%] {\r\n  margin: 0 1rem 1rem;\r\n}\r\n\r\na[_ngcontent-%COMP%] {\r\n  color: white;\r\n}\r\n\r\n.navbar-title-pic[_ngcontent-%COMP%] {\r\n  background-image: url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 encoding%3D%22UTF-8%22%3F%3E%0D%3Csvg width%3D%22161px%22 height%3D%2256px%22 viewBox%3D%220 0 161 56%22 version%3D%221.1%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%0D    %3C!-- Generator%3A Sketch 53.2 (72643) - https%3A%2F%2Fsketchapp.com --%3E%0D    %3Ctitle%3ELIFE_Logo%3C%2Ftitle%3E%0D    %3Cdesc%3ECreated with Sketch.%3C%2Fdesc%3E%0D    %3Cg id%3D%22Page-1%22 stroke%3D%22none%22 stroke-width%3D%221%22 fill%3D%22none%22 fill-rule%3D%22evenodd%22%3E%0D        %3Cg id%3D%22Login-Copy%22 transform%3D%22translate(-494.000000%2C -114.000000)%22 fill-rule%3D%22nonzero%22%3E%0D            %3Cg id%3D%22LIFE_Logo%22 transform%3D%22translate(494.000000%2C 114.000000)%22%3E%0D                %3Cpolygon id%3D%22Path%22 fill%3D%22%23D0D700%22 points%3D%2223.455 10 23.475 9.99547101 23.545 0 23.515 0.00452898551 23.455 9.99547101%22%3E%3C%2Fpolygon%3E%0D                %3Cpolygon id%3D%22Path%22 fill%3D%22%23FFFFFF%22 points%3D%2223.9849043 46.3156192 23.9805912 46.3112292 23.9805912 46.3156192 13.0469943 39.844732 8.25087609 37.00878 8.25087609 37 8.24224998 37.00878 0 41.8158503 0 41.8202403 23.9547129 56 48 41.9738909 39.7706892 37.1053604%22%3E%3C%2Fpolygon%3E%0D                %3Cpolygon id%3D%22Path%22 fill-opacity%3D%220.847765516%22 fill%3D%22%23FFFFFF%22 points%3D%2239.7367853 18.8208368 39.6806904 37.1762635 47.9137001 42 48 14.0492958 24.030205 0 24 9.59962717%22%3E%3C%2Fpolygon%3E%0D                %3Cpolygon id%3D%22Path%22 fill-opacity%3D%220.657943619%22 fill%3D%22%23FFFFFF%22 points%3D%220.0128709331 41.9956345 8.21165535 37.2154662 8.22023597 37.2067353 8.27601001 18.7888993 23.9742581 9.63891487 23.9742581 9.63454942 24 0.00436545058 24 0 0.085806221 13.95198 0 42%22%3E%3C%2Fpolygon%3E%0D                %3Cpolygon id%3D%22Path%22 fill%3D%22%23FFFFFF%22 points%3D%2214.0351685 21.7476117 23.9806283 27.9093974 34 21.7854278 23.9806283 16 14.0351685 21.7476117 14 33.9955511 14 34%22%3E%3C%2Fpolygon%3E%0D                %3Cpolygon id%3D%22Path%22 fill-opacity%3D%220.66%22 fill%3D%22%23FFFFFF%22 points%3D%2224.0375469 27.9810817 24 40 33.9666249 34.023284 34 22%22%3E%3C%2Fpolygon%3E%0D                %3Cpolygon id%3D%22Path%22 fill-opacity%3D%220.85%22 fill%3D%22%23FFFFFF%22 points%3D%2214.0335008 22 14 33.9797003 17.0360134 35.8153697 23.9664992 40 23.9664992 39.9956501 24 28.0246496%22%3E%3C%2Fpolygon%3E%0D                %3Cpolygon id%3D%22Path%22 fill%3D%22%23FFFFFF%22 points%3D%2254 14 58.1572184 14 58.1572184 37.9974866 65 37.9974866 65 42 54 42%22%3E%3C%2Fpolygon%3E%0D                %3Cpolygon id%3D%22Path%22 fill%3D%22%23FFFFFF%22 points%3D%2268 14 72 14 72 42 68 42%22%3E%3C%2Fpolygon%3E%0D                %3Cpolygon id%3D%22Path%22 fill%3D%22%23FFFFFF%22 points%3D%2280.1572184 26.4561734 85.5241875 26.4561734 85.5241875 30.4586868 80.1572184 30.4586868 80.1572184 42 76 42 76 14 87 14 87 17.998115 80.1572184 17.998115%22%3E%3C%2Fpolygon%3E%0D                %3Cpolygon id%3D%22Path%22 fill%3D%22%23FFFFFF%22 points%3D%2294.4016123 25.8008168 100.438989 25.8008168 100.438989 29.7989318 94.4016123 29.7989318 94.4016123 37.9974866 102 37.9974866 102 42 90 42 90 14 102 14 102 17.998115 94.4016123 17.998115%22%3E%3C%2Fpolygon%3E%0D                %3Cpath d%3D%22M120%2C34.6032873 C120%2C38.0997385 119.13488%2C38.480762 117.8372%2C38.480762 C116.53952%2C38.480762 116.418403%2C37.6738887 116.418403%2C37.6738887 C116.418403%2C37.6738887 115.120724%2C38.4673142 114.147464%2C38.4673142 C113.174204%2C38.4673142 111.984664%2C38.1535301 111.984664%2C35.1905118 C111.984664%2C32.9940232 112.559969%2C31.7837131 114.558396%2C31.7837131 C115.081223%2C31.8216236 115.595768%2C31.9394464 116.085332%2C32.1333582 L116.085332%2C31.9137094 L116.842312%2C31.9137094 L116.842312%2C34.4463952 C116.842312%2C37.4901009 116.902871%2C37.8173328 117.880456%2C37.8173328 C118.685018%2C37.8173328 119.212741%2C37.6066492 119.212741%2C34.6032873 L119.212741%2C34.3970863 C119.212741%2C31.1337318 117.958317%2C29.690325 114.644908%2C29.690325 C111.331498%2C29.690325 109.774282%2C31.1606276 109.774282%2C34.9798282 C109.774282%2C39.014195 111.27094%2C40.3007097 114.644908%2C40.3007097 C115.172631%2C40.3007097 116.440031%2C40.1707135 116.440031%2C40.1707135 L116.474636%2C40.8700037 C116.474636%2C40.8700037 115.27212%2C41 114.644908%2C41 C110.929217%2C41 109%2C39.6552111 109%2C34.9798282 C109%2C30.6496078 110.994101%2C29 114.644908%2C29 C118.434133%2C29 119.991349%2C30.7571909 119.991349%2C34.4105342 L120%2C34.6032873 Z M116.223751%2C37.1001121 C116.135733%2C36.2844844 116.092408%2C35.4643414 116.093983%2C34.6436309 L116.093983%2C32.7833396 C115.633911%2C32.6151088 115.15349%2C32.5140278 114.666536%2C32.4830034 C113.096343%2C32.4830034 112.745969%2C33.4333209 112.745969%2C35.2174075 C112.745969%2C37.4587225 113.537554%2C37.7635413 114.199371%2C37.7635413 C114.9066%2C37.667667 115.591924%2C37.4430727 116.223751%2C37.1001121 L116.223751%2C37.1001121 Z%22 id%3D%22Shape%22 fill%3D%22%23FFFFFF%22%3E%3C%2Fpath%3E%0D                %3Cpath d%3D%22M128.695853%2C32.0572687 C127.770632%2C31.9244116 126.838246%2C31.8420462 125.903226%2C31.8105727 C124.903226%2C31.8105727 124%2C32.0704846 124%2C33.1321586 C124%2C33.9339207 124.40553%2C34.1674009 126.16129%2C34.4537445 C128.225806%2C34.7753304 129%2C35.1321586 129%2C36.6123348 C129%2C38.4140969 127.824885%2C39 125.889401%2C39 C124.962762%2C38.9604781 124.039441%2C38.8678003 123.124424%2C38.722467 L123.18894%2C37.907489 C124.06088%2C38.0366847 124.939125%2C38.1234339 125.820276%2C38.1674009 C127.202765%2C38.1674009 128.013825%2C37.8590308 128.013825%2C36.6563877 C128.013825%2C35.7312775 127.529954%2C35.5330396 125.709677%2C35.2687225 C123.889401%2C35.0044053 123%2C34.6696035 123%2C33.1718062 C123%2C31.4933921 124.451613%2C31 125.852535%2C31 C126.809897%2C31.0258825 127.764392%2C31.1127121 128.709677%2C31.2599119 L128.695853%2C32.0572687 Z%22 id%3D%22Path%22 fill%3D%22%23FFFFFF%22%3E%3C%2Fpath%3E%0D                %3Cpolygon id%3D%22Path%22 fill%3D%22%23FFFFFF%22 points%3D%22131.862324 31 133.736064 37.7959023 134.243788 37.7959023 136.133647 31 137 31 133.949631 42 133.103425 42 134.04634 38.5847124 133.075218 38.5847124 131 31%22%3E%3C%2Fpolygon%3E%0D                %3Cpath d%3D%22M144%2C34.8945055 C144%2C37.8 143.398773%2C39 141.006135%2C39 C138.613497%2C39 138%2C37.8 138%2C34.8945055 C138%2C32.1692308 138.789366%2C31 141.006135%2C31 C143.222904%2C31 144%2C32.156044 144%2C34.8945055 Z M143.124744%2C34.8945055 C143.124744%2C32.5868132 142.638037%2C31.8175824 141.006135%2C31.8175824 C139.374233%2C31.8175824 138.887526%2C32.5868132 138.887526%2C34.8945055 C138.887526%2C37.2021978 139.145194%2C38.1868132 141.006135%2C38.1868132 C142.867076%2C38.1868132 143.124744%2C37.2461538 143.124744%2C34.8945055 Z%22 id%3D%22Shape%22 fill%3D%22%23FFFFFF%22%3E%3C%2Fpath%3E%0D                %3Cpath d%3D%22M147%2C39 L147%2C31.1656407 L147.908156%2C31.1656407 L147.908156%2C31.7386682 C148.684287%2C31.3092947 149.543386%2C31.0572003 150.425422%2C31 C152.537105%2C31 153%2C32.002798 153%2C34.8724119 L153%2C38.9910464 L152.07421%2C38.9910464 L152.07421%2C34.9171796 C152.07421%2C32.6161164 151.827333%2C31.8461108 150.28435%2C31.8461108 C149.454343%2C31.8858513 148.643107%2C32.1105228 147.908156%2C32.504197 L147.908156%2C39 L147%2C39 Z%22 id%3D%22Path%22 fill%3D%22%23FFFFFF%22%3E%3C%2Fpath%3E%0D                %3Cpath d%3D%22M160.702128%2C38.0313704 L160.731915%2C38.7842598 C160.731915%2C38.7842598 159.051064%2C39 157.889362%2C39 C155.668085%2C39 155%2C37.5998899 155%2C35.0374243 C155%2C32.0654926 156.251064%2C31 158.068085%2C31 C159.987234%2C31 161%2C32.0654926 161%2C34.6543753 L160.970213%2C35.3940561 L155.906383%2C35.3940561 C155.906383%2C37.2124381 156.412766%2C38.1810677 157.978723%2C38.1810677 C159.06383%2C38.1678591 160.702128%2C38.0313704 160.702128%2C38.0313704 Z M160.106383%2C34.6103467 C160.106383%2C32.5277931 159.468085%2C31.7881123 158.068085%2C31.7881123 C156.668085%2C31.7881123 155.906383%2C32.5586131 155.906383%2C34.6103467 L160.106383%2C34.6103467 Z%22 id%3D%22Shape%22 fill%3D%22%23FFFFFF%22%3E%3C%2Fpath%3E%0D            %3C%2Fg%3E%0D        %3C%2Fg%3E%0D    %3C%2Fg%3E%0D%3C%2Fsvg%3E\");\r\n  background-repeat: no-repeat;\r\n  background-size: contain;\r\n  width: 160px;\r\n  height: 60px;\r\n  margin: 10px;\r\n}\r\n\r\n@media (max-width: 700px) {\r\n  [_nghost-%COMP%] {\r\n    width: 100px;\r\n  }\r\n\r\n  .navbar-title-pic[_ngcontent-%COMP%] {\r\n    width: 80px;\r\n    height: 30px;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1FQUFtRTtFQUNuRSxZQUFZO0VBQ1osYUFBYTtFQUNiLHlCQUF5QjtFQUN6Qiw2QkFBNkI7RUFDN0IsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0Usc2xRQUFzbFE7RUFDdGxRLDRCQUE0QjtFQUM1Qix3QkFBd0I7RUFDeEIsWUFBWTtFQUNaLFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBRUE7RUFDRTtJQUNFLFlBQVk7RUFDZDs7RUFFQTtJQUNFLFdBQVc7SUFDWCxZQUFZO0VBQ2Q7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgIzIyYzFjMyAwJSwgIzAwNGE2MSAxMDAlKTtcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICAvKiBhbGlnbi1pdGVtczogY2VudGVyOyAqL1xyXG4gIC8qIGp1c3RpZnktY29udGVudDogY2VudGVyOyAqL1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5zaWRlYmFyLWRpdmlkZXIge1xyXG4gIG1hcmdpbjogMCAxcmVtIDFyZW07XHJcbn1cclxuXHJcbmEge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLm5hdmJhci10aXRsZS1waWMge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0MlM0Z4bWwgdmVyc2lvbiUzRCUyMjEuMCUyMiBlbmNvZGluZyUzRCUyMlVURi04JTIyJTNGJTNFJTBEJTNDc3ZnIHdpZHRoJTNEJTIyMTYxcHglMjIgaGVpZ2h0JTNEJTIyNTZweCUyMiB2aWV3Qm94JTNEJTIyMCAwIDE2MSA1NiUyMiB2ZXJzaW9uJTNEJTIyMS4xJTIyIHhtbG5zJTNEJTIyaHR0cCUzQSUyRiUyRnd3dy53My5vcmclMkYyMDAwJTJGc3ZnJTIyIHhtbG5zJTNBeGxpbmslM0QlMjJodHRwJTNBJTJGJTJGd3d3LnczLm9yZyUyRjE5OTklMkZ4bGluayUyMiUzRSUwRCAgICAlM0MhLS0gR2VuZXJhdG9yJTNBIFNrZXRjaCA1My4yICg3MjY0MykgLSBodHRwcyUzQSUyRiUyRnNrZXRjaGFwcC5jb20gLS0lM0UlMEQgICAgJTNDdGl0bGUlM0VMSUZFX0xvZ28lM0MlMkZ0aXRsZSUzRSUwRCAgICAlM0NkZXNjJTNFQ3JlYXRlZCB3aXRoIFNrZXRjaC4lM0MlMkZkZXNjJTNFJTBEICAgICUzQ2cgaWQlM0QlMjJQYWdlLTElMjIgc3Ryb2tlJTNEJTIybm9uZSUyMiBzdHJva2Utd2lkdGglM0QlMjIxJTIyIGZpbGwlM0QlMjJub25lJTIyIGZpbGwtcnVsZSUzRCUyMmV2ZW5vZGQlMjIlM0UlMEQgICAgICAgICUzQ2cgaWQlM0QlMjJMb2dpbi1Db3B5JTIyIHRyYW5zZm9ybSUzRCUyMnRyYW5zbGF0ZSgtNDk0LjAwMDAwMCUyQyAtMTE0LjAwMDAwMCklMjIgZmlsbC1ydWxlJTNEJTIybm9uemVybyUyMiUzRSUwRCAgICAgICAgICAgICUzQ2cgaWQlM0QlMjJMSUZFX0xvZ28lMjIgdHJhbnNmb3JtJTNEJTIydHJhbnNsYXRlKDQ5NC4wMDAwMDAlMkMgMTE0LjAwMDAwMCklMjIlM0UlMEQgICAgICAgICAgICAgICAgJTNDcG9seWdvbiBpZCUzRCUyMlBhdGglMjIgZmlsbCUzRCUyMiUyM0QwRDcwMCUyMiBwb2ludHMlM0QlMjIyMy40NTUgMTAgMjMuNDc1IDkuOTk1NDcxMDEgMjMuNTQ1IDAgMjMuNTE1IDAuMDA0NTI4OTg1NTEgMjMuNDU1IDkuOTk1NDcxMDElMjIlM0UlM0MlMkZwb2x5Z29uJTNFJTBEICAgICAgICAgICAgICAgICUzQ3BvbHlnb24gaWQlM0QlMjJQYXRoJTIyIGZpbGwlM0QlMjIlMjNGRkZGRkYlMjIgcG9pbnRzJTNEJTIyMjMuOTg0OTA0MyA0Ni4zMTU2MTkyIDIzLjk4MDU5MTIgNDYuMzExMjI5MiAyMy45ODA1OTEyIDQ2LjMxNTYxOTIgMTMuMDQ2OTk0MyAzOS44NDQ3MzIgOC4yNTA4NzYwOSAzNy4wMDg3OCA4LjI1MDg3NjA5IDM3IDguMjQyMjQ5OTggMzcuMDA4NzggMCA0MS44MTU4NTAzIDAgNDEuODIwMjQwMyAyMy45NTQ3MTI5IDU2IDQ4IDQxLjk3Mzg5MDkgMzkuNzcwNjg5MiAzNy4xMDUzNjA0JTIyJTNFJTNDJTJGcG9seWdvbiUzRSUwRCAgICAgICAgICAgICAgICAlM0Nwb2x5Z29uIGlkJTNEJTIyUGF0aCUyMiBmaWxsLW9wYWNpdHklM0QlMjIwLjg0Nzc2NTUxNiUyMiBmaWxsJTNEJTIyJTIzRkZGRkZGJTIyIHBvaW50cyUzRCUyMjM5LjczNjc4NTMgMTguODIwODM2OCAzOS42ODA2OTA0IDM3LjE3NjI2MzUgNDcuOTEzNzAwMSA0MiA0OCAxNC4wNDkyOTU4IDI0LjAzMDIwNSAwIDI0IDkuNTk5NjI3MTclMjIlM0UlM0MlMkZwb2x5Z29uJTNFJTBEICAgICAgICAgICAgICAgICUzQ3BvbHlnb24gaWQlM0QlMjJQYXRoJTIyIGZpbGwtb3BhY2l0eSUzRCUyMjAuNjU3OTQzNjE5JTIyIGZpbGwlM0QlMjIlMjNGRkZGRkYlMjIgcG9pbnRzJTNEJTIyMC4wMTI4NzA5MzMxIDQxLjk5NTYzNDUgOC4yMTE2NTUzNSAzNy4yMTU0NjYyIDguMjIwMjM1OTcgMzcuMjA2NzM1MyA4LjI3NjAxMDAxIDE4Ljc4ODg5OTMgMjMuOTc0MjU4MSA5LjYzODkxNDg3IDIzLjk3NDI1ODEgOS42MzQ1NDk0MiAyNCAwLjAwNDM2NTQ1MDU4IDI0IDAgMC4wODU4MDYyMjEgMTMuOTUxOTggMCA0MiUyMiUzRSUzQyUyRnBvbHlnb24lM0UlMEQgICAgICAgICAgICAgICAgJTNDcG9seWdvbiBpZCUzRCUyMlBhdGglMjIgZmlsbCUzRCUyMiUyM0ZGRkZGRiUyMiBwb2ludHMlM0QlMjIxNC4wMzUxNjg1IDIxLjc0NzYxMTcgMjMuOTgwNjI4MyAyNy45MDkzOTc0IDM0IDIxLjc4NTQyNzggMjMuOTgwNjI4MyAxNiAxNC4wMzUxNjg1IDIxLjc0NzYxMTcgMTQgMzMuOTk1NTUxMSAxNCAzNCUyMiUzRSUzQyUyRnBvbHlnb24lM0UlMEQgICAgICAgICAgICAgICAgJTNDcG9seWdvbiBpZCUzRCUyMlBhdGglMjIgZmlsbC1vcGFjaXR5JTNEJTIyMC42NiUyMiBmaWxsJTNEJTIyJTIzRkZGRkZGJTIyIHBvaW50cyUzRCUyMjI0LjAzNzU0NjkgMjcuOTgxMDgxNyAyNCA0MCAzMy45NjY2MjQ5IDM0LjAyMzI4NCAzNCAyMiUyMiUzRSUzQyUyRnBvbHlnb24lM0UlMEQgICAgICAgICAgICAgICAgJTNDcG9seWdvbiBpZCUzRCUyMlBhdGglMjIgZmlsbC1vcGFjaXR5JTNEJTIyMC44NSUyMiBmaWxsJTNEJTIyJTIzRkZGRkZGJTIyIHBvaW50cyUzRCUyMjE0LjAzMzUwMDggMjIgMTQgMzMuOTc5NzAwMyAxNy4wMzYwMTM0IDM1LjgxNTM2OTcgMjMuOTY2NDk5MiA0MCAyMy45NjY0OTkyIDM5Ljk5NTY1MDEgMjQgMjguMDI0NjQ5NiUyMiUzRSUzQyUyRnBvbHlnb24lM0UlMEQgICAgICAgICAgICAgICAgJTNDcG9seWdvbiBpZCUzRCUyMlBhdGglMjIgZmlsbCUzRCUyMiUyM0ZGRkZGRiUyMiBwb2ludHMlM0QlMjI1NCAxNCA1OC4xNTcyMTg0IDE0IDU4LjE1NzIxODQgMzcuOTk3NDg2NiA2NSAzNy45OTc0ODY2IDY1IDQyIDU0IDQyJTIyJTNFJTNDJTJGcG9seWdvbiUzRSUwRCAgICAgICAgICAgICAgICAlM0Nwb2x5Z29uIGlkJTNEJTIyUGF0aCUyMiBmaWxsJTNEJTIyJTIzRkZGRkZGJTIyIHBvaW50cyUzRCUyMjY4IDE0IDcyIDE0IDcyIDQyIDY4IDQyJTIyJTNFJTNDJTJGcG9seWdvbiUzRSUwRCAgICAgICAgICAgICAgICAlM0Nwb2x5Z29uIGlkJTNEJTIyUGF0aCUyMiBmaWxsJTNEJTIyJTIzRkZGRkZGJTIyIHBvaW50cyUzRCUyMjgwLjE1NzIxODQgMjYuNDU2MTczNCA4NS41MjQxODc1IDI2LjQ1NjE3MzQgODUuNTI0MTg3NSAzMC40NTg2ODY4IDgwLjE1NzIxODQgMzAuNDU4Njg2OCA4MC4xNTcyMTg0IDQyIDc2IDQyIDc2IDE0IDg3IDE0IDg3IDE3Ljk5ODExNSA4MC4xNTcyMTg0IDE3Ljk5ODExNSUyMiUzRSUzQyUyRnBvbHlnb24lM0UlMEQgICAgICAgICAgICAgICAgJTNDcG9seWdvbiBpZCUzRCUyMlBhdGglMjIgZmlsbCUzRCUyMiUyM0ZGRkZGRiUyMiBwb2ludHMlM0QlMjI5NC40MDE2MTIzIDI1LjgwMDgxNjggMTAwLjQzODk4OSAyNS44MDA4MTY4IDEwMC40Mzg5ODkgMjkuNzk4OTMxOCA5NC40MDE2MTIzIDI5Ljc5ODkzMTggOTQuNDAxNjEyMyAzNy45OTc0ODY2IDEwMiAzNy45OTc0ODY2IDEwMiA0MiA5MCA0MiA5MCAxNCAxMDIgMTQgMTAyIDE3Ljk5ODExNSA5NC40MDE2MTIzIDE3Ljk5ODExNSUyMiUzRSUzQyUyRnBvbHlnb24lM0UlMEQgICAgICAgICAgICAgICAgJTNDcGF0aCBkJTNEJTIyTTEyMCUyQzM0LjYwMzI4NzMgQzEyMCUyQzM4LjA5OTczODUgMTE5LjEzNDg4JTJDMzguNDgwNzYyIDExNy44MzcyJTJDMzguNDgwNzYyIEMxMTYuNTM5NTIlMkMzOC40ODA3NjIgMTE2LjQxODQwMyUyQzM3LjY3Mzg4ODcgMTE2LjQxODQwMyUyQzM3LjY3Mzg4ODcgQzExNi40MTg0MDMlMkMzNy42NzM4ODg3IDExNS4xMjA3MjQlMkMzOC40NjczMTQyIDExNC4xNDc0NjQlMkMzOC40NjczMTQyIEMxMTMuMTc0MjA0JTJDMzguNDY3MzE0MiAxMTEuOTg0NjY0JTJDMzguMTUzNTMwMSAxMTEuOTg0NjY0JTJDMzUuMTkwNTExOCBDMTExLjk4NDY2NCUyQzMyLjk5NDAyMzIgMTEyLjU1OTk2OSUyQzMxLjc4MzcxMzEgMTE0LjU1ODM5NiUyQzMxLjc4MzcxMzEgQzExNS4wODEyMjMlMkMzMS44MjE2MjM2IDExNS41OTU3NjglMkMzMS45Mzk0NDY0IDExNi4wODUzMzIlMkMzMi4xMzMzNTgyIEwxMTYuMDg1MzMyJTJDMzEuOTEzNzA5NCBMMTE2Ljg0MjMxMiUyQzMxLjkxMzcwOTQgTDExNi44NDIzMTIlMkMzNC40NDYzOTUyIEMxMTYuODQyMzEyJTJDMzcuNDkwMTAwOSAxMTYuOTAyODcxJTJDMzcuODE3MzMyOCAxMTcuODgwNDU2JTJDMzcuODE3MzMyOCBDMTE4LjY4NTAxOCUyQzM3LjgxNzMzMjggMTE5LjIxMjc0MSUyQzM3LjYwNjY0OTIgMTE5LjIxMjc0MSUyQzM0LjYwMzI4NzMgTDExOS4yMTI3NDElMkMzNC4zOTcwODYzIEMxMTkuMjEyNzQxJTJDMzEuMTMzNzMxOCAxMTcuOTU4MzE3JTJDMjkuNjkwMzI1IDExNC42NDQ5MDglMkMyOS42OTAzMjUgQzExMS4zMzE0OTglMkMyOS42OTAzMjUgMTA5Ljc3NDI4MiUyQzMxLjE2MDYyNzYgMTA5Ljc3NDI4MiUyQzM0Ljk3OTgyODIgQzEwOS43NzQyODIlMkMzOS4wMTQxOTUgMTExLjI3MDk0JTJDNDAuMzAwNzA5NyAxMTQuNjQ0OTA4JTJDNDAuMzAwNzA5NyBDMTE1LjE3MjYzMSUyQzQwLjMwMDcwOTcgMTE2LjQ0MDAzMSUyQzQwLjE3MDcxMzUgMTE2LjQ0MDAzMSUyQzQwLjE3MDcxMzUgTDExNi40NzQ2MzYlMkM0MC44NzAwMDM3IEMxMTYuNDc0NjM2JTJDNDAuODcwMDAzNyAxMTUuMjcyMTIlMkM0MSAxMTQuNjQ0OTA4JTJDNDEgQzExMC45MjkyMTclMkM0MSAxMDklMkMzOS42NTUyMTExIDEwOSUyQzM0Ljk3OTgyODIgQzEwOSUyQzMwLjY0OTYwNzggMTEwLjk5NDEwMSUyQzI5IDExNC42NDQ5MDglMkMyOSBDMTE4LjQzNDEzMyUyQzI5IDExOS45OTEzNDklMkMzMC43NTcxOTA5IDExOS45OTEzNDklMkMzNC40MTA1MzQyIEwxMjAlMkMzNC42MDMyODczIFogTTExNi4yMjM3NTElMkMzNy4xMDAxMTIxIEMxMTYuMTM1NzMzJTJDMzYuMjg0NDg0NCAxMTYuMDkyNDA4JTJDMzUuNDY0MzQxNCAxMTYuMDkzOTgzJTJDMzQuNjQzNjMwOSBMMTE2LjA5Mzk4MyUyQzMyLjc4MzMzOTYgQzExNS42MzM5MTElMkMzMi42MTUxMDg4IDExNS4xNTM0OSUyQzMyLjUxNDAyNzggMTE0LjY2NjUzNiUyQzMyLjQ4MzAwMzQgQzExMy4wOTYzNDMlMkMzMi40ODMwMDM0IDExMi43NDU5NjklMkMzMy40MzMzMjA5IDExMi43NDU5NjklMkMzNS4yMTc0MDc1IEMxMTIuNzQ1OTY5JTJDMzcuNDU4NzIyNSAxMTMuNTM3NTU0JTJDMzcuNzYzNTQxMyAxMTQuMTk5MzcxJTJDMzcuNzYzNTQxMyBDMTE0LjkwNjYlMkMzNy42Njc2NjcgMTE1LjU5MTkyNCUyQzM3LjQ0MzA3MjcgMTE2LjIyMzc1MSUyQzM3LjEwMDExMjEgTDExNi4yMjM3NTElMkMzNy4xMDAxMTIxIFolMjIgaWQlM0QlMjJTaGFwZSUyMiBmaWxsJTNEJTIyJTIzRkZGRkZGJTIyJTNFJTNDJTJGcGF0aCUzRSUwRCAgICAgICAgICAgICAgICAlM0NwYXRoIGQlM0QlMjJNMTI4LjY5NTg1MyUyQzMyLjA1NzI2ODcgQzEyNy43NzA2MzIlMkMzMS45MjQ0MTE2IDEyNi44MzgyNDYlMkMzMS44NDIwNDYyIDEyNS45MDMyMjYlMkMzMS44MTA1NzI3IEMxMjQuOTAzMjI2JTJDMzEuODEwNTcyNyAxMjQlMkMzMi4wNzA0ODQ2IDEyNCUyQzMzLjEzMjE1ODYgQzEyNCUyQzMzLjkzMzkyMDcgMTI0LjQwNTUzJTJDMzQuMTY3NDAwOSAxMjYuMTYxMjklMkMzNC40NTM3NDQ1IEMxMjguMjI1ODA2JTJDMzQuNzc1MzMwNCAxMjklMkMzNS4xMzIxNTg2IDEyOSUyQzM2LjYxMjMzNDggQzEyOSUyQzM4LjQxNDA5NjkgMTI3LjgyNDg4NSUyQzM5IDEyNS44ODk0MDElMkMzOSBDMTI0Ljk2Mjc2MiUyQzM4Ljk2MDQ3ODEgMTI0LjAzOTQ0MSUyQzM4Ljg2NzgwMDMgMTIzLjEyNDQyNCUyQzM4LjcyMjQ2NyBMMTIzLjE4ODk0JTJDMzcuOTA3NDg5IEMxMjQuMDYwODglMkMzOC4wMzY2ODQ3IDEyNC45MzkxMjUlMkMzOC4xMjM0MzM5IDEyNS44MjAyNzYlMkMzOC4xNjc0MDA5IEMxMjcuMjAyNzY1JTJDMzguMTY3NDAwOSAxMjguMDEzODI1JTJDMzcuODU5MDMwOCAxMjguMDEzODI1JTJDMzYuNjU2Mzg3NyBDMTI4LjAxMzgyNSUyQzM1LjczMTI3NzUgMTI3LjUyOTk1NCUyQzM1LjUzMzAzOTYgMTI1LjcwOTY3NyUyQzM1LjI2ODcyMjUgQzEyMy44ODk0MDElMkMzNS4wMDQ0MDUzIDEyMyUyQzM0LjY2OTYwMzUgMTIzJTJDMzMuMTcxODA2MiBDMTIzJTJDMzEuNDkzMzkyMSAxMjQuNDUxNjEzJTJDMzEgMTI1Ljg1MjUzNSUyQzMxIEMxMjYuODA5ODk3JTJDMzEuMDI1ODgyNSAxMjcuNzY0MzkyJTJDMzEuMTEyNzEyMSAxMjguNzA5Njc3JTJDMzEuMjU5OTExOSBMMTI4LjY5NTg1MyUyQzMyLjA1NzI2ODcgWiUyMiBpZCUzRCUyMlBhdGglMjIgZmlsbCUzRCUyMiUyM0ZGRkZGRiUyMiUzRSUzQyUyRnBhdGglM0UlMEQgICAgICAgICAgICAgICAgJTNDcG9seWdvbiBpZCUzRCUyMlBhdGglMjIgZmlsbCUzRCUyMiUyM0ZGRkZGRiUyMiBwb2ludHMlM0QlMjIxMzEuODYyMzI0IDMxIDEzMy43MzYwNjQgMzcuNzk1OTAyMyAxMzQuMjQzNzg4IDM3Ljc5NTkwMjMgMTM2LjEzMzY0NyAzMSAxMzcgMzEgMTMzLjk0OTYzMSA0MiAxMzMuMTAzNDI1IDQyIDEzNC4wNDYzNCAzOC41ODQ3MTI0IDEzMy4wNzUyMTggMzguNTg0NzEyNCAxMzEgMzElMjIlM0UlM0MlMkZwb2x5Z29uJTNFJTBEICAgICAgICAgICAgICAgICUzQ3BhdGggZCUzRCUyMk0xNDQlMkMzNC44OTQ1MDU1IEMxNDQlMkMzNy44IDE0My4zOTg3NzMlMkMzOSAxNDEuMDA2MTM1JTJDMzkgQzEzOC42MTM0OTclMkMzOSAxMzglMkMzNy44IDEzOCUyQzM0Ljg5NDUwNTUgQzEzOCUyQzMyLjE2OTIzMDggMTM4Ljc4OTM2NiUyQzMxIDE0MS4wMDYxMzUlMkMzMSBDMTQzLjIyMjkwNCUyQzMxIDE0NCUyQzMyLjE1NjA0NCAxNDQlMkMzNC44OTQ1MDU1IFogTTE0My4xMjQ3NDQlMkMzNC44OTQ1MDU1IEMxNDMuMTI0NzQ0JTJDMzIuNTg2ODEzMiAxNDIuNjM4MDM3JTJDMzEuODE3NTgyNCAxNDEuMDA2MTM1JTJDMzEuODE3NTgyNCBDMTM5LjM3NDIzMyUyQzMxLjgxNzU4MjQgMTM4Ljg4NzUyNiUyQzMyLjU4NjgxMzIgMTM4Ljg4NzUyNiUyQzM0Ljg5NDUwNTUgQzEzOC44ODc1MjYlMkMzNy4yMDIxOTc4IDEzOS4xNDUxOTQlMkMzOC4xODY4MTMyIDE0MS4wMDYxMzUlMkMzOC4xODY4MTMyIEMxNDIuODY3MDc2JTJDMzguMTg2ODEzMiAxNDMuMTI0NzQ0JTJDMzcuMjQ2MTUzOCAxNDMuMTI0NzQ0JTJDMzQuODk0NTA1NSBaJTIyIGlkJTNEJTIyU2hhcGUlMjIgZmlsbCUzRCUyMiUyM0ZGRkZGRiUyMiUzRSUzQyUyRnBhdGglM0UlMEQgICAgICAgICAgICAgICAgJTNDcGF0aCBkJTNEJTIyTTE0NyUyQzM5IEwxNDclMkMzMS4xNjU2NDA3IEwxNDcuOTA4MTU2JTJDMzEuMTY1NjQwNyBMMTQ3LjkwODE1NiUyQzMxLjczODY2ODIgQzE0OC42ODQyODclMkMzMS4zMDkyOTQ3IDE0OS41NDMzODYlMkMzMS4wNTcyMDAzIDE1MC40MjU0MjIlMkMzMSBDMTUyLjUzNzEwNSUyQzMxIDE1MyUyQzMyLjAwMjc5OCAxNTMlMkMzNC44NzI0MTE5IEwxNTMlMkMzOC45OTEwNDY0IEwxNTIuMDc0MjElMkMzOC45OTEwNDY0IEwxNTIuMDc0MjElMkMzNC45MTcxNzk2IEMxNTIuMDc0MjElMkMzMi42MTYxMTY0IDE1MS44MjczMzMlMkMzMS44NDYxMTA4IDE1MC4yODQzNSUyQzMxLjg0NjExMDggQzE0OS40NTQzNDMlMkMzMS44ODU4NTEzIDE0OC42NDMxMDclMkMzMi4xMTA1MjI4IDE0Ny45MDgxNTYlMkMzMi41MDQxOTcgTDE0Ny45MDgxNTYlMkMzOSBMMTQ3JTJDMzkgWiUyMiBpZCUzRCUyMlBhdGglMjIgZmlsbCUzRCUyMiUyM0ZGRkZGRiUyMiUzRSUzQyUyRnBhdGglM0UlMEQgICAgICAgICAgICAgICAgJTNDcGF0aCBkJTNEJTIyTTE2MC43MDIxMjglMkMzOC4wMzEzNzA0IEwxNjAuNzMxOTE1JTJDMzguNzg0MjU5OCBDMTYwLjczMTkxNSUyQzM4Ljc4NDI1OTggMTU5LjA1MTA2NCUyQzM5IDE1Ny44ODkzNjIlMkMzOSBDMTU1LjY2ODA4NSUyQzM5IDE1NSUyQzM3LjU5OTg4OTkgMTU1JTJDMzUuMDM3NDI0MyBDMTU1JTJDMzIuMDY1NDkyNiAxNTYuMjUxMDY0JTJDMzEgMTU4LjA2ODA4NSUyQzMxIEMxNTkuOTg3MjM0JTJDMzEgMTYxJTJDMzIuMDY1NDkyNiAxNjElMkMzNC42NTQzNzUzIEwxNjAuOTcwMjEzJTJDMzUuMzk0MDU2MSBMMTU1LjkwNjM4MyUyQzM1LjM5NDA1NjEgQzE1NS45MDYzODMlMkMzNy4yMTI0MzgxIDE1Ni40MTI3NjYlMkMzOC4xODEwNjc3IDE1Ny45Nzg3MjMlMkMzOC4xODEwNjc3IEMxNTkuMDYzODMlMkMzOC4xNjc4NTkxIDE2MC43MDIxMjglMkMzOC4wMzEzNzA0IDE2MC43MDIxMjglMkMzOC4wMzEzNzA0IFogTTE2MC4xMDYzODMlMkMzNC42MTAzNDY3IEMxNjAuMTA2MzgzJTJDMzIuNTI3NzkzMSAxNTkuNDY4MDg1JTJDMzEuNzg4MTEyMyAxNTguMDY4MDg1JTJDMzEuNzg4MTEyMyBDMTU2LjY2ODA4NSUyQzMxLjc4ODExMjMgMTU1LjkwNjM4MyUyQzMyLjU1ODYxMzEgMTU1LjkwNjM4MyUyQzM0LjYxMDM0NjcgTDE2MC4xMDYzODMlMkMzNC42MTAzNDY3IFolMjIgaWQlM0QlMjJTaGFwZSUyMiBmaWxsJTNEJTIyJTIzRkZGRkZGJTIyJTNFJTNDJTJGcGF0aCUzRSUwRCAgICAgICAgICAgICUzQyUyRmclM0UlMEQgICAgICAgICUzQyUyRmclM0UlMEQgICAgJTNDJTJGZyUzRSUwRCUzQyUyRnN2ZyUzRVwiKTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICB3aWR0aDogMTYwcHg7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG4gIG1hcmdpbjogMTBweDtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDcwMHB4KSB7XHJcbiAgOmhvc3Qge1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gIH1cclxuXHJcbiAgLm5hdmJhci10aXRsZS1waWMge1xyXG4gICAgd2lkdGg6IDgwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidebarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sidebar',
                templateUrl: './sidebar.component.html',
                styleUrls: ['./sidebar.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/simulations/simulations.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/simulations/simulations.component.ts ***!
  \*****************************************************************/
/*! exports provided: SimulationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimulationsComponent", function() { return SimulationsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _utils_nameSplitUpper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_utils/nameSplitUpper */ "./src/app/_utils/nameSplitUpper.ts");
/* harmony import */ var _services_simulation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/simulation.service */ "./src/app/services/simulation.service.ts");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-table.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-api.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

// Utils






function SimulationsComponent_ng_template_5_th_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const col_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", col_r4.header, " ");
} }
function SimulationsComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SimulationsComponent_ng_template_5_th_1_Template, 2, 1, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const columns_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", columns_r2);
} }
function SimulationsComponent_ng_template_6_td_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const col_r8 = ctx.$implicit;
    const rowData_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", rowData_r5[col_r8.field], " ");
} }
function SimulationsComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SimulationsComponent_ng_template_6_td_1_Template, 2, 1, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const columns_r6 = ctx.columns;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", columns_r6);
} }
class SimulationsComponent {
    constructor(simulationservice) {
        this.simulationservice = simulationservice;
        this.NameSplitUpper = _utils_nameSplitUpper__WEBPACK_IMPORTED_MODULE_1__["default"];
    }
    ngOnInit() {
        // API Data
        this.simulationservice.getSimulations().subscribe((simulations) => {
            this.irsSimulations = simulations;
            console.log('irsSimulations');
            console.log(this.irsSimulations);
            this.cols = [
                { field: 'id', header: '' },
                { field: 'date', header: 'Data' },
                { field: 'name', header: 'Nome' },
                { field: 'position', header: 'Posição' },
                { field: 'baseSalaryMonthGross', header: 'Salario Gross' },
                { field: 'baseSalaryMonthNet', header: 'Salario Net' },
                { field: 'baseSalaryYearGross', header: 'Salario Gross / Ano' },
                { field: 'baseSalaryYearNet', header: 'Salario Net / Ano' },
            ];
        });
    }
}
SimulationsComponent.ɵfac = function SimulationsComponent_Factory(t) { return new (t || SimulationsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_simulation_service__WEBPACK_IMPORTED_MODULE_2__["SimulationService"])); };
SimulationsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SimulationsComponent, selectors: [["app-simulations"]], decls: 7, vars: 2, consts: [[1, "jumbotron", "text-center"], [1, "container"], [3, "columns", "value"], ["pTemplate", "header"], ["pTemplate", "body"], [4, "ngFor", "ngForOf"]], template: function SimulationsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Simula\u00E7\u00F5es");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p-table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SimulationsComponent_ng_template_5_Template, 2, 1, "ng-template", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SimulationsComponent_ng_template_6_Template, 2, 1, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("columns", ctx.cols)("value", ctx.irsSimulations);
    } }, directives: [primeng_table__WEBPACK_IMPORTED_MODULE_3__["Table"], primeng_api__WEBPACK_IMPORTED_MODULE_4__["PrimeTemplate"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SimulationsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-simulations',
                template: `
    <div class="jumbotron text-center">
      <h1>Simulações</h1>

      <div class="container">
        <p-table [columns]="cols" [value]="irsSimulations">
          <ng-template pTemplate="header" let-columns>
            <tr>
              <th *ngFor="let col of columns">
                {{ col.header }}
              </th>
            </tr>
          </ng-template>
          <ng-template pTemplate="body" let-rowData let-columns="columns">
            <tr>
              <td *ngFor="let col of columns">
                {{ rowData[col.field] }}
              </td>
            </tr>
          </ng-template>
        </p-table>
        <!-- -->
      </div>
    </div>
  `,
                styles: [],
            }]
    }], function () { return [{ type: _services_simulation_service__WEBPACK_IMPORTED_MODULE_2__["SimulationService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/simulator/simulator.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/simulator/simulator.component.ts ***!
  \*************************************************************/
/*! exports provided: SimulatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimulatorComponent", function() { return SimulatorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _classes_Calculator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_classes/Calculator */ "./src/app/_classes/Calculator.ts");
/* harmony import */ var _utils_nameSplitUpper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_utils/nameSplitUpper */ "./src/app/_utils/nameSplitUpper.ts");
/* harmony import */ var _services_colaborador_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/colaborador.service */ "./src/app/services/colaborador.service.ts");
/* harmony import */ var _services_nivel_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/nivel.service */ "./src/app/services/nivel.service.ts");
/* harmony import */ var _services_area_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/area.service */ "./src/app/services/area.service.ts");
/* harmony import */ var _services_maritalStatus_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/maritalStatus.service */ "./src/app/services/maritalStatus.service.ts");
/* harmony import */ var _services_irsUser_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/irsUser.service */ "./src/app/services/irsUser.service.ts");
/* harmony import */ var _services_simulation_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/simulation.service */ "./src/app/services/simulation.service.ts");
/* harmony import */ var _services_irsCalc_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/irsCalc.service */ "./src/app/services/irsCalc.service.ts");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/dropdown */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-dropdown.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

// Classes

// Utils












class SimulatorComponent extends _classes_Calculator__WEBPACK_IMPORTED_MODULE_1__["Calculator"] {
    constructor(colaboradorService, nivelService, areaService, maritalStatusService, irsUserService, simulationservice, irsCalcService) {
        super();
        this.colaboradorService = colaboradorService;
        this.nivelService = nivelService;
        this.areaService = areaService;
        this.maritalStatusService = maritalStatusService;
        this.irsUserService = irsUserService;
        this.simulationservice = simulationservice;
        this.irsCalcService = irsCalcService;
    }
    ngOnInit() {
        console.log('START ngOnInit');
        this.defaultValues();
        this.calcs();
        // Inicial API Requests do apiData()
        this.dependents = [
            {
                id: 0,
                number: '0',
            },
            {
                id: 1,
                number: '1',
            },
            {
                id: 2,
                number: '2',
            },
            {
                id: 3,
                number: '3',
            },
            {
                id: 4,
                number: '4',
            },
            {
                id: 5,
                number: '5+',
            },
        ];
        // API Data
        this.colaboradorService.getColaboradores().subscribe((users) => {
            this.colaboradores = users;
            // console.log(this.colaboradores);
        });
        this.nivelService.getNivels().subscribe((data) => {
            this.nivels = data;
            // console.log(this.nivels);
        });
        this.areaService.getAreas().subscribe((data) => {
            this.areas = data;
            // console.log(this.areas);
        });
        this.maritalStatusService.getMaritalStates().subscribe((data) => {
            this.maritalStates = data;
            console.log(this.maritalStates);
        });
    }
    getIrs() {
        this.currentIrs = {
            vencimento: this.baseSalary ? Number(this.baseSalary) : 0,
            maritalStatus: this.selectedMaritalStatus
                ? Number(this.selectedMaritalStatus.id)
                : 1,
            dependents: this.selectedDependents
                ? Number(this.selectedDependents.id)
                : 0,
        };
        console.log(this.currentIrs);
        this.irsCalcService.getIrs(this.currentIrs).subscribe((irscalc) => {
            this.irs = irscalc['irs'] / 100;
            console.log(this.irs);
        });
    }
    colaboradorSelected() {
        console.log(this.selectedColaborador ? this.selectedColaborador.colaboradorid : 0);
        console.log(this.selectedColaborador);
        this.baseSalary = this.selectedColaborador.vencimento;
        this.calcs();
    }
    nivelFilter() {
        this.areaNivels = this.nivels.filter((x) => x.areaid === (this.selectedArea ? this.selectedArea.id : 'none'));
        // console.log(this.selectedArea ? this.selectedArea.id : 'none');
        // console.log(this.positionFiltered);
    }
    nivelSelected() {
        // console.log(this.selectedNivel ? this.selectedNivel.nivelid : 'none');
        // console.log(this.selectedNivel);
        this.baseSalary = this.selectedNivel.vencimento;
        this.calcs();
    }
    saveIrsUser() {
        this.currentUser = {
            id: this.selectedColaborador ? this.selectedColaborador.colaboradorid : 0,
            nome: this.selectedColaborador.nome
                ? String(this.selectedColaborador.nome)
                : '',
            nivel: this.selectedNivel ? String(this.selectedNivel.desc) : '',
            nivelid: this.selectedNivel ? Number(this.selectedNivel.nivelid) : 1,
            marital_Status_Id: this.selectedMaritalStatus
                ? Number(this.selectedMaritalStatus.id)
                : 1,
            dependents: this.selectedDependents
                ? Number(this.selectedDependents.id)
                : 0,
            months: this.numberOfMonths ? Number(this.numberOfMonths) : 0,
            days_Months: this.numberOfDaysMonth ? Number(this.numberOfDaysMonth) : 0,
            target_Margin: this.targetMargin ? Number(this.targetMargin) : 0,
            justified_Expenses: this.justifiedExpenses
                ? Number(this.justifiedExpenses)
                : 0,
            bonus: this.bonus ? Number(this.bonus) : 0,
            daily_Rate: this.proposedDailyRate ? Number(this.proposedDailyRate) : 0,
            car_Type: this.carType ? Number(this.carType) : 0,
            car_Value: this.carTotalValue ? Number(this.carTotalValue) : 0,
            car_Fuel: this.carFuel ? Number(this.carFuel) : 0,
            car_Expenses: this.carExpenses ? Number(this.carExpenses) : 0,
            extra_Tax: this.extraTax ? Number(this.extraTax) : 0,
            food: this.subsRefeicaoMonthNet ? Number(this.subsRefeicaoMonthNet) : 0,
        };
        console.log(this.currentUser);
        // this.userService.addIrsUsers(this.currentUser).subscribe();
        this.irsUserService
            .editIrsUsers(this.currentUser, this.selectedColaborador.colaboradorid)
            .subscribe();
    }
    saveIrsSimulation() {
        this.simulationUser = {
            date: new Date(),
            name: this.selectedColaborador
                ? String(Object(_utils_nameSplitUpper__WEBPACK_IMPORTED_MODULE_2__["default"])(this.selectedColaborador.nome))
                : '',
            syone_User_Name: this.selectedColaborador
                ? String(this.selectedColaborador.nome)
                : '',
            area: this.selectedArea ? String(this.selectedArea.name) : '',
            position: this.selectedNivel ? String(this.selectedNivel.desc) : '',
            marital_Status: this.selectedMaritalStatus
                ? String(this.selectedMaritalStatus.status)
                : '',
            dependents: this.dependets ? Number(this.dependets) : 0,
            months: 0,
            days_Months: 0,
            target_Margin: 0,
            justified_Expenses: 0,
            bonus: 0,
            daily_Rate: 0,
            car_Type: 0,
            car_Value: 0,
            car_Fuel: 0,
            car_Expenses: 0,
            extra_Tax: 0,
            food: 0,
            baseSalaryMonthGross: this.baseSalaryMonthGross
                ? Number(this.baseSalaryMonthGross)
                : 0,
            baseSalaryMonthNet: this.baseSalaryMonthNet
                ? Number(this.baseSalaryMonthNet)
                : 0,
            baseSalaryYearGross: this.baseSalaryYearGross
                ? Number(this.baseSalaryYearGross)
                : 0,
            baseSalaryYearNet: this.baseSalaryYearNet
                ? Number(this.baseSalaryYearNet)
                : 0,
            baseSalaryYearTotal: this.baseSalaryYearTotal
                ? Number(this.baseSalaryYearTotal)
                : 0,
            ihtMonthGross: this.ihtMonthGross ? Number(this.ihtMonthGross) : 0,
            ihtMonthNet: this.ihtMonthNet ? Number(this.ihtMonthNet) : 0,
            ihtYearGross: this.ihtYearGross ? Number(this.ihtYearGross) : 0,
            ihtYearNet: this.ihtYearNet ? Number(this.ihtYearNet) : 0,
            ihtTotal: this.ihtTotal ? Number(this.ihtTotal) : 0,
            subsRefeicaoMonthGross: this.subsRefeicaoMonthGross
                ? Number(this.subsRefeicaoMonthGross)
                : 0,
            subsRefeicaoMonthNet: this.subsRefeicaoMonthNet
                ? Number(this.subsRefeicaoMonthNet)
                : 0,
            subsRefeicaoYearGross: this.subsRefeicaoYearGross
                ? Number(this.subsRefeicaoYearGross)
                : 0,
            subsRefeicaoYearNet: this.subsRefeicaoYearNet
                ? Number(this.subsRefeicaoYearNet)
                : 0,
            subsRefeicaoTotal: this.subsRefeicaoTotal
                ? Number(this.subsRefeicaoTotal)
                : 0,
            justifiedExpensesMonthGross: this.justifiedExpensesMonthGross
                ? Number(this.justifiedExpensesMonthGross)
                : 0,
            justifiedExpensesMonthNet: this.justifiedExpensesMonthNet
                ? Number(this.justifiedExpensesMonthNet)
                : 0,
            justifiedExpensesYearGross: this.justifiedExpensesYearGross
                ? Number(this.justifiedExpensesYearGross)
                : 0,
            justifiedExpensesYearNet: this.justifiedExpensesYearNet
                ? Number(this.justifiedExpensesYearNet)
                : 0,
            justifiedExpensesTotal: this.justifiedExpensesTotal
                ? Number(this.justifiedExpensesTotal)
                : 0,
            carMonthGross: this.carMonthGross ? Number(this.carMonthGross) : 0,
            carMonthNet: this.carMonthNet ? Number(this.carMonthNet) : 0,
            carYearGross: this.carYearGross ? Number(this.carYearGross) : 0,
            carYearNet: this.carYearNet ? Number(this.carYearNet) : 0,
            carTotal: this.carTotal ? Number(this.carTotal) : 0,
            carExpensesMonthGross: this.carExpensesMonthGross
                ? Number(this.carExpensesMonthGross)
                : 0,
            carExpensesMonthNet: this.carExpensesMonthNet
                ? Number(this.carExpensesMonthNet)
                : 0,
            carExpensesYearGross: this.carExpensesYearGross
                ? Number(this.carExpensesYearGross)
                : 0,
            carExpensesYearNet: this.carExpensesYearNet
                ? Number(this.carExpensesYearNet)
                : 0,
            carExpensesTotal: this.carExpensesTotal
                ? Number(this.carExpensesTotal)
                : 0,
            carFuelMonthGross: this.carFuelMonthGross
                ? Number(this.carFuelMonthGross)
                : 0,
            carFuelMonthNet: this.carFuelMonthNet ? Number(this.carFuelMonthNet) : 0,
            carFuelYearGross: this.carFuelYearGross
                ? Number(this.carFuelYearGross)
                : 0,
            carFuelYearNet: this.carFuelYearNet ? Number(this.carFuelYearNet) : 0,
            carFuelTotal: this.carFuelTotal ? Number(this.carFuelTotal) : 0,
            variableMonthGross: this.variableMonthGross
                ? Number(this.variableMonthGross)
                : 0,
            variableMonthNet: this.variableMonthNet
                ? Number(this.variableMonthNet)
                : 0,
            variableYearGross: this.variableYearGross
                ? Number(this.variableYearGross)
                : 0,
            variableYearNet: this.variableYearNet ? Number(this.variableYearNet) : 0,
            variableTotal: this.variableTotal ? Number(this.variableTotal) : 0,
            bonusMonthGross: this.bonusMonthGross ? Number(this.bonusMonthGross) : 0,
            bonusMonthNet: this.bonusMonthNet ? Number(this.bonusMonthNet) : 0,
            bonusYearGross: this.bonusYearGross ? Number(this.bonusYearGross) : 0,
            bonusYearNet: this.bonusYearNet ? Number(this.bonusYearNet) : 0,
            bonusTotal: this.bonusTotal ? Number(this.bonusTotal) : 0,
            totalMonthGross: this.totalMonthGross ? Number(this.totalMonthGross) : 0,
            totalMonthNet: this.totalMonthNet ? Number(this.totalMonthNet) : 0,
            totalYearGross: this.totalYearGross ? Number(this.totalYearGross) : 0,
            totalYearNet: this.totalYearNet ? Number(this.totalYearNet) : 0,
            totalTotal: this.totalTotal ? Number(this.totalTotal) : 0,
            totalMonthNetAfterExtraTaxWithBonus: this
                .totalMonthNetAfterExtraTaxWithBonus
                ? Number(this.totalMonthNetAfterExtraTaxWithBonus)
                : 0,
            totalYearNetAfterExtraTaxWithBonus: this
                .totalYearNetAfterExtraTaxWithBonus
                ? Number(this.totalYearNetAfterExtraTaxWithBonus)
                : 0,
            totalMonthNetAfterExtraTaxWithoutBonus: this
                .totalMonthNetAfterExtraTaxWithoutBonus
                ? Number(this.totalMonthNetAfterExtraTaxWithoutBonus)
                : 0,
            totalYearNetAfterExtraTaxWithoutBonus: this
                .totalYearNetAfterExtraTaxWithoutBonus
                ? Number(this.totalYearNetAfterExtraTaxWithoutBonus)
                : 0,
            employeeIrsEuros: this.employeeIrsEuros
                ? Number(this.employeeIrsEuros)
                : 0,
            employeeSocialSecurityEuros: this.employeeSocialSecurityEuros
                ? Number(this.employeeSocialSecurityEuros)
                : 0,
            extraTaxEuros: this.extraTaxEuros ? Number(this.extraTaxEuros) : 0,
            costMonthWithBonus: this.costMonthWithBonus
                ? Number(this.costMonthWithBonus)
                : 0,
            costMonthWithoutBonus: this.costMonthWithoutBonus
                ? Number(this.costMonthWithoutBonus)
                : 0,
            costDayWithBonus: this.costDayWithBonus
                ? Number(this.costDayWithBonus)
                : 0,
            costDayWithoutBonus: this.costDayWithoutBonus
                ? Number(this.costDayWithoutBonus)
                : 0,
            monthTargetMarginWithBonus: this.monthTargetMarginWithBonus
                ? Number(this.monthTargetMarginWithBonus)
                : 0,
            monthTargetMarginWithoutBonus: this.monthTargetMarginWithoutBonus
                ? Number(this.monthTargetMarginWithoutBonus)
                : 0,
            dayTargetMarginWithBonus: this.dayTargetMarginWithBonus
                ? Number(this.dayTargetMarginWithBonus)
                : 0,
            dayTargetMarginWithoutBonus: this.dayTargetMarginWithoutBonus
                ? Number(this.dayTargetMarginWithoutBonus)
                : 0,
            proposedDailyRate: this.proposedDailyRate
                ? Number(this.proposedDailyRate)
                : 0,
            proposedHourRate: this.proposedHourRate
                ? Number(this.proposedHourRate)
                : 0,
            marginWithBonus: this.marginWithBonus ? Number(this.marginWithBonus) : 0,
            marginWithoutBonus: this.marginWithoutBonus
                ? Number(this.marginWithoutBonus)
                : 0,
        };
        console.log(this.simulationUser);
        this.simulationservice.addSimulation(this.simulationUser).subscribe();
    }
}
SimulatorComponent.ɵfac = function SimulatorComponent_Factory(t) { return new (t || SimulatorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_colaborador_service__WEBPACK_IMPORTED_MODULE_3__["ColaboradorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_nivel_service__WEBPACK_IMPORTED_MODULE_4__["NivelService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_area_service__WEBPACK_IMPORTED_MODULE_5__["AreaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_maritalStatus_service__WEBPACK_IMPORTED_MODULE_6__["MaritalStatusService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_irsUser_service__WEBPACK_IMPORTED_MODULE_7__["IrsUserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_simulation_service__WEBPACK_IMPORTED_MODULE_8__["SimulationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_irsCalc_service__WEBPACK_IMPORTED_MODULE_9__["IrsCalcService"])); };
SimulatorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SimulatorComponent, selectors: [["app-simulator"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 535, vars: 258, consts: [[1, "d-flex", "flex-column", "align-items-center", "m-5"], [1, "container", "p-3"], [1, ""], [1, "d-flex", "my-3"], [1, "mx-5"], ["placeholder", "Select User", "optionLabel", "nome", 3, "options", "ngModel", "showClear", "ngModelChange"], ["placeholder", "Select Area", "optionLabel", "name", 3, "options", "ngModel", "showClear", "ngModelChange"], ["placeholder", "Select Nivel", "optionLabel", "desc", 3, "options", "ngModel", "showClear", "ngModelChange"], ["placeholder", "Select Status", "optionLabel", "status", 3, "options", "ngModel", "showClear", "ngModelChange"], ["placeholder", "Select Dependents", "optionLabel", "number", 3, "options", "ngModel", "showClear", "ngModelChange"], [1, "row"], [1, "col-sm-12", "col-md-10", "col-xl-8"], [1, "table", "table"], ["type", "text", "name", "baseSalary", 3, "ngModel", "ngModelChange"], [1, "table"], [1, "thead-dark"], ["colspan", "2"], [1, "col-xl-8", "col-md-12"], ["type", "text", "name", "carTotalValue", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "carType", 3, "ngModel", "ngModelChange"], [1, "col-2"], [1, "col-8"], ["type", "text", "name", "extraTax", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "numberOfMonths", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "numberOfDaysMonth", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "targetMargin", 3, "ngModel", "ngModelChange"], ["type", "button", 1, "btn", "btn-info", 3, "click"]], template: function SimulatorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Simulador");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Syoner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p-dropdown", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SimulatorComponent_Template_p_dropdown_ngModelChange_8_listener($event) { return ctx.selectedColaborador = $event; })("ngModelChange", function SimulatorComponent_Template_p_dropdown_ngModelChange_8_listener() { ctx.colaboradorSelected(); return ctx.getIrs(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Area");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p-dropdown", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SimulatorComponent_Template_p_dropdown_ngModelChange_13_listener($event) { return ctx.selectedArea = $event; })("ngModelChange", function SimulatorComponent_Template_p_dropdown_ngModelChange_13_listener() { return ctx.nivelFilter(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Nivel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p-dropdown", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SimulatorComponent_Template_p_dropdown_ngModelChange_19_listener($event) { return ctx.selectedNivel = $event; })("ngModelChange", function SimulatorComponent_Template_p_dropdown_ngModelChange_19_listener() { return ctx.nivelSelected(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Marital Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p-dropdown", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SimulatorComponent_Template_p_dropdown_ngModelChange_24_listener($event) { return ctx.selectedMaritalStatus = $event; })("ngModelChange", function SimulatorComponent_Template_p_dropdown_ngModelChange_24_listener() { return ctx.getIrs(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "N\u00BA Dependentes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p-dropdown", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SimulatorComponent_Template_p_dropdown_ngModelChange_29_listener($event) { return ctx.selectedDependents = $event; })("ngModelChange", function SimulatorComponent_Template_p_dropdown_ngModelChange_29_listener() { return ctx.getIrs(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "IRS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "table", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Base Salary:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SimulatorComponent_Template_input_ngModelChange_41_listener($event) { return ctx.baseSalary = $event; })("ngModelChange", function SimulatorComponent_Template_input_ngModelChange_41_listener() { ctx.getIrs(); return ctx.calcs(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "IRS:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](47, "percent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "table", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "thead", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "th", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "M\u00EAs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "th", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Ano");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Total");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Component");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Gross");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Net");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Gross");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Net");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Base Salary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](78, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](81, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](84, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](87, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](90, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "IHT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](96, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](99, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](102, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](105, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](108, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "Subs Refeicao");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](114, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](117, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](120, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](123, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](126, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "table", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "Total");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](135, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](138, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](141, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](144, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](147, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](148, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, "Extra");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "table", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "Justified Expenses:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SimulatorComponent_Template_input_ngModelChange_159_listener($event) { return ctx.justifiedExpenses = $event; })("ngModelChange", function SimulatorComponent_Template_input_ngModelChange_159_listener() { return ctx.calcs(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, "Variable:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SimulatorComponent_Template_input_ngModelChange_165_listener($event) { return ctx.variable = $event; })("ngModelChange", function SimulatorComponent_Template_input_ngModelChange_165_listener() { return ctx.calcs(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, "Bonus:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SimulatorComponent_Template_input_ngModelChange_171_listener($event) { return ctx.bonus = $event; })("ngModelChange", function SimulatorComponent_Template_input_ngModelChange_171_listener() { return ctx.calcs(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "table", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](174, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "th", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, "M\u00EAs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "th", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, "Ano");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, "Total");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, "Component");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, "Gross");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](187, "Net");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](189, "Gross");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191, "Net");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](192, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](195, "Justified Expenses");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](197);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](198, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](200);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](201, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](203);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](204, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](206);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](207, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](209);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](210, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](213, "Variable");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](215);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](216, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](218);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](219, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](221);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](222, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](224);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](225, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](227);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](228, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](231, "Bonus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](233);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](234, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](236);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](237, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](239);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](240, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](242);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](243, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](245);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](246, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](248, "Car");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "table", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](255, "Car Type: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SimulatorComponent_Template_input_ngModelChange_257_listener($event) { return ctx.carType = $event; })("ngModelChange", function SimulatorComponent_Template_input_ngModelChange_257_listener() { return ctx.calcs(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](258, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](259, " (0=normal 1=plugin) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](262, "TTA:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](265);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](266, "percent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](268, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](270, "Car Total Value:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](272, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SimulatorComponent_Template_input_ngModelChange_272_listener($event) { return ctx.carTotalValue = $event; })("ngModelChange", function SimulatorComponent_Template_input_ngModelChange_272_listener() { return ctx.calcs(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](273, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](274, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](275, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](276, "Car Expenses:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](277, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](278, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SimulatorComponent_Template_input_ngModelChange_278_listener($event) { return ctx.carExpenses = $event; })("ngModelChange", function SimulatorComponent_Template_input_ngModelChange_278_listener() { return ctx.calcs(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](279, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](280, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](281, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](282, "Car Fuel:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](284, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SimulatorComponent_Template_input_ngModelChange_284_listener($event) { return ctx.carFuel = $event; })("ngModelChange", function SimulatorComponent_Template_input_ngModelChange_284_listener() { return ctx.calcs(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](285, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](286, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](287, "table", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](288, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](289, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](290, "th", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](291, "M\u00EAs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](292, "th", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](293, "Ano");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](294, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](295, "Total");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](296, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](297, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](298, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](299, "Gross");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](300, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](301, "Net");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](302, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](303, "Gross");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](304, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](305, "Net");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](306, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](307, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](308, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](309, "Car");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](310, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](311);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](312, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](313, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](314);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](315, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](316, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](317);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](318, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](319, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](320);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](321, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](322, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](323);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](324, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](325, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](326, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](327, "Car Expenses");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](328, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](329);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](330, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](331, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](332);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](333, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](334, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](335);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](336, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](337, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](338);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](339, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](340, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](341);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](342, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](343, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](344, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](345, "Car Fuel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](346, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](347);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](348, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](349, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](350);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](351, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](352, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](353);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](354, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](355, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](356);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](357, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](358, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](359);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](360, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](361, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](362, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](363, "table", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](364, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](365, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](366, "Total");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](367, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](368);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](369, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](370, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](371);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](372, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](373, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](374);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](375, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](376, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](377);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](378, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](379, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](380);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](381, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](382, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](383, "Extras Tables Simulator");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](384, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](385, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](386, "table", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](387, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](388, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](389, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](390, "Extra Tax:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](391, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](392, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SimulatorComponent_Template_input_ngModelChange_392_listener($event) { return ctx.extraTax = $event; })("ngModelChange", function SimulatorComponent_Template_input_ngModelChange_392_listener() { return ctx.calcs(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](393, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](394, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](395, "Extra Tax \u20AC:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](396, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](397, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SimulatorComponent_Template_input_ngModelChange_397_listener($event) { return ctx.extraTaxEuros = $event; })("ngModelChange", function SimulatorComponent_Template_input_ngModelChange_397_listener() { return ctx.calcs(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](398, "table", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](399, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](400, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](401, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](402, "Number of Months:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](403, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](404, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SimulatorComponent_Template_input_ngModelChange_404_listener($event) { return ctx.numberOfMonths = $event; })("ngModelChange", function SimulatorComponent_Template_input_ngModelChange_404_listener() { return ctx.calcs(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](405, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](406, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](407, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](408, "Number of Days/Month:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](409, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](410, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SimulatorComponent_Template_input_ngModelChange_410_listener($event) { return ctx.numberOfDaysMonth = $event; })("ngModelChange", function SimulatorComponent_Template_input_ngModelChange_410_listener() { return ctx.calcs(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](411, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](412, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](413, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](414, "Target Margin:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](415, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](416, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SimulatorComponent_Template_input_ngModelChange_416_listener($event) { return ctx.targetMargin = $event; })("ngModelChange", function SimulatorComponent_Template_input_ngModelChange_416_listener() { return ctx.calcs(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](417, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](418, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](419, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](420, "Tax Table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](421, "table", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](422, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](423, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](424, "Total Net After Extra Tax with Bonus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](425, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](426);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](427, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](428, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](429);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](430, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](431, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](432, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](433, "Total Net After Extra Tax without Bonus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](434, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](435);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](436, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](437, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](438);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](439, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](440, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](441, "Employee Table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](442, "table", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](443, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](444, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](445, "Employee IRS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](446, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](447);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](448, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](449, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](450, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](451, "Employee Social Security");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](452, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](453);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](454, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](455, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](456, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](457, "Extra Tax \u20AC");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](458, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](459);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](460, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](461, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](462, "Bonus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](463, "table", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](464, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](465, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](466, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](467, "With Bonus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](468, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](469, "Without Bonus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](470, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](471, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](472, "Cost / Month");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](473, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](474);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](475, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](476, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](477);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](478, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](479, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](480, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](481, "Cost / Day");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](482, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](483);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](484, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](485, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](486);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](487, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](488, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](489, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](490, "Month Target Margin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](491, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](492);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](493, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](494, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](495);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](496, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](497, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](498, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](499, "Day Target Margin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](500, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](501);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](502, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](503, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](504);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](505, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](506, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](507, "Proposed Bonus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](508, "table", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](509, "thead", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](510, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](511, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](512, "Proposed Daily Rate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](513, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](514, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SimulatorComponent_Template_input_ngModelChange_514_listener($event) { return ctx.proposedDailyRate = $event; })("ngModelChange", function SimulatorComponent_Template_input_ngModelChange_514_listener() { return ctx.calcs(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](515, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](516, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](517, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](518, "Margin with Bonus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](519, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](520);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](521, "percent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](522, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](523, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](524, "Proposed Hour Rate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](525, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](526);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](527, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](528, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](529, "Margin without Bonus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](530, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](531);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](532, "percent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](533, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SimulatorComponent_Template_button_click_533_listener() { ctx.saveIrsUser(); return ctx.saveIrsSimulation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](534, " Guardar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.colaboradores)("ngModel", ctx.selectedColaborador)("showClear", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.areas)("ngModel", ctx.selectedArea)("showClear", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.areaNivels)("ngModel", ctx.selectedNivel)("showClear", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.maritalStates)("ngModel", ctx.selectedMaritalStatus)("showClear", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.dependents)("ngModel", ctx.selectedDependents)("showClear", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.baseSalary);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](47, 104, ctx.irs ? ctx.irs : 0, "1.2"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](78, 107, ctx.baseSalaryMonthGross));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](81, 109, ctx.baseSalaryMonthNet));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](84, 111, ctx.baseSalaryYearGross));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](87, 113, ctx.baseSalaryYearNet));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](90, 115, ctx.baseSalaryYearTotal));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](96, 117, ctx.ihtMonthGross));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](99, 119, ctx.ihtMonthNet));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](102, 121, ctx.ihtYearGross));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](105, 123, ctx.ihtYearNet));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](108, 125, ctx.ihtTotal));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](114, 127, ctx.subsRefeicaoMonthGross));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](117, 129, ctx.subsRefeicaoMonthNet));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](120, 131, ctx.subsRefeicaoYearGross));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](123, 133, ctx.subsRefeicaoYearNet));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](126, 135, ctx.subsRefeicaoTotal));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](135, 137, ctx.totalMonthGross));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](138, 139, ctx.totalMonthNet));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](141, 141, ctx.totalYearGross));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](144, 143, ctx.totalYearNet));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](147, 145, ctx.totalTotal));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.justifiedExpenses);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.variable);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.bonus);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](198, 147, ctx.justifiedExpensesMonthGross));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](201, 149, ctx.justifiedExpensesMonthNet));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](204, 151, ctx.justifiedExpensesYearGross));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](207, 153, ctx.justifiedExpensesYearNet));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](210, 155, ctx.justifiedExpensesTotal));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](216, 157, ctx.variableMonthGross));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](219, 159, ctx.variableMonthNet));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](222, 161, ctx.variableYearGross));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](225, 163, ctx.variableYearNet));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](228, 165, ctx.variableTotal));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](234, 167, ctx.bonusMonthGross));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](237, 169, ctx.bonusMonthNet));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](240, 171, ctx.bonusYearGross));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](243, 173, ctx.bonusYearNet));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](246, 175, ctx.bonusTotal));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.carType);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](266, 177, ctx.tta, "1.2"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.carTotalValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.carExpenses);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.carFuel);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](312, 180, ctx.carMonthGross));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](315, 182, ctx.carMonthNet));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](318, 184, ctx.carYearGross));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](321, 186, ctx.carYearNet));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](324, 188, ctx.carTotal));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](330, 190, ctx.carExpensesMonthGross));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](333, 192, ctx.carExpensesMonthNet));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](336, 194, ctx.carExpensesYearGross));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](339, 196, ctx.carExpensesYearNet));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](342, 198, ctx.carExpensesTotal));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](348, 200, ctx.carFuelMonthGross));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](351, 202, ctx.carFuelMonthNet));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](354, 204, ctx.carFuelYearGross));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](357, 206, ctx.carFuelYearNet));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](360, 208, ctx.carFuelTotal));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](369, 210, ctx.totalMonthGross));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](372, 212, ctx.totalMonthNet));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](375, 214, ctx.totalYearGross));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](378, 216, ctx.totalYearNet));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](381, 218, ctx.totalTotal));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.extraTax);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.extraTaxEuros);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.numberOfMonths);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.numberOfDaysMonth);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.targetMargin);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](427, 220, ctx.totalMonthNetAfterExtraTaxWithBonus));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](430, 222, ctx.totalYearNetAfterExtraTaxWithBonus));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](436, 224, ctx.totalMonthNetAfterExtraTaxWithoutBonus));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](439, 226, ctx.totalYearNetAfterExtraTaxWithoutBonus));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](448, 228, ctx.employeeIrsEuros), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](454, 230, ctx.employeeSocialSecurityEuros), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](460, 232, ctx.extraTaxEuros), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](475, 234, ctx.costMonthWithBonus));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](478, 236, ctx.costMonthWithoutBonus));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](484, 238, ctx.costDayWithBonus), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](487, 240, ctx.costDayWithoutBonus), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](493, 242, ctx.monthTargetMarginWithBonus), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](496, 244, ctx.monthTargetMarginWithoutBonus), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](502, 246, ctx.dayTargetMarginWithBonus), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](505, 248, ctx.dayTargetMarginWithoutBonus), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.proposedDailyRate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](521, 250, ctx.marginWithBonus, "1.2"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](527, 253, ctx.proposedHourRate), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](532, 255, ctx.marginWithoutBonus, "1.2"), " ");
    } }, directives: [primeng_dropdown__WEBPACK_IMPORTED_MODULE_10__["Dropdown"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["DefaultValueAccessor"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["PercentPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["DecimalPipe"]], styles: ["[_nghost-%COMP%] {\r\n  \r\n}\r\n\r\n.table[_ngcontent-%COMP%] {\r\n  background-color: var(--table-background);\r\n  \r\n}\r\n\r\n.buttons[_ngcontent-%COMP%] {\r\n  \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaW11bGF0b3Ivc2ltdWxhdG9yLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRTs7d0JBRXNCO0FBQ3hCOztBQUVBO0VBQ0UseUNBQXlDO0VBQ3pDLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2ltdWxhdG9yL3NpbXVsYXRvci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIC8qIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyOyAqL1xyXG59XHJcblxyXG4udGFibGUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRhYmxlLWJhY2tncm91bmQpO1xyXG4gIC8qIHdpZHRoOiA4MCU7ICovXHJcbn1cclxuXHJcbi5idXR0b25zIHtcclxuICAvKiBmbGV4LWdyb3c6IDE7ICovXHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SimulatorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-simulator',
                templateUrl: './simulator.component.html',
                styleUrls: ['./simulator.component.css'],
            }]
    }], function () { return [{ type: _services_colaborador_service__WEBPACK_IMPORTED_MODULE_3__["ColaboradorService"] }, { type: _services_nivel_service__WEBPACK_IMPORTED_MODULE_4__["NivelService"] }, { type: _services_area_service__WEBPACK_IMPORTED_MODULE_5__["AreaService"] }, { type: _services_maritalStatus_service__WEBPACK_IMPORTED_MODULE_6__["MaritalStatusService"] }, { type: _services_irsUser_service__WEBPACK_IMPORTED_MODULE_7__["IrsUserService"] }, { type: _services_simulation_service__WEBPACK_IMPORTED_MODULE_8__["SimulationService"] }, { type: _services_irsCalc_service__WEBPACK_IMPORTED_MODULE_9__["IrsCalcService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/team/team.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/team/team.component.ts ***!
  \***************************************************/
/*! exports provided: TeamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamComponent", function() { return TeamComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _utils_nameSplitUpper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_utils/nameSplitUpper */ "./src/app/_utils/nameSplitUpper.ts");
/* harmony import */ var _services_colaborador_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/colaborador.service */ "./src/app/services/colaborador.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

// Utils




function TeamComponent_tr_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const colaborador_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](colaborador_r1.colaboradorid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", "https://ipc.digital/wp-content/uploads/2016/07/icon-user-default.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.NameSplitUpper(colaborador_r1.nome));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](colaborador_r1.nivel);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](colaborador_r1.vencimento);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](colaborador_r1.despesas);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](colaborador_r1.premio);
} }
class TeamComponent {
    constructor(colaboradorService) {
        this.colaboradorService = colaboradorService;
        this.NameSplitUpper = _utils_nameSplitUpper__WEBPACK_IMPORTED_MODULE_1__["default"];
    }
    ngOnInit() {
        // api fake data
        this.areas = [
            {
                id: 1,
                name: 'Professional Services',
            },
            {
                id: 2,
                name: 'Sales',
            },
            {
                id: 3,
                name: 'Marketing',
            },
            {
                id: 4,
                name: 'Recursos Humanos',
            },
            {
                id: 5,
                name: 'Office Operations',
            },
        ];
        this.dependents = [
            {
                id: 1,
                number: '0',
            },
            {
                id: 2,
                number: '1',
            },
            {
                id: 3,
                number: '2',
            },
            {
                id: 4,
                number: '3',
            },
            {
                id: 5,
                number: '4',
            },
            {
                id: 6,
                number: '5+',
            },
        ];
        this.maritalStates = [
            {
                id: 1,
                status: 'Não Casado',
            },
            {
                id: 2,
                status: 'Casado Unico Titular',
            },
            {
                id: 3,
                status: 'Casado Dois Titulares',
            },
            {
                id: 4,
                status: 'Não Casado - Deficiente',
            },
            {
                id: 5,
                status: 'Casado Unico Titular - Deficiente',
            },
            {
                id: 6,
                status: 'Casado Dois Titulares - Deficiente',
            },
        ];
        // END api fake data
        // API Data
        this.colaboradorService.getColaboradores().subscribe((users) => {
            this.colaboradores = users;
            console.log('getIrsUsers');
            console.log(this.colaboradores);
        });
    }
}
TeamComponent.ɵfac = function TeamComponent_Factory(t) { return new (t || TeamComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_colaborador_service__WEBPACK_IMPORTED_MODULE_2__["ColaboradorService"])); };
TeamComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TeamComponent, selectors: [["app-team"]], decls: 19, vars: 1, consts: [[1, "jumbotron", "text-center"], [1, "container"], [1, "table"], [4, "ngFor", "ngForOf"], ["width", "30px", "alt", "img", 1, "rounded", 3, "src"]], template: function TeamComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Equipa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Position");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Salary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Despesas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Pr\u00E9mio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, TeamComponent_tr_18_Template, 15, 7, "tr", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.colaboradores);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGVhbS90ZWFtLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TeamComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-team',
                templateUrl: './team.component.html',
                styleUrls: ['./team.component.css'],
            }]
    }], function () { return [{ type: _services_colaborador_service__WEBPACK_IMPORTED_MODULE_2__["ColaboradorService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/topbar/topbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/topbar/topbar.component.ts ***!
  \*******************************************************/
/*! exports provided: TopbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopbarComponent", function() { return TopbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class TopbarComponent {
    constructor() { }
    ngOnInit() {
    }
}
TopbarComponent.ɵfac = function TopbarComponent_Factory(t) { return new (t || TopbarComponent)(); };
TopbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TopbarComponent, selectors: [["app-topbar"]], decls: 9, vars: 0, consts: [[1, "navbar", "bg-white"], [1, "btn", "btn-link", "rounded-circle", "mr-3"], [1, "pi", "pi-bars"], [1, "navbar-nav", "ml-auto"], [1, "nav-item", "dropdown", "no-arrow"], ["href", "#", "id", "userDropdown", "role", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle"], [1, "mr-2", "d-lg-inline", "text-gray-600", "small"], ["width", "25px", "height", "25px", "src", "https://avatars2.githubusercontent.com/u/17129198?v=4", 1, "rounded-circle"]], template: function TopbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Pedro Morais");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["[_nghost-%COMP%] {\r\n  \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90b3BiYXIvdG9wYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRTtpQkFDZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdG9wYmFyL3RvcGJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcclxuICBoZWlnaHQ6IDUwcHg7ICovXHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TopbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-topbar',
                templateUrl: './topbar.component.html',
                styleUrls: ['./topbar.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/services/area.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/area.service.ts ***!
  \******************************************/
/*! exports provided: AreaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AreaService", function() { return AreaService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");

// Service




const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json',
    }),
};
class AreaService {
    constructor(http) {
        this.http = http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl;
    }
    getAreas() {
        return this.http.get(this.baseUrl + '/IRS_Area');
    }
}
AreaService.ɵfac = function AreaService_Factory(t) { return new (t || AreaService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
AreaService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AreaService, factory: AreaService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AreaService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/colaborador.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/colaborador.service.ts ***!
  \*************************************************/
/*! exports provided: ColaboradorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColaboradorService", function() { return ColaboradorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");

// Service




const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json',
    }),
};
class ColaboradorService {
    constructor(http) {
        this.http = http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl;
    }
    getColaboradores() {
        return this.http.get(this.baseUrl + '/Sybase_Colaborador_Nivel');
    }
}
ColaboradorService.ɵfac = function ColaboradorService_Factory(t) { return new (t || ColaboradorService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ColaboradorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ColaboradorService, factory: ColaboradorService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ColaboradorService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/fileUpload.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/fileUpload.service.ts ***!
  \************************************************/
/*! exports provided: FileUploadService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileUploadService", function() { return FileUploadService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");

// Service




const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json',
    }),
};
class FileUploadService {
    constructor(http) {
        this.http = http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl;
    }
    fileUpload(excel) {
        return this.http.post(this.baseUrl + '/FileUpload', excel, {
            reportProgress: true,
            observe: 'events',
        });
    }
}
FileUploadService.ɵfac = function FileUploadService_Factory(t) { return new (t || FileUploadService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
FileUploadService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FileUploadService, factory: FileUploadService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FileUploadService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/irsCalc.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/irsCalc.service.ts ***!
  \*********************************************/
/*! exports provided: IrsCalcService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IrsCalcService", function() { return IrsCalcService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");

// Service




const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json',
    }),
};
class IrsCalcService {
    constructor(http) {
        this.http = http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl;
    }
    getIrs(irsUser) {
        return this.http.post(this.baseUrl + '/IrsCalc', irsUser, httpOptions);
    }
}
IrsCalcService.ɵfac = function IrsCalcService_Factory(t) { return new (t || IrsCalcService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
IrsCalcService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: IrsCalcService, factory: IrsCalcService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IrsCalcService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/irsUser.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/irsUser.service.ts ***!
  \*********************************************/
/*! exports provided: IrsUserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IrsUserService", function() { return IrsUserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");

// Service




const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json',
    }),
};
class IrsUserService {
    constructor(http) {
        this.http = http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl;
    }
    getIrsUsers() {
        return this.http.get(this.baseUrl + '/IRS_User');
    }
    addIrsUsers(irsUser) {
        return this.http.post(this.baseUrl + '/IRS_User', irsUser, httpOptions);
    }
    editIrsUsers(irsUser, id) {
        return this.http.put(this.baseUrl + `/IRS_User/${id}`, irsUser, httpOptions);
    }
}
IrsUserService.ɵfac = function IrsUserService_Factory(t) { return new (t || IrsUserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
IrsUserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: IrsUserService, factory: IrsUserService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IrsUserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/maritalStatus.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/maritalStatus.service.ts ***!
  \***************************************************/
/*! exports provided: MaritalStatusService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaritalStatusService", function() { return MaritalStatusService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");

// Service




const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json',
    }),
};
class MaritalStatusService {
    constructor(http) {
        this.http = http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl;
    }
    getMaritalStates() {
        return this.http.get(this.baseUrl + '/IRS_Marital_status');
    }
}
MaritalStatusService.ɵfac = function MaritalStatusService_Factory(t) { return new (t || MaritalStatusService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
MaritalStatusService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MaritalStatusService, factory: MaritalStatusService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaritalStatusService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/nivel.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/nivel.service.ts ***!
  \*******************************************/
/*! exports provided: NivelService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NivelService", function() { return NivelService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");

// Service




const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json',
    }),
};
class NivelService {
    constructor(http) {
        this.http = http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl;
    }
    getNivels() {
        return this.http.get(this.baseUrl + '/IRS_Nivel');
    }
}
NivelService.ɵfac = function NivelService_Factory(t) { return new (t || NivelService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
NivelService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NivelService, factory: NivelService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NivelService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/simulation.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/simulation.service.ts ***!
  \************************************************/
/*! exports provided: SimulationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimulationService", function() { return SimulationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");

// Service




const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json',
    }),
};
class SimulationService {
    constructor(http) {
        this.http = http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl;
    }
    getSimulations() {
        return this.http.get(this.baseUrl + '/IRS_Simulation');
    }
    addSimulation(irsUser) {
        return this.http.post(this.baseUrl + '/IRS_Simulation', irsUser, httpOptions);
    }
    editSimulation(irsUser, id) {
        return this.http.put(this.baseUrl + `/IRS_Simulation/${id}`, irsUser, httpOptions);
    }
}
SimulationService.ɵfac = function SimulationService_Factory(t) { return new (t || SimulationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
SimulationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SimulationService, factory: SimulationService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SimulationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


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
const environment = {
    production: false,
    apiUrl: 'http://localhost:5000/api',
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! A:\Users\Pedro\CODE\GitHub-Desktop\Syone-IRS-Calculator\web\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map