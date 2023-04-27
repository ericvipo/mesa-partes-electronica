"use strict";
(self["webpackChunkmpe_ng"] = self["webpackChunkmpe_ng"] || []).push([["main"],{

/***/ 3054:
/*!*******************************!*\
  !*** ./src/app/app-routes.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "routes": () => (/* binding */ routes)
/* harmony export */ });
/* harmony import */ var _shared_components_verification_verification_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/components/verification/verification.component */ 7544);
/* harmony import */ var _shared_components_personal_data_personal_data_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/components/personal-data/personal-data.component */ 6619);
/* harmony import */ var _modules_complaint_components_complaint_data_complaint_data_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @modules/complaint/components/complaint-data/complaint-data.component */ 3415);
// import { IsAuthGuard } from './core/guards/is-auth.guard';
// import { IsUnauthGuard } from './core/guards/is-unauth.guard';



const routes = [{
  path: '',
  loadComponent: () => __webpack_require__.e(/*! import() */ "src_app_modules_main_main_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./modules/main/main.component */ 8187)).then(m => m.MainComponent)
}, {
  path: 'realizar-denuncia',
  loadComponent: () => __webpack_require__.e(/*! import() */ "src_app_modules_complaint_complaint_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./modules/complaint/complaint.component */ 5164)).then(m => m.ComplaintComponent),
  children: [{
    path: '',
    redirectTo: 'verificacion',
    pathMatch: 'full'
  }, {
    path: 'verificacion',
    component: _shared_components_verification_verification_component__WEBPACK_IMPORTED_MODULE_0__.VerificationComponent
  }, {
    path: 'datos-personales',
    component: _shared_components_personal_data_personal_data_component__WEBPACK_IMPORTED_MODULE_1__.PersonalDataComponent
  }, {
    path: 'datos-denuncia',
    component: _modules_complaint_components_complaint_data_complaint_data_component__WEBPACK_IMPORTED_MODULE_2__.ComplaintDataComponent
  }]
}
// {
//   path: 'auth',
//   // loadChildren: () =>
//   // import('@core/layouts/auth/auth.module').then((m) => m.AuthModule),
//   canActivate: [IsUnauthGuard],
//   loadChildren: () =>
//     import('./core/layouts/auth/auth-routes').then((m) => m.routes),
// },
// {
//   path: 'dashboard',
//   canActivate: [IsAuthGuard],
//   loadChildren: () =>
//     import('./core/layouts/dashboard/dashboard-routes').then((m) => m.routes),
// },
];
// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule],
// })
// export routes

/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/components/header/header.component */ 6290);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/api */ 4356);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 8699);


//components





class AppComponent {
  constructor(primeNGConfig, translateService) {
    this.primeNGConfig = primeNGConfig;
    this.translateService = translateService;
    this.title = 'mpe-ng';
    this.translateService.setDefaultLang('es');
    this.translateService.use('es');
    this.subscription = this.translateService.stream('primeng').subscribe(data => {
      this.primeNGConfig.setTranslation(data);
    });
    this.primeNGConfig.ripple = true;
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_2__.PrimeNGConfig), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateService));
};
AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
  decls: 2,
  vars: 0,
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-header")(1, "router-outlet");
    }
  },
  dependencies: [
  //modules
  _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterOutlet,
  //components
  _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 3415:
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/complaint/components/complaint-data/complaint-data.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComplaintDataComponent": () => (/* binding */ ComplaintDataComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var primeng_accordion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/accordion */ 9854);
/* harmony import */ var _scene_place_scene_place_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scene-place/scene-place.component */ 3755);
/* harmony import */ var _scene_details_scene_details_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scene-details/scene-details.component */ 1836);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);

//primeng

//components




class ComplaintDataComponent {}
ComplaintDataComponent.ɵfac = function ComplaintDataComponent_Factory(t) {
  return new (t || ComplaintDataComponent)();
};
ComplaintDataComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: ComplaintDataComponent,
  selectors: [["app-complaint-data"]],
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
  decls: 13,
  vars: 1,
  consts: [[1, "text-xl", "font-semibold", "mt-6"], [1, "mx-auto", 2, "max-width", "60rem"], [3, "activeIndex"], ["header", "Ind\u00EDcanos d\u00F3nde y cu\u00E1ndo sucedi\u00F3", "tabStyleClass", "mb-3"], ["header", "Proporciona una explicaci\u00F3n detallada de lo que ocurri\u00F3", "tabStyleClass", "mb-3"], ["header", "Agraviados", "tabStyleClass", "mb-3"]],
  template: function ComplaintDataComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Datos de la denuncia");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Por favor complete los datos sobre su denuncia.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 1)(5, "p-accordion", 2)(6, "p-accordionTab", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "complaint-scene-place");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "p-accordionTab", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "complaint-scene-details");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "p-accordionTab", 5)(11, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, " At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("activeIndex", 0);
    }
  },
  dependencies: [primeng_accordion__WEBPACK_IMPORTED_MODULE_3__.AccordionModule, primeng_accordion__WEBPACK_IMPORTED_MODULE_3__.Accordion, primeng_accordion__WEBPACK_IMPORTED_MODULE_3__.AccordionTab, _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _scene_place_scene_place_component__WEBPACK_IMPORTED_MODULE_0__.ScenePlaceComponent, _scene_details_scene_details_component__WEBPACK_IMPORTED_MODULE_1__.SceneDetailsComponent],
  encapsulation: 2
});

/***/ }),

