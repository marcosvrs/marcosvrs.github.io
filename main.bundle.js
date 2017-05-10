webpackJsonp([1,4],{

/***/ 112:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./testimonials/testimonials.module": [
		77
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
module.exports = webpackAsyncContext;
webpackAsyncContext.id = 112;


/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(128);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(40);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/// <reference path="../../node_modules/@types/google.analytics/index.d.ts" />
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(router) {
        this.router = router;
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* isDevMode */])()) {
            ga('send', 'pageview');
            this.router.events.subscribe(function (event) {
                if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationEnd */]) {
                    ga('set', 'page', event.urlAfterRedirects);
                    ga('send', 'pageview');
                }
            });
        }
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(200),
        styles: [__webpack_require__(188)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routing_module__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_core_core_module__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_app_component__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_app_testimonials_testimonials_module__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_app_directives_directives_module__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_app_services_google_analytics_events_service__ = __webpack_require__(41);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5_app_app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_4_app_core_core_module__["a" /* CoreModule */],
            __WEBPACK_IMPORTED_MODULE_6_app_testimonials_testimonials_module__["TestimonialsModule"],
            __WEBPACK_IMPORTED_MODULE_7_app_directives_directives_module__["a" /* DirectivesModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_8_app_services_google_analytics_events_service__["a" /* GoogleAnalyticsEventsService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5_app_app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_app_routing_module__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_core_navbar_navbar_component__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_core_root_footer_footer_component__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_app_core_contact_contact_component__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_app_core_root_root_component__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_app_core_root_home_home_component__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_app_core_root_resume_resume_component__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_app_core_root_about_about_component__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_app_directives_directives_module__ = __webpack_require__(74);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var CoreModule = (function () {
    function CoreModule() {
    }
    return CoreModule;
}());
CoreModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3_app_app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_11_app_directives_directives_module__["a" /* DirectivesModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4_app_core_navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_5_app_core_root_footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_6_app_core_contact_contact_component__["a" /* ContactComponent */],
            __WEBPACK_IMPORTED_MODULE_7_app_core_root_root_component__["a" /* RootComponent */],
            __WEBPACK_IMPORTED_MODULE_8_app_core_root_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_9_app_core_root_resume_resume_component__["a" /* ResumeComponent */],
            __WEBPACK_IMPORTED_MODULE_10_app_core_root_about_about_component__["a" /* AboutComponent */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_4_app_core_navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_5_app_core_root_footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_3_app_app_routing_module__["a" /* AppRoutingModule */]
        ]
    })
], CoreModule);

//# sourceMappingURL=core.module.js.map

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = (function () {
    function NavbarComponent() {
    }
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* Component */])({
        selector: 'app-navbar',
        template: __webpack_require__(202),
        styles: [__webpack_require__(190)]
    }),
    __metadata("design:paramtypes", [])
], NavbarComponent);

//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_services_google_analytics_events_service__ = __webpack_require__(41);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FooterComponent = (function () {
    function FooterComponent(googleAnalyticsEventsService) {
        this.googleAnalyticsEventsService = googleAnalyticsEventsService;
    }
    FooterComponent.prototype.onClick = function (button) {
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* isDevMode */])()) {
            this.googleAnalyticsEventsService.emitEvent('Buttons', 'Click', button);
        }
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* Component */])({
        selector: 'app-footer',
        template: __webpack_require__(204),
        styles: [__webpack_require__(192)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_services_google_analytics_events_service__["a" /* GoogleAnalyticsEventsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_services_google_analytics_events_service__["a" /* GoogleAnalyticsEventsService */]) === "function" && _a || Object])
], FooterComponent);

var _a;
//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(30);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BsFormControlDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var formControlDangerClass = 'form-control-danger';
var formControlSuccessClass = 'form-control-success';
var formControlWarningClass = 'form-control-warning';
var formGroupDangerClass = 'has-danger';
var formGroupSuccessClass = 'has-success';
var formGroupWarningClass = 'has-warning';
var formControlClasses = [formControlDangerClass, formControlSuccessClass, formControlWarningClass];
var formGroupClasses = [formGroupDangerClass, formGroupSuccessClass, formGroupWarningClass];
var BsFormControlDirective = (function () {
    function BsFormControlDirective(el, re) {
        this.el = el;
        this.re = re;
    }
    BsFormControlDirective.prototype.onInput = function () {
        this.handleClasses();
    };
    BsFormControlDirective.prototype.onfocus = function () {
        this.handleClasses();
    };
    BsFormControlDirective.prototype.handleClasses = function () {
        var _this = this;
        var activeClass;
        if (this.control.dirty || this.control.touched) {
            if (this.control.valid) {
                activeClass = [formControlSuccessClass, formGroupSuccessClass];
            }
            else if (this.control.hasError) {
                activeClass = [formControlDangerClass, formGroupDangerClass];
            }
            else {
                activeClass = [formControlWarningClass, formGroupWarningClass];
            }
        }
        else {
            activeClass = [];
        }
        var element = this.el.nativeElement;
        if (element.classList.contains('form-control')) {
            formControlClasses.forEach(function (currClass) {
                if (currClass === activeClass[0]) {
                    _this.re.addClass(element, currClass);
                }
                else {
                    _this.re.removeClass(element, currClass);
                }
            });
        }
        var parentElement = element.parentElement;
        if (parentElement.classList.contains('form-group')) {
            formGroupClasses.forEach(function (currClass) {
                if (currClass === activeClass[1]) {
                    _this.re.addClass(parentElement, currClass);
                }
                else {
                    _this.re.removeClass(parentElement, currClass);
                }
            });
        }
    };
    return BsFormControlDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Input */])('appBsFormControl'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* AbstractControl */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* AbstractControl */]) === "function" && _a || Object)
], BsFormControlDirective.prototype, "control", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* HostListener */])('input'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BsFormControlDirective.prototype, "onInput", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* HostListener */])('focusout'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BsFormControlDirective.prototype, "onfocus", null);
BsFormControlDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Directive */])({
        selector: '[appBsFormControl]'
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* ElementRef */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Renderer2 */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Renderer2 */]) === "function" && _c || Object])
], BsFormControlDirective);

