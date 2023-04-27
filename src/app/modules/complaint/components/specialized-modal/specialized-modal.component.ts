import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
//primeng
import {DynamicDialogRef, DynamicDialogConfig} from 'primeng/dynamicdialog';
import { RippleModule } from 'primeng/ripple';

@Component({
  selector: 'complaint-specialized-modal',
  standalone: true,
  imports: [
    RippleModule,
    CommonModule
  ],
  template: `
    <div class="flex flex-wrap justify-content-center pb-3">
      <div
        pRipple
        class="w-26rem h-10rem cursor-pointer select-none flex flex-column m-3" *ngFor="let item of config.data"
        (click)="selectProsecutor(item.id)"
      >
        <div class="bg-secondary h-3rem border-round-top-lg font-semibold p-3 flex justify-content-between align-items-center line-height-1">
          <span>{{ item.name }}</span>
          <i class="pi pi-info-circle ml-3"></i>
        </div>
        <div class="surface-card p-3 border-round-bottom-lg text-primary text-sm flex-grow-1">{{ item.description }}</div>
      </div>
    </div>
  `
})
export class SpecializedModalComponent {

  constructor(
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig
  ) {}

  public selectProsecutor(id: string|number): void {
    this.ref.close(id)
  }

}
