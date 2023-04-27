import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from "@angular/router";
//primeng
import { MessagesModule } from "primeng/messages";
import {DropdownModule} from 'primeng/dropdown';
import { CheckboxModule } from "primeng/checkbox";
import { ButtonModule } from "primeng/button";
//mpfn
import { CmpLibModule } from "@ng-mpfn/cmp-lib";
//utils
import { ctrlErrorMsg } from "@ng-mpfn/cmp-lib";
import {
  iMobileScreen,
  iEnvelope
} from "@ng-mpfn/icojs-regular";
//interfaces
import { FnIcon } from "@shared/interfaces/fn-icon";


@Component({
  selector: 'app-personal-data',
  standalone: true,
  imports: [
    CommonModule,
    MessagesModule,
    DropdownModule,
    CheckboxModule,
    ReactiveFormsModule,
    FormsModule,
    ButtonModule,
    CmpLibModule
  ],
  templateUrl: './personal-data.component.html',
  styles: [
  ]
})
export class PersonalDataComponent {

  constructor(private router: Router) {}

  public verificationMessage = [
    {
      severity: 'success',
      detail: 'Verificación realizada: Es usted Carlos Omar Tineo Guevara.'
    }
  ];
  public profileMessage = [
    {
      severity: 'warn',
      detail: 'Si es persona natural y ha sido víctima de un delito, seleccione Ciudadano.'
    }
  ];

  public iEnvelope: FnIcon = iEnvelope as FnIcon;
  public iMobileScreen: FnIcon = iMobileScreen as FnIcon;

  public confirmData: boolean = false

  public personDataForm: FormGroup = new FormGroup({
    profile: new FormControl('', [Validators.required]),
    cellPhone: new FormControl('', [Validators.required, Validators.minLength(9), Validators.maxLength(9)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    confirmEmail: new FormControl('', [Validators.required, Validators.email]),
  })

  get formsValidation(): boolean {
    return this.personDataForm.valid && this.confirmData
  }

  errorMsg(ctrlName) {
    return ctrlErrorMsg(this.personDataForm.get(ctrlName))
  }

  nextStep(): void {
    this.router.navigate(['realizar-denuncia/datos-denuncia'])
  }

}