var _a, _b, _c;
//# sourceMappingURL=bs-form-control.directive.js.map

/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Testimonial; });
var Testimonial = (function () {
    function Testimonial(obj) {
        this._name = obj.name;
        this._email = obj.email;
        this._title = obj.title;
        this._storie = obj.storie;
    }
    Object.defineProperty(Testimonial.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Testimonial.prototype, "email", {
        get: function () {
            return this._email;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Testimonial.prototype, "title", {
        get: function () {
            return this._title;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Testimonial.prototype, "storie", {
        get: function () {
            return this._storie;
        },
        enumerable: true,
        configurable: true
    });
    return Testimonial;
}());

//# sourceMappingURL=testimonial.js.map

/***/ }),

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_firebase_config_json__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_firebase_config_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_app_firebase_config_json__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactService = (function () {
    function ContactService(http) {
        this.http = http;
    }
    ContactService.prototype.sendContactMessage = function (message) {
        var url = "https://us-central1-" + __WEBPACK_IMPORTED_MODULE_2_app_firebase_config_json___default.a.projectId + ".cloudfunctions.net/sendMessage";
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* isDevMode */])()) {
            console.log('url: ' + url);
            console.log('headers: ');
            console.log(headers);
            console.log('message: ');
            console.log(message);
        }
        return this.http.post(url, message, { headers: headers });
    };
    return ContactService;
}());
ContactService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], ContactService);

var _a;
//# sourceMappingURL=contact.service.js.map

/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_models_testimonial__ = __webpack_require__(124);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestimonialComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TestimonialComponent = (function () {
    function TestimonialComponent() {
    }
    return TestimonialComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_models_testimonial__["a" /* Testimonial */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_models_testimonial__["a" /* Testimonial */]) === "function" && _a || Object)
], TestimonialComponent.prototype, "testimonialInstance", void 0);
TestimonialComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* Component */])({
        selector: 'app-testimonial',
        template: __webpack_require__(209),
        styles: [__webpack_require__(197)]
    }),
    __metadata("design:paramtypes", [])
], TestimonialComponent);

var _a;
//# sourceMappingURL=testimonial.component.js.map

/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_testimonials_testimonials_component__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_testimonials_add_testimonial_add_testimonial_component__ = __webpack_require__(75);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestimonialsRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [{
        path: '', component: __WEBPACK_IMPORTED_MODULE_2_app_testimonials_testimonials_component__["a" /* TestimonialsComponent */], children: [
            { path: 'add', component: __WEBPACK_IMPORTED_MODULE_3_app_testimonials_add_testimonial_add_testimonial_component__["a" /* AddTestimonialComponent */] }
        ]
    }];
var TestimonialsRoutingModule = (function () {
    function TestimonialsRoutingModule() {
    }
    return TestimonialsRoutingModule;
}());
TestimonialsRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], TestimonialsRoutingModule);

//# sourceMappingURL=testimonials-routing.module.js.map