/***/ 3186:
/*!***********************************************************************************!*\
  !*** ./src/app/modules/complaint/components/scene-details/helpers/prosecutors.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([{
  name: 'Fiscalía Provincial Penal',
  description: 'Puede realizar su denuncia sobre delitos como violacion sexual, actos contra el pudo, violencia contra la mujer, acoso sexual, lesiones y otros.',
  id: 1
}, {
  name: 'Fiscalía de Violencia Contra la Mujer y los Integrantes del Grupo Familiar',
  description: 'Puede realizar su denuncia sobre delitos como Robo, Hurto, Estafa, Usurpación, Apropiación ilícita y otros.',
  id: 2
}, {
  name: 'Fiscalía Especializada en Materia Ambiental de Lima',
  description: 'Puede realizar su denuncia sobre delitos como Contaminación, Contaminación agravada, Residuos sólidos, Tráfico ilegal de residuos peligrosos  y otros.',
  id: 3
}, {
  name: 'Fiscalía especializada en investigación de Terrorismo y derechos humanos',
  description: 'Puedes realizar su denuncia sobre delitos como discriminación, colaboración al terrorismo, genocidio y otros.',
  id: 4
}, {
  name: 'Fiscalía Provincial Corporativa Especializada en Delitos de Trata de Personas de Lima',
  description: 'Puede realizar su denuncia sobre delitos como Trata de personas, Trata de personas agravada, Explotación sexual y otros.',
  id: 5
}, {
  name: 'Fiscalía Especializada en Delitos Aduaneros y Propiedad Intelectual',
  description: 'Puede realizar su denuncia sobre delitos como Copia o reproducción no autorizada, Reproducción, difusión, distribución y circulación de la obra sin la autorización del autor, Plagio y otros.',
  id: 6
}, {
  name: 'Fiscalía Especializada en Delito Tributario',
  description: 'Puede realizar su denuncia sobre delitos como Elaboración clandestina de productos y Comercio Clandestino.',
  id: 7
}, {
  name: 'Fiscalía Especializada en Ciberdelincuencia para Lima Centro',
  description: 'Puede realizar su denuncia sobre delitos como Acceso Ilícito, Atentada la integridad de datos informáticos, Atentada la integridad de sistemas informáticos, Fraude informático y otros.',
  id: 8
}]);

/***/ }),

/***/ 1836:
/*!***************************************************************************************!*\
  !*** ./src/app/modules/complaint/components/scene-details/scene-details.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SceneDetailsComponent": () => (/* binding */ SceneDetailsComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var primeng_radiobutton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/radiobutton */ 9902);
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/inputtextarea */ 1102);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/dropdown */ 8992);
/* harmony import */ var primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/dynamicdialog */ 2648);
/* harmony import */ var _ng_mpfn_cmp_lib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-mpfn/cmp-lib */ 8332);
/* harmony import */ var _specialized_modal_specialized_modal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../specialized-modal/specialized-modal.component */ 7106);
/* harmony import */ var _helpers_prosecutors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers/prosecutors */ 3186);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);


//primeng




//mpfn

//utils

//components

//helpers









function SceneDetailsComponent_small_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.errorMsg("report"), " ");
  }
}
function SceneDetailsComponent_small_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r1.errorMsg("specialty"), " ");
  }
}
function SceneDetailsComponent_small_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r2.errorMsg("crime"), " ");
  }
}
function SceneDetailsComponent_small_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Primero debe seleccionar una especialidad ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
const _c0 = function (a0) {
  return {
    "ng-invalid ng-dirty": a0
  };
};
const _c1 = function () {
  return {
    nombre: "Robo",
    id: 8
  };
};
const _c2 = function () {
  return {
    nombre: "Homicidio",
    id: 3
  };
};
const _c3 = function (a0, a1) {
  return [a0, a1];
};
class SceneDetailsComponent {
  constructor(dialogService) {
    this.dialogService = dialogService;
    this.prosecutors = _helpers_prosecutors__WEBPACK_IMPORTED_MODULE_1__["default"];
    this.questionnaire = 'manual';
    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
      report: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.maxLength(300)]),
      specialty: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
      crime: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl({
        value: '',
        disabled: true
      }, [])
    });
  }
  get counterReportChar() {
    return this.form.get('report').value.length;
  }
  errorMsg(ctrlName) {
    return (0,_ng_mpfn_cmp_lib__WEBPACK_IMPORTED_MODULE_4__.ctrlErrorMsg)(this.form.get(ctrlName));
  }
  showSpecialties() {
    this.refModal = this.dialogService.open(_specialized_modal_specialized_modal_component__WEBPACK_IMPORTED_MODULE_0__.SpecializedModalComponent, {
      header: 'Información sobre las fiscalías especializadas',
      contentStyle: {
        'max-width': '1000px'
      },
      data: this.prosecutors
    });
    this.refModal.onClose.subscribe(prosecutorID => {
      if (prosecutorID) {
        this.form.controls['specialty'].setValue(prosecutorID);
        this.form.get('crime').enable();
      }
    });
  }
  ngOnDestroy() {
    if (this.refModal) this.refModal.close();
  }
}
SceneDetailsComponent.ɵfac = function SceneDetailsComponent_Factory(t) {
  return new (t || SceneDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_5__.DialogService));
};
SceneDetailsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: SceneDetailsComponent,
  selectors: [["complaint-scene-details"]],
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_5__.DialogService]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
  decls: 21,
  vars: 25,
  consts: [[1, "mb-4"], ["name", "questionnaire", "value", "manual", "inputId", "quest1", 3, "ngModel", "ngModelChange"], ["for", "quest1", 1, "ml-2"], ["name", "questionnaire", "value", "smart", "inputId", "quest2", 1, "ml-4", 3, "ngModel", "ngModelChange"], ["for", "quest2", 1, "ml-2"], [3, "formGroup"], [1, "col-12"], ["rows", "5", "pInputTextarea", "", "formControlName", "report", 1, "w-full", 3, "autoResize", "ngClass"], ["error", "", "class", "p-error block", 4, "ngIf"], [1, "block", "text-right", "mt-1"], ["label", "Seleccione la especialidad", 1, "col-12"], ["optionLabel", "name", "optionValue", "id", "placeholder", "Seleccionar", "formControlName", "specialty", "emptyMessage", "Datos no encontrados", "dropdownIcon", "pi pi-chevron-right", "scrollHeight", "0", 3, "options", "ngClass", "onClick"], ["label", "Seleccione el delito (opcional)", 1, "col-12"], ["optionLabel", "nombre", "optionValue", "id", "placeholder", "Seleccionar", "formControlName", "crime", "emptyMessage", "Datos no encontrados", 3, "options", "ngClass"], ["class", "block mt-1", 4, "ngIf"], ["error", "", 1, "p-error", "block"], [1, "block", "mt-1"]],
  template: function SceneDetailsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Puedes contarnos lo que sucedi\u00F3 de forma manual o utilizando el cuestionario inteligente.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "p-radioButton", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function SceneDetailsComponent_Template_p_radioButton_ngModelChange_2_listener($event) {
        return ctx.questionnaire = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "label", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Manual");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p-radioButton", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function SceneDetailsComponent_Template_p_radioButton_ngModelChange_5_listener($event) {
        return ctx.questionnaire = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "label", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Cuestionario inteligente");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "form", 5)(9, "fn-input-wrapper", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "textarea", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, SceneDetailsComponent_small_11_Template, 2, 1, "small", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "small", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "fn-input-wrapper", 10)(15, "p-dropdown", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onClick", function SceneDetailsComponent_Template_p_dropdown_onClick_15_listener() {
        return ctx.showSpecialties();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, SceneDetailsComponent_small_16_Template, 2, 1, "small", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "fn-input-wrapper", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "p-dropdown", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, SceneDetailsComponent_small_19_Template, 2, 1, "small", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, SceneDetailsComponent_small_20_Template, 2, 0, "small", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.questionnaire);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.questionnaire);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.form);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("autoResize", true)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](14, _c0, ctx.errorMsg("report")));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.errorMsg("report"));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.counterReportChar, "/300 m\u00E1ximo de caracteres ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", ctx.prosecutors)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](16, _c0, ctx.errorMsg("specialty")));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.errorMsg("specialty"));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](20, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](18, _c1), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](19, _c2)))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](23, _c0, ctx.errorMsg("crime")));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.errorMsg("crime"));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.form.get("specialty").value);
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, primeng_radiobutton__WEBPACK_IMPORTED_MODULE_7__.RadioButtonModule, primeng_radiobutton__WEBPACK_IMPORTED_MODULE_7__.RadioButton, primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_8__.InputTextareaModule, primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_8__.InputTextarea, primeng_dropdown__WEBPACK_IMPORTED_MODULE_9__.DropdownModule, primeng_dropdown__WEBPACK_IMPORTED_MODULE_9__.Dropdown, primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_5__.DynamicDialogModule, _ng_mpfn_cmp_lib__WEBPACK_IMPORTED_MODULE_4__.CmpLibModule, _ng_mpfn_cmp_lib__WEBPACK_IMPORTED_MODULE_4__.InputWrapperComponent],
  encapsulation: 2
});

