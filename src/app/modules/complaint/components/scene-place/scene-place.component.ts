import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';

//primeng
import {DropdownModule} from 'primeng/dropdown';
import { CalendarModule } from "primeng/calendar";
//mpfn
import { CmpLibModule } from "@ng-mpfn/cmp-lib";
//utils
import { ctrlErrorMsg } from "@ng-mpfn/cmp-lib";


@Component({
  selector: 'complaint-scene-place',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DropdownModule,
    CalendarModule,
    CmpLibModule
  ],
  templateUrl: './scene-place.component.html',
  styles: [
  ]
})
export class ScenePlaceComponent {

  public form: FormGroup = new FormGroup({
    department: new FormControl('', [Validators.required]),
    province: new FormControl('', [Validators.required]),
    district: new FormControl('', [Validators.required]),
    address: new FormControl('', []),
    sceneDate: new FormControl('', [Validators.required]),
    sceneHour: new FormControl('', [])
  })

  errorMsg(ctrlName) {
    return ctrlErrorMsg(this.form.get(ctrlName))
  }

}