/***/ }),

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 188:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 189:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 190:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 191:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, ".video-coding {\n  background: #1e1e1e; }\n\nfigure > figcaption {\n  display: none; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 192:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, ".footer {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  /* Set the fixed height of the footer here */\n  height: 60px;\n  line-height: 60px;\n  /* Vertically center the text there */\n  background-color: #f5f5f5; }\n  .footer > ul {\n    position: fixed;\n    right: 0;\n    bottom: 0;\n    z-index: 1030;\n    list-style: none;\n    margin-bottom: 0.25rem;\n    line-height: 1.5; }\n    .footer > ul > li {\n      float: left;\n      margin-right: 16px; }\n      .footer > ul > li:hover .icon, .footer > ul > li:focus .icon {\n        -webkit-transform: translate(0, -50%) scale(1.75);\n                transform: translate(0, -50%) scale(1.75);\n        opacity: 1; }\n      .footer > ul > li .icon {\n        transition: 0.3s ease-out;\n        opacity: 0.5; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 193:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, ".jumbotron:hover,\n.jumbotron:focus {\n  background-color: transparent; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 194:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, ".board:hover, .board:focus {\n  background: #eceeef; }\n  .board:hover > div > hr, .board:focus > div > hr {\n    border-color: #292b2c; }\n\n.background-img {\n  background: no-repeat fixed center;\n  background-size: cover;\n  min-height: 50vh; }\n\n#code {\n  background-image: url(\"/assets/code.png\"); }\n\n#phone {\n  background-image: url(\"/assets/phone.png\"); }\n\n#tablet {\n  background-image: url(\"/assets/tablet.png\"); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 195:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 196:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 197:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 198:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, ".card-img-top {\n  max-height: 5em;\n  max-width: 5em; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 200:
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ 201:
/***/ (function(module, exports) {

module.exports = "<article class=\"col\">\r\n  <section class=\"row align-items-center justify-content-start\">\r\n    <div class=\"col-md-2 offset-md-1 align-self-center\">\r\n      <div class=\"row align-items-center justify-content-start\">\r\n        <div class=\"col align-self-center\">\r\n          <p class=\"text-center\">You can send me a email directly for:</p>\r\n          <p class=\"text-center\">marcosauda@outlook.com</p>\r\n        </div>\r\n      </div>\r\n      <hr>\r\n      <div class=\"row align-items-center justify-content-start\">\r\n        <div class=\"col align-self-center\">\r\n          <p class=\"text-center\">Or contact me in my social medias:</p>\r\n          <div class=\"btn-group d-flex justify-content-around\" role=\"group\" aria-label=\"Social Medias\">\r\n            <a class=\"btn btn-default\" href=\"https://www.facebook.com/Marcosvrs\" target=\"_blank\" role=\"button\" (click)=\"onClick('Facebook')\"><img class=\"icon\" src=\"assets/facebook.png\" alt=\"Facebook\"></a>\r\n            <a class=\"btn btn-default\" href=\"https://www.linkedin.com/in/marcosvrs/\" target=\"_blank\" role=\"button\" (click)=\"onClick('Linkedin')\"><img class=\"icon\" src=\"assets/linkedin.png\" alt=\"Linkedin\"></a>\r\n            <a class=\"btn btn-default\" href=\"https://www.xing.com/profile/MarcosVinicius_Rubido\" target=\"_blank\" role=\"button\" (click)=\"onClick('Xing')\"><img class=\"icon\" src=\"assets/xing.png\" alt=\"Xing\"></a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-4 offset-md-1 align-self-center\">\r\n      <form (ngSubmit)=\"onSubmit()\" #contactForm=\"ngForm\">\r\n        <fieldset>\r\n          <legend class=\"text-center\">Contact me!</legend>\r\n          <div *ngIf=\"error\" class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\">\r\n            <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"error = false\">\r\n              <span aria-hidden=\"true\">&times;</span>\r\n            </button>\r\n            <strong>An error occurred!</strong> Please try again.\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label class=\"form-control-label\" for=\"name\">Name</label>\r\n            <input type=\"text\" class=\"form-control\" (input)=\"onValueChange($event)\" placeholder=\"Name\" id=\"name\" name=\"contactName\" [appBsFormControl]=\"contactName\"\r\n              ngModel required #contactName=\"ngModel\">\r\n            <div class=\"form-control-feedback\" *ngIf=\"checkModelErrors(contactName)\">Name is required!</div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label class=\"form-control-label\" for=\"email\">Email</label>\r\n            <input type=\"email\" class=\"form-control\" (input)=\"onValueChange($event)\" placeholder=\"example@example.com\" id=\"email\" name=\"contactEmail\"\r\n              [appBsFormControl]=\"contactEmail\" ngModel required email #contactEmail=\"ngModel\">\r\n            <div class=\"form-control-feedback\" *ngIf=\"checkModelErrors(contactEmail) && contactEmail.errors.required\">Please enter a Email!</div>\r\n            <div class=\"form-control-feedback\" *ngIf=\"checkModelErrors(contactEmail) && !contactEmail.errors.required && contactEmail.errors.email\">Please enter a valid Email!</div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label class=\"form-control-label\" for=\"message\">Message</label>\r\n            <textarea class=\"form-control\" [appBsFormControl]=\"contactMessage\" rows=\"6\" id=\"message\" name=\"contactMessage\" [(ngModel)]=\"contactMessage\"\r\n              required></textarea>\r\n          </div>\r\n        </fieldset>\r\n        <input class=\"btn btn-default\" type=\"submit\" value=\"Submit\" [disabled]=\"!contactForm.valid\">\r\n        <i *ngIf=\"loading\" class=\"ld-cycle\"></i>\r\n      </form>\r\n    </div>\r\n  </section>\r\n</article>"

/***/ }),

/***/ 202:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-toggleable-md navbar-inverse bg-inverse\">\r\n  <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\"\r\n    aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n  <!--<a class=\"navbar-brand navbar-toggler\" href=\"\">Marcos V.</a>-->\r\n\r\n  <div class=\"collapse navbar-collapse justify-content-center\" id=\"navbarSupportedContent\">\r\n    <ul class=\"navbar-nav\">\r\n      <li class=\"nav-item\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">\r\n        <a class=\"nav-link\" routerLink=\"\">Home</a>\r\n      </li>\r\n      <li class=\"nav-item\" routerLinkActive=\"active\">\r\n        <a class=\"nav-link\" routerLink=\"/resume\">Resume</a>\r\n      </li>\r\n      <li class=\"nav-item\" routerLinkActive=\"active\">\r\n        <a class=\"nav-link\" routerLink=\"/about\">About</a>\r\n      </li>\r\n      <li class=\"nav-item\" routerLinkActive=\"active\">\r\n        <a class=\"nav-link\" routerLink=\"/contact\">Contact</a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</nav>"

/***/ }),

