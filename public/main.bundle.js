webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/alert.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlertService = /** @class */ (function () {
    function AlertService(snackbar) {
        this.snackbar = snackbar;
        this.isAlert = false;
        this.alertMessage = '';
    }
    AlertService.prototype.alert = function () {
        this.snackbar.open(this.alertMessage, 'X', {
            duration: 10000,
        });
    };
    AlertService.prototype.set = function (message) {
        this.alertMessage = message;
        this.isAlert = true;
    };
    AlertService.prototype.check = function () {
        if (this.isAlert) {
            this.alert();
            this.isAlert = false;
            this.alertMessage = '';
        }
    };
    AlertService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatSnackBar */]])
    ], AlertService);
    return AlertService;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n<!--<nav class=\"navbar navbar-expand-lg navbar-dark bg-primary justify-content-center\">\n\n    <div class=\"container\">\n      <a class=\"navbar-brand\" href=\"#\">Chat Application</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarColor01\" aria-controls=\"navbarColor01\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <div class=\"collapse navbar-collapse\" id=\"navbarColor01\">\n\n<div class=\"justify-content-center\">\n  <div class=\"btn-group form-inline my-2 my-lg-0\" role=\"group\" aria-label=\"\">\n    <button type=\"button\" class=\"btn btn-sm btn-primary\" routerLinkActive=\"active\">\n      <mat-icon> home </mat-icon>\n    </button>\n    <button type=\"button\" class=\"btn btn-sm btn-primary\" routerLinkActive=\"active\"><mat-icon>group</mat-icon> </button>\n    <button type=\"button\" class=\"btn btn-sm btn-primary\" routerLinkActive=\"active\"><mat-icon>notifications</mat-icon> </button>\n    <button type=\"button\" class=\"btn btn-sm btn-primary\" routerLinkActive=\"active\"><mat-icon>settings</mat-icon> </button>\n  </div>\n\n</div>\n\n    </div>\n    </div>\n  </nav>\n\n<br />\n\n    <div class=\"container\">\n\n        <div class=\"jumbotron\">\n          <h1 class=\"display-3\">Hello, world!</h1>\n          <p class=\"lead\">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>\n          <hr class=\"my-4\">\n          <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>\n          <p class=\"lead\">\n            <button type=\"button\" class=\"btn btn-primary\">Primary</button>\n            <button type=\"button\" class=\"btn btn-secondary\">Secondary</button>\n            <button type=\"button\" class=\"btn btn-success\">Success</button>\n            <button type=\"button\" class=\"btn btn-info\">Info</button>\n            <button type=\"button\" class=\"btn btn-warning\">Warning</button>\n            <button type=\"button\" class=\"btn btn-danger\">Danger</button>\n          </p>\n        </div>\n\n    </div>\n\n\n\n\n\n    <br /><br />\n    <mat-spinner></mat-spinner>\n    <br />\n<h1>\n  {{message}}\n</h1>\n-->\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_home_module__ = __webpack_require__("../../../../../src/app/home/home.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__chat_chat_module__ = __webpack_require__("../../../../../src/app/chat/chat.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__chat_chat_component__ = __webpack_require__("../../../../../src/app/chat/chat.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_material_progress_spinner__ = __webpack_require__("../../../material/esm5/progress-spinner.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_material_icon__ = __webpack_require__("../../../material/esm5/icon.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_material_input__ = __webpack_require__("../../../material/esm5/input.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_material_form_field__ = __webpack_require__("../../../material/esm5/form-field.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_material_card__ = __webpack_require__("../../../material/esm5/card.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_material_divider__ = __webpack_require__("../../../material/esm5/divider.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_material_expansion__ = __webpack_require__("../../../material/esm5/expansion.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_material_snack_bar__ = __webpack_require__("../../../material/esm5/snack-bar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__alert_service__ = __webpack_require__("../../../../../src/app/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







//import { AppRoutingModule } from './app-routing.module';















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_21__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_10__chat_chat_component__["a" /* ChatComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material_progress_spinner__["a" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material_icon__["a" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material_input__["b" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_material__["b" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_material_form_field__["c" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_16__angular_material_card__["a" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_17__angular_material_divider__["a" /* MatDividerModule */],
                __WEBPACK_IMPORTED_MODULE_18__angular_material_expansion__["a" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_19__angular_material_snack_bar__["b" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_7__home_home_module__["a" /* HomeModule */],
                __WEBPACK_IMPORTED_MODULE_9__chat_chat_module__["a" /* ChatModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* RouterModule */].forRoot([])
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_20__alert_service__["a" /* AlertService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_21__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/chat/chat-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chat_component__ = __webpack_require__("../../../../../src/app/chat/chat.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: 'chat', redirectTo: '/', pathMatch: 'full' },
    { path: 'chat/:room', component: __WEBPACK_IMPORTED_MODULE_2__chat_component__["a" /* ChatComponent */] },
    { path: '**', redirectTo: '/' }
];
var ChatRoutingModule = /** @class */ (function () {
    function ChatRoutingModule() {
    }
    ChatRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], ChatRoutingModule);
    return ChatRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/chat/chat.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div.chat-container {\n\n  background: lightgrey; /*#2196F3;*/\n  position:fixed;\n  width: 100%;\n  height: 100%;\n  /*padding: 0em 5em 0 5em;*/\n}\n\n#chat-window {\n  height:100%;\n  width: 100%;\n  /*margin-top: 15px;*/\n\n  padding: 2em 5em 2em 5em;\n  -webkit-box-shadow: 0px 0px 10px rgba(0,0,0,0.2);\n          box-shadow: 0px 0px 10px rgba(0,0,0,0.2);\n}\n\n#chat-input {\n  background: #DDDDDD;\n  text-align: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  vertical-align: middle;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  height: 6em;\n  width: 100%;\n}\n\n#messages {\n  width:100%;\n  height:100%;\n  overflow-y:scroll;\n  padding: 2em;\n  border-radius: 15px;\n}\n\n#chat-input-wrapper {\n  margin: 0 auto;\n  text-align: center;\n  border: 2px solid darkgrey;\n  border-radius: 15px;\n  height: 70px;\n  background: white;\n  width: 90%;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-shadow: 0px 0px 10px rgba(0,0,0,0.2);\n          box-shadow: 0px 0px 10px rgba(0,0,0,0.2);\n}\n\ninput[type=\"text\"] {\n  margin: 0 auto;\n  width: 95%;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  background: white;\n  border: 1px solid #2196F3;\n  border-radius: 15px;\n  padding: 1em;\n}\n\ninput[type=\"text\"]:focus {\n  border: 2px solid #2196F3;\n}\n\nbutton {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n}\n\nbutton[type=\"submit\"] {\n  margin-left: 5px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/chat/chat.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"chat-container d-flex flex-column\" *ngIf=\"username\">\n\n  <div class=\"d-flex flex-column align-items-stretch\" style=\"height:100%;\">\n\n    <div class=\"d-flex flex-row align-items-stretch\" style=\"height:100%;width:100%;\">\n\n    <mat-card class=\"d-flex flex-column align-items-between justify-content-between\" style=\"background:white;width:25%;height:100%;\">\n\n      <div class=\"d-flex flex-column\">\n        <h4 style=\"margin: 0 auto;\">Connected<span class=\"badge badge-pill badge-primary\" style=\"margin-left:10px;\">3</span></h4>\n\n        <ul style=\"border-top: 1px solid lightgrey;margin-top:10px;\" *ngIf=\"users\">\n          <div style=\"margin-top:10px;\">\n            <li *ngFor=\"let user of users\">{{user}}</li>\n          </div>\n        </ul>\n      </div>\n\n      <div class=\"d-flex flex-column\" style=\"border-top: 1px solid lightgrey;\">\n        <h2 style=\"margin: 10px auto;\">Options</h2>\n        <button class=\"btn btn-primary btn-sm\" (click)=\"onJoin()\">Join</button><br>\n      </div>\n\n    </mat-card>\n\n      <mat-card id=\"chat-window\" class=\"d-flex p-2\">\n\n       <div id=\"messages\" #scrollMe [scrollTop]=\"scrollMe.scrollHeight\">\n\n         <p *ngFor=\"let message of messages\">\n           <span *ngIf=\"message.type == 'user-message'\"><span class=\"text-muted\" style=\"font-size:8px;margin-right:3px;\"><em>{{message.timeStamp | date: 'shortTime'}}</em></span> <strong>{{message.username}}:</strong> {{message.content}}</span>\n           <span *ngIf=\"message.type == 'user-joined'\" style=\"color:#2196F3;\"><em><strong>{{message.username}}</strong> joined the room at {{message.timeStamp | date: 'shortTime'}}</em></span>\n           <span *ngIf=\"message.type == 'user-disconnect'\" style=\"color:#2196F3;\"><em><strong>{{message.username}}</strong> left the room at {{message.timeStamp | date: 'shortTime'}}</em></span>\n         </p>\n      </div>\n\n      </mat-card>\n    </div>\n\n      <mat-card id=\"chat-input\" class=\"p-2\">\n\n          <form #f=\"ngForm\" (ngSubmit)=\"onSend(f.value.message); f.reset();\">\n\n            <input ngModel\n                   name=\"message\"\n                   #message=\"ngModel\"\n                   class=\"form-control\"\n                   type=\"text\"\n                   placeholder=\"Type here...\"\n                   autocomplete=\"off\">\n\n            <button hidden class=\"btn btn-primary\" type=\"submit\">SEND</button>\n\n          </form>\n\n      </mat-card>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/chat/chat.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return NameDialog; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__chat_service__ = __webpack_require__("../../../../../src/app/chat/chat.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__alert_service__ = __webpack_require__("../../../../../src/app/alert.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ChatComponent = /** @class */ (function () {
    function ChatComponent(_cs, dialog, _route, _router, _http, _alert) {
        var _this = this;
        this._cs = _cs;
        this.dialog = dialog;
        this._route = _route;
        this._router = _router;
        this._http = _http;
        this._alert = _alert;
        this.url = '/api/rooms/';
        this.users = [];
        this.username = '';
        this.messages = [];
        this._route.params.subscribe(function (params) {
            _this.room = params['room'];
            _this._http.get(_this.url + _this.room)
                .subscribe(function (response) {
                _this.messages = _cs.getMessages();
                _this.users = _cs.getUsers();
                _this.userCount = _cs.getUserCount();
                var dialogRef = _this.dialog.open(NameDialog, {
                    width: '250px',
                    disableClose: true
                });
                dialogRef.afterClosed().subscribe(function (result) {
                    _this.username = result;
                    _this._cs.setupChat({
                        username: _this.username,
                        room: _this.room
                    });
                    _this._cs.join();
                });
            }, function (error) {
                if (error.status == 404) {
                    _this._alert.set('Oh no! That room doesn\'t exist.');
                    _this._router.navigate(['/']);
                }
            });
        });
    }
    ChatComponent.prototype.ngOnInit = function () {
    };
    ChatComponent.prototype.onSend = function (message) {
        this._cs.send(message);
    };
    ChatComponent.prototype.onJoin = function () {
    };
    ChatComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-chat',
            template: __webpack_require__("../../../../../src/app/chat/chat.component.html"),
            styles: [__webpack_require__("../../../../../src/app/chat/chat.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__chat_service__["a" /* ChatService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_5__alert_service__["a" /* AlertService */]])
    ], ChatComponent);
    return ChatComponent;
}());

var NameDialog = /** @class */ (function () {
    function NameDialog(dialogRef) {
        this.dialogRef = dialogRef;
    }
    NameDialog.prototype.onSubmit = function (username) {
        this.dialogRef.close(username);
    };
    NameDialog = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'name-dialog',
            template: "\n  <h1 mat-dialog-title>Hello!</h1>\n  <div mat-dialog-content>\n    <p>Please enter a nickname:</p>\n    <form #f=\"ngForm\" (ngSubmit)=\"onSubmit(f.value.username)\">\n      <mat-form-field>\n        <input matInput placeholder=\"Name\" name=\"username\" [ngModel]=\"username\" autocomplete=\"off\" required>\n      </mat-form-field>\n      <button class=\"btn btn-sm btn-success\" type=\"submit\" [disabled]=\"f.invalid\">Join</button>\n    </form>\n  </div>\n  "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_material__["c" /* MatDialogRef */]])
    ], NameDialog);
    return NameDialog;
}());



