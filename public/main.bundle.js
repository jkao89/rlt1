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
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
var http_1 = __webpack_require__("../../../http/esm5/http.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var animations_1 = __webpack_require__("../../../platform-browser/esm5/animations.js");
//import { AppRoutingModule } from './app-routing.module';
var home_module_1 = __webpack_require__("../../../../../src/app/home/home.module.ts");
var home_component_1 = __webpack_require__("../../../../../src/app/home/home.component.ts");
var chat_module_1 = __webpack_require__("../../../../../src/app/chat/chat.module.ts");
var chat_component_1 = __webpack_require__("../../../../../src/app/chat/chat.component.ts");
var progress_spinner_1 = __webpack_require__("../../../material/esm5/progress-spinner.es5.js");
var icon_1 = __webpack_require__("../../../material/esm5/icon.es5.js");
var input_1 = __webpack_require__("../../../material/esm5/input.es5.js");
var material_1 = __webpack_require__("../../../material/esm5/material.es5.js");
var form_field_1 = __webpack_require__("../../../material/esm5/form-field.es5.js");
var card_1 = __webpack_require__("../../../material/esm5/card.es5.js");
var divider_1 = __webpack_require__("../../../material/esm5/divider.es5.js");
var app_component_1 = __webpack_require__("../../../../../src/app/app.component.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                home_component_1.HomeComponent,
                chat_component_1.ChatComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                http_1.HttpModule,
                animations_1.BrowserAnimationsModule,
                progress_spinner_1.MatProgressSpinnerModule,
                icon_1.MatIconModule,
                input_1.MatInputModule,
                material_1.MatDialogModule,
                form_field_1.MatFormFieldModule,
                card_1.MatCardModule,
                divider_1.MatDividerModule,
                home_module_1.HomeModule,
                chat_module_1.ChatModule,
                router_1.RouterModule.forRoot([])
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "../../../../../src/app/chat/chat-routing.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var chat_component_1 = __webpack_require__("../../../../../src/app/chat/chat.component.ts");
var routes = [
    { path: 'chat', component: chat_component_1.ChatComponent }
];
var ChatRoutingModule = /** @class */ (function () {
    function ChatRoutingModule() {
    }
    ChatRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        })
    ], ChatRoutingModule);
    return ChatRoutingModule;
}());
exports.ChatRoutingModule = ChatRoutingModule;


/***/ }),

