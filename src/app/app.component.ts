import { Component, OnDestroy } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
//components
import { HeaderComponent } from "@shared/components/header/header.component";
import { FooterComponent } from "@shared/components/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    //modules
    CommonModule,
    RouterModule,
    //components
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnDestroy {
  title = 'mpe-ng';
  date: any;
  subscription: Subscription;

  constructor(
    private primeNGConfig: PrimeNGConfig,
    private translateService: TranslateService
  ) {
    this.translateService.setDefaultLang('es');
    this.translateService.use('es');

    this.subscription = this.translateService
      .stream('primeng')
      .subscribe((data) => {
        this.primeNGConfig.setTranslation(data);
      });

    this.primeNGConfig.ripple = true
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
