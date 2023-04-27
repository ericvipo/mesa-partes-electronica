import { Component, OnDestroy, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
//primeng
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputTextareaModule } from 'primeng/inputtextarea';
import {DropdownModule, Dropdown} from 'primeng/dropdown';
import { DialogService, DynamicDialogRef, DynamicDialogModule } from "primeng/dynamicdialog";

//mpfn
import { CmpLibModule } from "@ng-mpfn/cmp-lib";
//utils
import { ctrlErrorMsg } from "@ng-mpfn/cmp-lib";

//components
import { SpecializedModalComponent } from "../specialized-modal/specialized-modal.component";
//helpers
import prosecutors from "./helpers/prosecutors";

@Component({
  selector: 'complaint-scene-details',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RadioButtonModule,
    InputTextareaModule,
    DropdownModule,
    DynamicDialogModule,
    CmpLibModule
  ],
  templateUrl: './scene-details.component.html',
  providers: [DialogService]
})
export class SceneDetailsComponent implements OnDestroy {

  constructor(public dialogService: DialogService) {}

  public refModal: DynamicDialogRef;

  public prosecutors = prosecutors;

  public questionnaire = 'manual';

  public form: FormGroup = new FormGroup({
    report: new FormControl('', [Validators.required, Validators.maxLength(300)]),
    specialty: new FormControl('', [Validators.required]),
    crime: new FormControl({value:'', disabled: true}, []),
  })

  get counterReportChar(): string {
    return this.form.get('report').value.length
  }

  errorMsg(ctrlName) {
    return ctrlErrorMsg(this.form.get(ctrlName))
  }

  showSpecialties(): void {
    this.refModal = this.dialogService.open(SpecializedModalComponent, {
      header: 'Información sobre las fiscalías especializadas',
      contentStyle: {'max-width':'1000px'},
      data: this.prosecutors
    })

    this.refModal.onClose.subscribe((prosecutorID) => {
      if(prosecutorID) {
        this.form.controls['specialty'].setValue(prosecutorID)
        this.form.get('crime').enable()
      }
    })
  }

  ngOnDestroy() {
    if(this.refModal)
      this.refModal.close()
  }

}
