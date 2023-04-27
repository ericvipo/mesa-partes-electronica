import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
//primeng
import { AccordionModule } from 'primeng/accordion';
//components
import { ScenePlaceComponent } from "../scene-place/scene-place.component";
import { SceneDetailsComponent } from "../scene-details/scene-details.component";

@Component({
  selector: 'app-complaint-data',
  standalone: true,
  imports: [
    AccordionModule,
    CommonModule,
    ScenePlaceComponent,
    SceneDetailsComponent
  ],
  templateUrl: './complaint-data.component.html',
  styles: [
  ]
})
export class ComplaintDataComponent {

}