/***/ 203:
/***/ (function(module, exports) {

module.exports = "<article class=\"row align-items-center\">\r\n  <div class=\"col\">\r\n    <section class=\"row justify-content-center align-items-center video-coding\">\r\n      <div class=\"col text-center\">\r\n        <video class=\"video\" autoplay loop>\r\n          <source src=\"assets/coding.webm\" type=\"video/webm\">\r\n        </video>\r\n      </div>\r\n    </section>\r\n    <hr>\r\n    <section class=\"row align-items-center\">\r\n      <div class=\"col-md-4 text-center\">\r\n        <figure>\r\n          <img class=\"img-fluid rounded\" src=\"assets/perfil.png\" alt=\"Foto de Perfil\">\r\n          <figcaption>Foto de Perfil</figcaption>\r\n        </figure>\r\n      </div>\r\n      <div class=\"col-md-8 h-100 d-inline-block\">\r\n        <h1 class=\"align-self-start\">Intersting facts!</h1>\r\n        <p>I am a Brazilian graduated Computer Engineer. I love <a href=\"https://github.com/marcosvrs/\" target=\"_blank\">coding</a>,\r\n          playing guitar and Brazil. I also LOVE coffee. I knew my vocation since I was 14 years old.</p>\r\n        <p>At my time at the <a href=\"http://unisanta.br/\" target=\"_blank\">University</a>, I collaborated in a international\r\n          project called\r\n          <a href=\"http://butterflysrl.com/\" target=\"_blank\">Butterfly</a> that became my Term paper at the end of the course.\r\n        </p>\r\n        <p>After 5 years working at <a href=\"http://www.rodrimar.com.br/\" target=\"_blank\">Rodrimar</a>, I had 3 differents positions:\r\n          IT-Internship, Technical Support Analyst and System Analyst. During my time at there I was able to gaining wide\r\n          knowledge that I consider decisive.</p>\r\n        <p>At this moment, I'm based at Hamburg learning German and studing to stay up to date with the lastest programing languages\r\n          and trying to increment my working experience in another country.</p>\r\n      </div>\r\n    </section>\r\n  </div>\r\n</article>"

/***/ }),

/***/ 204:
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\r\n    <div class=\"container-fluid\">\r\n        <a href=\"https://github.com/marcosvrs/marcosvrs.github.io\" target=\"_blank\" (click)=\"onClick('GitHub Project')\">View Code</a>\r\n    </div>\r\n    <ul>\r\n        <li>\r\n            <a href=\"mailto:marcosauda@outlook.com\" target=\"_blank\" (click)=\"onClick('Email')\"><img class=\"icon\" src=\"assets/mail.png\" alt=\"Mail\"></a>\r\n        </li>\r\n        <li>\r\n            <a href=\"https://www.facebook.com/Marcosvrs\" target=\"_blank\" (click)=\"onClick('Facebook')\"><img class=\"icon\" src=\"assets/facebook.png\" alt=\"Facebook\"></a>\r\n        </li>\r\n        <li>\r\n            <a href=\"https://www.linkedin.com/in/marcosvrs/\" target=\"_blank\" (click)=\"onClick('Linkedin')\"><img class=\"icon\" src=\"assets/linkedin.png\" alt=\"Linkedin\"></a>\r\n        </li>\r\n        <li>\r\n            <a href=\"https://www.xing.com/profile/MarcosVinicius_Rubido\" target=\"_blank\" (click)=\"onClick('Xing')\"><img class=\"icon\" src=\"assets/xing.png\" alt=\"Xing\"></a>\r\n        </li>\r\n    </ul>\r\n</footer>"

/***/ }),

