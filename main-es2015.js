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
/* harmony import */ var _core_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/login/login.component */ "./src/app/core/login/login.component.ts");
/* harmony import */ var _features_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./features/dashboard/dashboard.component */ "./src/app/features/dashboard/dashboard.component.ts");
/* harmony import */ var _core_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/user-profile/user-profile.component */ "./src/app/core/user-profile/user-profile.component.ts");
/* harmony import */ var _services_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/auth.guard */ "./src/app/services/auth.guard.ts");








const routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: _core_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: 'dashboard', component: _features_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"], canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuardService"]] },
    { path: 'userProfile', component: _core_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_4__["UserProfileComponent"], canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuardService"]] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor() {
        this.title = 'askMe';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
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
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/toast */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-toast.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-api.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _core_login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./core/login/login.component */ "./src/app/core/login/login.component.ts");
/* harmony import */ var _features_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./features/dashboard/dashboard.component */ "./src/app/features/dashboard/dashboard.component.ts");
/* harmony import */ var _core_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./core/user-profile/user-profile.component */ "./src/app/core/user-profile/user-profile.component.ts");
/* harmony import */ var _features_post_post_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./features/post/post.component */ "./src/app/features/post/post.component.ts");
/* harmony import */ var _shared_comments_comments_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shared/comments/comments.component */ "./src/app/shared/comments/comments.component.ts");
/* harmony import */ var _shared_tags_tags_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./shared/tags/tags.component */ "./src/app/shared/tags/tags.component.ts");
/* harmony import */ var _features_feed_feed_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./features/feed/feed.component */ "./src/app/features/feed/feed.component.ts");
/* harmony import */ var _core_header_header_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./core/header/header.component */ "./src/app/core/header/header.component.ts");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-multiselect-dropdown */ "./node_modules/ng-multiselect-dropdown/__ivy_ngcc__/fesm2015/ng-multiselect-dropdown.js");
/* harmony import */ var _core_footer_footer_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./core/footer/footer.component */ "./src/app/core/footer/footer.component.ts");
/* harmony import */ var _features_activity_activity_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./features/activity/activity.component */ "./src/app/features/activity/activity.component.ts");
/* harmony import */ var _shared_notification_notification_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./shared/notification/notification.component */ "./src/app/shared/notification/notification.component.ts");