/***/ }),

/***/ 3755:
/*!***********************************************************************************!*\
  !*** ./src/app/modules/complaint/components/scene-place/scene-place.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScenePlaceComponent": () => (/* binding */ ScenePlaceComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/dropdown */ 8992);
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/calendar */ 2547);
/* harmony import */ var _ng_mpfn_cmp_lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-mpfn/cmp-lib */ 8332);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);


//primeng


//mpfn

//utils







function ScenePlaceComponent_small_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.errorMsg("department"), " ");
  }
}
function ScenePlaceComponent_small_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.errorMsg("province"), " ");
  }
}
function ScenePlaceComponent_small_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.errorMsg("district"), " ");
  }
}
function ScenePlaceComponent_small_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.errorMsg("sceneDate"), " ");
  }
}
function ScenePlaceComponent_small_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r4.errorMsg("sceneHour"), " ");
  }
}
const _c0 = function () {
  return {
    nombre: "Lima",
    id: 8
  };
};
const _c1 = function () {
  return {
    nombre: "Ica",
    id: 3
  };
};
const _c2 = function (a0, a1) {
  return [a0, a1];
};
const _c3 = function (a0) {
  return {
    "ng-invalid ng-dirty": a0
  };
};
const _c4 = function () {
  return {
    nombre: "Huaral",
    id: 8
  };
};
const _c5 = function () {
  return {
    nombre: "Yauyos",
    id: 3
  };
};
const _c6 = function () {
  return {
    nombre: "SJL",
    id: 8
  };
};
const _c7 = function () {
  return {
    nombre: "Surco",
    id: 3
  };
};
class ScenePlaceComponent {
  constructor() {
    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroup({
      department: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]),
      province: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]),
      district: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]),
      address: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl('', []),
      sceneDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]),
      sceneHour: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl('', [])
    });
  }
  errorMsg(ctrlName) {
    return (0,_ng_mpfn_cmp_lib__WEBPACK_IMPORTED_MODULE_2__.ctrlErrorMsg)(this.form.get(ctrlName));
  }
}
ScenePlaceComponent.ɵfac = function ScenePlaceComponent_Factory(t) {
  return new (t || ScenePlaceComponent)();
};
ScenePlaceComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: ScenePlaceComponent,
  selectors: [["complaint-scene-place"]],
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
  decls: 21,
  vars: 41,
  consts: [[1, "grid", 3, "formGroup"], ["label", "Departamento", 1, "col-12", "md:col-6"], ["optionLabel", "nombre", "optionValue", "id", "placeholder", "Seleccionar", "formControlName", "department", "emptyMessage", "Datos no encontrados", 3, "options", "ngClass"], ["error", "", "class", "p-error block", 4, "ngIf"], ["label", "Provincia", 1, "col-12", "md:col-6"], ["optionLabel", "nombre", "optionValue", "id", "placeholder", "Seleccionar", "formControlName", "province", "emptyMessage", "Datos no encontrados", 3, "options", "ngClass"], ["label", "Distrito", 1, "col-12", "md:col-6"], ["optionLabel", "nombre", "optionValue", "id", "placeholder", "Seleccionar", "formControlName", "district", "emptyMessage", "Datos no encontrados", 3, "options", "ngClass"], ["label", "Celular", "placeholder", "Ej.: Av. Pedro Silva 123", "formControlName", "address", 1, "col-12", "md:col-6"], [1, "col-12"], ["src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27810.179181516203!2d-77.03930251041497!3d-12.04463481886612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c8b756b8e923%3A0x3d81595225f0a15a!2sMinisterio%20P%C3%BAblico%20-%20Fiscal%C3%ADa%20de%20la%20Naci%C3%B3n!5e0!3m2!1ses!2spe!4v1682480306263!5m2!1ses!2spe", "allowfullscreen", "", "loading", "lazy", "referrerpolicy", "no-referrer-when-downgrade", 1, "w-full", "h-18rem", 2, "border", "0"], ["label", "Fecha del hecho", 1, "col-12", "md:col-6"], ["dateFormat", "dd/mm/yy", "formControlName", "sceneDate", "placeholder", "dd/mm/aaaa", 3, "ngClass"], ["label", "Hora aproximada del hecho (opcional)", 1, "col-12", "md:col-6"], ["formControlName", "sceneHour", "placeholder", "00:00", 3, "timeOnly", "hourFormat", "ngClass"], ["error", "", 1, "p-error", "block"]],
  template: function ScenePlaceComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Escribe una direcci\u00F3n o utiliza el mapa para seleccionar una direcci\u00F3n exacta.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 0)(3, "fn-input-wrapper", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "p-dropdown", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ScenePlaceComponent_small_5_Template, 2, 1, "small", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "fn-input-wrapper", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "p-dropdown", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ScenePlaceComponent_small_8_Template, 2, 1, "small", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "fn-input-wrapper", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "p-dropdown", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ScenePlaceComponent_small_11_Template, 2, 1, "small", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "fn-input", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "iframe", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "fn-input-wrapper", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "p-calendar", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ScenePlaceComponent_small_17_Template, 2, 1, "small", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "fn-input-wrapper", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "p-calendar", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, ScenePlaceComponent_small_20_Template, 2, 1, "small", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](18, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](16, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](17, _c1)))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](21, _c3, ctx.errorMsg("department")));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errorMsg("department"));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](25, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](23, _c4), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](24, _c5)))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](28, _c3, ctx.errorMsg("province")));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errorMsg("province"));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](32, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](30, _c6), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](31, _c7)))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](35, _c3, ctx.errorMsg("district")));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errorMsg("district"));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](37, _c3, ctx.errorMsg("sceneDate")));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errorMsg("sceneDate"));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("timeOnly", true)("hourFormat", 12)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](39, _c3, ctx.errorMsg("sceneHour")));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errorMsg("sceneHour"));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName, primeng_dropdown__WEBPACK_IMPORTED_MODULE_4__.DropdownModule, primeng_dropdown__WEBPACK_IMPORTED_MODULE_4__.Dropdown, primeng_calendar__WEBPACK_IMPORTED_MODULE_5__.CalendarModule, primeng_calendar__WEBPACK_IMPORTED_MODULE_5__.Calendar, _ng_mpfn_cmp_lib__WEBPACK_IMPORTED_MODULE_2__.CmpLibModule, _ng_mpfn_cmp_lib__WEBPACK_IMPORTED_MODULE_2__.InputFnComponent, _ng_mpfn_cmp_lib__WEBPACK_IMPORTED_MODULE_2__.InputWrapperComponent],
  encapsulation: 2
});

