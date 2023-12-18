(self["webpackChunkrightbin"] = self["webpackChunkrightbin"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule),
/* harmony export */   "routes": () => (/* binding */ routes)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _collector_collector_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./collector/collector.component */ 1935);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.component */ 5067);
/* harmony import */ var _reports_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reports/dashboard/dashboard.component */ 4787);
/* harmony import */ var _reports_leaderboard_leaderboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reports/leaderboard/leaderboard.component */ 4291);
/* harmony import */ var _user_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user/login/login.component */ 4270);
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ 439);
/* harmony import */ var _reports_reports_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reports/reports.component */ 2150);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/user.service */ 3071);











const routes = [{
  path: '',
  component: _reports_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__.DashboardComponent,
  canActivate: [_services_user_service__WEBPACK_IMPORTED_MODULE_7__.UserService]
}, {
  path: 'collect_form',
  component: _collector_collector_component__WEBPACK_IMPORTED_MODULE_0__.CollectorComponent,
  canActivate: [_services_user_service__WEBPACK_IMPORTED_MODULE_7__.UserService]
}, {
  path: 'dashboard',
  component: _reports_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__.DashboardComponent,
  canActivate: [_services_user_service__WEBPACK_IMPORTED_MODULE_7__.UserService]
}, {
  path: 'home',
  component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__.HomeComponent
}, {
  path: 'leaderboard',
  component: _reports_leaderboard_leaderboard_component__WEBPACK_IMPORTED_MODULE_3__.LeaderboardComponent,
  canActivate: [_services_user_service__WEBPACK_IMPORTED_MODULE_7__.UserService]
}, {
  path: 'login',
  component: _user_login_login_component__WEBPACK_IMPORTED_MODULE_4__.LoginComponent
}, {
  path: 'reports',
  component: _reports_reports_component__WEBPACK_IMPORTED_MODULE_6__.ReportsComponent,
  canActivate: [_services_user_service__WEBPACK_IMPORTED_MODULE_7__.UserService]
}, {
  path: '**',
  component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__.PageNotFoundComponent
}];
let AppRoutingModule = class AppRoutingModule {};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload'
  })],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule]
})], AppRoutingModule);


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.html?ngResource */ 3383);
/* harmony import */ var _app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss?ngResource */ 9595);
/* harmony import */ var _app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_css_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles.css?ngResource */ 6099);
/* harmony import */ var _styles_css_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_css_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);





let AppComponent = class AppComponent {
  constructor() {
    this.title = 'RecycleTracker';
  }
  ngOnInit() {}
  static #_ = this.ctorParameters = () => [];
};
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-root',
  template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default()), (_styles_css_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], AppComponent);


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var rollbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rollbar */ 4358);
/* harmony import */ var rollbar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rollbar__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _collector_collector_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./collector/collector.module */ 1888);
/* harmony import */ var _reports_reports_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reports/reports.module */ 3065);
/* harmony import */ var _ui_ui_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui/ui.module */ 8086);
/* harmony import */ var _user_user_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user/user.module */ 8524);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ 439);
/* harmony import */ var _web_usb_web_usb_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./web-usb/web-usb.component */ 3066);
/* harmony import */ var _directives_focus_invalid_input_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./directives/focus-invalid-input.directive */ 2904);
/* harmony import */ var _directives_autofocus_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./directives/autofocus.directive */ 3185);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home/home.component */ 5067);


















// Rollbar setup for frontend error reporting
const rollbarConfig = {
  accessToken: '956d27308fc746878fdba47ac5adcc99',
  captureUncaught: true,
  captureUnhandledRejections: true
};
let RollbarErrorHandler = class RollbarErrorHandler {
  constructor(rollbar) {
    this.rollbar = rollbar;
  }
  handleError(err) {
    this.rollbar.error(err.originalError || err);
  }
  static #_ = this.ctorParameters = () => [{
    type: (rollbar__WEBPACK_IMPORTED_MODULE_1___default()),
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.Inject,
      args: [RollbarService]
    }]
  }];
};
RollbarErrorHandler = (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Injectable)()], RollbarErrorHandler);
function rollbarFactory() {
  return new (rollbar__WEBPACK_IMPORTED_MODULE_1___default())(rollbarConfig);
}
const RollbarService = new _angular_core__WEBPACK_IMPORTED_MODULE_12__.InjectionToken('rollbar');
let AppModule = class AppModule {};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.NgModule)({
  declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__.AppComponent, _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_7__.PageNotFoundComponent, _web_usb_web_usb_component__WEBPACK_IMPORTED_MODULE_8__.WebUsbComponent, _directives_focus_invalid_input_directive__WEBPACK_IMPORTED_MODULE_9__.FocusInvalidInputDirective, _directives_autofocus_directive__WEBPACK_IMPORTED_MODULE_10__.AutofocusDirective, _home_home_component__WEBPACK_IMPORTED_MODULE_11__.HomeComponent],
  imports: [_app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__.BrowserAnimationsModule, _collector_collector_module__WEBPACK_IMPORTED_MODULE_2__.CollectorModule, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_17__.HttpClientModule, _ui_ui_module__WEBPACK_IMPORTED_MODULE_4__.UiModule, _user_user_module__WEBPACK_IMPORTED_MODULE_5__.UserModule, _reports_reports_module__WEBPACK_IMPORTED_MODULE_3__.ReportsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.ReactiveFormsModule],
  exports: [_app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__.BrowserAnimationsModule, _collector_collector_module__WEBPACK_IMPORTED_MODULE_2__.CollectorModule, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_17__.HttpClientModule, _ui_ui_module__WEBPACK_IMPORTED_MODULE_4__.UiModule, _user_user_module__WEBPACK_IMPORTED_MODULE_5__.UserModule, _reports_reports_module__WEBPACK_IMPORTED_MODULE_3__.ReportsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.ReactiveFormsModule],
  providers: [{
    provide: _angular_core__WEBPACK_IMPORTED_MODULE_12__.ErrorHandler,
    useClass: RollbarErrorHandler
  }, {
    provide: RollbarService,
    useFactory: rollbarFactory
  }],
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__.AppComponent]
})], AppModule);


/***/ }),

/***/ 3653:
/*!************************************************************!*\
  !*** ./src/app/collector/collected/collected.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CollectedComponent": () => (/* binding */ CollectedComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _collected_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./collected.component.html?ngResource */ 723);
/* harmony import */ var _collected_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./collected.component.scss?ngResource */ 3487);
/* harmony import */ var _collected_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_collected_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_collect_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/collect.service */ 8134);





let CollectedComponent = class CollectedComponent {
  constructor(collectService) {
    this.collectService = collectService;
  }
  ngOnInit() {}
  get lastCollect() {
    return this.collectService.lastSavedCollect;
  }
  static #_ = this.ctorParameters = () => [{
    type: _services_collect_service__WEBPACK_IMPORTED_MODULE_2__.CollectService
  }];
};
CollectedComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-collected',
  template: _collected_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_collected_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], CollectedComponent);


/***/ }),

/***/ 1935:
/*!**************************************************!*\
  !*** ./src/app/collector/collector.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CollectorComponent": () => (/* binding */ CollectorComponent)
/* harmony export */ });
/* harmony import */ var _home_ec2_user_environment_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _collector_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./collector.component.html?ngResource */ 8031);
/* harmony import */ var _collector_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./collector.component.scss?ngResource */ 4222);
/* harmony import */ var _collector_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_collector_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/legacy-dialog */ 8446);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 6562);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 4874);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var _services_collect_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/collect.service */ 8134);
/* harmony import */ var _services_location_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/location.service */ 7080);
/* harmony import */ var _services_scale_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/scale_service */ 5860);
/* harmony import */ var _services_container_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/container.service */ 4221);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/user.service */ 3071);
/* harmony import */ var _services_waste_type_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/waste-type.service */ 9562);
/* harmony import */ var _services_collector_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/collector.service */ 6716);
/* harmony import */ var _collected_collected_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./collected/collected.component */ 3653);
/* harmony import */ var _queued_queued_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./queued/queued.component */ 5463);









// Services







// Components


