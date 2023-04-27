import { Routes } from '@angular/router';
// import { IsAuthGuard } from './core/guards/is-auth.guard';
// import { IsUnauthGuard } from './core/guards/is-unauth.guard';
import { VerificationComponent } from "@shared/components/verification/verification.component";
import { PersonalDataComponent } from "@shared/components/personal-data/personal-data.component";
import { ComplaintDataComponent } from "@modules/complaint/components/complaint-data/complaint-data.component";

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./modules/main/main.component').then(m => m.MainComponent)
  },
  {
    path: 'realizar-denuncia',
    loadComponent: () => import('./modules/complaint/complaint.component').then(m => m.ComplaintComponent),
    children: [
      { path: '', redirectTo: 'verificacion', pathMatch: 'full' },
      {
        path: 'verificacion',
        component: VerificationComponent
      },
      {
        path: 'datos-personales',
        component: PersonalDataComponent
      },
      {
        path: 'datos-denuncia',
        component: ComplaintDataComponent
      }
    ]
  }
  // {
  //   path: 'auth',
  //   // loadChildren: () =>
  //   // import('@core/layouts/auth/auth.module').then((m) => m.AuthModule),
  //   canActivate: [IsUnauthGuard],
  //   loadChildren: () =>
  //     import('./core/layouts/auth/auth-routes').then((m) => m.routes),
  // },
  // {
  //   path: 'dashboard',
  //   canActivate: [IsAuthGuard],
  //   loadChildren: () =>
  //     import('./core/layouts/dashboard/dashboard-routes').then((m) => m.routes),
  // },
];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule],
// })
// export routes