/***/ }),

/***/ 7106:
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/complaint/components/specialized-modal/specialized-modal.component.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpecializedModalComponent": () => (/* binding */ SpecializedModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/ripple */ 4538);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/dynamicdialog */ 2648);






function SpecializedModalComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SpecializedModalComponent_div_1_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const item_r1 = restoredCtx.$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.selectProsecutor(item_r1.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3)(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.description);
  }
}
class SpecializedModalComponent {
  constructor(ref, config) {
    this.ref = ref;
    this.config = config;
  }
  selectProsecutor(id) {
    this.ref.close(id);
  }
}
SpecializedModalComponent.ɵfac = function SpecializedModalComponent_Factory(t) {
  return new (t || SpecializedModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_1__.DynamicDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_1__.DynamicDialogConfig));
};
SpecializedModalComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: SpecializedModalComponent,
  selectors: [["complaint-specialized-modal"]],
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
  decls: 2,
  vars: 1,
  consts: [[1, "flex", "flex-wrap", "justify-content-center", "pb-3"], ["pRipple", "", "class", "w-26rem h-10rem cursor-pointer select-none flex flex-column m-3", 3, "click", 4, "ngFor", "ngForOf"], ["pRipple", "", 1, "w-26rem", "h-10rem", "cursor-pointer", "select-none", "flex", "flex-column", "m-3", 3, "click"], [1, "bg-secondary", "h-3rem", "border-round-top-lg", "font-semibold", "p-3", "flex", "justify-content-between", "align-items-center", "line-height-1"], [1, "pi", "pi-info-circle", "ml-3"], [1, "surface-card", "p-3", "border-round-bottom-lg", "text-primary", "text-sm", "flex-grow-1"]],
  template: function SpecializedModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SpecializedModalComponent_div_1_Template, 7, 2, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.config.data);
    }
  },
  dependencies: [primeng_ripple__WEBPACK_IMPORTED_MODULE_2__.RippleModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_2__.Ripple, _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf],
  encapsulation: 2
});