let CollectorComponent = class CollectorComponent {
  //isLoading: boolean = false;
  //isSubmitted: boolean = false;
  // Validators
  static locationIsValid(component) {
    return control => {
      if (component && !component.ls.idFromLocationName(control.value)) {
        return {
          validSet: {
            value: control.value
          }
        };
      }
      return null;
    };
  }
  static waste_typeIsValid(component) {
    return control => {
      if (component && !component.wts.idFromWaste_TypeName(control.value)) {
        return {
          validSet: {
            value: control.value
          }
        };
      }
      return null;
    };
  }
  static collectorIsValid(component) {
    return control => {
      if (component && !component.collrs.idFromCollectorName(control.value)) {
        return {
          validSet: {
            value: control.value
          }
        };
      }
      return null;
    };
  }
  static containerIsValid(component) {
    return control => {
      if (component && !component.conts.idFromContainerName(control.value)) {
        return {
          validSet: {
            value: control.value
          }
        };
      }
      return null;
    };
  }
  constructor(ls, dialog, ss, conts, us, wts, collrs, cs) {
    this.ls = ls;
    this.dialog = dialog;
    this.ss = ss;
    this.conts = conts;
    this.us = us;
    this.wts = wts;
    this.collrs = collrs;
    this.cs = cs;
    this.collectForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.UntypedFormGroup({
      collect_location: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.UntypedFormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]),
      waste_type: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.UntypedFormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]),
      collector: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.UntypedFormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]),
      container: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.UntypedFormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]),
      tare_weight: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.UntypedFormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.min(0)]),
      scale_weight: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.UntypedFormControl(0, [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.min(0)]),
      net_weight: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.UntypedFormControl(0, [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.min(0)])
    });
    // collects: any;
    this.scale_weight = 0;
    this.tare_weight = 0;
    this.net_weight = 0;
    this.container = 0;
    // Subscriptions
    this.scaleSubscription = null;
    this.scaleWeightSubscription = null;
    this.tareWeightSubscription = null;
    this.tareSubscription = null;
    // Form state
    //showForm: boolean = true;
    this.success = false;
  }
  ngOnInit() {
    // Check authentication
    this.isLoggedIn();
    // Get the scale weight from the API and update the scale weight value
    this.updateScaleWeight();
    // Update the net weight based on the scale weight and current tare value
    this.updateNetWeight();
    this.filteredCollectLocations$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.combineLatest)(this.collectForm.controls.collect_location.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.startWith)('')), this.ls.collectLocations).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.map)(([value, collectLocations]) => {
      const filtered = value ? this._filteredCollectLocations(value, collectLocations) : collectLocations;
      return filtered.sort((a, b) => a.floor > b.floor ? 1 : a.floor === b.floor ? a.name > b.name ? 1 : -1 : -1);
    }));
    this.filteredWaste_Types$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.combineLatest)(this.collectForm.get('waste_type').valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.startWith)('')), this.wts.waste_types).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.map)(([value, waste_types]) => {
      const filtered = value ? this._filteredWasteTypes(value, waste_types) : waste_types;
      return filtered;
    }));
    this.filteredCollectors$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.combineLatest)(this.collectForm.controls.collector.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.startWith)('')), this.collrs.collectors).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.map)(([value, collectors]) => {
      const filtered = value ? this._filteredCollectors(value, collectors) : collectors;
      return filtered;
    }));
    this.filteredContainers$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.combineLatest)(this.collectForm.controls.container.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.startWith)('')), this.conts.containers).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.map)(([value, containers]) => {
      const filtered = value ? this._filteredContainers(value, containers) : containers;
      return filtered;
    }));
    this.updateTare();
    this.getScaleUnit();
  }
  updateScaleWeight() {
    this.scaleSubscription = this.ss.getScaleWeight().subscribe(scale => {
      this.scaleValue$ = scale;
      console.log(scale + ' -> log of scale');
      console.log(this.scaleValue$ + ' -> log of scaleValue$');
      this.collectForm.controls['scale_weight'].setValue(Math.round(this.scaleValue$ * 100) / 100);
    });
  }
  isLoggedIn() {
    return this.us.currentUser.toPromise();
  }
  getScaleUnit() {
    let scale_unit = "lbs";
    return scale_unit;
  }
  updateNetWeight() {
    this.scaleWeightSubscription = this.collectForm.get('scale_weight').valueChanges.subscribe(scale => {
      this.scale_weight = scale;
      this.collectForm.controls['net_weight'].setValue(Math.round((this.scale_weight - this.tare_weight) * 100) / 100);
    });
    this.tareWeightSubscription = this.collectForm.get('tare_weight').valueChanges.subscribe(container => {
      this.tare_weight = container;
      this.collectForm.controls['net_weight'].setValue(Math.round((this.scale_weight - this.tare_weight) * 100) / 100);
    });
  }
  updateTare() {
    this.tareSubscription = this.collectForm.controls['container'].valueChanges.subscribe(containerNameChange => {
      const container = this.conts.getContainerByName(containerNameChange);
      if (container) {
        this.collectForm.controls['tare_weight'].setValue(container.tare_weight);
      }
    });
  }
  // Autocomplete Filters
  _filteredCollectLocations(value, collectLocations) {
    const filterValue = value.toLowerCase();
    return collectLocations.filter(collectLocation => collectLocation.name.toLowerCase().indexOf(filterValue) === 0);
  }
  _filteredWasteTypes(value, waste_types) {
    const filterValue = value.toLowerCase();
    return waste_types.filter(waste_type => waste_type.waste_type_name.toLowerCase().indexOf(filterValue) === 0);
  }
  _filteredCollectors(value, collectors) {
    const filterValue = value.toLowerCase();
    return collectors.filter(collector => collector.name.toLowerCase().indexOf(filterValue) === 0);
  }
  _filteredContainers(value, containers) {
    const filterValue = value.toLowerCase();
    return containers.filter(container => container.name.toLowerCase().indexOf(filterValue) === 0);
  }
  getCollectFromForm(form) {
    const values = form.value;
    const collect = {
      container_id: this.conts.idFromContainerName(values.container),
      location_id: this.ls.idFromLocationName(values.collect_location),
      waste_type: values.waste_type,
      net_weight: values.net_weight,
      collector_id: this.collrs.idFromCollectorName(values.collector),
      scale_weight: values.scale_weight,
      tare_weight: values.tare_weight,
      weighed_at: Date.now() / 1000 // Server is expecting unix seconds, not milliseconds
    };

    return collect;
  }
  collectFormReset() {
    this.collectNgForm.resetForm();
  }
  onSubmit() {
    var _this = this;
    return (0,_home_ec2_user_environment_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const collect = _this.getCollectFromForm(_this.collectForm);
      if (!_this.cs.collectIsValid(collect)) {
        console.error("Tried to submit an invalid collect. Not sending to the server.", collect);
        return;
      } else {
        if (_this.cs.isOnline) {
          try {
            yield _this.cs.submitCollect(collect).toPromise();
            _this.openCollectedDialog();
            _this.success = true;
          } catch (err) {
            console.error(err);
          }
        } else {
          _this.cs.addToQueue(collect);
          _this.openQueuedDialog();
        }
      }
      //Reset the form
      _this.collectForm.reset();
    })();
  }
  openCollectedDialog() {
    const dialogConfig = new _angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_16__.MatLegacyDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.hasBackdrop = true;
    dialogConfig.width = "16rem";
    dialogConfig.height = "20rem";
    dialogConfig.closeOnNavigation = true;
    const dialogRef = this.dialog.open(_collected_collected_component__WEBPACK_IMPORTED_MODULE_10__.CollectedComponent, dialogConfig);
    setTimeout(function () {
      dialogRef.close();
    }, 8000); // stay open for 8 seconds
  }

  openQueuedDialog() {
    const dialogConfig = new _angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_16__.MatLegacyDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.hasBackdrop = true;
    dialogConfig.width = "16rem";
    dialogConfig.height = "20rem";
    dialogConfig.closeOnNavigation = true;
    const dialogRef = this.dialog.open(_queued_queued_component__WEBPACK_IMPORTED_MODULE_11__.QueuedComponent, dialogConfig);
    setTimeout(function () {
      dialogRef.close();
    }, 8000); // stay open for 8 seconds
  }

  ngOnDestroy() {
    this.scaleSubscription?.unsubscribe();
    this.scaleWeightSubscription?.unsubscribe();
    this.tareWeightSubscription?.unsubscribe();
    this.tareSubscription?.unsubscribe();
  }
  static #_ = this.ctorParameters = () => [{
    type: _services_location_service__WEBPACK_IMPORTED_MODULE_4__.LocationService
  }, {
    type: _angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_16__.MatLegacyDialog
  }, {
    type: _services_scale_service__WEBPACK_IMPORTED_MODULE_5__.ScaleService
  }, {
    type: _services_container_service__WEBPACK_IMPORTED_MODULE_6__.ContainerService
  }, {
    type: _services_user_service__WEBPACK_IMPORTED_MODULE_7__.UserService
  }, {
    type: _services_waste_type_service__WEBPACK_IMPORTED_MODULE_8__.WasteTypeService
  }, {
    type: _services_collector_service__WEBPACK_IMPORTED_MODULE_9__.CollectorService
  }, {
    type: _services_collect_service__WEBPACK_IMPORTED_MODULE_3__.CollectService
  }];
  static #_2 = this.propDecorators = {
    collectNgForm: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_17__.ViewChild,
      args: ['form', {
        static: false
      }]
    }]
  };
};
CollectorComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_17__.Component)({
  selector: 'app-collector',
  template: _collector_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_collector_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], CollectorComponent);


/***/ }),

/***/ 1888:
/*!***********************************************!*\
  !*** ./src/app/collector/collector.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CollectorModule": () => (/* binding */ CollectorModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _collector_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./collector.component */ 1935);
/* harmony import */ var _collected_collected_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./collected/collected.component */ 3653);
/* harmony import */ var _queued_queued_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./queued/queued.component */ 5463);
/* harmony import */ var _ui_ui_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui/ui.module */ 8086);
/* harmony import */ var _angular_material_legacy_autocomplete__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/legacy-autocomplete */ 6523);
/* harmony import */ var _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/legacy-button */ 9159);
/* harmony import */ var _angular_material_legacy_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/legacy-card */ 7315);
/* harmony import */ var _angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/legacy-dialog */ 8446);
/* harmony import */ var _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/legacy-form-field */ 1204);
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/grid-list */ 2642);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_legacy_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/legacy-input */ 2044);
/* harmony import */ var _angular_material_legacy_progress_spinner__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/legacy-progress-spinner */ 7578);
/* harmony import */ var _angular_material_legacy_select__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/legacy-select */ 6002);







// UI











let CollectorModule = class CollectorModule {};
CollectorModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
  declarations: [_collector_component__WEBPACK_IMPORTED_MODULE_0__.CollectorComponent, _collected_collected_component__WEBPACK_IMPORTED_MODULE_1__.CollectedComponent, _queued_queued_component__WEBPACK_IMPORTED_MODULE_2__.QueuedComponent],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule, _ui_ui_module__WEBPACK_IMPORTED_MODULE_3__.UiModule, _angular_material_legacy_autocomplete__WEBPACK_IMPORTED_MODULE_8__.MatLegacyAutocompleteModule, _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_9__.MatLegacyButtonModule, _angular_material_legacy_card__WEBPACK_IMPORTED_MODULE_10__.MatLegacyCardModule, _angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_11__.MatLegacyDialogModule, _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_12__.MatLegacyFormFieldModule, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_13__.MatGridListModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIconModule, _angular_material_legacy_input__WEBPACK_IMPORTED_MODULE_15__.MatLegacyInputModule, _angular_material_legacy_progress_spinner__WEBPACK_IMPORTED_MODULE_16__.MatLegacyProgressSpinnerModule, _angular_material_legacy_select__WEBPACK_IMPORTED_MODULE_17__.MatLegacySelectModule],
  exports: [_collected_collected_component__WEBPACK_IMPORTED_MODULE_1__.CollectedComponent, _queued_queued_component__WEBPACK_IMPORTED_MODULE_2__.QueuedComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule, _ui_ui_module__WEBPACK_IMPORTED_MODULE_3__.UiModule, _angular_material_legacy_autocomplete__WEBPACK_IMPORTED_MODULE_8__.MatLegacyAutocompleteModule, _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_9__.MatLegacyButtonModule, _angular_material_legacy_card__WEBPACK_IMPORTED_MODULE_10__.MatLegacyCardModule, _angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_11__.MatLegacyDialogModule, _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_12__.MatLegacyFormFieldModule, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_13__.MatGridListModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIconModule, _angular_material_legacy_input__WEBPACK_IMPORTED_MODULE_15__.MatLegacyInputModule, _angular_material_legacy_progress_spinner__WEBPACK_IMPORTED_MODULE_16__.MatLegacyProgressSpinnerModule, _angular_material_legacy_select__WEBPACK_IMPORTED_MODULE_17__.MatLegacySelectModule]
})], CollectorModule);


/***/ }),

/***/ 5463:
/*!******************************************************!*\
  !*** ./src/app/collector/queued/queued.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QueuedComponent": () => (/* binding */ QueuedComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _queued_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./queued.component.html?ngResource */ 3342);
/* harmony import */ var _queued_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./queued.component.scss?ngResource */ 1160);
/* harmony import */ var _queued_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_queued_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let QueuedComponent = class QueuedComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ctorParameters = () => [];
};
QueuedComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-queued',
  template: _queued_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_queued_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], QueuedComponent);


/***/ }),

/***/ 3185:
/*!***************************************************!*\
  !*** ./src/app/directives/autofocus.directive.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AutofocusDirective": () => (/* binding */ AutofocusDirective)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);


let AutofocusDirective = class AutofocusDirective {
  constructor(host) {
    this.host = host;
  }
  ngAfterViewInit() {
    this.host.nativeElement.focus();
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
  }];
};
AutofocusDirective = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive)({
  selector: '[autofocus]'
})], AutofocusDirective);


/***/ }),

/***/ 2904:
/*!*************************************************************!*\
  !*** ./src/app/directives/focus-invalid-input.directive.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FocusInvalidInputDirective": () => (/* binding */ FocusInvalidInputDirective)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);


let FocusInvalidInputDirective = class FocusInvalidInputDirective {
  constructor(el) {
    this.el = el;
  }
  onFormSubmit() {
    const invalidControl = this.el.nativeElement.querySelector('.ng-invalid');
    if (invalidControl) {
      invalidControl.focus();
    }
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
  }];
  static #_2 = this.propDecorators = {
    onFormSubmit: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['submit']
    }]
  };
};
FocusInvalidInputDirective = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive)({
  selector: '[appFocusInvalidInput]'
})], FocusInvalidInputDirective);


/***/ }),

/***/ 5067:
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _home_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.component.html?ngResource */ 4715);
/* harmony import */ var _home_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.component.scss?ngResource */ 2095);
/* harmony import */ var _home_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let HomeComponent = class HomeComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ctorParameters = () => [];
};
HomeComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-home',
  template: _home_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_home_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], HomeComponent);


