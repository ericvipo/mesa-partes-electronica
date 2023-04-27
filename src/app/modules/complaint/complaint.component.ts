import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
//primeng
import { MessagesModule } from "primeng/messages";
import { ButtonModule } from "primeng/button";
import { StepsModule } from 'primeng/steps';
import { Message } from 'primeng/api'


@Component({
  selector: 'app-complaint',
  standalone: true,
  imports: [
    CommonModule,
    MessagesModule,
    ButtonModule,
    StepsModule,
    RouterModule
  ],
  templateUrl: './complaint.component.html',
  styles: [
  ]
})
export class ComplaintComponent {

  public messages: Message[] = [
    {
      severity: 'error',
      detail: 'Si el hecho que pretendes denunciar ocurrió en las últimas horas y existe flagrancia (se tiene un detenido) por favor acércate a presentar tu denuncia inmediatamente a la comisaría más cercana o a la fiscalía de turno.'
    }
  ];

  public steps = [
    {
      label: 'Verificación',
      routerLink: 'verificacion'
    },
    {
      label: 'Datos pesonales',
      routerLink: 'datos-personales'
    },
    {
      label: 'Datos de la denuncia',
      routerLink: 'datos-denuncia'
    },
  ]

}