/***/ }),

/***/ 6290:
/*!**************************************************************!*\
  !*** ./src/app/shared/components/header/header.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class HeaderComponent {}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
  return new (t || HeaderComponent)();
};
HeaderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: HeaderComponent,
  selectors: [["app-header"]],
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
  decls: 3,
  vars: 0,
  consts: [[1, "flex", "justify-content-between", "align-items-center", "px-3", "md:px-6"], ["src", "assets/images/logo-mpe-white.png", "alt", "Logo de Mesa de Partes Electr\u00F3nica", 1, "logo", "logo_mpe"], ["src", "assets/images/logo-mpfn.svg", "alt", "Logo de Ministerio P\u00FAblico Fiscal\u00EDa de La Naci\u00F3n", 1, "logo", "logo_mpfn"]],
  template: function HeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1)(2, "img", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  },
  styles: ["header[_ngcontent-%COMP%] {\n  height: 80px;\n  background-color: var(--institutional-1);\n}\nheader[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  height: 3.5rem;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSx3Q0FBQTtBQUNGO0FBQ0U7RUFDRSxjQUFBO0FBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJoZWFkZXIge1xuICBoZWlnaHQ6IDgwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWluc3RpdHV0aW9uYWwtMSk7XG5cbiAgLmxvZ28ge1xuICAgIGhlaWdodDogMy41cmVtO1xuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 6619:
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/personal-data/personal-data.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PersonalDataComponent": () => (/* binding */ PersonalDataComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var primeng_messages__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/messages */ 8547);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/dropdown */ 8992);
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/checkbox */ 749);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/button */ 6328);
/* harmony import */ var _ng_mpfn_cmp_lib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-mpfn/cmp-lib */ 8332);
/* harmony import */ var _ng_mpfn_icojs_regular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ng-mpfn/icojs-regular */ 4957);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);


//primeng




//mpfn

//utils











function PersonalDataComponent_small_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.errorMsg("profile"), " ");
  }
}
const _c0 = function () {
  return {
    nombre: "Ciudadano",
    id: 8
  };
};
const _c1 = function () {
  return {
    nombre: "Ciudadano 2",
    id: 3
  };
};
const _c2 = function (a0, a1) {
  return [a0, a1];
};
const _c3 = function (a0) {
  return {
    "ng-invalid ng-dirty": a0
  };
};
class PersonalDataComponent {
  constructor(router) {
    this.router = router;
    this.verificationMessage = [{
      severity: 'success',
      detail: 'Verificación realizada: Es usted Carlos Omar Tineo Guevara.'
    }];
    this.profileMessage = [{
      severity: 'warn',
      detail: 'Si es persona natural y ha sido víctima de un delito, seleccione Ciudadano.'
    }];
    this.iEnvelope = _ng_mpfn_icojs_regular__WEBPACK_IMPORTED_MODULE_0__.iEnvelope;
    this.iMobileScreen = _ng_mpfn_icojs_regular__WEBPACK_IMPORTED_MODULE_0__.iMobileScreen;
    this.confirmData = false;
    this.personDataForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroup({
      profile: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]),
      cellPhone: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(9), _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.maxLength(9)]),
      email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.email]),
      confirmEmail: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.email])
    });
  }
  get formsValidation() {
    return this.personDataForm.valid && this.confirmData;
  }
  errorMsg(ctrlName) {
    return (0,_ng_mpfn_cmp_lib__WEBPACK_IMPORTED_MODULE_3__.ctrlErrorMsg)(this.personDataForm.get(ctrlName));
  }
  nextStep() {
    this.router.navigate(['realizar-denuncia/datos-denuncia']);
  }
}
PersonalDataComponent.ɵfac = function PersonalDataComponent_Factory(t) {
  return new (t || PersonalDataComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
};
PersonalDataComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: PersonalDataComponent,
  selectors: [["app-personal-data"]],
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
  decls: 18,
  vars: 27,
  consts: [[1, "text-xl", "font-semibold", "mt-6"], ["styleClass", "my-5", 3, "value", "enableService", "closable", "valueChange"], [1, "mx-auto", "max-w-30rem", 3, "formGroup"], ["label", "Perfil"], ["optionLabel", "nombre", "optionValue", "id", "placeholder", "Seleccione perfil", "formControlName", "profile", "emptyMessage", "Datos no encontrados", 3, "options", "ngClass"], ["error", "", "class", "p-error block", 4, "ngIf"], ["styleClass", "mb-3", 3, "value", "enableService", "closable", "valueChange"], ["label", "Celular", "placeholder", "000 000 000", "formControlName", "cellPhone", 3, "ico", "counter", "checking"], ["label", "Correo electr\u00F3nico", "placeholder", "ejemplo@gmail.com", "formControlName", "email", 3, "ico", "checking"], ["label", "Confirmar correo electr\u00F3nico", "placeholder", "ejemplo@gmail.com", "formControlName", "confirmEmail", 3, "ico", "checking"], [1, "mt-5", "mx-auto", "max-w-30rem"], ["label", "Se\u00F1alo mi n\u00FAmero de celular y correo electr\u00F3nico a efectos de ser notificado.", 3, "ngModel", "binary", "ngModelChange"], [1, "flex", "justify-content-between", "my-8"], ["styleClass", "p-button-lg surface-200 font-semibold text-primary", "label", "Cancelar denuncia"], ["styleClass", "p-button-lg bg-secondary font-semibold", "icon", "pi pi-arrow-right", "iconPos", "right", "label", "Continuar", 3, "disabled", "onClick"], ["error", "", 1, "p-error", "block"]],
  template: function PersonalDataComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Datos de verificaci\u00F3n");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Por favor ingrese los siguientes datos para verificar su identidad como denunciante.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p-messages", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("valueChange", function PersonalDataComponent_Template_p_messages_valueChange_4_listener($event) {
        return ctx.verificationMessage = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "form", 2)(6, "fn-input-wrapper", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "p-dropdown", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, PersonalDataComponent_small_8_Template, 2, 1, "small", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "p-messages", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("valueChange", function PersonalDataComponent_Template_p_messages_valueChange_9_listener($event) {
        return ctx.profileMessage = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "fn-input", 7)(11, "fn-input", 8)(12, "fn-input", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 10)(14, "p-checkbox", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function PersonalDataComponent_Template_p_checkbox_ngModelChange_14_listener($event) {
        return ctx.confirmData = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "p-button", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "p-button", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onClick", function PersonalDataComponent_Template_p_button_onClick_17_listener() {
        return ctx.nextStep();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.verificationMessage)("enableService", false)("closable", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.personDataForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](22, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](20, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](21, _c1)))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](25, _c3, ctx.errorMsg("profile")));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.errorMsg("profile"));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.profileMessage)("enableService", false)("closable", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ico", ctx.iMobileScreen)("counter", 9)("checking", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ico", ctx.iEnvelope)("checking", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ico", ctx.iEnvelope)("checking", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.confirmData)("binary", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.formsValidation);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, primeng_messages__WEBPACK_IMPORTED_MODULE_6__.MessagesModule, primeng_messages__WEBPACK_IMPORTED_MODULE_6__.Messages, primeng_dropdown__WEBPACK_IMPORTED_MODULE_7__.DropdownModule, primeng_dropdown__WEBPACK_IMPORTED_MODULE_7__.Dropdown, primeng_checkbox__WEBPACK_IMPORTED_MODULE_8__.CheckboxModule, primeng_checkbox__WEBPACK_IMPORTED_MODULE_8__.Checkbox, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, primeng_button__WEBPACK_IMPORTED_MODULE_9__.ButtonModule, primeng_button__WEBPACK_IMPORTED_MODULE_9__.Button, _ng_mpfn_cmp_lib__WEBPACK_IMPORTED_MODULE_3__.CmpLibModule, _ng_mpfn_cmp_lib__WEBPACK_IMPORTED_MODULE_3__.InputFnComponent, _ng_mpfn_cmp_lib__WEBPACK_IMPORTED_MODULE_3__.InputWrapperComponent],
  encapsulation: 2
});