/***/ }),

/***/ 439:
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageNotFoundComponent": () => (/* binding */ PageNotFoundComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _page_not_found_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-not-found.component.html?ngResource */ 4862);
/* harmony import */ var _page_not_found_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page-not-found.component.scss?ngResource */ 1695);
/* harmony import */ var _page_not_found_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_page_not_found_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let PageNotFoundComponent = class PageNotFoundComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ctorParameters = () => [];
};
PageNotFoundComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-page-not-found',
  template: _page_not_found_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_page_not_found_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], PageNotFoundComponent);


/***/ }),

/***/ 4787:
/*!**********************************************************!*\
  !*** ./src/app/reports/dashboard/dashboard.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardComponent": () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _dashboard_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard.component.html?ngResource */ 6881);
/* harmony import */ var _dashboard_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.component.scss?ngResource */ 1788);
/* harmony import */ var _dashboard_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_dashboard_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let DashboardComponent = class DashboardComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ctorParameters = () => [];
};
DashboardComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-dashboard',
  template: _dashboard_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_dashboard_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], DashboardComponent);


/***/ }),

/***/ 1252:
/*!************************************************************!*\
  !*** ./src/app/reports/last-input/last-input.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LastInputComponent": () => (/* binding */ LastInputComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _last_input_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./last-input.component.html?ngResource */ 6313);
/* harmony import */ var _last_input_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./last-input.component.scss?ngResource */ 1729);
/* harmony import */ var _last_input_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_last_input_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_collect_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/collect.service */ 8134);





let LastInputComponent = class LastInputComponent {
  constructor(collectService) {
    this.collectService = collectService;
  }
  ngOnInit() {}
  get lastCollect() {
    return this.collectService.lastSavedCollect;
  }
  static #_ = this.ctorParameters = () => [{
    type: _services_collect_service__WEBPACK_IMPORTED_MODULE_2__.CollectService
  }];
};
LastInputComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-last-input',
  template: _last_input_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_last_input_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], LastInputComponent);


/***/ }),

/***/ 4291:
/*!**************************************************************!*\
  !*** ./src/app/reports/leaderboard/leaderboard.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LeaderboardComponent": () => (/* binding */ LeaderboardComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _leaderboard_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./leaderboard.component.html?ngResource */ 3310);
/* harmony import */ var _leaderboard_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./leaderboard.component.scss?ngResource */ 8580);
/* harmony import */ var _leaderboard_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_leaderboard_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




const LOCATION_DATA = [{
  name: 'The Mart/Vornado',
  position: 1,
  percent: 0.45,
  suite: '470',
  logo: './assets/img/theMART_logo.png'
}, {
  name: 'Yelp',
  position: 2,
  percent: 0.43,
  suite: '26',
  logo: './assets/img/yelp_logo.png'
}, {
  name: 'Braintree',
  position: 3,
  percent: 0.423,
  suite: '20.27M',
  logo: './assets/img/braintree_logo.png'
}, {
  name: 'VelocityEHS',
  position: 4,
  percent: 0.41,
  suite: '40',
  logo: './assets/img/velocity-ehs_logo.png'
}, {
  name: 'Motorola',
  position: 5,
  percent: 0.40,
  suite: '40',
  logo: './assets/img/motorola_logo.png'
}, {
  name: 'Beam Suntory',
  position: 6,
  percent: 0.36,
  suite: '40',
  logo: './assets/img/beam-suntory_logo.png'
}, {
  name: 'Allstate/Arity',
  position: 7,
  percent: 0.34,
  suite: '40',
  logo: './assets/img/allstate_logo.png'
}, {
  name: '1871',
  position: 8,
  percent: 0.33,
  suite: '40',
  logo: './assets/img/1871_logo.png'
}, {
  name: 'CCC on 4',
  position: 9,
  percent: 0.31,
  suite: '40',
  logo: './assets/img/ccc_logo.png'
}, {
  name: 'CCC on 9',
  position: 10,
  percent: 0.23,
  suite: '9th Floor',
  logo: './assets/img/ccc_logo.png'
}, {
  name: 'Wunderman Thompson',
  position: 11,
  percent: 0.18,
  suite: '40',
  logo: './assets/img/wunderman-thompson_logo.png'
}];
const LEADERBOARD_DATA = [{
  position: 1,
  name: LOCATION_DATA[0].name,
  suite: LOCATION_DATA[0].suite,
  percent: LOCATION_DATA[0].percent,
  logo: LOCATION_DATA[0].logo
}, {
  position: 2,
  name: LOCATION_DATA[1].name,
  suite: LOCATION_DATA[1].suite,
  percent: LOCATION_DATA[1].percent,
  logo: LOCATION_DATA[1].logo
}, {
  position: 3,
  name: LOCATION_DATA[2].name,
  suite: LOCATION_DATA[2].suite,
  percent: LOCATION_DATA[2].percent,
  logo: LOCATION_DATA[2].logo
}, {
  position: 4,
  name: LOCATION_DATA[3].name,
  suite: LOCATION_DATA[3].suite,
  percent: LOCATION_DATA[3].percent,
  logo: LOCATION_DATA[3].logo
}, {
  position: 5,
  name: LOCATION_DATA[4].name,
  suite: LOCATION_DATA[4].suite,
  percent: LOCATION_DATA[4].percent,
  logo: LOCATION_DATA[4].logo
}, {
  position: 6,
  name: LOCATION_DATA[5].name,
  suite: LOCATION_DATA[5].suite,
  percent: LOCATION_DATA[5].percent,
  logo: LOCATION_DATA[5].logo
}, {
  position: 7,
  name: LOCATION_DATA[6].name,
  suite: LOCATION_DATA[6].suite,
  percent: LOCATION_DATA[6].percent,
  logo: LOCATION_DATA[6].logo
}, {
  position: 8,
  name: LOCATION_DATA[7].name,
  suite: LOCATION_DATA[7].suite,
  percent: LOCATION_DATA[7].percent,
  logo: LOCATION_DATA[7].logo
}, {
  position: 9,
  name: LOCATION_DATA[8].name,
  suite: LOCATION_DATA[8].suite,
  percent: LOCATION_DATA[8].percent,
  logo: LOCATION_DATA[8].logo
}, {
  position: 10,
  name: LOCATION_DATA[9].name,
  suite: LOCATION_DATA[9].suite,
  percent: LOCATION_DATA[9].percent,
  logo: LOCATION_DATA[9].logo
}];
let LeaderboardComponent = class LeaderboardComponent {
  constructor() {
    this.displayedColumns = ['position', 'name', 'logo', 'percent'];
    this.dataSource = LEADERBOARD_DATA;
  }
  ngOnInit() {}
  static #_ = this.ctorParameters = () => [];
};
LeaderboardComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-leaderboard',
  template: _leaderboard_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_leaderboard_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], LeaderboardComponent);


/***/ }),

/***/ 2150:
/*!**********************************************!*\
  !*** ./src/app/reports/reports.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReportsComponent": () => (/* binding */ ReportsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _reports_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reports.component.html?ngResource */ 1176);
/* harmony import */ var _reports_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reports.component.scss?ngResource */ 5849);
/* harmony import */ var _reports_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_reports_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api.service */ 5830);





let ReportsComponent = class ReportsComponent {
  constructor(api) {
    this.api = api;
  }
  ngOnInit() {
    const startDate = "2021-07-01";
    const endDate = "2021-08-01";
    this.api.getDefaultReport(startDate, endDate).subscribe(console.log);
  }
  get items() {
    return [];
  }
  static #_ = this.ctorParameters = () => [{
    type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService
  }];
};
ReportsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-reports',
  template: _reports_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_reports_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], ReportsComponent);


/***/ }),

/***/ 3065:
/*!*******************************************!*\
  !*** ./src/app/reports/reports.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReportsModule": () => (/* binding */ ReportsModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard/dashboard.component */ 4787);
/* harmony import */ var _last_input_last_input_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./last-input/last-input.component */ 1252);
/* harmony import */ var _leaderboard_leaderboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./leaderboard/leaderboard.component */ 4291);
/* harmony import */ var _reports_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reports.component */ 2150);
/* harmony import */ var _tips_tips_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tips/tips.component */ 7382);
/* harmony import */ var _trend_trend_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./trend/trend.component */ 1396);
/* harmony import */ var _angular_material_legacy_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/legacy-card */ 7315);
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/grid-list */ 2642);
/* harmony import */ var _angular_material_legacy_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/legacy-table */ 6538);









// UI



let ReportsModule = class ReportsModule {};
ReportsModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
  declarations: [_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__.DashboardComponent, _last_input_last_input_component__WEBPACK_IMPORTED_MODULE_1__.LastInputComponent, _leaderboard_leaderboard_component__WEBPACK_IMPORTED_MODULE_2__.LeaderboardComponent, _reports_component__WEBPACK_IMPORTED_MODULE_3__.ReportsComponent, _tips_tips_component__WEBPACK_IMPORTED_MODULE_4__.TipsComponent, _trend_trend_component__WEBPACK_IMPORTED_MODULE_5__.TrendComponent],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_material_legacy_card__WEBPACK_IMPORTED_MODULE_9__.MatLegacyCardModule, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_10__.MatGridListModule, _angular_material_legacy_table__WEBPACK_IMPORTED_MODULE_11__.MatLegacyTableModule]
})], ReportsModule);


/***/ }),

/***/ 7382:
/*!************************************************!*\
  !*** ./src/app/reports/tips/tips.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TipsComponent": () => (/* binding */ TipsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _tips_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tips.component.html?ngResource */ 5352);
/* harmony import */ var _tips_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tips.component.scss?ngResource */ 7880);
/* harmony import */ var _tips_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tips_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let TipsComponent = class TipsComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ctorParameters = () => [];
};
TipsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-tips',
  template: _tips_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_tips_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], TipsComponent);


/***/ }),

/***/ 1396:
/*!**************************************************!*\
  !*** ./src/app/reports/trend/trend.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrendComponent": () => (/* binding */ TrendComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _trend_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./trend.component.html?ngResource */ 9778);
/* harmony import */ var _trend_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./trend.component.scss?ngResource */ 8233);
/* harmony import */ var _trend_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_trend_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let TrendComponent = class TrendComponent {
  constructor() {}
  setDiversionColor(percent) {
    switch (true) {
      case percent < .25:
        return 'red';
      case percent >= .25 && percent <= .50:
        return 'orange';
      case percent >= .50:
        return 'green';
      case percent != null:
        return 'gray';
    }
  }
  ngOnInit() {}
  get users() {
    return [];
  }
  static #_ = this.ctorParameters = () => [];
};
TrendComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-trend',
  template: _trend_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_trend_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], TrendComponent);


/***/ }),

/***/ 5830:
/*!*****************************************!*\
  !*** ./src/app/services/api.service.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiService": () => (/* binding */ ApiService),
/* harmony export */   "LOCAL_STORAGE_JWT_KEY": () => (/* binding */ LOCAL_STORAGE_JWT_KEY)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var _network_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./network.service */ 2982);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 6317);