/***/ "../../../../../src/app/chat/chat.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div.chat-container {\n\n  background: #2196F3;\n  position:fixed;\n  width: 100%;\n  height: 100%;\n  /*padding: 0em 5em 0 5em;*/\n}\n\n#chat-window {\n  height:100%;\n  width: 100%;\n  /*margin-top: 15px;*/\n  margin: 1em 0 1em 0;\n  padding: 2em 5em 2em 5em;\n  -webkit-box-shadow: 0px 0px 10px rgba(0,0,0,0.2);\n          box-shadow: 0px 0px 10px rgba(0,0,0,0.2);\n}\n\n#chat-input {\n  background: lightgrey;\n  text-align: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  vertical-align: middle;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  height: 6em;\n  width: 100%;\n\n\n}\n\n#chat-input-wrapper {\n  margin: 0 auto;\n  text-align: center;\n  border: 2px solid darkgrey;\n  border-radius: 15px;\n  height: 70px;\n  background: white;\n  width: 90%;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-shadow: 0px 0px 10px rgba(0,0,0,0.2);\n          box-shadow: 0px 0px 10px rgba(0,0,0,0.2);\n}\n\ninput[type=\"text\"] {\n  margin: 0 auto;\n  width: 90%;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  background: white;\n  border: 1px solid darkgrey;\n  border-radius: 15px;\n  padding: 1em;\n}\n\ninput[type=\"text\"]:focus {\n  border: 2px solid darkgrey;\n}\n\nbutton {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n}\n\nbutton[type=\"submit\"] {\n  margin-left: 5px;\n}\n\n/*\n.footer {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n\n  height: 60px;\n  line-height: 60px;\n\n}\n\n\n.center {\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    vertical-align: middle;\n}\n\n.chat-box {\n  margin-bottom: 60px;\n  height: 100%;\n  background: white;\n\n}\n\n.messages {\n  height: 100%;\n  overflow-y: scroll;\n}\n*/\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/chat/chat.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"chat-container d-flex flex-column\">\n\n\n\n  <div class=\"d-flex flex-column align-items-stretch\" style=\"height:100%;padding: 0em 2em 0 2em;\">\n    <mat-card style=\"background:white;width:100%;\">\n      <h2>Stuff here</h2>\n      <button class=\"btn btn-primary btn-sm\" (click)=\"onJoin()\">Join</button><br>\n    </mat-card>\n\n\n    <mat-card class=\"d-flex p-2\" style=\"width:100%;margin-top:1em;background:lightgrey;color:#2196F3;\">\n       <h5 style=\"color:#2196F3;\"><strong>Currently chatting:</strong>\n         <span style=\"color:white;\">xyz, abc, 123</span></h5>\n     </mat-card>\n\n      <mat-card id=\"chat-window\" class=\"d-flex p-2\">\n\n       <div style=\"width:100%;height:100%;overflow-y:scroll;\" #scrollMe [scrollTop]=\"scrollMe.scrollHeight\">\n\n         <p *ngFor=\"let message of messages\">\n           <span *ngIf=\"message.type == 'user-message'\"><span class=\"text-muted\" style=\"font-size:8px;\"><em>{{message.timeStamp | date: 'shortTime'}}</em></span> <strong>{{message.username}}:</strong> {{message.content}}</span>\n           <span *ngIf=\"message.type == 'user-joined'\" style=\"color:#2196F3;\"><em><strong>{{message.username}}</strong> joined the room at {{message.timeStamp | date: 'shortTime'}}</em></span>\n           <span *ngIf=\"message.type == 'user-disconnect'\" style=\"color:#2196F3;\"><em><strong>{{message.username}}</strong> left the room at {{message.timeStamp | date: 'shortTime'}}</em></span>\n         </p>\n      </div>\n\n\n      </mat-card>\n\n\n      <mat-card id=\"chat-input\" class=\"p-2\">\n\n          <form #f=\"ngForm\" (ngSubmit)=\"onSend(f.value.message); f.reset();\">\n\n            <input ngModel\n                   name=\"message\"\n                   #message=\"ngModel\"\n                   class=\"form-control\"\n                   type=\"text\"\n                   placeholder=\"...\"\n                   autocomplete=\"off\">\n\n            <button hidden class=\"btn btn-success\" type=\"submit\">SEND</button>\n\n          </form>\n\n      </mat-card>\n  </div>\n\n\n\n\n\n\n\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/chat/chat.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var material_1 = __webpack_require__("../../../material/esm5/material.es5.js");
var io = __webpack_require__("../../../../socket.io-client/lib/index.js");
var ChatComponent = /** @class */ (function () {
    function ChatComponent(dialog) {
        var _this = this;
        this.dialog = dialog;
        this.url = 'http://18.217.240.92:8080';
        this.messages = [];
        this.socket = io();
        this.socket.on('broadcast', function (content) {
            //if (content.type == 'user-message') {
            _this.messages.push(content);
            //}
        });
        var dialogRef = this.dialog.open(NameDialog, {
            width: '250px',
            disableClose: true
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.name = result;
        });
    }
    ChatComponent.prototype.ngOnInit = function () {
    };
    ChatComponent.prototype.onSend = function (message) {
        if (message) {
            this.socket.emit('message', {
                room: 'mikesTestRoom',
                username: this.name,
                message: message
            });
        }
    };
    ChatComponent.prototype.onJoin = function () {
        this.socket.emit('join', {
            room: 'mikesTestRoom',
            username: this.name
        });
    };
    ChatComponent = __decorate([
        core_1.Component({
            selector: 'app-chat',
            template: __webpack_require__("../../../../../src/app/chat/chat.component.html"),
            styles: [__webpack_require__("../../../../../src/app/chat/chat.component.css")]
        }),
        __metadata("design:paramtypes", [material_1.MatDialog])
    ], ChatComponent);
    return ChatComponent;
}());
exports.ChatComponent = ChatComponent;
var NameDialog = /** @class */ (function () {
    function NameDialog(dialogRef) {
        this.dialogRef = dialogRef;
    }
    NameDialog.prototype.onSubmit = function (name) {
        this.dialogRef.close(name);
    };
    NameDialog = __decorate([
        core_1.Component({
            selector: 'name-dialog',
            template: "\n  <h1 mat-dialog-title>Hi!</h1>\n  <div mat-dialog-content>\n    <p>Please enter a nickname:</p>\n    <form #f=\"ngForm\" (ngSubmit)=\"onSubmit(f.value.name)\">\n      <mat-form-field>\n        <input matInput placeholder=\"Name\" name=\"name\" [ngModel]=\"name\" autocomplete=\"off\" required>\n      </mat-form-field>\n      <button class=\"btn btn-sm btn-success\" type=\"submit\" [disabled]=\"f.invalid\">Join</button>\n    </form>\n  </div>\n  "
        }),
        __metadata("design:paramtypes", [material_1.MatDialogRef])
    ], NameDialog);
    return NameDialog;
}());
exports.NameDialog = NameDialog;


