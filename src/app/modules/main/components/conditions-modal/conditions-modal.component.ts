import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from "@angular/router";
//primeng
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from "primeng/button";
//
import {DynamicDialogRef} from 'primeng/dynamicdialog';


interface Condition {
  description: string;
  confirm: boolean;
}

@Component({
  selector: 'main-conditions',
  standalone: true,
  imports: [
    CommonModule,
    CheckboxModule,
    ButtonModule,
    FormsModule
  ],
  template: `
  <div class="md:px-6">
    <div>
      La Mesa de Partes Electrónica es un sistema de información que permitirá a los ciudadanos el registro de las denuncias, así como el ingreso de documentos relativos a casos ya existentes.
    </div>
    <div class="font-semibold text-900">
      Para continuar, <a href="#">lea y acepte</a> los siguientes puntos:
    </div>
    <ul class="pl-3">
      <li *ngFor="let condition of conditions">
        <div class="flex flex-column align-items-start md:flex-row md:align-items-center justify-content-between">
          <p class="md:w-30rem">{{ condition.description }}</p>
          <p-checkbox
            [(ngModel)]="condition.confirm"
            [binary]="true" inputId="binary"
            class="text-900 font-semibold"
            label="De acuerdo"
          ></p-checkbox>
        </div>
      </li>
    </ul>

    <div class="flex flex-column md:flex-row justify-content-between align-items-center py-6">
      <p-button
        class="mb-3 md:mb-0"
        styleClass="p-button-lg p-button-outlined font-semibold"
        label="Cancelar"
        (onClick)="ref.close()"
      ></p-button>
      <p-button
        styleClass="p-button-lg bg-secondary font-semibold"
        icon="pi pi-arrow-right"
        iconPos="right"
        label="Continuar"
        [disabled]="acceptedConditions"
        (onClick)="registerComplaint()"
      ></p-button>
    </div>
  </div>
  `,
  styles: [
  ]
})
export class ConditionsModalComponent {
  public conditions: Array<Condition> = [
    {
      confirm: false,
      description: 'Todo aquel que presente una denuncia falsa será investigado y sancionado con el rigor de la ley.'
    },
    {
      confirm: false,
      description: 'Dichas denuncias serán enviadas de manera digital a la bandeja fiscal donde el Fiscal tomará conocimiento de las denuncias que son presentados por los ciudadanos.'
    },
    {
      confirm: false,
      description: 'El registro mediante Mesa de Partes Electrónicas estará habilitado las 24 horas, los 7 días de la semana, pero recuerde que la denuncia será atendida en días hábiles en el horario de 8:00 AM a 05:00 PM.'
    },
    {
      confirm: false,
      description: 'El documento principal y/o sus anexos deben ser legibles.'
    },
    {
      confirm: false,
      description: 'Al finalizar el registro de la denuncia o un documento para un caso existente, recibirá un e-mail con el resumen de la información registrada en la Mesa de Partes Electrónica.'
    },
  ]

  constructor(
    public ref: DynamicDialogRef,
    private router: Router
  ) {}

  get acceptedConditions(): boolean {
    for (const condition of this.conditions)
      if(!condition.confirm) return true
    return false
  }

  registerComplaint(): void {
    this.router.navigate(['realizar-denuncia'])
  }

}