const LOCAL_STORAGE_JWT_KEY = 'recycle_tracker_jwt';
let ApiService = class ApiService {
  constructor(http, networkService) {
    this.http = http;
    this.networkService = networkService;
    this.isOnline = true;
    this.isOnlineSubscription = null;
    this.isOnlineSubscription = this.networkService.isOnline$.subscribe(isOnline => this.isOnline = isOnline);
  }
  ngOnDestroy() {
    this.isOnlineSubscription?.unsubscribe();
    this.isOnlineSubscription = null;
  }
  login(body) {
    return this.http.post('/auth/login', body, {
      ...this.httpOptions,
      observe: 'response'
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(response => {
      const jwt = response.headers.get("X-RTRACKER-JWT");
      if (jwt) {
        localStorage.setItem(LOCAL_STORAGE_JWT_KEY, jwt);
      }
      return response.body;
    }));
  }
  logout() {
    const post = this.http.post('/auth/logout', {}, this.httpOptions);
    post.subscribe(() => localStorage.removeItem(LOCAL_STORAGE_JWT_KEY));
    return post;
  }
  currentUser() {
    const uri = '/auth/current_user';
    return this.http.get(uri, this.httpOptions);
  }
  getLocations() {
    const uri = '/locations';
    if (this.isOnline) {
      return this.http.get(uri, this.httpOptions).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(this.cacheGetRequest(uri)));
    } else {
      const result = this.getCachedRequest(uri);
      console.log("Within getLocations", result);
      return new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(result).asObservable();
    }
  }
  getWasteTypes() {
    const uri = '/waste_types';
    if (this.isOnline) {
      return this.http.get(uri, this.httpOptions).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(this.cacheGetRequest(uri)));
    } else {
      const result = this.getCachedRequest(uri);
      return new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(result).asObservable();
    }
  }
  getCollectors() {
    const uri = '/collectors';
    if (this.isOnline) {
      return this.http.get(uri, this.httpOptions).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(this.cacheGetRequest(uri)));
    } else {
      const result = this.getCachedRequest(uri);
      console.log("Within getCollectors", result);
      return new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(result).asObservable();
    }
  }
  getContainers() {
    const uri = '/containers';
    if (this.isOnline) {
      return this.http.get(uri, this.httpOptions).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(this.cacheGetRequest(uri)));
    } else {
      const result = this.getCachedRequest(uri);
      console.log("Within getContainers", result);
      return new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(result).asObservable();
    }
  }
  recordCollect(collect) {
    const data = {
      collect: collect
    };
    return this.http.post('/collects', data, this.httpOptions);
  }
  // dates should be formatted "YYYY-MM-DD"
  getDefaultReport(startDate, endDate) {
    const queryString = `start_date=${startDate}&end_date=${endDate}`;
    return this.http.get(`/reports/default?${queryString}`, this.httpOptions);
  }
  get headers() {
    let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json');
    const jwt = localStorage.getItem(LOCAL_STORAGE_JWT_KEY);
    if (jwt) {
      headers = headers.append('X-RTRACKER-JWT', jwt);
    }
    return headers;
  }
  get httpOptions() {
    return {
      headers: this.headers
    };
  }
  cacheGetRequest(uri) {
    return apiResponse => {
      const cacheValue = JSON.stringify(apiResponse);
      const cacheKey = this.getCacheKey(uri);
      localStorage.setItem(cacheKey, cacheValue);
      console.log("Logged API Response", apiResponse);
      return apiResponse;
    };
  }
  getCachedRequest(uri) {
    const cacheKey = this.getCacheKey(uri);
    const cachedValue = localStorage.getItem(cacheKey);
    console.log("getCachedRequest", uri);
    return JSON.parse(cachedValue);
  }
  getCacheKey(uri) {
    console.log("getCacheKey", uri);
    return `api:${uri}`;
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient
  }, {
    type: _network_service__WEBPACK_IMPORTED_MODULE_0__.NetworkService
  }];
};
ApiService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
  providedIn: 'root'
})], ApiService);


/***/ }),

/***/ 8134:
/*!*********************************************!*\
  !*** ./src/app/services/collect.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CollectService": () => (/* binding */ CollectService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.service */ 5830);
/* harmony import */ var _network_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./network.service */ 2982);





let CollectService = class CollectService {
  constructor(api, networkService) {
    this.api = api;
    this.networkService = networkService;
    this.QUEUE_CACHE_KEY = "collection_queue";
    this.isOnline = true;
    this.isOnlineSubscription = null;
    this.lastSavedCollect = null;
    this.isOnlineSubscription = this.networkService.isOnline$.subscribe(isOnline => {
      this.isOnline = isOnline;
      if (isOnline) {
        this.retryQueue();
      }
    });
    // Initialize the queue if necessary
    if (!localStorage.getItem(this.QUEUE_CACHE_KEY)) {
      localStorage.setItem(this.QUEUE_CACHE_KEY, "{}");
    }
  }
  ngOnDestroy() {
    this.isOnlineSubscription?.unsubscribe();
  }
  submitCollect(collect) {
    const queueKey = this.addToQueue(collect);
    return this.api.recordCollect(collect).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(collect => {
      this.lastSavedCollect = collect;
      this.removeFromQueue(queueKey);
      return collect;
    }));
  }
  retryQueue() {
    const q = this.getQueue();
    Object.keys(q).forEach(key => {
      const collect = q[key];
      if (this.collectIsValid(collect)) {
        this.api.recordCollect(collect).subscribe(_result => {
          this.removeFromQueue(key);
        });
      } else {
        console.error("Tried to record an invalid queued collect. Not sending to the server.", collect);
        this.removeFromQueue(key);
      }
    });
  }
  addToQueue(collect) {
    const q = this.getQueue();
    const key = this.generateId();
    q[key] = collect;
    this.setQueue(q);
    return key;
  }
  removeFromQueue(key) {
    const q = this.getQueue();
    if (!q[key]) {
      console.error(`Tried to delete an entry from collect queue that doesn't exist (${key})`);
      return;
    }
    delete q[key];
    this.setQueue(q);
  }
  getQueue() {
    const queueSrc = localStorage.getItem(this.QUEUE_CACHE_KEY);
    return JSON.parse(queueSrc);
  }
  setQueue(queue) {
    const strigifiedQueue = JSON.stringify(queue);
    localStorage.setItem(this.QUEUE_CACHE_KEY, strigifiedQueue);
  }
  // Generates a random string of 8 hexadecimal characters
  generateId() {
    var arr = new Uint8Array(8 / 2);
    window.crypto.getRandomValues(arr);
    return Array.from(arr, dec => dec.toString(16).padStart(2, "0")).join("");
  }
  collectIsValid(c) {
    if (c.container_id && c.location_id && c.waste_type && c.collector_id && c.weighed_at && c.net_weight !== undefined && c.net_weight !== null && c.scale_weight !== undefined && c.scale_weight !== null && c.tare_weight !== undefined && c.tare_weight !== null) {
      return true;
    }
    return false;
  }
  static #_ = this.ctorParameters = () => [{
    type: _api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService
  }, {
    type: _network_service__WEBPACK_IMPORTED_MODULE_1__.NetworkService
  }];
};
CollectService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
  providedIn: 'root'
})], CollectService);


/***/ }),

/***/ 6716:
/*!***********************************************!*\
  !*** ./src/app/services/collector.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CollectorService": () => (/* binding */ CollectorService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.service */ 5830);




let CollectorService = class CollectorService {
  constructor(api) {
    this.api = api;
    this.cachedCollectors = [];
  }
  get collectors() {
    return this.api.getCollectors().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(collectors => {
      this.cachedCollectors = collectors;
      console.log(collectors);
      return collectors;
    }));
  }
  idFromCollectorName(name) {
    return this.getCollectorByName(name)?.id;
  }
  getCollectorByName(name) {
    return this.cachedCollectors.find(collector => {
      return collector.name === name;
    });
  }
  static #_ = this.ctorParameters = () => [{
    type: _api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService
  }];
};
CollectorService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
  providedIn: 'root'
})], CollectorService);


/***/ }),

/***/ 4221:
/*!***********************************************!*\
  !*** ./src/app/services/container.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContainerService": () => (/* binding */ ContainerService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.service */ 5830);




let ContainerService = class ContainerService {
  constructor(api) {
    this.api = api;
    this.cachedContainers = [];
  }
  get containers() {
    return this.api.getContainers().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(containers => {
      this.cachedContainers = containers;
      console.log(containers);
      return containers;
    }));
  }
  idFromContainerName(name) {
    return this.getContainerByName(name)?.id;
  }
  getContainerByName(name) {
    return this.cachedContainers.find(container => {
      console.log("getContainerByName", container.name);
      return container.name === name;
    });
  }
  static #_ = this.ctorParameters = () => [{
    type: _api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService
  }];
};
ContainerService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
  providedIn: 'root'
})], ContainerService);


/***/ }),

/***/ 7080:
/*!**********************************************!*\
  !*** ./src/app/services/location.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocationService": () => (/* binding */ LocationService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.service */ 5830);




let LocationService = class LocationService {
  constructor(api) {
    this.api = api;
    this.cachedLocations = [];
  }
  get collectLocations() {
    return this.api.getLocations().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(locations => {
      this.cachedLocations = locations;
      console.log(locations);
      return locations;
    }));
  }
  idFromLocationName(name) {
    return this.cachedLocations.find(location => {
      return location.name === name;
    })?.id;
  }
  static #_ = this.ctorParameters = () => [{
    type: _api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService
  }];
};
LocationService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
  providedIn: 'root'
})], LocationService);


/***/ }),

/***/ 2982:
/*!*********************************************!*\
  !*** ./src/app/services/network.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NetworkService": () => (/* binding */ NetworkService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 635);




let NetworkService = class NetworkService {
  constructor() {
    this._isOnline = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(true);
    const handleConnectionChange = event => {
      if (event.type == "offline") {
        this._isOnline.next(false);
      } else if (event.type == "online") {
        this._isOnline.next(true);
      }
    };
    window.addEventListener("online", handleConnectionChange);
    window.addEventListener("offline", handleConnectionChange);
  }
  get isOnline$() {
    return this._isOnline.asObservable();
  }
  get isOffline$() {
    return this.isOnline$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(isOnline => !isOnline));
  }
  static #_ = this.ctorParameters = () => [];
};
NetworkService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
  providedIn: 'root'
})], NetworkService);


/***/ }),

/***/ 5860:
/*!*******************************************!*\
  !*** ./src/app/services/scale_service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScaleService": () => (/* binding */ ScaleService)
/* harmony export */ });
/* harmony import */ var _home_ec2_user_environment_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var browser_serial__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! browser-serial */ 5464);
/* harmony import */ var browser_serial__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(browser_serial__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.service */ 3071);








let ScaleService = class ScaleService {
  constructor(http, userService) {
    this.http = http;
    this.userService = userService;
    this.serial = new browser_serial__WEBPACK_IMPORTED_MODULE_1__.BrowserSerial();
    this.scaleValue = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject({
      scale: 0
    });
    this.currentUserSubscription = null;
    this.currentUserSubscription = this.userService.currentUser.subscribe(user => {
      if (user) {
        this.connectToScale(user);
      }
    });
  }
  ngOnDestroy() {
    this.currentUserSubscription?.unsubscribe();
  }
  connectToScale(user) {
    var _this = this;
    return (0,_home_ec2_user_environment_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!user.scale) {
        return;
      }
      console.log("Connecting to scale: ", user.scale);
      _this.serial.serialOptions = {
        baudRate: user.scale.baud_rate,
        dataBits: user.scale.data_bit,
        stopBits: user.scale.stop_bit,
        bufferSize: user.scale.buffer_size,
        flowControl: "none"
      };
      const regex = new RegExp(user.scale.regex);
      yield _this.serial.connect();
      _this.serial.readLoop((output, _done) => {
        const result = regex.exec(output);
        if (!result) {
          console.warn("Could not parse the scale output - regex or scale read issue:\n", output);
          return true;
        }
        console.log("Result from parsing raw scale output:\n", result);
        /*
              const signStr = result[1];
              const weightStr = result[2];
              if (!signStr || !weightStr) {
                console.warn("Could not parse a weight from the scale output - no signStr or weightStr:\n", output);
                return true;
              }
        
              let sign: number, weight: number;
              try {
                sign = signStr === "+" ? 1 : -1;
                weight = parseFloat(weightStr) * sign;
              }
              catch {
                console.warn("Could not parse float value from scale output - could not parseFloat:\n", [output, signStr, weightStr]);
                return true;
              }
        */
        let weight;
        weight = parseInt(result[0]);
        const scaleWeight = {
          scale: weight
        };
        console.log("Pushing to scaleValue:", scaleWeight);
        _this.scaleValue.next(scaleWeight);
        return true;
      });
    })();
  }
  getScaleWeight() {
    return this.scaleValue.asObservable().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(scaleWeight => scaleWeight.scale));
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient
  }, {
    type: _user_service__WEBPACK_IMPORTED_MODULE_2__.UserService
  }];
};
ScaleService = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Injectable)({
  providedIn: 'root'
})], ScaleService);