/***/ }),

/***/ "../../../../../src/app/chat/chat.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var common_1 = __webpack_require__("../../../common/esm5/common.js");
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
var chat_routing_module_1 = __webpack_require__("../../../../../src/app/chat/chat-routing.module.ts");
var form_field_1 = __webpack_require__("../../../material/esm5/form-field.es5.js");
var input_1 = __webpack_require__("../../../material/esm5/input.es5.js");
var divider_1 = __webpack_require__("../../../material/esm5/divider.es5.js");
var chat_component_1 = __webpack_require__("../../../../../src/app/chat/chat.component.ts");
var socket_service_1 = __webpack_require__("../../../../../src/app/chat/socket.service.ts");
var chat_service_1 = __webpack_require__("../../../../../src/app/chat/chat.service.ts");
var ChatModule = /** @class */ (function () {
    function ChatModule() {
    }
    ChatModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                chat_routing_module_1.ChatRoutingModule,
                form_field_1.MatFormFieldModule,
                input_1.MatInputModule,
                divider_1.MatDividerModule
            ],
            declarations: [
                chat_component_1.NameDialog
            ],
            entryComponents: [
                chat_component_1.NameDialog
            ],
            exports: [],
            providers: [
                socket_service_1.SocketService,
                chat_service_1.ChatService
            ]
        })
    ], ChatModule);
    return ChatModule;
}());
exports.ChatModule = ChatModule;


/***/ }),

/***/ "../../../../../src/app/chat/chat.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var ChatService = /** @class */ (function () {
    function ChatService() {
        this.messages = [];
    }
    ChatService.prototype.sendMessage = function (message) {
        //this.messages.next(message);
    };
    ChatService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], ChatService);
    return ChatService;
}());
exports.ChatService = ChatService;


/***/ }),

/***/ "../../../../../src/app/chat/socket.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var SocketService = /** @class */ (function () {
    function SocketService() {
    }
    SocketService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], SocketService);
    return SocketService;
}());
exports.SocketService = SocketService;


/***/ }),

/***/ "../../../../../src/app/home/faq/faq.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"display:flex;justify-content:center;align-items:center;width:100%;height:100%;\">\n<div>\n  <div class=\"row home-bg\">\n    <div class=\"col\">\n      <h1 class=\"text-primary\"><strong>Frequently Asked Questions</strong></h1>\n      <hr><br>\n      <br>\n      <h4 class=\"text-primary\">What this question?</h4>\n      <p class=\"home-text\">Heres a bunch of responses for the above question.</p>\n      <br>\n      <h4 class=\"text-primary\">What this other question about?</h4>\n      <p class=\"home-text\">Heres a bunch of responses for the above question.</p>\n      <br>\n      <h4 class=\"text-primary\">What another this is question?</h4>\n      <p class=\"home-text\">Heres a bunch of responses for the above question.</p>\n      <br>\n\n\n    </div>\n  </div>\n<br>\n  <p class=\"\">\n    <button class=\"btn btn-lg btn-block btn-primary center\" [routerLink]=\"['/']\" type=\"button\"><mat-icon>arrow_back</mat-icon><span>Back</span></button>\n  </p>\n</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/faq/faq.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var FaqComponent = /** @class */ (function () {
    function FaqComponent() {
    }
    FaqComponent.prototype.ngOnInit = function () {
    };
    FaqComponent = __decorate([
        core_1.Component({
            selector: 'app-faq',
            template: __webpack_require__("../../../../../src/app/home/faq/faq.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FaqComponent);
    return FaqComponent;
}());
exports.FaqComponent = FaqComponent;


/***/ }),

/***/ "../../../../../src/app/home/home-routing.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var home_component_1 = __webpack_require__("../../../../../src/app/home/home.component.ts");
var main_component_1 = __webpack_require__("../../../../../src/app/home/main/main.component.ts");
var faq_component_1 = __webpack_require__("../../../../../src/app/home/faq/faq.component.ts");
var routes = [
    { path: '', component: home_component_1.HomeComponent,
        children: [
            { path: '', component: main_component_1.MainComponent, pathMatch: 'full' },
            { path: 'faq', component: faq_component_1.FaqComponent }
        ]
    }
];
var HomeRoutingModule = /** @class */ (function () {
    function HomeRoutingModule() {
    }
    HomeRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        })
    ], HomeRoutingModule);
    return HomeRoutingModule;
}());
exports.HomeRoutingModule = HomeRoutingModule;