/***/ }),

/***/ "../../../../../src/app/chat/chat.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chat_routing_module__ = __webpack_require__("../../../../../src/app/chat/chat-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material_form_field__ = __webpack_require__("../../../material/esm5/form-field.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material_input__ = __webpack_require__("../../../material/esm5/input.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material_divider__ = __webpack_require__("../../../material/esm5/divider.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__chat_component__ = __webpack_require__("../../../../../src/app/chat/chat.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__socket_service__ = __webpack_require__("../../../../../src/app/chat/socket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__chat_service__ = __webpack_require__("../../../../../src/app/chat/chat.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var ChatModule = /** @class */ (function () {
    function ChatModule() {
    }
    ChatModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__chat_routing_module__["a" /* ChatRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material_form_field__["c" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material_input__["b" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material_divider__["a" /* MatDividerModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__chat_component__["b" /* NameDialog */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__chat_component__["b" /* NameDialog */]
            ],
            exports: [],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__socket_service__["a" /* SocketService */],
                __WEBPACK_IMPORTED_MODULE_9__chat_service__["a" /* ChatService */],
            ]
        })
    ], ChatModule);
    return ChatModule;
}());



/***/ }),

/***/ "../../../../../src/app/chat/chat.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__socket_service__ = __webpack_require__("../../../../../src/app/chat/socket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChatService = /** @class */ (function () {
    function ChatService(_ss, _route) {
        var _this = this;
        this._ss = _ss;
        this._route = _route;
        this.username = "";
        this.room = "";
        this.users = [];
        this.messages = [];
        this._ss.response().subscribe(function (response) {
            _this.handleResponse(response);
        });
    }
    ChatService.prototype.handleResponse = function (response) {
        var _this = this;
        if (response.type == 'user-joined') {
            response.room_info.users.forEach(function (user) {
                _this.users.push(user);
            });
            this.userCount = this.users.length;
        }
        this.messages.push(response);
    };
    ChatService.prototype.event = function (type, content) {
        return {
            type: type || null,
            content: content || null,
            room: this.room,
            username: this.username,
            timeStamp: new Date()
        };
    };
    ChatService.prototype.join = function () {
        this._ss.send(this.event('user-joined'));
    };
    ChatService.prototype.send = function (message) {
        this._ss.send(this.event('user-message', message));
    };
    ChatService.prototype.setupChat = function (details) {
        this.username = details.username;
        this.room = details.room;
    };
    ChatService.prototype.setRoom = function (room) {
        this.room = room;
    };
    ChatService.prototype.getRoom = function () {
        return this.room;
    };
    ChatService.prototype.getUsers = function () {
        return this.users;
    };
    ChatService.prototype.getUserCount = function () {
        return this.userCount;
    };
    ChatService.prototype.getMessages = function () {
        return this.messages;
    };
    ChatService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__socket_service__["a" /* SocketService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], ChatService);
    return ChatService;
}());



/***/ }),

/***/ "../../../../../src/app/chat/socket.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocketService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_client__ = __webpack_require__("../../../../socket.io-client/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_socket_io_client__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SocketService = /** @class */ (function () {
    function SocketService() {
        var _this = this;
        this._server = 'http://18.219.143.176:8080';
        this._response = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
        this._socket = __WEBPACK_IMPORTED_MODULE_2_socket_io_client__();
        this._socket.on('event', function (data) {
            _this._response.next(data);
        });
    }
    SocketService.prototype.send = function (payload) {
        this._socket.emit('event', payload);
    };
    SocketService.prototype.response = function () {
        return this._response.asObservable();
    };
    SocketService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], SocketService);
    return SocketService;
}());