/***/ }),

/***/ 3071:
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserService": () => (/* binding */ UserService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 5474);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 3158);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.service */ 5830);






let UserService = class UserService {
  constructor(router, api) {
    this.router = router;
    this.api = api;
    this._currentUser = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(null);
    if (localStorage.getItem(_api_service__WEBPACK_IMPORTED_MODULE_0__.LOCAL_STORAGE_JWT_KEY)) {
      this.api.currentUser().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)((error, _caught) => {
        if (error?.error?.reason === "expired_signature") {
          console.log("Expired signature");
          localStorage.removeItem(_api_service__WEBPACK_IMPORTED_MODULE_0__.LOCAL_STORAGE_JWT_KEY);
        }
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(error);
      }))
      // No need to unsubscribe because currentUser calls `http`
      .subscribe(user => {
        this._currentUser.next(user);
      });
    }
  }
  get currentUser() {
    return this._currentUser.asObservable();
  }
  signIn(email, password) {
    const body = {
      email,
      password
    };
    // No need to unsubscribe because login calls `http`
    return this.api.login(body).subscribe(user => this._currentUser.next(user));
  }
  signOut() {
    const observable = this.api.logout();
    // No need to unsubscribe
    observable.subscribe(() => {
      this._currentUser.next(null);
      this.router.navigate(['/']);
    });
    return observable;
  }
  canActivate(_route, _state) {
    return this._currentUser.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(user => {
      if (user) {
        return true;
      } else {
        this.router.navigate(['/login']);
        return false;
      }
    }));
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
  }, {
    type: _api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService
  }];
};
UserService = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Injectable)({
  providedIn: 'root'
})], UserService);


/***/ }),

/***/ 9562:
/*!************************************************!*\
  !*** ./src/app/services/waste-type.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WasteTypeService": () => (/* binding */ WasteTypeService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.service */ 5830);




let WasteTypeService = class WasteTypeService {
  constructor(api) {
    this.api = api;
    this.cachedWaste_Types = [];
  }
  get waste_types() {
    return this.api.getWasteTypes().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(waste_types => {
      this.cachedWaste_Types = waste_types;
      console.log(waste_types);
      return waste_types;
    }));
  }
  idFromWaste_TypeName(name) {
    return this.getWaste_TypeByName(name)?.id;
  }
  getWaste_TypeByName(name) {
    return this.cachedWaste_Types.find(waste_type => {
      return waste_type.waste_type_name === name;
    });
  }
  static #_ = this.ctorParameters = () => [{
    type: _api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService
  }];
};
WasteTypeService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
  providedIn: 'root'
})], WasteTypeService);


/***/ }),

/***/ 6675:
/*!***********************************************!*\
  !*** ./src/app/ui/footer/footer.component.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _home_ec2_user_environment_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _footer_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer.component.html?ngResource */ 7844);
/* harmony import */ var _footer_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer.component.scss?ngResource */ 9151);
/* harmony import */ var _footer_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_footer_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/user.service */ 3071);







let FooterComponent = class FooterComponent {
  constructor(http, userService) {
    this.http = http;
    this.userService = userService;
    this.buildingLogo = "";
    this.currentUserSubscription = null;
    this.currentUserSubscription = this.userService.currentUser.subscribe(user => {
      if (user) {
        this.getBuildingLogo(user);
      }
    });
  }
  ngOnDestroy() {
    this.currentUserSubscription?.unsubscribe();
  }
  getBuildingLogo(user) {
    var _this = this;
    return (0,_home_ec2_user_environment_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!user) {
        return;
      }
      _this.buildingLogo = user.photo_url;
    })();
  }
  ngOnInit() {}
  static #_ = this.ctorParameters = () => [{
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient
  }, {
    type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService
  }];
};
FooterComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-footer',
  template: _footer_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_footer_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], FooterComponent);


/***/ }),

/***/ 4444:
/*!***********************************************!*\
  !*** ./src/app/ui/header/header.component.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _header_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.component.html?ngResource */ 3827);
/* harmony import */ var _header_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.component.scss?ngResource */ 5940);
/* harmony import */ var _header_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_header_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _services_network_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/network.service */ 2982);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/user.service */ 3071);







let HeaderComponent = class HeaderComponent {
  constructor(router, userService, networkService) {
    this.router = router;
    this.userService = userService;
    this.networkService = networkService;
    this.show = false;
  }
  ngOnInit() {}
  toggleCollapse() {
    this.show = !this.show;
  }
  signOut() {
    // No need to unsubscribe
    this.userService.signOut().subscribe(() => {
      this.router.navigate(['/login']);
    });
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router
  }, {
    type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService
  }, {
    type: _services_network_service__WEBPACK_IMPORTED_MODULE_2__.NetworkService
  }];
};
HeaderComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-header',
  template: _header_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_header_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], HeaderComponent);


/***/ }),

/***/ 9951:
/*!***********************************************!*\
  !*** ./src/app/ui/layout/layout.component.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LayoutComponent": () => (/* binding */ LayoutComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _layout_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout.component.html?ngResource */ 9127);
/* harmony import */ var _layout_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout.component.scss?ngResource */ 1505);
/* harmony import */ var _layout_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_layout_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let LayoutComponent = class LayoutComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ctorParameters = () => [];
};
LayoutComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-layout',
  template: _layout_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_layout_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], LayoutComponent);


/***/ }),

/***/ 8086:
/*!*********************************!*\
  !*** ./src/app/ui/ui.module.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UiModule": () => (/* binding */ UiModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer/footer.component */ 6675);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header.component */ 4444);
/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout/layout.component */ 9951);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout */ 2681);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ 9121);
/* harmony import */ var _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/legacy-button */ 9159);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button-toggle */ 9837);
/* harmony import */ var _angular_material_legacy_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/legacy-card */ 7315);
/* harmony import */ var _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/legacy-form-field */ 1204);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_legacy_menu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/legacy-menu */ 1051);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/sidenav */ 6643);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/toolbar */ 2543);


















let UiModule = class UiModule {};
UiModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  declarations: [_layout_layout_component__WEBPACK_IMPORTED_MODULE_2__.LayoutComponent, _header_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_0__.FooterComponent],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__.FlexLayoutModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_7__.MatCommonModule, _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_8__.MatLegacyButtonModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_9__.MatButtonToggleModule, _angular_material_legacy_card__WEBPACK_IMPORTED_MODULE_10__.MatLegacyCardModule, _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_11__.MatLegacyFormFieldModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIconModule, _angular_material_legacy_menu__WEBPACK_IMPORTED_MODULE_13__.MatLegacyMenuModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_7__.MatRippleModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__.MatSidenavModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_15__.MatToolbarModule, _angular_router__WEBPACK_IMPORTED_MODULE_16__.RouterModule],
  exports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__.FlexLayoutModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_7__.MatCommonModule, _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_8__.MatLegacyButtonModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_9__.MatButtonToggleModule, _angular_material_legacy_card__WEBPACK_IMPORTED_MODULE_10__.MatLegacyCardModule, _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_11__.MatLegacyFormFieldModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIconModule, _angular_material_legacy_menu__WEBPACK_IMPORTED_MODULE_13__.MatLegacyMenuModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_7__.MatRippleModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__.MatSidenavModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_15__.MatToolbarModule, _angular_router__WEBPACK_IMPORTED_MODULE_16__.RouterModule, _layout_layout_component__WEBPACK_IMPORTED_MODULE_2__.LayoutComponent, _header_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_0__.FooterComponent]
})], UiModule);


/***/ }),

/***/ 405:
/*!***********************************************************!*\
  !*** ./src/app/user/email-login/email-login.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmailLoginComponent": () => (/* binding */ EmailLoginComponent)
/* harmony export */ });
/* harmony import */ var _home_ec2_user_environment_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _email_login_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./email-login.component.html?ngResource */ 4703);
/* harmony import */ var _email_login_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./email-login.component.scss?ngResource */ 7423);
/* harmony import */ var _email_login_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_email_login_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/user.service */ 3071);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);








let EmailLoginComponent = class EmailLoginComponent {
  constructor(fb, userService, router) {
    this.fb = fb;
    this.userService = userService;
    this.router = router;
    this.loading = false;
  }
  ngOnInit() {
    this.form = this.fb.group({
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.email]],
      password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]]
    });
    // No need to unsubscribe
    this.userService.currentUser.subscribe(user => {
      if (user) {
        this.router.navigate(['/collect_form']);
      }
    });
  }
  get email() {
    return this.form.get('email');
  }
  get password() {
    return this.form.get('password');
  }
  onSubmit() {
    var _this = this;
    return (0,_home_ec2_user_environment_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.loading = true;
      const email = _this.email.value;
      const password = _this.password.value;
      _this.userService.signIn(email, password);
      _this.loading = false;
    })();
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormBuilder
  }, {
    type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
  }];
};
EmailLoginComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-email-login',
  template: _email_login_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_email_login_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], EmailLoginComponent);


/***/ }),

/***/ 4270:
/*!***********************************************!*\
  !*** ./src/app/user/login/login.component.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _login_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.component.html?ngResource */ 5705);
/* harmony import */ var _login_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.component.scss?ngResource */ 7588);
/* harmony import */ var _login_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_login_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user.service */ 3071);






let LoginComponent = class LoginComponent {
  constructor(fb, userService) {
    this.fb = fb;
    this.userService = userService;
  }
  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.email]],
      username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]
    });
  }
  get email() {
    return this.loginForm.get('email');
  }
  get username() {
    return this.loginForm.get('username');
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormBuilder
  }, {
    type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService
  }];
};
LoginComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-login',
  template: _login_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_login_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], LoginComponent);


/***/ }),

/***/ 8524:
/*!*************************************!*\
  !*** ./src/app/user/user.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserModule": () => (/* binding */ UserModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login/login.component */ 4270);
/* harmony import */ var _email_login_email_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./email-login/email-login.component */ 405);
/* harmony import */ var _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/legacy-button */ 9159);
/* harmony import */ var _angular_material_legacy_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/legacy-card */ 7315);
/* harmony import */ var _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/legacy-form-field */ 1204);
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/grid-list */ 2642);
/* harmony import */ var _angular_material_legacy_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/legacy-input */ 2044);
/* harmony import */ var _angular_material_legacy_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/legacy-select */ 6002);






// UI