/***/ 205:
/***/ (function(module, exports) {

module.exports = "<article class=\"row align-items-center\">\r\n  <div class=\"col\">\r\n    <section class=\"jumbotron jumbotron-fluid\">\r\n      <div class=\"container-fluid\">\r\n        <p class=\"lead text-center\">Hi, my name is Marcos Vinícius!</p>\r\n      </div>\r\n    </section>\r\n    <section class=\"jumbotron jumbotron-fluid\">\r\n      <div class=\"container-fluid\">\r\n        <p class=\"lead text-center\">You can get to know me by browsing my website.</p>\r\n      </div>\r\n    </section>\r\n    <section class=\"jumbotron jumbotron-fluid\">\r\n      <div class=\"container-fluid\">\r\n        <p class=\"lead text-center\">Fell free to <a routerLink=\"/contact\">contact</a> me and give me feedback.</p>\r\n      </div>\r\n    </section>\r\n  </div>\r\n</article>"

/***/ }),

/***/ 206:
/***/ (function(module, exports) {

module.exports = "<article class=\"row justify-content-start\">\r\n  <div class=\"col\">\r\n    <div id=\"code\" class=\"background-img\"></div>\r\n    <section class=\"row align-items-start board\">\r\n      <div class=\"col-md-3\">\r\n        <h3 class=\"text-right\"><span>TECHNOLOGIES</span></h3>\r\n      </div>\r\n      <div class=\"col-md-3\">\r\n        <h4><span>Comfortable with</span></h4>\r\n        <ul>\r\n          <li>Web Development\r\n            <ul>\r\n              <li>HTML5 / CSS3</li>\r\n              <li>LESS</li>\r\n              <li>Bootstrap Framework</li>\r\n              <li>Responsive Layout and Design</li>\r\n              <li>PHP</li>\r\n              <li>Email Marketing\r\n                <ul>\r\n                  <li>Foundation</li>\r\n                </ul>\r\n              </li>\r\n            </ul>\r\n          </li>\r\n          <li>Desktop Development\r\n            <ul>\r\n              <li>C# (.NET)</li>\r\n            </ul>\r\n          </li>\r\n          <li>Database\r\n            <ul>\r\n              <li>MySQL</li>\r\n            </ul>\r\n          </li>\r\n          <li>Version Control (GIT)</li>\r\n        </ul>\r\n      </div>\r\n      <div class=\"col-md-3\">\r\n        <h4><span>Experienced in</span></h4>\r\n        <ul>\r\n          <li>Web Development\r\n            <ul>\r\n              <li>Material Design Lite</li>\r\n              <li>jQuery</li>\r\n              <li>ASP.NET</li>\r\n            </ul>\r\n          </li>\r\n          <li>Desktop Development\r\n            <ul>\r\n              <li>Java</li>\r\n              <li>C++</li>\r\n            </ul>\r\n          </li>\r\n          <li>Database\r\n            <ul>\r\n              <li>Oracle</li>\r\n            </ul>\r\n          </li>\r\n          <li>Others\r\n            <ul>\r\n              <li>Objective C (Arduino)</li>\r\n            </ul>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n      <div class=\"col-md-3\">\r\n        <h4><span>Interessed in</span></h4>\r\n        <ul>\r\n          <li>Web Development\r\n            <ul>\r\n              <li>AngularJS</li>\r\n              <li>NodeJS</li>\r\n            </ul>\r\n          </li>\r\n          <li>Gulp</li>\r\n        </ul>\r\n      </div>\r\n    </section>\r\n    <div id=\"phone\" class=\"background-img\"></div>\r\n    <section class=\"row align-items-start board\">\r\n      <div class=\"col-md-4\">\r\n        <h3 class=\"text-right\">WORK EXPERIENCE</h3>\r\n      </div>\r\n      <div class=\"col-md-8\">\r\n        <div class=\"row align-items-start\">\r\n          <div class=\"col\">\r\n            <h4>System Analyst <small>Rodrimar Port Terminals</small></h4>\r\n            <p>July, 2015 - December, 2016</p>\r\n            <ul>\r\n              <li>Support for ERP TOTVS Logix System for Human Resources, Logistic, Finance and Accounting processes;</li>\r\n              <li>Sharepoint Server and Reporting Services Management;</li>\r\n              <li>Linux and Windows Server Management for Applications;</li>\r\n              <li>Oracle and MySQL Database Supervisor;</li>\r\n              <li>Auxiliary systems Development (PHP [Web] and Java [Desktop]);</li>\r\n              <li>Managing and Developing E-mail marketing with Foundation Framework;</li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n        <hr>\r\n        <div class=\"row align-items-start\">\r\n          <div class=\"col\">\r\n            <h4>C# for WEB (ASP.NET) Developer <small>Free Lancer</small></h4>\r\n            <p>January, 2016 - July, 2016</p>\r\n            <ul>\r\n              <li>Developer for web project in ASP.NET (jQuery, HTML) and C# for Web;</li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n        <hr>\r\n        <div class=\"row align-items-start\">\r\n          <div class=\"col\">\r\n            <h4>Technical Support Analyst <small>Rodrimar Port Terminals</small></h4>\r\n            <p>February, 2014 - July, 2015</p>\r\n            <ul>\r\n              <li>Network and Infrastructure projects Supervisor;</li>\r\n              <li>Ruckus Wireless system administrator;</li>\r\n              <li>Windows and Digifort (IP Surveillance System) servers administrator;</li>\r\n              <li>Contracts Supervisor for IT Infrastructure, CCTV and LPR/OCR Maintenance;</li>\r\n              <li>Help Desk;</li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n        <hr>\r\n        <div class=\"row align-items-start\">\r\n          <div class=\"col\">\r\n            <h4>Intern <small>Rodrimar Port Terminals</small></h4>\r\n            <p>February, 2012 - February, 2014</p>\r\n            <ul>\r\n              <li>Help Desk Monitoring;</li>\r\n              <li>Monitoring the Network, Desktop and Devices Support;</li>\r\n              <li>Monitoring the management of IT contracts;</li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </section>\r\n    <div id=\"tablet\" class=\"background-img\"></div>\r\n    <section class=\"row align-items-start board\">\r\n      <div class=\"col-md-4\">\r\n        <h3 class=\"text-right\">EDUCATION</h3>\r\n      </div>\r\n      <div class=\"col-md-8\">\r\n        <h4>COMPUTER ENGINEERING GRADUATION <small class=\"subtitle\">Santa Cecília University - Santos, SP, Brazil</small></h4>\r\n        <p>February, 2011 - December, 2015</p>\r\n        <ul>\r\n          <li>C++; C# (.NET) for Desktop; Objective C (Arduino);</li>\r\n          <li>Knowledge about Digital Communication, Electronic Components (Integrated Circuits), Network Infrastructure, Automation,\r\n            Computer Architecture;</li>\r\n        </ul>\r\n      </div>\r\n    </section>\r\n  </div>\r\n</article>"

/***/ }),