/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n\n.center {\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    vertical-align: middle;\n}\n\n.home-bg {\n  background: rgba(0, 0, 0, .30);\n  padding: 1em;\n  max-width: 700px;\n  border-radius: 30px;\n}\n\n.home-text {\n  color: white;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<video playsinline autoplay muted loop poster=\"\" id=\"bgvid\">\n    <source src=\"assets/video/bg.mp4\" type=\"video/mp4\">\n</video>-->\n\n<div style=\"position:fixed; top: 0; left: 0; width: 100%; height: 100%;\">\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;


/***/ }),

/***/ "../../../../../src/app/home/home.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var common_1 = __webpack_require__("../../../common/esm5/common.js");
var home_routing_module_1 = __webpack_require__("../../../../../src/app/home/home-routing.module.ts");
var main_component_1 = __webpack_require__("../../../../../src/app/home/main/main.component.ts");
var faq_component_1 = __webpack_require__("../../../../../src/app/home/faq/faq.component.ts");
var icon_1 = __webpack_require__("../../../material/esm5/icon.es5.js");
var button_1 = __webpack_require__("../../../material/esm5/button.es5.js");
var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                home_routing_module_1.HomeRoutingModule,
                icon_1.MatIconModule,
                button_1.MatButtonModule
            ],
            declarations: [
                main_component_1.MainComponent,
                faq_component_1.FaqComponent
            ],
            exports: [
                main_component_1.MainComponent,
                faq_component_1.FaqComponent
            ]
        })
    ], HomeModule);
    return HomeModule;
}());
exports.HomeModule = HomeModule;


/***/ }),

/***/ "../../../../../src/app/home/main/main.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"display:flex;justify-content:center;align-items:center;width:100%;height:100%;\">\n  <div>\n\n    <!--\n      <div class=\"col-md-9 offset-md-2\">\n        <h1 class=\"home-text\"><strong>Welcome</strong> to <span class=\"text-primary\"><strong><em>Chit Chat</em></strong></span></h1>\n      </div>-->\n\n<br><br>\n<div class=\"row home-bg\">\n  <div class=\"col\">\n    <h1 class=\"text-primary\"><em>Welcome to Chit Chat!</em></h1><br>\n    <h5 class=\"home-text\"><strong>Chit Chat</strong> is a lightweight, browser-based messaging application with minimal setup. Create a chat room, invite your friends or coworkers,\n    and start chatting!</h5>\n  </div>\n</div>\n\n<br><br>\n\n\n\n    <p class=\"lead\">\n      <button class=\"btn btn-lg btn-block btn-success center\" [routerLink]=\"['chat']\" role=\"button\"><mat-icon style=\"margin-right:10px;\">people</mat-icon>Create A New Chat Room</button>\n    </p>\n    <p class=\"lead\">\n      <button class=\"btn btn-lg btn-block btn-primary center\" [routerLink]=\"['faq']\" role=\"button\"><mat-icon style=\"margin-right:10px;\">question_answer</mat-icon>F.A.Q.</button>\n    </p>\n\n\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/main/main.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var MainComponent = /** @class */ (function () {
    function MainComponent() {
    }
    MainComponent.prototype.ngOnInit = function () {
    };
    MainComponent = __decorate([
        core_1.Component({
            selector: 'app-main',
            template: __webpack_require__("../../../../../src/app/home/main/main.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MainComponent);
    return MainComponent;
}());
exports.MainComponent = MainComponent;


/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_dynamic_1 = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var environment_1 = __webpack_require__("../../../../../src/environments/environment.ts");
var app_module_1 = __webpack_require__("../../../../../src/app/app.module.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);


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