let UserModule = class UserModule {};
UserModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent, _email_login_email_login_component__WEBPACK_IMPORTED_MODULE_1__.EmailLoginComponent],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_6__.MatLegacyButtonModule, _angular_material_legacy_card__WEBPACK_IMPORTED_MODULE_7__.MatLegacyCardModule, _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_8__.MatLegacyFormFieldModule, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_9__.MatGridListModule, _angular_material_legacy_input__WEBPACK_IMPORTED_MODULE_10__.MatLegacyInputModule, _angular_material_legacy_select__WEBPACK_IMPORTED_MODULE_11__.MatLegacySelectModule]
})], UserModule);


/***/ }),

/***/ 3066:
/*!**********************************************!*\
  !*** ./src/app/web-usb/web-usb.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WebUsbComponent": () => (/* binding */ WebUsbComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _web_usb_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./web-usb.component.html?ngResource */ 1795);
/* harmony import */ var _web_usb_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./web-usb.component.scss?ngResource */ 2467);
/* harmony import */ var _web_usb_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_web_usb_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let WebUsbComponent = class WebUsbComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ctorParameters = () => [];
};
WebUsbComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-web-usb',
  template: _web_usb_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_web_usb_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], WebUsbComponent);


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
const environment = {
  production: false
};

/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 6057);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.log(err));

/***/ }),

/***/ 6099:
/*!***********************************!*\
  !*** ./src/styles.css?ngResource ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ 9579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ 931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 9595:
/*!***********************************************!*\
  !*** ./src/app/app.component.scss?ngResource ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 9579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ 931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 3487:
/*!*************************************************************************!*\
  !*** ./src/app/collector/collected/collected.component.scss?ngResource ***!
  \*************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 9579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".progress {\n  padding: 2em;\n}", "",{"version":3,"sources":["webpack://./src/app/collector/collected/collected.component.scss"],"names":[],"mappings":"AAAA;EACI,YAAA;AACJ","sourcesContent":[".progress {\n    padding: 2em;\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 4222:
/*!***************************************************************!*\
  !*** ./src/app/collector/collector.component.scss?ngResource ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 9579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".mat-grid-tile-header {\n  border-bottom: #66BB6A solid 2px !important;\n  background: #AAA !important;\n  color: #303030 !important;\n  font-size: 2em;\n}\n\n.mat-form-field {\n  margin-top: 1rem;\n  min-width: 280px;\n}\n\n.scale_input {\n  font-size: 4em;\n  color: #303030;\n  min-width: 250px;\n}\n\n.net-weight {\n  font-size: 6em;\n  color: #66BB6A;\n  min-width: 300px;\n}\n\n.number-field {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n\n.label {\n  margin-top: 0.25rem;\n}\n\n.example-option-img {\n  padding-right: 2rem;\n}\n\n.buttons-content {\n  margin-top: 2rem;\n}", "",{"version":3,"sources":["webpack://./src/app/collector/collector.component.scss"],"names":[],"mappings":"AAAA;EACI,2CAAA;EACA,2BAAA;EACA,yBAAA;EACA,cAAA;AACJ;;AAEA;EACI,gBAAA;EACA,gBAAA;AACJ;;AAEA;EACI,cAAA;EACA,cAAA;EACA,gBAAA;AACJ;;AAEA;EACI,cAAA;EACA,cAAA;EACA,gBAAA;AACJ;;AAEA;EACI,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,sBAAA;AACJ;;AAEA;EACI,mBAAA;AACJ;;AAEA;EACI,mBAAA;AACJ;;AAEA;EACI,gBAAA;AACJ","sourcesContent":[".mat-grid-tile-header {\n    border-bottom: #66BB6A solid 2px !important;\n    background: #AAA !important;\n    color: #303030 !important;\n    font-size: 2em;\n}\n\n.mat-form-field {\n    margin-top: 1rem;\n    min-width: 280px;\n}\n\n.scale_input {\n    font-size: 4em;\n    color: #303030;\n    min-width: 250px;\n}\n\n.net-weight {\n    font-size: 6em;\n    color: #66BB6A;\n    min-width: 300px;\n}\n\n.number-field {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n}\n\n.label {\n    margin-top: .25rem;\n}\n\n.example-option-img {\n    padding-right: 2rem;\n}\n\n.buttons-content {\n    margin-top: 2rem;\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 1160:
/*!*******************************************************************!*\
  !*** ./src/app/collector/queued/queued.component.scss?ngResource ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 9579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 2095:
/*!*****************************************************!*\
  !*** ./src/app/home/home.component.scss?ngResource ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 9579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 1695:
/*!*************************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.scss?ngResource ***!
  \*************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 9579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 1788:
/*!***********************************************************************!*\
  !*** ./src/app/reports/dashboard/dashboard.component.scss?ngResource ***!
  \***********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 9579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 1729:
/*!*************************************************************************!*\
  !*** ./src/app/reports/last-input/last-input.component.scss?ngResource ***!
  \*************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 9579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".last-input {\n  padding: 1rem;\n}", "",{"version":3,"sources":["webpack://./src/app/reports/last-input/last-input.component.scss"],"names":[],"mappings":"AAAA;EACI,aAAA;AACJ","sourcesContent":[".last-input {\n    padding: 1rem;\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 8580:
/*!***************************************************************************!*\
  !*** ./src/app/reports/leaderboard/leaderboard.component.scss?ngResource ***!
  \***************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 9579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "table {\n  width: 30rem;\n  height: 18rem;\n}", "",{"version":3,"sources":["webpack://./src/app/reports/leaderboard/leaderboard.component.scss"],"names":[],"mappings":"AAAA;EACE,YAAA;EACA,aAAA;AACF","sourcesContent":["table {\n  width: 30rem;\n  height: 18rem;\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 5849:
/*!***********************************************************!*\
  !*** ./src/app/reports/reports.component.scss?ngResource ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 9579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 7880:
/*!*************************************************************!*\
  !*** ./src/app/reports/tips/tips.component.scss?ngResource ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 9579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 8233:
/*!***************************************************************!*\
  !*** ./src/app/reports/trend/trend.component.scss?ngResource ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 9579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".trend-th {\n  text-align: center;\n}\n\n.trend-td {\n  padding: 0 2rem 0 2rem;\n  margin: 1rem;\n}", "",{"version":3,"sources":["webpack://./src/app/reports/trend/trend.component.scss"],"names":[],"mappings":"AAAA;EACI,kBAAA;AACJ;;AAEA;EACI,sBAAA;EACA,YAAA;AACJ","sourcesContent":[".trend-th {\n    text-align: center;\n}\n\n.trend-td {\n    padding: 0 2rem 0 2rem;\n    margin: 1rem;\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 9151:
/*!************************************************************!*\
  !*** ./src/app/ui/footer/footer.component.scss?ngResource ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 9579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".mat-toolbar {\n  border-top: #01579B solid 1px !important;\n  margin-top: 2rem;\n  max-height: 1rem;\n}", "",{"version":3,"sources":["webpack://./src/app/ui/footer/footer.component.scss"],"names":[],"mappings":"AAAA;EACI,wCAAA;EACA,gBAAA;EACA,gBAAA;AACJ","sourcesContent":[".mat-toolbar {\n    border-top: #01579B solid 1px !important;\n    margin-top: 2rem;\n    max-height: 1rem;\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 5940:
/*!************************************************************!*\
  !*** ./src/app/ui/header/header.component.scss?ngResource ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 9579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "#title {\n  color: white;\n}\n\n.spacer {\n  flex: 1 1 auto;\n}\n\n.mat-toolbar {\n  border-bottom: #01579B solid 1px !important;\n  padding-top: 1rem;\n}\n\n.offline-notification {\n  text-align: center;\n  font-weight: bold;\n  font-size: 16px;\n  padding: 10px;\n  margin: 0;\n  background-color: rgb(255, 100, 100);\n}\n.offline-notification p {\n  margin: 0;\n}", "",{"version":3,"sources":["webpack://./src/app/ui/header/header.component.scss"],"names":[],"mappings":"AAAA;EACI,YAAA;AACJ;;AAEA;EACE,cAAA;AACF;;AAEA;EACI,2CAAA;EACA,iBAAA;AACJ;;AAEA;EACE,kBAAA;EACA,iBAAA;EACA,eAAA;EACA,aAAA;EACA,SAAA;EACA,oCAAA;AACF;AACE;EACE,SAAA;AACJ","sourcesContent":["#title {\n    color: white;\n}\n\n.spacer {\n  flex: 1 1 auto;\n}\n\n.mat-toolbar {\n    border-bottom: #01579B solid 1px !important;\n    padding-top: 1rem;\n}\n\n.offline-notification {\n  text-align: center;\n  font-weight: bold;\n  font-size: 16px;\n  padding: 10px;\n  margin: 0;\n  background-color: rgb(255, 100, 100);\n\n  p {\n    margin: 0;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 1505:
/*!************************************************************!*\
  !*** ./src/app/ui/layout/layout.component.scss?ngResource ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 9579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "container-content {\n  min-height: 100vh;\n}", "",{"version":3,"sources":["webpack://./src/app/ui/layout/layout.component.scss"],"names":[],"mappings":"AAAA;EACE,iBAAA;AACF","sourcesContent":["container-content {\n  min-height: 100vh;\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 7423:
/*!************************************************************************!*\
  !*** ./src/app/user/email-login/email-login.component.scss?ngResource ***!
  \************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 9579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "mat-card {\n  max-width: 30rem;\n  margin: 1rem;\n}\n\nmat-form-field {\n  width: 100%;\n  margin-bottom: 16px;\n}\n\n.server-error {\n  margin: 8px 0;\n}\n\ninput {\n  height: 2em;\n}\ninput div.mat-form-field-infix {\n  padding: 0.3em 0;\n}\ninput div.mat-form-field-infix input.mat-input-element {\n  vertical-align: top;\n}\n\ndiv.mat-form-field-wrapper {\n  padding-bottom: 1.15em;\n}", "",{"version":3,"sources":["webpack://./src/app/user/email-login/email-login.component.scss"],"names":[],"mappings":"AAAA;EACI,gBAAA;EACA,YAAA;AACJ;;AAEA;EACM,WAAA;EACA,mBAAA;AACN;;AAEA;EACI,aAAA;AACJ;;AAGA;EACI,WAAA;AAAJ;AACI;EACE,gBAAA;AACN;AAAM;EACE,mBAAA;AAER;;AAEE;EACE,sBAAA;AACJ","sourcesContent":["mat-card {\n    max-width: 30rem;\n    margin: 1rem;\n}\n\nmat-form-field {\n      width: 100%;\n      margin-bottom: 16px;\n}\n\n.server-error {\n    margin: 8px 0;;\n}\n\n\ninput {\n    height: 2em;\n    div.mat-form-field-infix {\n      padding: .3em 0;\n      input.mat-input-element {\n        vertical-align: top;\n      }\n    }\n  }\n  div.mat-form-field-wrapper{\n    padding-bottom: 1.15em;\n  }"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 7588:
/*!************************************************************!*\
  !*** ./src/app/user/login/login.component.scss?ngResource ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 9579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "mat-card {\n  max-width: 30rem;\n  margin: 1rem;\n}", "",{"version":3,"sources":["webpack://./src/app/user/login/login.component.scss"],"names":[],"mappings":"AAAA;EACI,gBAAA;EACA,YAAA;AACJ","sourcesContent":["mat-card {\n    max-width: 30rem;\n    margin: 1rem;\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 2467:
/*!***********************************************************!*\
  !*** ./src/app/web-usb/web-usb.component.scss?ngResource ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 9579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 3383:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "<app-layout></app-layout>\n";

/***/ }),