/***/ 207:
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n<app-footer></app-footer>"

/***/ }),

/***/ 208:
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-dialog\" role=\"document\">\r\n  <div class=\"modal-content\">\r\n    <div class=\"modal-header\">\r\n      <h5 class=\"modal-title\">Testimonial</h5>\r\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"hideModalClick()\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n    </div>\r\n    <form (submit)=\"onSubmit()\" #testimonialForm=\"ngForm\">\r\n      <div class=\"modal-body\">\r\n        <div class=\"form-group\">\r\n          <label class=\"form-control-label\" for=\"name\">Name</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"name\" name=\"name\" placeholder=\"Name\" ngModel required #testimonialName=\"ngModel\">\r\n        </div>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-primary\">Add</button>\r\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"hideModalClick()\">Cancel</button>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>"

/***/ }),

/***/ 209:
/***/ (function(module, exports) {

module.exports = "<img class=\"card-img-top\" src=\"https://upload.wikimedia.org/wikipedia/commons/8/84/Example.svg\" alt=\"Card image cap\">\r\n<div class=\"card-block\">\r\n  <h4 class=\"card-title\">{{ testimonialInstance.title }}</h4>\r\n  <p class=\"card-text\">{{ testimonialInstance.storie }}</p>\r\n</div>\r\n<div class=\"card-footer\">\r\n  <small class=\"text-muted text-right\">{{ testimonialInstance.name }}</small>\r\n</div>"

/***/ }),

/***/ 210:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col\">\r\n    <p>Hi!</p>\r\n    <div class=\"card-deck\">\r\n      <app-testimonial class=\"card\" *ngFor=\"let testimonial of testimonials | async\" [testimonialInstance]=\"testimonial\"></app-testimonial>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col\">\r\n    <button class=\"btn btn-secondary float-right\" type=\"button\" (click)=\"showModalClick()\">Add Testimonial</button>\r\n  </div>\r\n</div>\r\n<app-add-testimonial class=\"modal fade\" [ngStyle]=\"{display: showAddTestimonialModal ? 'block' : 'none'}\" [ngClass]=\"{show: showAddTestimonialModal === true}\"\r\n  (showModalClick)=\"showModalClick()\"></app-add-testimonial>"

/***/ }),

/***/ 247:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(113);


/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoogleAnalyticsEventsService; });
/// <reference path="../../../node_modules/@types/google.analytics/index.d.ts" />
var GoogleAnalyticsEventsService = (function () {
    function GoogleAnalyticsEventsService() {
    }
    GoogleAnalyticsEventsService.prototype.emitEvent = function (eventCategory, eventAction, eventLabel, eventValue) {
        if (eventLabel === void 0) { eventLabel = null; }
        if (eventValue === void 0) { eventValue = null; }
        ga('send', 'event', {
            eventCategory: eventCategory,
            eventLabel: eventLabel,
            eventAction: eventAction,
            eventValue: eventValue
        });
    };
    return GoogleAnalyticsEventsService;
}());

//# sourceMappingURL=google-analytics-events.service.js.map

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(131);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestimonialService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TestimonialService = (function () {
    function TestimonialService(db) {
        this.db = db;
    }
    TestimonialService.prototype.getTestimonials = function () {
        return this.db.list('testimonials');
    };
    TestimonialService.prototype.addTestimonial = function (testimonial) {
        this.getTestimonials().push(testimonial).then(function (ret) {
            return true;
        }, function (error) {
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* isDevMode */])()) {
                console.error(error);
            }
            return false;
        });
    };
    return TestimonialService;
}());
TestimonialService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _a || Object])
], TestimonialService);

