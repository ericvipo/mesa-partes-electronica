import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from "@angular/router";
//primeng
import { MessagesModule } from "primeng/messages";
import { CheckboxModule } from "primeng/checkbox";
import { CalendarModule } from "primeng/calendar";
import { ButtonModule } from "primeng/button";
import { ProgressBarModule } from 'primeng/progressbar';
import {DropdownModule} from 'primeng/dropdown';
//mpfn
import { CmpLibModule } from "@ng-mpfn/cmp-lib";
//utils
import { ctrlErrorMsg } from "@ng-mpfn/cmp-lib";
//helpers
import dynamicValidations from "./helpers/dynamicValidations";



@Component({
  selector: 'app-verification',
  standalone: true,
  imports: [
    CommonModule,
    MessagesModule,
    CheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    CalendarModule,
    ButtonModule,
    ProgressBarModule,
    DropdownModule,
    CmpLibModule
  ],
  templateUrl: './verification.component.html',
  styles: [
  ]
})
export class VerificationComponent {

  constructor(private router: Router) {}

  public messages = [
    {
      severity: 'warn',
      detail: 'Si usted es ciudadano extranjero, por favor realizar los trámites de forma presencial a través de la Mesa Única de Partes.'
    }
  ];

  public lawyerPresent: boolean = false

  public verificationForm: FormGroup = new FormGroup({
    dni: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(8)]),
    bornDate: new FormControl('', [Validators.required]),
  })
  
  public dynamicValidationForm: FormGroup = this.createFreshForm();
  public lawyerForm: FormGroup = new FormGroup({
    college: new FormControl('', [Validators.required]),
    collegeCode: new FormControl('', [Validators.required])
  })
  

  public validations = dynamicValidations;

  public currentValidationIndex: number = this.randomNumberBetween()
  public renderingValidation: boolean = true

  get showExampleImg(): boolean {
    return [
      'dniDigit',
      'ubigeoNumber',
      'dniEmitDate'
    ].includes(this.validations[this.currentValidationIndex].controlName)
  }

  get formsValidation(): boolean {
    return (
      this.verificationForm.valid &&
      this.dynamicValidationForm.get(`${this.validations[this.currentValidationIndex].controlName}`).valid &&
      (this.lawyerPresent ? this.lawyerForm.valid : true)
      )
  }

  errorMsg(ctrlName) {
    if(ctrlName === 'college')
      return ctrlErrorMsg(this.lawyerForm.get(ctrlName))
    if(ctrlName === 'dniEmitDate')
      return ctrlErrorMsg(this.dynamicValidationForm.get(ctrlName))
    return ctrlErrorMsg(this.verificationForm.get(ctrlName))
  }

  createFreshForm(): FormGroup {
    return new FormGroup({
      dniDigit: new FormControl('', [Validators.required, Validators.maxLength(1)]),
      ubigeoNumber: new FormControl('', [Validators.required, Validators.maxLength(6)]),
      dniEmitDate: new FormControl('', [Validators.required]),
      motherName: new FormControl('', [Validators.required]),
      fatherName: new FormControl('', [Validators.required])
    })
  }

  randomNumberBetween(min:number = 0, max:number = 4): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  changeValidation(): void {
    this.renderingValidation = false
    this.currentValidationIndex = this.randomNumberBetween()
    this.dynamicValidationForm = this.createFreshForm()
    setTimeout(() => {
      this.renderingValidation = true
    }, 1000);
  }

  classValidationContainer(): string {
    return this.showExampleImg ? 'md:col-4' : 'max-w-30rem mx-auto'
  }

  nextStep(): void {
    this.router.navigate(['realizar-denuncia/datos-personales'])
  }

}