/***/ 723:
/*!*************************************************************************!*\
  !*** ./src/app/collector/collected/collected.component.html?ngResource ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n        <h3 mat-dialog-title>Last Input</h3>\n\n    <mat-dialog-content>\n      <div *ngIf=\"lastCollect\">\n        <div>\n        Collected For: <b>{{lastCollect.location_name}}</b>\n        </div>\n        <div>\n        Waste Collected: <b>{{lastCollect.waste_type}}</b>\n        </div>\n        <div>\n        Net Weight Collected: <b>{{lastCollect.net_weight}}</b> lbs\n        </div>\n        <div>\n        Collected By: <b>{{lastCollect.collector_name}}</b>\n        </div>\n        <div>\n        Container used: <b>{{lastCollect.container_name}}</b>\n        </div>\n        <div>\n        Tare Weight: <b>{{lastCollect.tare_weight}}</b> lbs\n        </div>\n        <div>\n        Scale Weight: <b>{{lastCollect.scale_weight}}</b> lbs\n        </div>\n      </div>\n    </mat-dialog-content>\n\n    <mat-dialog-actions>\n      <button mat-raised-button matDialogClose>Close <mat-icon><mat-progress-spinner class=\"padding\" color=\"primary\" mode=\"indeterminate\" diameter=\"20\"></mat-progress-spinner></mat-icon></button>\n    </mat-dialog-actions>\n";

/***/ }),

/***/ 8031:
/*!***************************************************************!*\
  !*** ./src/app/collector/collector.component.html?ngResource ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "  <form *ngIf=\"collectForm\" [formGroup]=\"collectForm\" (ngSubmit)=\"onSubmit()\" #collectNgForm=\"ngForm\">\n    <mat-grid-list cols=\"4\" rowHeight=\"3:1\">\n      <mat-grid-tile [colspan]=\"2\" [rowspan]=\"1\">\n        <mat-grid-tile-header>\n          Locations\n        </mat-grid-tile-header>\n        <mat-form-field appearance=\"standard\">\n          <mat-label>Enter Location</mat-label>\n          <input\n          tabindex=\"1\"\n          class=\"input\"\n          type=\"text\"\n          #collect_location\n          panelWidth=\"2rem\"\n          matInput\n          [matAutocomplete]=\"location_auto\"\n          formControlName=\"collect_location\"\n          [ngClass]=\"{ 'is-success' : collectForm.get('collect_location').valid && collectForm.get('collect_location').dirty, 'is-danger' : !collectForm.get('collect_location').valid }\"\n          aria-label=\"Location\">\n            <mat-autocomplete #location_auto=\"matAutocomplete\" panelWidth=\"25%\">\n              <mat-option *ngFor=\"let collect_location of filteredCollectLocations$ | async\" [value]=\"collect_location.name\">\n                <img class=\"example-option-img\" aria-hidden [src]=\"collect_location.logo\" height=\"10\">\n                <span>{{ collect_location.name }}</span> |\n                <small>Floor: {{ collect_location.floor }} | </small>\n                <small>Suite: {{ collect_location.suite }}</small>\n              </mat-option>\n            </mat-autocomplete>\n            <mat-error [hidden]=\"collectForm.get('collect_location').valid\" align=\"end\">Location is required and must be from the list.</mat-error>\n        </mat-form-field>\n      </mat-grid-tile>\n\n      <mat-grid-tile [colspan]=\"2\" [rowspan]=\"2\">\n        <mat-grid-tile-header>\n          Scale Weight\n        </mat-grid-tile-header>\n        <mat-form-field appearance=\"standard\" class=\"number-field\">\n          <h1 class=\"scale_input\">\n            <input\n            matInput\n            #scale\n            class=\"input\"\n            type=\"number\"\n            formControlName=\"scale_weight\"\n            [ngClass]=\"{ 'is-success' : collectForm.get('scale_weight').valid && collectForm.get('scale_weight').dirty, 'is-danger' : !collectForm.get('scale_weight').valid }\"\n            aria-label=\"Scale Weight\">\n          </h1>\n          <mat-error [hidden]=\"collectForm.get('scale_weight').valid\" align=\"end\">The scale weight must be zero or greater. Add tare to the tare weight field.</mat-error>\n        </mat-form-field>\n      </mat-grid-tile>\n\n      <mat-grid-tile [colspan]=\"2\" [rowspan]=\"1\">\n        <mat-grid-tile-header>\n          Waste Type\n        </mat-grid-tile-header>\n          <mat-form-field appearance=\"standard\">\n            <mat-label>Enter Waste Type</mat-label>\n            <input\n            matInput\n            tabindex=\"2\"\n            #waste_type\n            [matAutocomplete]=\"waste_type_auto\"\n            class=\"input\"\n            type=\"text\"\n            formControlName=\"waste_type\"\n            [ngClass]=\"{'is-success' : collectForm.get('waste_type').valid && collectForm.get('waste_type').dirty, 'is-danger' : !collectForm.get('waste_type').valid }\"\n            aria-label=\"Waste Type\">\n              <mat-autocomplete #waste_type_auto=\"matAutocomplete\" panelWidth=\"30%\">\n                <mat-option *ngFor=\"let waste_type of filteredWaste_Types$ | async\" [value]=\"waste_type.waste_type_name\">\n                  <img class=\"example-option-img\" aria-hidden [src]=\"waste_type.waste_type_icon\" height=\"25\">\n                  <span>{{ waste_type.waste_type_name }}</span>\n                </mat-option>\n              </mat-autocomplete>\n              <mat-error [hidden]=\"collectForm.get('waste_type').valid\" align=\"end\">Waste type is required and must be from the list.</mat-error>\n          </mat-form-field>\n      </mat-grid-tile>\n\n      <mat-grid-tile [colspan]=\"2\" [rowspan]=\"1\">\n        <mat-grid-tile-header>\n          Collected By\n        </mat-grid-tile-header>\n          <mat-form-field appearance=\"standard\">\n            <mat-label>Enter Collector Name</mat-label>\n            <input\n            tabindex=\"3\"\n            class=\"input\"\n            type=\"text\"\n            #collector\n            panelWidth=\"2rem\"\n            matInput\n            [matAutocomplete]=\"collector_auto\"\n            formControlName=\"collector\"\n            [ngClass]=\"{'is-success' : collectForm.get('collector').valid && collectForm.get('collector').dirty, 'is-danger' : !collectForm.get('collector').valid }\"\n            aria-label=\"Collector\">\n              <mat-autocomplete #collector_auto=\"matAutocomplete\" panelWidth=\"25%\">\n                <mat-option *ngFor=\"let collector of filteredCollectors$ | async\" [value]=\"collector.name\">\n                  <img class=\"example-option-img\" aria-hidden [src]=\"collector.icon\" height=\"10\">\n                  <span>{{ collector.name }}</span>\n                </mat-option>\n              </mat-autocomplete>\n              <mat-error [hidden]=\"collectForm.get('collector').valid\" align=\"end\">The person inputting the data is required</mat-error>\n          </mat-form-field>\n      </mat-grid-tile>\n\n      <mat-grid-tile [colspan]=\"2\" [rowspan]=\"2\">\n        <mat-grid-tile-header>\n          Net Weight\n        </mat-grid-tile-header>\n        <mat-form-field appearance=\"standard\" class=\"number-field\">\n          <h1 class=\"net-weight\">\n            <input\n            #net_weight\n            matInput\n            class=\"input\"\n            type=\"number\"\n            formControlName=\"net_weight\"\n            [ngClass]=\"{ 'is-success' : collectForm.get('net_weight').valid && collectForm.get('net_weight').dirty, 'is-danger' : !collectForm.get('net_weight').valid }\">\n          </h1>\n            <mat-error [hidden]=\"collectForm.get('net_weight').valid\" align=\"end\">Net weight should be equal to the scale weight minus the tare weight.</mat-error>\n        </mat-form-field>\n      </mat-grid-tile>\n\n      <mat-grid-tile [colspan]=\"2\" [rowspan]=\"1\">\n        <mat-grid-tile-header>\n          Tare\n        </mat-grid-tile-header>\n            <mat-form-field appearance=\"standard\">\n              <mat-label>Enter Container</mat-label>\n              <input\n              tabindex=\"4\"\n              class=\"input\"\n              type=\"text\"\n              #container\n              [matAutocomplete]=\"tare_auto\"\n              formControlName=\"container\"\n              matInput\n              [ngClass]=\"{'is-success' : collectForm.get('container').valid && collectForm.get('container').dirty, 'is-danger' : !collectForm.get('container').valid }\"\n              aria-label=\"Container\">\n                <mat-autocomplete #tare_auto=\"matAutocomplete\" panelWidth=\"15%\">\n                  <mat-option *ngFor=\"let container of filteredContainers$ | async\" [value]=\"container.name\">\n                    <img class=\"example-option-img\" aria-hidden [src]=\"container.icon\" height=\"25\">\n                    <span>{{ container.name }}</span>\n                  </mat-option>\n                </mat-autocomplete>\n                <mat-error [hidden]=\"collectForm.get('container').valid\" align=\"end\">Tare container is required and must be from the list.</mat-error>\n            </mat-form-field>\n\n            <mat-form-field appearance=\"standard\" class=\"number-field\">\n              <input\n              #tare_weight\n              matInput\n              class=\"input\"\n              type=\"number\"\n              formControlName=\"tare_weight\"\n              [ngClass]=\"{'is-success' : collectForm.get('tare_weight').valid && collectForm.get('tare_weight').dirty, 'is-danger' : !collectForm.get('tare_weight').valid }\"\n              aria-label=\"Tare Weight\">\n                <mat-error [hidden]=\"collectForm.get('tare_weight').valid\" align=\"end\">Tare weight is required.</mat-error>\n            </mat-form-field>\n            <span class=\"label\">{{ getScaleUnit() }}</span>\n      </mat-grid-tile>\n\n    </mat-grid-list>\n\n    <div class=\"buttons-content\">\n      <button tabindex=\"5\" mat-flat-button color=\"accent\" type=\"button\" (click)=\"onSubmit(); collect_location.focus();\" [disabled]=\"collectForm.invalid\">Submit</button>\n      <button mat-button type=\"reset\" (click)=\"collectForm.reset(); collect_location.focus();\">Reset</button>\n    </div>\n\n  </form>";

/***/ }),

/***/ 3342:
/*!*******************************************************************!*\
  !*** ./src/app/collector/queued/queued.component.html?ngResource ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<h3 mat-dialog-title>Last Input</h3>\n\n<p>The application is offline.</p>\n<p>This collection will be permanently saved the next time a network connection is established.</p>\n\n<mat-dialog-actions>\n  <button mat-raised-button matDialogClose>Close</button>\n</mat-dialog-actions>\n";

/***/ }),

/***/ 4715:
/*!*****************************************************!*\
  !*** ./src/app/home/home.component.html?ngResource ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<p>home works!</p>\n";

/***/ }),

/***/ 4862:
/*!*************************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.html?ngResource ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div fxLayoutAlign=\"center center\">\n\n    <mat-card>\n\n        <mat-card-header>\n            <mat-card-title>\n                <h1>404 - Page Not Found</h1>\n            </mat-card-title>\n        </mat-card-header>\n\n        <mat-card-content>\n            <p>\n                You have been diverted to a landfill. Please check your waste bin to see if you can be directed to a more environmentally friendly end use.\n            </p>\n        </mat-card-content>\n\n        <mat-card-actions>\n            <button mat-stroked-button routerLink=\"/\">Home</button>\n        </mat-card-actions>\n\n    </mat-card>\n\n</div>\n";

/***/ }),

