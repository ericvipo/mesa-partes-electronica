"use strict";
(self["webpackChunkmpe_ng"] = self["webpackChunkmpe_ng"] || []).push([["src_app_modules_main_main_component_ts"],{

/***/ 1724:
/*!****************************************************************************************!*\
  !*** ./src/app/modules/main/components/conditions-modal/conditions-modal.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConditionsModalComponent": () => (/* binding */ ConditionsModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/checkbox */ 749);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/button */ 6328);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/dynamicdialog */ 2648);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);


//primeng









function ConditionsModalComponent_li_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li")(1, "div", 8)(2, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p-checkbox", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ConditionsModalComponent_li_9_Template_p_checkbox_ngModelChange_4_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const condition_r1 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](condition_r1.confirm = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const condition_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](condition_r1.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", condition_r1.confirm)("binary", true);
  }
}
class ConditionsModalComponent {
  constructor(ref, router) {
    this.ref = ref;
    this.router = router;
    this.conditions = [{
      confirm: false,
      description: 'Todo aquel que presente una denuncia falsa será investigado y sancionado con el rigor de la ley.'
    }, {
      confirm: false,
      description: 'Dichas denuncias serán enviadas de manera digital a la bandeja fiscal donde el Fiscal tomará conocimiento de las denuncias que son presentados por los ciudadanos.'
    }, {
      confirm: false,
      description: 'El registro mediante Mesa de Partes Electrónicas estará habilitado las 24 horas, los 7 días de la semana, pero recuerde que la denuncia será atendida en días hábiles en el horario de 8:00 AM a 05:00 PM.'
    }, {
      confirm: false,
      description: 'El documento principal y/o sus anexos deben ser legibles.'
    }, {
      confirm: false,
      description: 'Al finalizar el registro de la denuncia o un documento para un caso existente, recibirá un e-mail con el resumen de la información registrada en la Mesa de Partes Electrónica.'
    }];
  }
  get acceptedConditions() {
    for (const condition of this.conditions) if (!condition.confirm) return true;
    return false;
  }
  registerComplaint() {
    this.router.navigate(['realizar-denuncia']);
  }
}
ConditionsModalComponent.ɵfac = function ConditionsModalComponent_Factory(t) {
  return new (t || ConditionsModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_1__.DynamicDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
};
ConditionsModalComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: ConditionsModalComponent,
  selectors: [["main-conditions"]],
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
  decls: 13,
  vars: 2,
  consts: [[1, "md:px-6"], [1, "font-semibold", "text-900"], ["href", "#"], [1, "pl-3"], [4, "ngFor", "ngForOf"], [1, "flex", "flex-column", "md:flex-row", "justify-content-between", "align-items-center", "py-6"], ["styleClass", "p-button-lg p-button-outlined font-semibold", "label", "Cancelar", 1, "mb-3", "md:mb-0", 3, "onClick"], ["styleClass", "p-button-lg bg-secondary font-semibold", "icon", "pi pi-arrow-right", "iconPos", "right", "label", "Continuar", 3, "disabled", "onClick"], [1, "flex", "flex-column", "align-items-start", "md:flex-row", "md:align-items-center", "justify-content-between"], [1, "md:w-30rem"], ["inputId", "binary", "label", "De acuerdo", 1, "text-900", "font-semibold", 3, "ngModel", "binary", "ngModelChange"]],
  template: function ConditionsModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " La Mesa de Partes Electr\u00F3nica es un sistema de informaci\u00F3n que permitir\u00E1 a los ciudadanos el registro de las denuncias, as\u00ED como el ingreso de documentos relativos a casos ya existentes. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Para continuar, ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "lea y acepte");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " los siguientes puntos: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ConditionsModalComponent_li_9_Template, 5, 3, "li", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5)(11, "p-button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onClick", function ConditionsModalComponent_Template_p_button_onClick_11_listener() {
        return ctx.ref.close();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p-button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onClick", function ConditionsModalComponent_Template_p_button_onClick_12_listener() {
        return ctx.registerComplaint();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.conditions);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.acceptedConditions);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, primeng_checkbox__WEBPACK_IMPORTED_MODULE_4__.CheckboxModule, primeng_checkbox__WEBPACK_IMPORTED_MODULE_4__.Checkbox, primeng_button__WEBPACK_IMPORTED_MODULE_5__.ButtonModule, primeng_button__WEBPACK_IMPORTED_MODULE_5__.Button, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel],
  encapsulation: 2
});

/***/ }),

/***/ 8187:
/*!************************************************!*\
  !*** ./src/app/modules/main/main.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainComponent": () => (/* binding */ MainComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var primeng_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/messages */ 8547);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/button */ 6328);
/* harmony import */ var primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/dynamicdialog */ 2648);
/* harmony import */ var _ng_mpfn_cmp_lib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-mpfn/cmp-lib */ 8332);
/* harmony import */ var _ng_mpfn_icojs_regular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ng-mpfn/icojs-regular */ 4957);
/* harmony import */ var _components_conditions_modal_conditions_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/conditions-modal/conditions-modal.component */ 1724);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);

/**
 * PrimeNG
 */
//modulos




//mpfn


//components