var _a;
//# sourceMappingURL=testimonial.service.js.map

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_core_root_home_home_component__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_core_root_resume_resume_component__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_core_root_about_about_component__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_core_root_root_component__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_app_core_contact_contact_component__ = __webpack_require__(69);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        children: [{
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_2_app_core_root_home_home_component__["a" /* HomeComponent */]
            },
            {
                path: 'resume',
                component: __WEBPACK_IMPORTED_MODULE_3_app_core_root_resume_resume_component__["a" /* ResumeComponent */]
            },
            {
                path: 'about',
                component: __WEBPACK_IMPORTED_MODULE_4_app_core_root_about_about_component__["a" /* AboutComponent */]
            },
            { path: 'testimonials', loadChildren: './testimonials/testimonials.module#TestimonialsModule' }],
        component: __WEBPACK_IMPORTED_MODULE_5_app_core_root_root_component__["a" /* RootComponent */]
    },
    {
        path: 'contact',
        component: __WEBPACK_IMPORTED_MODULE_6_app_core_contact_contact_component__["a" /* ContactComponent */]
    },
    {
        path: '**',
        redirectTo: '/?error=404'
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes, { useHash: true })],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_services_contact_service__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_services_google_analytics_events_service__ = __webpack_require__(41);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContactComponent = (function () {
    function ContactComponent(contactService, googleAnalyticsEventsService) {
        this.contactService = contactService;
        this.googleAnalyticsEventsService = googleAnalyticsEventsService;
        this.contactMessage = '';
        this.loading = false;
        this.error = false;
    }
    ContactComponent.prototype.onValueChange = function (event) {
        if (!this.contactForm) {
            return;
        }
        var form = this.contactForm.form;
        if (!form.contains('contactMessage')) {
            return;
        }
        var contactMessageControl = form.get('contactMessage');
        if (contactMessageControl && !contactMessageControl.touched) {
            contactMessageControl.setValue('Hey Marcos!\nI just came to say hello!\n\nSincerely,\n' + form.value.contactName + '\n' + form.value.contactEmail);
        }
    };
    ContactComponent.prototype.onSubmit = function () {
        var _this = this;
        this.loading = true;
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* isDevMode */])()) {
            this.googleAnalyticsEventsService.emitEvent('Forms', 'Submit', 'Contact');
        }
        this.contactService.sendContactMessage(this.contactForm.value)
            .subscribe(function (response) {
            _this.error = false;
            _this.loading = false;
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* isDevMode */])()) {
                console.log('Response Ok');
            }
            _this.contactForm.reset();
        }, function (error) {
            _this.loading = false;
            _this.error = true;
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* isDevMode */])()) {
                console.log('Response error: ');
                console.log(error);
            }
        }, function () {
            _this.loading = false;
            _this.error = false;
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* isDevMode */])()) {
                console.log('Complete');
            }
            _this.contactForm.reset();
        });
    };
    ContactComponent.prototype.checkModelErrors = function (control) {
        return (control.errors && (control.dirty || control.touched));
    };
    ContactComponent.prototype.onClick = function (button) {
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* isDevMode */])()) {
            this.googleAnalyticsEventsService.emitEvent('Buttons', 'Click', button);
        }
    };
    return ContactComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewChild */])('contactForm'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NgForm */]) === "function" && _a || Object)
], ContactComponent.prototype, "contactForm", void 0);
ContactComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* Component */])({
        selector: 'app-contact',
        host: {
            class: 'container-fluid'
        },
        template: __webpack_require__(201),
        styles: [__webpack_require__(189)],
        providers: [__WEBPACK_IMPORTED_MODULE_2_app_services_contact_service__["a" /* ContactService */], __WEBPACK_IMPORTED_MODULE_3_app_services_google_analytics_events_service__["a" /* GoogleAnalyticsEventsService */]]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_app_services_contact_service__["a" /* ContactService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_services_contact_service__["a" /* ContactService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_app_services_google_analytics_events_service__["a" /* GoogleAnalyticsEventsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_services_google_analytics_events_service__["a" /* GoogleAnalyticsEventsService */]) === "function" && _c || Object])
], ContactComponent);

var _a, _b, _c;
//# sourceMappingURL=contact.component.js.map

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = (function () {
    function AboutComponent() {
    }
    return AboutComponent;
}());
AboutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* Component */])({
        selector: 'app-about',
        host: {
            class: 'container-fluid'
        },
        template: __webpack_require__(203),
        styles: [__webpack_require__(191)]
    }),
    __metadata("design:paramtypes", [])
], AboutComponent);

//# sourceMappingURL=about.component.js.map