/***/ 6881:
/*!***********************************************************************!*\
  !*** ./src/app/reports/dashboard/dashboard.component.html?ngResource ***!
  \***********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n\n<!--<mat-grid-list cols=\"2\" rowHeight=\"2:1\">\n    <mat-grid-tile rowspan=\"2\">\n        <mat-card>\n            <mat-card-title>\n                <h4>Leaderboard</h4>\n            </mat-card-title>\n            <mat-card-content>\n                <app-leaderboard></app-leaderboard>\n            </mat-card-content>\n        </mat-card>\n    </mat-grid-tile>\n\n    <mat-grid-tile>\n        <mat-card>\n            <mat-card-title>\n                <h4>Recycling Trend</h4>\n            </mat-card-title>\n            <mat-card-content>\n                <app-trend></app-trend>\n            </mat-card-content>\n        </mat-card>\n    </mat-grid-tile>\n\n    <mat-grid-tile>\n        <mat-card>\n            <mat-card-title>\n                <h4>Last Input</h4>\n            </mat-card-title>\n            <mat-card-content>\n                <app-last-input></app-last-input>\n            </mat-card-content>\n        </mat-card>\n    </mat-grid-tile>\n\n</mat-grid-list>-->";

/***/ }),

/***/ 6313:
/*!*************************************************************************!*\
  !*** ./src/app/reports/last-input/last-input.component.html?ngResource ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"mat-elevation-z8 last-input\">\n<ul *ngIf=\"lastCollect\">\n    <li>\n        <b>Location:</b> {{lastCollect.location_name}}\n    </li>\n    <li>\n        <b>Waste Type:</b> {{lastCollect.waste_type}}\n    </li>\n    <li>\n        <b>Who Collected:</b> {{lastCollect.retriever_name}}\n    </li>\n    <li>\n        <b>Net Weight:</b> {{lastCollect.net_weight}}\n    </li>\n    <li>\n        <b>Container:</b> {{lastCollect.container_name}}\n    </li>\n    <li>\n        <b>Tare:</b> {{lastCollect.tare_weight}}\n    </li>\n    <li>\n        <b>Scale:</b> {{lastCollect.scale_weight}}\n    </li>\n    <li>\n        <b>Time Collected:</b> {{lastCollect.weighed_at | date:'short' }}\n    </li>\n    <li>\n        <b>ID:</b> {{lastCollect.id }}\n    </li>\n</ul>\n</div>\n";

/***/ }),

/***/ 3310:
/*!***************************************************************************!*\
  !*** ./src/app/reports/leaderboard/leaderboard.component.html?ngResource ***!
  \***************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n\n  <!--- Note that these columns can be defined in any order.\n        The actual rendered columns are set as a property on the row definition\" -->\n\n  <!-- Position Column -->\n  <ng-container matColumnDef=\"position\">\n    <th mat-header-cell *matHeaderCellDef> No. </th>\n    <td mat-cell *matCellDef=\"let tenant\"> {{tenant.position}} </td>\n  </ng-container>\n\n  <!-- Name Column -->\n  <ng-container matColumnDef=\"name\">\n    <th mat-header-cell *matHeaderCellDef> Name </th>\n    <td mat-cell *matCellDef=\"let tenant\"> {{tenant.name}} </td>\n  </ng-container>\n  \n  <!-- Logo Column -->\n  <ng-container matColumnDef=\"logo\">\n    <th mat-header-cell *matHeaderCellDef> Logo </th>\n    <td mat-cell *matCellDef=\"let tenant\"> <img src=\"{{tenant.logo}}\" width=\"50px\" height=\"auto\"> </td>\n  </ng-container>\n\n  <!-- Percent Column -->\n  <ng-container matColumnDef=\"percent\">\n    <th mat-header-cell *matHeaderCellDef> Percent </th>\n    <td mat-cell *matCellDef=\"let tenant\"> {{tenant.percent | percent}} </td>\n  </ng-container>\n\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n</table>\n\n";

/***/ }),

/***/ 1176:
/*!***********************************************************!*\
  !*** ./src/app/reports/reports.component.html?ngResource ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = "    <mat-grid-tile>\n        <mat-card>\n            <mat-card-title>\n                <h4>Recycling Trend</h4>\n            </mat-card-title>\n            <mat-card-content>\n                <app-trend></app-trend>\n            </mat-card-content>\n        </mat-card>\n    </mat-grid-tile>\n\n\n<ul>\n            <li *ngFor=\"let item of items | async\">\n                <pre>{{ item | json }}</pre>\n            </li>\n        </ul>";

/***/ }),

/***/ 5352:
/*!*************************************************************!*\
  !*** ./src/app/reports/tips/tips.component.html?ngResource ***!
  \*************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<p>tips works!</p>\n";

/***/ }),

/***/ 9778:
/*!***************************************************************!*\
  !*** ./src/app/reports/trend/trend.component.html?ngResource ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<table matSort class=\"mat-elevation-z8\">\n<tr class=\"trend-th\">\n  <th>Snapshot</th>\n  <th>Monthly</th>\n  <th>Yearly</th>\n</tr>\n<tr *ngFor=\"let user of users | async\">\n  <td class=\"trend-td\" [ngStyle]=\"{'color': setDiversionColor(user.diversion_rate_daily_average)}\">{{ user.diversion_rate_daily_average | percent }}</td>\n  <td class=\"trend-td\" [ngStyle]=\"{'color': setDiversionColor(user.diversion_rate_monthly_average)}\">{{user.diversion_rate_monthly_average | percent }}</td>\n  <td class=\"trend-td\" [ngStyle]=\"{'color': setDiversionColor(user.diversion_rate_yearly_average)}\">{{user.diversion_rate_yearly_average | percent }}</td>\n</tr>\n<!--[ngStyle]=\"{'color': setDiversionColor(users.diversion_rate_yearly_average)}-->\n</table>";

/***/ }),

/***/ 7844:
/*!************************************************************!*\
  !*** ./src/app/ui/footer/footer.component.html?ngResource ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<mat-toolbar>\n        <img [src]=\"buildingLogo | async\">\n</mat-toolbar>\n";

/***/ }),

/***/ 3827:
/*!************************************************************!*\
  !*** ./src/app/ui/header/header.component.html?ngResource ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<mat-toolbar color=\"primary\"><img src=\"./assets/img/rightbin_logo_text.png\" width=\"200px\" height=\"auto\">\n<span class=\"spacer\"></span>\n\n<button mat-flat-button color=\"accent\" [matMenuTriggerFor]=\"menu\">Track</button>\n  <mat-menu #menu=\"matMenu\">\n    <a routerLink=\"collect_form\" mat-menu-item>Collect Form</a>\n    <button mat-menu-item disabled>Report</button>\n  </mat-menu>\n\n<div *ngIf=\"userService.currentUser | async as user; then authenticated else guest\">\n        <!-- template will replace this div -->\n</div>\n\n<ng-template #guest>\n  <button mat-stroked-button><a routerLink=\"login\">Sign In</a></button>\n</ng-template>\n\n\n<ng-template #authenticated>\n  <button mat-button (click)=\"signOut()\">Sign Out</button>\n</ng-template>\n\n</mat-toolbar>\n\n<div *ngIf=\"networkService.isOffline$ | async\">\n  <div class=\"offline-notification\">\n    <p>RecycleTracker has lost its network connection. Any collections you record will be uploaded once the application is back online.</p>\n  </div>\n</div>\n";

/***/ }),

/***/ 9127:
/*!************************************************************!*\
  !*** ./src/app/ui/layout/layout.component.html?ngResource ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<mat-drawer-container fullscreen>\n\n    <mat-drawer #drawer opened mode=\"side\">\n    </mat-drawer>\n\n    <mat-drawer-content class=\"container-content\" fxLayout=\"column\" fxLayoutAlign=\"start stretch\" fxFlexFill>\n      <app-header></app-header>\n            <router-outlet></router-outlet>\n        <app-footer fxFlex fxFlexOffset=\"auto\"></app-footer>\n    </mat-drawer-content>\n\n</mat-drawer-container>";

/***/ }),

/***/ 4703:
/*!************************************************************************!*\
  !*** ./src/app/user/email-login/email-login.component.html?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<mat-grid-list cols=\"1\" rows=\"1\" rowHeight=\"2:1\">\n    <mat-grid-tile>\n\n    <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\n        <mat-card>\n            <mat-card-header>\n                <mat-card-title>\n                    Sign In to Record Scale Data and View Reports\n                </mat-card-title>\n            </mat-card-header>\n\n            <mat-card-content fxLayout=\"column\">\n\n                <mat-form-field appearance=\"standard\" [color]=\"email.valid && 'accent'\">\n                    <input\n                    matInput\n                    formControlName=\"email\"\n                    type=\"email\"\n                    placeholder=\"Email\"\n                    autocomplete=\"off\"\n                    aria-label=\"Email\"\n                    />\n\n                    <mat-error *ngIf=\"email.invalid && email.dirty\">\n                        You must enter a valid email address.\n                    </mat-error>\n                </mat-form-field>\n\n                <mat-form-field appearance=\"standard\" [color]=\"email.valid && 'accent'\">\n                    <input\n                    matInput\n                    formControlName=\"password\"\n                    type=\"password\"\n                    placeholder=\"Password\"\n                    autocomplete=\"off\"\n                    aria-label=\"Password\"\n                    />\n\n                    <mat-error *ngIf=\"password.invalid && password.dirty\">\n                        Password must be at least 8 characters long.\n                    </mat-error>\n                </mat-form-field>\n\n                <mat-error class=\"server-error\">{{ serverMessage }}</mat-error>\n\n                <button\n                    mat-raised-button\n                    color=\"accent\"\n                    type=\"submit\"\n                    [disabled]=\"form.invalid || loading\"\n                >\n                    Sign In\n                </button>\n\n            </mat-card-content>\n        </mat-card>\n    </form>\n\n    </mat-grid-tile>\n</mat-grid-list>\n\n";

/***/ }),

/***/ 5705:
/*!************************************************************!*\
  !*** ./src/app/user/login/login.component.html?ngResource ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div fxLayoutAlign=\"center center\" *ngIf=\"!(userService.currentUser | async )\">\n\n            <app-email-login></app-email-login>\n\n</div>\n\n<div fxLayoutAlign=\"center center\" *ngIf=\"userService.currentUser | async as user\">\n\n    <mat-card>\n\n        <mat-card-header>\n            <mat-card-title>\n                Signed in as <strong>{{ user.email }}</strong>\n            </mat-card-title>\n        </mat-card-header>\n\n        <mat-card-content>\n            Connect a scale to collect waste, compost, and recycling weights and locations by choosing <strong>Record Data</strong>.\n        </mat-card-content>\n\n        <mat-card-actions>\n            <button mat-stroked-button routerLink=\"/collect_form\">Record Data</button>\n            <button mat-stroked-button (click)=\"userService.signOut()\">Sign Out</button>\n        </mat-card-actions>\n\n    </mat-card>\n\n</div>";

/***/ }),

/***/ 1795:
/*!***********************************************************!*\
  !*** ./src/app/web-usb/web-usb.component.html?ngResource ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<!--Web USB request for Chrome from https://stackoverflow.com/questions/56801187/possible-to-use-nodejs-in-the-browser-with-webusb-->\n\n<html>\n<body>\n    <button id=\"usb\">Connect to a USB Device</button>\n    <script>\n        /* global navigator */\n        \n        document.getElementById('usb').addEventListener('click',function(){\n            if (navigator.usb) {\n                navigator.usb.requestDevice({\n                    filters: []\n                })\n                .then(function(device){\n                    document.body.innerHTML +=\n                        device.manufacturerName + ', ' +\n                        device.productName;\n                });\n            }\n        });\n    </script>\n</body>\n</html>\n";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map