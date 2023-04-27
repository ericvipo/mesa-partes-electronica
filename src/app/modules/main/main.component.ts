import { CommonModule } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
/**
 * PrimeNG
 */
//modulos
import { MessagesModule } from "primeng/messages";
import { ButtonModule } from "primeng/button";
import { DynamicDialogModule } from "primeng/dynamicdialog";
//
import { Message } from 'primeng/api'
import { DialogService, DynamicDialogRef } from "primeng/dynamicdialog";

//mpfn
import { CmpLibModule } from "@ng-mpfn/cmp-lib";
import { 
  iFilePen,
  iPrintMagnifyingGlass
} from "@ng-mpfn/icojs-regular";

//components
import { ConditionsModalComponent } from "./components/conditions-modal/conditions-modal.component";
//interfaces
import { FnIcon } from "@shared/interfaces/fn-icon";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  standalone: true,
  imports: [
    //components
    ConditionsModalComponent,
    //modules
    MessagesModule,
    CommonModule,
    ButtonModule,
    CmpLibModule,
    DynamicDialogModule
  ],
  providers: [DialogService]
})

export class MainComponent implements OnDestroy {

  public refModal: DynamicDialogRef;

  public messages: Message[] = [
    {
      severity: 'error',
      detail: 'Si el hecho que pretendes denunciar ocurrió en las últimas horas y existe flagrancia (se tiene un detenido) por favor acércate a presentar tu denuncia inmediatamente a la comisaría más cercana o a la fiscalía de turno.'
    }
  ];

  public iFilePen: FnIcon  = iFilePen as FnIcon
  public iPrintMagnifyingGlass: FnIcon = iPrintMagnifyingGlass as FnIcon

  constructor(public dialogService: DialogService) {}

  //Modal de condiciones
  showConditions(): void {
    this.refModal = this.dialogService.open(ConditionsModalComponent, {
      header: 'Ten en cuenta lo siguiente',
      contentStyle: {'max-width':'800px'}
    })
  }

  ngOnDestroy() {
    if(this.refModal)
      this.refModal.close()
  }

  
}