class MainComponent {
  constructor(dialogService) {
    this.dialogService = dialogService;
    this.messages = [{
      severity: 'error',
      detail: 'Si el hecho que pretendes denunciar ocurrió en las últimas horas y existe flagrancia (se tiene un detenido) por favor acércate a presentar tu denuncia inmediatamente a la comisaría más cercana o a la fiscalía de turno.'
    }];
    this.iFilePen = _ng_mpfn_icojs_regular__WEBPACK_IMPORTED_MODULE_0__.iFilePen;
    this.iPrintMagnifyingGlass = _ng_mpfn_icojs_regular__WEBPACK_IMPORTED_MODULE_0__.iPrintMagnifyingGlass;
  }
  //Modal de condiciones
  showConditions() {
    this.refModal = this.dialogService.open(_components_conditions_modal_conditions_modal_component__WEBPACK_IMPORTED_MODULE_1__.ConditionsModalComponent, {
      header: 'Ten en cuenta lo siguiente',
      contentStyle: {
        'max-width': '800px'
      }
    });
  }
  ngOnDestroy() {
    if (this.refModal) this.refModal.close();
  }
}
MainComponent.ɵfac = function MainComponent_Factory(t) {
  return new (t || MainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_3__.DialogService));
};
MainComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: MainComponent,
  selectors: [["app-main"]],
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_3__.DialogService]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
  decls: 37,
  vars: 5,
  consts: [[3, "value", "enableService", "closable", "valueChange"], [1, "fn-container", "min-h-screen"], [1, "text-4xl", "font-semibold", "text-primary", "mt-5"], [1, "text-xl", "mb-5"], [1, "font-semibold"], [1, "grid"], [1, "col-12", "lg:col-6", "xl:col-8"], [1, "grid", "grid-nogutter"], [1, "hidden", "xl:block", "xl:col-5", "bg-no-repeat", "bg-cover", 2, "background-image", "url('https://www.viajesgeotours.com/blog/wp-content/uploads/2022/04/alexander-schimmeck-MraFXV3v7Ts-unsplash-scaled-e1650667507519-990x564.jpg')"], [1, "col-12", "xl:col-7"], [1, "bg-primary", "text-white", "border-round-sm", "p-3", "md:p-6"], ["height", "2.5rem", 1, "mb-3", 3, "ico"], [1, "text-2xl", "font-semibold", "mb-2"], [1, "mb-5"], [1, "flex", "flex-column"], ["styleClass", "p-button-lg bg-secondary font-semibold", "icon", "pi pi-arrow-right", "iconPos", "right", "label", "Presentar denuncia", 3, "onClick"], ["label", "Ver video explicativo", "styleClass", "p-button-text text-white p-button-lg font-semibold ml-auto", "icon", "pi pi-play", 1, "align-self-end", "mt-3"], [1, "col-12", "lg:col-6", "xl:col-4"], [1, "surface-card", "text-primary", "border-round-sm", "h-full", "p-3", "md:p-6"], [1, "mb-5", "text-color"], ["styleClass", "p-button-lg p-button-outlined font-semibold", "icon", "pi pi-arrow-right", "iconPos", "right", "label", "Consultar estado"]],
  template: function MainComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p-messages", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("valueChange", function MainComponent_Template_p_messages_valueChange_0_listener($event) {
        return ctx.messages = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " Bienvenido a la Mesa de Partes Electr\u00F3nica ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, " Aqu\u00ED usted podr\u00E1 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "span", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "presentar documentos y denuncias");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, " de hechos que ocurrieron en los distritos de: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "span", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Barranco, Bre\u00F1a, Jes\u00FAs Mar\u00EDa, La Victoria, Lima (Cercado), Lince, Magdalena del Mar, Miraflores, Pueblo Libre, R\u00EDmac, San Borja, San Isidro, San Luis, San Miguel, Santiago de Surco y Surquillo");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, ", correspondientes al Distrito Fiscal de Lima; y de las jurisdicciones de: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "span", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Ventanilla, Mi Per\u00FA, Santa Rosa, Anc\u00F3n y Puente Piedra");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, " pertenecientes al Distrito Fiscal de Lima Noroeste. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 5)(16, "div", 6)(17, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 9)(20, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "fn-icon", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Presentaci\u00F3n de denuncia");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Reporta cualquier conducta sospechosa de la que hayas sido v\u00EDctima o testigo.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 14)(27, "p-button", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onClick", function MainComponent_Template_p_button_onClick_27_listener() {
        return ctx.showConditions();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](28, "p-button", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 17)(30, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](31, "fn-icon", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "\u00BFYa realizaste una denuncia?");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "Consulta el estado de tus denuncias y adjunta documentos en caso necesario.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](36, "p-button", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx.messages)("enableService", false)("closable", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](21);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ico", ctx.iFilePen);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ico", ctx.iPrintMagnifyingGlass);
    }
  },
  dependencies: [
  //modules
  primeng_messages__WEBPACK_IMPORTED_MODULE_4__.MessagesModule, primeng_messages__WEBPACK_IMPORTED_MODULE_4__.Messages, _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, primeng_button__WEBPACK_IMPORTED_MODULE_6__.ButtonModule, primeng_button__WEBPACK_IMPORTED_MODULE_6__.Button, _ng_mpfn_cmp_lib__WEBPACK_IMPORTED_MODULE_7__.CmpLibModule, _ng_mpfn_cmp_lib__WEBPACK_IMPORTED_MODULE_7__.IconComponent, primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_3__.DynamicDialogModule],
  encapsulation: 2
});

/***/ })

}]);
//# sourceMappingURL=src_app_modules_main_main_component_ts.c27d5bdae7e4c9a2.js.map