class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [primeng_api__WEBPACK_IMPORTED_MODULE_6__["MessageService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
            primeng_toast__WEBPACK_IMPORTED_MODULE_5__["ToastModule"],
            ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_17__["NgMultiSelectDropDownModule"].forRoot(),
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
        _core_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
        _features_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__["DashboardComponent"],
        _core_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_11__["UserProfileComponent"],
        _features_post_post_component__WEBPACK_IMPORTED_MODULE_12__["PostComponent"],
        _shared_comments_comments_component__WEBPACK_IMPORTED_MODULE_13__["CommentsComponent"],
        _shared_tags_tags_component__WEBPACK_IMPORTED_MODULE_14__["TagsComponent"],
        _features_feed_feed_component__WEBPACK_IMPORTED_MODULE_15__["FeedComponent"],
        _core_header_header_component__WEBPACK_IMPORTED_MODULE_16__["HeaderComponent"],
        _core_footer_footer_component__WEBPACK_IMPORTED_MODULE_18__["FooterComponent"],
        _features_activity_activity_component__WEBPACK_IMPORTED_MODULE_19__["ActivityComponent"],
        _shared_notification_notification_component__WEBPACK_IMPORTED_MODULE_20__["NotificationComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
        primeng_toast__WEBPACK_IMPORTED_MODULE_5__["ToastModule"], ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_17__["NgMultiSelectDropDownModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                    _core_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
                    _features_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__["DashboardComponent"],
                    _core_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_11__["UserProfileComponent"],
                    _features_post_post_component__WEBPACK_IMPORTED_MODULE_12__["PostComponent"],
                    _shared_comments_comments_component__WEBPACK_IMPORTED_MODULE_13__["CommentsComponent"],
                    _shared_tags_tags_component__WEBPACK_IMPORTED_MODULE_14__["TagsComponent"],
                    _features_feed_feed_component__WEBPACK_IMPORTED_MODULE_15__["FeedComponent"],
                    _core_header_header_component__WEBPACK_IMPORTED_MODULE_16__["HeaderComponent"],
                    _core_footer_footer_component__WEBPACK_IMPORTED_MODULE_18__["FooterComponent"],
                    _features_activity_activity_component__WEBPACK_IMPORTED_MODULE_19__["ActivityComponent"],
                    _shared_notification_notification_component__WEBPACK_IMPORTED_MODULE_20__["NotificationComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                    primeng_toast__WEBPACK_IMPORTED_MODULE_5__["ToastModule"],
                    ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_17__["NgMultiSelectDropDownModule"].forRoot(),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
                ],
                providers: [primeng_api__WEBPACK_IMPORTED_MODULE_6__["MessageService"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/core/footer/footer.component.ts":
/*!*************************************************!*\
  !*** ./src/app/core/footer/footer.component.ts ***!
  \*************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 5, vars: 0, consts: [[1, "d-flex", "flex-column"], ["id", "sticky-footer", 1, "py-2", "bg-dark", "text-white-50"], [1, "container", "text-center"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "footer", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Copyright \u00A9 Your Website");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n#page-content[_ngcontent-%COMP%] {\n  flex: 1 0 auto;\n}\n\n#sticky-footer[_ngcontent-%COMP%] {\n  flex-shrink: none;\n  bottom: 0;\n  position: fixed;\n  width: 100%;\n}\n\n\n\nbody[_ngcontent-%COMP%] {\n  background: #007bff;\n  background: linear-gradient(to right, #0062E6, #33AEFF);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9mb290ZXIvQzpcXFVzZXJzXFxQcmVybmFcXGFzc2lnbm1lbnRcXGFza21lL3NyY1xcYXBwXFxjb3JlXFxmb290ZXJcXGZvb3Rlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29yZS9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFLFlBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FDQ0Y7O0FERUEsbUNBQUE7O0FBRUE7RUFDRSxtQkFBQTtFQUNBLHVEQUFBO0FDQUYiLCJmaWxlIjoic3JjL2FwcC9jb3JlL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJodG1sLFxyXG5ib2R5IHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbiNwYWdlLWNvbnRlbnQge1xyXG4gIGZsZXg6IDEgMCBhdXRvO1xyXG59XHJcblxyXG4jc3RpY2t5LWZvb3RlciB7XHJcbiAgZmxleC1zaHJpbms6IG5vbmU7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLyogT3RoZXIgQ2xhc3NlcyBmb3IgUGFnZSBTdHlsaW5nICovXHJcblxyXG5ib2R5IHtcclxuICBiYWNrZ3JvdW5kOiAjMDA3YmZmO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzAwNjJFNiwgIzMzQUVGRik7XHJcbn0iLCJodG1sLFxuYm9keSB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuI3BhZ2UtY29udGVudCB7XG4gIGZsZXg6IDEgMCBhdXRvO1xufVxuXG4jc3RpY2t5LWZvb3RlciB7XG4gIGZsZXgtc2hyaW5rOiBub25lO1xuICBib3R0b206IDA7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi8qIE90aGVyIENsYXNzZXMgZm9yIFBhZ2UgU3R5bGluZyAqL1xuYm9keSB7XG4gIGJhY2tncm91bmQ6ICMwMDdiZmY7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzAwNjJFNiwgIzMzQUVGRik7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/core/header/header.component.ts":
/*!*************************************************!*\
  !*** ./src/app/core/header/header.component.ts ***!
  \*************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class HeaderComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    appLogout() {
        localStorage.removeItem('currentUser');
        this.router.navigateByUrl('/login');
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 19, vars: 1, consts: [[1, "navbar", "navbar-expand-lg", "navbar-dark", "bg-dark", "fixed-top-header"], [1, "container"], ["href", "/userProfile", 1, "navbar-brand"], [1, "navbar-brand"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "true", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "ml-auto"], [1, "nav-item"], ["href", "/dashboard", 1, "nav-link"], ["href", "/userProfile", 1, "nav-link"], [1, "nav-link", 3, "click"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Ask ME!!!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "My Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_17_listener() { return ctx.appLogout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.currentUser == null ? null : ctx.currentUser.name, "'s");
    } }, styles: [".fixed-top-header[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 10;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9oZWFkZXIvQzpcXFVzZXJzXFxQcmVybmFcXGFzc2lnbm1lbnRcXGFza21lL3NyY1xcYXBwXFxjb3JlXFxoZWFkZXJcXGhlYWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29yZS9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5maXhlZC10b3AtaGVhZGVye1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgei1pbmRleDogMTA7XHJcbn0iLCIuZml4ZWQtdG9wLWhlYWRlciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogMTA7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/core/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_core_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/core.service */ "./src/app/services/core.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function LoginComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.errorMessage, " ");
} }
class LoginComponent {
    constructor(coreService, route) {
        this.coreService = coreService;
        this.route = route;
        this.allUsers = [];
        this.validUser = (username, password) => {
            if (this.allUsers.length === 0) {
                return false;
            }
            let loggedInUser = '';
            this.allUsers.forEach(user => {
                if ((user.userName === username && user.password === password)
                    || (user.userEmail === username && user.password === password)) {
                    loggedInUser = user;
                    return;
                }
            });
            return loggedInUser;
        };
    }
    ngOnInit() {
        this.errorMessage = '';
        this.getUsers();
    }
    getUsers() {
        this.coreService.getUser()
            .subscribe(response => {
            console.log(response);
            this.allUsers = response;
        }, error => {
            console.log(error);
        });
    }
    loginToApp() {
        this.errorMessage = '';
        const result = this.validUser(this.userName, this.password);
        if (result) {
            localStorage.setItem('currentUser', JSON.stringify(result));
            this.route.navigateByUrl('/dashboard');
        }
        else {
            this.errorMessage = 'Invalid Details, please try with correct details';
        }
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_core_service__WEBPACK_IMPORTED_MODULE_1__["CoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 21, vars: 3, consts: [[1, "container-fluid"], [1, "row", "no-gutter"], [1, "d-none", "d-md-flex", "col-md-4", "col-lg-6", "bg-image"], [1, "col-md-8", "col-lg-6"], [1, "login", "d-flex", "align-items-center", "py-5"], [1, "container"], [1, "row"], [1, "col-md-9", "col-lg-8", "mx-auto"], [1, "login-heading", "mb-4"], ["for", "inputEmail"], [1, "form-label-group"], ["type", "email", "id", "inputEmail", "placeholder", "Email address", "required", "", "autofocus", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "inputPassword"], ["type", "password", "id", "inputPassword", "placeholder", "Password", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "btn", "btn-lg", "btn-primary", "btn-block", "btn-login", "text-uppercase", "font-weight-bold", "mb-2", 3, "click"], ["class", "text-center", "class", "error-message", 4, "ngIf"], [1, "error-message"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Welcome to AskME!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "User Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_13_listener($event) { return ctx.userName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_17_listener($event) { return ctx.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_18_listener() { return ctx.loginToApp(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Sign in");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, LoginComponent_div_20_Template, 2, 1, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errorMessage);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: ["[_ngcontent-%COMP%]:root {\n  --input-padding-x: 1.5rem;\n  --input-padding-y: 0.75rem;\n}\n\n.login[_ngcontent-%COMP%], .image[_ngcontent-%COMP%] {\n  min-height: 100vh;\n}\n\n.bg-image[_ngcontent-%COMP%] {\n  background-image: url('landing.jpg');\n  background-size: cover;\n  background-position: center;\n}\n\n.login-heading[_ngcontent-%COMP%] {\n  font-weight: 300;\n}\n\n.btn-login[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  letter-spacing: 0.05rem;\n  padding: 0.75rem 1rem;\n  border-radius: 2rem;\n}\n\n.form-label-group[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 1rem;\n}\n\n.form-label-group[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%], .form-label-group[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%] {\n  height: 35px;\n}\n\n.form-label-group[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%] {\n  position: absolute;\n  padding-left: 10px;\n  padding-top: 5px;\n  top: 0;\n  left: 0;\n  display: block;\n  width: 100%;\n  margin-bottom: 0;\n  \n  line-height: 1.5;\n  color: #495057;\n  cursor: text;\n  \n  border: 1px solid transparent;\n  border-radius: 0.25rem;\n  transition: all 0.1s ease-in-out;\n}\n\n.form-label-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-ms-input-placeholder {\n  color: transparent;\n}\n\n.form-label-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-moz-placeholder {\n  color: transparent;\n}\n\n.form-label-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: transparent;\n}\n\n.form-label-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not(:placeholder-shown)    ~ label[_ngcontent-%COMP%] {\n  padding-top: calc(var(--input-padding-y) / 3);\n  padding-bottom: calc(var(--input-padding-y) / 3);\n  font-size: 12px;\n  color: #777;\n}\n\n.error-message[_ngcontent-%COMP%] {\n  color: red;\n}\n\n\n\n@supports (-ms-ime-align: auto) {\n  .form-label-group[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .form-label-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-ms-input-placeholder {\n    color: #777;\n  }\n}\n\n\n\n@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n  .form-label-group[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .form-label-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:-ms-input-placeholder {\n    color: #777;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9sb2dpbi9DOlxcVXNlcnNcXFByZXJuYVxcYXNzaWdubWVudFxcYXNrbWUvc3JjXFxhcHBcXGNvcmVcXGxvZ2luXFxsb2dpbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29yZS9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0VBQ0EsMEJBQUE7QUNDSjs7QURFRTs7RUFFRSxpQkFBQTtBQ0NKOztBREVFO0VBQ0Usb0NBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0FDQ0o7O0FERUU7RUFDRSxnQkFBQTtBQ0NKOztBREVFO0VBQ0UsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURFRTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURFRTs7RUFHRSxZQUFBO0FDQUo7O0FER0U7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtFQUNBLDZCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQ0FBQTtBQ0FKOztBRFdFO0VBQ0Usa0JBQUE7QUNBSjs7QURHRTtFQUNFLGtCQUFBO0FDQUo7O0FER0U7RUFDRSxrQkFBQTtBQ0FKOztBRElFO0VBQ0UsNkNBQUE7RUFDQSxnREFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FDREo7O0FESUU7RUFDRSxVQUFBO0FDREo7O0FESUU7b0RBQUE7O0FBR0E7RUFDRTtJQUNFLGFBQUE7RUNGSjs7RURJRTtJQUNFLFdBQUE7RUNESjtBQUNGOztBRElFO29EQUFBOztBQUdBO0VBRUU7SUFDRSxhQUFBO0VDSko7O0VETUU7SUFDRSxXQUFBO0VDSEo7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6cm9vdCB7XHJcbiAgICAtLWlucHV0LXBhZGRpbmcteDogMS41cmVtO1xyXG4gICAgLS1pbnB1dC1wYWRkaW5nLXk6IDAuNzVyZW07XHJcbiAgfVxyXG4gIFxyXG4gIC5sb2dpbixcclxuICAuaW1hZ2Uge1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgfVxyXG4gIFxyXG4gIC5iZy1pbWFnZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vLi4vLi4vLi4vYXNzZXRzL2xhbmRpbmcuanBnJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICAubG9naW4taGVhZGluZyB7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gIH1cclxuICBcclxuICAuYnRuLWxvZ2luIHtcclxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDVyZW07XHJcbiAgICBwYWRkaW5nOiAwLjc1cmVtIDFyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAycmVtO1xyXG4gIH1cclxuICBcclxuICAuZm9ybS1sYWJlbC1ncm91cCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gIH1cclxuICBcclxuICAuZm9ybS1sYWJlbC1ncm91cD5pbnB1dCxcclxuICAuZm9ybS1sYWJlbC1ncm91cD5sYWJlbCB7XHJcbiAgICAvL3BhZGRpbmc6IHZhcigtLWlucHV0LXBhZGRpbmcteSkgdmFyKC0taW5wdXQtcGFkZGluZy14KTtcclxuICAgIGhlaWdodDogMzVweDtcclxuICB9XHJcbiAgXHJcbiAgLmZvcm0tbGFiZWwtZ3JvdXA+bGFiZWwge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDVweDtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIC8qIE92ZXJyaWRlIGRlZmF1bHQgYDxsYWJlbD5gIG1hcmdpbiAqL1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgIGNvbG9yOiAjNDk1MDU3O1xyXG4gICAgY3Vyc29yOiB0ZXh0O1xyXG4gICAgLyogTWF0Y2ggdGhlIGlucHV0IHVuZGVyIHRoZSBsYWJlbCAqL1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAuMjVyZW07XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjFzIGVhc2UtaW4tb3V0O1xyXG4gIH1cclxuICBcclxuICAuZm9ybS1sYWJlbC1ncm91cCBpbnB1dDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb3JtLWxhYmVsLWdyb3VwIGlucHV0Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb3JtLWxhYmVsLWdyb3VwIGlucHV0OjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIH1cclxuICBcclxuICAuZm9ybS1sYWJlbC1ncm91cCBpbnB1dDo6LW1vei1wbGFjZWhvbGRlciB7XHJcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb3JtLWxhYmVsLWdyb3VwIGlucHV0OjpwbGFjZWhvbGRlciB7XHJcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIC5mb3JtLWxhYmVsLWdyb3VwIGlucHV0Om5vdCg6cGxhY2Vob2xkZXItc2hvd24pfmxhYmVsIHtcclxuICAgIHBhZGRpbmctdG9wOiBjYWxjKHZhcigtLWlucHV0LXBhZGRpbmcteSkgLyAzKTtcclxuICAgIHBhZGRpbmctYm90dG9tOiBjYWxjKHZhcigtLWlucHV0LXBhZGRpbmcteSkgLyAzKTtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGNvbG9yOiAjNzc3O1xyXG4gIH1cclxuXHJcbiAgLmVycm9yLW1lc3NhZ2V7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gIH1cclxuICBcclxuICAvKiBGYWxsYmFjayBmb3IgRWRnZVxyXG4gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbiAgXHJcbiAgQHN1cHBvcnRzICgtbXMtaW1lLWFsaWduOiBhdXRvKSB7XHJcbiAgICAuZm9ybS1sYWJlbC1ncm91cD5sYWJlbCB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAuZm9ybS1sYWJlbC1ncm91cCBpbnB1dDo6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICAgICAgY29sb3I6ICM3Nzc7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC8qIEZhbGxiYWNrIGZvciBJRVxyXG4gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbiAgXHJcbiAgQG1lZGlhIGFsbCBhbmQgKC1tcy1oaWdoLWNvbnRyYXN0OiBub25lKSxcclxuICAoLW1zLWhpZ2gtY29udHJhc3Q6IGFjdGl2ZSkge1xyXG4gICAgLmZvcm0tbGFiZWwtZ3JvdXA+bGFiZWwge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gICAgLmZvcm0tbGFiZWwtZ3JvdXAgaW5wdXQ6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICAgICAgY29sb3I6ICM3Nzc7XHJcbiAgICB9XHJcbiAgfSIsIjpyb290IHtcbiAgLS1pbnB1dC1wYWRkaW5nLXg6IDEuNXJlbTtcbiAgLS1pbnB1dC1wYWRkaW5nLXk6IDAuNzVyZW07XG59XG5cbi5sb2dpbixcbi5pbWFnZSB7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xufVxuXG4uYmctaW1hZ2Uge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLy4uLy4uLy4uL2Fzc2V0cy9sYW5kaW5nLmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xufVxuXG4ubG9naW4taGVhZGluZyB7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5cbi5idG4tbG9naW4ge1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDVyZW07XG4gIHBhZGRpbmc6IDAuNzVyZW0gMXJlbTtcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcbn1cblxuLmZvcm0tbGFiZWwtZ3JvdXAge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5cbi5mb3JtLWxhYmVsLWdyb3VwID4gaW5wdXQsXG4uZm9ybS1sYWJlbC1ncm91cCA+IGxhYmVsIHtcbiAgaGVpZ2h0OiAzNXB4O1xufVxuXG4uZm9ybS1sYWJlbC1ncm91cCA+IGxhYmVsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICAvKiBPdmVycmlkZSBkZWZhdWx0IGA8bGFiZWw+YCBtYXJnaW4gKi9cbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgY29sb3I6ICM0OTUwNTc7XG4gIGN1cnNvcjogdGV4dDtcbiAgLyogTWF0Y2ggdGhlIGlucHV0IHVuZGVyIHRoZSBsYWJlbCAqL1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMXMgZWFzZS1pbi1vdXQ7XG59XG5cbi5mb3JtLWxhYmVsLWdyb3VwIGlucHV0Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uZm9ybS1sYWJlbC1ncm91cCBpbnB1dDotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBjb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5mb3JtLWxhYmVsLWdyb3VwIGlucHV0OjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBjb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5mb3JtLWxhYmVsLWdyb3VwIGlucHV0OjotbW96LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uZm9ybS1sYWJlbC1ncm91cCBpbnB1dDo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5mb3JtLWxhYmVsLWdyb3VwIGlucHV0Om5vdCg6cGxhY2Vob2xkZXItc2hvd24pIH4gbGFiZWwge1xuICBwYWRkaW5nLXRvcDogY2FsYyh2YXIoLS1pbnB1dC1wYWRkaW5nLXkpIC8gMyk7XG4gIHBhZGRpbmctYm90dG9tOiBjYWxjKHZhcigtLWlucHV0LXBhZGRpbmcteSkgLyAzKTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzc3Nztcbn1cblxuLmVycm9yLW1lc3NhZ2Uge1xuICBjb2xvcjogcmVkO1xufVxuXG4vKiBGYWxsYmFjayBmb3IgRWRnZVxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbkBzdXBwb3J0cyAoLW1zLWltZS1hbGlnbjogYXV0bykge1xuICAuZm9ybS1sYWJlbC1ncm91cCA+IGxhYmVsIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLmZvcm0tbGFiZWwtZ3JvdXAgaW5wdXQ6Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgY29sb3I6ICM3Nzc7XG4gIH1cbn1cbi8qIEZhbGxiYWNrIGZvciBJRVxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbkBtZWRpYSBhbGwgYW5kICgtbXMtaGlnaC1jb250cmFzdDogbm9uZSksICgtbXMtaGlnaC1jb250cmFzdDogYWN0aXZlKSB7XG4gIC5mb3JtLWxhYmVsLWdyb3VwID4gbGFiZWwge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAuZm9ybS1sYWJlbC1ncm91cCBpbnB1dDotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiAjNzc3O1xuICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.scss']
            }]
    }], function () { return [{ type: _services_core_service__WEBPACK_IMPORTED_MODULE_1__["CoreService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/user-profile/user-profile.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/core/user-profile/user-profile.component.ts ***!
  \*************************************************************/
/*! exports provided: UserProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function() { return UserProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../header/header.component */ "./src/app/core/header/header.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _features_feed_feed_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../features/feed/feed.component */ "./src/app/features/feed/feed.component.ts");
/* harmony import */ var _shared_tags_tags_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/tags/tags.component */ "./src/app/shared/tags/tags.component.ts");
/* harmony import */ var _features_activity_activity_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../features/activity/activity.component */ "./src/app/features/activity/activity.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../footer/footer.component */ "./src/app/core/footer/footer.component.ts");








function UserProfileComponent_span_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tag_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tag_r1);
} }
class UserProfileComponent {
    constructor() {
        this.currentUserQuestion = [];
        this.filteredUserQuestions = [];
    }
    ngOnInit() {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        const allQuestions = JSON.parse(localStorage.getItem('allQuestions'));
        if (allQuestions) {
            allQuestions.forEach(question => {
                if (question.author === this.currentUser.userName) {
                    this.currentUserQuestion.push(question);
                    this.filteredUserQuestions.push(question);
                }
            });
        }
    }
    filterData(event) {
        this.filteredUserQuestions = [];
        if (event === '') {
            this.filteredUserQuestions = this.currentUserQuestion;
            return;
        }
        this.currentUserQuestion.forEach(quest => {
            const q = quest.tags.filter(tag => tag.id === event);
            if (q.length > 0) {
                this.filteredUserQuestions.push(quest);
            }
        });
    }
}
UserProfileComponent.ɵfac = function UserProfileComponent_Factory(t) { return new (t || UserProfileComponent)(); };
UserProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserProfileComponent, selectors: [["app-user-profile"]], decls: 39, vars: 6, consts: [[1, "container"], ["href", "//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.min.css", "rel", "stylesheet"], [1, "row"], [1, "col-md-offset-2", "col-md-8", "col-lg-offset-3", "col-lg-6"], [1, "well", "profile"], [1, "col-sm-12"], [1, "col-xs-12", "col-sm-8"], ["class", "tags", 4, "ngFor", "ngForOf"], [1, "my-4"], [1, "col"], [3, "feed"], [1, "col-md-4"], [1, "card", "my-4"], [3, "tag"], [1, "tags"]], template: function UserProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "link", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Registered Email: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "About: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Hobbies: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Active In: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, UserProfileComponent_span_26_Template, 2, 1, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h3", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Questions Asked by You ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "app-feed", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "app-tags", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("tag", function UserProfileComponent_Template_app_tags_tag_36_listener($event) { return ctx.filterData($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "app-activity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.currentUser == null ? null : ctx.currentUser.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.currentUser == null ? null : ctx.currentUser.email, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.currentUser == null ? null : ctx.currentUser.about, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.currentUser == null ? null : ctx.currentUser.hobbies, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.currentUser == null ? null : ctx.currentUser.active);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("feed", ctx.filteredUserQuestions);
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _features_feed_feed_component__WEBPACK_IMPORTED_MODULE_3__["FeedComponent"], _shared_tags_tags_component__WEBPACK_IMPORTED_MODULE_4__["TagsComponent"], _features_activity_activity_component__WEBPACK_IMPORTED_MODULE_5__["ActivityComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"]], styles: ["@import url(http://fonts.googleapis.com/css?family=Lato:400,700);\nbody[_ngcontent-%COMP%] {\n  font-family: \"Lato\", \"sans-serif\";\n}\n.profile[_ngcontent-%COMP%] {\n  min-height: 230px;\n  display: inline-block;\n}\nfigcaption.ratings[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\nfigcaption.ratings[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #f1c40f;\n  font-size: 11px;\n}\nfigcaption.ratings[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #f39c12;\n  text-decoration: none;\n}\n.divider[_ngcontent-%COMP%] {\n  border-top: 1px solid rgba(0, 0, 0, 0.1);\n}\n.emphasis[_ngcontent-%COMP%] {\n  border-top: 4px solid transparent;\n}\n.emphasis[_ngcontent-%COMP%]:hover {\n  border-top: 4px solid #1abc9c;\n}\n.emphasis[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\nspan.tags[_ngcontent-%COMP%] {\n  background: #1abc9c;\n  border-radius: 2px;\n  color: #f5f5f5;\n  font-weight: bold;\n  padding: 2px 4px;\n  margin: 4px;\n}\n.dropdown-menu[_ngcontent-%COMP%] {\n  background-color: #34495e;\n  box-shadow: none;\n  -webkit-box-shadow: none;\n  width: 250px;\n  margin-left: -125px;\n  left: 50%;\n}\n.dropdown-menu[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%] {\n  background: none;\n}\n.dropdown-menu[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  color: #f5f5f5;\n}\n.dropup[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n.dropup[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]:before {\n  content: \"\";\n  border-top: 10px solid #34495e;\n  border-right: 10px solid transparent;\n  border-left: 10px solid transparent;\n  position: absolute;\n  bottom: -10px;\n  left: 50%;\n  margin-left: -10px;\n  z-index: 10;\n}\n.container[_ngcontent-%COMP%] {\n  margin-top: 80px;\n  background-color: aliceblue;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS91c2VyLXByb2ZpbGUvQzpcXFVzZXJzXFxQcmVybmFcXGFzc2lnbm1lbnRcXGFza21lL3NyY1xcYXBwXFxjb3JlXFx1c2VyLXByb2ZpbGVcXHVzZXItcHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29yZS91c2VyLXByb2ZpbGUvdXNlci1wcm9maWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLGdFQUFBO0FBQ1I7RUFFSSxpQ0FBQTtBQ0FKO0FERUE7RUFFSSxpQkFBQTtFQUNBLHFCQUFBO0FDQUo7QURFQTtFQUVJLGdCQUFBO0FDQUo7QURFQTtFQUVJLGNBQUE7RUFDQSxlQUFBO0FDQUo7QURFQTtFQUVJLGNBQUE7RUFDQSxxQkFBQTtBQ0FKO0FERUE7RUFFSSx3Q0FBQTtBQ0FKO0FERUE7RUFFSSxpQ0FBQTtBQ0FKO0FERUE7RUFFSSw2QkFBQTtBQ0FKO0FERUE7RUFFSSxnQkFBQTtBQ0FKO0FERUE7RUFFSSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FDQUo7QURFQTtFQUVJLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7QUNBSjtBREVBO0VBRUksZ0JBQUE7QUNBSjtBREVBO0VBRUksY0FBQTtBQ0FKO0FERUE7RUFFSSxtQkFBQTtBQ0FKO0FERUE7RUFFSSxXQUFBO0VBQ0EsOEJBQUE7RUFDQSxvQ0FBQTtFQUNBLG1DQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ0FKO0FER0E7RUFDSSxnQkFBQTtFQUVBLDJCQUFBO0FDREoiLCJmaWxlIjoic3JjL2FwcC9jb3JlL3VzZXItcHJvZmlsZS91c2VyLXByb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybChodHRwOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1MYXRvOjQwMCw3MDApO1xyXG5ib2R5XHJcbntcclxuICAgIGZvbnQtZmFtaWx5OiAnTGF0bycsICdzYW5zLXNlcmlmJztcclxuICAgIH1cclxuLnByb2ZpbGUgXHJcbntcclxuICAgIG1pbi1oZWlnaHQ6IDIzMHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgfVxyXG5maWdjYXB0aW9uLnJhdGluZ3Ncclxue1xyXG4gICAgbWFyZ2luLXRvcDoyMHB4O1xyXG4gICAgfVxyXG5maWdjYXB0aW9uLnJhdGluZ3MgYVxyXG57XHJcbiAgICBjb2xvcjojZjFjNDBmO1xyXG4gICAgZm9udC1zaXplOjExcHg7XHJcbiAgICB9XHJcbmZpZ2NhcHRpb24ucmF0aW5ncyBhOmhvdmVyXHJcbntcclxuICAgIGNvbG9yOiNmMzljMTI7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246bm9uZTtcclxuICAgIH1cclxuLmRpdmlkZXIgXHJcbntcclxuICAgIGJvcmRlci10b3A6MXB4IHNvbGlkIHJnYmEoMCwwLDAsMC4xKTtcclxuICAgIH1cclxuLmVtcGhhc2lzIFxyXG57XHJcbiAgICBib3JkZXItdG9wOiA0cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICB9XHJcbi5lbXBoYXNpczpob3ZlciBcclxue1xyXG4gICAgYm9yZGVyLXRvcDogNHB4IHNvbGlkICMxYWJjOWM7XHJcbiAgICB9XHJcbi5lbXBoYXNpcyBoMlxyXG57XHJcbiAgICBtYXJnaW4tYm90dG9tOjA7XHJcbiAgICB9XHJcbnNwYW4udGFncyBcclxue1xyXG4gICAgYmFja2dyb3VuZDogIzFhYmM5YztcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgIGNvbG9yOiAjZjVmNWY1O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBwYWRkaW5nOiAycHggNHB4O1xyXG4gICAgbWFyZ2luOiA0cHg7XHJcbiAgICB9XHJcbi5kcm9wZG93bi1tZW51IFxyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQ0OTVlOyAgICBcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICB3aWR0aDogMjUwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogLTEyNXB4O1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgfVxyXG4uZHJvcGRvd24tbWVudSAuZGl2aWRlciBcclxue1xyXG4gICAgYmFja2dyb3VuZDpub25lOyAgICBcclxuICAgIH1cclxuLmRyb3Bkb3duLW1lbnU+bGk+YVxyXG57XHJcbiAgICBjb2xvcjojZjVmNWY1O1xyXG4gICAgfVxyXG4uZHJvcHVwIC5kcm9wZG93bi1tZW51IFxyXG57XHJcbiAgICBtYXJnaW4tYm90dG9tOjEwcHg7XHJcbiAgICB9XHJcbi5kcm9wdXAgLmRyb3Bkb3duLW1lbnU6YmVmb3JlIFxyXG57XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgYm9yZGVyLXRvcDogMTBweCBzb2xpZCAjMzQ0OTVlO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAxMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLWxlZnQ6IDEwcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IC0xMHB4O1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xyXG4gICAgei1pbmRleDogMTA7XHJcbiAgICB9XHJcblxyXG4uY29udGFpbmVye1xyXG4gICAgbWFyZ2luLXRvcDogODBweDtcclxuICAgIFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xyXG59IiwiQGltcG9ydCB1cmwoaHR0cDovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TGF0bzo0MDAsNzAwKTtcbmJvZHkge1xuICBmb250LWZhbWlseTogXCJMYXRvXCIsIFwic2Fucy1zZXJpZlwiO1xufVxuXG4ucHJvZmlsZSB7XG4gIG1pbi1oZWlnaHQ6IDIzMHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbmZpZ2NhcHRpb24ucmF0aW5ncyB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbmZpZ2NhcHRpb24ucmF0aW5ncyBhIHtcbiAgY29sb3I6ICNmMWM0MGY7XG4gIGZvbnQtc2l6ZTogMTFweDtcbn1cblxuZmlnY2FwdGlvbi5yYXRpbmdzIGE6aG92ZXIge1xuICBjb2xvcjogI2YzOWMxMjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uZGl2aWRlciB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cbi5lbXBoYXNpcyB7XG4gIGJvcmRlci10b3A6IDRweCBzb2xpZCB0cmFuc3BhcmVudDtcbn1cblxuLmVtcGhhc2lzOmhvdmVyIHtcbiAgYm9yZGVyLXRvcDogNHB4IHNvbGlkICMxYWJjOWM7XG59XG5cbi5lbXBoYXNpcyBoMiB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbnNwYW4udGFncyB7XG4gIGJhY2tncm91bmQ6ICMxYWJjOWM7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgY29sb3I6ICNmNWY1ZjU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nOiAycHggNHB4O1xuICBtYXJnaW46IDRweDtcbn1cblxuLmRyb3Bkb3duLW1lbnUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQ0OTVlO1xuICBib3gtc2hhZG93OiBub25lO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XG4gIHdpZHRoOiAyNTBweDtcbiAgbWFyZ2luLWxlZnQ6IC0xMjVweDtcbiAgbGVmdDogNTAlO1xufVxuXG4uZHJvcGRvd24tbWVudSAuZGl2aWRlciB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG59XG5cbi5kcm9wZG93bi1tZW51ID4gbGkgPiBhIHtcbiAgY29sb3I6ICNmNWY1ZjU7XG59XG5cbi5kcm9wdXAgLmRyb3Bkb3duLW1lbnUge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uZHJvcHVwIC5kcm9wZG93bi1tZW51OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJvcmRlci10b3A6IDEwcHggc29saWQgIzM0NDk1ZTtcbiAgYm9yZGVyLXJpZ2h0OiAxMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItbGVmdDogMTBweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IC0xMHB4O1xuICBsZWZ0OiA1MCU7XG4gIG1hcmdpbi1sZWZ0OiAtMTBweDtcbiAgei1pbmRleDogMTA7XG59XG5cbi5jb250YWluZXIge1xuICBtYXJnaW4tdG9wOiA4MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-user-profile',
                templateUrl: './user-profile.component.html',
                styleUrls: ['./user-profile.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/features/activity/activity.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/features/activity/activity.component.ts ***!
  \*********************************************************/
/*! exports provided: ActivityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityComponent", function() { return ActivityComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function ActivityComponent_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1.message, "");
} }
class ActivityComponent {
    constructor() {
        this.allNotifications = [];
    }
    ngOnInit() {
        this.getMessagesForCurrentUser();
    }
    getMessagesForCurrentUser() {
        this.allNotifications = JSON.parse(localStorage.getItem('notifications'));
        if (!this.allNotifications) {
            this.allNotifications = [];
        }
        this.allNotifications.filter(message => message.to === JSON.parse(localStorage.getItem('currentUser')).name);
    }
}
ActivityComponent.ɵfac = function ActivityComponent_Factory(t) { return new (t || ActivityComponent)(); };
ActivityComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ActivityComponent, selectors: [["app-activity"]], inputs: { notifications: "notifications" }, decls: 5, vars: 1, consts: [[1, "card", "my-4"], [1, "card-header"], [1, "card-body"], [4, "ngFor", "ngForOf"]], template: function ActivityComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Friends Activity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ActivityComponent_li_4_Template, 2, 1, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.allNotifications);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL2FjdGl2aXR5L2FjdGl2aXR5LmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ActivityComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-activity',
                templateUrl: './activity.component.html',
                styleUrls: ['./activity.component.scss']
            }]
    }], function () { return []; }, { notifications: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/features/dashboard/dashboard.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/features/dashboard/dashboard.component.ts ***!
  \***********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/header/header.component */ "./src/app/core/header/header.component.ts");
/* harmony import */ var _post_post_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../post/post.component */ "./src/app/features/post/post.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _feed_feed_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../feed/feed.component */ "./src/app/features/feed/feed.component.ts");
/* harmony import */ var _shared_tags_tags_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/tags/tags.component */ "./src/app/shared/tags/tags.component.ts");
/* harmony import */ var _activity_activity_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../activity/activity.component */ "./src/app/features/activity/activity.component.ts");
/* harmony import */ var _core_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/footer/footer.component */ "./src/app/core/footer/footer.component.ts");









function DashboardComponent_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "All caught up for today!!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class DashboardComponent {
    constructor() {
        this.allQuestions = [];
        this.questionsToAnswer = [];
        this.filteredQuestionsToAnswer = [];
        this.notifications = [];
    }
    ngOnInit() {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.allQuestions = JSON.parse(localStorage.getItem('allQuestions'));
        if (!this.allQuestions) {
            this.allQuestions = [];
        }
        else {
            this.getQuestionToAnswer(this.allQuestions);
        }
    }
    questionAdded(event) {
        this.allQuestions.push(event);
        this.getQuestionToAnswer(this.allQuestions);
        localStorage.setItem('allQuestions', JSON.stringify(this.allQuestions));
    }
    getQuestionToAnswer(question) {
        if (this.allQuestions) {
            this.allQuestions.forEach(quest => {
                if (quest.author !== this.currentUser.userName) {
                    this.questionsToAnswer.push(quest);
                    this.filteredQuestionsToAnswer.push(quest);
                }
            });
        }
    }
    fetchNotifications(event) {
        this.notifications = event;
    }
    filterTag(event) {
        this.filteredQuestionsToAnswer = [];
        if (event === '') {
            this.filteredQuestionsToAnswer = this.questionsToAnswer;
            return;
        }
        this.questionsToAnswer.forEach(question => {
            const q = question.tags.filter(tag => tag.id === event);
            if (q.length > 0) {
                this.filteredQuestionsToAnswer.push(question);
            }
        });
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(); };
DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 16, vars: 3, consts: [[1, "container"], [1, "row"], [1, "col-md-8"], [1, "card", "mb-4"], [3, "questionContent"], [1, "my-4"], [4, "ngIf"], [3, "feed", "notification"], [1, "col-md-4"], [1, "card", "my-4"], [3, "tag"], [3, "notifications"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "app-post", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("questionContent", function DashboardComponent_Template_app_post_questionContent_5_listener($event) { return ctx.questionAdded($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Your Feed ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, DashboardComponent_span_9_Template, 2, 0, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "app-feed", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("notification", function DashboardComponent_Template_app_feed_notification_10_listener($event) { return ctx.fetchNotifications($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "app-tags", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("tag", function DashboardComponent_Template_app_tags_tag_13_listener($event) { return ctx.filterTag($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "app-activity", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.filteredQuestionsToAnswer.length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("feed", ctx.filteredQuestionsToAnswer);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("notifications", ctx.notifications);
    } }, directives: [_core_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _post_post_component__WEBPACK_IMPORTED_MODULE_2__["PostComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _feed_feed_component__WEBPACK_IMPORTED_MODULE_4__["FeedComponent"], _shared_tags_tags_component__WEBPACK_IMPORTED_MODULE_5__["TagsComponent"], _activity_activity_component__WEBPACK_IMPORTED_MODULE_6__["ActivityComponent"], _core_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"]], styles: [".container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  padding-top: 60px;\n}\n\n.container[_ngcontent-%COMP%] {\n  background-color: aliceblue;\n}\n\nnav[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  background-color: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvZGFzaGJvYXJkL0M6XFxVc2Vyc1xcUHJlcm5hXFxhc3NpZ25tZW50XFxhc2ttZS9zcmNcXGFwcFxcZmVhdHVyZXNcXGRhc2hib2FyZFxcZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9mZWF0dXJlcy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7QUNDSjs7QURFQTtFQUNJLDJCQUFBO0FDQ0o7O0FERUE7RUFDSSw2QkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvZmVhdHVyZXMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIgLnJvd3tcclxuICAgIHBhZGRpbmctdG9wOiA2MHB4O1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcclxufVxyXG5cclxubmF2IC5jb250YWluZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxufSIsIi5jb250YWluZXIgLnJvdyB7XG4gIHBhZGRpbmctdG9wOiA2MHB4O1xufVxuXG4uY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xufVxuXG5uYXYgLmNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dashboard',
                templateUrl: './dashboard.component.html',
                styleUrls: ['./dashboard.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/features/feed/feed.component.ts":
/*!*************************************************!*\
  !*** ./src/app/features/feed/feed.component.ts ***!
  \*************************************************/
/*! exports provided: FeedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedComponent", function() { return FeedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");




function FeedComponent_div_0_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tag_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tag_r7.value);
} }
function FeedComponent_div_0_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const answer_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](answer_r8.content);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Answered on ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 3, answer_r8.date), " by ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](answer_r8.author);
} }
function FeedComponent_div_0_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "textarea", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FeedComponent_div_0_div_9_Template_textarea_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r9.answer = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r5.answer);
} }
function FeedComponent_div_0_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FeedComponent_div_0_div_10_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.cancelAnswer(item_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " \u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FeedComponent_div_0_div_10_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.submitAnswer(item_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Submit Answer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FeedComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, FeedComponent_div_0_span_5_Template, 2, 1, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, FeedComponent_div_0_div_6_Template, 8, 5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FeedComponent_div_0_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const item_r2 = ctx.$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.putAnswer(item_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Answer this \u2192");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, FeedComponent_div_0_div_9_Template, 2, 1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, FeedComponent_div_0_div_10_Template, 6, 0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2.content);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r2.tags);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r2.answers);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r2.currentAnswered);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r2.currentAnswered);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Posted on ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 7, item_r2.date), " by ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2.author);
} }
function FeedComponent_ul_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u2190 Older");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Newer \u2192");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class FeedComponent {
    constructor() {
        this.notification = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.answer = '';
        this.allNotifications = [];
    }
    ngOnInit() {
        console.log(this.feed);
    }
    ngOnChanges(change) {
        if (change.feed) {
            this.feed = change.feed.currentValue;
        }
    }
    putAnswer(item) {
        this.feed.forEach(element => {
            element.currentAnswered = false;
        });
        item.currentAnswered = true;
    }
    cancelAnswer(item) {
        this.feed.forEach(element => {
            element.currentAnswered = false;
        });
    }
    submitAnswer(item) {
        const currentUser = JSON.parse(localStorage.getItem('currentUser')).userName;
        const answer = {
            id: Math.random(),
            author: currentUser,
            content: this.answer,
            date: new Date(),
            subComment: ''
        };
        const notification = {
            to: item.author,
            from: currentUser,
            message: currentUser + ' Answered your question \'' + item.content.substring(0, 25) + '...\''
        };
        this.setNotification(notification);
        item.answers.push(answer);
        item.currentAnswered = false;
        localStorage.setItem('allQuestions', JSON.stringify(this.feed));
    }
    setNotification(notification) {
        this.allNotifications = JSON.parse(localStorage.getItem('notifications'));
        if (!this.allNotifications) {
            this.allNotifications = [];
        }
        this.allNotifications.push(notification);
        localStorage.setItem('notifications', JSON.stringify(this.allNotifications));
        this.notification.emit(this.allNotifications);
    }
}
FeedComponent.ɵfac = function FeedComponent_Factory(t) { return new (t || FeedComponent)(); };
FeedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FeedComponent, selectors: [["app-feed"]], inputs: { feed: "feed" }, outputs: { notification: "notification" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 2, vars: 2, consts: [["class", "card mb-4", 4, "ngFor", "ngForOf"], ["class", "pagination justify-content-center mb-4", 4, "ngIf"], [1, "card", "mb-4"], [1, "card-body"], [1, "card-text"], [1, "row", "all-tags"], ["class", "question-tag", 4, "ngFor", "ngForOf"], ["class", "card-body", 4, "ngFor", "ngForOf"], [1, "btn", "btn-info", 3, "click"], ["class", "input-group", 4, "ngIf"], [1, "card-footer", "text-muted"], ["href", "#"], [1, "question-tag"], [1, "answers-comment-section"], [1, "input-group"], ["type", "text", "placeholder", "And the answer is..???", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "btn", "btn-danger", 3, "click"], [1, "btn", "btn-primary", 3, "click"], [1, "pagination", "justify-content-center", "mb-4"], [1, "page-item"], [1, "page-link"], [1, "page-item", "disabled"]], template: function FeedComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, FeedComponent_div_0_Template, 17, 9, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FeedComponent_ul_1_Template, 7, 0, "ul", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.feed.reverse());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.feed.length > 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]], styles: [".input-group[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n\n.answers-comment-section[_ngcontent-%COMP%] {\n  padding-left: 20px;\n}\n\n.question-tag[_ngcontent-%COMP%] {\n  margin-left: 2px;\n  margin-right: 2px;\n  padding: 1px;\n  background-color: bisque;\n  border-radius: 5px;\n}\n\n.all-tags[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvZmVlZC9DOlxcVXNlcnNcXFByZXJuYVxcYXNzaWdubWVudFxcYXNrbWUvc3JjXFxhcHBcXGZlYXR1cmVzXFxmZWVkXFxmZWVkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9mZWF0dXJlcy9mZWVkL2ZlZWQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxpQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvZmVhdHVyZXMvZmVlZC9mZWVkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlucHV0LWdyb3Vwe1xyXG4gICAgcGFkZGluZzoxMHB4O1xyXG59XHJcblxyXG4uYW5zd2Vycy1jb21tZW50LXNlY3Rpb257XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbn1cclxuXHJcbi5xdWVzdGlvbi10YWd7XHJcbiAgICBtYXJnaW4tbGVmdDogMnB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAycHg7XHJcbiAgICBwYWRkaW5nOiAxcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBiaXNxdWU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbi5hbGwtdGFnc3tcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59IiwiLmlucHV0LWdyb3VwIHtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLmFuc3dlcnMtY29tbWVudC1zZWN0aW9uIHtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xufVxuXG4ucXVlc3Rpb24tdGFnIHtcbiAgbWFyZ2luLWxlZnQ6IDJweDtcbiAgbWFyZ2luLXJpZ2h0OiAycHg7XG4gIHBhZGRpbmc6IDFweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmlzcXVlO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5hbGwtdGFncyB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FeedComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-feed',
                templateUrl: './feed.component.html',
                styleUrls: ['./feed.component.scss']
            }]
    }], function () { return []; }, { feed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], notification: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/features/post/post.component.ts":
/*!*************************************************!*\
  !*** ./src/app/features/post/post.component.ts ***!
  \*************************************************/
/*! exports provided: PostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostComponent", function() { return PostComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-api.js");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/toast */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-toast.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-multiselect-dropdown */ "./node_modules/ng-multiselect-dropdown/__ivy_ngcc__/fesm2015/ng-multiselect-dropdown.js");







class PostComponent {
    constructor(messageService) {
        this.messageService = messageService;
        this.dropdownList = [];
        this.selectedTags = [];
        this.questionContent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        this.user = JSON.parse(localStorage.getItem('currentUser'));
        this.dropdownList = [
            { id: 'science', value: 'Science' },
            { id: 'history', value: 'History' },
            { id: 'politics', value: 'Politics' },
            { id: 'literature', value: 'Literature' },
            { id: 'socialLife', value: 'Social Life' },
            { id: 'arts', value: 'Arts' }
        ];
        this.dropdownSettings = {
            singleSelection: false,
            idField: 'id',
            textField: 'value',
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            allowSearchFilter: true
        };
    }
    onItemSelect(item) {
        this.selectedTags.push(item);
    }
    onSelectAll(items) {
        this.selectedTags = items;
    }
    onItemDeSelect(item) {
        console.log(item);
        this.selectedTags = this.selectedTags.filter(tag => {
            return tag.id !== item.id;
        });
        console.log(this.selectedTags);
    }
    onDeSelectAll(item) {
        this.selectedTags = [];
    }
    addQuestion() {
        const question = {
            id: new Date().getMilliseconds(),
            content: this.question,
            date: new Date().toDateString(),
            answers: [],
            tags: this.selectedTags,
            author: this.user.userName,
            comment: [],
            currentAnswered: false
        };
        this.messageService.add({
            severity: 'success',
            summary: 'Question Added',
            detail: 'Your question has been added Successfully.We are reaching out to experts to get the answer'
        });
        this.questionContent.emit(question);
    }
}
PostComponent.ɵfac = function PostComponent_Factory(t) { return new (t || PostComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_1__["MessageService"])); };
PostComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PostComponent, selectors: [["app-post"]], outputs: { questionContent: "questionContent" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([primeng_api__WEBPACK_IMPORTED_MODULE_1__["MessageService"]])], decls: 12, vars: 4, consts: [["position", "top-right"], [1, "card", "my-4"], [1, "card-header"], [1, "card-body"], [1, "input-group"], ["type", "text", "placeholder", "What if..???", 1, "form-control", 3, "ngModel", "ngModelChange"], [3, "settings", "placeholder", "data", "onSelect", "onDeSelect", "onDeSelectAll", "onSelectAll"], [1, "input-group", "button-action"], ["type", "button", 1, "btn", "btn-info", "float-right", 3, "click"]], template: function PostComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "p-toast", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Ask Your Question");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "textarea", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PostComponent_Template_textarea_ngModelChange_6_listener($event) { return ctx.question = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ng-multiselect-dropdown", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onSelect", function PostComponent_Template_ng_multiselect_dropdown_onSelect_8_listener($event) { return ctx.onItemSelect($event); })("onDeSelect", function PostComponent_Template_ng_multiselect_dropdown_onDeSelect_8_listener($event) { return ctx.onItemDeSelect($event); })("onDeSelectAll", function PostComponent_Template_ng_multiselect_dropdown_onDeSelectAll_8_listener($event) { return ctx.onDeSelectAll($event); })("onSelectAll", function PostComponent_Template_ng_multiselect_dropdown_onSelectAll_8_listener($event) { return ctx.onSelectAll($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostComponent_Template_button_click_10_listener() { return ctx.addQuestion(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Ask!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.question);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("settings", ctx.dropdownSettings)("placeholder", "Select Tags")("data", ctx.dropdownList);
    } }, directives: [primeng_toast__WEBPACK_IMPORTED_MODULE_2__["Toast"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_4__["MultiSelectComponent"]], styles: [".button-action[_ngcontent-%COMP%] {\n  padding-top: 10px;\n}\n\nng-multiselect-dropdown[_ngcontent-%COMP%] {\n  width: 50%;\n  padding-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvcG9zdC9DOlxcVXNlcnNcXFByZXJuYVxcYXNzaWdubWVudFxcYXNrbWUvc3JjXFxhcHBcXGZlYXR1cmVzXFxwb3N0XFxwb3N0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9mZWF0dXJlcy9wb3N0L3Bvc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtBQ0NKOztBREVBO0VBQ0ksVUFBQTtFQUNBLGlCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9mZWF0dXJlcy9wb3N0L3Bvc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnV0dG9uLWFjdGlvbntcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG59XHJcblxyXG5uZy1tdWx0aXNlbGVjdC1kcm9wZG93bntcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxufSIsIi5idXR0b24tYWN0aW9uIHtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG59XG5cbm5nLW11bHRpc2VsZWN0LWRyb3Bkb3duIHtcbiAgd2lkdGg6IDUwJTtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-post',
                templateUrl: './post.component.html',
                styleUrls: ['./post.component.scss'],
                providers: [primeng_api__WEBPACK_IMPORTED_MODULE_1__["MessageService"]]
            }]
    }], function () { return [{ type: primeng_api__WEBPACK_IMPORTED_MODULE_1__["MessageService"] }]; }, { questionContent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/services/auth.guard.ts":
/*!****************************************!*\
  !*** ./src/app/services/auth.guard.ts ***!
  \****************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AuthGuardService {
    constructor(router) {
        this.router = router;
    }
    canActivate() {
        const user = JSON.parse(localStorage.getItem('currentUser'));
        if (!user) {
            this.router.navigate(['login']);
            return false;
        }
        return true;
    }
}
AuthGuardService.ɵfac = function AuthGuardService_Factory(t) { return new (t || AuthGuardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
AuthGuardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuardService, factory: AuthGuardService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuardService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/core.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/core.service.ts ***!
  \******************************************/
/*! exports provided: CoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreService", function() { return CoreService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class CoreService {
    constructor(http) {
        this.http = http;
    }
    getUser() {
        return this.http.get('assets/users.json');
    }
}
CoreService.ɵfac = function CoreService_Factory(t) { return new (t || CoreService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
CoreService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CoreService, factory: CoreService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoreService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/comments/comments.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/comments/comments.component.ts ***!
  \*******************************************************/
/*! exports provided: CommentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentsComponent", function() { return CommentsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class CommentsComponent {
    constructor() { }
    ngOnInit() {
    }
}
CommentsComponent.ɵfac = function CommentsComponent_Factory(t) { return new (t || CommentsComponent)(); };
CommentsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CommentsComponent, selectors: [["app-comments"]], decls: 1, vars: 0, consts: [[1, "answers-comment-section"]], template: function CommentsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "p", 0);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21tZW50cy9jb21tZW50cy5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CommentsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-comments',
                templateUrl: './comments.component.html',
                styleUrls: ['./comments.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shared/notification/notification.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/shared/notification/notification.component.ts ***!
  \***************************************************************/
/*! exports provided: NotificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationComponent", function() { return NotificationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class NotificationComponent {
    constructor() { }
    ngOnInit() {
    }
}
NotificationComponent.ɵfac = function NotificationComponent_Factory(t) { return new (t || NotificationComponent)(); };
NotificationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotificationComponent, selectors: [["app-notification"]], decls: 2, vars: 0, template: function NotificationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "notification works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9ub3RpZmljYXRpb24vbm90aWZpY2F0aW9uLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotificationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-notification',
                templateUrl: './notification.component.html',
                styleUrls: ['./notification.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shared/tags/tags.component.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/tags/tags.component.ts ***!
  \***********************************************/
/*! exports provided: TagsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagsComponent", function() { return TagsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



class TagsComponent {
    constructor() {
        this.tag = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.currentTag = '';
    }
    ngOnInit() {
    }
    selectedTag(tagName) {
        this.currentTag = tagName;
        this.tag.emit(tagName);
    }
}
TagsComponent.ɵfac = function TagsComponent_Factory(t) { return new (t || TagsComponent)(); };
TagsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TagsComponent, selectors: [["app-tags"]], outputs: { tag: "tag" }, decls: 29, vars: 7, consts: [[1, "card-header"], [1, "card-body"], [1, "row"], [1, "col-lg-6"], [1, "list-unstyled", "mb-0"], [3, "ngClass", "click"]], template: function TagsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Categories");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TagsComponent_Template_a_click_7_listener() { return ctx.selectedTag(""); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "All");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TagsComponent_Template_a_click_10_listener() { return ctx.selectedTag("science"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Science");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TagsComponent_Template_a_click_13_listener() { return ctx.selectedTag("history"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "History");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TagsComponent_Template_a_click_16_listener() { return ctx.selectedTag("politics"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Politics");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "ul", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TagsComponent_Template_a_click_21_listener() { return ctx.selectedTag("literature"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Literature");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TagsComponent_Template_a_click_24_listener() { return ctx.selectedTag("socialLife"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Social Life");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TagsComponent_Template_a_click_27_listener() { return ctx.selectedTag("arts"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Arts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.currentTag == "" ? "active-link" : "inactive-link");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.currentTag == "science" ? "active-link" : "inactive-link");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.currentTag == "history" ? "active-link" : "inactive-link");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.currentTag == "politics" ? "active-link" : "inactive-link");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.currentTag == "literature" ? "active-link" : "inactive-link");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.currentTag == "socialLife" ? "active-link" : "inactive-link");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.currentTag == "arts" ? "active-link" : "inactive-link");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]], styles: [".active-link[_ngcontent-%COMP%] {\n  background-color: antiquewhite;\n  padding: 4px;\n  border-radius: 10px;\n}\n\n.inactive-link[_ngcontent-%COMP%] {\n  padding: 4px;\n  border-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3RhZ3MvQzpcXFVzZXJzXFxQcmVybmFcXGFzc2lnbm1lbnRcXGFza21lL3NyY1xcYXBwXFxzaGFyZWRcXHRhZ3NcXHRhZ3MuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC90YWdzL3RhZ3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw4QkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtFQUNBLG1CQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvdGFncy90YWdzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFjdGl2ZS1saW5re1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYW50aXF1ZXdoaXRlO1xyXG4gICAgcGFkZGluZzogNHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuLmluYWN0aXZlLWxpbmt7XHJcbiAgICBwYWRkaW5nOiA0cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59IiwiLmFjdGl2ZS1saW5rIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYW50aXF1ZXdoaXRlO1xuICBwYWRkaW5nOiA0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5pbmFjdGl2ZS1saW5rIHtcbiAgcGFkZGluZzogNHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TagsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-tags',
                templateUrl: './tags.component.html',
                styleUrls: ['./tags.component.scss']
            }]
    }], function () { return []; }, { tag: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


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

module.exports = __webpack_require__(/*! C:\Users\Prerna\assignment\askme\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map