/***/ }),

/***/ 3766:
/*!******************************************************************************!*\
  !*** ./src/app/shared/components/verification/helpers/dynamicValidations.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([{
  label: 'Dígito después del número de DNI',
  checking: true,
  placeholder: '0',
  controlName: 'dniDigit',
  counter: 1,
  assets: [{
    img: 'assets/images/img_dni_azul_ultimo_digito.png',
    caption: 'Ubicación del dígito después del número de DNI Azul'
  }, {
    img: 'assets/images/img_dni_electronico_ultimo_digito.png',
    caption: 'Ubicación del dígito después del número de DNI Electrónico'
  }]
}, {
  label: 'Numero de ubigeo en DNI',
  checking: true,
  placeholder: 'Ej.: 190512',
  controlName: 'ubigeoNumber',
  counter: 6,
  assets: [{
    img: 'assets/images/img_dni_azul_ubigeo.png',
    caption: 'Ubicación del número de ubigeo en DNI Azul'
  }, {
    img: 'assets/images/img_dni_electronico_ubigeo.png',
    caption: 'Ubicación del número de ubigeo en DNI Electrónico'
  }]
}, {
  label: 'Fecha de emisión del DNI',
  checking: true,
  placeholder: 'dd/mm/aaaa',
  controlName: 'dniEmitDate',
  assets: [{
    img: 'assets/images/img_dni_azul_fecha_emision.png',
    caption: 'Ubicación de la fecha de emisión en DNI Azul'
  }, {
    img: 'assets/images/img_dni_electronico_fecha_emision.png',
    caption: 'Ubicación de la fecha de emisión en DNI Electrónico'
  }]
}, {
  label: 'Nombre de madre',
  checking: true,
  placeholder: 'Nombre completo',
  controlName: 'motherName'
}, {
  label: 'Nombre de padre',
  checking: true,
  placeholder: 'Nombre completo',
  controlName: 'fatherName'
}]);

/***/ }),

/***/ 7544:
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/verification/verification.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerificationComponent": () => (/* binding */ VerificationComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var primeng_messages__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/messages */ 8547);
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/checkbox */ 749);
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/calendar */ 2547);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/button */ 6328);
/* harmony import */ var primeng_progressbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/progressbar */ 8395);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/dropdown */ 8992);
/* harmony import */ var _ng_mpfn_cmp_lib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-mpfn/cmp-lib */ 8332);
/* harmony import */ var _helpers_dynamicValidations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers/dynamicValidations */ 3766);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);


//primeng






//mpfn

//utils

//helpers