/***/ }),

/***/ "../../../../../src/app/home/faq/faq.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"display:flex;justify-content:center;align-items:center;width:100%;height:100%;\">\n<div>\n  <div class=\"row home-bg\">\n    <div class=\"col\">\n      <h1 class=\"text-primary\"><strong>Frequently Asked Questions</strong></h1>\n      <hr><br>\n      <br>\n      <h4 class=\"text-primary\">What this question?</h4>\n      <p class=\"home-text\">Heres a bunch of responses for the above question.</p>\n      <br>\n      <h4 class=\"text-primary\">What this other question about?</h4>\n      <p class=\"home-text\">Heres a bunch of responses for the above question.</p>\n      <br>\n      <h4 class=\"text-primary\">What another this is question?</h4>\n      <p class=\"home-text\">Heres a bunch of responses for the above question.</p>\n      <br>\n\n\n    </div>\n  </div>\n<br>\n  <p class=\"\">\n    <button class=\"btn btn-lg btn-block btn-outline-info center\" [routerLink]=\"['/']\" type=\"button\"><mat-icon>arrow_back</mat-icon><span>Back</span></button>\n  </p>\n</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/faq/faq.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FaqComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FaqComponent = /** @class */ (function () {
    function FaqComponent() {
    }
    FaqComponent.prototype.ngOnInit = function () {
    };
    FaqComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-faq',
            template: __webpack_require__("../../../../../src/app/home/faq/faq.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FaqComponent);
    return FaqComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/home-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__main_main_component__ = __webpack_require__("../../../../../src/app/home/main/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__faq_faq_component__ = __webpack_require__("../../../../../src/app/home/faq/faq.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__home_component__["a" /* HomeComponent */],
        children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_3__main_main_component__["a" /* MainComponent */], pathMatch: 'full' },
            { path: 'faq', component: __WEBPACK_IMPORTED_MODULE_4__faq_faq_component__["a" /* FaqComponent */] }
        ]
    },
];
var HomeRoutingModule = /** @class */ (function () {
    function HomeRoutingModule() {
    }
    HomeRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], HomeRoutingModule);
    return HomeRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".center {\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    vertical-align: middle;\n}\n\n.home-bg {\n  background: rgba(0, 0, 0, .30);\n  padding: 1em;\n  max-width: 700px;\n  border-radius: 30px;\n}\n\n.home-text {\n  color: white;\n}\n\nng-template[matExpansionPanelContent]#create {\n  display: none;\n  visibility: hidden;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex flex-column\" style=\"position:fixed;top: 0; left: 0; width: 100%; height: 100%;justify-content:center;align-items:center;\">\n\n  <h1 style=\"margin:0 auto;margin-bottom:1em;\"><strong>Welcome To Chit Chat!</strong></h1>\n\n  <mat-accordion>\n\n    <mat-expansion-panel  [hideToggle]=\"true\">\n      <mat-expansion-panel-header>\n        <mat-panel-title>\n        <mat-icon style=\"margin-right:10px;\">person_outline</mat-icon>\n        Create A New Room\n        </mat-panel-title>\n        <mat-panel-description>\n      </mat-panel-description>\n      </mat-expansion-panel-header>\n      <button class=\"btn btn-sm btn-primary\" (click)=\"onCreate()\">Public</button>\n      <button class=\"btn btn-sm btn-secondary\" disabled>Private</button>\n    </mat-expansion-panel>\n\n    <mat-expansion-panel [hideToggle]=\"true\">\n      <mat-expansion-panel-header>\n        <mat-panel-title>\n          <mat-icon style=\"margin-right:10px;\">group_add</mat-icon>\n          Join A Chat\n        </mat-panel-title>\n        <mat-panel-description>\n\n        </mat-panel-description>\n      </mat-expansion-panel-header>\n      <form (ngSubmit)=\"onJoin(f.value.room)\" #f=ngForm>\n        <mat-form-field>\n          <input matInput placeholder=\"Room\"\n                          ngModel\n                          #room=\"ngModel\"\n                          name=\"room\"\n                          required>\n        </mat-form-field>\n        <button type=\"submit\" class=\"btn btn-sm btn-primary\" [disabled]=\"f.invalid\">Join</button>\n      </form>\n\n    </mat-expansion-panel>\n\n    <mat-expansion-panel [hideToggle]=\"true\">\n      <mat-expansion-panel-header>\n        <mat-panel-title>\n          <mat-icon style=\"margin-right:10px;\">question_answer</mat-icon>\n          F.A.Q.\n        </mat-panel-title>\n        <mat-panel-description>\n        </mat-panel-description>\n      </mat-expansion-panel-header>\n      <h4>What this question?</h4>\n      <p>Heres a bunch of responses for the above question.</p>\n      <br>\n      <h4>What this other question about?</h4>\n      <p>Heres a bunch of responses for the above question.</p>\n      <br>\n      <h4>What another this is question?</h4>\n      <p>Heres a bunch of responses for the above question.</p>\n      <br>\n    </mat-expansion-panel>\n\n  </mat-accordion>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chat_chat_service__ = __webpack_require__("../../../../../src/app/chat/chat.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__alert_service__ = __webpack_require__("../../../../../src/app/alert.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomeComponent = /** @class */ (function () {
    function HomeComponent(_http, _cs, _router, _alert) {
        this._http = _http;
        this._cs = _cs;
        this._router = _router;
        this._alert = _alert;
        this.url = "/api/rooms";
        this._alert.check();
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.onCreate = function () {
        var _this = this;
        this._http.post(this.url, null)
            .subscribe(function (response) {
            //console.log(result)
            //this._cs.setRoom(result['id']);
            _this._router.navigate(['chat', response['id']]);
        });
    };
    HomeComponent.prototype.onJoin = function (room) {
        this._router.navigate(['chat', room]);
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__chat_chat_service__["a" /* ChatService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__alert_service__["a" /* AlertService */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_routing_module__ = __webpack_require__("../../../../../src/app/home/home-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__main_main_component__ = __webpack_require__("../../../../../src/app/home/main/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__faq_faq_component__ = __webpack_require__("../../../../../src/app/home/faq/faq.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__join_join_component__ = __webpack_require__("../../../../../src/app/home/join/join.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material_expansion__ = __webpack_require__("../../../material/esm5/expansion.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material_icon__ = __webpack_require__("../../../material/esm5/icon.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material_button__ = __webpack_require__("../../../material/esm5/button.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__home_routing_module__["a" /* HomeRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material_icon__["a" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material_button__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material_expansion__["a" /* MatExpansionModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__main_main_component__["a" /* MainComponent */],
                __WEBPACK_IMPORTED_MODULE_4__faq_faq_component__["a" /* FaqComponent */],
                __WEBPACK_IMPORTED_MODULE_5__join_join_component__["a" /* JoinComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__main_main_component__["a" /* MainComponent */],
                __WEBPACK_IMPORTED_MODULE_4__faq_faq_component__["a" /* FaqComponent */],
                __WEBPACK_IMPORTED_MODULE_5__join_join_component__["a" /* JoinComponent */]
            ]
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ }),

/***/ "../../../../../src/app/home/join/join.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"display:flex;justify-content:center;align-items:center;width:100%;height:100%;\">\n  <div class=\"d-flex flex-column\">\n    \n    <h1 style=\"margin:0 auto;margin-bottom:1em;\"><strong>Welcome To Chit Chat!</strong></h1>\n\n    <p class=\"lead\">\n      <button class=\"btn btn-lg btn-block btn-outline-success center\" [routerLink]=\"['chat']\" role=\"button\"><mat-icon style=\"margin-right:10px;\">person_outline</mat-icon>Create A New Room</button>\n    </p>\n    <p class=\"lead\">\n      <button class=\"btn btn-lg btn-block btn-outline-primary center\" [routerLink]=\"['chat']\" role=\"button\"><mat-icon style=\"margin-right:10px;\">group_add</mat-icon>Join A Chat</button>\n    </p>\n    <p class=\"lead\">\n      <button class=\"btn btn-lg btn-block btn-outline-info center\" [routerLink]=\"['faq']\" role=\"button\"><mat-icon style=\"margin-right:10px;\">question_answer</mat-icon>F.A.Q.</button>\n    </p>\n\n\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/join/join.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JoinComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var JoinComponent = /** @class */ (function () {
    function JoinComponent() {
    }
    JoinComponent.prototype.ngOnInit = function () {
    };
    JoinComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-join',
            template: __webpack_require__("../../../../../src/app/home/join/join.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], JoinComponent);
    return JoinComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/main/main.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"display:flex;justify-content:center;align-items:center;width:100%;height:100%;\">\n  <div class=\"d-flex flex-column\">\n\n    <!--\n      <div class=\"col-md-9 offset-md-2\">\n        <h1 class=\"home-text\"><strong>Welcome</strong> to <span class=\"text-primary\"><strong><em>Chit Chat</em></strong></span></h1>\n      </div>-->\n<!--\n<br><br>\n<div class=\"row home-bg\">\n  <div class=\"col\">\n    <h1 class=\"text-primary\"><em>Welcome to Chit Chat!</em></h1><br>\n    <h5 class=\"home-text\"><strong>Chit Chat</strong> is a lightweight, browser-based messaging application with minimal setup. Create a chat room, invite your friends or coworkers,\n    and start chatting!</h5>\n  </div>\n</div>\n\n<br><br>\n-->\n    <h1 style=\"margin:0 auto;margin-bottom:1em;\"><strong>Welcome To Chit Chat!</strong></h1>\n\n    <p class=\"lead\">\n      <button class=\"btn btn-lg btn-block btn-outline-success center\" [routerLink]=\"['chat']\" role=\"button\"><mat-icon style=\"margin-right:10px;\">person_outline</mat-icon>Create A New Room</button>\n    </p>\n    <p class=\"lead\">\n      <button class=\"btn btn-lg btn-block btn-outline-primary center\" [routerLink]=\"['chat']\" role=\"button\"><mat-icon style=\"margin-right:10px;\">group_add</mat-icon>Join A Chat</button>\n    </p>\n    <p class=\"lead\">\n      <button class=\"btn btn-lg btn-block btn-outline-info center\" [routerLink]=\"['faq']\" role=\"button\"><mat-icon style=\"margin-right:10px;\">question_answer</mat-icon>F.A.Q.</button>\n    </p>\n\n\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/main/main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainComponent = /** @class */ (function () {
    function MainComponent() {
    }
    MainComponent.prototype.ngOnInit = function () {
    };
    MainComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-main',
            template: __webpack_require__("../../../../../src/app/home/main/main.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map