/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* Component */])({
        selector: 'app-home',
        host: {
            class: 'container-fluid'
        },
        template: __webpack_require__(205),
        styles: [__webpack_require__(193)]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResumeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ResumeComponent = (function () {
    function ResumeComponent() {
    }
    return ResumeComponent;
}());
ResumeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* Component */])({
        selector: 'app-resume',
        host: {
            class: 'container-fluid'
        },
        template: __webpack_require__(206),
        styles: [__webpack_require__(194)]
    }),
    __metadata("design:paramtypes", [])
], ResumeComponent);

//# sourceMappingURL=resume.component.js.map

/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RootComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RootComponent = (function () {
    function RootComponent() {
    }
    return RootComponent;
}());
RootComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(207),
        styles: [__webpack_require__(195)]
    }),
    __metadata("design:paramtypes", [])
], RootComponent);

//# sourceMappingURL=root.component.js.map

/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_directives_bs_form_control_directive__ = __webpack_require__(123);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DirectivesModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var DirectivesModule = (function () {
    function DirectivesModule() {
    }
    return DirectivesModule;
}());
DirectivesModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        declarations: [__WEBPACK_IMPORTED_MODULE_1_app_directives_bs_form_control_directive__["a" /* BsFormControlDirective */]],
        exports: [__WEBPACK_IMPORTED_MODULE_1_app_directives_bs_form_control_directive__["a" /* BsFormControlDirective */]]
    })
], DirectivesModule);

//# sourceMappingURL=directives.module.js.map

/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_services_testimonial_service__ = __webpack_require__(42);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddTestimonialComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddTestimonialComponent = (function () {
    function AddTestimonialComponent(testimonialService) {
        this.testimonialService = testimonialService;
    }
    AddTestimonialComponent.prototype.hideModalClick = function () {
    };
    AddTestimonialComponent.prototype.addButtonClick = function () {
    };
    AddTestimonialComponent.prototype.onSubmit = function () {
    };
    return AddTestimonialComponent;
}());
AddTestimonialComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* Component */])({
        selector: 'app-add-testimonial',
        template: __webpack_require__(208),
        styles: [__webpack_require__(196)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_services_testimonial_service__["a" /* TestimonialService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_services_testimonial_service__["a" /* TestimonialService */]) === "function" && _a || Object])
], AddTestimonialComponent);

var _a;
//# sourceMappingURL=add-testimonial.component.js.map

/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_services_testimonial_service__ = __webpack_require__(42);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestimonialsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TestimonialsComponent = (function () {
    function TestimonialsComponent(testimonialService) {
        this.testimonialService = testimonialService;
        this.showAddTestimonialModal = false;
    }
    TestimonialsComponent.prototype.ngOnInit = function () {
        this.testimonials = this.testimonialService.getTestimonials();
    };
    TestimonialsComponent.prototype.showModalClick = function () {
        this.showAddTestimonialModal = !this.showAddTestimonialModal;
    };
    return TestimonialsComponent;
}());
TestimonialsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* Component */])({
        selector: 'app-testimonials',
        template: __webpack_require__(210),
        styles: [__webpack_require__(198)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_services_testimonial_service__["a" /* TestimonialService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_services_testimonial_service__["a" /* TestimonialService */]) === "function" && _a || Object])
], TestimonialsComponent);

var _a;
//# sourceMappingURL=testimonials.component.js.map

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__testimonials_routing_module__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__testimonials_component__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__add_testimonial_add_testimonial_component__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__testimonial_testimonial_component__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_app_services_testimonial_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_app_firebase_config_json__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_app_firebase_config_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_app_firebase_config_json__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestimonialsModule", function() { return TestimonialsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var environment = {
    production: true,
    firebase: __WEBPACK_IMPORTED_MODULE_9_app_firebase_config_json___default.a
};
var TestimonialsModule = (function () {
    function TestimonialsModule() {
    }
    return TestimonialsModule;
}());
TestimonialsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_4__testimonials_routing_module__["a" /* TestimonialsRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2__["a" /* AngularFireModule */].initializeApp(environment.firebase)
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_5__testimonials_component__["a" /* TestimonialsComponent */], __WEBPACK_IMPORTED_MODULE_6__add_testimonial_add_testimonial_component__["a" /* AddTestimonialComponent */], __WEBPACK_IMPORTED_MODULE_7__testimonial_testimonial_component__["a" /* TestimonialComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_8_app_services_testimonial_service__["a" /* TestimonialService */]],
    })
], TestimonialsModule);

//# sourceMappingURL=testimonials.module.js.map

/***/ }),

/***/ 95:
/***/ (function(module, exports) {

module.exports = {
	"apiKey": "AIzaSyCd9dZ4M3GPMXk8JhI51veKviy1LrG0CbM",
	"authDomain": "marcosvrs-bc41d.firebaseapp.com",
	"databaseURL": "https://marcosvrs-bc41d.firebaseio.com",
	"projectId": "marcosvrs-bc41d",
	"storageBucket": "marcosvrs-bc41d.appspot.com",
	"messagingSenderId": "9058140357"
};

/***/ })

},[247]);
//# sourceMappingURL=main.bundle.js.map