function VerificationComponent_small_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.errorMsg("bornDate"), " ");
  }
}
function VerificationComponent_div_14_fn_input_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "fn-input", 21);
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("label", ctx_r6.validations[ctx_r6.currentValidationIndex].label)("placeholder", ctx_r6.validations[ctx_r6.currentValidationIndex].placeholder)("checking", ctx_r6.validations[ctx_r6.currentValidationIndex].checking)("formControlName", ctx_r6.validations[ctx_r6.currentValidationIndex].controlName);
  }
}
function VerificationComponent_div_14_ng_template_2_small_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r9.errorMsg("dniEmitDate"), " ");
  }
}
const _c0 = function (a0) {
  return {
    "ng-invalid ng-dirty": a0
  };
};
function VerificationComponent_div_14_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "fn-input-wrapper", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "p-calendar", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, VerificationComponent_div_14_ng_template_2_small_2_Template, 2, 1, "small", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("label", ctx_r8.validations[ctx_r8.currentValidationIndex].label);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c0, ctx_r8.errorMsg("dniEmitDate")));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r8.errorMsg("dniEmitDate"));
  }
}
function VerificationComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, VerificationComponent_div_14_fn_input_1_Template, 1, 4, "fn-input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, VerificationComponent_div_14_ng_template_2_Template, 3, 5, "ng-template", null, 20, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.validations[ctx_r1.currentValidationIndex].controlName !== "dniEmitDate")("ngIfElse", _r7);
  }
}
const _c1 = function () {
  return {
    "height": "6px"
  };
};
function VerificationComponent_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "p-progressBar", 24);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](2, _c1));
  }
}
function VerificationComponent_form_19_small_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r10.errorMsg("college"), " ");
  }
}
const _c2 = function () {
  return {
    nombre: "Lima",
    id: 8
  };
};
const _c3 = function (a0) {
  return [a0];
};
function VerificationComponent_form_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 4)(1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Datos del abogado");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "fn-input-wrapper", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "p-dropdown", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, VerificationComponent_form_19_small_5_Template, 2, 1, "small", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "fn-input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r4.lawyerForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](5, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](4, _c2)))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](7, _c0, ctx_r4.errorMsg("college")));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.errorMsg("college"));
  }
}
function VerificationComponent_div_20_figure_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "figure", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "figcaption", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const asset_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", asset_r12.img, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", asset_r12.caption, " ");
  }
}
function VerificationComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 29)(1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, VerificationComponent_div_20_figure_2_Template, 4, 2, "figure", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r5.validations[ctx_r5.currentValidationIndex].assets);
  }
}
class VerificationComponent {
  constructor(router) {
    this.router = router;
    this.messages = [{
      severity: 'warn',
      detail: 'Si usted es ciudadano extranjero, por favor realizar los trámites de forma presencial a través de la Mesa Única de Partes.'
    }];
    this.lawyerPresent = false;
    this.verificationForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroup({
      dni: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.maxLength(8)]),
      bornDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required])
    });
    this.dynamicValidationForm = this.createFreshForm();
    this.lawyerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroup({
      college: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]),
      collegeCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required])
    });
    this.validations = _helpers_dynamicValidations__WEBPACK_IMPORTED_MODULE_0__["default"];
    this.currentValidationIndex = this.randomNumberBetween();
    this.renderingValidation = true;
  }
  get showExampleImg() {
    return ['dniDigit', 'ubigeoNumber', 'dniEmitDate'].includes(this.validations[this.currentValidationIndex].controlName);
  }
  get formsValidation() {
    return this.verificationForm.valid && this.dynamicValidationForm.get(`${this.validations[this.currentValidationIndex].controlName}`).valid && (this.lawyerPresent ? this.lawyerForm.valid : true);
  }
  errorMsg(ctrlName) {
    if (ctrlName === 'college') return (0,_ng_mpfn_cmp_lib__WEBPACK_IMPORTED_MODULE_3__.ctrlErrorMsg)(this.lawyerForm.get(ctrlName));
    if (ctrlName === 'dniEmitDate') return (0,_ng_mpfn_cmp_lib__WEBPACK_IMPORTED_MODULE_3__.ctrlErrorMsg)(this.dynamicValidationForm.get(ctrlName));
    return (0,_ng_mpfn_cmp_lib__WEBPACK_IMPORTED_MODULE_3__.ctrlErrorMsg)(this.verificationForm.get(ctrlName));
  }
  createFreshForm() {
    return new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroup({
      dniDigit: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.maxLength(1)]),
      ubigeoNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.maxLength(6)]),
      dniEmitDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]),
      motherName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]),
      fatherName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required])
    });
  }
  randomNumberBetween(min = 0, max = 4) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  changeValidation() {
    this.renderingValidation = false;
    this.currentValidationIndex = this.randomNumberBetween();
    this.dynamicValidationForm = this.createFreshForm();
    setTimeout(() => {
      this.renderingValidation = true;
    }, 1000);
  }
  classValidationContainer() {
    return this.showExampleImg ? 'md:col-4' : 'max-w-30rem mx-auto';
  }
  nextStep() {
    this.router.navigate(['realizar-denuncia/datos-personales']);
  }
}
VerificationComponent.ɵfac = function VerificationComponent_Factory(t) {
  return new (t || VerificationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
};
VerificationComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: VerificationComponent,
  selectors: [["app-verification"]],
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
  decls: 24,
  vars: 21,
  consts: [[1, "text-xl", "font-semibold", "mt-6"], [3, "value", "enableService", "closable", "valueChange"], ["label", "Presentar denuncia como abogado", "inputId", "binary", 1, "my-5", 3, "ngModel", "binary", "ngModelChange"], [1, "grid"], [3, "formGroup"], ["label", "N\u00FAmero de DNI", "placeholder", "DNI", "formControlName", "dni", 3, "counter", "checking"], ["label", "Fecha de nacimiento"], ["dateFormat", "dd/mm/yy", "formControlName", "bornDate", "placeholder", "dd/mm/aaaa", 3, "ngClass"], ["error", "", "class", "p-error block", 4, "ngIf"], [4, "ngIf", "ngIfElse"], ["validationLoader", ""], [1, "flex", "flex-row-reverse"], ["label", "Cambiar validaci\u00F3n", "icon", "pi pi-sync", "styleClass", "p-button-info p-button-text", 3, "click"], [3, "formGroup", 4, "ngIf"], ["class", "col-12 md:col-8", 4, "ngIf"], [1, "flex", "justify-content-between", "my-8"], ["styleClass", "p-button-lg surface-200 font-semibold text-primary", "label", "Cancelar denuncia"], ["styleClass", "p-button-lg bg-secondary font-semibold", "icon", "pi pi-arrow-right", "iconPos", "right", "label", "Continuar", 3, "disabled", "onClick"], ["error", "", 1, "p-error", "block"], [3, "label", "placeholder", "checking", "formControlName", 4, "ngIf", "ngIfElse"], ["dniEmitDate", ""], [3, "label", "placeholder", "checking", "formControlName"], [3, "label"], ["dateFormat", "dd/mm/yy", "formControlName", "dniEmitDate", "placeholder", "dd/mm/aaaa", 3, "ngClass"], ["mode", "indeterminate", "styleClass", "my-6"], [1, "text-lg", "font-semibold", "my-3"], ["label", "Colegio de abogados"], ["optionLabel", "nombre", "optionValue", "id", "placeholder", "Colegio de abogados", "formControlName", "college", "emptyMessage", "Datos no encontrados", 3, "options", "ngClass"], ["label", "C\u00F3digo de colegio de abogados", "placeholder", "Ej.: 66545", "formControlName", "collegeCode"], [1, "col-12", "md:col-8"], [1, "flex", "flex-column", "xl:flex-row", "xl:flex-wrap", "xl:align-items-center", "xl:justify-content-center"], ["class", "flex flex-column align-items-center", 4, "ngFor", "ngForOf"], [1, "flex", "flex-column", "align-items-center"], ["alt", "", 1, "w-15rem", 3, "src"], [1, "text-sm", "text-center", "line-height-2", "mt-2", "w-15rem"]],
  template: function VerificationComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Datos de verificaci\u00F3n");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Por favor ingrese los siguientes datos para verificar su identidad como denunciante.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p-messages", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("valueChange", function VerificationComponent_Template_p_messages_valueChange_4_listener($event) {
        return ctx.messages = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p-checkbox", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function VerificationComponent_Template_p_checkbox_ngModelChange_5_listener($event) {
        return ctx.lawyerPresent = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 3)(7, "div")(8, "form", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "fn-input", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "fn-input-wrapper", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "p-calendar", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, VerificationComponent_small_12_Template, 2, 1, "small", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "form", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, VerificationComponent_div_14_Template, 4, 2, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, VerificationComponent_ng_template_15_Template, 1, 3, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 11)(18, "p-button", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function VerificationComponent_Template_p_button_click_18_listener() {
        return ctx.changeValidation();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, VerificationComponent_form_19_Template, 7, 9, "form", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, VerificationComponent_div_20_Template, 3, 1, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "p-button", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "p-button", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onClick", function VerificationComponent_Template_p_button_onClick_23_listener() {
        return ctx.nextStep();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.messages)("enableService", false)("closable", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.lawyerPresent)("binary", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("col-12 ", ctx.classValidationContainer(), "");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.verificationForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("counter", 8)("checking", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](19, _c0, ctx.errorMsg("bornDate")));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.errorMsg("bornDate"));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.dynamicValidationForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.renderingValidation)("ngIfElse", _r2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.lawyerPresent);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showExampleImg);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.formsValidation);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, primeng_messages__WEBPACK_IMPORTED_MODULE_6__.MessagesModule, primeng_messages__WEBPACK_IMPORTED_MODULE_6__.Messages, primeng_checkbox__WEBPACK_IMPORTED_MODULE_7__.CheckboxModule, primeng_checkbox__WEBPACK_IMPORTED_MODULE_7__.Checkbox, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, primeng_calendar__WEBPACK_IMPORTED_MODULE_8__.CalendarModule, primeng_calendar__WEBPACK_IMPORTED_MODULE_8__.Calendar, primeng_button__WEBPACK_IMPORTED_MODULE_9__.Button, primeng_button__WEBPACK_IMPORTED_MODULE_9__.ButtonModule, primeng_progressbar__WEBPACK_IMPORTED_MODULE_10__.ProgressBarModule, primeng_progressbar__WEBPACK_IMPORTED_MODULE_10__.ProgressBar, primeng_dropdown__WEBPACK_IMPORTED_MODULE_11__.DropdownModule, primeng_dropdown__WEBPACK_IMPORTED_MODULE_11__.Dropdown, _ng_mpfn_cmp_lib__WEBPACK_IMPORTED_MODULE_3__.CmpLibModule, _ng_mpfn_cmp_lib__WEBPACK_IMPORTED_MODULE_3__.InputFnComponent, _ng_mpfn_cmp_lib__WEBPACK_IMPORTED_MODULE_3__.InputWrapperComponent],
  encapsulation: 2
});

/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HttpLoaderFactory": () => (/* binding */ HttpLoaderFactory)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.component */ 5041);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _app_app_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/app-routes */ 3054);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ 4356);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 8699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/http-loader */ 8319);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// import { AppModule } from './app/app.module';









// import { RequestInterceptor } from '@core/interceptors/request.interceptor';


// import { HttpLoaderFactory } from './app/app.module';
function HttpLoaderFactory(httpClient) {
  return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_2__.TranslateHttpLoader(httpClient);
}
(0,_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.bootstrapApplication)(_app_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, {
  providers: [primeng_api__WEBPACK_IMPORTED_MODULE_4__.PrimeNGConfig, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateService, {
    provide: _angular_common__WEBPACK_IMPORTED_MODULE_6__.LocationStrategy,
    useClass: _angular_common__WEBPACK_IMPORTED_MODULE_6__.HashLocationStrategy
  },
  // { provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true },
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.importProvidersFrom)(_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forRoot(_app_app_routes__WEBPACK_IMPORTED_MODULE_1__.routes)), (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.importProvidersFrom)(_angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientModule), (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.importProvidersFrom)(_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__.BrowserAnimationsModule), (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.importProvidersFrom)(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateModule.forRoot({
    loader: {
      provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateLoader,
      useFactory: HttpLoaderFactory,
      deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient]
    }
  }))]
}).catch(err => console.log(err));
// platformBrowserDynamic().bootstrapModule(AppModule)
// .catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.22dd47058a6aa2df.js.map